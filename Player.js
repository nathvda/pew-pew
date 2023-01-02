export default class Player {
  rightPressed = false;
  leftPressed = false;

  constructor(canvas, velocity, bulletController) {
    this.canvas = canvas;
    this.velocity = velocity;
    this.bulletController = bulletController;

    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - 75;
    this.width = 50;
    this.height = 48;

    this.image = new Image();
    this.image.src = "images/player.png";

    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
  }

  draw(ctx) {
    this.move();
    this.collideWithWalls();
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  collideWithWalls() {
    if (this.x < 0) {
      this.x = 0;
    }

    if (this.x > this.canvas.width - this.width) {
      this.x = this.canvas.width - this.width;
    }
  }
  move() {
    if (this.rightPressed) {
      this.x += this.velocity;
    } else if (this.leftPressed) {
      this.x -= this.velocity;
    }
  }

  keydown = (e) => {
    if (e.code == "ArrowRight") {
      this.rightPressed = true;
    }

    if (e.code == "ArrowLeft") {
      this.leftPressed = true;
    }

    if (e.code == "Space") {
      this.bulletController.shoot(this.x + this.width / 2, this.y, 4, 10);
    }
  };

  keyup = (e) => {
    if (e.code == "ArrowRight") {
      this.rightPressed = false;
    }

    if (e.code == "ArrowLeft") {
      this.leftPressed = false;
    }

    if (e.code == "Space") {
      this.bulletController.shoot(this.x + this.width / 2, this.y, 4, 10);
    }
  };
}
