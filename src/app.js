import { drawRect } from "./util/Canvas";
import { Player } from "./classes/Player";

// create 16 x 9 map
let map = new Array(45).fill(new Array(80).fill(0));
for (let y in map) {
    for (let x in map[y]) {
        map[y][x] = Math.random() < 0.3 ? 1 : 0;
    }
}

let player = new Player();

let previousTick = 0;
const getTime = () => new Date().getTime();

function shouldUpdate() {
    const now = getTime();
    if (now - previousTick > 500 || previousTick == 0) {
        previousTick = now;
        return true;
    }

    return false;
}

function update() {
    player.update();
}

function render() {
    // draw the map
    drawRect(0, 0, 1280, 720, "black");
    for (let y in map) {
        for (let x in map[y]) {
            drawRect(
                x * 16,
                y * 16,
                16,
                16,
                map[y][x] == 1 ? "red" : "black",
                "white"
            );
        }
    }

    player.render();
}

function loop() {
    if (shouldUpdate()) update();

    render();

    window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
