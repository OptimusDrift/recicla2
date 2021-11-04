import Phaser from "phaser";
import CNivel from "../Controller/CNivel";
import CTrivia from "../Controller/CTrivia";
import CMenuPrincipal from "../Controller/CMenuPrincipal";
import CConfiguracion from "../Controller/CConfiguracion";
import Nivel from "../Model/Nivel";
import Residuo from "../Model/Residuo";
import Moneda from "../Model/Moneda";
import Musica from "../Model/Musica";
import Obstaculo from "../Model/Obstaculo";
import Recipiente from "../Model/Recipiente";
import RecipienteVerde from "../Model/RecipienteVerde";
import RecipienteAzul from "../Model/RecipienteAzul";
import RecipienteRojo from "../Model/RecipienteRojo";
import RecipienteAmarillo from "../Model/RecipienteAmarillo";
import Player from "../Model/Player";
import Cosmetico from "../Model/Cosmetico";
import Mejora from "../Model/Mejora";
import ResiduoPapel from "../Model/ResiduoPapel";
import CHud from "../Controller/CHud";
import ResiduoBateria from "~/Model/ResiduoBateria";
import ResiduoVidrio from "~/Model/ResiduoVidrio";
import ResiduoPlastico from "~/Model/ResiduoPlastico";
import CFinDelJuego from "~/Controller/CFinDelJuego";

export default class Carga extends Phaser.Scene {
  //Controladores
  public controladorNivel: CNivel;
  public controladorTrivia: CTrivia;
  public controladorMenuPrincipal: CMenuPrincipal;
  public controladorConfiguracion: CConfiguracion;
  public controladorHud: CHud;
  public niveles: Array<Nivel>;
  public player: Player;
  public controladorFinDelJuego: CFinDelJuego;
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
    this.load.image("boton2", "assets/Botones/Boton2.png");
    this.load.image("boton3", "assets/Botones/Boton3.png");
    this.load.image("boton4", "assets/Botones/Boton4.png");
    this.load.image("creditos", "assets/Botones/Creditos.png");
    this.load.image("gomera", "assets/Botones/Gomera.png");
    this.load.image("tienda", "assets/Botones/Tienda.png");
    this.load.image("configuracion", "assets/Botones/Tuerca.png");
    this.load.image("botonX", "assets/Botones/BotonX.png");
    this.load.image("bomba", "assets/Botones/Bomba.png");
    this.load.image("cambio", "assets/Botones/Cambio.png");
    this.load.image("volver", "assets/Botones/Volver.png");
    this.load.image("menuPrincipal", "assets/Botones/MenuPrincipal.png");
    //-------In-Game---------\\
    this.load.image("moneda", "assets/Moneda/Moneda.png");
    this.load.image("mesa", "assets/Obstaculos/Mesa.png");
    this.load.image("cuadroDeDialogo", "assets/Cuadro/CuadroDeDialogo.png");
    this.load.spritesheet("gomeraPlayer", "assets/Gomera/Gomera.png", {
      frameWidth: 128,
      frameHeight: 146,
    }); //Carga la animacion de la gomera
    //------------Residuos------------\\
    this.load.image("papelResiduo", "assets/Basura/Papel.png");
    this.load.image("vidrioResiduo", "assets/Basura/Vidrio.png");
    this.load.image("bateriaResiduo", "assets/Basura/Bateria.png");
    this.load.image("plasticoResiduo", "assets/Basura/Plastico.png");
    this.load.image("papelResiduo", "assets/Basura/Papel.png");
    this.load.image("papelResiduo", "assets/Basura/Papel.png");
    //--------Recipientes---------\\
    this.load.image("papel", "assets/Recipiente/Papel_Azul.png");
    this.load.image("bateria", "assets/Recipiente/Pilas_Rojo.png");
    this.load.image("plastico", "assets/Recipiente/Plastico_Amarillo.png");
    this.load.image("vidrio", "assets/Recipiente/Vidrio_Verde.png");
    //------------PARTICULAS-------------\\
    this.load.image("estrellitas", "assets/Particulas/Estrellas.png");
    this.load.image("cruces", "assets/Particulas/Cruces.png");
    this.load.image("estrella7", "assets/Particulas/Estrella7Puntas.png");
    //-------------RISA----------------\\
    this.load.spritesheet("risa", "assets/Risa/RisaSprites.png", {
      frameWidth: 411,
      frameHeight: 868,
    }); //Carga la animacion de la risa
    this.load.image("risaVaquita", "assets/Risa/RisaVaquita.png");
    this.load.image("dehaka", "assets/Risa/Dehaka.png");
    //------------FONDOS------------\\
    this.load.image("fondoTrivia", "assets/Pantallas/FondoTrivia.png");
    this.load.image("fondoMenu", "assets/Pantallas/MenuPrincipal.png");
    this.load.image("fondoNivel", "assets/Pantallas/FondoNivel.png");
    this.load.image("escapeVertical", "assets/Pantallas/EscapeVertical.png");
    this.load.image("fondoCreditos", "assets/Pantallas/Creditos.png"); //TEMPORAL
    //---------POP UPS----------\\
    this.load.image("fondoRosa", "assets/PopUps/FondoRosa.png");
    this.load.image("fondoVolver", "assets/PopUps/Seguro.png");
    this.load.image("correcto", "assets/PopUps/Correcto.png");
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
    //----------------ATLAS------------------\\
    this.load.image("atlas", "assets/Tiled/Atlas.png");
    this.load.tilemapTiledJSON("mapaNivel1", "assets/Tiled/Nivel_1.json");
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
    let volver = this.scene.get("Volver"); //Obtiene la escena de la configuracion
    this.controladorConfiguracion = new CConfiguracion(config, volver); //Crea el controlador de configuracion
    //-------------NIVELES--------------------//
    //-----------------NIVEL 1-----------------//
    this.niveles = new Array<Nivel>();
    let nvl1 = this.scene.get("Nivel1"); //Obtiene la escena del nivel 1
    const mapa = nvl1.make.tilemap({ key: "mapaNivel1" });
    const tileset = mapa.addTilesetImage("Atlas", "atlas");

    let escapes = nvl1.physics.add.staticGroup();
    escapes.create(1952, 0, "escapeVertical"); //Añade los escapes al nivel 1
    escapes.create(-32, 0, "escapeVertical"); //Añade los escapes al nivel 1

    this.niveles.push(
      new Nivel(
        nvl1,
        "fondoNivel",
        this.player,
        10,
        new Array<Moneda>(),
        12,
        new Array<Obstaculo>(),
        new Array<Recipiente>(),
        new Array<Residuo>(),
        escapes,
        0,
        4,
        mapa,
        tileset,
        new Musica("")
      )
    ); //Crea el nivel 1
    this.niveles[0].residuos.push(new ResiduoPapel(nvl1.physics)); //Añade los residuos al nivel 1
    this.niveles[0].residuos.push(new ResiduoPapel(nvl1.physics)); //Añade los residuos al nivel 1
    this.niveles[0].residuos.push(new ResiduoPlastico(nvl1.physics)); //Añade los residuos al nivel 1
    this.niveles[0].residuos.push(new ResiduoPapel(nvl1.physics)); //Añade los residuos al nivel 1
    this.niveles[0].residuos.push(new ResiduoPlastico(nvl1.physics)); //Añade los residuos al nivel 1

    const objetosLayer = mapa.getObjectLayer("ObjetosNivel1"); //Obtiene la capa de objetos del nivel 1
    objetosLayer.objects.forEach((objeto) => {
      this.CargarObjetosLayer(this.niveles[0], objeto);
    }); //Carga los objetos de la capa de objetos del nivel 1
    const obstaculos = mapa.createLayer("Nivel1", tileset); //Crea la capa de obstaculos
    obstaculos.setCollisionByProperty({ collides: true });

    this.niveles[0].obstaculos = obstaculos; //Añade los obstaculos al nivel 1

    this.controladorNivel = new CNivel(
      this.niveles,
      0,
      this.controladorConfiguracion
    ); //Crea el controlador de nivel

    //-----------------NIVEL 2-----------------//
    let nvl2 = this.scene.get("Nivel2"); //Obtiene la escena del nivel 2
    const mapa2 = nvl2.make.tilemap({ key: "mapaNivel1" });
    const tileset2 = mapa2.addTilesetImage("Atlas", "atlas");

    let escapes2 = nvl2.physics.add.staticGroup();
    escapes2.create(1952, 0, "escapeVertical"); //Añade los escapes al nivel 1
    escapes2.create(-32, 0, "escapeVertical"); //Añade los escapes al nivel 1

    this.niveles.push(
      new Nivel(
        nvl2,
        "fondoNivel",
        this.player,
        10,
        new Array<Moneda>(),
        15,
        new Array<Obstaculo>(),
        new Array<Recipiente>(),
        new Array<Residuo>(),
        escapes2,
        0,
        4,
        mapa2,
        tileset2,
        new Musica("")
      )
    ); //Crea el nivel 2
    this.niveles[1].residuos.push(new ResiduoVidrio(nvl2.physics)); //Añade los residuos al nivel 2
    this.niveles[1].residuos.push(new ResiduoPapel(nvl2.physics)); //Añade los residuos al nivel 2
    this.niveles[1].residuos.push(new ResiduoVidrio(nvl2.physics)); //Añade los residuos al nivel 2
    this.niveles[1].residuos.push(new ResiduoPlastico(nvl2.physics)); //Añade los residuos al nivel 2
    this.niveles[1].residuos.push(new ResiduoPlastico(nvl2.physics)); //Añade los residuos al nivel 2
    //this.niveles[1].residuos.push(new ResiduoBateria(nvl2.physics)); //Añade los residuos al nivel 2
    this.niveles[1].residuos.push(new ResiduoPapel(nvl2.physics)); //Añade los residuos al nivel 2

    const objetosLayer2 = mapa2.getObjectLayer("ObjetosNivel2"); //Obtiene la capa de objetos del nivel 2
    objetosLayer2.objects.forEach((objeto) => {
      this.CargarObjetosLayer(this.niveles[1], objeto);
    }); //Carga los objetos de la capa de objetos del nivel 2
    const obstaculos2 = mapa2.createLayer("Nivel2", tileset2); //Crea la capa de obstaculos
    obstaculos2.setCollisionByProperty({ collides: true });

    this.niveles[1].obstaculos = obstaculos2; //Añade los obstaculos al nivel 2

    //-----------------NIVEL 3-----------------//
    let nvl3 = this.scene.get("Nivel3"); //Obtiene la escena del nivel 1
    const mapa3 = nvl3.make.tilemap({ key: "mapaNivel1" });
    const tileset3 = mapa3.addTilesetImage("Atlas", "atlas");

    let escapes3 = nvl3.physics.add.staticGroup();
    escapes3.create(1952, 0, "escapeVertical"); //Añade los escapes al nivel 1
    escapes3.create(-32, 0, "escapeVertical"); //Añade los escapes al nivel 1

    this.niveles.push(
      new Nivel(
        nvl3,
        "fondoNivel",
        this.player,
        10,
        new Array<Moneda>(),
        12,
        new Array<Obstaculo>(),
        new Array<Recipiente>(),
        new Array<Residuo>(),
        escapes3,
        0,
        4,
        mapa3,
        tileset3,
        new Musica("")
      )
    ); //Crea el nivel 4
    this.niveles[2].residuos.push(new ResiduoPapel(nvl3.physics)); //Añade los residuos al nivel 1

    console.log(mapa3);
    const objetosLayer3 = mapa3.getObjectLayer("ObjetosNivel3"); //Obtiene la capa de objetos del nivel 1
    objetosLayer3.objects.forEach((objeto) => {
      this.CargarObjetosLayer(this.niveles[2], objeto);
    }); //Carga los objetos de la capa de objetos del nivel 1
    const obstaculos3 = mapa3.createLayer("Nivel3", tileset3); //Crea la capa de obstaculos
    obstaculos3.setCollisionByProperty({ collides: true });

    this.niveles[2].obstaculos = obstaculos3; //Añade los obstaculos al nivel 1

    //-----------------NIVEL 4-----------------//
    let nvl4 = this.scene.get("Nivel4"); //Obtiene la escena del nivel 1
    const mapa4 = nvl4.make.tilemap({ key: "mapaNivel1" });
    const tileset4 = mapa4.addTilesetImage("Atlas", "atlas");

    let escapes4 = nvl4.physics.add.staticGroup();
    escapes4.create(1952, 0, "escapeVertical"); //Añade los escapes al nivel 1
    escapes4.create(-32, 0, "escapeVertical"); //Añade los escapes al nivel 1

    this.niveles.push(
      new Nivel(
        nvl4,
        "fondoNivel",
        this.player,
        10,
        new Array<Moneda>(),
        12,
        new Array<Obstaculo>(),
        new Array<Recipiente>(),
        new Array<Residuo>(),
        escapes4,
        0,
        4,
        mapa4,
        tileset4,
        new Musica("")
      )
    ); //Crea el nivel 4
    this.niveles[3].residuos.push(new ResiduoPapel(nvl4.physics)); //Añade los residuos al nivel 1

    const objetosLayer4 = mapa4.getObjectLayer("ObjetosNivel4"); //Obtiene la capa de objetos del nivel 1
    objetosLayer4.objects.forEach((objeto) => {
      this.CargarObjetosLayer(this.niveles[3], objeto);
    }); //Carga los objetos de la capa de objetos del nivel 1
    const obstaculos4 = mapa4.createLayer("Nivel4", tileset4); //Crea la capa de obstaculos
    obstaculos4.setCollisionByProperty({ collides: true });

    this.niveles[3].obstaculos = obstaculos4; //Añade los obstaculos al nivel 1

    //(Si se que podia hacerlo mejor, pero ¡¡¡SE ACABA EL TIEMPO BOB ESPONJA!!!)

    //--------------------TRIVIA-----------------------//
    this.controladorNivel.CargarControlador(); //Carga el controlador de nivel
    let tri = this.scene.get("Trivia"); //Obtiene la escena de la trivia
    this.controladorTrivia = new CTrivia(
      tri,
      this.controladorNivel,
      this.controladorConfiguracion
    ); //Crea el controlador de trivia
    this.controladorTrivia.CargarControlador(); //Carga el controlador de trivia

    //---------------------MENU-----------------------//
    let menu = this.scene.get("MenuPrincipal"); //Obtiene la escena del menu
    this.controladorMenuPrincipal = new CMenuPrincipal(
      menu,
      this.controladorConfiguracion
    ); //Crea el controlador del menu principal y le pasa el controlador de configuracion

    //--------HUD----------\\
    this.controladorHud = new CHud(
      this.controladorNivel,
      this.scene.get("Hud")
    );

    //--------------------------FIN DEL JUEGO--------------------------\\
    this.controladorFinDelJuego = new CFinDelJuego(
      this.scene.get("FinDelJuego")
    );
    this.controladorFinDelJuego.CargarControladores(
      this.controladorNivel,
      this.controladorHud
    );
    this.controladorHud.CargarControlador(this.controladorFinDelJuego);

    this.controladorTrivia.cHud = this.controladorHud;
    this.controladorNivel.cHud = this.controladorHud;

    //this.controladorNivel.cHud.CargarHud();
    this.scene.launch("Configuracion"); //Lanza la escena de configuracion
    this.scene.sleep("Configuracion"); //Oculta la escena de configuracion
    this.scene.launch("Creditos"); //Lanza la escena de creditos
    this.scene.sleep("Creditos"); //Oculta la escena de creditos
    this.scene.launch("Trivia"); //Lanza la escena de trivia
    this.scene.sleep("Trivia"); //Oculta la escena de trivia
    this.scene.stop("Cargando"); //Oculta la escena de carga
    this.scene.launch("Nivel2"); //Lanza el nivel 2
    this.scene.sleep("Nivel2"); //Oculta el nivel 2
    this.scene.launch("Hud"); //Lanza el HUD
    this.scene.sleep("Hud"); //Oculta el HUD
    this.scene.launch("Volver"); //Lanza la escena de volver
    this.scene.sleep("Volver"); //Oculta la escena de volver
    this.scene.launch("Nivel1"); //Lanza el nivel 1
    this.scene.sleep("Nivel1"); //Oculta el nivel 1
    this.scene.launch("Nivel3"); //Lanza el nivel 1
    this.scene.sleep("Nivel3"); //Oculta el nivel 1
    this.scene.launch("Nivel4"); //Lanza el nivel 1
    this.scene.sleep("Nivel4"); //Oculta el nivel 1
    this.scene.launch("FinDelJuego"); //Lanza la escena de fin del juego
    this.scene.sleep("FinDelJuego"); //Oculta la escena de fin del juego

    //this.scene.sleep("Nivel1");

    this.scene.launch("MenuPrincipal"); //Lanza la escena del menu principal
  }

  //Carga los objetos de la capa de objetos del nivel 1
  public CargarObjetosLayer(nivel: any, objeto: any) {
    const { x = 0, y = 0, name, width = 0, height = 0 } = objeto; //Obtiene las propiedades del objeto
    switch (name) {
      case "moneda":
        nivel.monedas.push(
          new Moneda(
            name,
            nivel.pantallaDeJuego.physics,
            0,
            x + width / 2,
            y + height / 2,
            nivel.pantallaDeJuego.particulasMoneda
          )
        ); //Añade la moneda al nivel
        break;

      case "papel":
        nivel.recipientes.push(
          new RecipienteAzul(
            name,
            nivel.pantallaDeJuego.physics,
            x + width / 2,
            y + height / 2
          )
        );
        break;
      case "plastico":
        nivel.recipientes.push(
          new RecipienteAmarillo(
            name,
            nivel.pantallaDeJuego.physics,
            x + width / 2,
            y + height / 2
          )
        ); //Añade el recipiente al nivel
        break;
      case "vidrio":
        nivel.recipientes.push(
          new RecipienteVerde(
            name,
            nivel.pantallaDeJuego.physics,
            x + width / 2,
            y + height / 2
          )
        ); //Añade el recipiente al nivel
        break;
      case "bateria":
        nivel.recipientes.push(
          new RecipienteRojo(
            name,
            nivel.pantallaDeJuego.physics,
            x + width / 2,
            y + height / 2
          )
        ); //Añade el recipiente al nivel
        break;
      default:
        break;
    }
  }
}
