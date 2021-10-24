import Boton from "../Model/Boton";

export default class CConfiguracion {
  // Variables
  private _escena: any;
  private _escenaActual: string;
  //Botones
  private _boton: Boton;
  private _botonMenuPrincipal: Boton;

  //Constantes del menu
  private BOTON_CERRAR_POSICION_X = 1400;
  private BOTON_CERRAR_POSICION_Y = 317;
  private BOTON_MENUPRINCIPAL_POSICION_X = 862;
  private BOTON_MENUPRINCIPAL_POSICION_Y = 164;

  //Estilo del texto
  private style = { font: "20x Arial", fill: "#fff" };
  //Constructor
  constructor(escena: any) {
    this._escena = escena; //Asigna la escena
    this._boton = new Boton(
      this.escena.add.text(0, 0, "", this.style),
      this.escena.add.image(
        this.BOTON_CERRAR_POSICION_X,
        this.BOTON_CERRAR_POSICION_Y,
        "botonX"
      ),
      undefined,
      undefined
    ); //Crea el boton de cerrar
    this.boton.boton.setDepth(2); //Establece la profundidad
    this._botonMenuPrincipal = new Boton(
      this.escena.add.text(0, 0, "", this.style),
      this.escena.add.image(
        this.BOTON_MENUPRINCIPAL_POSICION_X,
        this.BOTON_MENUPRINCIPAL_POSICION_Y,
        "menuPrincipal"
      ),
      undefined,
      undefined
    ); //Crea el botón de configuración
    this.botonMenuPrincipal.boton.setDepth(2); //Establece la profundidad
    this._escenaActual = "";
  }

  public CambiarAVentanaConfiguracion(
    escenaActual: string,
    menuPrincipal: boolean = false
  ) {
    this.QuitarFuncionalidadAlBoton();
    this._escenaActual = escenaActual;
    this.escena.scene.wake("Configuracion"); //Resume la escena
    this.escena.scene.moveAbove(escenaActual); //Mueve la escena
    this.escena.scene.pause(escenaActual); //Pausa la escena
    this.setVisibleBotonMenuPrincipal(menuPrincipal);
    this.boton.boton.on("pointerup", () => {
      this.escena.scene.wake(escenaActual); //Resume la escena
      this.escena.scene.sleep("Configuracion"); //Pausa la escena
    });
  }

  private QuitarFuncionalidadAlBoton() {
    this.boton.boton.off("pointerup"); //Quita la funcionalidad del botón
  }

  private setVisibleBotonMenuPrincipal(estadoMenu: boolean) {
    this.botonMenuPrincipal.boton.setVisible(estadoMenu);
    if (estadoMenu) {
      this.botonMenuPrincipal.boton.off("pointerup"); //Quita la funcionalidad del botón
      this.botonMenuPrincipal.boton.setDepth(2); //Establece la profundidad
      this.BotonMenuPrincipal(this.escenaActual);
    }
  }

  private BotonMenuPrincipal(ventanaAVolver: string) {
    this.botonMenuPrincipal.boton.on("pointerup", () => {
      this.escena.scene.wake("MenuPrincipal"); //Resume la escena
      this.escena.scene.moveAbove("MenuPrincipal"); //Mueve la escena
      this.escena.scene.sleep(ventanaAVolver); //Pausa la escena
      this.escena.scene.setActive(false, ventanaAVolver); //Mueve la escenaPausa la escena
      this.escena.scene.sleep("Configuracion"); //Pausa la escena
    });
  }

  public get escena(): any {
    return this._escena;
  }

  public set escena(value: any) {
    this._escena = value;
  }

  public get boton(): Boton {
    return this._boton;
  }

  public set boton(value: Boton) {
    this._boton = value;
  }

  public get botonMenuPrincipal(): Boton {
    return this._botonMenuPrincipal;
  }

  public set botonMenuPrincipal(v: Boton) {
    this._botonMenuPrincipal = v;
  }

  public get escenaActual(): string {
    return this._escenaActual;
  }

  public set escenaActual(value: string) {
    this._escenaActual = value;
  }
}
