// 다 필요없고 오른쪽, 왼쪽, 위, 아래 움직임 구현하고
// 서버에서 온 응답이 2칸 이상 차이나면 그냥 순간이동, 한칸차이면 애니메이션으로 이동
// 유저 당사자면 키 이벤트로 움직이고, 나머지 플레이어들은 서버에서 온 응답으로 구현
// 그리고 상태 업데이트는 인터벌말고 이벤트로 구현해라 wails.event.emit있더라

import type { Character, CharacterImageSet } from "../types";

export function makeCharacter(
  userId: string,
  imageSet: CharacterImageSet
): Character {
  return {
    isProcessing: false,
    userId,
    imageSet,
    dimension: { x: 0, y: 0 },
    goalDimension: { x: 0, y: 0 },
    imagePosition: { x: 0, y: 0 },
    counter: 0,
    isAttacking: false,
    rewind: false,
    heading: "right",
  };
}
