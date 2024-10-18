import { SendInput } from "../../wailsjs/go/main/App";
import { message } from "../../wailsjs/go/models";
import { INPUT_DIRECTION, INPUT_TYPE } from "../constansts";
import type { Character } from "../types";

export const handleKeyDown =
  (character: Character) => async (event: KeyboardEvent) => {
    event.preventDefault();

    if (character.isProcessing) {
      return;
    }

    const input = new message.Input();
    input.user_id = character.userId;

    switch (event.key) {
      case "ArrowRight":
        input.type = INPUT_TYPE.MOVE;
        input.direction = INPUT_DIRECTION.RIGHT;
        break;
      case "ArrowLeft":
        input.type = INPUT_TYPE.MOVE;
        input.direction = INPUT_DIRECTION.LEFT;
        break;
      case "ArrowUp":
        input.type = INPUT_TYPE.MOVE;
        input.direction = INPUT_DIRECTION.UP;
        break;
      case "ArrowDown":
        input.type = INPUT_TYPE.MOVE;
        input.direction = INPUT_DIRECTION.DOWN;
        break;
      case "a":
      case "A":
      case "ㅁ":
        input.type = INPUT_TYPE.ATTACK;
        break;
      default:
        console.warn("unhandled key: ", event.key);
    }

    await SendInput(input);
  };
