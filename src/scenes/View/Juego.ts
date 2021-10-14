import Phaser from "phaser";
import CNivel from "../Controller/CNivel";
import Particulas from "../Model/Particulas";

export default class Juego extends Phaser.Scene{
    private _controladorNivel: CNivel;
    private _particulasCorrecto: Particulas;
    private _particulasIncorrecta: Particulas;

    constructor(str : string) {
        super(str);
    }

    preload (){
        
    }

    create(){
        
    }

    update(){
        
    }

    //Getters and setters
    
    public set particulasCorrecto(v : Particulas) {
        this._particulasCorrecto = v;
    }

    
    public get particulasCorrecto() : Particulas {
        return this._particulasCorrecto;
    }

    public set particulasIncorrecta(v : Particulas) {
        this._particulasIncorrecta = v;
    }

    
    public get particulasIncorrecta() : Particulas {
        return this._particulasIncorrecta;
    }

    public set controladorNivel(v : CNivel) {
        this._controladorNivel = v;
    }

    
    public get controladorNivel() : CNivel {
        return this._controladorNivel;
    }
    
}