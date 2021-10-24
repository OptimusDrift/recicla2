import Phaser from "phaser";
import Boton from "../Model/Boton";
export default class Creditos extends Phaser.Scene {
  //Constantes del menu
  private BOTON_VOLVER_POSICION_X = 150;
  private BOTON_VOLVER_POSICION_Y = 100;
  private _botonVolver: Boton;

  //Estilo del texto
  private style = { font: "20x Arial", fill: "#fff" };

  constructor() {
    super("Creditos");
  }

  preload() {}

  create() {
    this.add.image(1920 / 2, 1080 / 2, "fondoCreditos");
    this._botonVolver = new Boton(
      this.add.text(0, 0, "", this.style),
      this.add.image(
        this.BOTON_VOLVER_POSICION_X,
        this.BOTON_VOLVER_POSICION_Y,
        "volver"
      ),
      undefined,
      undefined
    );
    this._botonVolver.boton.setDepth(2);
    this._botonVolver.boton.on("pointerup", () => {
      this.scene.moveBelow("Creditos", "MenuPrincipal");
      this.scene.wake("MenuPrincipal");
      this.scene.sleep("Creditos");
    });
  }

  update() {}
}
