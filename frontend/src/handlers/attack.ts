import type { Character } from "../types";
import {
  CHARACTER_HEIGHT,
  CHARACTER_WIDTH,
  STAGGER_FRAME,
  ATTACK_FRAME_COUNT,
  CELL_SIZE,
  ATTACK_RANGE,
} from "../constansts";

export function handleAttack(
  ctx: CanvasRenderingContext2D,
  character: Character
): Attack {
  if (character.heading === "right") {
    ctx.translate(character.dimension.x, character.dimension.y);
    ctx.scale(1, 1);
  } else if (character.heading === "left") {
    ctx.translate(
      character.dimension.x + CHARACTER_WIDTH,
      character.dimension.y
    );
    ctx.scale(-1, 1);
  } else {
    throw new Error("invalid heading when attack");
  }

  ctx.drawImage(
    character.imageSet.attack,
    character.imagePosition.x * CHARACTER_WIDTH,
    character.imagePosition.y * CHARACTER_HEIGHT,
    CHARACTER_WIDTH,
    CHARACTER_HEIGHT,
    0,
    0,
    CHARACTER_WIDTH,
    CHARACTER_HEIGHT
  );

  character.counter++;
  if (character.counter % STAGGER_FRAME === 0) {
    character.imagePosition.x++;
    character.counter = 0;
  }

  if (character.imagePosition.x >= ATTACK_FRAME_COUNT) {
    character.imagePosition.x = 1;
    character.isAttacking = false;

    return {
      dimension: { x: character.dimension.x, y: character.dimension.y },
      heading: character.heading,
      remainDistance: CELL_SIZE * ATTACK_RANGE,
      count: 0,
      userId: character.userId,
    };
  }
}
