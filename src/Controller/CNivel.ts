import Nivel from "../Model/Nivel";
import Residuo from "../Model/Residuo";
import CHud from "./CHud";

export default class CNivel {
  //Niveles
  private _niveles: Array<Nivel>;
  private _nivelActual: number;
  private _cHud: CHud;

  //Atributos del nivel
  private _onClick: boolean;
  private _preparadoParaLanzar: boolean;
  private _puntoInicialX: number;
  private _puntoInicialY: number;
  private _distancia: number;
  private _puntoFinalX: number;
  private _puntoFinalY: number;
  private _residuoSeleccionado: Residuo | undefined;
  private _residuoAnterior: Residuo | undefined;

  //Constantes del nivel
  private PUNTO_INICIAL_X = 256; //Son los puntos desde donde se lanza el residuo
  private PUNTO_INICIAL_Y = 896;
  private DISTANCIA_MINIMA = 100;
  private DISTANCIA_MAXIMA = 200;
  private BOTON_CONFIGURACION_POSICION_X = 1862;
  private BOTON_CONFIGURACION_POSICION_Y = 64;

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
    //PRUEBAS/

    //-------------------PRUEBAS TOMA DE RESIDUO----------------//

    //PRUEBAS GRAFICOS
    this._graphics =
      this.niveles[this.nivelActual].pantallaDeJuego.add.graphics();
    this.curve = new Phaser.Curves.CubicBezier(
      new Phaser.Math.Vector2(),
      new Phaser.Math.Vector2(),
      new Phaser.Math.Vector2(),
      new Phaser.Math.Vector2()
    );
    this.drawGraphics =
      this.niveles[this.nivelActual].pantallaDeJuego.add.graphics();
    this._graphics.lineStyle(6, 0xababab, 1);
    this.path = { t: 0, vec: new Phaser.Math.Vector2() };
    this.niveles[this.nivelActual].pantallaDeJuego.tweens.add({
      targets: this.path,
      t: 1,
      ease: "Sine.easeInOut",
      duration: 8000,
      yoyo: true,
      repeat: -1,
    });
    this.bezierGraphics = this.niveles[0].pantallaDeJuego.add.graphics();
    this.bezierCurve = new Phaser.Curves.CubicBezier(
      new Phaser.Math.Vector2(300, 900),
      new Phaser.Math.Vector2(1500, 100),
      new Phaser.Math.Vector2(500, 200),
      new Phaser.Math.Vector2(300, 300)
    );
  }

  private CargarAnimacionDeLaGomera() {
    this.niveles.forEach((nivel) => {
      nivel.pantallaDeJuego.anims.create({
        key: "gomeraIdle",
        frames: nivel.pantallaDeJuego.anims.generateFrameNumbers(
          "gomeraPlayer",
          {
            start: 0,
            end: 0,
          }
        ),
      });
      nivel.pantallaDeJuego.anims.create({
        key: "gomeraMedia",
        frames: nivel.pantallaDeJuego.anims.generateFrameNumbers(
          "gomeraPlayer",
          {
            start: 1,
            end: 1,
          }
        ),
      });
      nivel.pantallaDeJuego.anims.create({
        key: "gomeraFull",
        frames: nivel.pantallaDeJuego.anims.generateFrameNumbers(
          "gomeraPlayer",
          {
            start: 2,
            end: 2,
          }
        ),
      });

      nivel.gomera = nivel.pantallaDeJuego.add.sprite(
        192 + 64,
        1024 - 64,
        "gomeraPlayer"
      ); //Crea el sprite de la gomera
    });

    this._preparadoParaLanzar = true;
  }

  //La clase toma todos los elementos de los niveles y carga las colisiones
  public CargarColisionesNivel() {
    //Recorre los niveles
    this.niveles.forEach((nivel) => {
      nivel.IniciarElNivel();
      //Recorre los residuos del nivel
      nivel.residuos.forEach((residuo) => {
        nivel.pantallaDeJuego.physics.add.collider(
          residuo.cuerpo,
          nivel.escapes,
          residuo.ResiduoFueraDeLaPantalla
        );
        //Recorre los recipientes del nivel
        nivel.recipientes.forEach((recipiente) => {
          //Annade la colision entre los residuos y los recipientes
          nivel.pantallaDeJuego.physics.add.overlap(
            residuo.cuerpo,
            recipiente.cuerpo,
            recipiente.CompararRecipiente,
            null,
            nivel.pantallaDeJuego
          );
        });
        //Recorre todas las monedas del nivel
        nivel.monedas.forEach((moneda) => {
          //annade la colision entre los residuos y las monedas
          nivel.pantallaDeJuego.physics.add.overlap(
            residuo.cuerpo,
            moneda.cuerpo,
            moneda.TomarMoneda,
            null,
            nivel.pantallaDeJuego
          );
        });
        nivel.pantallaDeJuego.physics.add.collider(
          residuo.cuerpo,
          nivel.obstaculos,
          residuo.setFriccion
        ); //Colision entre los residuos y los obstaculos
      });
    });
  }

  private OnClickPress() {
    //Pregunta si el click fue presionado
    if (
      this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer
        .isDown &&
      !this.onClick
    ) {
      //Si es verdadero actualiza los valores iniciales
      this.puntoInicialX =
        this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.x;
      this.puntoInicialY =
        this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.y;
      this.onClick = true; //Actualiza el valor del click
      this.niveles[this.nivelActual].gomera.anims.play("gomeraMedia", true); //Inicia la animacion de la gomera
    }
  }

  private OnClickRelease(): boolean {
    //Pregunta si el click fue soltado
    if (
      this.niveles[
        this.nivelActual
      ].pantallaDeJuego.input.activePointer.leftButtonReleased() &&
      this.onClick
    ) {
      //Si es verdadero actualiza el punto final
      this.onClick = false;
      this.distancia =
        this.niveles[
          this.nivelActual
        ].pantallaDeJuego.input.activePointer.getDistanceX();
      this.distancia +=
        this.niveles[
          this.nivelActual
        ].pantallaDeJuego.input.activePointer.getDistanceY();
      this.niveles[this.nivelActual].gomera.anims.play("gomeraIdle", true); //Inicia la animacion de la gomera
      //Pregunta si la distancia entre el punto inicial y el punto final es una distancia minima
      if (this.distancia > this.DISTANCIA_MINIMA) {
        //Si es verdadero entonces devuelve el valor del punto final
        this.puntoFinalX =
          this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.x -
          (this.puntoInicialX - this.PUNTO_INICIAL_X);
        this.puntoFinalY =
          this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.y -
          (this.puntoInicialY - this.PUNTO_INICIAL_Y);
        this.puntoInicialX = this.PUNTO_INICIAL_X;
        this.puntoInicialY = this.PUNTO_INICIAL_Y;
        return true;
      }
    }
    return false;
  }

  OnClickDrag() {
    if (
      this.niveles[
        this.nivelActual
      ].pantallaDeJuego.input.activePointer.getDistanceX() +
        this.niveles[
          this.nivelActual
        ].pantallaDeJuego.input.activePointer.getDistanceY() >
        this.DISTANCIA_MINIMA &&
      this.niveles[this.nivelActual].pantallaDeJuego.input.activePointer.isDown
    ) {
      this.niveles[this.nivelActual].gomera.anims.play("gomeraFull", true); //Inicia la animacion de la gomera
    } else if (this.onClick) {
      this.niveles[this.nivelActual].gomera.anims.play("gomeraMedia", true); //Inicia la animacion de la gomera
    }
  }

  public PrepararLanzamiento() {
    if (this.preparadoParaLanzar) {
      //Todas las llamadas revisa si el mouse se presiona, cuando lo hace guarda la posicion inicial de la x e y
      this.OnClickPress();
      this.OnClickDrag();
      //Cuando el mouse se suelta guarda la posicion del punto final de la x e y
      if (this.OnClickRelease()) {
        this.DesactivarLanzamiento();
        this.SiguienteReciduo();
        this.residuoAnterior = this.residuoSeleccionado;
        this.residuoSeleccionado?.cuerpo.setX(this.puntoInicialX);
        this.residuoSeleccionado?.cuerpo.setY(this.puntoInicialY);
        this.residuoSeleccionado?.cuerpo.setVelocity(0);
        const dx = this.puntoInicialX - this.puntoFinalX;
        const dy = this.puntoInicialY - this.puntoFinalY;
        console.log("x1 :" + this.puntoFinalX + " y1 :" + this.puntoFinalY);
        console.log("x2 :" + this.puntoInicialX + " y2 :" + this.puntoInicialY);
        console.log("pendiente: " + dx / dy);
        //Los residuos no se eliminan, se ocultan, para no calcular su caida se pausa su gravedad, aca se vuelve a actuvar
        this.residuoSeleccionado?.cuerpo.body.setAllowGravity(true);
        //Annade la velocidad del residuo seleccionado
        this.residuoSeleccionado?.cuerpo.setVelocity(
          dx * this.Velocidad(this.distancia),
          dy * this.Velocidad(this.distancia)
        );
        this.residuoSeleccionado = undefined;

        //this.residuoSeleccionado?.physics.setY(-this.puntoFinalY);
        //            var x = this.physics.add.sprite(this.puntoFinalX,-this.puntoFinalY,"boton");
        //x.setAcceleration(this.puntoFinalX,this.puntoFinalY);
        //x.setVelocity(0,this.puntoFinalY);
        //this._graphics.clear();

        //------------------------Pruebas de lineas en pantalla-----------------------//
        /*this._graphics.lineStyle(6, 0xababab, 1);
              this._graphics.lineBetween(this.puntoInicialX, this.puntoInicialY, this.puntoFinalX, this.puntoFinalY);
              
              
              this.curve.getPoint(this.path.t, this.path.vec);
  
              this._graphics.fillStyle(0xff0000, 1);
              this._graphics.fillCircle(this.path.vec.x, this.path.vec.y, 8);
  
              this.drawGraphics.clear();
  
              this.drawGraphics.fillStyle(0xff0000, 0.1);
              this.drawGraphics.fillCircle(this.path.vec.x, this.path.vec.y, 4);
  
              this.drawGraphics.generateTexture('curve', 800, 600);*/
        this.drawBezier(1, 1);
      }
    }
  }

  private bezierGraphics;
  private bezierCurve;
  private drawBezier(x, y) {
    this.bezierGraphics.clear();
    this.bezierGraphics.lineStyle(4, 0xffffff);
    this.bezierCurve.draw(this.bezierGraphics);
    this.bezierGraphics.lineStyle(2, 0x00ff00);
    this.bezierGraphics.beginPath();
    this.bezierGraphics.moveTo(x, y);
    this.bezierGraphics.lineTo(x + 100, y + 100);
    this.bezierGraphics.strokePath();
    this.bezierGraphics.lineStyle(2, 0xff0000);
    this.bezierGraphics.beginPath();
    this.bezierGraphics.strokePath();
  }

  private Velocidad(distancia: number): number {
    if (this.DISTANCIA_MAXIMA <= distancia) {
      return 0.8;
    }
    return ((100 * distancia) / this.DISTANCIA_MAXIMA / 100) * 0.8;
  }
  //--------------Pruebas de lineas en pantalla----------------------//
  public curve;
  public drawGraphics;
  public path;
  public _graphics;
  //AAAAAAAAAAAAAAAAAAAAAAAA

  public NivelTerminado() {}

  public GanarNivel() {
    console.log("Perdisten't");
  }

  public PerderNivel() {
    console.log("Perdiste");
  }

  //Getters and setters
  public get niveles(): Array<Nivel> {
    return this._niveles;
  }

  public set niveles(value: Array<Nivel>) {
    this._niveles = value;
  }

  private SiguienteReciduo() {
    try {
      if (this.niveles[this.nivelActual].residuos.length > 0) {
        this.residuoSeleccionado =
          this.niveles[this.nivelActual].residuos.shift(); //Obtiene el primer residuo del array de residuos
      } else {
        throw new Error("No hay residuos para seleccionar");
      }
    } catch (error) {
      this.SiguienteNivel();
    }
  }

  public ActivarLanzamiento() {
    this.preparadoParaLanzar = true;
  }

  public DesactivarLanzamiento() {
    this.preparadoParaLanzar = false;
  }

  public AgregarResiduos(reciduo: Residuo) {
    this.niveles[this.nivelActual].residuos.push(reciduo);
  }

  //Es un set del controlador de este nivel en la vista para cada nivel, tienen todos la misma instancia de la clase
  public CargarControlador() {
    this.niveles.forEach((nivel) => {
      nivel.pantallaDeJuego.controladorNivel = this;
    });
    this.CargarColisionesNivel();
    this.CargarAnimacionDeLaGomera();
    this.niveles[this.nivelActual].gomera.anims.play("gomeraIdle", true); //Inicia la animacion de la gomera
  }
  SiguienteNivel() {
    try {
      this.niveles[this.nivelActual].pantallaDeJuego.scene.sleep(
        "Nivel" + (this.nivelActual + 1)
      );
      this.nivelActual++;
      this.niveles[this.nivelActual].pantallaDeJuego.scene.wake(
        "Nivel" + (this.nivelActual + 1)
      );
    } catch (error) {
      this.nivelActual = 0;
      console.log("Nivel" + (this.nivelActual + 1));
      this.niveles.forEach((nivel) => {
        nivel.ReiniciarNivel();
      });
      this.niveles[this.nivelActual].pantallaDeJuego.scene.wake(
        "Nivel" + (this.nivelActual + 1)
      );
    }
  }

  public get nivelActual(): number {
    return this._nivelActual;
  }

  public set nivelActual(value: number) {
    this._nivelActual = value;
  }

  public get onClick(): boolean {
    return this._onClick;
  }

  public set onClick(value: boolean) {
    this._onClick = value;
  }

  public get puntoInicialX(): number {
    return this._puntoInicialX;
  }

  public set puntoInicialX(value: number) {
    this._puntoInicialX = value;
  }

  public get puntoInicialY(): number {
    return this._puntoInicialY;
  }

  public set puntoInicialY(value: number) {
    this._puntoInicialY = value;
  }

  public get distancia(): number {
    return this._distancia;
  }

  public set distancia(value: number) {
    this._distancia = value;
  }

  public get puntoFinalX(): number {
    return this._puntoFinalX;
  }

  public set puntoFinalX(value: number) {
    this._puntoFinalX = value;
  }

  public get puntoFinalY(): number {
    return this._puntoFinalY;
  }

  public set puntoFinalY(value: number) {
    this._puntoFinalY = value;
  }

  public get residuoSeleccionado(): Residuo | undefined {
    return this._residuoSeleccionado;
  }

  public set residuoSeleccionado(value: Residuo | undefined) {
    this._residuoSeleccionado = value;
  }

  public get cHud(): CHud {
    return this._cHud;
  }

  public set cHud(value: CHud) {
    this._cHud = value;
  }

  public get residuoAnterior(): Residuo | undefined {
    return this._residuoAnterior;
  }

  public set residuoAnterior(value: Residuo | undefined) {
    this._residuoAnterior = value;
  }

  public get preparadoParaLanzar(): boolean {
    return this._preparadoParaLanzar;
  }

  public set preparadoParaLanzar(value: boolean) {
    this._preparadoParaLanzar = value;
  }
}
