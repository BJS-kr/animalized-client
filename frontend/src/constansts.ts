export const CHARACTER_WIDTH = 32;
export const CHARACTER_HEIGHT = 50;
export const STAGGER_FRAME = 4;
export const CELL_SIZE = 27;
export const SPEED = 9;
export const WALK_FRAME_COUNT = 4;
export const CLIMB_FRAME_COUNT = 3;
export const ATTACK_FRAME_COUNT = 3;
export const IDLE_FRAME_COUNT = 3;
export const MAP_SIZE = 30;
export const CANVAS_SIZE = MAP_SIZE * CELL_SIZE;
export const VISUAL_RANGE = 4;
export const ATTACK_RANGE = 10;
export const ATTACK_WIDTH = 30;
export const ATTACK_HEIGHT = 30;
export const PROJECTILE_SPEED = 9;
export const INPUT_TYPE = {
  INIT: 1,
  MOVE: 2,
  ATTACK: 3,
  HIT: 4,
  SERVER_STATE: 5,
  JOIN: 6,
  QUIT: 7,
};
export const INPUT_DIRECTION = {
  LEFT: 1,
  RIGHT: 2,
  UP: 3,
  DOWN: 4,
};

if (CELL_SIZE % SPEED !== 0) {
  throw new Error("speed must be divisor of cell size");
}

if (CELL_SIZE % PROJECTILE_SPEED !== 0) {
  throw new Error("projectile speed must be divisor of cell size");
}
