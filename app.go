package main

import (
	"animalized/message"
	"bytes"
	"context"
	"encoding/base64"
	"encoding/binary"
	"errors"
	"log/slog"
	"net"

	"github.com/wailsapp/wails/v2/pkg/runtime"

	"google.golang.org/protobuf/proto"
)

const SERVER_PORT = 9988

// App struct
type App struct {
	ctx context.Context
}

var (
	conn    *net.TCPConn
	sizeBuf = make([]byte, 2)
)

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) LogIn(userId string) bool {
	input := &message.Input{
		UserId: userId,
		Kind: &message.Input_Init{
			Init: &message.Init{},
		},
	}

	err := a.OpenConnection(input)

	if err != nil {
		slog.Error(err.Error())
		return false
	}

	return true
}

func (a *App) SendInput(msg string) error {
	decoded, err := base64.StdEncoding.DecodeString(msg)

	if err != nil {
		return err
	}

	if len(decoded) > BUFFER_SIZE {
		return errors.New("packet length must not exceed BUFFER_SIZE")
	}

	binary.BigEndian.PutUint16(sizeBuf, uint16(len(decoded)))
	_, err = conn.Write(bytes.Join([][]byte{sizeBuf, decoded}, nil))

	if err != nil {
		slog.Error(err.Error())
		return err
	}

	return nil
}

func (a *App) OpenConnection(initInput *message.Input) error {
	addr, err := net.ResolveTCPAddr("tcp", "127.0.0.1:9988")

	if err != nil {
		return err
	}
	c, err := net.DialTCP("tcp", nil, addr)

	if err != nil {
		return err
	}

	message, err := proto.Marshal(initInput)

	if err != nil {
		return err
	}

	binary.BigEndian.PutUint16(sizeBuf, uint16(len(message)))

	_, err = c.Write(bytes.Join([][]byte{sizeBuf, message}, nil))

	if err != nil {
		return err
	}
	conn = c

	go a.ReceiveInput()

	return nil
}

func (a *App) ReceiveInput() {
	ps := NewStore()

	for {
		msg, err := ps.ParseMessageBytes(conn)

		if err != nil {
			slog.Error(err.Error())
			return
		}

		runtime.EventsEmit(a.ctx, "input", msg)
	}
}
