import Boton from "../Model/Boton";

export default class CConfiguracion {
  private _esena: any;
  //Botones
  private _botones: Array<Boton>;

  //Constantes del menu
  private BOTON_CERRAR_POSICION_X = 1400;
  private BOTON_CERRAR_POSICION_Y = 317;
  private BOTON_GOMERA_POSICION_X = 0;
  private BOTON_GOMERA_POSICION_Y = 0;

  //Estilo del texto
  private style = { font: "20x Arial", fill: "#fff" };
  //Constructor
  constructor(escena: any) {
    this._esena = escena; //Asigna la escena
    this._botones = new Array<Boton>(); //Crea el array de botones
    let botonCerrar = new Boton(
      this.esena.add.text(0, 0, "", this.style),
      this.esena.add.image(
        this.BOTON_CERRAR_POSICION_X,
        this.BOTON_CERRAR_POSICION_Y,
        "botonX"
      ),
      undefined,
      undefined
    ); //Crea el boton de cerrar
    botonCerrar.boton.setDepth(2); //Establece la profundidad
    this.botones.push(botonCerrar); //Agrega el boton al array
    this.FuncionalidadBotones(); //Agrega la funcionalidad de los botones
  }

  //Funcionalidad de los botones
  private FuncionalidadBotones() {
    this.botones[0].boton.on("pointerup", () => {
      this.esena.scene.resume("MenuPrincipal"); //Resume la escena
      this.esena.scene.moveBelow("Configuracion", "MenuPrincipal"); //Mueve la escena
      this.esena.scene.sleep("Configuracion"); //Pausa la escena
    });
  }

  public get esena(): any {
    return this._esena;
  }

  public set esena(value: any) {
    this._esena = value;
  }

  public get botones(): Array<Boton> {
    return this._botones;
  }

  public set botones(value: Array<Boton>) {
    this._botones = value;
  }
}
