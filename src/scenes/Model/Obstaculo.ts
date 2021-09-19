export default class Obstaculo {
    private _sprite: string;
    private _physics: any;

    constructor(sprite: string, physics : any){
        this._sprite = sprite;
        this._physics = physics;
        this.physics.add.sprite(-100, -100, this.sprite);
    }

    public setPosicion(x:number, y:number) {
        try {
            this.physics.setX(x);
        } catch (error) {
            console.error("Error al intentar ingresar la posicion x." + error);
        }
        try {
            this.physics.setX(y);
        } catch (error) {
            console.error("Error al intentar ingresar la posicion y." + error);
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
}