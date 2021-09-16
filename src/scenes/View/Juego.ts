import Phaser from "phaser";
import Nivel from "../Model/Nivel";

export default class Juego extends Phaser.Scene{
    private _nivel: Nivel;

    constructor(nombreNivel: string, nivel: Nivel) {
        super(nombreNivel);
        this._nivel = nivel;
    }

    preload (){

    }

    create(){
        console.log("as")
    }

    update(){
        if (this.game.input.activePointer.isDown){
            //console.log(this.game.input.activePointer.x);
        }
        if(this.game.input.activePointer.leftButtonReleased()){
            //console.log(this.game.input.activePointer.getDistanceY());
        }
    }

public listener(){
console.log('asdasdas');
}
    //Getters and setters
    
    public get nivel() : Nivel {
        return this._nivel;
    }

    
    public set nivel(v : Nivel) {
        this._nivel = v;
    }
    
    
}