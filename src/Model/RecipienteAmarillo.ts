import Recipiente from "./Recipiente";
import Musica from "./Musica";

export default class RecipienteAmarillo extends Recipiente {
  
  constructor(sprite: string, physics: any, x: number, y: number, scene: any) {
    super(sprite, physics, x, y, scene);
  }

  public CompararRecipiente(residuo: any, recipiente: any) {
    try {
      super.CompararRecipiente(residuo, recipiente);
      console.log(this._scene);
      super.Retroalimentacion(
        residuo.texture.key == "plasticoResiduo",
        recipiente
      );
    } catch (error) {
      console.error("Error al intentar comprar el residuo." + error);
    }
  }
}
