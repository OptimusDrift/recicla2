import Recipiente from "./Recipiente";

export default class RecipienteRojo extends Recipiente {
  constructor(sprite: string, physics: any, x: number, y: number) {
    super(sprite, physics, x, y);
  }

  public CompararRecipiente(residuo: any, recipiente: any) {
    try {
      super.CompararRecipiente(residuo, recipiente);
      super.Retroalimentacion(
        residuo.texture.key == "bateriaResiduo",
        recipiente
      );
    } catch (error) {
      console.error("Error al intentar comprar el residuo." + error);
    }
  }
}
