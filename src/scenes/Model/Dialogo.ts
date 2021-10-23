import Pregunta from "./Pregunta";
import arrayShuffle from "array-shuffle";

export default class Dialogo {
  private _dialogosTutorial: Array<string>;
  private _dialogosNivel: Array<string>;
  private _preguntasModoHistoria: Array<Pregunta>;
  private _preguntasModoTrivia: Array<Pregunta>;

  constructor(
    dialogosTutorial: Array<string>,
    dialogoNivel: Array<string>,
    preguntasModoHistoria: Array<Pregunta>,
    preguntasModoTrivia: Array<Pregunta>
  ) {
    this._dialogosTutorial = dialogosTutorial;
    this._dialogosNivel = dialogoNivel;
    this._preguntasModoHistoria = preguntasModoHistoria;
    this._preguntasModoTrivia = preguntasModoTrivia;
  }

  public RandomizarRerspuestas() {
    try {
      this.preguntasModoTrivia = arrayShuffle(this.preguntasModoTrivia);
    } catch (error) {
      console.error("Error al intentar randomizar las respuestas" + error);
    }
  }

  //Getters and setters

  public set dialogosTutorial(v: Array<string>) {
    this._dialogosTutorial = v;
  }

  public get dialogosTutorial(): Array<string> {
    return this._dialogosTutorial;
  }

  public set dialogosNivel(v: Array<string>) {
    this._dialogosNivel = v;
  }

  public get dialogosNivel(): Array<string> {
    return this._dialogosNivel;
  }

  public set preguntasModoHistoria(v: Array<Pregunta>) {
    this._preguntasModoHistoria = v;
  }

  public get preguntasModoHistoria(): Array<Pregunta> {
    return this._preguntasModoHistoria;
  }

  public set preguntasModoTrivia(v: Array<Pregunta>) {
    this._preguntasModoTrivia = v;
  }

  public get preguntasModoTrivia(): Array<Pregunta> {
    return this._preguntasModoTrivia;
  }
}
