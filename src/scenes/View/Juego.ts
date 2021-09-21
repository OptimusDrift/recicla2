import Phaser from "phaser";
import Nivel from "./Nivel";

export default class Juego extends Phaser.Scene{

    constructor(nombreNivel: string) {
        super(nombreNivel);
    }

    preload (){

    }

    create(){
        console.log("as")
    }
    //temp pruebas
    private a : boolean = false;
    update(){
        if (this.game.input.activePointer.isDown && !this.a){
            console.log(this.game.input.activePointer.x + ' Apretar X');
            console.log(-this.game.input.activePointer.y + ' Apretar Y');
            this.a = true;
        }
        if(this.game.input.activePointer.leftButtonReleased() && this.a){
            console.log(this.game.input.activePointer.getDistanceY() + ' Distancia');
            console.log(this.game.input.activePointer.x + ' Soltar X');
            console.log(-this.game.input.activePointer.y + ' Soltar Y');
            console.log("----------------");
            this.a = false;
        }
    }

public listener(){
console.log('asdasdas');
}
    //Getters and setters
    
}