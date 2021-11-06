import Boton from "../Model/Boton";

export default class CConfiguracion {
  // Variables
  private _escena: any;
  private _escenaVolver: any;
  private _idioma: string;
  private _escenaActual: string;
  //Botones
  private _boton: Boton;
  private _botonMenuPrincipal: Boton;
  private _botonEspañol: Boton;
  private _botonIngles: Boton;
  private _botonPortugues: Boton;
  private _botonSi: Boton;
  private _botonNo: Boton;

  //Constantes del menu
  private BOTON_CERRAR_POSICION_X = 1400;
  private BOTON_CERRAR_POSICION_Y = 317;
  private BOTON_MENUPRINCIPAL_POSICION_X = 960;
  private BOTON_MENUPRINCIPAL_POSICION_Y = 576 + 76;
  private BOTON_SI_POSICION_X = 602 + 171;
  private BOTON_SI_POSICION_Y = 576 + 76;
  private BOTON_NO_POSICION_X = 971 + 171;
  private BOTON_NO_POSICION_Y = 576 + 76;
  private BOTON_ESPAÑOL_POSICION_X = 660;
  private BOTON_ESPAÑOL_POSICION_Y = 576 + 76;
  private BOTON_INGLES_POSICION_X = 960;
  private BOTON_INGLES_POSICION_Y = 576 + 76;
  private BOTON_PORTUGUES_POSICION_X = 1260;
  private BOTON_PORTUGUES_POSICION_Y = 576 + 76;

  //Estilo del texto
  private style = {
    fontFamily: "Indie Flower",
    fontSize: "50px",
    fill: "#fff",
    boundsAlignH: "center",
    boundsAlignV: "middle",
  };
  //Constructor
  constructor(escena: any, escenaVolver: any) {
    this._escena = escena; //Asigna la escena
    this._escenaVolver = escenaVolver; //Asigna la escena
    this._idioma = "Español"; //Asigna el idioma
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
      undefined,1.4
    ); //Crea el botón de configuración
    this.botonMenuPrincipal.boton.setDepth(2); //Establece la profundidad
    this._escenaActual = "";
    this._botonSi = new Boton(
      this.escenaVolver.add.text(0, 0, "", this.style),
      this.escenaVolver.add.image(
        this.BOTON_SI_POSICION_X,
        this.BOTON_SI_POSICION_Y,
        "boton2"
      ),
      undefined,
      undefined
    ); //Crea el botón de cerrar
    this.botonSi.boton.setDepth(2); //Establece la profundidad
    this.botonSi.boton.setVisible(false); //Establece la visibilidad
    this.botonSi.boton.setTint(0x3a5311); //Establece el color
    this._botonNo = new Boton(
      this.escenaVolver.add.text(0, 0, "", this.style),
      this.escenaVolver.add.image(
        this.BOTON_NO_POSICION_X,
        this.BOTON_NO_POSICION_Y,
        "boton2"
      ),
      undefined,
      undefined
    ); //Crea el botón de cerrar
    //_botonEspañol
    let e = this.escena.add.text(this.BOTON_ESPAÑOL_POSICION_X, this.BOTON_ESPAÑOL_POSICION_Y, "Español", this.style);
    this._botonEspañol = new Boton(
      e,
      this.escena.add.image(
        this.BOTON_ESPAÑOL_POSICION_X,
        this.BOTON_ESPAÑOL_POSICION_Y,
        "boton2",
      ),
      undefined,
      undefined,.85
    ); //Crea el boton de español
    this.botonEspañol.boton.on("pointerup", () => {
      this.idioma = "Español";
      this.ReiniciarBotones();
      this.botonEspañol.CambiarColor(0x3a5311);
    });
    this.botonEspañol.CambiarColor(0x3a5311);
    let i = this.escena.add.text(this.BOTON_INGLES_POSICION_X, this.BOTON_INGLES_POSICION_Y, "English", this.style)  ;
    this._botonIngles = new Boton(
      i,
      this.escena.add.image(
        this.BOTON_INGLES_POSICION_X,
        this.BOTON_INGLES_POSICION_Y,
        "boton2",
      ),
      undefined,
      undefined,.85
    ); //Crea el boton de ingles
    this.botonIngles.boton.on("pointerup", () => {
      this.idioma = "Ingles";
      this.ReiniciarBotones();
      this.botonIngles.CambiarColor(0x3a5311);
    });
    let p = this.escena.add.text(this.BOTON_PORTUGUES_POSICION_X, this.BOTON_PORTUGUES_POSICION_Y, "Português", this.style);
    this._botonPortugues = new Boton(
      p,
      this.escena.add.image(
        this.BOTON_PORTUGUES_POSICION_X,
        this.BOTON_PORTUGUES_POSICION_Y,
        "boton2",
      ),
      undefined,
      undefined,.85
    ); //Crea el boton de portugues
    this.botonPortugues.boton.on("pointerup", () => {
      this.idioma = "Portugues";
      this.ReiniciarBotones();
      this.botonPortugues.CambiarColor(0x3a5311);
    });
    this.botonEspañol.boton.setDepth(2); //Establece la profundidad
    this.botonIngles.boton.setDepth(2); //Establece la profundidad
    this.botonPortugues.boton.setDepth(2); //Establece la profundidad
    e.setDepth(3);
    i.setDepth(3);
    p.setDepth(3);
    this.botonNo.boton.setDepth(2); //Establece la profundidad
    this.botonNo.boton.setVisible(false); //Establece la visibilidad
    this.botonNo.boton.setTint(0xd40032); //Establece el color
    this.botonNo.boton.on("pointerup", () => {
      this.escena.scene.sleep("Volver"); //Resume la escena
      this.escena.scene.moveAbove("Configuracion"); //Mueve la escena
      this.escena.scene.resume("Configuracion"); //Pausa la escena
    });
  }

  ReiniciarBotones(){
    this.botonEspañol.LimpiarColor();
    this.botonIngles.LimpiarColor();
    this.botonPortugues.LimpiarColor();
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
    this.botonSi.boton.off("pointerup"); //Quita la funcionalidad del botón
  }

  private setVisibleBotonMenuPrincipal(estadoMenu: boolean) {
    this.botonMenuPrincipal.boton.setVisible(estadoMenu);
    this.botonEspañol.OcultarBoton(!estadoMenu);
    this.botonIngles.OcultarBoton(!estadoMenu);
    this.botonPortugues.OcultarBoton(!estadoMenu);
    if (estadoMenu) {
      this.botonMenuPrincipal.boton.off("pointerup"); //Quita la funcionalidad del botón
      this.botonMenuPrincipal.boton.setDepth(2); //Establece la profundidad
      this.BotonMenuPrincipal(this.escenaActual);
    }
  }
  private BotonMenuPrincipal(ventanaAVolver: string) {
    this.botonMenuPrincipal.boton.on("pointerup", () => {
      this.escena.scene.wake("Volver"); //Resume la escena
      this.escena.scene.moveUp("Volver"); //Mueve la escena
      this.botonNo.boton.setVisible(true);
      this.botonSi.boton.setVisible(true);
      this.escena.scene.pause("Configuracion"); //Pausa la escena
      this.botonSi.boton.on("pointerup", () => {
        this.escena.scene.wake("MenuPrincipal"); //Resume la escena
        this.escena.scene.moveAbove("MenuPrincipal"); //Mueve la escena
        this.escena.scene.sleep(ventanaAVolver); //Pausa la escena
        this.escena.scene.setActive(false, ventanaAVolver); //Pausa la escena
        this.escena.scene.sleep("Configuracion"); //Pausa la escena
        this.escena.scene.sleep("Volver"); //Pausa la escena
        this.escena.scene.sleep("Hud"); //Pausa la escena
      });
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

  public get escenaVolver(): any {
    return this._escenaVolver;
  }

  public set escenaVolver(value: any) {
    this._escenaVolver = value;
  }

  public get botonSi(): Boton {
    return this._botonSi;
  }

  public set botonSi(value: Boton) {
    this._botonSi = value;
  }

  public get botonNo(): Boton {
    return this._botonNo;
  }

  public set botonNo(value: Boton) {
    this._botonNo = value;
  }

  public get idioma(): string {
    return this._idioma;
  }

  public set idioma(value: string) {
    this._idioma = value;
  }

  public get botonEspañol(): Boton {
    return this._botonEspañol;
  }

  public set botonEspañol(value: Boton) {
    this._botonEspañol = value;
  }

  public get botonIngles(): Boton {
    return this._botonIngles;
  }

  public set botonIngles(value: Boton) {
    this._botonIngles = value;
  }

  public get botonPortugues(): Boton {
    return this._botonPortugues;
  }

  public set botonPortugues(value: Boton) {
    this._botonPortugues = value;
  }
}
