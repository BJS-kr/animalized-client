import { SendInput } from "../../wailsjs/go/main/App";
import { encode } from "../common/encode";
import { input as proto } from "../proto/compiled";

import type { Character } from "../types";

export const handleKeyDown =
  (character: Character) => async (event: KeyboardEvent) => {
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
        operation.type = proto.Operation.OperationType.MOVE;
        operation.direction = proto.Operation.Direction.RIGHT;
        break;
      case "ArrowLeft":
        operation.type = proto.Operation.OperationType.MOVE;
        operation.direction = proto.Operation.Direction.LEFT;
        break;
      case "ArrowUp":
        operation.type = proto.Operation.OperationType.MOVE;
        operation.direction = proto.Operation.Direction.UP;
        break;
      case "ArrowDown":
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

    await SendInput(encode(input));
  };
