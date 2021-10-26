import Boton from "../Model/Boton";
import CConfiguracion from "./CConfiguracion";

export default class CMenuPrincipal {
  //Atributos
  private _escena: any;
  private _cConfiguracion: CConfiguracion;

  //Botones
  private _botones: Array<Boton>;

  //Constantes del menu
  private BOTON_CREDITOS_POSICION_X = 504;
  private BOTON_CREDITOS_POSICION_Y = 882;
  private BOTON_GOMERA_POSICION_X = 960;
  private BOTON_GOMERA_POSICION_Y = 817;
  private BOTON_TIENDA_POSICION_X = 1416;
  private BOTON_TIENDA_POSICION_Y = 917;
  private BOTON_CONFIGURACION_POSICION_X = 1862;
  private BOTON_CONFIGURACION_POSICION_Y = 64;

  //Estilo del texto
  private style = { font: "20x Arial", fill: "#fff" };

  //Constructor
  constructor(escena: any, cConfiguracion: CConfiguracion) {
    this._escena = escena; //Asignamos la escena
    this.cConfiguracion = cConfiguracion; //Asignamos la configuracion
    this._botones = new Array<Boton>(); //Inicializa el array de botones
    let botonCreditos = new Boton(
      this.escena.add.text(0, 0, "", this.style),
      this.escena.add.image(
        this.BOTON_CREDITOS_POSICION_X,
        this.BOTON_CREDITOS_POSICION_Y,
        "creditos"
      ),
      undefined,
      undefined
    ); //Crea el boton de creditos
    let botonGomera = new Boton(
      this.escena.add.text(0, 0, "", this.style),
      this.escena.add.image(
        this.BOTON_GOMERA_POSICION_X,
        this.BOTON_GOMERA_POSICION_Y,
        "gomera"
      ),
      undefined,
      undefined
    ); //Crea el boton de gomera
    let botonTienda = new Boton(
      this.escena.add.text(0, 0, "", this.style),
      this.escena.add.image(
        this.BOTON_TIENDA_POSICION_X,
        this.BOTON_TIENDA_POSICION_Y,
        "tienda"
      ),
      undefined,
      undefined
    ); //Crea el boton de tienda
    let botonConfiguracion = new Boton(
      this.escena.add.text(0, 0, "", this.style),
      this.escena.add.image(
        this.BOTON_CONFIGURACION_POSICION_X,
        this.BOTON_CONFIGURACION_POSICION_Y,
        "configuracion"
      ),
      undefined,
      undefined
    ); //Crea el boton de configuracion
    botonCreditos.boton.setDepth(0); //Pone el boton de creditos en la capa 0
    botonGomera.boton.setDepth(0); //Pone el boton de gomera en la capa 0
    botonTienda.boton.setDepth(0); //Pone el boton de tienda en la capa 0
    botonConfiguracion.boton.setDepth(0); //Pone el boton de configuracion en la capa 0
    this._botones = [
      botonCreditos,
      botonGomera,
      botonTienda,
      botonConfiguracion,
    ]; //Añade los botones al array
    this.FuncionalidadBotones(); //Añade las funcionalidades de los botones
  }

  //Funcionalidad de los botones
  private FuncionalidadBotones() {
    this.botones[0].boton.on("pointerup", () => {
      this.escena.scene.pause("MenuPrincipal"); //Pausa la escena
      this.escena.scene.moveBelow("Creditos"); //Mueve la escena a la capa inferior
      this.escena.scene.wake("Creditos"); //Despausa la escena
    }); //Cuando se pulsa el boton de creditos
    this.botones[1].boton.on("pointerup", () => {
      this.escena.scene.sleep("MenuPrincipal"); //Pausa la escena
      this.escena.scene.get("Trivia").controladorTrivia.ReiniciarNivel(); //Reinicia el nivel
      this.escena.scene.get("Trivia").controladorTrivia.cHud.CargarHud();
      this.escena.scene.wake("Trivia");
    }); //Cuando se pulsa el boton de trivia
    this.botones[2].boton.on("pointerup", () => {
      //this.escena.scene.start("Tienda");
    }); //Cuando se pulsa el boton de tienda
    this.botones[3].boton.on("pointerup", () => {
      this.cConfiguracion.CambiarAVentanaConfiguracion("MenuPrincipal"); //Cambia a la ventana de configuracion
    }); //Cuando se pulsa el boton de configuracion
  }

  public set escena(value: any) {
    this._escena = value;
  }

  public get escena(): any {
    return this._escena;
  }

  public get botones(): Array<Boton> {
    return this._botones;
  }

  public set botones(value: Array<Boton>) {
    this._botones = value;
  }

  public get cConfiguracion(): CConfiguracion {
    return this._cConfiguracion;
  }

  public set cConfiguracion(value: CConfiguracion) {
    this._cConfiguracion = value;
  }
}
