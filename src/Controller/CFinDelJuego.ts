import CHud from "./CHud";
import CNivel from "./CNivel";

export default class CFinDelJuego {
  // Variables
  private _escena: any;
  private _cHud: CHud;
  private _cNivel: CNivel;
  private _ventanaCorrecto: any;
  private _monedas: Array<any>;
  private _txt: any;
  private _risa: any;

  private UBICACION_PRIMERA_MONEDA_X: number = 575;
  private UBICACION_PRIMERA_MONEDA_Y: number = 400;
  private DISTANCIA_ENTRE_MONEDAS: number = 35;
  private CANTIDAD_MAXIMA_MONEDAS: number = 40;

  //Estilo del texto
  private style = {
    fontFamily: "Indie Flower",
    fontSize: "120px",
    fill: "#000",
    boundsAlignH: "center",
    boundsAlignV: "middle",
  };

  // Constructor
  constructor(escena: any) {
    this._escena = escena;
    this.escena.add.image(1920 / 2, 1080 / 2, "fondoRosa");
    this._ventanaCorrecto = this.escena.add.image(
      1920 / 2,
      1080 / 2,
      "correcto"
    );
    this.ventanaCorrecto.setInteractive(); //Hace que sea interactiva
    this._monedas = new Array<any>();
    this.escena.anims.create({
      key: "risaVictoria",
      frames: this.escena.anims.generateFrameNumbers("risa", {
        start: 3,
        end: 3,
      }),
    }); //Crea la animación de Risa
    this.escena.anims.create({
      key: "risaSerrota",
      frames: this.escena.anims.generateFrameNumbers("risa", {
        start: 1,
        end: 1,
      }),
    }); //Crea la animación de Risa
    this._risa = this.escena.physics.add.sprite(1000 + 306, 100 + 434, "risa"); //Agrega a risa
    this.risa.body.allowGravity = false; //No afecta a la gravedad
    this.risa.anims.play("risaVictoria", true); //Inicia la animación de risa
    let x = this.UBICACION_PRIMERA_MONEDA_X;
    for (let i = 0; i < this.CANTIDAD_MAXIMA_MONEDAS; i++) {
      this.monedas.push(
        escena.add.image(x, this.UBICACION_PRIMERA_MONEDA_Y, "moneda")
      ); //Agrega la moneda
      this.OcultarMonedas(this.monedas);
      x += this.DISTANCIA_ENTRE_MONEDAS;
    }
    this._txt = escena.add.text(
      this.UBICACION_PRIMERA_MONEDA_X + this.DISTANCIA_ENTRE_MONEDAS * 0.85,
      530,
      "¡Victoria!",
      this.style
    );
  }

  OcultarMonedas(monedas: Array<any>) {
    monedas.forEach((moneda: any) => {
      moneda.setVisible(false);
    });
  }

  public CargarControladores(cNivel: CNivel, cHud: CHud) {
    this.cNivel = cNivel;
    this.cHud = cHud;
  }

  MostrarFinDelJuego(b: boolean = false) {
    console.log(this.escena.scene.get("FinDelJuego"));
    this.escena.scene.pause("Nivel" + (this.cNivel.nivelActual + 1));
    this.OcultarMonedas(this.monedas);
    this.escena.scene.wake("FinDelJuego");
    this.escena.scene.moveAbove("FinDelJuego");
    this.LimpiarListeners();
    let x = 0;
    if (!b) {
      for (let index = 0; index <= this.cHud.puntero; index++) {
        let moneda = this.monedas[Phaser.Math.Clamp(index, 0, 40)];
        this.cHud.MostrarAnimacionSuma(moneda, x, this.escena);
        moneda.setVisible(true);
        moneda.setAlpha(1);
        moneda.setDepth(1);
        x += 400;
      }
    }
    for (
      let index = this.cHud.puntero + 1;
      index < this.cNivel.niveles[this.cNivel.nivelActual].puntajeMaximo;
      index++
    ) {
      let moneda = this.monedas[Phaser.Math.Clamp(index, 0, 40)];
      moneda.setAlpha(0.3);
      moneda.setVisible(true);
      moneda.setDepth(1);
      this.cHud.MostrarAnimacionSuma(moneda, x, this.escena);
      x += 400;
    }
    this.ventanaCorrecto.on("pointerup", () => this.OcultarVista()); //Cuando se hace click, se carga la trivia
  }

  private LimpiarListeners() {
    this.ventanaCorrecto.off("pointerup");
  }

  OcultarVista() {
    this.escena.scene.sleep("FinDelJuego");
  }

  public Victoria() {
    this.txt.setText("¡Victoria!");
    this.MostrarFinDelJuego();
    this.ventanaCorrecto.on("pointerup", () => this.cNivel.GanarNivel()); //Cuando se hace click, se carga la trivia
  }

  public Derrota() {
    this.txt.setText("¡Derrota!");
    this.MostrarFinDelJuego(true);
    this.ventanaCorrecto.on("pointerup", () => this.cNivel.PerderNivel()); //Cuando se hace click, se carga la trivia
  }

  // Métodos
  public get escena(): any {
    return this._escena;
  }

  public set escena(value: any) {
    this._escena = value;
  }

  public get cHud(): CHud {
    return this._cHud;
  }

  public set cHud(value: CHud) {
    this._cHud = value;
  }

  public get cNivel(): CNivel {
    return this._cNivel;
  }

  public set cNivel(value: CNivel) {
    this._cNivel = value;
  }

  public get monedas(): Array<any> {
    return this._monedas;
  }

  public set monedas(value: Array<any>) {
    this._monedas = value;
  }

  public get txt(): any {
    return this._txt;
  }

  public set txt(value: any) {
    this._txt = value;
  }

  public get risa(): any {
    return this._risa;
  }

  public set risa(value: any) {
    this._risa = value;
  }

  public get ventanaCorrecto(): any {
    return this._ventanaCorrecto;
  }

  public set ventanaCorrecto(value: any) {
    this._ventanaCorrecto = value;
  }
}
