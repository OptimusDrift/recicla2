import Phaser from "phaser";
import CNivel from "../Controller/CNivel";

export default class Juego extends Phaser.Scene{

    private _controladorNivel: CNivel;
    constructor() {
        super("nivel");
    }

    preload (){
        console.log("this.physics");
        
    }

    create(){

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