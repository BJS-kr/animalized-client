import { message } from "../../wailsjs/go/models";
import { CELL_SIZE } from "../constansts";
import proto from "../proto";
import type { Attack, Character, CharacterInputs, GameContext } from "../types";

export function applyNextInput(gameContext: GameContext, character: Character) {
  if (!character.isProcessing) {
    const characterInput = gameContext.inputs
      .get(character.userId)
      ?.inputs.shift();

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
      const targetAttack = gameContext.attacks.find(
        (attack) =>
          attack.id === characterInput?.op?.projectileId &&
          attack.remainDistance > 0
      );
      if (!targetAttack) {
        return;
      }
      targetAttack.remainDistance = 0;

      if (characterInput.op.targetTerrainId) {
        const targetTerrain =
          gameContext.terrains[characterInput.op.targetTerrainId];

        if (!targetTerrain) {
          return;
        }

        if (targetTerrain.type === proto.Terrain.TerrainType.ROCK) {
          switch (targetTerrain.state) {
            case proto.Terrain.TerrainState.SOLID:
              targetTerrain.state = proto.Terrain.TerrainState.DAMAGED;
              break;
            case proto.Terrain.TerrainState.DAMAGED:
              targetTerrain.state = proto.Terrain.TerrainState.VULNERABLE;
              break;
            case proto.Terrain.TerrainState.VULNERABLE:
              targetTerrain.state = proto.Terrain.TerrainState.DESTROYED;
              break;
            case proto.Terrain.TerrainState.DESTROYED:
              break;
            default:
              console.warn("unexpected terrain state");
          }
        }
      } else {
        character.isHit = true;
      }

      gameContext.hitMap.delete(characterInput.op.projectileId!);
    }
  }
}
