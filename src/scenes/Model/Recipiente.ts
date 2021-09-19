import Residuo from './Residuo'

export default class Recipiente {
    private _sprite: string;
    private _physics: any;
    private _tipoRecipiente: string;

    constructor(sprite : string, physics : any, posicion : any, tipoRecipiente : string) {
        this._sprite = sprite;
        this._physics = physics;
        this._tipoRecipiente = tipoRecipiente;
        this.physics.add.sprite(-100, -100, this.sprite);
    }

    public CompararRecipiente(residuo : Residuo) : void {
        try {
            if (residuo.tipo == this._tipoRecipiente) {
                this.Retroalimentacion(true);
            }else{
                this.Retroalimentacion(false);
            }
        } catch (error) {
            console.error("Error al intentar comprar el residuo." + error);
        }
    }

    private Retroalimentacion(rta: Boolean){
        try {
            if (rta){
                //Efecto desde la posicion del recipiente (¿estrellitas verdes?)
            }else{
                //Efecto desde la posicion del recipiente (¿cruzes rojas?)
            }
        } catch (error) {
            
        }
    }
    
    public setPosicion(x : number, y : number) {
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


    public get tipoRecipiente() : string {
        return this._tipoRecipiente;
    }
    
    
    public set tipoRecipiente(v : string) {
        this._tipoRecipiente = v;
    }

}