import type { Character } from '../types';
import { CHARACTER_HEIGHT, CHARACTER_WIDTH, STAGGER_FRAME, IDLE_FRAME_COUNT } from '../constansts';

export function handleIdleAnimation(ctx: CanvasRenderingContext2D, character: Character) {
  character.isProcessing = false
  if (character.imagePosition.x > IDLE_FRAME_COUNT) {
    character.imagePosition.x = 0
  }

  if (character.heading === 'right') {
    ctx.translate(character.dimension.x, character.dimension.y)  
    ctx.scale(1,1)
  } else if (character.heading === 'left') {
    ctx.translate(character.dimension.x + CHARACTER_WIDTH, character.dimension.y)
    ctx.scale(-1, 1)
  } else {
    throw new Error("invalid heading")
  }

  ctx.drawImage(
    character.imageSet.idle,
    character.imagePosition.x * CHARACTER_WIDTH,
    character.imagePosition.y * CHARACTER_HEIGHT,
    CHARACTER_WIDTH,
    CHARACTER_HEIGHT,
    0,
    0,
    CHARACTER_WIDTH,
    CHARACTER_HEIGHT
  )

  character.counter++
  if (character.counter % STAGGER_FRAME === 0) {
    if (!character.rewind) {
      character.imagePosition.x++
    } else {
      character.imagePosition.x--
    }
    character.counter = 0

    if (character.imagePosition.x >= IDLE_FRAME_COUNT) {
      character.rewind = true
    } else if (character.imagePosition.x <= 0) {
      character.rewind = false
    }
  }
}