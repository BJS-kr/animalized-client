import { SendInput } from "../../wailsjs/go/main/App";
import { message } from "../../wailsjs/go/models";
import { ATTACK_WIDTH, INPUT_TYPE, PROJECTILE_SPEED } from "../constansts";
import { Attack, Character, HitRange } from "../types";

export async function handleCollision(
  attack: Attack,
  character: Character,
  hitRange: HitRange
) {
  if (
    attack.count > 0 &&
    character.dimension.y === attack.dimension.y &&
    character.dimension.x >= hitRange[0] &&
    character.dimension.x <= hitRange[1]
  ) {
    const input = new message.Input();
    input.type = INPUT_TYPE.HIT;
    input.user_id = attack.userId;
    input.hit_range = hitRange;
    input.hit_user_id = character.userId;
    await SendInput(input);
    attack.remainDistance = 0;
  }
}

export function determineHitRange(attack: Attack) {
  const hitRange: HitRange = [-1, -1];

  if (attack.heading === "right") {
    hitRange[0] = attack.dimension.x;
    hitRange[1] = attack.dimension.x + PROJECTILE_SPEED + ATTACK_WIDTH;
  } else {
    hitRange[0] = attack.dimension.x - PROJECTILE_SPEED - ATTACK_WIDTH;
    hitRange[1] = attack.dimension.x;
  }

  return hitRange;
}
