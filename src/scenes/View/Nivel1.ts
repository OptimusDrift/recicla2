import Pregunta from "../Model/Pregunta";
import Player from "../Model/Player";
import Dialogo from "../Model/Dialogo";
import Cosmetico from "../Model/Cosmetico";
import Mejora from "../Model/Mejora";
import Particulas from "../Model/Particulas";
import Juego from "./Juego";

export default class Nivel1 extends Juego{
    constructor(){
        super("prue");
    }

    
    create()
    {
        this.particulasIncorrecta = new Particulas(this.add.particles('cruces'));
        this.particulasCorrecto = new Particulas(this.add.particles('estrellitas'));
        this.scene.launch("trivia");
        //super.create();
        //this.textures.createCanvas('curve', 1920, 1080);
        //const style = { font: "20x Arial", fill: "#fff" };
        //this.residuos.push(new Residuo("boton", this.physics, 0, ""));
        //this.residuos.push(new Residuo("boton", this.physics, 0, ""));
        //this.residuos.push(new Residuo("boton", this.physics, 0, ""));
        //this.residuoSeleccionado = this.residuos.shift();
        //this.btn = new Boton(this.add.text(400,150,"AAAAAAAA",style),this.add.image(400,150,"boton"));
        //new CTrivia(this);
        //this.MusicaJuego = new CNivel(new Array<Nivel>(this),0,0,new Array<Residuo>(), 1,1);
        //this.obstaculos.push(new Obstaculo("mesa",this.physics, 100, 100)); //BORRAR PRUEBAS
        //this.recipientes.push(new Recipiente("mesa",this.physics, 200, 200, "100", new Particulas(this.add.particles('estrellitas')), new Particulas(this.add.particles('cruces'))); //BORRAR PRUEBAS
        //this.MusicaJuego.create();
        //var btn1 = ;
        //btn1.setInteractive();
        //btn1.on('pointerover',()=> {console.log("A");});
        //btn1.on('pointerout',()=> {console.log("B");});
        //btn1.on('pointerdown',()=> {console.log("C");});
        //btn1.on('pointerup',()=> {console.log("D");});
        //this.add.image(400, 300, "boton");
        //this.add.image(400, 450, "boton");

        //this.MusicaJuego= this.sound.add("MusicaJuego", { loop: true });
        //this.MusicaJuego.play();
    }

    update(){
        this.controladorNivel.PrepararLanzamiento();
        //super.update();
        //this.MusicaJuego.PrepararLanzamiento();
        //super.curve.getPoint(0, new Phaser.Math.Vector2(this.puntoInicialX, this.puntoInicialY));
        //new Phaser.Geom.Line(this.puntoInicialX,this.puntoInicialY, this.puntoFinalX, this.puntoFinalY); 
        
        //console.log(this.puntoInicialX);
    }
}