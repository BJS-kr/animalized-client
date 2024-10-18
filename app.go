package main

import (
	"animalized/message"
	"bytes"
	"context"
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

type Position struct {
	X int
	Y int
}

type UserState struct {
	Position *Position
	Score    int
}

var conn *net.TCPConn

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
		Type:   1,
		UserId: userId,
	}

	c, err := a.OpenConnection(input)

	if err != nil {
		slog.Error(err.Error())
		return false
	}

	conn = c

	return true
}

func (a *App) SendInput(input *message.Input) error {
	message, err := proto.Marshal(input)

	if err != nil {
		return err
	}

	_, err = conn.Write(append(message, '$'))

	if err != nil {
		return err
	}

	return nil
}

func (a *App) OpenConnection(initInput *message.Input) (*net.TCPConn, error) {
	addr, err := net.ResolveTCPAddr("tcp", "127.0.0.1:9988")

	if err != nil {
		return nil, err
	}
	conn, err := net.DialTCP("tcp", nil, addr)

	if err != nil {
		return nil, err
	}

	message, err := proto.Marshal(initInput)

	if err != nil {
		return nil, err
	}

	_, err = conn.Write(append(message, '$'))

	if err != nil {
		return nil, err
	}

	go a.ReceiveInput()

	return conn, nil
}

func (a *App) ReceiveInput() {
	buf, inputBuf := make([]byte, BUFFER_SIZE), bytes.NewBuffer(nil)
	for {
		if conn == nil {
			continue
		}

		messageInput, err := ParseInput(conn, &buf, inputBuf)

		if err != nil {
			slog.Error(err.Error())
			return
		}

		runtime.EventsEmit(a.ctx, "input", messageInput)
	}
}
