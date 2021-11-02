import Particulas from "../Model/Particulas";
import Juego from "./Juego";

export default class Nivel2 extends Juego {
  constructor() {
    super("Nivel2");
  }
  preload() {}

  create() {
    this.particulasIncorrecta = new Particulas(this.add.particles("cruces"));
    this.particulasCorrecto = new Particulas(this.add.particles("estrellitas"));
    this.particulasMoneda = new Particulas(this.add.particles("moneda"));
  }

  update() {
    this.controladorNivel.PrepararLanzamiento();
  }
}
