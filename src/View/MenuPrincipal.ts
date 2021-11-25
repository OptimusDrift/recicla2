import Phaser from "phaser";
import Pregunta from "~/Model/Pregunta";
import { getTranslations } from "~/Services/Translation";
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

  //Getters y Setters
  public controladorMenuPrincipal(): CMenuPrincipal {
    return this._controladorMenuPrincipal;
  }
}
