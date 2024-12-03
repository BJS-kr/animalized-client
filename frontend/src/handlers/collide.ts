import { SendInput } from "../../wailsjs/go/main/App";
import { message } from "../../wailsjs/go/models";
import { encode } from "../common/encode";
import { ATTACK_WIDTH, PROJECTILE_SPEED } from "../constansts";
import proto from "../proto";
import { Attack, Character, HitRange } from "../types";

export async function handleCollision(attack: Attack, character: Character) {
  const hitRange = determineHitRange(attack);
  if (
    attack.count > 0 &&
    character.dimension.y === attack.dimension.y &&
    character.dimension.x >= hitRange[0] &&
    character.dimension.x <= hitRange[1]
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
        y: attack.dimension.y,
      }),
      rightTop: new proto.Position({
        x: hitRange[1],
        y: attack.dimension.y,
      }),
    });
    operation.targetUserId = character.userId;
    operation.projectileId = attack.id;

    await SendInput(encode(input));
  }
}

export function determineHitRange(attack: Attack) {
  const hitRange: HitRange = [-1, -1];

  if (attack.heading === "right") {
    hitRange[0] = attack.dimension.x;
    hitRange[1] = attack.dimension.x + PROJECTILE_SPEED + ATTACK_WIDTH;
  } else {
    const leftMost = attack.dimension.x - PROJECTILE_SPEED - ATTACK_WIDTH;
    hitRange[0] = leftMost < 0 ? 0 : leftMost;
    hitRange[1] = attack.dimension.x;
  }

  return hitRange;
}
