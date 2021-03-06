import Musica from "./Musica";

export default class Moneda {
  private _sprite: string;
  private _physics: any;
  private _valor: number;
  private _cuerpo: any;
  private _particulas: any;
  private _x: number;
  private _y: number;
  private _AgarrarMoneda: Musica;

  constructor(
    sprite: string,
    physics: any,
    valor: number,
    x: number,
    y: number,
    particulas: any
  ) {
    this._AgarrarMoneda = new Musica("AgarrarMoneda", physics.scene);
    this._sprite = sprite;
    this._physics = physics;
    this._valor = valor;
    this._cuerpo = this.physics.add.sprite(x, y, this.sprite);
    this._x = x;
    this._y = y;
    this._cuerpo.body.setAllowGravity(false);
    this._particulas = particulas;
  }

  public OcultarMoneda() {
    try {
    } catch (error) {
      console.error("Error al intentar ocultar la moneda." + error);
    }
  }

  public TomarMoneda(residuo: any, moneda: any) {
    try {
      this.particulasMoneda.EjecutarParticula(moneda.x, moneda.y);
      moneda.scene.sound.play("AgarrarMoneda");
      this.controladorNivel.cHud.ActualizarMonedas(1);
      moneda.body.x = -800;
      moneda.body.y = -800;
    } catch (error) {
      console.error("Error al intentar ocultar la moneda." + error);
    }
  }

  public ReiniciarMoneda() {
    this.cuerpo.setVisible(true);
    this.cuerpo.x = this.x;
    this.cuerpo.y = this.y;
  }
  //Getters and setters

  public set sprite(v: string) {
    this._sprite = v;
  }

  public get sprite(): string {
    return this._sprite;
  }

  public get physics(): any {
    return this._physics;
  }

  public set physics(v: any) {
    this._physics = v;
  }

  public get valor(): number {
    return this._valor;
  }

  public set valor(v: number) {
    this._valor = v;
  }

  public get cuerpo(): any {
    return this._cuerpo;
  }

  public set cuerpo(v: any) {
    this._cuerpo = v;
  }

  public get particulas(): any {
    return this._particulas;
  }

  public set particulas(v: any) {
    this._particulas = v;
  }

  public get x(): number {
    return this._x;
  }

  public set x(v: number) {
    this._x = v;
  }

  public get y(): number {
    return this._y;
  }

  public set y(v: number) {
    this._y = v;
  }
}
