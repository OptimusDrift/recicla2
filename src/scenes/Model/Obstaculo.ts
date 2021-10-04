export default class Obstaculo {
    private _sprite: string;
    private _physics: any;
    private _x: number;
    private _y: number;
    private _rotacion: number;
    private _cuerpo: any;

    constructor(sprite: string, physics : any, x:number, y:number, rotacion:number = 0){
        this._sprite = sprite;
        this._physics = physics;
        this._x = x;
        this._y = y;
        this._rotacion = rotacion;
        this._cuerpo = this.physics.add.sprite(this.x, this.y, this.sprite);
        this.cuerpo.body.allowGravity = false;
        this.cuerpo.setAngle(this.rotacion);
    }

    public setPosicionX(x:number) {
        try {
            this.x = x;
            this.physics.setX(this.x);
        } catch (error) {
            console.error("Error al intentar ingresar la posicion x." + error);
        }
    }

    public setPosicionY(y:number = 0) {
        try {
            this.y = y;
            this.physics.setX(this.y);
        } catch (error) {
            console.error("Error al intentar ingresar la posicion y." + error);
        }
    }

    public setRotacion(rotacion: number) {
        try {
            this.rotacion = rotacion;
            this.physics.setX(this.rotacion);
        } catch (error) {
            console.error("Error al intentar ingresar la rotación." + error);
        }
    }

    //Getters and setters
    
    public set sprite(v : string) {
        this._sprite = v;
    }
    
    public get sprite() : string {
        return this._sprite;
    }
    
    public get physics() : any {
        return this._physics;
    }
    
    
    public set physics(v : any) {
        this._physics = v;
    }

    public set x(v : number) {
        this._x = v;
    }

    public get x() : number {
        return this._x;
    }

    public set y(v : number) {
        this._y = v;
    }
    
    public get y() : number {
        return this._y;
    }

    public set rotacion(v : number) {
        this._rotacion = v;
    }
    
    public get rotacion() : number {
        return this._rotacion;
    }

    public set cuerpo(v : any) {
        this._cuerpo = v;
    }
    
    public get cuerpo() : any {
        return this._cuerpo;
    }
}