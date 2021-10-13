export default class Particulas {
    private _particula: any;

    constructor(particula: any) {
        this._particula = particula;
    }
    
    public EjecutarParticula(x: number, y: number){
        let p = this.particula.createEmitter();
        p.setPosition(x,y);
        p.setGravityY(-200);
        p.setSpeed(300);
        p.setAngle({min: 180, max: 360});
        p.maxParticles = 5;
        p.setLifespan(200);
        p.setScale({ min: 0.1, max: .8 });
        p.setBlendMode(Phaser.BlendModes.ADD);
    }

    //Getters and setters
    public get particula(): any {
        return this._particula;
    }

    public set particula(v:any) {
        this._particula =v;
    }
}