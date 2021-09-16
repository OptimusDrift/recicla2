import Phaser from "phaser";
import Juego from "./Juego";
import Nivel from "../Model/Nivel";
import Residuo from "../Model/Residuo";
import Moneda from "../Model/Moneda";
import Obstaculo from "../Model/Obstaculo";
import Recipiente from "../Model/Recipiente";
import Pregunta from "../Model/Pregunta";
import Player from "../Model/Player";
import Dialogo from "../Model/Dialogo";
import Cosmetico from "../Model/Cosmetico";
import Mejora from "../Model/Mejora";
export default class Carga extends Phaser.Scene{
    //private Juego: Juego;
    constructor(){
        super("pantallaDeCarga");
        //this.Juego = new Juego("lvl1",new Nivel("fondo", new Array<Residuo>(), new Array<Moneda>(), new Array<Obstaculo>(), new Array<Recipiente>(), new Pregunta("pregunta", "respuestaCorrecta", new Array<String>(), "mensajeRespuestaCorrecta","mensajeRespuestaIncorrecta"), new Player("nombre", new Array<Cosmetico>(), new Array<Mejora>(), new Cosmetico("sprite", 0, false), new Cosmetico("sprite", 0, false), 0, 0, 0), new Array<Dialogo>(), 0));
    }

    preload()
    {
        let loadBar = this.add.graphics({
            fillStyle:{
                color: 0xffffff
            }
        })
        this.load.on("progress", (percent) =>{
            loadBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50)
            console.log(percent);
        })
    }

    create()
    {
        this.scene.start("lvl1");
    }

}