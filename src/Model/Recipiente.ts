import Musica from "../Model/Musica";

export default class Recipiente {
  private _sprite: string;
  private _physics: any;
  private _cuerpo: any;
  private _x: number;
  private _y: number;
  protected _correcto: Musica;
  protected _incorrecto: Musica;
  protected _scene: any;

  constructor(sprite: string, physics: any, x: number, y: number, scene: any) {
    this._scene = scene;
    this._correcto = new Musica("RespuestaCorrecta", this._scene);
    this._incorrecto = new Musica("RespuestaIncorrecta", this._scene);
    this._sprite = sprite;
    this._physics = physics;
    this._x = x;
    this._y = y;
    this._cuerpo = this.physics.add.sprite(this.x, this.y, this.sprite);
    this._cuerpo.body.setAllowGravity(false);
    this._cuerpo.depth = -1;
  }

  public CompararRecipiente(residuo: any, recipiente: any) {
    residuo.body.x = -500;
    residuo.body.y = -500;
    residuo.body.setAllowGravity(false);
    residuo.body.setVelocity(0);
    residuo.body.world.scene.controladorNivel.ActivarLanzamiento();
  }

  protected Retroalimentacion(rta: Boolean, recipiente: any) {
    try {
      if (rta) {
        recipiente.scene.sound.play("RespuestaCorrecta");
        recipiente.scene.particulasCorrecto.EjecutarParticula(
          recipiente.body.x + 100,
          recipiente.body.y
        );
        this.controladorNivel.cHud.ActualizarMonedas(1);
      } else {
        recipiente.scene.sound.play("RespuestaIncorrecta");
        recipiente.scene.particulasIncorrecta.EjecutarParticula(
          recipiente.body.x + 100,
          recipiente.body.y
        );
        this.controladorNivel.cHud.ActualizarMonedas(-1);
        recipiente.body.world.scene.controladorNivel.AgregarResiduos(
          recipiente.body.world.scene.controladorNivel.residuoAnterior
        );
      }
      if (
        recipiente.body.world.scene.controladorNivel.niveles[
          recipiente.body.world.scene.controladorNivel.nivelActual
        ].residuos.length <= 0
      ) {
        recipiente.body.world.scene.controladorNivel.sinReciduo = true;
      }
    } catch (error) {}
  }

  public setPosicion(x: number, y: number) {
    try {
      this.x = x;
      this.physics.setX(x);
    } catch (error) {
      console.error("Error al intentar ingresar la posicion x." + error);
    }
    try {
      this.y = y;
      this.physics.setX(y);
    } catch (error) {
      console.error("Error al intentar ingresar la posicion y." + error);
    }
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

  public get cuerpo(): any {
    return this._cuerpo;
  }

  public set cuerpo(v: any) {
    this._cuerpo = v;
  }

  public get x(): any {
    return this._x;
  }

  public set x(v: any) {
    this._x = v;
  }

  public get y(): any {
    return this._y;
  }

  public set y(v: any) {
    this._y = v;
  }
}
