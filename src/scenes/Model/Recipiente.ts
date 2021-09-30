import Residuo from './Residuo'
import Particulas from './Particulas'

export default class Recipiente {
    private _sprite: string;
    private _physics: any;
    private _tipoRecipiente: string;
    private _particulasCorrecto: Particulas;
    private _particulasIncorrecta: Particulas;

    constructor(sprite : string, physics : any, posicion : any, tipoRecipiente : string, particulasCorrecto: any, particulasIncorrecta: any) {
        this._sprite = sprite;
        this._physics = physics;
        this._tipoRecipiente = tipoRecipiente;
        this.physics.add.sprite(-100, -100, this.sprite);
        this._particulasCorrecto = particulasCorrecto;
        this._particulasIncorrecta = particulasIncorrecta;
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
                this.particulasCorrecto.EjecutarParticula();//X e Y necesarios
            }else{
                this.particulasIncorrecta.EjecutarParticula();//X e Y necesarios
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

    public get particulasCorrecto(): any {
        return this._particulasCorrecto;
    }

    public set particulasCorrecto(v :any){
        this._particulasCorrecto = v;
    }

    public get particulasIncorrecta(): any {
        return this._particulasIncorrecta;
    }

    public set particulasIncorrecta(v :any){
        this._particulasIncorrecta = v;
    }
}