export default class Carga extends Phaser.Scene{
    private flechas: any;
    constructor(){
        super("cargando");
    }

    preload()
    {
        this.load.image("pDeCarga", "assets/Pantallas/Carga.png");
        this.load.image("flechasCarga", "assets/Pantallas/Flechas.png");
    }

    create()
    {
        this.add.image(1920/2, 1080/2, "pDeCarga");
        this.flechas = this.add.image(1920/2, 1080/2, "flechasCarga");
        this.scene.launch("pantallaDeCarga");
    }

    update()
    {
        this.flechas.setRotation(this.flechas.rotation - .1);
        //console.log(this.scene.manager.scenes[1].p)
    }
}