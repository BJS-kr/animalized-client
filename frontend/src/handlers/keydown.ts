import { SendInput } from "../../wailsjs/go/main/App";
import { message } from "../../wailsjs/go/models";
import { encode } from "../common/encode";
import { CELL_SIZE } from "../constansts";
import { input as proto } from "../proto/compiled";

import type { Character, Position } from "../types";

let lastKeyDown = Date.now();

function isBlocked(
  goalPosition: Position,
  direction: proto.Operation.Direction,
  terrains: proto.ITerrain[]
) {
  const pos = {
    ...goalPosition,
  };

  switch (direction) {
    case proto.Operation.Direction.LEFT:
      pos.x -= CELL_SIZE;
      break;
    case proto.Operation.Direction.RIGHT:
      pos.x += CELL_SIZE;
      break;
    case proto.Operation.Direction.UP:
      pos.y -= CELL_SIZE;
      break;
    case proto.Operation.Direction.DOWN:
      pos.y += CELL_SIZE;
      break;
  }

  return !!terrains.find((terrain) => {
    if (
      !terrain ||
      !terrain.position ||
      terrain.state === proto.TerrainState.DESTROYED
    )
      return false;
    return terrain.position!.x === pos.x && terrain.position!.y === pos.y;
  });
}

export const handleKeyDown =
  (character: Character, terrains: proto.ITerrain[]) =>
  async (event: KeyboardEvent) => {
    if (Date.now() - lastKeyDown < 100) {
      return;
    }

    event.preventDefault();

    if (character.isProcessing) {
      return;
    }

    const input = new proto.Input();
    const operation = new proto.Operation();
    input.userId = character.userId;
    input.op = operation;
    input.kind = "op";

    switch (event.key) {
      case "ArrowRight":
        if (
          isBlocked(
            character.goalPosition,
            proto.Operation.Direction.RIGHT,
            terrains
          )
        ) {
          return;
        }

        operation.type = proto.Operation.OperationType.MOVE;
        operation.direction = proto.Operation.Direction.RIGHT;
        break;
      case "ArrowLeft":
        if (
          isBlocked(
            character.goalPosition,
            proto.Operation.Direction.LEFT,
            terrains
          )
        ) {
          return;
        }

        operation.type = proto.Operation.OperationType.MOVE;
        operation.direction = proto.Operation.Direction.LEFT;
        break;
      case "ArrowUp":
        if (
          isBlocked(
            character.goalPosition,
            proto.Operation.Direction.UP,
            terrains
          )
        ) {
          return;
        }

        operation.type = proto.Operation.OperationType.MOVE;
        operation.direction = proto.Operation.Direction.UP;
        break;
      case "ArrowDown":
        if (
          isBlocked(
            character.goalPosition,
            proto.Operation.Direction.DOWN,
            terrains
          )
        ) {
          return;
        }

        operation.type = proto.Operation.OperationType.MOVE;
        operation.direction = proto.Operation.Direction.DOWN;
        break;
      case "a":
      case "A":
      case "ㅁ":
        operation.type = proto.Operation.OperationType.ATTACK;
        break;
      default:
        console.warn("unhandled key: ", event.key);
    }

    lastKeyDown = Date.now();

    await SendInput(encode(input));
  };
