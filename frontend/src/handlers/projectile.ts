import { ATTACK_WIDTH, PROJECTILE_SPEED } from "../constansts";
import { stayInside } from "../helper/stay";
import proto from "../proto";
import type { Attack, GameContext } from "../types";
import { handleCollision } from "./collide";

export function handleProjectiles(
  ctx: CanvasRenderingContext2D,
  gameContext: GameContext,
  projectileImage: HTMLImageElement,
  userId: string
) {
  for (let i = 0; i < gameContext.attacks.length; i++) {
    if (gameContext.attacks[i].remainDistance <= 0) {
      continue;
    }
    handleProjectile(
      ctx,
      gameContext,
      gameContext.attacks[i],
      projectileImage,
      userId
    );
  }

  gameContext.attacks = gameContext.attacks.filter(
    (attack) => attack.remainDistance > 0
  );
}

export function handleProjectile(
  ctx: CanvasRenderingContext2D,
  gameContext: GameContext,
  attack: Attack,
  projectileImage: HTMLImageElement,
  userId: string
) {
  ctx.save();

  attack.remainDistance -= PROJECTILE_SPEED;

  stayInside(attack.position);
  forwardProjectile(attack);
  drawProjectile(ctx, attack, projectileImage);

  for (let i = 0; i < gameContext.characters.length; i++) {
    if (attack.userId === userId) {
      handleCollision(gameContext, attack, gameContext.characters[i]);
    }
  }

  for (let i = 1; i < gameContext.terrains.length; i++) {
    if (
      attack.userId === userId &&
      gameContext.terrains[i].state !== proto.Terrain.TerrainState.DESTROYED
    ) {
      handleCollision(gameContext, attack, {
        ...gameContext.terrains[i],
        id: i,
      });
    }
  }
  attack.count++;

  ctx.restore();
}

function forwardProjectile(attack: Attack) {
  if (attack.heading === "right") {
    attack.position.x += PROJECTILE_SPEED;
  } else {
    attack.position.x -= PROJECTILE_SPEED;
  }
}

function drawProjectile(
  ctx: CanvasRenderingContext2D,
  attack: Attack,
  projectileImage: HTMLImageElement
) {
  ctx.save();
  if (attack.heading === "right") {
    ctx.translate(attack.position.x, attack.position.y);
    ctx.scale(1, 1);
  } else {
    ctx.translate(attack.position.x + ATTACK_WIDTH, attack.position.y);
    ctx.scale(-1, 1);
  }
  ctx.drawImage(projectileImage, 20, 15, 30, 10);
  ctx.restore();
}
