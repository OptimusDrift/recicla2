import Phaser from "phaser";
import CNivel from "../Controller/CNivel";
import CTrivia from "../Controller/CTrivia";
import CMenuPrincipal from "../Controller/CMenuPrincipal";
import CConfiguracion from "../Controller/CConfiguracion";
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

export default class Carga extends Phaser.Scene {
  //Controladores
  public controladorNivel: CNivel;
  public controladorTrivia: CTrivia;
  public controladorMenuPrincipal: CMenuPrincipal;
  public controladorConfiguracion: CConfiguracion;
  public niveles: Array<Nivel>;
  public player: Player;
  public p: any;

  constructor() {
    super("pantallaDeCarga");
  }

  preload() {
    this.load.on("progress", (percent) => {
      this.p = parseInt(percent * 100);
    });
    //---------------Sprites---------------------\\
    //--------Botones--------------\\
    this.load.image("boton", "assets/Botones/Boton.png");
    this.load.image("creditos", "assets/Botones/Creditos.png");
    this.load.image("gomera", "assets/Botones/Gomera.png");
    this.load.image("tienda", "assets/Botones/Tienda.png");
    this.load.image("configuracion", "assets/Botones/Tuerca.png");
    this.load.image("botonX", "assets/Botones/BotonX.png");
    this.load.image("bomba", "assets/Botones/Bomba.png");
    this.load.image("volver", "assets/Botones/Volver.png");
    this.load.image("menuPrincipal", "assets/Botones/MenuPrincipal.png");
    //-------In-Game---------\\
    this.load.image("papel", "assets/Basura/Papel.png");
    this.load.image("moneda", "assets/Moneda/Moneda.png");
    this.load.image("recipienteAzul", "assets/Recipiente/RecipienteAzul.png");
    this.load.image("mesa", "assets/Obstaculos/Mesa.png");
    this.load.image("cuadroDeDialogo", "assets/Cuadro/CuadroDeDialogo.png");
    //------------PARTICULAS-------------\\
    this.load.image("estrellitas", "assets/Particulas/Estrellas.png");
    this.load.image("cruces", "assets/Particulas/Cruces.png");
    this.load.image("estrella7", "assets/Particulas/Estrella7Puntas.png");
    //-------------RISA----------------\\
    this.load.spritesheet("risa", "assets/Risa/RisaSprites.png", {
      frameWidth: 411,
      frameHeight: 868,
    });
    this.load.image("risaPregunta", "assets/Risa/RisaSprites.png");
    this.load.image(
      "risaCambioDePregunta",
      "assets/Risa/RisaCambioDePregunta.png"
    );
    this.load.image(
      "risaRespuestaCorrecta",
      "assets/Risa/RisaRespuestaCorrecta.png"
    );
    this.load.image(
      "risaRespuestaIncorrecta",
      "assets/Risa/RisaRespuestaIncorrecta.png"
    );
    //------------FONDOS------------\\
    this.load.image("fondoTrivia", "assets/Pantallas/FondoTrivia.png");
    this.load.image("fondoMenu", "assets/Pantallas/MenuPrincipal.png");
    this.load.image("fondoCreditos", "assets/Pantallas/Creditos.png"); //TEMPORAL
    //---------POP UPS----------\\
    this.load.image("fondoRosa", "assets/PopUps/FondoRosa.png");
    //--------------Musica Y FX--------------------\\
    this.load.audio("CompraRealizada", "assets/Sonidos/CompraRealizada.mp3");
    this.load.audio("MusicaCreditos", "assets/Sonidos/MusicaCreditos.mp3");
    this.load.audio("MusicaJuego", "assets/Sonidos/MusicaJuego.mp3");
    this.load.audio("MusicaMenu", "assets/Sonidos/MusicaMenu.mp3");
    this.load.audio("MusicaTienda", "assets/Sonidos/MusicaTienda.mp3");
    this.load.audio("MusicaTrivia", "assets/Sonidos/MusicaTrivia.mp3");
    this.load.audio("Transicion", "assets/Sonidos/Transicion.mp3");
    this.load.audio(
      "RespuestaCorrecta",
      "assets/Sonidos/RespuestaCorrecta.wav"
    );
    this.load.audio(
      "RespuestaIncorrecta",
      "assets/Sonidos/RespuestaIncorrecta.wav"
    );
    this.load.audio("RisaRie", "assets/Sonidos/RisaRie.wav");
  }

  create() {
    this.player = new Player(
      "nombre",
      new Array<Cosmetico>(),
      new Array<Mejora>(),
      new Cosmetico("sprite", 0, false),
      new Cosmetico("sprite", 0, false),
      0,
      0,
      0
    ); //Crea el jugador
    //---------------------CONFIGURACION-----------------------//
    let config = this.scene.get("Configuracion"); //Obtiene la escena de la configuracion
    this.controladorConfiguracion = new CConfiguracion(config); //Crea el controlador de configuracion
    //-------------NIVELES--------------------//
    this.niveles = new Array<Nivel>();
    let nvl1 = this.scene.get("Nivel1"); //Obtiene la escena del nivel 1
    this.niveles.push(
      new Nivel(
        nvl1,
        "fondo",
        this.player,
        0,
        new Array<Moneda>(),
        new Array<Obstaculo>(),
        new Array<Recipiente>(),
        new Array<Residuo>(),
        0,
        0,
        new Musica("")
      )
    ); //Crea el nivel 1
    this.niveles[0].residuos.push(new ResiduoPapel(nvl1.physics)); //Añade los residuos al nivel 1
    this.niveles[0].residuos.push(new ResiduoPapel(nvl1.physics)); //Añade los residuos al nivel 1
    this.niveles[0].residuos.push(new ResiduoPapel(nvl1.physics)); //Añade los residuos al nivel 1

    this.niveles[0].monedas.push(
      new Moneda("moneda", nvl1.physics, 0, 780, 250)
    ); //Añade las monedas al nivel 1
    this.niveles[0].monedas.push(
      new Moneda("moneda", nvl1.physics, 0, 650, 150)
    );
    this.niveles[0].monedas.push(
      new Moneda("moneda", nvl1.physics, 0, 1900, 880)
    );

    this.niveles[0].obstaculos.push(
      new Obstaculo("mesa", nvl1.physics, 980, 980)
    ); //Añade los obstaculos al nivel 1
    this.niveles[0].obstaculos.push(
      new Obstaculo("mesa", nvl1.physics, 980, 780)
    ); //Añade los obstaculos al nivel 1

    this.niveles[0].recipientes.push(
      new RecipienteVerde("recipienteAzul", nvl1.physics, 2500, 980)
    ); //Añade los recipientes al nivel 1
    this.niveles[0].recipientes.push(
      new RecipienteAzul("recipienteAzul", nvl1.physics, 2000, 980)
    ); //Añade los recipientes al nivel 1

    this.controladorNivel = new CNivel(this.niveles, 0); //Crea el controlador de nivel

    this.controladorNivel.CargarControlador(); //Carga el controlador de nivel

    //--------------------TRIVIA-----------------------//
    let tri = this.scene.get("Trivia"); //Obtiene la escena de la trivia
    this.controladorTrivia = new CTrivia(tri, this.controladorConfiguracion); //Crea el controlador de trivia
    this.controladorTrivia.CargarControlador(); //Carga el controlador de trivia

    //---------------------MENU-----------------------//
    let menu = this.scene.get("MenuPrincipal"); //Obtiene la escena del menu
    this.controladorMenuPrincipal = new CMenuPrincipal(
      menu,
      this.controladorConfiguracion
    ); //Crea el controlador del menu principal y le pasa el controlador de configuracion

    this.scene.launch("Configuracion"); //Lanza la escena de configuracion
    this.scene.sleep("Configuracion"); //Oculta la escena de configuracion
    this.scene.launch("Creditos"); //Lanza la escena de creditos
    this.scene.sleep("Creditos"); //Oculta la escena de creditos
    this.scene.launch("Trivia"); //Lanza la escena de trivia
    this.scene.sleep("Trivia"); //Oculta la escena de trivia
    this.scene.stop("cargando"); //Oculta la escena de carga
    this.scene.start("MenuPrincipal"); //Lanza la escena del menu principal
  }
}
