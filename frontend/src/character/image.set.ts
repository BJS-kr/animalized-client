export function makeImageSet(path:{
  walk: string,
  attack: string,
  climb: string,
  idle: string,
  hit: string,
}, prefix?:string) {
  const walkImage = new Image()
  const climbImage = new Image()
  const attackImage = new Image()
  const idleImage = new Image()
  const hitImage = new Image()

  walkImage.src = (prefix ?? '') + path.walk
  attackImage.src = (prefix ?? '') + path.attack
  climbImage.src = (prefix ?? '') + path.climb
  idleImage.src = (prefix ?? '') + path.idle
  hitImage.src = (prefix ?? '') + path.hit

  return {
    walk: walkImage,
    attack: attackImage,
    climb: climbImage,
    idle: idleImage,
    hit: hitImage,
  }

}