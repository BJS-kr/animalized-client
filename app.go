package main

import (
	"animalized/message"
	"context"
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

func (a *App) SendInput(msg []byte) error {
	input := new(message.Input)
	err := proto.Unmarshal(msg, input)

	if err != nil {
		return err
	}

	fmt.Println("send input:", input)

	_, err = conn.Write(append(msg, '$'))

	if err != nil {
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

	_, err = c.Write(append(message, '$'))

	if err != nil {
		return err
	}
	conn = c

	go a.ReceiveInput()

	return nil
}

func (a *App) ReceiveInput() {
	ps := NewStore()
	intSlice := make([]int, 0, BUFFER_SIZE)

	for {
		intSlice = intSlice[:0]
		msg, err := ps.ParseMessageBytes(conn)

		if err != nil {
			slog.Error(err.Error())
			return
		}

		// 굳이 int slice로 변환하는 이유
		// []byte를 그대로 보내면 jsonify할 때 자동으로 base64 인코딩 되어서 가버림(uint8도 마찬가지)..
		// FE에서 그대로 변환할 수 있게 각 바이트를 전부 int로 변환
		// FE에서는 받은 number[]를 그대로 Uint8Array로 변환해서 사용
		for _, b := range msg {
			intSlice = append(intSlice, int(b))
		}

		runtime.EventsEmit(a.ctx, "input", intSlice)
	}
}
