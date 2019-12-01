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
        drawRect(this.x * 16, this.y * 16, 16, 16, "white", "blue");
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

    update() {
        this.move();
    }
}

export { Player };
