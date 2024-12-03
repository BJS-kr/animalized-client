import {
  CHARACTER_HEIGHT,
  CHARACTER_WIDTH,
  HIT_FRAME_COUNT,
  STAGGER_FRAME,
} from "../constansts";
import { Character } from "../types";

export function handleHitAnimation(
  ctx: CanvasRenderingContext2D,
  character: Character
) {
  if (character.imagePosition.x > HIT_FRAME_COUNT) {
    character.imagePosition.x = 0;
  }

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
    throw new Error("invalid heading");
  }

  ctx.drawImage(
    character.imageSet.hit,
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
  if (!(character.counter % STAGGER_FRAME)) {
    character.imagePosition.x++;
  }

  if (character.imagePosition.x >= HIT_FRAME_COUNT) {
    character.isHit = false;
  }
}