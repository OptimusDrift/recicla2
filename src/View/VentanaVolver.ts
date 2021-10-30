import Phaser from "phaser";

export default class VentanaVolver extends Phaser.Scene {
  constructor() {
    super("Volver");
  }

  preload() {}

  create() {
    this.add.image(1920 / 2, 1080 / 2, "fondoVolver");
  }

  update() {}
}
