export default class Moneda {
    private _sprite: string;
    private _physics: any;
    private _valor: number;
    private _cuerpo: any;

    constructor(sprite: string, physics : any, valor : number, x: number, y: number) {
        this._sprite = sprite;
        this._physics = physics;
        this._valor = valor;
        this._cuerpo = this.physics.add.sprite(x, y, this.sprite);
        this._cuerpo.body.setAllowGravity(false);
    }


    public OcultarMoneda() {
        try {

        } catch (error) {
            console.error("Error al intentar ocultar la moneda." + error);
        }
    }

    public TomarMoneda(residuo: any, moneda: any){
        try {

            moneda.body.x = -500;
            moneda.body.y = -500;
        } catch (error) {
            console.error("Error al intentar ocultar la moneda." + error);
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

    public get valor() : number {
        return this._valor;
    }
    
    public set valor(v : number) {
        this._valor = v;
    }

    public get cuerpo() : number {
        return this._cuerpo;
    }
    
    public set vacuerpolor(v : number) {
        this._cuerpo = v;
    }
}