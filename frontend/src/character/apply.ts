import { message } from "../../wailsjs/go/models";
import { CELL_SIZE, DIRECTION, OPERATION_TYPE } from "../constansts";
import type { Character, CharacterInputs } from "../types";

export function applyNextInput(inputs: CharacterInputs, character: Character) {
  if (!character.isProcessing) {
    const characterInput = inputs.get(character.userId)?.inputs.shift();

    if (characterInput && characterInput.kind !== "op") return;

    if (characterInput) {
      character.isProcessing = true;

      if (characterInput.op?.type === OPERATION_TYPE.MOVE) {
        switch (characterInput.op.direction) {
          case DIRECTION.LEFT:
            character.goalDimension.x -= CELL_SIZE;
            break;
          case DIRECTION.RIGHT:
            character.goalDimension.x += CELL_SIZE;
            break;
          case DIRECTION.UP:
            character.goalDimension.y -= CELL_SIZE;
            break;
          case DIRECTION.DOWN:
            character.goalDimension.y += CELL_SIZE;
            break;
          default:
            throw new Error("unexpected move direction");
        }
      } else if (characterInput.op?.type === OPERATION_TYPE.ATTACK) {
        character.isAttacking = true;
      }
    }
  }
}
