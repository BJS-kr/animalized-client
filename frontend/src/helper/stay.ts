import { CANVAS_SIZE } from "../constansts";
import type { Dimension } from "../types";

export function stayInside(dimension: Dimension) {
  if (dimension.x > CANVAS_SIZE) {
    dimension.x = 0;
  } else if (dimension.x < 0) {
    dimension.x = CANVAS_SIZE;
  }

  if (dimension.y > CANVAS_SIZE) {
    dimension.y = 0;
  } else if (dimension.y < 0) {
    dimension.y = CANVAS_SIZE;
  }
}
