package main

import (
	"animalized/message"
	"context"
	"encoding/base64"
	"fmt"
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

	input := new(message.Input)
	err = proto.Unmarshal(decoded, input)

	if err != nil {
		return err
	}

	fmt.Println("send input:", input)
	fmt.Println("decoded: ", decoded)
	data := append(decoded, INPUT_PACKET_DELIMITER)
	fmt.Println("chunk: ", data)
	_, err = conn.Write(data)

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

	_, err = c.Write(append(message, INPUT_PACKET_DELIMITER))

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
