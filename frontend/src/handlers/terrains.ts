import { CELL_SIZE } from "../constansts";
import proto from "../proto";

const rockImage = new Image();
rockImage.src = "/sprites/terrains/rock.png";

const rockPositions = [
  {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    offsetX: 0,
    offsetY: 0,
    actualWidth: 0,
    actualHeight: 0,
  },
  {
    x: 0,
    y: 0,
    width: 60,
    height: 60,
    offsetX: 0,
    offsetY: 6,
    actualWidth: CELL_SIZE,
    actualHeight: CELL_SIZE,
  },
  {
    x: 220,
    y: 170,
    width: 40,
    height: 40,
    offsetX: 0,
    offsetY: 6,
    actualWidth: CELL_SIZE,
    actualHeight: CELL_SIZE,
  },
  {
    x: 130,
    y: 222,
    width: 15,
    height: 20,
    offsetX: 8,
    offsetY: CELL_SIZE / 2 + 6,
    actualWidth: CELL_SIZE / 2,
    actualHeight: CELL_SIZE / 2,
  },
];

export function drawTerrains(
  ctx: CanvasRenderingContext2D,
  terrains: proto.ITerrain[]
) {
  for (const terrain of terrains) {
    if (
      !terrain.state ||
      !terrain.position ||
      terrain.state === proto.TerrainState.DESTROYED
    )
      continue;

    const rockPosition = rockPositions[terrain.state];
    ctx.drawImage(
      rockImage,
      rockPosition.x,
      rockPosition.y,
      rockPosition.width,
      rockPosition.height,
      terrain.position.x! + rockPosition.offsetX,
      terrain.position.y! + rockPosition.offsetY,
      rockPosition.actualWidth,
      rockPosition.actualHeight
    );
  }
}
