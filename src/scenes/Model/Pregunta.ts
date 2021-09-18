import arrayShuffle from 'array-shuffle';
export default class Pregunta {
    private _pregunta: String;
    private _respuestaCorrecta: String;
    private _respuestas:Array<String>;
    private _mensajeRespuestaCorrecta: String;
    private _mensajeRespuestaIncorrecta: String;

    constructor(pregunta: String, respuestaCorrecta: String, respuestas: Array<String>, mensajeRespuestaCorrecta: String, mensajeRespuestaIncorrecta:String){
        this._pregunta = pregunta;
        this._respuestaCorrecta = respuestaCorrecta;
        this._respuestas = respuestas;
        this._mensajeRespuestaCorrecta = mensajeRespuestaCorrecta;
        this._mensajeRespuestaIncorrecta = mensajeRespuestaIncorrecta;
    }

    public RandomizarRerspuestas(){
        try {
            this.respuestas = arrayShuffle(this.respuestas);
        } catch (error) {
            console.error("Error al intentar randomizar las respuestas" + error);
        }
    }

    //Getters and setters
    public set pregunta(v : String) {
        this._pregunta = v;
    }
    
    
    public get pregunta() : String {
        return this._pregunta;
    }    
    
    public set respuestaCorrecta(v : String) {
        this._respuestaCorrecta = v;
    }
    
    
    public get respuestaCorrecta() : String {
        return this._respuestaCorrecta;
    }    
    
    public set respuestas(v : Array<String>) {
        this._respuestas = v;
    }
    
    
    public get respuestas() : Array<String> {
        return this._respuestas;
    }    
    
    public set mensajeRespuestaCorrecta(v : String) {
        this._mensajeRespuestaCorrecta = v;
    }
    
    
    public get mensajeRespuestaCorrecta() : String {
        return this._mensajeRespuestaCorrecta;
    }   
    
    public set mensajeRespuestaIncorrecta(v : String) {
        this._mensajeRespuestaIncorrecta = v;
    }
    
    
    public get mensajeRespuestaIncorrecta() : String {
        return this._mensajeRespuestaIncorrecta;
    }
}