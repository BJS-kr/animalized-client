import proto from "../proto";

export function encode(staticInput: proto.Input) {
  const message = proto.Input.encode(staticInput).finish();
  const arr: number[] = [];
  for (let i = 0; i < message.byteLength; i++) {
    arr.push(message[i]);
  }
  return arr;
}
