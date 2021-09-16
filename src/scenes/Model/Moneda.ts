export default class Moneda {
    private _sprite: String;
    private _physics: any;
    private _valor: number;

    constructor(sprite: String, physics : any, valor : number) {
        this._sprite = sprite;
        this._physics = physics;
        this._valor = valor;
        this.physics.add.sprite(-100, -100, this.sprite);
    }


    public OcultarMoneda() : void {
        try {
            this.physics.setVisible(!this.physics.getVisible());
        } catch (error) {
            console.error("Error al intentar ocultar la moneda." + error);
        }
    }

    //Getters and setters
    
    public set sprite(v : String) {
        this._sprite = v;
    }
    
    
    public get sprite() : String {
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
}