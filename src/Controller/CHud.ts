import CNivel from "./CNivel";

export default class CHud {
  private _cNivel: CNivel;
  private _hud: any;
  private _monedas: Array<any>;
  private _puntero: number;

  private UBICACION_PRIMERA_MONEDA_X: number = 105;
  private UBICACION_PRIMERA_MONEDA_Y: number = 125;
  private DISTANCIA_ENTRE_MONEDAS: number = 35;
  private CANTIDAD_MAXIMA_MONEDAS: number = 40;

  constructor(cNivel: CNivel, hud: any) {
    this._cNivel = cNivel;
    this._hud = hud;
    this._monedas = new Array<any>();
    let x = this.UBICACION_PRIMERA_MONEDA_Y;
    for (let i = 0; i < this.CANTIDAD_MAXIMA_MONEDAS; i++) {
      this.monedas.push(
        hud.add.image(this.UBICACION_PRIMERA_MONEDA_X, x, "moneda")
      ); //Agrega la moneda
      x += this.DISTANCIA_ENTRE_MONEDAS;
    }
    this.ReiniciarHud();
    this.puntero = this.cNivel.niveles[0].puntajeActual - 1;
  }

  public ReiniciarHud() {
    for (
      let index = this.monedas.length - 1;
      index >= this._cNivel.niveles[this._cNivel.nivelActual].puntajeActual;
      index--
    ) {
      this.monedas[index].setVisible(false);
    }
  }

  private SumarMonedas(n: number) {
    console.log(this._cNivel.niveles[this._cNivel.nivelActual].puntajeMaximo);
    if (
      this.puntero + 1 >=
      this._cNivel.niveles[this._cNivel.nivelActual].puntajeMaximo
    ) {
      throw new Error("No se puede sumar mas monedas");
    }
    for (let index = this.puntero; index <= this.puntero + n; index++) {
      this.monedas[Phaser.Math.Clamp(index, 0, 40)].setVisible(true);
    }
  }

  private RestarMonedas(n: number) {
    for (let index = this.puntero; index > this.puntero + n; index--) {
      this.monedas[index].setVisible(false);
    }
  }

  public ActualizarMonedas(n: number): boolean {
    console.log(this.puntero);
    try {
      if (n >= 0) {
        this.SumarMonedas(n);
      } else {
        this.RestarMonedas(n);
      }
      this.puntero += n;
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  public CargarHud() {
    this.cNivel.niveles[0].pantallaDeJuego.scene.launch("Hud");
    this.cNivel.niveles[0].pantallaDeJuego.scene.moveUp(
      this.cNivel.niveles[0].pantallaDeJuego.scene.get("Hud")
    ); //Lanza la escena de configuracion
  }

  public ActualizarHud() {}

  public get cNivel(): CNivel {
    return this._cNivel;
  }

  public set cNivel(value: CNivel) {
    this._cNivel = value;
  }

  public get hud(): any {
    return this._hud;
  }

  public set hud(value: any) {
    this._hud = value;
  }

  public get monedas(): Array<any> {
    return this._monedas;
  }

  public set monedas(value: Array<any>) {
    this._monedas = value;
  }

  public get puntero(): number {
    return this._puntero;
  }

  public set puntero(value: number) {
    this._puntero = value;
  }
}
