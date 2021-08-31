export default class Mejora {
    private _nombre: String;
    private _precio: number;
    private _cantidad: number;

    constructor(nombre: String, precio: number, cantidad: number) {
        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad;
    }

    public MejoraEfectoMejora(){
        //Activar esta mejora
    }

    //Getters and setters
    public get nombre() : String {
        return this._nombre;
    }
    
    
    public set nombre(v : String) {
        this._nombre = v;
    }

    public get precio() : number {
        return this._precio;
    }
    
    
    public set precio(v : number) {
        this._precio = v;
    }


    public get cantidad() : number {
        return this._cantidad;
    }
    
    
    public set cantidad(v : number) {
        this._cantidad = v;
    }
}