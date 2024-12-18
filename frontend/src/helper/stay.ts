import { CANVAS_SIZE } from "../constansts";
import type { Position } from "../types";

export function stayInside(position: Position) {
  if (position.x > CANVAS_SIZE) {
    position.x = 0;
  } else if (position.x < 0) {
    position.x = CANVAS_SIZE;
  }

  if (position.y > CANVAS_SIZE) {
    position.y = 0;
  } else if (position.y < 0) {
    position.y = CANVAS_SIZE;
  }
}
