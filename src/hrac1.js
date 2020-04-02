export default class hrac1 {
  constructor(game) {
    this.canvasWidth = game.Width;
    this.canvasHeight = game.Height;
    this.width = 207;
    this.height = 390;
    this.moveSide = 0;
    this.jumping = 0;
    this.gameover = 0;
    this.sprite = document.getElementById("hrac1");
    this.position = {
      x: game.Width / 2 - this.width / 2,
      y: game.Height - this.height - 60,
      minY: game.Height - this.height - 60,
      defX: game.Width / 2 - this.width / 2
    };
  }

  moveLeft() {
    this.moveSide = -5;
  }

  moveRight() {
    this.moveSide = 5;
  }

  stay() {
    this.moveSide = 0;
  }

  jump() {
    if (this.position.y >= this.position.minY) this.jumping = 1;
  }

  draw(ctx) {
    ctx.drawImage(
      this.sprite,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  gravity() {
    if (this.position.y < 100) this.jumping = -1;
    this.position.y -= this.jumping * 16;
  }

  update(dt) {
    this.gravity();
    //if (this.position.x + this.width >= this.canvasWidth)this.position.x = this.canvasWidth - this.width;
    //if (this.position.x <= 0) this.position.x = 0;
    if (this.position.x + this.width >= this.canvasWidth) this.gameover = 1;
    if (this.position.x <= 0) this.gameover = 1;
    if (this.position.y > this.position.minY)
      this.position.y = this.position.minY;
    if (!dt) return;
    this.position.x += this.moveSide;
  }
}
