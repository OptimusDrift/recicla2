import Particulas from "./Particulas";

export default class Boton {
  private _texto: any;
  private _boton: any;
  private _escala: number;
  private _particulasCorrecto: Particulas | undefined;
  private _particulasIncorrecta: Particulas | undefined;

  constructor(
    texto: any,
    boton: any,
    particulasCorrecto: any,
    particulasIncorrecta: any,
    escala: number = 1
  ) {
    this._texto = texto;
    this.texto.setDepth(1);
    this._boton = boton;
    this._escala = escala;
    this.boton.setScale(escala);
    this.boton.setDepth(-1);
    this.texto.setFontSize(50);
    this.texto.setOrigin(0.5);
    this._particulasCorrecto = particulasCorrecto;
    this._particulasIncorrecta = particulasIncorrecta;
    this.ResetearBoton();
  }

  //Al pasar el mouse por arriba el boton y el texto se agranda.
  private PointerOver() {
    this.boton.setScale(this.escala + 0.02);
    this.texto.setFontSize(51);
  }

  //Cuando el mouse sale del objeto el botón y el texto vuelve a su escala original.
  private PointerOut() {
    this.boton.setScale(this.escala);
    this.texto.setFontSize(50);
  }

  //Cuando el mouse es precionado el botón y el texto se encogen.
  private PointerDown() {
    this.boton.setScale(this.escala - 0.02);
    this.texto.setFontSize(49);
  }

  //Cuando el botón queda sin una funcionalidad, es pausado, quitando su listener.
  public PausarBoton() {
    this.boton.setScale(this.escala);
    this.texto.setFontSize(50);
    this.boton.setInteractive(false);
    this.boton.removeAllListeners();
  }

  //Si el botón necesita una funcionalidad se le setean los listeners.
  public ResetearBoton() {
    this.boton.clearTint();
    this.boton.setInteractive();
    this.boton.on("pointerover", () => this.PointerOver());
    this.boton.on("pointerout", () => this.PointerOut());
    this.boton.on("pointerdown", () => this.PointerDown());
  }

  //El color del botón cambia a verde.
  public BotonCorrecto() {
    this.CambiarColor(0x3a5311);
    this.particulasCorrecto.EjecutarParticula(this.boton.x, this.boton.y);
    this.PausarBoton();
  }

  //El color del botón cambia a rojo.
  public BotonIncorecto() {
    this.CambiarColor(0xd40032);
    this.particulasIncorrecta.EjecutarParticula(this.boton.x, this.boton.y);
    this.PausarBoton();
  }

  //Ocultar Botón
  public OcultarBoton(valor: boolean) {
    this.texto.setVisible(valor);
    this.boton.setVisible(valor);
  }

  public LimpiarColor() {
    this.boton.clearTint();
  }

  public CambiarColor(color: any) {
    this.boton.setTint(color);
  }

  //Getters and setters
  public get texto(): any {
    return this._texto;
  }

  public set texto(value: any) {
    this._texto = value;
  }

  public get boton(): any {
    return this._boton;
  }

  public set boton(v: any) {
    this._boton = v;
  }

  public get particulasCorrecto(): any {
    return this._particulasCorrecto;
  }

  public set particulasCorrecto(v: any) {
    this._particulasCorrecto = v;
  }

  public get particulasIncorrecta(): any {
    return this._particulasIncorrecta;
  }

  public set particulasIncorrecta(v: any) {
    this._particulasIncorrecta = v;
  }

  public get escala(): number {
    return this._escala;
  }

  public set escala(v: number) {
    this._escala = v;
  }
}
