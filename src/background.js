export default class Background {
  constructor(game) {
    this.width = game.width;
    this.height = game.height;
    this.sprite = document.getElementById("background");
  }
  draw(ctx) {
    ctx.drawImage(this.sprite, 0, 0);
  }
}
