const BASE_PATH = "/src/sprites/";

export function makeImageSet(characterName: "pink" | "owlet" | "dude") {
  const walkImage = new Image();
  const climbImage = new Image();
  const attackImage = new Image();
  const idleImage = new Image();
  const hitImage = new Image();

  walkImage.src = BASE_PATH + characterName + "/walk.png";
  attackImage.src = BASE_PATH + characterName + "/attack.png";
  climbImage.src = BASE_PATH + characterName + "/climb.png";
  idleImage.src = BASE_PATH + characterName + "/idle.png";
  hitImage.src = BASE_PATH + characterName + "/hit.png";

  return {
    walk: walkImage,
    attack: attackImage,
    climb: climbImage,
    idle: idleImage,
    hit: hitImage,
  };
}
