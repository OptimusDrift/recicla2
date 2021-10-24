export default class Texto {
  private _textosMenuPrincipal: Array<string>;
  private _textosConfiguracion: Array<string>;
  private _textosTienda: Array<string>;
  private _textosCreditos: Array<string>;
  private _textosTrivia: Array<string>;
  private _textosTriviaInfinita: Array<string>;
  private _textosModoHistoria: Array<string>;

  constructor(
    textosMenuPrincipal: Array<string>,
    textosConfiguracion: Array<string>,
    textosTienda: Array<string>,
    textosCreditos: Array<string>,
    textosTrivia: Array<string>,
    textosTriviaInfinita: Array<string>,
    textosModoHistoria: Array<string>
  ) {
    this._textosMenuPrincipal = textosMenuPrincipal;
    this._textosConfiguracion = textosConfiguracion;
    this._textosTienda = textosTienda;
    this._textosCreditos = textosCreditos;
    this._textosTrivia = textosTrivia;
    this._textosTriviaInfinita = textosTriviaInfinita;
    this._textosModoHistoria = textosModoHistoria;
  }

  //Getters and setters
  public get textosMenuPrincipal(): Array<string> {
    return this._textosMenuPrincipal;
  }

  public set textosMenuPrincipal(v: Array<string>) {
    this._textosMenuPrincipal = v;
  }

  public get textosConfiguracion(): Array<string> {
    return this._textosConfiguracion;
  }

  public set textosConfiguracion(v: Array<string>) {
    this._textosConfiguracion = v;
  }

  public get textosTienda(): Array<string> {
    return this._textosTienda;
  }

  public set textosTienda(v: Array<string>) {
    this._textosTienda = v;
  }

  public get textosCreditos(): Array<string> {
    return this._textosCreditos;
  }

  public set textosCreditos(v: Array<string>) {
    this._textosCreditos = v;
  }

  public get textosTrivia(): Array<string> {
    return this._textosTrivia;
  }

  public set textosTrivia(v: Array<string>) {
    this._textosTrivia = v;
  }

  public get textosTriviaInfinita(): Array<string> {
    return this._textosTriviaInfinita;
  }

  public set textosTriviaInfinita(v: Array<string>) {
    this._textosTriviaInfinita = v;
  }

  public get textosModoHistoria(): Array<string> {
    return this._textosModoHistoria;
  }

  public set textosModoHistoria(v: Array<string>) {
    this._textosModoHistoria = v;
  }
}
