import { fromByteArray } from "base64-js";
import proto from "../proto";

// uint8array를 go backend로 넘기는게 안된다. uint8array를 base64로 인코딩해서 넘기기로 했다. 최적의 방법인지는 모르겠다.
export function encode(staticInput: proto.Input) {
  const notVerified = proto.Input.verify(staticInput);

  if (notVerified) {
    throw new Error(notVerified);
  }

  return fromByteArray(proto.Input.encode(staticInput).finish());
}
