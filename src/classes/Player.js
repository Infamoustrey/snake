import { drawRect } from "../util/Canvas";

class Player {
  constructor(x = 25, y = 25, xDir = 1, yDir = 0) {
    this.x = x;
    this.y = y;
    this.xDir = xDir;
    this.yDir = yDir;

    this.train = [];

    window.addEventListener("keydown", this.handleKeyPress.bind(this));
  }

  handleKeyPress(e) {
    switch (e.key) {
      case "ArrowLeft":
        this.xDir = -1;
        this.yDir = 0;
        break;
      case "ArrowRight":
        this.xDir = 1;
        this.yDir = 0;
        break;
      case "ArrowUp":
        this.xDir = 0;
        this.yDir = -1;
        break;
      case "ArrowDown":
        this.xDir = 0;
        this.yDir = 1;
        break;
    }
  }

  render() {
    // render head
    drawRect(this.x * 16, this.y * 16, 16, 16, "white", "blue");

    // render train
    for (let block of this.train) {
      drawRect(block.x * 16, block.y * 16, 16, 16, "green", "blue");
    }
  }

  move() {
    if (this.x == 0) {
      if (this.xDir == -1) {
        this.xDir = 0;
        this.yDir = -1;
      }
    } else if (this.x == 80) {
      if (this.xDir == 1) {
        this.xDir = 0;
        this.yDir = 1;
      }
    } else if (this.y == 0) {
      if (this.yDir == -1) {
        this.yDir = 0;
        this.xDir = 1;
      }
    } else if (this.y == 45) {
      if (this.yDir == 1) {
        this.yDir = 0;
        this.xDir = -1;
      }
    }

    this.x += this.xDir;
    this.y += this.yDir;
  }

  moveTrain() {
    for (let i = 0; i < this.train.length; i++) {
      this.train[i].prevX = this.train[i].x;
      this.train[i].prevY = this.train[i].y;
      if (i == 0) {
        this.train[i].x = this.x - this.xDir;
        this.train[i].y = this.y - this.yDir;
      } else {
        this.train[i].x = this.train[i - 1].prevX;
        this.train[i].y = this.train[i - 1].prevY;
      }
    }
  }

  addToTrain() {
    let x, y;
    if (this.train.length < 1) {
      x = this.x - this.xDir;
      y = this.y - this.yDir;
    } else {
      x = this.train[this.train.length - 1].prevX;
      y = this.train[this.train.length - 1].prevY;
    }

    this.train.push({ x, y, prevX: null, prevY: null });
  }

  update(worldMap) {
    this.move();
    this.moveTrain();

    if (worldMap.tiles[this.y][this.x] == 1) {
      worldMap.tiles[this.y][this.x] = 0;
      this.addToTrain();
    }
  }
}

export { Player };
