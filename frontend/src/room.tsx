import React from "react";
import proto from "./proto";
import { SendInput } from "../wailsjs/go/main/App";
import { encode } from "./common/encode";

type RoomProps = {
  roomName: string;
  maxUsers: number;
  userNames: string[];
  userId: string;
};

export const Room: React.FC<RoomProps> = ({
  roomName,
  maxUsers,
  userNames,
  userId,
}) => {
  const handleQuitRoom = () => {
    const quitRoomInput = new proto.Input();
    const room = new proto.Room();

    quitRoomInput.userId = userId;
    quitRoomInput.kind = "room";
    room.type = proto.Room.RoomType.QUIT;
    room.roomName = roomName;
    quitRoomInput.room = room;

    SendInput(encode(quitRoomInput));
  };

  const handleStart = () => {
    const startInput = new proto.Input();
    const room = new proto.Room();

    room.roomName = roomName;
    startInput.userId = userId;
    startInput.kind = "room";
    room.type = proto.Room.RoomType.START;
    startInput.room = room;

    SendInput(encode(startInput));
  };

  return (
    <div>
      {roomName}
      {userNames.map((name) => (
        <div>{name}</div>
      ))}
      <div>
        current: {userNames.length} / {maxUsers}
      </div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleQuitRoom}>Quit</button>
    </div>
  );
};
