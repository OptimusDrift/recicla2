import Phaser from 'phaser'
import Residuo from './Model/Residuo'
//npm run start
export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {   
	    this.load.image('Atlas-0', 'assets/Atlas-0.png')

        this.load.tilemapTiledJSON('Nivel1TileMap', 'assets/Nivel1.json')

    }

    create()
    {
	const map = this.make.tilemap({ key: 'Nivel1TileMap' })

	const tileset = map.addTilesetImage('Atlas-0', 'Atlas-0')
	
	map.createStaticLayer('Capa de patrones 1', tileset)
    map.createStaticLayer('Capa de patrones 3', tileset)
	map.createStaticLayer('Capa de patrones 2', tileset)
    map.createStaticLayer('Capa de patrones 4', tileset)
    map.createStaticLayer('Capa de patrones 5', tileset)
    map.createStaticLayer('Capa de patrones 6', tileset)
    }
}
