export default class Cosmetico {
    private _sprite: String;
    private _precio: number;
    private _estadoDeCompra: boolean;

    constructor(sprite: String, precio: number, estadoDeCompra: boolean) {
        this._sprite = sprite;
        this._precio = precio;
        this._estadoDeCompra = estadoDeCompra;
    }

    public CambiarPrecio(nuevoPrecio: number){
        try {
            if (nuevoPrecio >= 0) {
                this._precio = nuevoPrecio;
            }else{
                throw new Error();
            }
        } catch (error) {
            console.error("Error al intentar cambiar el precio, puede que el precio es menor a 0." + error);
        }
    }

    public ComprarCosmetico():boolean {
        try {
            if (this.precio < 0){
                throw new Error();
            }
        } catch (error) {
            console.error("Error al intentar comprar el cosmetico, puede que el precio no es el correcto." + error);
            return false;
        }
        try {
            if (!this.estadoDeCompra) {
                this.estadoDeCompra = true;
                return true;
            }
        } catch (error) {
            console.error("Error al intentar comprar el cosmetico, puede que ya se encuentre en su inventario." + error);
        }
        return false;
    }

    //Getters and setters
    
    public set sprite(v : String) {
        this._sprite = v;
    }
    
    
    public get sprite() : String {
        return this._sprite;
    }
    

    public get precio() : number {
        return this._precio;
    }


    public get estadoDeCompra() : boolean {
        return this._estadoDeCompra;
    }
    
    
    public set estadoDeCompra(v : boolean) {
        this._estadoDeCompra = v;
    }
}