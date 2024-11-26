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

export const DIRECTION = {
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4,
} as const;

export const OPERATION_TYPE = {
  MOVE: 1,
  ATTACK: 2,
  HIT: 3,
  GAME_STATE: 4,
} as const;

export const LOBBY_TYPE = {
  CREATE_ROOM: 1,
  JOIN_ROOM: 2,
  QUIT_ROOM: 3,
  STATE: 4,
} as const;

export const ROOM_TYPE = {
  QUIT: 1,
  START: 2,
  STATE: 3,
} as const;

if (CELL_SIZE % SPEED !== 0) {
  throw new Error("speed must be divisor of cell size");
}

if (CELL_SIZE % PROJECTILE_SPEED !== 0) {
  throw new Error("projectile speed must be divisor of cell size");
}
