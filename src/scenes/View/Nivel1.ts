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
import Musica from "../Model/Musica";
import Boton from "../Model/Boton";
import CTrivia from '../Controller/CTrivia';


export default class Nivel1 extends Nivel{
    private btn: any;
    constructor(){
        super("lvl1", "fondo", new Array<Residuo>(), new Array<Moneda>(), new Array<Obstaculo>(), new Array<Recipiente>(), new Pregunta("pregunta", "respuestaCorrecta", new Array<string>(), "mensajeRespuestaCorrecta","mensajeRespuestaIncorrecta"), new Player("nombre", new Array<Cosmetico>(), new Array<Mejora>(), new Cosmetico("sprite", 0, false), new Cosmetico("sprite", 0, false), 0, 0, 0), new Array<Dialogo>(), 0, new Musica(""));
    }

    
    create()
    {
        super.create();
        this.textures.createCanvas('curve', 1920, 1080);
        const style = { font: "20x Arial", fill: "#fff" };
        this.residuos.push(new Residuo("boton", this.physics, 0, ""));
        this.residuos.push(new Residuo("boton", this.physics, 0, ""));
        this.residuos.push(new Residuo("boton", this.physics, 0, ""));
        this.residuoSeleccionado = this.residuos.shift();
        //this.btn = new Boton(this.add.text(400,150,"AAAAAAAA",style),this.add.image(400,150,"boton"));
        new CTrivia(this);
        //var btn1 = ;
        //btn1.setInteractive();
        //btn1.on('pointerover',()=> {console.log("A");});
        //btn1.on('pointerout',()=> {console.log("B");});
        //btn1.on('pointerdown',()=> {console.log("C");});
        //btn1.on('pointerup',()=> {console.log("D");});
        //this.add.image(400, 300, "boton");
        //this.add.image(400, 450, "boton");
    }

    update(){
        super.update();
        super.PrepararLanzamiento();
        //super.curve.getPoint(0, new Phaser.Math.Vector2(this.puntoInicialX, this.puntoInicialY));
        //new Phaser.Geom.Line(this.puntoInicialX,this.puntoInicialY, this.puntoFinalX, this.puntoFinalY); 
        
        //console.log(this.puntoInicialX);
    }
}