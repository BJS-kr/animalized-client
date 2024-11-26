import { SendInput } from "../../wailsjs/go/main/App";
import { encode } from "../common/encode";

import { OPERATION_TYPE } from "../constansts";
import { DIRECTION } from "../constansts";
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
        operation.type = OPERATION_TYPE.MOVE;
        operation.direction = DIRECTION.RIGHT;
        break;
      case "ArrowLeft":
        operation.type = OPERATION_TYPE.MOVE;
        operation.direction = DIRECTION.LEFT;
        break;
      case "ArrowUp":
        operation.type = OPERATION_TYPE.MOVE;
        operation.direction = DIRECTION.UP;
        break;
      case "ArrowDown":
        operation.type = OPERATION_TYPE.MOVE;
        operation.direction = DIRECTION.DOWN;
        break;
      case "a":
      case "A":
      case "ㅁ":
        operation.type = OPERATION_TYPE.ATTACK;
        break;
      default:
        console.warn("unhandled key: ", event.key);
    }

    await SendInput(encode(input));
  };
