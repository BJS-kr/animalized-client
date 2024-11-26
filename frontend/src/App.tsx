import React, { useRef, useEffect, useState } from "react";
import { CANVAS_SIZE, LOBBY_TYPE, ROOM_TYPE } from "./constansts";
import type { Character, CharacterInputs } from "./types";
import { handleInputs } from "./handlers/inputs";
import { handleJoinRoom, Lobby } from "./lobby";
import { Room } from "./room";
import { EventsOn, EventsOff } from "../wailsjs/runtime/runtime";

import { encode } from "./common/encode";
import { LogIn, SendInput } from "../wailsjs/go/main/App";
import proto from "./proto";

export const inputs: CharacterInputs = new Map();
export const characters: Character[] = [];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [maxUsers, setMaxUsers] = useState(1);
  const [isInGame, setIsInGame] = useState(false);
  const [roomUserNames, setRoomUserNames] = useState<string[]>([]);
  const [lobbyStatus, setLobbyStatus] = useState<proto.ILobby>();
  const [userId, setUserId] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const fireball = new Image();

  const sendLobbyStateInput = () => {
    const lobbyStatusInput = new proto.Input();
    const lobby = new proto.Lobby();

    lobby.type = LOBBY_TYPE.STATE;
    lobbyStatusInput.userId = userId;
    lobbyStatusInput.kind = "lobby";
    lobbyStatusInput.lobby = lobby;

    SendInput(encode(lobbyStatusInput));
  };

  fireball.src = "/src/sprites/fireball/fireball.png";
  fireball.width = 30;
  fireball.height = 20;

  useEffect(() => {
    if (canvasRef.current) {
      ctxRef.current = canvasRef.current.getContext("2d");
    }
  });
  ``;

  useEffect(() => {
    if (ctxRef.current && canvasRef.current) {
      handleInputs(
        ctxRef.current!,
        CANVAS_SIZE,
        inputs,
        characters,
        [],
        fireball
      );
    }
  }, [isLoggedIn]);

  const handleLogin = async () => {
    if (userId) {
      if (await LogIn(userId)) {
        setIsLoggedIn(true);
        sendLobbyStateInput();
      }
    } else {
      alert("이름을 입력해주세요");
    }
  };

  EventsOff("input");
  EventsOn("input", (input) => {
    const decodedInput = proto.Input.decode(new Uint8Array(input));

    console.dir(decodedInput, { depth: null });
    console.log("kind:!!", decodedInput.kind);

    if (!decodedInput || !decodedInput.userId) return;

    switch (decodedInput.kind) {
      case "lobby":
        switch (decodedInput.lobby!.type) {
          case LOBBY_TYPE.STATE:
            setLobbyStatus(decodedInput.lobby as proto.Lobby);
          case LOBBY_TYPE.JOIN_ROOM:
            if (decodedInput.userId === userId) {
              if (!decodedInput.lobby?.roomName) return;

              setRoomName(decodedInput.lobby.roomName);
            }
            break;
          case LOBBY_TYPE.QUIT_ROOM:
            if (decodedInput.userId === userId) {
              setRoomName("");
              setMaxUsers(0);
            }
            break;
        }
        break;
      case "room":
        console.log("room input", decodedInput);
        switch (decodedInput.room!.type) {
          case ROOM_TYPE.STATE:
            console.log(
              "room state",
              decodedInput.room?.roomState?.maxUsers,
              decodedInput.room?.roomState?.userIds
            );
            setMaxUsers(decodedInput.room?.roomState?.maxUsers || 1);
            setRoomUserNames(decodedInput.room?.roomState?.userIds || []);
            break;
        }
        break;
      case "op":
        setIsInGame(true);
        break;

      default:
        console.error("unknown input kind", decodedInput.kind);
    }
  });

  if (!isLoggedIn) {
    return (
      <div>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="enter your name"
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  } else if (!roomName) {
    return <Lobby lobbyStatus={lobbyStatus} userId={userId} />;
  } else if (roomName) {
    return (
      <Room
        roomName={roomName}
        maxUsers={maxUsers}
        userNames={roomUserNames}
        userId={userId}
      />
    );
  } else {
    return (
      <canvas
        id="canvas"
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        ref={canvasRef}
      ></canvas>
    );
  }
}

export default App;
