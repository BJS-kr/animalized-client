import { CELL_SIZE, INPUT_DIRECTION, INPUT_TYPE } from "../constansts";
import type { Character, CharacterInputs } from "../types";

export function applyNextInput(inputs: CharacterInputs, character: Character) {
  if (!character.isProcessing) {
    const characterInput = inputs.get(character.userId)?.inputs.shift();

    if (characterInput) {
      character.isProcessing = true;

      if (characterInput.type === INPUT_TYPE.MOVE) {
        switch (characterInput.direction) {
          case INPUT_DIRECTION.LEFT:
            character.goalDimension.x -= CELL_SIZE;
            break;
          case INPUT_DIRECTION.RIGHT:
            character.goalDimension.x += CELL_SIZE;
            break;
          case INPUT_DIRECTION.UP:
            character.goalDimension.y -= CELL_SIZE;
            break;
          case INPUT_DIRECTION.DOWN:
            character.goalDimension.y += CELL_SIZE;
            break;
          default:
            throw new Error("unexpected move direction");
        }
      } else if (characterInput.type === INPUT_TYPE.ATTACK) {
        character.isAttacking = true;
      }
    }
  }
}
