import proto from "./proto";

export type HitRange = [smallerX: number, largerX: number];

export type Dimension = {
  x: number;
  y: number;
};

export type Character = {
  imageSet: CharacterImageSet;
  dimension: Dimension;
  goalDimension: Dimension;
  imagePosition: Dimension;
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
  dimension: Dimension;
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
