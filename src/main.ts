import Phaser from 'phaser'
//import HelloWorldScene from './scenes/HelloWorldScene';
import Carga from './scenes/View/Carga'
import Configuracion from './scenes/View/Configuracion'
import Creditos from './scenes/View/Creditos'
import Juego from './scenes/View/Juego'
import MenuPrincipal from './scenes/View/MenuPrincipal'
import Tienda from './scenes/View/Tienda'
import ModoTrivia from './scenes/View/ModoTrivia'
import Pruebas from './scenes/View/Pruebas'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 2920,
        height: 1080
    },
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 700 },
			debug: true,
		}
	},
	scene: [Carga, Configuracion, Creditos, Juego, MenuPrincipal, Tienda, ModoTrivia, Pruebas]
}
export default new Phaser.Game(config)

//npm run start