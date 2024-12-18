import { message } from "../../wailsjs/go/models";
import { CELL_SIZE } from "../constansts";
import proto from "../proto";
import type { Attack, Character, CharacterInputs } from "../types";

export function applyNextInput(
  inputs: CharacterInputs,
  character: Character,
  attacks: Attack[],
  terrains: proto.ITerrain[]
) {
  if (!character.isProcessing) {
    const characterInput = inputs.get(character.userId)?.inputs.shift();

    if (!characterInput) {
      return;
    }
    if (characterInput.kind !== "op") {
      alert("character input kind is not op");
      return;
    }
    if (!characterInput.op) {
      alert("character input op is not found");
      return;
    }

    character.isProcessing = true;

    if (characterInput.op.type === proto.Operation.OperationType.MOVE) {
      switch (characterInput.op.direction) {
        case proto.Operation.Direction.LEFT:
          character.goalPosition.x -= CELL_SIZE;

          break;
        case proto.Operation.Direction.RIGHT:
          character.goalPosition.x += CELL_SIZE;

          break;
        case proto.Operation.Direction.UP:
          character.goalPosition.y -= CELL_SIZE;

          break;
        case proto.Operation.Direction.DOWN:
          character.goalPosition.y += CELL_SIZE;

          break;
        default:
          throw new Error("unexpected move direction");
      }
    } else if (
      characterInput.op.type === proto.Operation.OperationType.ATTACK
    ) {
      character.isAttacking = true;
    } else if (characterInput.op.type === proto.Operation.OperationType.HIT) {
      const targetAttack = attacks.find(
        (attack) =>
          attack.id === characterInput?.op?.projectileId &&
          attack.remainDistance > 0
      );
      if (!targetAttack) {
        return;
      }
      targetAttack.remainDistance = 0;
      character.isHit = true;
    }
  }
}
