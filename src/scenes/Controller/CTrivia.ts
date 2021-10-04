import ModoTrivia from '../View/ModoTrivia';
import Boton from '../Model/Boton';
import Pregunta from '../Model/Pregunta';
import Particulas from '../Model/Particulas';
import preguntas from "./Preguntas.json";


export default class CTrivia {
    private _trivia: ModoTrivia;
    private _botones: Array<Boton>;
    private _pregunta: Array<Pregunta>;
    private style = { font: "20x Arial", fill: "#fff" };
    

    constructor(trivia: ModoTrivia) {
        this._trivia = trivia;
        this._botones = new Array<Boton>();
        this._pregunta = new Array<Pregunta>();
        this.CargarPreguntas();
        this.CargarTrivia();
    }

    public CargarPreguntas(){
        preguntas.forEach(p => {
            this.pregunta.push(new Pregunta(p["Pregunta"],p["RespuestaCorrecta"],new Array<string>(p["RespuestaCorrecta"],p["RespuestaIncorrecta1"],p["RespuestaIncorrecta2"],p["RespuestaIncorrecta3"]),p["RespuestaDeRisaEnCasoDeSerCorrecta"],p["RespuestaDeRisaEnCasoDeSerIncorrecta"]))});
    }
//Nivel pruebas
private n:number = 0;
    //Carga las variables (pregunta y respuestas) desde un JSON del nivel actual.
    public CargarTrivia(){
        this.n = Math.floor((Math.random() * (this.pregunta.length)));
        this.pregunta[this.n].RandomizarRerspuestas();
        console.log(this.pregunta[this.n].pregunta);
        this.botones.push(new Boton(this.trivia.add.text(960,200,this.pregunta[this.n].respuestas[0],this.style), this.trivia.add.image(960,200,"boton"), new Particulas(this.trivia.add.particles('estrellitas')), new Particulas(this.trivia.add.particles('cruces'))));
        this.botones.push(new Boton(this.trivia.add.text(960,400,this.pregunta[this.n].respuestas[1],this.style), this.trivia.add.image(960,400,"boton"), new Particulas(this.trivia.add.particles('estrellitas')), new Particulas(this.trivia.add.particles('cruces'))));
        this.botones.push(new Boton(this.trivia.add.text(960,600,this.pregunta[this.n].respuestas[2],this.style), this.trivia.add.image(960,600,"boton"), new Particulas(this.trivia.add.particles('estrellitas')), new Particulas(this.trivia.add.particles('cruces'))));
        this.botones.push(new Boton(this.trivia.add.text(960,800,this.pregunta[this.n].respuestas[3],this.style), this.trivia.add.image(960,800,"boton"), new Particulas(this.trivia.add.particles('estrellitas')), new Particulas(this.trivia.add.particles('cruces'))));
        this.botones.forEach(b => {
            b.boton.on('pointerup',()=> this.PointerUp(b));
        });
    }

    //Metodo para definir la funcion del click, en teste caso, consiste en revisar la respuesta y ver si es correcta.
    private PointerUp(btn: Boton) {
        var a = false;
        if(this.pregunta[this.n].respuestaCorrecta == btn.texto.text) {
            a=true;
        }
        if(a){
            btn.BotonCorrecto();
        }else{
            btn.BotonIncorecto();
        }
        this.botones.forEach(b => b.PausarBoton());
    }

    //Getters and setters
    public get trivia(): ModoTrivia {
        return this._trivia;
    }

    public set trivia(v:ModoTrivia) {
        this._trivia =v;
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