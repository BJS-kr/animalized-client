import proto from "./proto";

export type HitRange = [smallerX: number, largerX: number];

export type Position = {
  x: number;
  y: number;
};

export type Character = {
  imageSet: CharacterImageSet;
  position: Position;
  goalPosition: Position;
  imagePosition: Position;
  counter: number;
  rewind: boolean;
  isAttacking: boolean;
  isHit: boolean;
  heading: "left" | "right";
  userId: string;
  isProcessing: boolean;
};

export type Attack = {
  id: number;
  userId: string;
  heading: "left" | "right";
  remainDistance: number;
  position: Position;
  count: number;
};

export type CharacterImageSet = {
  idle: HTMLImageElement;
  attack: HTMLImageElement;
  walk: HTMLImageElement;
  climb: HTMLImageElement;
  hit: HTMLImageElement;
};

export type CharacterInputs = Map<
  string,
  { character: Character; inputs: proto.Input[] }
>;

export type GameContext = {
  terrains: proto.ITerrain[];
  characters: Character[];
  inputs: CharacterInputs;
  hitMap: Map<number, boolean>;
  attacks: Attack[];
};
