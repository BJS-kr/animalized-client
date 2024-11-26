import { SendInput } from "../../wailsjs/go/main/App";
import { message } from "../../wailsjs/go/models";
import { encode } from "../common/encode";
import { ATTACK_WIDTH, PROJECTILE_SPEED } from "../constansts";
import proto from "../proto";
import { Attack, Character, HitRange } from "../types";

export async function handleCollision(
  attack: Attack,
  character: Character,
  hitRange: HitRange
) {
  if (
    attack.userId === character.userId && // 내가 시전한 공격일 경우에만 검증요청 보냄
    attack.count > 0 &&
    character.dimension.y === attack.dimension.y &&
    character.dimension.x >= hitRange[0] &&
    character.dimension.x <= hitRange[1]
  ) {
    const input = new proto.Input();
    // input.type = INPUT_TYPE.HIT;
    // input.user_id = attack.userId;
    // input.hit_range = hitRange;
    // input.hit_user_id = character.userId;

    await SendInput(encode(input));
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
