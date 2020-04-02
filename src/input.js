export default class InputHandler {
  constructor(hrac1, game, GAMESTATE) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 65:
          hrac1.moveLeft();
          break;
        case 68:
          hrac1.moveRight();
          break;
        case 87:
          hrac1.jump();
          break;
        case 27:
          game.toggleInstr();
          break;
        default:
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 65:
          hrac1.stay();
          break;
        case 68:
          hrac1.stay();
          break;
        default:
          break;
      }
    });

    function getMousePos(canvas, event) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    }

    function isInside(pos, rect) {
      return (
        pos.x > rect.x &&
        pos.x < rect.x + rect.width &&
        pos.y < rect.y + rect.height &&
        pos.y > rect.y
      );
    }

    var startButton = {
      x: game.Width / 2 - 120,
      y: game.Height / 2 - 80,
      width: 300,
      height: 100
    };

    var playAgain = {
      x: game.Width / 2 - 120,
      y: game.Height / 2 + 50,
      width: 300,
      height: 60
    };

    var InstrCross = {
      x: 10,
      y: 10,
      width: 30,
      height: 30
    };

    game.canvas.addEventListener(
      "click",
      function(evt) {
        this.mousePos = getMousePos(game.canvas, evt);
        if (isInside(this.mousePos, InstrCross)) game.toggleInstr();
        if (isInside(this.mousePos, startButton)) game.start();
        if (isInside(this.mousePos, playAgain) && game.hrac1.gameover === 1)
          game.restart();
      },
      false
    );
  }
}
