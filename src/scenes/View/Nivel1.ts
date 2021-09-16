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
import Musica from "../Model/Musica";

export default class Nivel1 extends Juego{
    constructor(){
        super("lvl1",new Nivel("fondo", new Array<Residuo>(), new Array<Moneda>(), new Array<Obstaculo>(), new Array<Recipiente>(), new Pregunta("pregunta", "respuestaCorrecta", new Array<String>(), "mensajeRespuestaCorrecta","mensajeRespuestaIncorrecta"), new Player("nombre", new Array<Cosmetico>(), new Array<Mejora>(), new Cosmetico("sprite", 0, false), new Cosmetico("sprite", 0, false), 0, 0, 0), new Array<Dialogo>(), 0, new Musica("")));
    }
}