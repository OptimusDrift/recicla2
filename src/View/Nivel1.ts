import Phaser from "phaser";
import Particulas from "../Model/Particulas";
import Juego from "./Juego";

export default class Nivel1 extends Juego {
  private layer: any;

  constructor() {
    super("Nivel1");
  }
  preload() {}

  create() {
    this.particulasIncorrecta = new Particulas(this.add.particles("cruces"));
    this.particulasCorrecto = new Particulas(this.add.particles("estrellitas"));
    this.particulasMoneda = new Particulas(this.add.particles("cruces"));
  }

  update() {
    this.controladorNivel.PrepararLanzamiento();
  }
}
