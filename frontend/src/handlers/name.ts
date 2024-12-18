import type { Character } from "../types";

export function handleCharacterNameText(
  ctx: CanvasRenderingContext2D,
  character: Character
) {
  const usernameTextOffset = character.heading === "left" ? 3 : 0;
  ctx.fillText(
    character.userId,
    character.position.x + usernameTextOffset + 3,
    character.position.y
  );
}
