import Phaser from "phaser";
import CNivel from "../Controller/CNivel";
import Nivel from "../Model/Nivel";
import Juego from "./Juego";
import Residuo from "../Model/Residuo";
import Moneda from "../Model/Moneda";
import Musica from "../Model/Musica";
import Obstaculo from "../Model/Obstaculo";
import Recipiente from "../Model/Recipiente";
import RecipienteVerde from "../Model/RecipienteVerde";
import RecipienteAzul from "../Model/RecipienteAzul";
import Pregunta from "../Model/Pregunta";
import Player from "../Model/Player";
import Dialogo from "../Model/Dialogo";
import Cosmetico from "../Model/Cosmetico";
import Mejora from "../Model/Mejora";
import Particulas from "../Model/Particulas";


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
        this.load.image("papel", "assets/Basura/Papel.png");
        this.load.image("moneda", "assets/Moneda/Moneda.png");
        this.load.image("recipienteAzul", "assets/Recipiente/RecipienteAzul.png");
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
        //console.log(this.scene.manager.scenes[3]);
        this.niveles.push(new Nivel(this.scene.manager.scenes[3], "fondo", this.player,0, new Array<Moneda>(), new Array<Obstaculo>(), new Array<Recipiente>(), new Array<Residuo>(), 0,0,new Musica("")));

        this.scene.manager.scenes[3].particulasIncorrecta = new Particulas(this.scene.manager.scenes[3].add.particles('cruces'));
        this.scene.manager.scenes[3].particulasCorrecto = new Particulas(this.scene.manager.scenes[3].add.particles('estrellitas'));


        this.niveles[0].residuos.push(new Residuo("papel",this.scene.manager.scenes[3].physics,0));
        this.niveles[0].residuos.push(new Residuo("papel",this.scene.manager.scenes[3].physics,0));
        this.niveles[0].residuos.push(new Residuo("papel",this.scene.manager.scenes[3].physics,0));

        this.niveles[0].monedas.push(new Moneda("moneda",this.scene.manager.scenes[3].physics,0,780,250));
        this.niveles[0].monedas.push(new Moneda("moneda",this.scene.manager.scenes[3].physics,0,650,150));
        this.niveles[0].monedas.push(new Moneda("moneda",this.scene.manager.scenes[3].physics,0,1900,880));

        this.niveles[0].obstaculos.push(new Obstaculo("mesa",this.scene.manager.scenes[3].physics,980,980));
        this.niveles[0].obstaculos.push(new Obstaculo("mesa",this.scene.manager.scenes[3].physics,980,780));

        this.niveles[0].recipientes.push(new RecipienteVerde("recipienteAzul",this.scene.manager.scenes[3].physics,2500,980));
        this.niveles[0].recipientes.push(new RecipienteAzul("recipienteAzul",this.scene.manager.scenes[3].physics,2000,980));

        //this.niveles[0].recipientes.push(new Recipiente("recipienteAzul",this.scene.manager.scenes[3].physics,150,200,new Particulas(this.scene.manager.scenes[3].add.particles('estrellitas')), new Particulas(this.scene.manager.scenes[3].add.particles('cruces'))));
        //this.niveles.push(new Nivel(this.scene.manager.scenes[3], "fondo", this.player,0, new Array<Moneda>(), new Array<Obstaculo>(), new Array<Recipiente>(), new Array<Residuo>(), 0,0,new Musica("")));

        this.cN = new CNivel(this.niveles, 0);
        this.cN.CargarControlador();
        this.scene.start("nivel");
    }

}