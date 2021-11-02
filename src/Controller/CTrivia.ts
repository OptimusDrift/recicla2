import Boton from "../Model/Boton";
import Pregunta from "../Model/Pregunta";
import Mejora from "../Model/Mejora";
import MejoraBomba from "../Model/MejoraBomba";
import MejoraCambio from "../Model/MejoraCambio";
import PreguntasJson from "./Preguntas.json";
import CConfiguracion from "./CConfiguracion";
import CNivel from "./CNivel";
import CHud from "./CHud";

export default class CTrivia {
  //Atributos de la trivia
  private _escena: any;
  private _botones: Array<Boton>;
  private _botonesMejoras: Array<Boton>;
  private _botonConfiguracion: Boton;
  private _mejoraBomba: Mejora;
  private _mejoraCambio: Mejora;
  private _preguntas: Array<Pregunta>;
  private _preguntasBackUp: Array<Pregunta>;
  private _preguntaActual: Pregunta;
  private _cConfiguracion: CConfiguracion;
  private _cNivel: CNivel;
  private _cHud: CHud;
  private _ventanaCorrecto: any;
  private _cuadroDeDialogo: any;

  //Constantes de la trivia
  private POSICION_PREGUNTA_X = 295;
  private POSICION_PREGUNTA_Y = 125;
  private BOTON_0_POSICION_X = 478;
  private BOTON_0_POSICION_Y = 628;
  private BOTON_1_POSICION_X = 478;
  private BOTON_1_POSICION_Y = 824;
  private BOTON_2_POSICION_X = 1078;
  private BOTON_2_POSICION_Y = 628;
  private BOTON_3_POSICION_X = 1078;
  private BOTON_3_POSICION_Y = 824;
  private BOTON_MEJORA_BOMBA_POSICION_X = 600;
  private BOTON_MEJORA_BOMBA_POSICION_Y = 1000;
  private BOTON_MEJORA_CAMBIO_POSICION_X = 900;
  private BOTON_MEJORA_CAMBIO_POSICION_Y = 1000;
  private BOTON_CONFIGURACION_POSICION_X = 1862;
  private BOTON_CONFIGURACION_POSICION_Y = 64;

  //Estilo del texto
  private style = {
    fontFamily: "Indie Flower",
    fontSize: "50px",
    fill: "#fff",
    boundsAlignH: "center",
    boundsAlignV: "middle",
  };

  //Personaje Risa
  private _risa: any;

  //Constructor
  constructor(escena: any, cNivel: CNivel, cConfiguracion: CConfiguracion) {
    this._escena = escena; //Asigna la escena
    this._cConfiguracion = cConfiguracion; //Asigna el controlador de configuración
    this._cuadroDeDialogo = this.escena.add.text(
      this.POSICION_PREGUNTA_X,
      this.POSICION_PREGUNTA_Y,
      "Si estas viendo este mensaje, algo salio mal xD",
      this.style
    ); //Agrega la Pregunta
    this.cuadroDeDialogo.setDepth(1); //Pone la pregunta en la capa 1
    this._cNivel = cNivel; //Asigna el controlador de nivel
    this.escena.add.image(1920 / 2, 1080 / 2, "fondoTrivia").setDepth(-20); //Agrega el fondo
    this._ventanaCorrecto = this.escena.add
      .image(1920 / 2, 1080 / 2, "correcto")
      .setDepth(2); //Agrega la ventana de correcto
    this.ventanaCorrecto.setInteractive(); //Hace que sea interactiva
    this.ventanaCorrecto.on("pointerup", () => this.cNivel.LanzarNivel()); //Cuando se hace click, se carga la trivia
    this.escena.add.image(225 + 556, 100 + 205, "cuadroDeDialogo"); //Agrega el cuadro de dialogo
    this.escena.add.image(700, 1015, "moneda"); //Agrega la moneda
    this.escena.add.image(730, 1015, "moneda"); //Agrega la moneda
    this.escena.add.image(1000, 1015, "moneda"); //Agrega la moneda
    this.escena.anims.create({
      key: "risaPregunta",
      frames: this.escena.anims.generateFrameNumbers("risa", {
        start: 4,
        end: 4,
      }),
    }); //Crea la animación de Risa
    this.escena.anims.create({
      key: "risaCambioDePregunta",
      frames: this.escena.anims.generateFrameNumbers("risa", {
        start: 0,
        end: 0,
      }),
    }); //Crea la animación de Risa
    this.escena.anims.create({
      key: "risaBomba",
      frames: this.escena.anims.generateFrameNumbers("risa", {
        start: 2,
        end: 2,
      }),
    }); //Crea la animación de Risa
    this.escena.anims.create({
      key: "risaRespuestaCorrecta",
      frames: this.escena.anims.generateFrameNumbers("risa", {
        start: 3,
        end: 3,
      }),
    }); //Crea la animación de Risa
    this.escena.anims.create({
      key: "risaRespuestaIncorrecta",
      frames: this.escena.anims.generateFrameNumbers("risa", {
        start: 1,
        end: 1,
      }),
    }); //Crea la animación de Risa
    //Crear Personaje
    this._risa = this.escena.physics.add.sprite(1410 + 206, 100 + 434, "risa"); //Agrega a risa
    this.risa.body.allowGravity = false; //No afecta a la gravedad
    this.risa.anims.play("risaPregunta", true); //Inicia la animación de risa
    //Crear botones
    this._botones = new Array<Boton>(); //Crea un array de botones
    this._botonesMejoras = new Array<Boton>(); //Crea un array de botones de mejoras
    this._preguntas = new Array<Pregunta>(); //Crea un array de preguntas
    this._preguntasBackUp = new Array<Pregunta>(); //Crea un array de preguntas
    this.CargarPreguntas(); //Carga las preguntas
    this._botonConfiguracion = new Boton(
      this.escena.add.text(0, 0, "", this.style),
      this.escena.add.image(
        this.BOTON_CONFIGURACION_POSICION_X,
        this.BOTON_CONFIGURACION_POSICION_Y,
        "configuracion"
      ),
      undefined,
      undefined
    ); //Crea el botón de configuración
    this.botonConfiguracion.boton.setDepth(0); //Pone el boton de configuracion en la capa 0
    this.botonConfiguracion.boton.on("pointerup", () => {
      this.cConfiguracion.CambiarAVentanaConfiguracion("Trivia", true); //Cambia a la ventana de configuración
    }); //Evento para el botón de configuración
  }

  //Carga las preguntas desde un JSON
  public CargarPreguntas() {
    PreguntasJson.forEach((p) => {
      this.preguntasBackUp.push(
        new Pregunta(
          p["Nivel"],
          p["Pregunta"],
          p["Idioma"],
          p["RespuestaCorrecta"],
          new Array<string>(
            p["RespuestaCorrecta"],
            p["RespuestaIncorrecta1"],
            p["RespuestaIncorrecta2"],
            p["RespuestaIncorrecta3"]
          ),
          p["RespuestaDeRisaEnCasoDeSerCorrecta"],
          p["RespuestaDeRisaEnCasoDeSerIncorrecta"]
        )
      ); //Agrega las preguntas
    }); //Recorre el array de preguntas
    this.CambiarNivel();
  }

  public CambiarPregunta() {
    this.preguntas = this.shuffle(this.preguntas);
    this.preguntaActual = this.preguntas.pop();
    this.cHud.ActualizarMonedas(-1); //Actualiza las monedas
    this.botonesMejoras[1].boton.setAlpha(0.5); //Pone el botón de mejora en gris
    this.botonesMejoras[1].PausarBoton(); //Pausa el botón
    this.risa.anims.play("risaCambioDePregunta", true); //Inicia la animación de risa
    this.mejoraCambio.EfectoMejora(this.botones);
    this.CargarTrivia(true);
  }

  public CambiarNivel() {
    this.preguntasBackUp.forEach((p) => {
      if (
        this.cConfiguracion.idioma == p.idioma &&
        p.numeroNivel == this._cNivel.nivelActual
      ) {
        this.preguntas.push(p); //Agrega las preguntas
      }
    }); //Recorre el array de preguntas
    this.preguntaActual = this.preguntas.pop(); //Asigna la pregunta actual
    this.MostrarPregunta();
  }

  public MostrarPregunta() {
    this.cuadroDeDialogo.setText(this.preguntaActual.pregunta); //Asigna la pregunta
  }

  //Carga las variables (pregunta y respuestas) desde un JSON del nivel actual.
  public CargarTrivia(b: boolean = false) {
    this.preguntas = new Array<Pregunta>(); //Reinicia las preguntas
    this.MostrarPregunta(); //Muestra la pregunta
    if (!b) {
      this.CambiarNivel();
    }
    this.preguntaActual.RandomizarRerspuestas();
    let i = 0;
    this.botones.forEach((b) => {
      b.texto.text = this.preguntaActual.respuestas[i];
      b.boton.off("pointerup");
      b.boton.on("pointerup", () => this.PointerUp(b));
      i++;
    });
    if (!b) {
      this.botonesMejoras[0].boton.off("pointerup");
      this.botonesMejoras[0].boton.on("pointerup", () =>
        this.BuscarBotonesIncorrectos()
      );
      this.botonesMejoras[1].boton.off("pointerup");
      this.botonesMejoras[1].boton.on("pointerup", () =>
        this.CambiarPregunta()
      );
    }
  }

  public shuffle(array: any[]): any[] {
    let currentIndex = array.length,
      randomIndex: number;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--; //Decrementa el indice

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    } //Método para randomizar las respuestas

    return array;
  }

  //Toma el arreglo y busca 2 respuestas aleatorias que sean incorrectas
  BuscarBotonesIncorrectos() {
    let x = this.shuffle(this.botones.slice()); //Copia el arreglo de botones y lo randomiza
    let i = new Array<Boton>(); //Crea un array de botones
    x.forEach((b) => {
      if (b.texto.text != this.preguntaActual.respuestaCorrecta) {
        i.push(b);
      }
    }); //Recorre el arreglo de botones y agrega los botones que no son la respuesta correcta
    console.log(i);
    while (i.length > 2) {
      i.pop(); //Elimina el último botón
    } //Mientras el arreglo de botones sea mayor a 2, elimina el último botón
    this.mejoraBomba.EfectoMejora(i); //Ejecuta el efecto de mejora
    this.cHud.ActualizarMonedas(-2); //Actualiza las monedas
    this.botonesMejoras[0].boton.setAlpha(0.5); //Pone el botón de mejora en gris
    this.botonesMejoras[0].PausarBoton(); //Pausa el botón
    this.risa.anims.play("risaBomba", true); //Inicia la animación de risa
  }

  public ReiniciarNivel() {
    this.cHud.ReiniciarHud();
    this.ventanaCorrecto.setVisible(false); //La oculta
    this.CargarTrivia(); //Carga las preguntas
    this.botones.forEach((b) => {
      b.CambiarColor(0xffffff); //Cambia el color de los botones a blanco
      b.ResetearBoton(); //Resetea el botón
    });
    this.botonesMejoras.forEach((b) => {
      b.CambiarColor(0xffffff); //Cambia el color de los botones a blanco
      b.ResetearBoton(); //Resetea el botón
      b.boton.setAlpha(1); //Pone el botón en 1 (opacidad)
    });
    this.risa.anims.play("risaPregunta", true); //Inicia la animación de risa
  }

  //Metodo para definir la funcion del click, en teste caso, consiste en revisar la respuesta y ver si es correcta.
  private PointerUp(btn: Boton) {
    var a = false;
    if (this.preguntaActual.respuestaCorrecta == btn.texto.text) {
      a = true;
    } //Revisa si la respuesta es correcta
    if (a) {
      btn.BotonCorrecto();
      this.risa.anims.play("risaRespuestaCorrecta", true);
      this.cHud.ActualizarMonedas(1); //Actualiza las monedas
      this.MostrarCartelDeCorrecto();
    } else {
      btn.BotonIncorecto();
      this.risa.anims.play("risaRespuestaIncorrecta", true);
      this.cHud.ActualizarMonedas(-1); //Actualiza las monedas
      this.MostrarCartelDeIncorrecto();
    } //Revisa si la respuesta es correcta
    this.botones.forEach((b) => b.PausarBoton()); //Pausa todos los botones
    this.botonesMejoras.forEach((b) => b.PausarBoton()); //Pausa todos los botones de mejoras
  }

  public CargarBotones() {
    this.botones.push(
      new Boton(
        this.escena.add.text(
          this.BOTON_0_POSICION_X,
          this.BOTON_0_POSICION_Y,
          "",
          this.style
        ),
        this.escena.add.image(
          this.BOTON_0_POSICION_X,
          this.BOTON_0_POSICION_Y,
          "boton"
        ),
        this.escena.particulasCorrecto,
        this.escena.particulasIncorrecta
      )
    ); //Agrega el botón 0
    this.botones.push(
      new Boton(
        this.escena.add.text(
          this.BOTON_1_POSICION_X,
          this.BOTON_1_POSICION_Y,
          "",
          this.style
        ),
        this.escena.add.image(
          this.BOTON_1_POSICION_X,
          this.BOTON_1_POSICION_Y,
          "boton"
        ),
        this.escena.particulasCorrecto,
        this.escena.particulasIncorrecta
      )
    ); //Agrega el botón 1
    this.botones.push(
      new Boton(
        this.escena.add.text(
          this.BOTON_2_POSICION_X,
          this.BOTON_2_POSICION_Y,
          "",
          this.style
        ),
        this.escena.add.image(
          this.BOTON_2_POSICION_X,
          this.BOTON_2_POSICION_Y,
          "boton"
        ),
        this.escena.particulasCorrecto,
        this.escena.particulasIncorrecta
      )
    ); //Agrega el botón 2
    this.botones.push(
      new Boton(
        this.escena.add.text(
          this.BOTON_3_POSICION_X,
          this.BOTON_3_POSICION_Y,
          "",
          this.style
        ),
        this.escena.add.image(
          this.BOTON_3_POSICION_X,
          this.BOTON_3_POSICION_Y,
          "boton"
        ),
        this.escena.particulasCorrecto,
        this.escena.particulasIncorrecta
      )
    ); //Agrega el botón 3
    //PRUEBAS
    this.mejoraBomba = new MejoraBomba("Bomba", 0, this.escena.particulasBomba);
    this.mejoraCambio = new MejoraCambio(
      "Cambio",
      0,
      this.escena.particulasBomba
    );
    this.botonesMejoras.push(
      new Boton(
        this.escena.add.text(0, 0, "", this.style),
        this.escena.add.image(
          this.BOTON_MEJORA_BOMBA_POSICION_X,
          this.BOTON_MEJORA_BOMBA_POSICION_Y,
          "bomba"
        ),
        undefined,
        undefined
      )
    ); //Agrega el botón de mejora
    this.botonesMejoras.push(
      new Boton(
        this.escena.add.text(0, 0, "", this.style),
        this.escena.add.image(
          this.BOTON_MEJORA_CAMBIO_POSICION_X,
          this.BOTON_MEJORA_CAMBIO_POSICION_Y,
          "cambio"
        ),
        undefined,
        undefined
      )
    ); //Agrega el botón de mejora
    this.CargarTrivia(); //Carga la trivia
  }

  Temporizador() {
    this.escena.time.addEvent({
      delay: 5000,
      callback: () => {
        this.cNivel.LanzarNivel();
      },
      loop: false,
    });
  }

  public MostrarCartelDeCorrecto() {
    this.cuadroDeDialogo.text = this.preguntaActual.mensajeRespuestaCorrecta;
    this.ventanaCorrecto.clearTint(); //Quita el tint
    this.ventanaCorrecto.setVisible(true); //La muestra
  }

  public MostrarCartelDeIncorrecto() {
    console.log("Mostrar cartel de incorrecto");
    this.cuadroDeDialogo.text = this.preguntaActual.mensajeRespuestaIncorrecta;
    this.ventanaCorrecto.clearTint(); //Quita el tint
    this.ventanaCorrecto.setVisible(true); //La muestra
    //this.Temporizador();
  }

  public IniciarNivel() {}

  //Getters and setters
  public get escena(): any {
    return this._escena;
  }

  public set escena(v: any) {
    this._escena = v;
  }

  public CargarControlador() {
    this.escena.controladorTrivia = this;
  }

  public get botones(): Array<Boton> {
    return this._botones;
  }

  public set botones(v: Array<Boton>) {
    this._botones = v;
  }

  public get preguntas(): Array<Pregunta> {
    return this._preguntas;
  }

  public set preguntas(v: Array<Pregunta>) {
    this._preguntas = v;
  }

  public get preguntaActual(): Pregunta {
    return this._preguntaActual;
  }

  public set preguntaActual(v: Pregunta) {
    this._preguntaActual = v;
  }

  public get risa(): any {
    return this._risa;
  }

  set risa(v: any) {
    this._risa = v;
  }

  public get mejoraBomba(): Mejora {
    return this._mejoraBomba;
  }

  public set mejoraBomba(v: Mejora) {
    this._mejoraBomba = v;
  }

  public set botonesMejoras(v: Array<Boton>) {
    this._botonesMejoras = v;
  }

  public get botonesMejoras(): Array<Boton> {
    return this._botonesMejoras;
  }

  public get cConfiguracion(): CConfiguracion {
    return this._cConfiguracion;
  }

  public set cConfiguracion(v: CConfiguracion) {
    this._cConfiguracion = v;
  }

  public get botonConfiguracion(): Boton {
    return this._botonConfiguracion;
  }

  public set botonConfiguracion(v: Boton) {
    this._botonConfiguracion = v;
  }

  public get cNivel(): CNivel {
    return this._cNivel;
  }

  public set cNivel(v: CNivel) {
    this._cNivel = v;
  }

  public get cHud(): CHud {
    return this._cHud;
  }

  public set cHud(v: CHud) {
    this._cHud = v;
  }

  public get ventanaCorrecto(): any {
    return this._ventanaCorrecto;
  }

  public set ventanaCorrecto(v: any) {
    this._ventanaCorrecto = v;
  }

  public get preguntasBackUp(): Array<Pregunta> {
    return this._preguntasBackUp;
  }

  public set preguntasBackUp(v: Array<Pregunta>) {
    this._preguntasBackUp = v;
  }

  public get mejoraCambio(): Mejora {
    return this._mejoraCambio;
  }

  public set mejoraCambio(v: Mejora) {
    this._mejoraCambio = v;
  }

  public get cuadroDeDialogo(): any {
    return this._cuadroDeDialogo;
  }

  public set cuadroDeDialogo(v: any) {
    this._cuadroDeDialogo = v;
  }
}
