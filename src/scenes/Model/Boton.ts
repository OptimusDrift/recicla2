import Phaser from "phaser";

export default class Boton {
    private _texto: any;
    private _boton: any;

    constructor(texto: any, boton: any) {
        this._texto = texto;
        this.texto.setDepth(1);
        this._boton = boton;
        this.texto.setFontSize(20);
        this.texto.setOrigin(0.5);
        this.ResetearBoton();
    }

    //Al pasar el mouse por arriba el boton y el texto se agranda.
    private PointerOver(){
        this.boton.setScale(1.02);
        this.texto.setFontSize(21);
    }

    //Cuando el mouse sale del objeto el botón y el texto vuelve a su escala original.
    private PointerOut(){
        this.boton.setScale(1);
        this.texto.setFontSize(20);
    }

    //Cuando el mouse es precionado el botón y el texto se encogen.
    private PointerDown(){
        this.boton.setScale(0.98);
        this.texto.setFontSize(19);
    }

    //Cuando el botón queda sin una funcionalidad, es pausado, quitando su listener.
    public PausarBoton(){
        this.boton.setScale(1);
        this.texto.setFontSize(20);
        this.boton.setInteractive(false);
        this.boton.removeAllListeners();
    }

    //Si el botón necesita una funcionalidad se le setean los listeners.
    private ResetearBoton(){
        this.boton.setInteractive();
        this.boton.on('pointerover',()=> this.PointerOver());
        this.boton.on('pointerout',()=> this.PointerOut());
        this.boton.on('pointerdown',()=> this.PointerDown());
    }

    //El color del botón cambia a verde.
    public BotonCorrecto(){
        this.boton.setTint(0x3A5311);
        this.PausarBoton();
    }

    //El color del botón cambia a rojo.
    public BotonIncorecto(){
        this.boton.setTint(0xd40032);
        this.PausarBoton();
    }

    //Getters and setters
    public get texto(): any {
        return this._texto; 
    }

    public set texto(value: any){
        this._texto = value;
    }

    public get boton(): any {
        return this._boton;
    }

    public set boton(v :any){
        this._boton = v;
    }
}