import Residuo from './Residuo'

export default class Recipiente {
    private _sprite: String;
    private _physics: any;
    private _tipoRecipiente: String;

    constructor(sprite : String, physics : any, posicion : any, tipoRecipiente : String) {
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
    public get sprite() : String {
        return this._sprite;
    }

    public set sprite(v : String) {
        this._sprite = v;
    }

    
    public get physics() : any {
        return this._physics;
    }
    
    
    public set physics(v : any) {
        this._physics = v;
    }


    public get tipoRecipiente() : String {
        return this._tipoRecipiente;
    }
    
    
    public set tipoRecipiente(v : String) {
        this._tipoRecipiente = v;
    }

}