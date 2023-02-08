export default class Game {
  container: HTMLDivElement;
  canvas: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;

  constructor() {
    this.container = document.querySelector<HTMLDivElement>("#game-container")!;
    this.canvas = this.container.querySelector<HTMLCanvasElement>("#canvas")!;
    this.ctx = this.canvas.getContext("2d");
  }

  init() {
    console.log("hello from the overworld");
    console.log(this);
  }
}
