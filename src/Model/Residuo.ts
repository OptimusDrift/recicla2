export default class Residuo {
  private _sprite: string;
  private _physics: any;
  private _gravedad: number;
  private _cuerpo: any;
  private _friccion: number;

  constructor(
    sprite: string,
    physics: any,
    gravedad: number,
    friccion: number
  ) {
    this._gravedad = gravedad;
    this._physics = physics;
    this._sprite = sprite;
    this._cuerpo = this.physics.add.sprite(-100, -100, this.sprite);
    this._cuerpo.body.x = -500;
    this._cuerpo.body.y = -500;
    this._cuerpo.body.setAllowGravity(false);
    this._cuerpo.body.setVelocity(0);
    this._cuerpo.depth = -2;
    this._cuerpo.setBounce(0.4);
    this._friccion = friccion;
  }

  public OcultarResiduo(): void {
    try {
      this.physics.setVisible(!this.physics.getVisible());
    } catch (error) {
      console.error("Error al intentar ocultar el residuo." + error);
    }
  }

  public ResiduoFueraDeLaPantalla(residuo: any, borde: any) {
    residuo.body.world.scene.controladorNivel.AgregarResiduos(
      residuo.body.world.scene.controladorNivel.residuoAnterior
    );
    residuo.body.x = -500;
    residuo.body.y = -500;
    residuo.body.setAllowGravity(false);
    residuo.body.setVelocity(0);
    residuo.body.world.scene.controladorNivel.ActivarLanzamiento();
    residuo.body.world.scene.controladorNivel.cHud.ActualizarMonedas(-1);
  }

  public setFriccion(residuo: any, obstaculo: any) {
    if (
      residuo.body.velocity.x <= 2 &&
      residuo.body.velocity.x > -2 &&
      residuo.body.velocity.y <= 2 &&
      residuo.body.velocity.y > -2
    ) {
      residuo.body.world.scene.controladorNivel.AgregarResiduos(
        residuo.body.world.scene.controladorNivel.residuoAnterior
      );
      residuo.body.x = -500;
      residuo.body.y = -500;
      residuo.body.setAllowGravity(false);
      residuo.body.setVelocity(0);
      residuo.body.world.scene.controladorNivel.ActivarLanzamiento();
      residuo.body.world.scene.controladorNivel.cHud.ActualizarMonedas(-1);
    }
    //Se setea una ficcion
  }

  //Getters and setters
  public get sprite(): string {
    return this._sprite;
  }

  public set sprite(v: string) {
    this._sprite = v;
  }

  public get physics(): any {
    return this._physics;
  }

  public set physics(v: any) {
    this._physics = v;
  }

  public get gravedad(): number {
    return this._gravedad;
  }

  public set gravedad(v: number) {
    this._gravedad = v;
  }

  public get cuerpo(): any {
    return this._cuerpo;
  }

  public set cuerpo(v: any) {
    this._cuerpo = v;
  }

  public get friccion(): number {
    return this._friccion;
  }

  public set friccion(v: number) {
    this._friccion = v;
  }
}
