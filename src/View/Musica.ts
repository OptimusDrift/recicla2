import CMusica from "../Controller/CMusica";
export default class Musica extends Phaser.Scene {
  private _cMusica: CMusica;
  constructor() {
    super("Musica");
  }

  //Getters and setters
  public getCMusica(): CMusica {
    return this._cMusica;
  }

  public set setCMusica(value: CMusica) {
    this._cMusica = value;
  }
}
