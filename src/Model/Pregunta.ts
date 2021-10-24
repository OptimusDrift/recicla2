import arrayShuffle from "array-shuffle";

export default class Pregunta {
  private _pregunta: string;
  private _respuestaCorrecta: string;
  private _respuestas: Array<string>;
  private _mensajeRespuestaCorrecta: string;
  private _mensajeRespuestaIncorrecta: string;

  constructor(
    pregunta: string,
    respuestaCorrecta: string,
    respuestas: Array<string>,
    mensajeRespuestaCorrecta: string,
    mensajeRespuestaIncorrecta: string
  ) {
    this._pregunta = pregunta;
    this._respuestaCorrecta = respuestaCorrecta;
    this._respuestas = respuestas;
    this._mensajeRespuestaCorrecta = mensajeRespuestaCorrecta;
    this._mensajeRespuestaIncorrecta = mensajeRespuestaIncorrecta;
  }

  //Randomiza las preguntas(?
  public RandomizarRerspuestas() {
    try {
      this.respuestas = arrayShuffle(this.respuestas);
    } catch (error) {
      console.error("Error al intentar randomizar las respuestas" + error);
    }
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
}
