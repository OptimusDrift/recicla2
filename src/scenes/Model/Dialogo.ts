import Pregunta from './Pregunta'
import arrayShuffle from 'array-shuffle';

export default class Dialogo {
    private _dialogosTutorial: Array<String>;
    private _dialogosNivel: Array<String>;
    private _preguntasModoHistoria:Array<Pregunta>;
    private _preguntasModoTrivia: Array<Pregunta>;

    constructor(dialogosTutorial: Array<String>, dialogoNivel: Array<String>, preguntasModoHistoria: Array<Pregunta>, preguntasModoTrivia: Array<Pregunta>){
        this._dialogosTutorial = dialogosTutorial;
        this._dialogosNivel = dialogoNivel;
        this._preguntasModoHistoria = preguntasModoHistoria;
        this._preguntasModoTrivia = preguntasModoTrivia;
    }

    public RandomizarRerspuestas(){
        try {
            this.preguntasModoTrivia = arrayShuffle(this.preguntasModoTrivia);
        } catch (error) {
            console.error("Error al intentar randomizar las respuestas" + error);
        }
    }

    //Getters and setters

    public set dialogosTutorial(v : Array<String>) {
        this._dialogosTutorial = v;
    }
    
    
    public get dialogosTutorial() : Array<String> {
        return this._dialogosTutorial;
    } 


    public set dialogosNivel(v : Array<String>) {
        this._dialogosNivel = v;
    }
    
    
    public get dialogosNivel() : Array<String> {
        return this._dialogosNivel;
    } 

    public set preguntasModoHistoria(v : Array<Pregunta>) {
        this._preguntasModoHistoria = v;
    }
    
    
    public get preguntasModoHistoria() : Array<Pregunta> {
        return this._preguntasModoHistoria;
    } 

    public set preguntasModoTrivia(v : Array<Pregunta>) {
        this._preguntasModoTrivia = v;
    }
    
    
    public get preguntasModoTrivia() : Array<Pregunta> {
        return this._preguntasModoTrivia;
    } 
}