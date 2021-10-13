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
        this._niveles = niveles;
        this._nivelActual = nivelActual;

        this._onClick = false;
        this._puntoInicialX = 0;
        this._puntoInicialY = 0;
        this._distancia = 0;
        this._puntoFinalX = 0;
        this._puntoFinalY = 0;
        //PRUEBAS/
        //Pruebas
        //this.niveles[this.nivelActual].residuos.push(new Residuo("papel1", this.niveles[this.nivelActual].pantallaDeJuego.physics,1,""));
        this.CargarColisionesNivel();
        console.log(this.niveles[this.nivelActual].residuos);
        this._residuoSeleccionado = this.niveles[this.nivelActual].residuos.shift();
        console.log(this.niveles[this.nivelActual].residuos);
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

    public CargarColisionesNivel(){
        this.niveles.forEach(nivel => {
            nivel.residuos.forEach(residuo => {
                nivel.recipientes.forEach(recipiente => {
                    //console.log(nivel.pantallaDeJuego.physics);
                    //console.log(residuo);
                    //console.log(recipiente);
                    nivel.pantallaDeJuego.physics.add.overlap(residuo, recipiente, recipiente.CompararRecipiente(), null, nivel.pantallaDeJuego);
                    
                });
                nivel.monedas.forEach(moneda => {
                    nivel.pantallaDeJuego.physics.add.overlap(residuo, moneda, moneda.TomarMoneda, null, nivel.pantallaDeJuego);
                });
            });
        });
    }
public a(){
    console.log("AAAAAAAAAAA");
}
    public CargarControlador(){
        this.niveles.forEach(element => {
            element.pantallaDeJuego.controladorNivel = this;
        });
    }

    private ReiniciarDistancias(){
        this.puntoInicialX = 0;
        this.puntoInicialY = 0;
        this.puntoFinalX = 0;
        this.puntoFinalY = 0;
        this.distancia = 0;
    }

    private OnClickPress(){
        if(this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.isDown && !this.onClick){
            this.puntoInicialX = this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.x;
            this.puntoInicialY = this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.y;
            this.onClick = true;
        }
    }

    private OnClickRelease() : boolean {
        if(this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.leftButtonReleased() && this.onClick){
            this.onClick = false;
            this.distancia = this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.getDistanceX();
            this.distancia += this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.getDistanceY();
            //console.log(this.distancia);
            if(this.distancia > this.DISTANCIA_MINIMA){
                this.puntoFinalX = this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.x;
                this.puntoFinalY = this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.y;
                return true;
            }
        }
        //this.ReiniciarDistancias();
        return false;
    }

    public PrepararLanzamiento(){
        this.OnClickPress();
        if(this.OnClickRelease()){
            //LanzarReciduo(this.residuoSeleccionado);
            //console.log("Lanzado " + this.puntoFinalX + " " +this.puntoFinalY);
            this.residuoSeleccionado?.residuo.setX(this.puntoFinalX);
            this.residuoSeleccionado?.residuo.setY(this.puntoFinalY);
            //this.residuoSeleccionado?.residuo.setVelocity(0);
            const dx = (this.puntoInicialX - this.puntoFinalX);
            const dy = (this.puntoInicialY - this.puntoFinalY);
            this.residuoSeleccionado?.residuo.setVelocity(dx * 6, dy * 6);
            //this.residuoSeleccionado?.physics.setY(-this.puntoFinalY);
//            var x = this.physics.add.sprite(this.puntoFinalX,-this.puntoFinalY,"boton");
            //x.setAcceleration(this.puntoFinalX,this.puntoFinalY);
            //x.setVelocity(0,this.puntoFinalY);
            //this._graphics.clear();
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

    public curve;
public drawGraphics;
public path;
public _graphics;

    //Getters and setters
    public get niveles(): Array<Nivel>{
        return this._niveles;
    }

    public set niveles(value: Array<Nivel>){
        this._niveles = value;
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