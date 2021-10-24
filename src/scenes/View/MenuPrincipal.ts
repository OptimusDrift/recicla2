import Phaser from "phaser";
import CMenuPrincipal from "../Controller/CMenuPrincipal";

export default class MenuPrincipal extends Phaser.Scene {
  //Controlador
  private _controladorMenuPrincipal: CMenuPrincipal;

  constructor() {
    super("MenuPrincipal");
  }

  preload() {}

  create() {
    this.add.image(1920 / 2, 1080 / 2, "fondoMenu").setDepth(-1);
  }

  update() {}
}
