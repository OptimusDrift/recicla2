import Juego from '../View/Juego';
export default class CNivel {
    private _niveles: Array<Juego>;
    private _nivelActual: number;
    private _puntajeActual: number;
    private _estadoDelNivel: number;
    private _monedasRecogidas: number;

    constructor(niveles: Array<Juego>, nivelActual: number, puntajeActual: number, estadoDelNivel: number, monedasRecogidas: number) {
        this._niveles = niveles;
        this._nivelActual = nivelActual;
        this._puntajeActual = puntajeActual;
        this._estadoDelNivel = estadoDelNivel;
        this._monedasRecogidas = monedasRecogidas;
    }

    private 
    public LanzarReciduo(){
        this.niveles[this.nivelActual].game.input.activePointer.isDown;
    }

    //Getters and setters
    public get niveles(): Array<Juego>{
        return this._niveles;
    }

    public set niveles(value: Array<Juego>){
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