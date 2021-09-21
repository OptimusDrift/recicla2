import Trivia from '../View/Trivia';
import Nivel from '../View/Nivel';
import Boton from '../Model/Boton';
import Pregunta from '../Model/Pregunta';
import preguntas from "./Preguntas.json";


export default class CTrivia {
    private _nivel: Nivel;
    private _botones: Array<Boton>;
    private _pregunta: Array<Pregunta>;
    private style = { font: "20x Arial", fill: "#fff" };
    

    constructor(nivel: Nivel) {
        this._nivel = nivel;
        this._botones = new Array<Boton>();
        this._pregunta = new Array<Pregunta>();
        this.CargarPreguntas();
        this.CargarNivel();
    }

    public CargarPreguntas(){
        preguntas.forEach(p => {
            this.pregunta.push(new Pregunta(p["Pregunta"],p["RespuestaCorrecta"],new Array<string>(p["RespuestaCorrecta"],p["RespuestaIncorrecta1"],p["RespuestaIncorrecta2"],p["RespuestaIncorrecta3"]),p["RespuestaDeRisaEnCasoDeSerCorrecta"],p["RespuestaDeRisaEnCasoDeSerIncorrecta"]))});
    }
//Nivel pruebas
private n:number = 0;
    public CargarNivel(){
        this.n = Math.floor((Math.random() * (this.pregunta.length)));
        this.pregunta[this.n].RandomizarRerspuestas();
        console.log(this.pregunta[this.n].pregunta);
        this.botones.push(new Boton(this.nivel.add.text(960,200,this.pregunta[this.n].respuestas[0],this.style), this.nivel.add.image(960,200,"boton")));
        this.botones.push(new Boton(this.nivel.add.text(960,400,this.pregunta[this.n].respuestas[1],this.style), this.nivel.add.image(960,400,"boton")));
        this.botones.push(new Boton(this.nivel.add.text(960,600,this.pregunta[this.n].respuestas[2],this.style), this.nivel.add.image(960,600,"boton")));
        this.botones.push(new Boton(this.nivel.add.text(960,800,this.pregunta[this.n].respuestas[3],this.style), this.nivel.add.image(960,800,"boton")));
        this.botones.forEach(b => {
            b.boton.on('pointerup',()=> this.PointerUp(b));
        });
    }

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
    public get nivel(): Nivel {
        return this._nivel;
    }

    public set nivel(v:Nivel) {
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