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
import type { Character, GameContext } from "../types";
import { handleHitAnimation } from "./hit";
import { drawBackground } from "./background";
import { drawTerrains } from "./terrains";

export function handle(
  ctx: CanvasRenderingContext2D,
  canvasSize: number,
  gameContext: GameContext,
  projectileImage: HTMLImageElement,
  userId: string,
  userCharacter: Character | null,
  background: HTMLImageElement,
  cancelRef: React.MutableRefObject<boolean>,
  reqIdRef: React.MutableRefObject<number>
) {
  drawBackground(ctx, background);
  drawTerrains(ctx, gameContext.terrains);

  handleProjectiles(
    ctx,
    gameContext,
    projectileImage,

    userId
  );

  for (const character of gameContext.characters) {
    applyNextInput(gameContext, character);

    wrapContext(ctx, () => {
      handleCharacterNameText(ctx, character);

      if (isHorizontallyDifferent(character)) {
        handleHorizontalMove(ctx, character);
      } else if (isVerticallyDifferent(character)) {
        handleVerticalMove(ctx, character);
      } else if (character.isAttacking) {
        const attack = handleAttack(ctx, character);
        attack &&
          gameContext.attacks.push({ ...attack, userId: character.userId });
      } else if (character.isHit) {
        handleHitAnimation(ctx, character);
      } else {
        handleIdleAnimation(ctx, character);
      }
    });
  }

  if (!userCharacter) {
    const found = gameContext.characters.find(
      (character) => character.userId === userId
    );

    if (!found) {
      throw new Error("user character not found");
    }

    userCharacter = found;
  }

  handleVisibleRange(ctx, userCharacter);

  if (cancelRef.current) {
    cancelRef.current = false;
    return cancelAnimationFrame(reqIdRef.current);
  }

  reqIdRef.current = requestAnimationFrame(() =>
    handle(
      ctx,
      canvasSize,
      gameContext,
      projectileImage,
      userId,
      userCharacter,
      background,
      cancelRef,
      reqIdRef
    )
  );
}
