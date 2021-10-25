import Dialogo from "../Model/Dialogo";
import Pregunta from "../Model/Pregunta";
export default class Juego extends Phaser.Scene {
  constructor() {
    super("pruebas");
  }
  preload() {
    this.load.image("atlas", "assets/Tiled/Atlas.png");
    this.load.tilemapTiledJSON("mapa", "assets/Tiled/Nivel_1.json");
  }

  create() {
    const mapa = this.make.tilemap({ key: "mapa" });
    const tileset = mapa.addTilesetImage("Atlas", "atlas");
    mapa.createLayer("ejemplo", tileset);
  }
}
