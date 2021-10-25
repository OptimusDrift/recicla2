import Dialogo from "../Model/Dialogo";
import Pregunta from "../Model/Pregunta";
import Particulas from "../Model/Particulas";
import Juego from "./Juego";

export default class Pruebas extends Juego {
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

    const m = mapa.createLayer("ejemplo", tileset);

    m.setCollisionByProperty({ collides: true });
  }

  update() {
    this.controladorNivel.PrepararLanzamiento();
  }
}
