import { drawRect } from "./util/Canvas";
import { Player } from "./classes/Player";
import { WorldMap } from "./classes/WorldMap";

let worldMap = new WorldMap();
let player = new Player();

let previousTick = 0;
const getTime = () => new Date().getTime();

function shouldUpdate() {
  const now = getTime();

  if (now - previousTick > 300 || previousTick == 0) {
    previousTick = now;
    return true;
  }

  return false;
}

function update() {
  player.update(worldMap);
}

function render() {
  drawRect(0, 0, 1280, 720, "black");

  worldMap.render();

  player.render();
}

function loop() {
  if (shouldUpdate()) update();

  render();

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
