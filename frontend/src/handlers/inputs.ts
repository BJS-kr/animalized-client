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
import { handleHitAnimation } from "./hit";

export function handleInputs(
  ctx: CanvasRenderingContext2D,
  canvasSize: number,
  inputs: CharacterInputs,
  characters: Character[],
  attacks: Attack[],
  projectileImage: HTMLImageElement,
  userId: string,
  userCharacter: Character | null
) {
  ctx.clearRect(0, 0, canvasSize, canvasSize);

  ctx.save();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvasSize, canvasSize);
  ctx.restore();

  handleProjectiles(ctx, attacks, projectileImage, characters, userId);

  for (const character of characters) {
    applyNextInput(inputs, character, attacks);

    wrapContext(ctx, () => {
      handleCharacterNameText(ctx, character);

      if (isHorizontallyDifferent(character)) {
        handleHorizontalMove(ctx, character);
      } else if (isVerticallyDifferent(character)) {
        handleVerticalMove(ctx, character);
      } else if (character.isAttacking) {
        const attack = handleAttack(ctx, character);
        attack && attacks.push({ ...attack, userId: character.userId });
      } else if (character.isHit) {
        handleHitAnimation(ctx, character);
      } else {
        handleIdleAnimation(ctx, character);
      }
    });
  }

  if (!userCharacter) {
    const found = characters.find((character) => character.userId === userId);

    if (!found) {
      throw new Error("user character not found");
    }

    userCharacter = found;
  }

  handleVisibleRange(ctx, userCharacter);

  requestAnimationFrame(() =>
    handleInputs(
      ctx,
      canvasSize,
      inputs,
      characters,
      attacks,
      projectileImage,
      userId,
      userCharacter
    )
  );
}
