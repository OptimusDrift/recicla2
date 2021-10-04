import Phaser from "phaser";
import CNivel from "../Controller/CNivel";
import Nivel from "../Model/Nivel";
import Juego from "./Juego";
import Residuo from "../Model/Residuo";
import Moneda from "../Model/Moneda";
import Musica from "../Model/Musica";
import Obstaculo from "../Model/Obstaculo";
import Recipiente from "../Model/Recipiente";
import Pregunta from "../Model/Pregunta";
import Player from "../Model/Player";
import Dialogo from "../Model/Dialogo";
import Cosmetico from "../Model/Cosmetico";
import Mejora from "../Model/Mejora";


export default class Carga extends Phaser.Scene{
    //Controladores pruebas
    public cN: CNivel;
    public niveles : Array<Nivel>;
    public player : Player;

    constructor(){
        super("pantallaDeCarga");

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
        });
        //---------------Sprites---------------------\\
        this.load.image("boton", "assets/Botones/Boton.png");
        this.load.image("papel1", "assets/Basura/Papel_1.png");
        this.load.image('estrellitas', 'assets/Particulas/Estrellas.png');
        this.load.image('cruces', 'assets/Particulas/Cruces.png');
        this.load.image('mesa', 'assets/Obstaculos/Mesa.png');
        //--------------Musica Y FX--------------------\\
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
    }

    create()
    {
        this.player = new Player("nombre", new Array<Cosmetico>(), new Array<Mejora>(), new Cosmetico("sprite", 0, false), new Cosmetico("sprite", 0, false), 0, 0, 0);

        this.niveles = new Array<Nivel>();
        console.log(this.scene.manager.scenes[3]);
        this.niveles.push(new Nivel(this.scene.manager.scenes[3], "fondo", this.player,0, new Array<Moneda>(), new Array<Obstaculo>(), new Array<Recipiente>(), new Array<Residuo>(), 0,0,new Musica("")));
        this.niveles.push(new Nivel(this.scene.manager.scenes[3], "fondo", this.player,0, new Array<Moneda>(), new Array<Obstaculo>(), new Array<Recipiente>(), new Array<Residuo>(), 0,0,new Musica("")));
        this.cN = new CNivel(this.niveles, 0);
        this.cN.CargarControlador();
        this.scene.start("nivel");
    }

}