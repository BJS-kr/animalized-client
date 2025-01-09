import { SendInput } from "../../wailsjs/go/main/App";
import { message } from "../../wailsjs/go/models";
import { encode } from "../common/encode";
import { ATTACK_WIDTH, PROJECTILE_SPEED } from "../constansts";
import proto from "../proto";
import { Attack, Character, GameContext, HitRange } from "../types";

function isCharacter(
  collidable: Character | proto.ITerrain
): collidable is Character {
  return !!(collidable as Character).userId;
}

export async function handleCollision(
  gameContext: GameContext,
  attack: Attack,
  collidable: Character | (proto.ITerrain & { id: number })
) {
  const hitRange = determineHitRange(attack);

  if (
    attack.count > 0 &&
    collidable.position!.y === attack.position.y &&
    collidable.position!.x! >= hitRange[0] &&
    collidable.position!.x! <= hitRange[1]
  ) {
    const input = new proto.Input();
    const operation = new proto.Operation();
    input.userId = attack.userId;
    input.kind = "op";
    input.op = operation;

    operation.type = proto.Operation.OperationType.HIT;
    operation.hitRange = new proto.Operation.HitRange({
      leftBottom: new proto.Position({
        x: hitRange[0],
        y: attack.position.y,
      }),
      rightTop: new proto.Position({
        x: hitRange[1],
        y: attack.position.y,
      }),
    });

    if (isCharacter(collidable)) {
      operation.targetUserId = collidable.userId;
    } else {
      operation.targetTerrainId = collidable.id;
    }

    operation.projectileId = attack.id;

    SendInput(encode(input));
  }
}

export function determineHitRange(attack: Attack) {
  const hitRange: HitRange = [-1, -1];

  if (attack.heading === "right") {
    hitRange[0] = attack.position.x;
    hitRange[1] = attack.position.x + PROJECTILE_SPEED + ATTACK_WIDTH;
  } else {
    const leftMost = attack.position.x - PROJECTILE_SPEED - ATTACK_WIDTH;
    hitRange[0] = leftMost < 0 ? 0 : leftMost;
    hitRange[1] = attack.position.x;
  }

  return hitRange;
}
