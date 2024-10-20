import { makeImageSet } from "../character/image.set";
import { makeCharacter } from "../character/make";
import { Character, CharacterInputs } from "../types";

export function handleJoin(
  userId: string,
  characters: Character[],
  inputs: CharacterInputs,
  characterName: "pink" | "owlet" | "dude" = "pink"
) {
  const character = makeCharacter(userId, makeImageSet(characterName));
  inputs.set(userId, { character, inputs: [] });
  characters.push(character);

  return character;
}
