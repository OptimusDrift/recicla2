export default class Particulas {
    private _particula: any;
    private _temporizador: any;
    private _delay: number;

    constructor(particula: any, temporizador: any, delay: number = 1000) {
        this._particula = particula;
        this._temporizador = temporizador;
        this._delay = delay;
        this.temporizador.addEvent({
            delay: this.delay,
            callback: this.DetenerParticula,
        });
    }
    
    public EjecutarParticula(x: number, y: number){
        this.particula = this.particula.createEmitter();
        this.particula.setPosition(x,y);
        this.particula.setGravityY(-200);
        this.particula.setSpeed(300);
        this.particula.setAngle({min: 180, max: 360});
        this.particula.maxParticles = 5;
        this.particula.setLifespan(500);
        this.particula.setScale({ min: 0.1, max: 1 });
        this.particula.setBlendMode(Phaser.BlendModes.ADD);
    }

    public DetenerParticula(){
        //this.particula.stop();
    }

    //Getters and setters
    public get particula(): any {
        return this._particula;
    }

    public set particula(v:any) {
        this._particula =v;
    }

    public get temporizador(): any {
        return this._temporizador;
    }

    public set temporizador(v:any) {
        this._temporizador =v;
    }

    public get delay(): number {
        return this._delay;
    }

    public set delay(v:number) {
        this._delay =v;
    }
}