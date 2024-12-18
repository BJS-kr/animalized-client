import { CANVAS_SIZE, CELL_SIZE, MAP_SIZE } from "../constansts";

export function drawBackground(
  ctx: CanvasRenderingContext2D,
  background: HTMLImageElement
) {
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  for (let x = 0; x < MAP_SIZE; x++) {
    for (let y = 0; y < MAP_SIZE; y++) {
      ctx.drawImage(
        background,
        0,
        0,
        16,
        16,
        x * CELL_SIZE,
        y * CELL_SIZE,
        CELL_SIZE,
        CELL_SIZE
      );
    }
  }
}
