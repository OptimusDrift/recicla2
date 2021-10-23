export default class Musica {
  private _nombre: string;

  constructor(nombre: string) {
    this._nombre = nombre;
  }

  public Play() {
    //Reproducir el tema
  }

  public Pausa() {
    //Pausar el tema
  }

  public Stop() {
    //Parar el tema
  }

  //Getters and setters
  public get nombre(): string {
    return this._nombre;
  }

  public set nombre(value: string) {
    this._nombre = value;
  }
}
