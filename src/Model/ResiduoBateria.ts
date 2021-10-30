import Residuo from "./Residuo";
export default class ResiduoBateria extends Residuo {
  constructor(physics: any) {
    super("bateriaResiduo", physics, 0, 600);
    this.cuerpo.body.setDragX(100);
    this.cuerpo.body.setBounce(0);
  }

  public OcultarResiduo(): void {
    try {
      this.physics.setVisible(!this.physics.getVisible());
    } catch (error) {
      console.error("Error al intentar ocultar el residuo." + error);
    }
  }

  public setFriccion(residuo: any, obstaculo: any) {
    super.setFriccion(residuo, obstaculo);
    //Se setea una friccion
    residuo.body.setDragX(600);
    //Pequenno tiempo antes de volver la friccion 0 (para que no caiga de manera brusca)
    residuo.scene.time.addEvent({
      delay: 500,
      callback: () => residuo.body.setDragX(0),
    });
  }
}
