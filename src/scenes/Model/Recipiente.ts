import Residuo from './Residuo'
import Particulas from './Particulas'

export default class Recipiente {
    private _sprite: string;
    private _physics: any;
    private _cuerpo: any;
    private _x: number;
    private _y: number;
    private _tipoRecipiente: string;
    private _particulasCorrecto: Particulas;
    private _particulasIncorrecta: Particulas;

    constructor(sprite : string, physics : any, x : number, y : number, tipoRecipiente : string, particulasCorrecto: any, particulasIncorrecta: any) {
        this._sprite = sprite;
        this._physics = physics;
        this._x = x;
        this._y = y;
        this._tipoRecipiente = tipoRecipiente;
        console.log(this.sprite)
        this._cuerpo = this.physics.add.sprite(this.x, this.y, this.sprite);
        this._cuerpo.body.setAllowGravity(false);
        this._particulasCorrecto = particulasCorrecto;
        this._particulasIncorrecta = particulasIncorrecta;
    }

    public CompararRecipiente() {
        console.log("AAAAAAAAAAAAAAAAAAA");
        try {
            this.Retroalimentacion(residuo.tipo == this._tipoRecipiente);
        } catch (error) {
            console.error("Error al intentar comprar el residuo." + error);
        }
    }

    private Retroalimentacion(rta: Boolean){
        try {
            if (rta){
                this.particulasCorrecto.EjecutarParticula(this.x, this.y);
            }else{
                this.particulasIncorrecta.EjecutarParticula(this.x, this.y);
            }
        } catch (error) {
            
        }
    }
    
    public setPosicion(x : number, y : number) {
        try {
            this.x = x;
            this.physics.setX(x);
        } catch (error) {
            console.error("Error al intentar ingresar la posicion x." + error);
        }
        try {
            this.y = y;
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

    public get cuerpo() : any {
        return this._cuerpo;
    }
    
    public set cuerpo(v : any) {
        this._cuerpo = v;
    }

    public get x(): any {
        return this._x;
    }

    public set x(v :any){
        this._x = v;
    }

    public get y(): any {
        return this._y;
    }

    public set y(v :any){
        this._y = v;
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