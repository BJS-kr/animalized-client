import React, { useState } from "react";
import proto from "./proto";
import { SendInput } from "../wailsjs/go/main/App";
import { encode } from "./common/encode";

export const handleJoinRoom = (roomName: string, userId: string) => {
  const joinRoomInput = new proto.Input();
  const lobby = new proto.Lobby();
  lobby.type = proto.Lobby.LobbyType.JOIN_ROOM;
  lobby.roomName = roomName;
  joinRoomInput.kind = "lobby";
  joinRoomInput.lobby = lobby;
  joinRoomInput.userId = userId;

  SendInput(encode(joinRoomInput));
};

export const Lobby: React.FC<{
  lobbyStatus: proto.ILobby | undefined;
  userId: string;
  winnerId: string;
}> = ({ lobbyStatus, userId, winnerId }) => {
  const [roomName, setRoomName] = useState("");
  const [maxUsers, setMaxUsers] = useState(1);

  const handleCreateRoom = () => {
    if (roomName.length < 4) {
      alert("room name must be longer than 4 characters");
      return;
    }

    if (maxUsers < 1) {
      alert("room must have at least 1 users");
      return;
    }

    const createRoomInput = new proto.Input();
    const lobby = new proto.Lobby();
    lobby.type = proto.Lobby.LobbyType.CREATE_ROOM;
    lobby.roomName = roomName;
    lobby.maxUsers = maxUsers;
    createRoomInput.userId = userId;
    createRoomInput.kind = "lobby";
    createRoomInput.lobby = lobby;

    SendInput(encode(createRoomInput));
  };

  return (
    <div>
      <h1>Lobby</h1>
      {winnerId && (
        <div
          style={{
            fontSize: "1.5em",
            fontWeight: "bold",
            color: "#2ecc71",
            padding: "15px",
            margin: "10px 0",
            backgroundColor: "#e8f8f5",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          🏆 Winner was: {winnerId} 🏆
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "15px", color: "#444" }}>
            Create a New Room
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <input
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="Enter room name"
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <input
              type="number"
              value={maxUsers}
              onChange={(e) => setMaxUsers(parseInt(e.target.value))}
              min="2"
              max="10"
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <button
              onClick={handleCreateRoom}
              style={{
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Create Room
            </button>
          </div>
        </div>
      </div>

      {lobbyStatus?.roomStates?.map((roomState) => (
        <div
          key={roomState.roomName}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            margin: "8px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "orange",
          }}
        >
          <div>
            <strong>{roomState.roomName}</strong>
            <span style={{ marginLeft: "8px" }}>
              {roomState.status ===
              proto.RoomState.RoomStatusType.ROOM_STATUS_UNSPECIFIED
                ? "invalid"
                : roomState.status === proto.RoomState.RoomStatusType.WAITING
                ? "waiting"
                : "playing"}
              {roomState.userIds?.length ?? 0}/{roomState.maxUsers ?? "invalid"}
            </span>
          </div>
          <button
            onClick={() => handleJoinRoom(roomState.roomName ?? "", userId)}
            style={{
              padding: "8px 16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Join
          </button>
        </div>
      ))}
    </div>
  );
};
