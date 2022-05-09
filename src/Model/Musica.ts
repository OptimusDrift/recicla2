export default class Musica {
  private _audio: any;
  private _scene: any;

  constructor(audio: any, scene: any) {
    this._audio = audio;
    this._scene = scene;
  }

  public Play() {
    //Reproducir el tema
    this._scene.sound.play(this.audio);
  }

  public Pausa() {
    //Pausar el tema
    this.audio.pause();
  }

  public Stop() {
    //Parar el tema
    this.audio.stop();
  }

  //Getters and setters
  public get audio(): any {
    return this._audio;
  }

  public set nombre(value: any) {
    this._audio = value;
  }
}
