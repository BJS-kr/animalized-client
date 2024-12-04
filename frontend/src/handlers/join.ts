import { makeImageSet } from "../character/image.set";
import { makeCharacter } from "../character/make";
import proto from "../proto";
import { Character, CharacterInputs } from "../types";

const characterNameMap: Record<
  proto.Room.CharacterType,
  "pink" | "dude" | "owlet"
> = {
  [proto.Room.CharacterType.PINK]: "pink",
  [proto.Room.CharacterType.DUDE]: "dude",
  [proto.Room.CharacterType.OWL]: "owlet",
  [proto.Room.CharacterType.CHARACTER_UNSPECIFIED]: "pink",
};

export function handleJoin(
  userId: string,
  characters: Character[],
  inputs: CharacterInputs,
  characterType: proto.Room.CharacterType
) {
  const character = makeCharacter(
    userId,
    makeImageSet(
      characterNameMap[
        characterType || proto.Room.CharacterType.CHARACTER_UNSPECIFIED
      ]
    )
  );
  inputs.set(userId, { character, inputs: [] });
  characters.push(character);

  return character;
}
