export default class Cube {
  constructor(game) {
    this.width = 50;
    this.height = 50;
    this.mousePosX = game.mousePosX;
    this.mousePoxY = game.mousePosY;
    this.position = {
      x: 100,
      y: 100
    };
  }
  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update(mousePos) {
    this.position.x = mousePos.x - 20;
    this.position.y = mousePos.y - 20;
  }
}
