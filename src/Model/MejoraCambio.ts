import Mejora from "./Mejora";
import Boton from "./Boton";
import Particulas from "./Particulas";
import CTrivia from "~/Controller/CTrivia";

export default class MejoraCambio extends Mejora {
  private _particulas: Particulas;

  constructor(nombre: string, precio: number, particula: Particulas) {
    super(nombre, precio);
    this._particulas = particula;
  }

  public EfectoMejora(botones: Array<Boton>) {
    botones.forEach((boton) => {
      boton.ResetearBoton();
    });
  }

  public set particulas(particulas: Particulas) {
    this._particulas = particulas;
  }

  public get particulas(): Particulas {
    return this._particulas;
  }
}
