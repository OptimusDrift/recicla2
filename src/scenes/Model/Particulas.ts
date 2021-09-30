export default class Particulas {
    private _particula: any;

    constructor(particula: any) {
        this._particula = particula;
    }
    
    public EjecutarParticula(x: number, y: number){
        this.particula = this.particula.createEmitter();
        this.particula.setPosition(x,y);
        this.particula.setGravityY(-200);
        this.particula.setSpeed(300);
        this.particula.setAngle({min: 180, max: 360});
        this.particula.maxParticles = 5;
        this.particula.setLifespan(200);
        this.particula.setScale({ min: 0.1, max: .8 });
        this.particula.setBlendMode(Phaser.BlendModes.ADD);
    }

    //Getters and setters
    public get particula(): any {
        return this._particula;
    }

    public set particula(v:any) {
        this._particula =v;
    }
}