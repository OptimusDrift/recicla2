import CFinDelJuego from "./CFinDelJuego";
import CNivel from "./CNivel";

export default class CHud {
  private _cNivel: CNivel;
  private _hud: any;
  private _monedas: Array<any>;
  private _puntero: number;
  private _cFinDelJuego: CFinDelJuego;

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
  }

  public CargarControlador(controladorFinDelJuego: CFinDelJuego) {
    this._cFinDelJuego = controladorFinDelJuego;
  }

  public ReiniciarHud() {
    this.MostrarTodasLasMonedas();
    this.puntero =
      this.cNivel.niveles[this.cNivel.nivelActual].puntajeInicial - 1;
    for (
      let index = this.monedas.length - 1;
      index >= this._cNivel.niveles[this._cNivel.nivelActual].puntajeInicial;
      index--
    ) {
      this.monedas[index].setVisible(false);
    }
    this.hud.scene.moveAbove("Hud");
  }

  public MostrarTodasLasMonedas() {
    this.monedas.forEach((moneda) => {
      moneda.setVisible(true).setScale(1);
    });
  }

  //A falta de tiempo, bucles y recursividad el ctrl + c y ctrl + v son tus amiwis, quien te conoce optimizacion de codigo
  public MostrarAnimacionSuma(moneda: any, x: number, escena: any) {
    moneda.setScale(0);
    escena.time.addEvent({
      delay: x,
      callback: () => {
        escena.time.addEvent({
          delay: 50,
          callback: () => {
            moneda.setScale(0.1);
          },
        });
        escena.time.addEvent({
          delay: 100,
          callback: () => {
            moneda.setScale(0.2);
          },
        });
        escena.time.addEvent({
          delay: 150,
          callback: () => {
            moneda.setScale(0.3);
          },
        });
        escena.time.addEvent({
          delay: 200,
          callback: () => {
            moneda.setScale(0.4);
          },
        });
        escena.time.addEvent({
          delay: 250,
          callback: () => {
            moneda.setScale(0.5);
          },
        });
        escena.time.addEvent({
          delay: 300,
          callback: () => {
            moneda.setScale(0.6);
          },
        });
        escena.time.addEvent({
          delay: 350,
          callback: () => {
            moneda.setScale(0.7);
          },
        });
        escena.time.addEvent({
          delay: 400,
          callback: () => {
            moneda.setScale(0.8);
          },
        });
        escena.time.addEvent({
          delay: 450,
          callback: () => {
            moneda.setScale(0.9);
          },
        });
        escena.time.addEvent({
          delay: 500,
          callback: () => {
            moneda.setScale(1);
          },
        });
        escena.time.addEvent({
          delay: 550,
          callback: () => {
            moneda.setScale(1.1);
          },
        });
        escena.time.addEvent({
          delay: 600,
          callback: () => {
            moneda.setScale(1.2);
          },
        });
        escena.time.addEvent({
          delay: 650,
          callback: () => {
            moneda.setScale(1.1);
          },
        });
        escena.time.addEvent({
          delay: 700,
          callback: () => {
            moneda.setScale(1);
          },
        });
      },
    });
  }

  private MostrarAnimacionResta(moneda: any, x: number) {
    moneda.setScale(1);
    this.hud.time.addEvent({
      delay: x,
      callback: () => {
        this.hud.time.addEvent({
          delay: 50,
          callback: () => {
            moneda.setScale(1.1);
          },
        });
        this.hud.time.addEvent({
          delay: 150,
          callback: () => {
            moneda.setScale(1.2);
          },
        });
        this.hud.time.addEvent({
          delay: 200,
          callback: () => {
            moneda.setScale(1.1);
          },
        });
        this.hud.time.addEvent({
          delay: 250,
          callback: () => {
            moneda.setScale(1);
          },
        });
        this.hud.time.addEvent({
          delay: 300,
          callback: () => {
            moneda.setScale(0.9);
          },
        });
        this.hud.time.addEvent({
          delay: 350,
          callback: () => {
            moneda.setScale(0.8);
          },
        });
        this.hud.time.addEvent({
          delay: 400,
          callback: () => {
            moneda.setScale(0.7);
          },
        });
        this.hud.time.addEvent({
          delay: 450,
          callback: () => {
            moneda.setScale(0.6);
          },
        });
        this.hud.time.addEvent({
          delay: 500,
          callback: () => {
            moneda.setScale(0.5);
          },
        });
        this.hud.time.addEvent({
          delay: 550,
          callback: () => {
            moneda.setScale(0.4);
          },
        });
        this.hud.time.addEvent({
          delay: 600,
          callback: () => {
            moneda.setScale(0.3);
          },
        });
        this.hud.time.addEvent({
          delay: 650,
          callback: () => {
            moneda.setScale(0.2);
          },
        });
        this.hud.time.addEvent({
          delay: 700,
          callback: () => {
            moneda.setScale(0.1);
          },
        });
        this.hud.time.addEvent({
          delay: 750,
          callback: () => {
            moneda.setVisible(false);
          },
        });
      },
    });
  }

  private SumarMonedas(n: number) {
    if (
      this.puntero + 1 >=
      this._cNivel.niveles[this._cNivel.nivelActual].puntajeMaximo
    ) {
      throw new Error("No se puede sumar mas monedas");
    }
    let x = 0;
    for (let index = this.puntero + 1; index <= this.puntero + n; index++) {
      let moneda = this.monedas[Phaser.Math.Clamp(index, 0, 40)];
      moneda.setVisible(true);
      this.MostrarAnimacionSuma(moneda, x, this.hud);
      x += 100;
    }
  }

  private RestarMonedas(n: number) {
    let x = 0;
    for (let index = this.puntero; index > this.puntero + n; index--) {
      this.MostrarAnimacionResta(this.monedas[index], x);
      x += 100;
    }
  }

  public ActualizarMonedas(n: number): boolean {
    try {
      if (n >= 0) {
        this.SumarMonedas(n);
      } else {
        this.RestarMonedas(n);
      }
      this.puntero += n;
      this.ControlarMonedas();
      return true;
    } catch (error) {
      this.puntero += n;
      console.log(error);
    }
    return false;
  }

  public CargarHud() {
    this.cNivel.niveles[0].pantallaDeJuego.scene.wake("Hud");
    this.cNivel.niveles[0].pantallaDeJuego.scene.moveUp(
      this.cNivel.niveles[0].pantallaDeJuego.scene.get("Hud")
    ); //Lanza la escena de configuracion
    this.MostrarTodasLasMonedas();
    this.ReiniciarHud();
  }

  public ControlarMonedas() {
    if (this.puntero < -1) {
      this.puntero = -1;
      this.cFinDelJuego.Derrota();
    } else if (
      this.puntero >=
        this.cNivel.niveles[this.cNivel.nivelActual].puntajeMaximo ||
      this.cNivel.sinReciduo
    ) {
      this.cNivel.sinReciduo = false;
      this.cFinDelJuego.Victoria();
    }
  }

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

  public get cFinDelJuego(): CFinDelJuego {
    return this._cFinDelJuego;
  }

  public set cFinDelJuego(value: CFinDelJuego) {
    this._cFinDelJuego = value;
  }
}
