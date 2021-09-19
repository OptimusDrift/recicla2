export default class Residuo {
    private _sprite: string;
    private _physics: any;
    private _gravedad: number;
    private _tipo: string;

    constructor(sprite: string, physics: any, gravedad:number, tipo: string) {
        this._gravedad = gravedad;
        this._physics = physics;
        this._sprite = sprite;
        this._tipo = tipo;
        this.physics.add.sprite(-100, -100, this.sprite);
    }
    
    public OcultarResiduo() : void {
        try {
            this.physics.setVisible(!this.physics.getVisible());
        } catch (error) {
            console.error("Error al intentar ocultar el residuo." + error);
        }
    }

   //Getters and setters
    public get sprite() : string {
        return this._sprite;
    }

    public set sprite(v : string) {
        this._sprite = v;
    }

    
    public get physics() : any {
        return this._physics;
    }
    
    
    public set physics(v : any) {
        this._physics = v;
    }
    
   public get gravedad() : number {
       return this._gravedad;
   }
    
    public set gravedad(v : number) {
        this._gravedad = v;
    }

    
    public get tipo() : string {
        return this._tipo;
    }
    
    
    public set tipo(v : string) {
        this._tipo = v;
    }
    
}