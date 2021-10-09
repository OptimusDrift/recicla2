import Phaser from "phaser";
import CTrivia from "../Controller/CTrivia";

export default class ModoTrivia extends Phaser.Scene{
    private _controladorNivel: CTrivia;
    constructor(){
        super("trivia");
    }

    preload (){

    }
public a(){
    console.log("aasdsad");
}
    create(){
        this._controladorNivel = new CTrivia(this);
    }

    update(){

    }
}