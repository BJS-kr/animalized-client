export const CHARACTER_WIDTH = 32 as const;
export const CHARACTER_HEIGHT = 50 as const;
export const STAGGER_FRAME = 4 as const;
export const CELL_SIZE = 27 as const;
export const SPEED = 9 as const;
export const WALK_FRAME_COUNT = 4 as const;
export const CLIMB_FRAME_COUNT = 3 as const;
export const ATTACK_FRAME_COUNT = 3 as const;
export const IDLE_FRAME_COUNT = 3 as const;
export const HIT_FRAME_COUNT = 3 as const;
export const MAP_SIZE = 20 as const;
export const VISUAL_RANGE = 7 as const;
export const ATTACK_RANGE = 12 as const;
export const ATTACK_WIDTH = 30 as const;
export const ATTACK_HEIGHT = 30 as const;
export const PROJECTILE_SPEED = 9 as const;
export const CANVAS_SIZE = MAP_SIZE * CELL_SIZE;

if (CELL_SIZE % SPEED !== 0) {
  throw new Error("speed must be divisor of cell size");
}

if (CELL_SIZE % PROJECTILE_SPEED !== 0) {
  throw new Error("projectile speed must be divisor of cell size");
}
