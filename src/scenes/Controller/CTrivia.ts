import Juego from '../View/Juego';
import Boton from '../Model/Boton';
import Pregunta from '../Model/Pregunta';
import Nivel from '../Model/Nivel';
import preguntas from "./Preguntas.json";


export default class CTrivia {
    //Atributos de la trivia
    private _escena: any;
    private _botones: Array<Boton>;
    private _preguntas: Array<Pregunta>;
    private _preguntaActual: number;

    //Constantes de la trivia
    private BOTON_0_POSICION_X = 478;
    private BOTON_0_POSICION_Y = 628;
    private BOTON_1_POSICION_X = 478;
    private BOTON_1_POSICION_Y = 824;
    private BOTON_2_POSICION_X = 1078;
    private BOTON_2_POSICION_Y = 628;
    private BOTON_3_POSICION_X = 1078;
    private BOTON_3_POSICION_Y = 824;

    //Estilo del texto
    private style = { font: "20x Arial", fill: "#fff" };
    
    //Constructor
    constructor(escena: any) {
        this._escena = escena;
        this.escena.add.image(1920/2, 1080/2, "fondoTrivia").setDepth(-20);
        this.escena.add.image(225+556, 100+205, "cuadroDeDialogo");
        this.escena.add.image(1410+206, 100+434, "risaPregunta");
        this._botones = new Array<Boton>();
        this._preguntas = new Array<Pregunta>();
        this._preguntaActual = 0;
        this.CargarPreguntas();
    }

    //Carga las preguntas desde un JSON
    public CargarPreguntas(){
        preguntas.forEach(p => {
            this.preguntas.push(new Pregunta(p["Pregunta"],p["RespuestaCorrecta"],new Array<string>(p["RespuestaCorrecta"],p["RespuestaIncorrecta1"],p["RespuestaIncorrecta2"],p["RespuestaIncorrecta3"]),p["RespuestaDeRisaEnCasoDeSerCorrecta"],p["RespuestaDeRisaEnCasoDeSerIncorrecta"]))});
    }

//Nivel pruebas
private n:number = 0;
    //Carga las variables (pregunta y respuestas) desde un JSON del nivel actual.
    public CargarTrivia(){
        this.preguntaActual = Math.floor((Math.random() * (this.preguntas.length))); //PRUEBAS
        //Prinero randomiza las preguntas
        this.preguntas[this.preguntaActual].RandomizarRerspuestas();
        console.log(this.preguntas[this.preguntaActual].pregunta);
        let i = 0;
        this.botones.forEach(b => {
            b.texto.text = this.preguntas[this.preguntaActual].respuestas[i];
            b.boton.on('pointerup',()=> this.PointerUp(b));
            i++;
        });
    }

    //Metodo para definir la funcion del click, en teste caso, consiste en revisar la respuesta y ver si es correcta.
    private PointerUp(btn: Boton) {
        var a = false;
        if(this.preguntas[this.preguntaActual].respuestaCorrecta == btn.texto.text) {
            a=true;
        }
        if(a){
            btn.BotonCorrecto();
        }else{
            btn.BotonIncorecto();
        }
        this.botones.forEach(b => b.PausarBoton());
    }

    public CargarBotones(){
        this.botones.push(new Boton(this.escena.add.text(this.BOTON_0_POSICION_X,this.BOTON_0_POSICION_Y,"",this.style), this.escena.add.image(this.BOTON_0_POSICION_X,this.BOTON_0_POSICION_Y,"boton"), this.escena.particulasCorrecto, this.escena.particulasIncorrecta));
        this.botones.push(new Boton(this.escena.add.text(this.BOTON_1_POSICION_X,this.BOTON_1_POSICION_Y,"",this.style), this.escena.add.image(this.BOTON_1_POSICION_X,this.BOTON_1_POSICION_Y,"boton"), this.escena.particulasCorrecto, this.escena.particulasIncorrecta));
        this.botones.push(new Boton(this.escena.add.text(this.BOTON_2_POSICION_X,this.BOTON_2_POSICION_Y,"",this.style), this.escena.add.image(this.BOTON_2_POSICION_X,this.BOTON_2_POSICION_Y,"boton"), this.escena.particulasCorrecto, this.escena.particulasIncorrecta));
        this.botones.push(new Boton(this.escena.add.text(this.BOTON_3_POSICION_X,this.BOTON_3_POSICION_Y,"",this.style), this.escena.add.image(this.BOTON_3_POSICION_X,this.BOTON_3_POSICION_Y,"boton"), this.escena.particulasCorrecto, this.escena.particulasIncorrecta));
        this.CargarTrivia();
    }

    //Getters and setters
    public get escena(): any {
        return this._escena;
    }

    public set escena(v:any) {
        this._escena =v;
    }

    public CargarControlador(){
        this.escena.controladorTrivia = this;
    }

    public get botones(): Array<Boton> {
        return this._botones;
    }

    public set botones(v:Array<Boton>) {
        this._botones =v;
    }

    public get preguntas(): Array<Pregunta> {
        return this._preguntas;
    }

    public set preguntas(v:Array<Pregunta>) {
        this._preguntas =v;
    }

    public get preguntaActual(): number {
        return this._preguntaActual;
    }

    public set preguntaActual(v:number) {
        this._preguntaActual =v;
    }
}