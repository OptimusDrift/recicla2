import Phaser from "phaser";
import Particulas from "../Model/Particulas";
import Juego from "./Juego";

export default class Nivel1 extends Juego {
  constructor() {
    super("Nivel1");
  }
  preload() {
    this.load.image("atlas", "assets/Tiled/Atlas.png");
    this.load.tilemapTiledJSON("mapa", "assets/Tiled/Nivel_1.json");
  }

  create() {
    this.particulasIncorrecta = new Particulas(this.add.particles("cruces"));
    this.particulasCorrecto = new Particulas(this.add.particles("estrellitas"));

    const mapa = this.make.tilemap({ key: "mapa" });
    const tileset = mapa.addTilesetImage("Atlas", "atlas");

    const m = mapa.createLayer("ejemplo", tileset);
    console.log(m);
    m.setCollisionByProperty({ collides: true });
    this.physics.world.collideS
  }

  update() {
    this.controladorNivel.PrepararLanzamiento();
  }
}
