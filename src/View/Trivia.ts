import Juego from "./Juego";
import Particulas from "../Model/Particulas";
import CTrivia from "../Controller/CTrivia";

export default class Trivia extends Juego {
  private _controladorTrivia: CTrivia;

  constructor() {
    super("Trivia");
  }

  preload() {
    this.particulasIncorrecta = new Particulas(this.add.particles("cruces"));
    this.particulasCorrecto = new Particulas(this.add.particles("estrellitas"));
    this.particulasBomba = new Particulas(this.add.particles("estrella7"));
    this.controladorTrivia.CargarBotones();
  }

  create() {}

  update() {}

  //Getters and setters
  public get controladorTrivia(): CTrivia {
    return this._controladorTrivia;
  }

  public set controladorTrivia(v: CTrivia) {
    this._controladorTrivia = v;
  }
}
