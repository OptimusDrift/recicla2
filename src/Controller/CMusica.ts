import Musica from "../Model/Musica";

export default class CMusica {
  private _escena;
  private _config = {
    mute: false,
    volume: 1,
    rate: 1,
    detune: 0,
    seek: 0,
    loop: false,
    delay: 0,
  };

  private _musica: Musica;
  private _sfxBotonMouseArriba: Musica;
  private _sfxBotonMouseFuera: Musica;
  private _sfxBotonClick: Musica;
  private _sfxPowerUpBomba: Musica;
  private _sfxPowerUpCambio: Musica;
  private _sfxTriviaCorrecta: Musica;
  private _sfxTriviaIncorrecta: Musica;
  private _sfxGomeraEstirada: Musica;
  private _sfxGomeraSoltada: Musica;
  private _sfxMonedaTomada: Musica;
  private _sfxRecipienteCorrecto: Musica;
  private _sfxRecipienteIncorrecto: Musica;
  private _sfxVictoria: Musica;
  private _sfxDerrota: Musica;

  constructor(musica: Musica) {
    this._musica = musica;
    this._musica.Play();
  }

  public CambiarVolumenDelJuego(volumen: number) {
    this._config.volume = volumen;
  }

  //Getters and setters
  public get escena(): any {
    return this._escena;
  }

  public set escena(value: any) {
    this._escena = value;
  }

  public get config(): any {
    return this._config;
  }

  public set config(value: any) {
    this._config = value;
  }

  public get musica(): Musica {
    return this._musica;
  }

  public set musica(value: Musica) {
    this._musica = value;
  }

  public get sfxBotonMouseArriba(): Musica {
    return this._sfxBotonMouseArriba;
  }

  public set sfxBotonMouseArriba(value: Musica) {
    this._sfxBotonMouseArriba = value;
  }

  public get sfxBotonClick(): Musica {
    return this._sfxBotonClick;
  }

  public set sfxBotonClick(value: Musica) {
    this._sfxBotonClick = value;
  }

  public get sfxPowerUpBomba(): Musica {
    return this._sfxPowerUpBomba;
  }

  public set sfxPowerUpBomba(value: Musica) {
    this._sfxPowerUpBomba = value;
  }

  public get sfxPowerUpCambio(): Musica {
    return this._sfxPowerUpCambio;
  }

  public set sfxPowerUpCambio(value: Musica) {
    this._sfxPowerUpCambio = value;
  }

  public get sfxTriviaCorrecta(): Musica {
    return this._sfxTriviaCorrecta;
  }

  public set sfxTriviaCorrecta(value: Musica) {
    this._sfxTriviaCorrecta = value;
  }

  public get sfxTriviaIncorrecta(): Musica {
    return this._sfxTriviaIncorrecta;
  }

  public set sfxTriviaIncorrecta(value: Musica) {
    this._sfxTriviaIncorrecta = value;
  }

  public get sfxGomeraEstirada(): Musica {
    return this._sfxGomeraEstirada;
  }

  public set sfxGomeraEstirada(value: Musica) {
    this._sfxGomeraEstirada = value;
  }

  public get sfxGomeraSoltada(): Musica {
    return this._sfxGomeraSoltada;
  }

  public set sfxGomeraSoltada(value: Musica) {
    this._sfxGomeraSoltada = value;
  }

  public get sfxMonedaTomada(): Musica {
    return this._sfxMonedaTomada;
  }

  public set sfxMonedaTomada(value: Musica) {
    this._sfxMonedaTomada = value;
  }

  public get sfxRecipienteCorrecto(): Musica {
    return this._sfxRecipienteCorrecto;
  }

  public set sfxRecipienteCorrecto(value: Musica) {
    this._sfxRecipienteCorrecto = value;
  }

  public get sfxRecipienteIncorrecto(): Musica {
    return this._sfxRecipienteIncorrecto;
  }

  public set sfxRecipienteIncorrecto(value: Musica) {
    this._sfxRecipienteIncorrecto = value;
  }

  public get sfxVictoria(): Musica {
    return this._sfxVictoria;
  }

  public set sfxVictoria(value: Musica) {
    this._sfxVictoria = value;
  }

  public get sfxDerrota(): Musica {
    return this._sfxDerrota;
  }

  public set sfxDerrota(value: Musica) {
    this._sfxDerrota = value;
  }

  public get sfxBotonMouseFuera(): Musica {
    return this._sfxBotonMouseFuera;
  }

  public set sfxBotonMouseFuera(value: Musica) {
    this._sfxBotonMouseFuera = value;
  }
}
