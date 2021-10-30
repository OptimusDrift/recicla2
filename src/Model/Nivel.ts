import Residuo from "../Model/Residuo";
import Player from "../Model/Player";
import Musica from "../Model/Musica";
import Moneda from "../Model/Moneda";
import Recipiente from "../Model/Recipiente";

export default class Nivel {
  //Datos del nivel
  private _pantallaDeJuego: any;
  private _fondo: string;
  //Contenido del nivel
  private _player: Player;
  private _residuos: Array<Residuo>;
  private _residuosBackUp: Array<Residuo>;
  private _monedas: Array<Moneda>;
  private _obstaculos: any;
  private _escapes: any;
  private _recipientes: Array<Recipiente>;
  private _puntajeNecesario: number;
  private _puntajeActual: number;
  private _puntajeInicial: number;
  private _estadoDelNivel: number;
  private _puntajeMaximo: number;
  private _gomera: any;
  //Tiled
  private _mapa: Phaser.Tilemaps.Tilemap;
  private _tileset: Phaser.Tilemaps.Tileset;
  //Assets el nivel
  private _musica: Musica;

  constructor(
    pantallaDeJuego: any,
    fondo: string,
    player: Player,
    puntajeNecesario: number,
    monedas: Array<Moneda>,
    puntajeMaximo: number,
    obstaculos: any,
    recipientes: Array<Recipiente>,
    residuos: Array<Residuo>,
    escapes: any,
    estadoDelNivel: number,
    puntajeInicial: number,
    mapa: Phaser.Tilemaps.Tilemap,
    tileset: Phaser.Tilemaps.Tileset,
    musica: Musica
  ) {
    this._pantallaDeJuego = pantallaDeJuego;
    this._fondo = fondo;
    this.pantallaDeJuego.add.image(1920 / 2, 1080 / 2, this.fondo).setDepth(-5);
    this._player = player;
    this._puntajeNecesario = puntajeNecesario;
    this._puntajeMaximo = puntajeMaximo;
    this._puntajeInicial = puntajeInicial;
    this._puntajeActual = puntajeInicial;
    this._escapes = escapes;
    this._musica = musica;
    this._residuos = residuos;
    this.IniciarElNivel();
    this._monedas = monedas;
    this._obstaculos = obstaculos;
    this._recipientes = recipientes;
    this._mapa = mapa;
    this._tileset = tileset;
    this._estadoDelNivel = estadoDelNivel;
  }

  public ReiniciarNivel() {
    this.residuos = this.residuosBackUp.slice();
    this.puntajeActual = this.puntajeInicial;
  }

  public IniciarElNivel() {
    this.residuosBackUp = this.residuos.slice();
  }

  //Getters and setters
  public get pantallaDeJuego(): any {
    return this._pantallaDeJuego;
  }

  public set pantallaDeJuego(v: any) {
    this._pantallaDeJuego = v;
  }

  public get fondo(): string {
    return this._fondo;
  }

  public set fondo(v: string) {
    this._fondo = v;
  }

  public get player(): Player {
    return this._player;
  }

  public set player(v: Player) {
    this._player = v;
  }

  public get puntajeNecesario(): number {
    return this._puntajeNecesario;
  }

  public set puntajeNecesario(v: number) {
    this._puntajeNecesario = v;
  }

  public get musica(): Musica {
    return this._musica;
  }

  public set musica(v: Musica) {
    this._musica = v;
  }
  public get monedas(): Array<Moneda> {
    return this._monedas;
  }

  public set monedas(v: Array<Moneda>) {
    this._monedas = v;
  }

  public get obstaculos(): any {
    return this._obstaculos;
  }

  public set obstaculos(v: any) {
    this._obstaculos = v;
  }

  public get recipientes(): Array<Recipiente> {
    return this._recipientes;
  }

  public set recipientes(v: Array<Recipiente>) {
    this._recipientes = v;
  }

  public get puntajeActual(): number {
    return this._puntajeActual;
  }

  public set puntajeActual(value: number) {
    this._puntajeActual = value;
  }

  public get residuos(): Array<Residuo> {
    return this._residuos;
  }

  public set residuos(v: Array<Residuo>) {
    this._residuos = v;
  }

  public get estadoDelNivel(): number {
    return this._estadoDelNivel;
  }

  public set estadoDelNivel(value: number) {
    this._estadoDelNivel = value;
  }

  public get mapa(): Phaser.Tilemaps.Tilemap {
    return this._mapa;
  }

  public set mapa(value: Phaser.Tilemaps.Tilemap) {
    this._mapa = value;
  }

  public get tileset(): Phaser.Tilemaps.Tileset {
    return this._tileset;
  }

  public set tileset(value: Phaser.Tilemaps.Tileset) {
    this._tileset = value;
  }

  public get puntajeMaximo(): number {
    return this._puntajeMaximo;
  }

  public set puntajeMaximo(value: number) {
    this._puntajeMaximo = value;
  }

  public get residuosBackUp(): Array<Residuo> {
    return this._residuosBackUp;
  }

  public set residuosBackUp(value: Array<Residuo>) {
    this._residuosBackUp = value;
  }

  public get puntajeInicial(): number {
    return this._puntajeInicial;
  }

  public set puntajeInicial(value: number) {
    this._puntajeInicial = value;
  }

  public get gomera(): any {
    return this._gomera;
  }

  public set gomera(value: any) {
    this._gomera = value;
  }

  public get escapes(): any {
    return this._escapes;
  }

  public set escapes(value: any) {
    this._escapes = value;
  }
}
