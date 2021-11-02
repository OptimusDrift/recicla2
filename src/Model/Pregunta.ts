import arrayShuffle from "array-shuffle";

export default class Pregunta {
  private _numeroNivel: number;
  private _pregunta: string;
  private _idioma: string;
  private _respuestaCorrecta: string;
  private _respuestas: Array<string>;
  private _mensajeRespuestaCorrecta: string;
  private _mensajeRespuestaIncorrecta: string;

  constructor(
    numeroNivel: number,
    pregunta: string,
    idioma: string,
    respuestaCorrecta: string,
    respuestas: Array<string>,
    mensajeRespuestaCorrecta: string,
    mensajeRespuestaIncorrecta: string
  ) {
    this._numeroNivel = numeroNivel;
    this._pregunta = this.FormatearTexto(pregunta);
    this._idioma = idioma;
    this._respuestaCorrecta = respuestaCorrecta;
    this._respuestas = respuestas;
    this._mensajeRespuestaCorrecta = this.FormatearTexto(
      mensajeRespuestaCorrecta
    );
    this._mensajeRespuestaIncorrecta = this.FormatearTexto(
      mensajeRespuestaIncorrecta
    );
  }

  //Randomiza las preguntas(?
  public RandomizarRerspuestas() {
    try {
      this.respuestas = arrayShuffle(this.respuestas);
    } catch (error) {
      console.error("Error al intentar randomizar las respuestas" + error);
    }
  }

  //Nueva linea al caracter numero 50
  public FormatearTexto(texto: string): string {
    let textoFormateado: string = "";
    let x = 0,
      y = 43;
    textoFormateado += texto.substring(x, y);
    try {
      while (texto.length > y) {
        textoFormateado += "\n";
        x = y;
        y += 42;
        textoFormateado += texto.substring(x, y);
      }
    } catch (error) {}
    return textoFormateado;
  }

  //Getters and setters
  public set pregunta(v: string) {
    this._pregunta = v;
  }

  public get pregunta(): string {
    return this._pregunta;
  }

  public set respuestaCorrecta(v: string) {
    this._respuestaCorrecta = v;
  }

  public get respuestaCorrecta(): string {
    return this._respuestaCorrecta;
  }

  public set respuestas(v: Array<string>) {
    this._respuestas = v;
  }

  public get respuestas(): Array<string> {
    return this._respuestas;
  }

  public set mensajeRespuestaCorrecta(v: string) {
    this._mensajeRespuestaCorrecta = v;
  }

  public get mensajeRespuestaCorrecta(): string {
    return this._mensajeRespuestaCorrecta;
  }

  public set mensajeRespuestaIncorrecta(v: string) {
    this._mensajeRespuestaIncorrecta = v;
  }

  public get mensajeRespuestaIncorrecta(): string {
    return this._mensajeRespuestaIncorrecta;
  }

  public set numeroNivel(v: number) {
    this._numeroNivel = v;
  }

  public get numeroNivel(): number {
    return this._numeroNivel;
  }

  public set idioma(v: string) {
    this._idioma = v;
  }

  public get idioma(): string {
    return this._idioma;
  }
}
