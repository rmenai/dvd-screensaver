import { appWindow, LogicalSize, PhysicalPosition } from "@tauri-apps/api/window";

export type Position = [number, number];

export class Screensaver {
  private reqAnimationId = 0;

  public pos: Position = [0, 0];
  public down = 1;
  public right = 1;

  public constructor(
    private screen: [Position, Position],
    private window: Position,
    private speed: number,
    private random: Boolean = true
  ) {}

  private async animation() {
    this.pos[0] += this.right * this.speed;
    this.pos[1] += this.down * this.speed;

    if (this.pos[0] <= this.screen[0][0]) {
      this.right = 1;
    } else if (this.pos[0] >= this.screen[1][0]) {
      this.right = -1;
    }

    if (this.pos[1] <= this.screen[0][1]) {
      this.down = 1;
    } else if (this.pos[1] >= this.screen[1][1]) {
      this.down = -1;
    }

    await appWindow.setPosition(new PhysicalPosition(this.pos[0], this.pos[1]));
    this.reqAnimationId = requestAnimationFrame(this.animation.bind(this));
  }

  public async start() {
    if (this.random) {
      this.pos[0] = Math.floor(Math.random() * (this.screen[1][0] - this.screen[0][0])) + this.screen[0][0];
      this.pos[1] = Math.floor(Math.random() * (this.screen[1][1] - this.screen[0][1])) + this.screen[0][1];

      this.down = Math.floor(Math.random() * 2) * 2 - 1;
      this.right = Math.floor(Math.random() * 2) * 2 - 1;
    } else {
      this.pos[0] = this.screen[0][0];
      this.pos[1] = this.screen[0][1];
    }

    await appWindow.setSize(new LogicalSize(this.window[0], this.window[1]));
    await appWindow.setPosition(new PhysicalPosition(this.pos[0], this.pos[1]));

    this.reqAnimationId = requestAnimationFrame(this.animation.bind(this));
    await appWindow.show();
  }

  public stop() {
    cancelAnimationFrame(this.reqAnimationId);
  }
}
