import Residuo from "./Residuo";
export default class ResiduoVidrio extends Residuo {
  constructor(physics: any) {
    super("vidrioResiduo", physics, 0, 800);
    this.cuerpo.body.setDragX(80);
    this.cuerpo.body.setBounce(0.2);
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
    residuo.body.setDragX(550);
    //Pequenno tiempo antes de volver la friccion 0 (para que no caiga de manera brusca)
    residuo.scene.time.addEvent({
      delay: 500,
      callback: () => residuo.body.setDragX(0),
    });
  }
}
