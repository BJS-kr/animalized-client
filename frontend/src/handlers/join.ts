import { makeImageSet } from "../character/image.set";
import { makeCharacter } from "../character/make";
import { Character, CharacterInputs } from "../types";

const characterNames = ["pink", "owlet", "dude"] as const;

function chooseRandomCharacterName() {
  return characterNames[Math.floor(Math.random() * characterNames.length)];
}
export function handleJoin(
  userId: string,
  characters: Character[],
  inputs: CharacterInputs
) {
  const characterName = chooseRandomCharacterName();
  const character = makeCharacter(userId, makeImageSet(characterName));
  inputs.set(userId, { character, inputs: [] });
  characters.push(character);

  return character;
}
