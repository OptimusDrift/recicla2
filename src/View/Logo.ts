export default class Logo extends Phaser.Scene {
  constructor() {
    super("Logo");
  }
  preload() {
    this.load.spritesheet("logo", "assets/Pantallas/UNRafLogo.png", {
      frameWidth: 640,
      frameHeight: 360,
    }); //Carga la animacion de la gomera
  }

  create() {
    this.anims.create({
      key: "rep",
      frames: this.anims.generateFrameNumbers("logo", {
        start: 0,
        end: 39,
      }),
      frameRate: 10,
      repeat: -1,
    });
    var logo = this.physics.add.sprite(1920 / 2, 1080 / 2, "logo"); //Agrega a risa
    logo.setScale(3);
    logo.body.allowGravity = false; //No afecta a la gravedad
    logo.anims.play("rep", true); //Inicia la animación de risa
    this.time.delayedCall(4000, () => {
      this.scene.start("Cargando");
    });
  }
}
