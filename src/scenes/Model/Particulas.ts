export default class Particulas {
  private _particula: any;

  constructor(particula: any) {
    this._particula = particula;
  }

  public EjecutarParticula(x: number, y: number) {
    let p = this.particula.createEmitter(); //Crea una nueva particula
    p.setPosition(x, y); //Posicion de la particula
    p.setGravityY(-200); //Gravedad
    p.setSpeed(300); //Velocidad
    p.setAngle({ min: 180, max: 360 }); //Angulo
    p.maxParticles = 10; //Numero de particulas
    p.setLifespan(200); //Tiempo de vida
    p.setScale({ min: 0.1, max: 0.8 }); //Escala
    p.setBlendMode(Phaser.BlendModes.ADD);
  }

  //Getters and setters
  public get particula(): any {
    return this._particula;
  }

  public set particula(v: any) {
    this._particula = v;
  }
}
