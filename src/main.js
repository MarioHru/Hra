import Game from "/src/game";

let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 1365;
const CANVAS_HEIGHT = 768;

let lastTime = 0;

let game = new Game(CANVAS_WIDTH, CANVAS_HEIGHT, canvas);

function gameLoop(timestamp) {
  let dt = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  game.update(dt);
  game.draw(ctx);
  requestAnimationFrame(gameLoop);
}

function instructions() {
  game.toggleInstr();
}

gameLoop();
