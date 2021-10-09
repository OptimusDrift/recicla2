import Phaser from "phaser";
import CNivel from "../Controller/CNivel";

export default class Juego extends Phaser.Scene{

    private _controladorNivel: CNivel;
    constructor(str : string) {
        super("nivel");
    }

    preload (){
        
    }

    create(){;
        this.scene.launch("trivia");
    }

    update(){
        this.controladorNivel.PrepararLanzamiento();
    }

    //Getters and setters
    
    public set controladorNivel(v : CNivel) {
        this._controladorNivel = v;
    }

    
    public get controladorNivel() : CNivel {
        return this._controladorNivel;
    }
    
}