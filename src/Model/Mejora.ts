export default class Mejora {
  private _nombre: string;
  private _precio: number;

  constructor(nombre: string, precio: number) {
    this._nombre = nombre;
    this._precio = precio;
  }

  public EfectoMejora() {
    //Activa esta mejora
  }

  //Getters and setters
  public get nombre(): string {
    return this._nombre;
  }

  public set nombre(v: string) {
    this._nombre = v;
  }

  public get precio(): number {
    return this._precio;
  }

  public set precio(v: number) {
    this._precio = v;
  }
}
