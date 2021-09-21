import Nivel from '../View/Nivel';
import Residuo from '../Model/Residuo';
export default class CNivel {
    private _niveles: Array<Nivel>;
    private _nivelActual: number;
    private _puntajeActual: number;
    private _estadoDelNivel: number;
    private _monedasRecogidas: number;

    constructor(niveles: Array<Nivel>, nivelActual: number, puntajeActual: number, estadoDelNivel: number, monedasRecogidas: number) {
        this._niveles = niveles;
        this._nivelActual = nivelActual;
        this._puntajeActual = puntajeActual;
        this._estadoDelNivel = estadoDelNivel;
        this._monedasRecogidas = monedasRecogidas;
    }

    //Getters and setters
    public get niveles(): Array<Nivel>{
        return this._niveles;
    }

    public set niveles(value: Array<Nivel>){
        this._niveles = value;
    }

    public get nivelActual(): number{
        return this._nivelActual;
    }

    public set nivelActual(value: number){
        this._nivelActual = value;
    }

    public get puntajeActual(): number{
        return this._puntajeActual;
    }

    public set puntajeActual(value: number){
        this._puntajeActual = value;
    }

    public get estadoDelNivel(): number{
        return this._estadoDelNivel;
    }

    public set estadoDelNivel(value: number){
        this._estadoDelNivel = value;
    }

    public get monedasRecogidas(): number{
        return this._monedasRecogidas;
    }

    public set monedasRecogidas(value: number){
        this._monedasRecogidas = value;
    }
}