import { applyNextInput } from "../character/apply";
import { wrapContext } from "../helper/wrapper";
import { handleAttack } from "./attack";
import { handleIdleAnimation } from "./idle";
import {
  handleHorizontalMove,
  handleVerticalMove,
  isHorizontallyDifferent,
  isVerticallyDifferent,
} from "./move";
import { handleCharacterNameText } from "./name";
import { handleProjectiles } from "./projectile";
import { handleVisibleRange } from "./vision";
import type { Character, Attack, CharacterInputs } from "../types";

export function handleInputs(
  ctx: CanvasRenderingContext2D,
  canvasSize: number,
  inputs: CharacterInputs,
  characters: Character[],
  attacks: Attack[],
  projectileImage: HTMLImageElement
) {
  ctx.clearRect(0, 0, canvasSize, canvasSize);

  ctx.save();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvasSize, canvasSize);
  ctx.restore();

  handleProjectiles(ctx, attacks, projectileImage, characters);

  for (const character of characters) {
    applyNextInput(inputs, character);

    wrapContext(ctx, () => {
      handleCharacterNameText(ctx, character);

      if (isHorizontallyDifferent(character)) {
        handleHorizontalMove(ctx, character);
      } else if (isVerticallyDifferent(character)) {
        handleVerticalMove(ctx, character);
      } else if (character.isAttacking) {
        const attack = handleAttack(ctx, character);
        attack && attacks.push({ ...attack, userId: character.userId });
      } else {
        handleIdleAnimation(ctx, character);
      }
    });
  }
  handleVisibleRange(ctx, characters[0]);

  requestAnimationFrame(() =>
    handleInputs(ctx, canvasSize, inputs, characters, attacks, projectileImage)
  );
}
