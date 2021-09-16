import Phaser from 'phaser'
//import HelloWorldScene from './scenes/HelloWorldScene';
import Carga from './scenes/View/Carga'
import Configuracion from './scenes/View/Configuracion'
import Creditos from './scenes/View/Creditos'
import Juego from './scenes/View/Juego'
import MenuPrincipal from './scenes/View/MenuPrincipal'
import Tienda from './scenes/View/Tienda'
import Trivia from './scenes/View/Trivia'
import Pruebas from './scenes/View/Pruebas'
import Nivel1 from './scenes/View/Nivel1'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [Carga, Configuracion, Creditos, Juego, MenuPrincipal, Tienda, Trivia, Pruebas, Nivel1]
}
export default new Phaser.Game(config)

//npm run start