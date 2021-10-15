import Phaser from "phaser";
import CNivel from "../Controller/CNivel";
import CTrivia from "../Controller/CTrivia";
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
import Boton from "../Model/Boton";
import Dialogo from "../Model/Dialogo";
import Cosmetico from "../Model/Cosmetico";
import Mejora from "../Model/Mejora";
import Particulas from "../Model/Particulas";
import ResiduoPapel from "../Model/ResiduoPapel";


export default class Carga extends Phaser.Scene{
    //Controladores
    public controladorNivel: CNivel;
    public controladorTrivia: CTrivia;
    public niveles : Array<Nivel>;
    public player : Player;
    public p:any;

    constructor(){
        super("pantallaDeCarga");

    }

    preload()
    {
        let loadBar = this.add.graphics({
            fillStyle:{
                color: 0xffffff
            }
        });
        this.load.on("progress", (percent) =>{
            //loadBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
            this.p = parseInt(percent*100)
        });
        //---------------Sprites---------------------\\
        this.load.image("boton", "assets/Botones/Boton.png");
        this.load.image("papel", "assets/Basura/Papel.png");
        this.load.image("moneda", "assets/Moneda/Moneda.png");
        this.load.image("recipienteAzul", "assets/Recipiente/RecipienteAzul.png");
        this.load.image('estrellitas', 'assets/Particulas/Estrellas.png');
        this.load.image('cruces', 'assets/Particulas/Cruces.png');
        this.load.image('mesa', 'assets/Obstaculos/Mesa.png');
        this.load.image('cuadroDeDialogo', 'assets/Cuadro/CuadroDeDialogo.png');
        //-------------RISA----------------\\
        this.load.image("risaPregunta", "assets/Risa/RisaPregunta.png");
        //------------FONDOS------------\\
        this.load.image("fondoTrivia", "assets/Pantallas/FondoTrivia.png");
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
        //console.log(this.scene.manager.scenes[3]);
        //-------------NIVELES--------------------//
        this.niveles = new Array<Nivel>();
        let nvl1 = this.scene.manager.scenes[9];

        this.niveles.push(new Nivel(nvl1, "fondo", this.player,0, new Array<Moneda>(), new Array<Obstaculo>(), new Array<Recipiente>(), new Array<Residuo>(), 0,0,new Musica("")));

        this.niveles[0].residuos.push(new ResiduoPapel(nvl1.physics));
        this.niveles[0].residuos.push(new ResiduoPapel(nvl1.physics));
        this.niveles[0].residuos.push(new ResiduoPapel(nvl1.physics));

        this.niveles[0].monedas.push(new Moneda("moneda",nvl1.physics,0,780,250));
        this.niveles[0].monedas.push(new Moneda("moneda",nvl1.physics,0,650,150));
        this.niveles[0].monedas.push(new Moneda("moneda",nvl1.physics,0,1900,880));

        this.niveles[0].obstaculos.push(new Obstaculo("mesa",nvl1.physics,980,980));
        this.niveles[0].obstaculos.push(new Obstaculo("mesa",nvl1.physics,980,780));

        this.niveles[0].recipientes.push(new RecipienteVerde("recipienteAzul",nvl1.physics,2500,980));
        this.niveles[0].recipientes.push(new RecipienteAzul("recipienteAzul",nvl1.physics,2000,980));

        this.controladorNivel = new CNivel(this.niveles, 0);

        this.controladorNivel.CargarControlador();

        //--------------------TRIVIA-----------------------//
        let tri = this.scene.manager.scenes[7];

        //this.niveles[0].recipientes.push(new Recipiente("recipienteAzul",this.scene.manager.scenes[3].physics,150,200,new Particulas(this.scene.manager.scenes[3].add.particles('estrellitas')), new Particulas(this.scene.manager.scenes[3].add.particles('cruces'))));
        //this.niveles.push(new Nivel(this.scene.manager.scenes[3], "fondo", this.player,0, new Array<Moneda>(), new Array<Obstaculo>(), new Array<Recipiente>(), new Array<Residuo>(), 0,0,new Musica("")));
        this.controladorTrivia = new CTrivia(tri);
        
        this.controladorTrivia.CargarControlador();
        this.scene.stop('cargando');
        this.scene.start("prue");
    }

}