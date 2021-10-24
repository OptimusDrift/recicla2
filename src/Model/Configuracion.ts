import Dialogo from "./Dialogo";
import Texto from "./Texto";

export default class Configuracion {
  private _volumen: number;
  private _idiomas: Array<string>;
  private _idiomaSeleccionado: number;
  private _dialogos: Array<Dialogo>;
  private _textos: Array<Texto>;

  constructor(
    volumen: number,
    idiomas: Array<string>,
    idiomaSeleccionado: number,
    dialogos: Array<Dialogo>,
    textos: Array<Texto>
  ) {
    this._volumen = volumen;
    this._idiomas = idiomas;
    this._idiomaSeleccionado = idiomaSeleccionado;
    this._dialogos = dialogos;
    this._textos = textos;
  }

  public CambiarIdiomaDelJuego(nuevoIdioma: number) {
    try {
      if (nuevoIdioma >= 0 && nuevoIdioma <= this._idiomas.length) {
        this._idiomaSeleccionado = nuevoIdioma;
        //Cambiar desde donde toma los dialgos y textos acá
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error("Error al intentar cambiar el idioma." + error);
    }
  }

  public CambiarVolumenDelJuego(volumenActual: number) {
    try {
      if (volumenActual >= 0 && volumenActual <= 100) {
        this._volumen = volumenActual;
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error("Error al intentar cambiar el volumen." + error);
    }
  }

  //Getters and setters

  public get volumen(): number {
    return this._volumen;
  }

  public get idiomas(): Array<string> {
    return this._idiomas;
  }

  public set idiomas(v: Array<string>) {
    this._idiomas = v;
  }

  public get idiomaSeleccionado(): number {
    return this._idiomaSeleccionado;
  }

  public set idiomaSeleccionado(v: number) {
    try {
      if (v < 0 && v >= this.idiomas.length) {
        throw new Error();
      }
      this._idiomaSeleccionado = v;
    } catch (error) {
      console.error("Error al intentar cambiar el idioma." + error);
    }
  }

  public get dialogos(): Array<Dialogo> {
    return this._dialogos;
  }

  public set dialogos(v: Array<Dialogo>) {
    this._dialogos = v;
  }

  public get textos(): Array<Texto> {
    return this._textos;
  }

  public set textos(v: Array<Texto>) {
    this._textos = v;
  }
}
