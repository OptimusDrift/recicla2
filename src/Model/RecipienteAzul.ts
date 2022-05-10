import Recipiente from "./Recipiente";
import Musica from "./Musica";

export default class RecipienteAzul extends Recipiente {
  constructor(sprite: string, physics: any, x: number, y: number, scene: any) {
    super(sprite, physics, x, y, scene);
  }

  public CompararRecipiente(residuo: any, recipiente: any): any {
    try {
      super.CompararRecipiente(residuo, recipiente);
      super.Retroalimentacion(
        residuo.texture.key == "papelResiduo",
        recipiente
      );
    } catch (error) {
      console.error("Error al intentar comprar el residuo." + error);
    }
  }
}
