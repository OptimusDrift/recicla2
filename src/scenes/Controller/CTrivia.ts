import Boton from "../Model/Boton";
import Pregunta from "../Model/Pregunta";
import Mejora from "../Model/Mejora";
import MejoraBomba from "../Model/MejoraBomba";
import preguntas from "./Preguntas.json";

export default class CTrivia {
  //Atributos de la trivia
  private _escena: any;
  private _botones: Array<Boton>;
  private _botonesMejoras: Array<Boton>;
  private _mejoraBomba: Mejora;
  private _preguntas: Array<Pregunta>;
  private _preguntaActual: number;

  //Constantes de la trivia
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

  //Estilo del texto
  private style = {
    font: "bold 30px Arial",
    fill: "#fff",
    boundsAlignH: "center",
    boundsAlignV: "middle",
  };

  //Personaje Risa
  private _risa: any;

  //Constructor
  constructor(escena: any) {
    this._escena = escena; //Asigna la escena
    this.escena.add.image(1920 / 2, 1080 / 2, "fondoTrivia").setDepth(-20); //Agrega el fondo
    this.escena.add.image(225 + 556, 100 + 205, "cuadroDeDialogo"); //Agrega el cuadro de dialogo
    this.escena.add.image(700, 1030, "moneda"); //Agrega la moneda
    //Animación para Risa
    this.escena.anims.create({
      key: "risaPregunta",
      frames: this.escena.anims.generateFrameNumbers("risa", {
        start: 4,
        end: 4,
      }),
    }); //Animación para Risa
    this.escena.anims.create({
      key: "risaCambioDePregunta",
      frames: this.escena.anims.generateFrameNumbers("risa", {
        start: 0,
        end: 0,
      }),
    }); //Animación para Risa
    this.escena.anims.create({
      key: "risaBomba",
      frames: this.escena.anims.generateFrameNumbers("risa", {
        start: 2,
        end: 2,
      }),
    }); //Animación para Risa
    this.escena.anims.create({
      key: "risaRespuestaCorrecta",
      frames: this.escena.anims.generateFrameNumbers("risa", {
        start: 3,
        end: 3,
      }),
    }); //Animación para Risa
    this.escena.anims.create({
      key: "risaRespuestaIncorrecta",
      frames: this.escena.anims.generateFrameNumbers("risa", {
        start: 1,
        end: 1,
      }),
    }); //Animación para Risa
    //Crear Personaje
    this._risa = this.escena.physics.add.sprite(1410 + 206, 100 + 434, "risa"); //Agrega a risa
    this.risa.body.allowGravity = false; //No afecta a la gravedad
    this.risa.anims.play("risaPregunta", true); //Inicia la animación de risa
    //Crear botones
    this._botones = new Array<Boton>(); //Crea un array de botones
    this._botonesMejoras = new Array<Boton>(); //Crea un array de botones de mejoras
    this._preguntas = new Array<Pregunta>(); //Crea un array de preguntas
    this._preguntaActual = 0;
    this.CargarPreguntas(); //Carga las preguntas
  }

  //Carga las preguntas desde un JSON
  public CargarPreguntas() {
    preguntas.forEach((p) => {
      this.preguntas.push(
        new Pregunta(
          p["Pregunta"],
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
  }

  //Carga las variables (pregunta y respuestas) desde un JSON del nivel actual.
  public CargarTrivia() {
    this.preguntaActual = Math.floor(Math.random() * this.preguntas.length); //PRUEBAS
    //Prinero randomiza las preguntas
    this.preguntas[this.preguntaActual].RandomizarRerspuestas();
    console.log(this.preguntas[this.preguntaActual].pregunta);
    let i = 0;
    this.botones.forEach((b) => {
      b.texto.text = this.preguntas[this.preguntaActual].respuestas[i];
      b.boton.on("pointerup", () => this.PointerUp(b));
      i++;
    });
    this.botonesMejoras[0].boton.on("pointerup", () =>
      this.BuscarBotonesIncorrectos()
    );
  }

  public shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

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
      if (
        b.texto.text != this.preguntas[this.preguntaActual].respuestaCorrecta
      ) {
        i.push(b);
      }
    }); //Recorre el arreglo de botones y agrega los botones que no son la respuesta correcta
    i.pop(); //Elimina el último botón
    this.mejoraBomba.EfectoMejora(i); //Ejecuta el efecto de mejora
    this.botonesMejoras[0].CambiarColor(0x808080); //Cambia el color del botón
    this.botonesMejoras[0].PausarBoton(); //Pausa el botón
    this.risa.anims.play("risaBomba", true); //Inicia la animación de risa
  }

  //Metodo para definir la funcion del click, en teste caso, consiste en revisar la respuesta y ver si es correcta.
  private PointerUp(btn: Boton) {
    var a = false;
    if (
      this.preguntas[this.preguntaActual].respuestaCorrecta == btn.texto.text
    ) {
      a = true;
    } //Revisa si la respuesta es correcta
    if (a) {
      btn.BotonCorrecto();
      this.risa.anims.play("risaRespuestaCorrecta", true);
    } else {
      btn.BotonIncorecto();
      this.risa.anims.play("risaRespuestaIncorrecta", true);
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
    this._mejoraBomba = new MejoraBomba(
      "Bomba",
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
    this.CargarTrivia(); //Carga la trivia
  }

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

  public get preguntaActual(): number {
    return this._preguntaActual;
  }

  public set preguntaActual(v: number) {
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
}
