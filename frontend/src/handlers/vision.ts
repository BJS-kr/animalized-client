// https://stackoverflow.com/questions/6271419/how-to-fill-the-opposite-shape-on-canvas
import type { Character } from "../types";
import {
  VISUAL_RANGE,
  CELL_SIZE,
  CANVAS_SIZE,
  CHARACTER_WIDTH,
  CHARACTER_HEIGHT,
} from "../constansts";

export function handleVisibleRange(
  ctx: CanvasRenderingContext2D,
  character: Character
) {
  ctx.beginPath();
  ctx.arc(
    character.dimension.x + CHARACTER_WIDTH / 2,
    character.dimension.y + CHARACTER_HEIGHT / 2,
    VISUAL_RANGE * CELL_SIZE,
    0,
    Math.PI * 2,
    true
  );
  ctx.fillStyle = "black";
  ctx.rect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.fill();
}
