import Recipiente from './Recipiente'

export default class RecipienteVerde extends Recipiente {
    constructor(sprite : string, physics : any, x : number, y : number, particulasCorrecto: any, particulasIncorrecta: any) {
        super(sprite, physics, x, y, "verde", particulasCorrecto, particulasIncorrecta);
    }
}