import Trivia from '../View/Trivia';
import Juego from '../View/Juego';
import Boton from '../Model/Boton';
import Pregunta from '../Model/Pregunta';
import pregunta from "./Preguntas.json";//Ignorar error funciona igual


export default class CTrivia {
    private _nivel: Juego;
    private _botones: Array<Boton>;
    private _pregunta: Array<Pregunta>;
    

    constructor(nivel: Juego) {
        this._nivel = nivel;
        this._botones = new Array<Boton>();
        this._pregunta = new Array<Pregunta>();
        console.log(pregunta[0]);
    }

    public CargarPreguntas(){

        //this.pregunta.push(pregunta);
    }
    //this.boton.on('pointerup',()=> this.PointerUp());

    private PointerUp() {
        this.BotonIncorecto();
    }

    //Getters and setters
    public get nivel(): Juego {
        return this._nivel;
    }

    public set nivel(v:Juego) {
        this._nivel =v;
    }

    public get botones(): Array<Boton> {
        return this._botones;
    }

    public set botones(v:Array<Boton>) {
        this._botones =v;
    }

    public get pregunta(): Array<Pregunta> {
        return this._pregunta;
    }

    public set pregunta(v:Array<Pregunta>) {
        this._pregunta =v;
    }
}