export function wrapContext(ctx: CanvasRenderingContext2D, cb: () => void) {
  ctx.save();
  cb();
  ctx.restore();
}
