import Phaser from "phaser";
import Juego from "./Juego";
import Nivel from "./Nivel";
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
        //this.Juego = new Juego("lvl1",new Nivel("fondo", new Array<Residuo>(), new Array<Moneda>(), new Array<Obstaculo>(), new Array<Recipiente>(), new Pregunta("pregunta", "respuestaCorrecta", new Array<string>(), "mensajeRespuestaCorrecta","mensajeRespuestaIncorrecta"), new Player("nombre", new Array<Cosmetico>(), new Array<Mejora>(), new Cosmetico("sprite", 0, false), new Cosmetico("sprite", 0, false), 0, 0, 0), new Array<Dialogo>(), 0));
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
        this.load.image("boton", "assets/Botones/Boton.png");
        
        this.load.audio("CompraRealizada", "assets/Sonidos/CompraRealizada.mp3");
        this.load.audio("MusicaCreditos", "assets/Sonidos/MusicaCreditos.mp3");
        this.load.audio("MusicaJuego", "assets/Sonidos/MusicaJuego.mp3");
        this.load.audio("MusicaMenu", "assets/Sonidos/MusicaMenu.mp3");
        this.load.audio("MusicaTienda", "assets/Sonidos/MusicaTienda.mp3");
        this.load.audio("MusicaTrivia", "assets/Sonidos/MusicaTrivia.mp3");
        this.load.audio("Transicion", "assets/Sonidos/Transicion.mp3");
        this.load.audio("RespuestaCorrecta", "assets/Sonidos/RespuestaCorrecta.wav");
        this.load.audio("RespuestaIncorrecta", "assets/Sonidos/RespuestaIncorrecta.wav");
        this.load.audio("RisaRie", "assets/Sonidos/RisaRie.wav");
        this.load.image('estrellitas', 'assets/Particulas/Estrellas.png');
    }

    create()
    {
        this.scene.start("lvl1");
    }

}