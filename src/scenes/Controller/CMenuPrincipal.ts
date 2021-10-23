import Boton from "../Model/Boton";

export default class CMenuPrincipal {
  private _esena: any;

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
  constructor(escena: any) {
    this._esena = escena; //Asignamos la escena
    this._botones = new Array<Boton>(); //Inicializa el array de botones
    let botonCreditos = new Boton(
      this.esena.add.text(0, 0, "", this.style),
      this.esena.add.image(
        this.BOTON_CREDITOS_POSICION_X,
        this.BOTON_CREDITOS_POSICION_Y,
        "creditos"
      ),
      undefined,
      undefined
    ); //Crea el boton de creditos
    let botonGomera = new Boton(
      this.esena.add.text(0, 0, "", this.style),
      this.esena.add.image(
        this.BOTON_GOMERA_POSICION_X,
        this.BOTON_GOMERA_POSICION_Y,
        "gomera"
      ),
      undefined,
      undefined
    ); //Crea el boton de gomera
    let botonTienda = new Boton(
      this.esena.add.text(0, 0, "", this.style),
      this.esena.add.image(
        this.BOTON_TIENDA_POSICION_X,
        this.BOTON_TIENDA_POSICION_Y,
        "tienda"
      ),
      undefined,
      undefined
    ); //Crea el boton de tienda
    let botonConfiguracion = new Boton(
      this.esena.add.text(0, 0, "", this.style),
      this.esena.add.image(
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
      this.esena.scene.pause("MenuPrincipal"); //Pausa la escena
      this.esena.scene.moveBelow("MenuPrincipal", "Creditos"); //Mueve la escena a la capa inferior
      this.esena.scene.wake("Creditos"); //Despausa la escena
    }); //Cuando se pulsa el boton de creditos
    this.botones[1].boton.on("pointerup", () => {
      this.esena.scene.pause("MenuPrincipal"); //Pausa la escena
      this.esena.scene.wake("Trivia"); //Despausa la escena
    }); //Cuando se pulsa el boton de trivia
    this.botones[2].boton.on("pointerup", () => {
      //this.esena.scene.start("Tienda");
    }); //Cuando se pulsa el boton de tienda
    this.botones[3].boton.on("pointerup", () => {
      this.esena.scene.wake("Configuracion"); //Despausa la escena
      this.esena.scene.moveBelow("MenuPrincipal", "Configuracion"); //Mueve la escena a la capa inferior
      this.esena.scene.pause("MenuPrincipal"); //Pausa la escena
    });
  }

  public set esena(value: any) {
    this._esena = value;
  }

  public get esena(): any {
    return this._esena;
  }

  public get botones(): Array<Boton> {
    return this._botones;
  }

  public set botones(value: Array<Boton>) {
    this._botones = value;
  }
}
