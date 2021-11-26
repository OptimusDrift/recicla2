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

  //Texto botones
  private _textoSalir: any;
  private _textoAyuda: any;
  private _btnNo: any;
  private _btnSi: any;

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
      undefined,
      1.4
    ); //Crea el botón de configuración
    this.botonMenuPrincipal.boton.setDepth(2); //Establece la profundidad
    this._escenaActual = "";
    this._btnSi = this.escenaVolver.add.text(
      this.BOTON_SI_POSICION_X,
      this.BOTON_SI_POSICION_Y,
      "Si",
      this.style
    );
    this._botonSi = new Boton(
      this.btnSi,
      this.escenaVolver.add.image(
        this.BOTON_SI_POSICION_X,
        this.BOTON_SI_POSICION_Y,
        "boton2"
      ),
      undefined,
      undefined
    ); //Crea el botón de cerrar
    this.btnSi.setDepth(3);
    this.botonSi.boton.setDepth(2); //Establece la profundidad
    this.botonSi.boton.setVisible(false); //Establece la visibilidad
    this.botonSi.boton.setTint(0x3a5311); //Establece el color
    this._btnNo = this.escenaVolver.add.text(
      this.BOTON_NO_POSICION_X,
      this.BOTON_NO_POSICION_Y,
      "No",
      this.style
    );
    this._textoSalir = this.escenaVolver.add.text(
      615,
      410,
      "¿Quieres volver al menú principal?",
      this.style
    );
    this.textoSalir.setDepth(3);
    this.textoSalir.setColor("#4a241e");
    this.textoSalir.setVisible(false);
    this._textoAyuda = this.escenaVolver.add.text(
      700,
      400,
      "¡Puedes apoyarme\ncomprando un cafecito!",
      this.style
    );
    this.textoAyuda.setDepth(3);
    this.textoAyuda.setColor("#4a241e");
    this.textoAyuda.setVisible(false);
    this._botonNo = new Boton(
      this.btnNo,
      this.escenaVolver.add.image(
        this.BOTON_NO_POSICION_X,
        this.BOTON_NO_POSICION_Y,
        "boton2"
      ),
      undefined,
      undefined
    ); //Crea el botón de cerrar
    this.btnNo.setDepth(3);
    //_botonEspañol
    let e = this.escena.add.text(
      this.BOTON_ESPAÑOL_POSICION_X,
      this.BOTON_ESPAÑOL_POSICION_Y,
      "Español",
      this.style
    );
    this._botonEspañol = new Boton(
      e,
      this.escena.add.image(
        this.BOTON_ESPAÑOL_POSICION_X,
        this.BOTON_ESPAÑOL_POSICION_Y,
        "boton2"
      ),
      undefined,
      undefined,
      0.85
    ); //Crea el boton de español
    this.botonEspañol.boton.on("pointerup", () => {
      this.idioma = "Español";
      this.textoSalir.setText("¿Quieres volver al menú principal?");
      this.textoAyuda.setText("¡Puedes apoyarme\ncomprando un cafecito!");
      this.btnSi.setText("Si");
      this.btnNo.setText("No");
      this.ReiniciarBotones();
      this.botonEspañol.CambiarColor(0x3a5311);
      this.escena.scene
        .get("pantallaDeCarga")
        .controladorMenuPrincipal.botones[0].texto.setText("Créditos");
      this.escena.scene
        .get("pantallaDeCarga")
        .controladorMenuPrincipal.botones[1].texto.setText("Jugar");
      this.escena.scene
        .get("pantallaDeCarga")
        .controladorMenuPrincipal.botones[2].texto.setText("Tienda");
    });
    this.botonEspañol.CambiarColor(0x3a5311);
    let i = this.escena.add.text(
      this.BOTON_INGLES_POSICION_X,
      this.BOTON_INGLES_POSICION_Y,
      "English",
      this.style
    );
    this._botonIngles = new Boton(
      i,
      this.escena.add.image(
        this.BOTON_INGLES_POSICION_X,
        this.BOTON_INGLES_POSICION_Y,
        "boton2"
      ),
      undefined,
      undefined,
      0.85
    ); //Crea el boton de ingles
    this.botonIngles.boton.on("pointerup", () => {
      this.idioma = "Ingles";
      this.textoSalir.setText("Do you want to go back to the\nmain menu?");
      this.textoAyuda.setText("You can support me by\nbuying a coffee!");
      this.btnSi.setText("Yes");
      this.btnNo.setText("No");
      this.ReiniciarBotones();
      this.botonIngles.CambiarColor(0x3a5311);
      this.escena.scene
        .get("pantallaDeCarga")
        .controladorMenuPrincipal.botones[0].texto.setText("Credits");
      this.escena.scene
        .get("pantallaDeCarga")
        .controladorMenuPrincipal.botones[1].texto.setText("Play");
      this.escena.scene
        .get("pantallaDeCarga")
        .controladorMenuPrincipal.botones[2].texto.setText("Shop");
    });
    let p = this.escena.add.text(
      this.BOTON_PORTUGUES_POSICION_X,
      this.BOTON_PORTUGUES_POSICION_Y,
      "Português",
      this.style
    );
    this._botonPortugues = new Boton(
      p,
      this.escena.add.image(
        this.BOTON_PORTUGUES_POSICION_X,
        this.BOTON_PORTUGUES_POSICION_Y,
        "boton2"
      ),
      undefined,
      undefined,
      0.85
    ); //Crea el boton de portugues
    this.botonPortugues.boton.on("pointerup", () => {
      this.idioma = "Portugues";
      this.textoSalir.setText("  Quer voltar ao menu principal?");
      this.textoAyuda.setText("Você pode me apoiar\ncomprando um café!");
      this.btnSi.setText("Sim");
      this.btnNo.setText("Não");
      this.ReiniciarBotones();
      this.botonPortugues.CambiarColor(0x3a5311);
      this.escena.scene
        .get("pantallaDeCarga")
        .controladorMenuPrincipal.botones[0].texto.setText("Créditos");
      this.escena.scene
        .get("pantallaDeCarga")
        .controladorMenuPrincipal.botones[1].texto.setText("Toque");
      this.escena.scene
        .get("pantallaDeCarga")
        .controladorMenuPrincipal.botones[2].texto.setText("Comprar");
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
  }

  ReiniciarBotones() {
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
    this.botonNo.boton.off("pointerup"); //Quita la funcionalidad del botón
    this.textoAyuda.setVisible(false); //Quita la visibilidad del texto
    this.textoSalir.setVisible(false); //Quita la visibilidad del texto
  }

  private setVisibleBotonMenuPrincipal(estadoMenu: boolean) {
    this.botonMenuPrincipal.boton.setVisible(estadoMenu);
    this.botonEspañol.OcultarBoton(!estadoMenu);
    this.botonIngles.OcultarBoton(!estadoMenu);
    this.botonPortugues.OcultarBoton(!estadoMenu);
    if (estadoMenu) {
      this.botonMenuPrincipal.boton.off("pointerup"); //Quita la funcionalidad del botón
      this.textoSalir.setVisible(true);
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
        this.escena.scene.get(ventanaAVolver).controladorNivel.PerderNivel();
        this.escena.scene.wake("MenuPrincipal"); //Resume la escena
        this.escena.scene.moveAbove("MenuPrincipal"); //Mueve la escena
        this.escena.scene.sleep(ventanaAVolver); //Pausa la escena
        this.escena.scene.setActive(false, ventanaAVolver); //Pausa la escena
        this.escena.scene.sleep("Configuracion"); //Pausa la escena
        this.escena.scene.sleep("Volver"); //Pausa la escena
        this.escena.scene.sleep("Hud"); //Pausa la escena
      });
      this.botonNo.boton.on("pointerup", () => {
        this.escena.scene.sleep("Volver"); //Resume la escena
        this.escena.scene.moveAbove("Configuracion"); //Mueve la escena
        this.escena.scene.resume("Configuracion"); //Pausa la escena
      });
    });
  }

  public BotonComprarCafe() {
    this.QuitarFuncionalidadAlBoton();
    this.escena.scene.wake("Volver"); //Resume la escena
    this.escena.scene.moveUp("Volver"); //Mueve la escena
    this.botonNo.boton.setVisible(true);
    this.botonSi.boton.setVisible(true);
    this.textoAyuda.setVisible(true);
    this.escena.scene.pause("MenuPrincipal"); //Pausa la escena
    this.botonSi.boton.on("pointerup", () => {
      window.location.href = "https://ko-fi.com/optimusdrift";
    });
    this.botonNo.boton.on("pointerup", () => {
      this.escena.scene.sleep("Volver"); //Resume la escena
      this.escena.scene.resume("MenuPrincipal");
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

  public get btnSi(): any {
    return this._btnSi;
  }

  public set btnSi(value: any) {
    this._btnSi = value;
  }

  public get btnNo(): any {
    return this._btnNo;
  }

  public set btnNo(value: any) {
    this._btnNo = value;
  }

  public get textoSalir(): any {
    return this._textoSalir;
  }

  public set textoSalir(value: any) {
    this._textoSalir = value;
  }

  public get textoAyuda(): any {
    return this._textoAyuda;
  }

  public set textoAyuda(value: any) {
    this._textoAyuda = value;
  }
}
