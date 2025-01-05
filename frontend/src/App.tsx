import React, { useRef, useEffect, useState } from "react";
import { CANVAS_SIZE } from "./constansts";
import type { GameContext } from "./types";
import { handle } from "./handlers/handle";
import { Lobby } from "./lobby";
import { Room } from "./room";
import { EventsOn, EventsOff } from "../wailsjs/runtime/runtime";
import { encode } from "./common/encode";
import { LogIn, SendInput } from "../wailsjs/go/main/App";
import proto from "./proto";
import { handleJoin } from "./handlers/join";
import { handleKeyDown } from "./handlers/keydown";
import { toByteArray } from "base64-js";
import { makeFireball } from "./common/fireball";

export const gameContext: GameContext = {
  terrains: [],
  characters: [],
  inputs: new Map(),
  hitMap: new Map(),
  attacks: [],
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [maxUsers, setMaxUsers] = useState(1);
  const [isInGame, setIsInGame] = useState(false);
  const [roomUserNames, setRoomUserNames] = useState<string[]>([]);
  const [lobbyStatus, setLobbyStatus] = useState<proto.ILobby>();
  const [userId, setUserId] = useState("");
  const [winnerId, setWinnerId] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const cancelRef = useRef<boolean>(false);
  const reqIdRef = useRef<number>(0);
  const fireball = makeFireball();
  const grass = new Image();
  grass.src = "/sprites/terrains/grass.png";

  useEffect(() => {
    if (canvasRef.current) {
      ctxRef.current = canvasRef.current.getContext("2d");

      handle(
        ctxRef.current!,
        CANVAS_SIZE,
        gameContext,
        fireball,
        userId,
        null,
        grass,
        cancelRef,
        reqIdRef
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

    if (!decodedInput || !decodedInput.userId) return;

    switch (decodedInput.kind) {
      case "lobby":
        switch (decodedInput.lobby!.type) {
          case proto.Lobby.LobbyType.STATE:
            setLobbyStatus(decodedInput.lobby as proto.Lobby);
            break;
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
        switch (decodedInput.room!.type) {
          case proto.Room.RoomType.STATE:
            setMaxUsers(decodedInput.room?.roomState?.maxUsers || 1);
            setRoomUserNames(decodedInput.room?.roomState?.userIds || []);
            break;
          case proto.Room.RoomType.START:
            if (decodedInput.room?.roomName === roomName) {
              gameContext.terrains = decodedInput.room!.terrains!;

              setIsInGame(true);
              for (const name of roomUserNames) {
                handleJoin(
                  name,
                  gameContext.characters,
                  gameContext.inputs,
                  decodedInput.room?.userCharacterTypes?.[name]!
                );
              }

              const userCharacter = gameContext.characters.find(
                (c) => c.userId === userId
              );

              if (!userCharacter) {
                console.error(
                  "user character not found",
                  userId,
                  roomUserNames
                );
                alert("user character not found");
                return;
              }

              document.addEventListener(
                "keydown",
                handleKeyDown(userCharacter, gameContext.terrains)
              );
            }

            break;
        }
        break;
      case "op":
        switch (decodedInput.op!.type) {
          case proto.Operation.OperationType.MOVE:
            gameContext.inputs
              .get(decodedInput.userId)!
              .inputs.push(decodedInput);
            break;
          case proto.Operation.OperationType.ATTACK:
            gameContext.inputs
              .get(decodedInput.userId)!
              .inputs.push(decodedInput);
            break;
          case proto.Operation.OperationType.HIT:
            if (
              !decodedInput.op!.targetUserId &&
              decodedInput.op!.targetTerrainId
            ) {
              gameContext.inputs
                .get(decodedInput.userId)!
                .inputs.push(decodedInput);
            } else {
              gameContext.inputs
                .get(decodedInput.op!.targetUserId!)!
                .inputs.push(decodedInput);
            }
            break;
        }
        break;
      case "gameResult":
        if (decodedInput.gameResult!.roomName === roomName) {
          setWinnerId(decodedInput.gameResult!.winnerId ?? "");
          setIsInGame(false);
          setRoomName("");
          gameContext.characters.length = 0;
          gameContext.inputs.clear();
          gameContext.terrains.length = 0;
          cancelRef.current = true;
        }
        break;
      case "error":
        if (decodedInput.error!.userId === userId) {
          alert(decodedInput.error!.message);
        }
        break;
      default:
        console.error("unhandled input kind", decodedInput.kind);
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
    return (
      <Lobby lobbyStatus={lobbyStatus} userId={userId} winnerId={winnerId} />
    );
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
