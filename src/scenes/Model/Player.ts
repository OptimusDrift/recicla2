import Cosmetico from './Cosmetico'
import Mejora from './Mejora'
export default class Player {
    //¿Agregar ID para la bbd?
    private _nombre: String;
    private _cosmeticos: Array<Cosmetico>;
    private _mejoras: Array<Mejora>;
    private _gomera: Cosmetico;
    private _risa: Cosmetico;
    private _moneda: number;
    private _nivelActual: number;
    private _puntajeMaximoModoTrivia: number;

    constructor (nombre: String, cosmeticos: Array<Cosmetico>, mejoras: Array<Mejora>, gomera: Cosmetico, risa: Cosmetico, moneda: number, nivelActual: number, puntajeMaximoModoTrivia: number) {
        this._nombre = nombre;
        this._cosmeticos = cosmeticos;
        this._mejoras = mejoras;
        this._gomera = gomera;
        this._risa = risa;
        this._moneda = moneda;
        this._nivelActual = nivelActual;
        this._puntajeMaximoModoTrivia = puntajeMaximoModoTrivia;
    }

    public CambiarMonedas (cantidad: number): boolean{
        try {
            if ((this.moneda + cantidad) < 0) {
                throw new Error();
            }
            this.moneda = this.moneda + cantidad
            return true;
        } catch (error) {
            console.error("Error al intentar hacer cambios en la moneda." + error);
        }
        return false;
    }

    private BuscarCosmetico(cosmetico: Cosmetico){
        try {
            let x = this.cosmeticos.find(element => element.sprite == cosmetico.sprite);
            if (x != undefined) {
                return true;
            }
        } catch (error) {
            console.error("Error al buscar un cosmetico." + error);
        }
        return false;
    }

    public CambiarCosmeticoGomera(nuevoCosmetico: Cosmetico){
        try {
            if (!this.BuscarCosmetico(nuevoCosmetico)) {
                throw new Error();
            }
            this.gomera = nuevoCosmetico;
        } catch (error) {
            console.error("Error al intentar equipar el cosmetico." + error);
        }
    }

    public CambiarCosmeticoRisa(nuevoCosmetico: Cosmetico){
        try {
            if (!this.BuscarCosmetico(nuevoCosmetico)) {
                throw new Error();
            }
            this.risa = nuevoCosmetico;
        } catch (error) {
            console.error("Error al intentar equipar el cosmetico." + error);
        }
    }

    public AgregarCosmetico(nuevoCosmetico: Cosmetico){
        try {
            if (this.BuscarCosmetico(nuevoCosmetico)) {
                throw new Error();
            }
            this.cosmeticos.push(nuevoCosmetico);
        } catch (error) {
            console.error("Error al intentar agregar el cosmetico." + error);
        }
    }

    public SiguienteNivel(){
        this.nivelActual ++;
    }

    //Getters and setters
    public get nombre() : String {
        return this._nombre;
    }
    
    
    public set nombre(v : String) {
        this._nombre = v;
    }

    public get cosmeticos() : Array<Cosmetico> {
        return this._cosmeticos;
    }
    
    
    public set cosmeticos(v : Array<Cosmetico>) {
        this._cosmeticos = v;
    }

    public get mejoras() : Array<Mejora> {
        return this._mejoras;
    }
    
    
    public set mejoras(v : Array<Mejora>) {
        this._mejoras = v;
    }

    public get gomera() : Cosmetico {
        return this._gomera;
    }
    
    
    public set gomera(v : Cosmetico) {
        this._gomera = v;
    }

    public get risa() : Cosmetico {
        return this._risa;
    }
    
    
    public set risa(v : Cosmetico) {
        this._risa = v;
    }

    public get moneda() : number {
        return this._moneda;
    }
    
    
    public set moneda(v : number) {
        this._moneda = v;
    }
    
    
    public set nivelActual(v : number) {
        try {
            if (v < 0) {
                throw new Error();
            }
            this._nivelActual = v;
        } catch (error) {
            
        }
    }

    public get nivelActual() : number {
        return this._nivelActual;
    }
    
    
    public set puntajeMaximoModoTrivia(v : number) {
        try {
            if (v < 0) {
                throw new Error();
            }
            this._puntajeMaximoModoTrivia = v;
        } catch (error) {
            
        }
    }

    public get puntajeMaximoModoTrivia() : number {
        return this._puntajeMaximoModoTrivia;
    }
}
