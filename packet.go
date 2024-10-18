package main

import (
	"animalized/message"
	"bytes"
	"errors"
	"io"
	"net"

	"google.golang.org/protobuf/proto"
)

const (
	BUFFER_SIZE            = 4096
	INPUT_PACKET_DELIMITER = '$'
)

func cutChunk(inputBuf *bytes.Buffer) ([]byte, error) {
	chunk, err := inputBuf.ReadBytes(INPUT_PACKET_DELIMITER)

	if err != nil {
		if errors.Is(err, io.EOF) {
			inputBuf.Write(chunk)
			return chunk, err
		}

		return chunk, err
	}

	return chunk, nil
}

func into[M proto.Message](target M, stripped *[]byte) error {
	if err := proto.Unmarshal(*stripped, target); err != nil {
		return err
	}

	return nil
}

func makeChunk(conn net.Conn, buf *[]byte, inputBuf *bytes.Buffer) (*[]byte, error) {
	for {

		size, err := readInput(buf, conn)

		if err != nil {
			return buf, err
		}

		if err := writeInput((*buf)[:size], inputBuf); err != nil {
			return buf, err
		}

		chunk, err := cutChunk(inputBuf)

		if err != nil {
			if errors.Is(err, io.EOF) {
				continue
			}

			return &chunk, err
		}

		return &chunk, nil
	}
}

func ParseInput(conn net.Conn, buf *[]byte, inputBuf *bytes.Buffer) (*message.Input, error) {
	chunk, err := makeChunk(conn, buf, inputBuf)

	if err != nil {
		return nil, err
	}

	err = stripDelimiter(chunk)

	if err != nil {
		return nil, err
	}

	input := new(message.Input)
	err = into(input, chunk)

	if err != nil {
		return nil, err
	}

	return input, nil
}

func readInput(buf *[]byte, conn net.Conn) (int, error) {
	size, err := conn.Read(*buf)

	if err != nil {
		if errors.Is(err, io.EOF) {
			// 예측된 에러이고, 버퍼 내용은 buf에 쌓였음
			return size, nil
		}

		return size, err
	}

	if size > BUFFER_SIZE {
		return size, errors.New("read size cannot exceed predefined buffer size")
	}

	return size, nil
}

func writeInput(incomingBuf []byte, inputBuf *bytes.Buffer) error {
	if _, err := inputBuf.Write(incomingBuf); err != nil {
		return err
	}

	return nil
}

func stripDelimiter(chunk *[]byte) error {
	c := *chunk
	l := len(c)

	if c[l-1] != INPUT_PACKET_DELIMITER {
		return errors.New("delimiter not on last position")
	}
	*chunk = c[:l-1]
	return nil
}
