import Phaser from "phaser";
//import HelloWorldScene from './HelloWorldScene';
import Carga from "./View/Carga";
import Configuracion from "./View/Configuracion";
import Cargando from "./View/Cargando";
import Creditos from "./View/Creditos";
import Juego from "./View/Juego";
import MenuPrincipal from "./View/MenuPrincipal";
import Tienda from "./View/Tienda";
import Trivia from "./View/Trivia";
import Pruebas from "./View/Pruebas";
import Hud from "./View/Hud";
import Nivel1 from "./View/Nivel1";
import Nivel2 from "./View/Nivel2";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "phaser-example",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 250 },
      debug: true,
    },
  },
  scene: [
    Cargando,
    Carga,
    Configuracion,
    Creditos,
    Juego,
    MenuPrincipal,
    Tienda,
    Trivia,
    Pruebas,
    Nivel1,
    Nivel2,
    Hud,
  ],
};
export default new Phaser.Game(config);

//npm run start
