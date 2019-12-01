import { drawRect } from "../util/Canvas";

class WorldMap {
  constructor() {
    this.tiles = [];

    for (let y = 0; y < 45; y++) {
      this.tiles.push([]);
      for (let x = 0; x < 80; x++) {
        this.tiles[y].push(Math.random() < 0.05 ? 1 : 0);
      }
    }
  }

  update() {}

  render() {
    for (let y = 0; y < this.tiles.length; y++) {
      for (let x = 0; x < this.tiles[y].length; x++) {
        let tile = this.tiles[y][x];
        drawRect(x * 16, y * 16, 16, 16, tile == 1 ? "red" : "black", "white");
      }
    }
  }
}

export { WorldMap };
