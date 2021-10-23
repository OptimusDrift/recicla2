import Mejora from "./Mejora";
import Boton from "./Boton";
import Particulas from "./Particulas";

export default class MejoraBomba extends Mejora {
  private _particulas: Particulas;

  constructor(nombre: string, precio: number, particula: Particulas) {
    super(nombre, precio);
    this._particulas = particula;
  }

  public EfectoMejora(botones: Array<Boton>) {
    botones.forEach((boton) => {
      boton.PausarBoton();
      boton.CambiarColor(0x2980a4);
      this.particulas.EjecutarParticula(boton.boton.x, boton.boton.y);
    });
  }

  public set particulas(particulas: Particulas) {
    this._particulas = particulas;
  }

  public get particulas(): Particulas {
    return this._particulas;
  }
}
