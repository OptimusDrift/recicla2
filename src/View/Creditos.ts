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
      undefined,
      this.scene
    );
    this._botonVolver.boton.setDepth(2);
    this._botonVolver.boton.on("pointerup", () => {
      this.scene.wake("MenuPrincipal");
      this.scene.sleep("Creditos");
    });

    let btnDrift = this.add.image(263, 620, "boton3");
    btnDrift.setScale(2);
    btnDrift.setDepth(2);
    btnDrift.setInteractive();
    btnDrift.on("pointerup", () => {
      this.add.image(1920 / 2, 1080 / 2, "dehaka").setDepth(10);
      this.time.delayedCall(1000, () => {
        window.location.href = "https://github.com/OptimusDrift";
      });
    });

    let btnNico = this.add.image(965, 775, "boton4");
    btnNico.setScale(2);
    btnNico.setDepth(2);
    btnNico.setInteractive();
    btnNico.on("pointerup", () => {
      window.location.href = "https://twitter.com/NicooVelasquez";
    });

    let btnEddie = this.add.image(965, 875, "boton4");
    btnEddie.setScale(2);
    btnEddie.setDepth(2);
    btnEddie.setInteractive();
    btnEddie.on("pointerup", () => {
      window.location.href = "https://twitter.com/eddieonlive";
    });

    let btnAle = this.add.image(965, 975, "boton4");
    btnAle.setScale(2);
    btnAle.setDepth(2);
    btnAle.setInteractive();
    btnAle.on("pointerup", () => {
      window.location.href = "https://www.instagram.com/alejandro_hernado/";
    });

    let btnDana = this.add.image(1663, 620, "boton3");
    btnDana.setScale(2);
    btnDana.setDepth(2);
    btnDana.setInteractive();
    btnDana.on("pointerup", () => {
      //this.add.image(1920 / 2, 1080 / 2, "risaVaquita").setDepth(10);
      this.time.delayedCall(200, () => {
        window.location.href = "https://twitter.com/sassy_kujo";
      });
    });
  }

  update() {}
}
