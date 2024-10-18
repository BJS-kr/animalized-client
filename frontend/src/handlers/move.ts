import {
  CHARACTER_HEIGHT,
  CHARACTER_WIDTH,
  CLIMB_FRAME_COUNT,
  SPEED,
  STAGGER_FRAME,
  WALK_FRAME_COUNT,
} from "../constansts";
import { stayInside } from "../helper/stay";
import type { Character } from "../types";

export function handleHorizontalMove(
  ctx: CanvasRenderingContext2D,
  character: Character
) {
  const isLeft = character.dimension.x > character.goalDimension.x;
  const xOffset = isLeft ? CHARACTER_WIDTH : 0;
  const scaleDirection = isLeft ? -1 : 1;
  const heading = isLeft ? "left" : "right";

  ctx.translate(character.dimension.x + xOffset, character.dimension.y);
  ctx.scale(scaleDirection, 1);
  character.heading = heading;

  ctx.drawImage(
    character.imageSet.walk,
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
    character.dimension.x +=
      character.dimension.x > character.goalDimension.x ? -SPEED : SPEED;
    character.imagePosition.x++;
    character.counter = 0;

    if (character.imagePosition.x >= WALK_FRAME_COUNT) {
      character.imagePosition.x = 1;
    }

    stayInside(character.dimension);
  }
}

export function handleVerticalMove(
  ctx: CanvasRenderingContext2D,
  character: Character
) {
  ctx.translate(character.dimension.x, character.dimension.y);
  ctx.drawImage(
    character.imageSet.climb,
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
    character.dimension.y +=
      character.dimension.y > character.goalDimension.y ? -SPEED : SPEED;
    character.imagePosition.x++;
    character.counter = 0;

    if (character.imagePosition.x >= CLIMB_FRAME_COUNT) {
      character.imagePosition.x = 0;
    }
    stayInside(character.dimension);
  }
}

export function isHorizontallyDifferent(character: Character): boolean {
  return character.dimension.x !== character.goalDimension.x;
}

export function isVerticallyDifferent(character: Character): boolean {
  return character.dimension.y !== character.goalDimension.y;
}
