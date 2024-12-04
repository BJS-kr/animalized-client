import React, { useRef, useEffect, useState } from "react";
import { CANVAS_SIZE } from "./constansts";
import type { Attack, Character, CharacterInputs } from "./types";
import { handleInputs } from "./handlers/inputs";
import { handleJoinRoom, Lobby } from "./lobby";
import { Room } from "./room";
import { EventsOn, EventsOff } from "../wailsjs/runtime/runtime";
import { encode } from "./common/encode";
import { LogIn, SendInput } from "../wailsjs/go/main/App";
import proto from "./proto";
import { handleJoin } from "./handlers/join";
import { handleKeyDown } from "./handlers/keydown";
import { toByteArray } from "base64-js";

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

  fireball.src = "/sprites/fireball/fireball.png";
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
      const attacks: Attack[] = [];

      handleInputs(
        ctxRef.current!,
        CANVAS_SIZE,
        inputs,
        characters,
        attacks,
        fireball,
        userId,
        null
      );
    }
  }, [isInGame]);

  const sendLobbyStateInput = () => {
    const lobbyStatusInput = new proto.Input();
    const lobby = new proto.Lobby();

    lobby.type = proto.Lobby.LobbyType.STATE;
    lobbyStatusInput.userId = userId;
    lobbyStatusInput.kind = "lobby";
    lobbyStatusInput.lobby = lobby;

    SendInput(encode(lobbyStatusInput));
  };

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
  EventsOn("input", (msg) => {
    const decodedInput = proto.Input.decode(toByteArray(msg));

    console.dir(decodedInput, { depth: null });
    console.log("kind:!!", decodedInput.kind);

    if (!decodedInput || !decodedInput.userId) return;

    switch (decodedInput.kind) {
      case "lobby":
        switch (decodedInput.lobby!.type) {
          case proto.Lobby.LobbyType.STATE:
            setLobbyStatus(decodedInput.lobby as proto.Lobby);
          case proto.Lobby.LobbyType.JOIN_ROOM:
            if (decodedInput.userId === userId) {
              if (!decodedInput.lobby?.roomName) return;

              setRoomName(decodedInput.lobby.roomName);
            }
            break;
          case proto.Lobby.LobbyType.QUIT_ROOM:
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
          case proto.Room.RoomType.STATE:
            setMaxUsers(decodedInput.room?.roomState?.maxUsers || 1);
            setRoomUserNames(decodedInput.room?.roomState?.userIds || []);
            break;
          case proto.Room.RoomType.START:
            if (decodedInput.room?.roomName === roomName) {
              setIsInGame(true);
            }

            console.log(
              "decodedInput.room?.userCharacterTypes",
              decodedInput.room?.userCharacterTypes
            );

            for (const name of roomUserNames) {
              handleJoin(
                name,
                characters,
                inputs,
                decodedInput.room?.userCharacterTypes?.[name]!
              );
            }

            const userCharacter = characters.find((c) => c.userId === userId);

            if (!userCharacter) {
              console.error("user character not found", userId, roomUserNames);
              alert("user character not found");
              return;
            }

            document.addEventListener("keydown", handleKeyDown(userCharacter));

            break;
        }
        break;
      case "op":
        switch (decodedInput.op!.type) {
          case proto.Operation.OperationType.MOVE:
            inputs.get(decodedInput.userId)!.inputs.push(decodedInput);
            break;
          case proto.Operation.OperationType.ATTACK:
            inputs.get(decodedInput.userId)!.inputs.push(decodedInput);
            break;
          case proto.Operation.OperationType.HIT:
            inputs
              .get(decodedInput.op!.targetUserId!)!
              .inputs.push(decodedInput);
            break;
        }
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
  } else if (roomName && !isInGame) {
    return (
      <Room
        roomName={roomName}
        maxUsers={maxUsers}
        userNames={roomUserNames}
        userId={userId}
      />
    );
  } else if (isInGame) {
    return (
      <canvas
        id="canvas"
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        ref={canvasRef}
      ></canvas>
    );
  } else {
    return <div>unknown state</div>;
  }
}

export default App;
