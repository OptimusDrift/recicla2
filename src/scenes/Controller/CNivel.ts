import Nivel from '../Model/Nivel'
import Residuo from '../Model/Residuo';

 export default class CNivel {
    //Niveles
    private _niveles: Array<Nivel>;
    private _nivelActual: number;
    //Atributos del nivel
    private DISTANCIA_MINIMA = 100;
    private _onClick: boolean;
    private _puntoInicialX: number;
    private _puntoInicialY: number;
    private _distancia: number;
    private _puntoFinalX: number;
    private _puntoFinalY: number;

    private _residuoSeleccionado: Residuo|undefined;

    constructor(niveles: Array<Nivel>, nivelActual: number) {
        //Setea las variables por defecto
        this._niveles = niveles;
        this._nivelActual = nivelActual;
        this._onClick = false;
        this._puntoInicialX = 0;
        this._puntoInicialY = 0;
        this._distancia = 0;
        this._puntoFinalX = 0;
        this._puntoFinalY = 0;
        //Carga las colisiones
        this.CargarColisionesNivel();
        //PRUEBAS/

        //PRUEBAS TOMA DE RESIDUO
        this._residuoSeleccionado = this.niveles[this.nivelActual].residuos.shift();

        //PRUEBAS GRAFICOS
        this._graphics = this.niveles[this.nivelActual].pantallaDeJuego.add.graphics();
        this.curve = new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(), new Phaser.Math.Vector2(), new Phaser.Math.Vector2(), new Phaser.Math.Vector2());
        this.drawGraphics = this.niveles[this.nivelActual].pantallaDeJuego.add.graphics();
        this._graphics.lineStyle(6, 0xababab, 1);
        this.path = { t: 0, vec: new Phaser.Math.Vector2() };
        this.niveles[this.nivelActual].pantallaDeJuego.tweens.add({
            targets: this.path,
            t: 1,
            ease: 'Sine.easeInOut',
            duration: 8000,
            yoyo: true,
            repeat: -1
        });
    }

    //La clase toma todos los elementos de los niveles y carga las colisiones
    public CargarColisionesNivel(){
        //Recorre los niveles
        this.niveles.forEach(nivel => {
            //Recorre los residuos del nivel
            nivel.residuos.forEach(residuo => {
                //Recorre los recipientes del nivel
                nivel.recipientes.forEach(recipiente => {
                    //Annade la colision entre los residuos y los recipientes
                    nivel.pantallaDeJuego.physics.add.overlap(residuo.cuerpo, recipiente.cuerpo, recipiente.CompararRecipiente, null, nivel.pantallaDeJuego);
                    
                });
                //Recorre todas las monedas del nivel
                nivel.monedas.forEach(moneda => {
                    //annade la colision entre los residuos y las monedas
                    nivel.pantallaDeJuego.physics.add.overlap(residuo.cuerpo, moneda.cuerpo, moneda.TomarMoneda, null, nivel.pantallaDeJuego);
                });
                //Recorre todos los obstaculos del nivel
                nivel.obstaculos.forEach(obstaculo => {
                    //Annade la colision entre los residuos y los obstaculos
                    nivel.pantallaDeJuego.physics.add.collider(residuo.cuerpo, obstaculo.cuerpo, residuo.setFriccion);
                });
            });
        });
    }

    private OnClickPress(){
        //Pregunta si el click fue presionado
        if(this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.isDown && !this.onClick){
            //Si es verdadero actualiza los valores iniciales
            this.puntoInicialX = this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.x;
            this.puntoInicialY = this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.y;
            this.onClick = true;
        }
    }

    private OnClickRelease() : boolean {
        //Pregunta si el click fue soltado
        if(this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.leftButtonReleased() && this.onClick){
            //Si es verdadero actualiza el punto final
            this.onClick = false;
            this.distancia = this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.getDistanceX();
            this.distancia += this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.getDistanceY();
            //Pregunta si la distancia entre el punto inicial y el punto final es una distancia minima
            if(this.distancia > this.DISTANCIA_MINIMA){
                //Si es verdadero entonces devuelve el valor del punto final
                this.puntoFinalX = this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.x;
                this.puntoFinalY = this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.y;
                return true;
            }
        }
        return false;
    }

    
    public PrepararLanzamiento(){
        //Todas las llamadas revisa si el mouse se presiona, cuando lo hace guarda la posicion inicial de la x e y
        this.OnClickPress();
        //Cuando el mouse se suelta guarda la posicion del punto final de la x e y
        if(this.OnClickRelease()){
            this.residuoSeleccionado?.cuerpo.setX(this.puntoFinalX);
            this.residuoSeleccionado?.cuerpo.setY(this.puntoFinalY);
            this.residuoSeleccionado?.cuerpo.setVelocity(0);
            const dx = (this.puntoInicialX - this.puntoFinalX);
            const dy = (this.puntoInicialY - this.puntoFinalY);
            //Los residuos no se eliminan, se ocultan, para no calcular su caida se pausa su gravedad, aca se vuelve a actuvar
            this.residuoSeleccionado?.cuerpo.body.setAllowGravity(true);
            //Annade la velocidad del residuo seleccionado
            this.residuoSeleccionado?.cuerpo.setVelocity(dx * 6, dy * 6);

            //this.residuoSeleccionado?.physics.setY(-this.puntoFinalY);
//            var x = this.physics.add.sprite(this.puntoFinalX,-this.puntoFinalY,"boton");
            //x.setAcceleration(this.puntoFinalX,this.puntoFinalY);
            //x.setVelocity(0,this.puntoFinalY);
            //this._graphics.clear();

            //Pruebas de lineas en pantalla
            this._graphics.lineStyle(6, 0xababab, 1);
            this._graphics.lineBetween(this.puntoInicialX, this.puntoInicialY, this.puntoFinalX, this.puntoFinalY);
            
            
            this.curve.getPoint(this.path.t, this.path.vec);

            this._graphics.fillStyle(0xff0000, 1);
            this._graphics.fillCircle(this.path.vec.x, this.path.vec.y, 8);

            this.drawGraphics.clear();

            this.drawGraphics.fillStyle(0xff0000, 0.1);
            this.drawGraphics.fillCircle(this.path.vec.x, this.path.vec.y, 4);

            this.drawGraphics.generateTexture('curve', 800, 600);
        }

    }
//Pruebas de lineas en pantalla
    public curve;
public drawGraphics;
public path;
public _graphics;
//AAAAAAAAAAAAAAAAAAAAAAAA

    //Getters and setters
    public get niveles(): Array<Nivel>{
        return this._niveles;
    }

    public set niveles(value: Array<Nivel>){
        this._niveles = value;
    }

    //Es un set del controlador de este nivel en la vista para cada nivel, tienen todos la misma instancia de la clase
    public CargarControlador(){
        this.niveles.forEach(element => {
            element.pantallaDeJuego.controladorNivel = this;
        });
    }

    public get nivelActual(): number{
        return this._nivelActual;
    }

    public set nivelActual(value: number){
        this._nivelActual = value;
    }

    public get onClick(): boolean{
        return this._onClick;
    }

    public set onClick(value: boolean){
        this._onClick = value;
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

    public get distancia(): number{
        return this._distancia;
    }

    public set distancia(value: number){
        this._distancia = value;
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

    public get residuoSeleccionado(): Residuo|undefined{
        return this._residuoSeleccionado;
    }

    public set residuoSeleccionado(value: Residuo|undefined){
        this._residuoSeleccionado = value;
    }
}