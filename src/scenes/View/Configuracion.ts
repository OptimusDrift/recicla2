import Phaser from "phaser";

export default class Configuracion extends Phaser.Scene {
  constructor() {
    super("Configuracion");
  }

  preload() {}

  create() {
    this.add.image(1920 / 2, 1080 / 2, "fondoRosa");
  }

  update() {}
}
