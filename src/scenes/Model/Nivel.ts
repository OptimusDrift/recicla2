import Residuo from './Residuo'
import Moneda from './Moneda'
import Obstaculo from './Obstaculo'
import Recipiente from './Recipiente'
import Pregunta from './Pregunta'
import Player from './Player'
import Dialogo from './Dialogo'
import Musica from './Musica'

export default class Nivel {
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

    constructor(fondo: string, residuos: Array<Residuo>, monedas: Array<Moneda>, obstaculos: Array<Obstaculo>, recipientes: Array<Recipiente>, pregunta: Pregunta, player: Player, dialogos: Array<Dialogo>, puntajeNecesario: number, musica: Musica){
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
}