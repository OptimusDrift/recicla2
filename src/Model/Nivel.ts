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
  private _monedas: Array<Moneda>;
  private _obstaculos: any;
  private _recipientes: Array<Recipiente>;
  private _puntajeNecesario: number;
  private _puntajeActual: number;
  private _estadoDelNivel: number;
  private _puntajeMaximo: number;
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
    puntajeeMaximo: number,
    obstaculos: any,
    recipientes: Array<Recipiente>,
    residuos: Array<Residuo>,
    estadoDelNivel: number,
    puntajeActual: number,
    mapa: Phaser.Tilemaps.Tilemap,
    tileset: Phaser.Tilemaps.Tileset,
    musica: Musica
  ) {
    this._pantallaDeJuego = pantallaDeJuego;
    this._fondo = fondo;
    this.pantallaDeJuego.add.image(1920 / 2, 1080 / 2, this.fondo).setDepth(-5);
    this._player = player;
    this._puntajeNecesario = puntajeNecesario;
    this._puntajeMaximo = puntajeeMaximo;
    this._puntajeActual = puntajeActual;
    this._musica = musica;
    this._residuos = residuos;
    this._monedas = monedas;
    this._obstaculos = obstaculos;
    this._recipientes = recipientes;
    this._mapa = mapa;
    this._tileset = tileset;
    this._estadoDelNivel = estadoDelNivel;
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
}
