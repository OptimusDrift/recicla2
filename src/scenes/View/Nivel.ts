import Residuo from '../Model/Residuo'
import Moneda from '../Model/Moneda'
import Obstaculo from '../Model/Obstaculo'
import Recipiente from '../Model/Recipiente'
import Pregunta from '../Model/Pregunta'
import Player from '../Model/Player'
import Dialogo from '../Model/Dialogo'
import Musica from '../Model/Musica'
import Juego from './Juego'

export default class Nivel extends Phaser.Scene{
    private _fondo: string;
    private _residuos: Array<Residuo>;
    private _monedas: Array<Moneda>;
    private _obstaculos: Array<Obstaculo>;
    private _recipientes: Array<Recipiente>;
    private _pregunta: Pregunta;
    private _player: Player;
    private _dialogos: Array<Dialogo>;
    private _puntajeNecesario: number;
    private _musica: Musica;
    private _onClick: boolean;
    private _reciduoSeleccionado: Residuo|undefined;
    private _puntoInicialX: number;
    private _puntoInicialY: number;
    private _puntoFinalX: number;
    private _puntoFinalY: number;
    private _distancia: number;
    private DISTANCIA_MINIMA = 10;
    public _graphics;

    constructor(nombreNivel: string, fondo: string, residuos: Array<Residuo>, monedas: Array<Moneda>, obstaculos: Array<Obstaculo>, recipientes: Array<Recipiente>, pregunta: Pregunta, player: Player, dialogos: Array<Dialogo>, puntajeNecesario: number, musica: Musica){
        super(nombreNivel);
        this._fondo = fondo;
        this._residuos = residuos;
        this._monedas = monedas;
        this._obstaculos = obstaculos;
        this._recipientes = recipientes;
        this._pregunta = pregunta;
        this._player = player;
        this._dialogos = dialogos;
        this._puntajeNecesario = puntajeNecesario;
        this._musica = musica;
        this._reciduoSeleccionado = this.residuos.shift();
        this._onClick = false;
        this._puntoInicialX = 0;
        this._puntoInicialY = 0;
        this._puntoFinalX = 0;
        this._puntoFinalY = 0;
        this._distancia = 0;
    }

    private ReiniciarDistancias(){
        this._puntoInicialX = 0;
        this._puntoInicialY = 0;
        this._puntoFinalX = 0;
        this._puntoFinalY = 0;
        this._distancia = 0;
    }

    
    private OnClickPress(){
        if(this.game.input.activePointer.isDown && !this.onClick){
            this.puntoInicialX = this.input.activePointer.x;
            this.puntoInicialY = -this.input.activePointer.y;
            this.onClick = true;
        }
    }

    private OnClickRelease() : boolean {
        if(this.input.activePointer.leftButtonReleased() && this.onClick){
            this.onClick = false;
            this.distancia = this.input.activePointer.getDistanceY();
            if(this.distancia > this.DISTANCIA_MINIMA){
                this.puntoFinalX = this.input.activePointer.x;
                this.puntoFinalY = -this.input.activePointer.y;
                return true;
            }
        }
        //this.ReiniciarDistancias();
        return false;
    }

    public PrepararLanzamiento(){
        this.OnClickPress();
        if(this.OnClickRelease()){
            //LanzarReciduo(this.reciduoSeleccionado);
            console.log("Lanzado");
            //this._graphics.clear();
            this._graphics.lineStyle(6, 0xababab, 1);
            this._graphics.lineBetween(this.puntoInicialX, -this.puntoInicialY, this.puntoFinalX, -this.puntoFinalY);
            
            
            this.curve.getPoint(this.path.t, this.path.vec);

            this._graphics.fillStyle(0xff0000, 1);
            this._graphics.fillCircle(this.path.vec.x, this.path.vec.y, 8);

            this.drawGraphics.clear();

            this.drawGraphics.fillStyle(0xff0000, 0.1);
            this.drawGraphics.fillCircle(this.path.vec.x, this.path.vec.y, 4);

            this.drawGraphics.generateTexture('curve', 800, 600);
        }

    }
public curve;
public drawGraphics;
public path;
    create(){
        this._graphics = this.add.graphics();
        this.curve = new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(), new Phaser.Math.Vector2(), new Phaser.Math.Vector2(), new Phaser.Math.Vector2());
        this.drawGraphics = this.add.graphics();
        this._graphics.lineStyle(6, 0xababab, 1);
        this.path = { t: 0, vec: new Phaser.Math.Vector2() };
        this.tweens.add({
            targets: this.path,
            t: 1,
            ease: 'Sine.easeInOut',
            duration: 8000,
            yoyo: true,
            repeat: -1
        });
    }
    
    update(){
        
    }
    //Getters and setters
    public get fondo() : string {
        return this._fondo;
    }
    
    
    public set fondo(v : string) {
        this._fondo = v;
    }


    public get residuos() : Array<Residuo> {
        return this._residuos;
    }
    
    
    public set residuos(v : Array<Residuo>) {
        this._residuos = v;
    }

    public get monedas() : Array<Moneda> {
        return this._monedas;
    }
    
    
    public set monedas(v : Array<Moneda>) {
        this._monedas = v;
    }

    public get obstaculos() : Array<Obstaculo> {
        return this._obstaculos;
    }
    
    
    public set obstaculos(v : Array<Obstaculo>) {
        this._obstaculos = v;
    }

    public get recipientes() : Array<Recipiente> {
        return this._recipientes;
    }
    
    
    public set recipientes(v : Array<Recipiente>) {
        this._recipientes = v;
    }

    public get pregunta() : Pregunta {
        return this._pregunta;
    }
    
    
    public set pregunta(v : Pregunta) {
        this._pregunta = v;
    }

    public get player() : Player {
        return this._player;
    }
    
    
    public set player(v : Player) {
        this._player = v;
    }

    public get dialogos() : Array<Dialogo> {
        return this._dialogos;
    }
    
    
    public set dialogos(v : Array<Dialogo>) {
        this._dialogos = v;
    }

    public get puntajeNecesario() : number {
        return this._puntajeNecesario;
    }
    
    
    public set puntajeNecesario(v : number) {
        this._puntajeNecesario = v;
    }

    public get musica() : Musica {
        return this._musica;
    }
    
    
    public set musica(v : Musica) {
        this._musica = v;
    }

    public get onClick(): boolean{
        return this._onClick;
    }

    public set onClick(value: boolean){
        this._onClick = value;
    }

    public get reciduoSeleccionado(): Residuo|undefined{
        return this._reciduoSeleccionado;
    }

    public set reciduoSeleccionado(value: Residuo|undefined){
        this._reciduoSeleccionado = value;
    }

    public get puntoInicialX(): number{
        return this._puntoInicialX;
    }

    public set puntoInicialX(value: number){
        this._puntoInicialX = value;
    }

    public get puntoInicialY(): number{
        return this._puntoInicialY;
    }

    public set puntoInicialY(value: number){
        this._puntoInicialY = value;
    }

    public get puntoFinalX(): number{
        return this._puntoFinalX;
    }

    public set puntoFinalX(value: number){
        this._puntoFinalX = value;
    }

    public get puntoFinalY(): number{
        return this._puntoFinalY;
    }

    public set puntoFinalY(value: number){
        this._puntoFinalY = value;
    }

    public get distancia(): number{
        return this._distancia;
    }

    public set distancia(value: number){
        this._distancia = value;
    }
}