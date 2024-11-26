import React from "react";
import { ROOM_TYPE } from "./constansts";
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
    room.type = ROOM_TYPE.QUIT;
    room.roomName = roomName;
    quitRoomInput.room = room;

    SendInput(encode(quitRoomInput));
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
      <button onClick={handleQuitRoom}>Quit</button>
    </div>
  );
};
