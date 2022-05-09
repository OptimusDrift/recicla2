import Recipiente from "./Recipiente";
import Musica from "./Musica";

export default class RecipienteVerde extends Recipiente {
  constructor(sprite: string, physics: any, x: number, y: number) {
    super(sprite, physics, x, y);
    this._correcto = new Musica("RespuestaCorrecta", physics.scene);
    this._incorrecto = new Musica("RespuestaIncorrecta", physics.scene);
  }

  public CompararRecipiente(residuo: any, recipiente: any) {
    try {
      super.CompararRecipiente(residuo, recipiente);
      super.Retroalimentacion(
        residuo.texture.key == "vidrioResiduo",
        recipiente
      );
    } catch (error) {
      console.error("Error al intentar comprar el residuo." + error);
    }
  }
}
