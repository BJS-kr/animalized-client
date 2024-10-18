import { ATTACK_WIDTH, PROJECTILE_SPEED } from "../constansts";
import { stayInside } from "../helper/stay";
import type { Attack, Character, HitRange } from "../types";
import { determineHitRange, handleCollision } from "./collide";

export function handleProjectiles(
  ctx: CanvasRenderingContext2D,
  attacks: Attack[],
  projectileImage: HTMLImageElement,
  characters: Character[]
) {
  for (const attack of attacks) {
    if (attack.remainDistance <= 0) {
      continue;
    }
    handleProjectile(ctx, attack, projectileImage, characters);
  }

  attacks = attacks.filter((attack) => attack.remainDistance > 0);
}

export function handleProjectile(
  ctx: CanvasRenderingContext2D,
  attack: Attack,
  projectileImage: HTMLImageElement,
  characters: Character[]
) {
  ctx.save();

  attack.remainDistance -= PROJECTILE_SPEED;

  stayInside(attack.dimension);
  forwardProjectile(attack);
  drawProjectile(ctx, attack, projectileImage);

  const hitRange = determineHitRange(attack);
  for (const character of characters) {
    handleCollision(attack, character, hitRange);
  }
  attack.count++;

  ctx.restore();
}

function forwardProjectile(attack: Attack) {
  if (attack.heading === "right") {
    attack.dimension.x += PROJECTILE_SPEED;
  } else {
    attack.dimension.x -= PROJECTILE_SPEED;
  }
}

function drawProjectile(
  ctx: CanvasRenderingContext2D,
  attack: Attack,
  projectileImage: HTMLImageElement
) {
  ctx.save();
  if (attack.heading === "right") {
    ctx.translate(attack.dimension.x, attack.dimension.y);
    ctx.scale(1, 1);
  } else {
    ctx.translate(attack.dimension.x + ATTACK_WIDTH, attack.dimension.y);
    ctx.scale(-1, 1);
  }
  ctx.drawImage(projectileImage, 20, 15, 30, 10);
  ctx.restore();
}
