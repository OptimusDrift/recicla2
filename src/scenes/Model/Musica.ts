export default class Musica {
    private _nombre: String;

    constructor(nombre: String) {
        this._nombre = nombre;
    }

    public Play(){
        //Reproducir el tema
    }

    public Pausa(){
        //Pausar el tema
    }

    public Stop(){
        //Parar el tema
    }

    //Getters and setters
    public get nombre(): String {
        return this._nombre;
    }

    public set nombre(value: String) {
        this._nombre = value;
    }
}