import Phaser from "phaser";
import Carga from "./View/Carga";
import Configuracion from "./View/Configuracion";
import Cargando from "./View/Cargando";
import Creditos from "./View/Creditos";
import Juego from "./View/Juego";
import MenuPrincipal from "./View/MenuPrincipal";
import Tienda from "./View/Tienda";
import Trivia from "./View/Trivia";
import Hud from "./View/Hud";
import Nivel1 from "./View/Nivel1";
import Nivel2 from "./View/Nivel2";
import VentanaVolver from "./View/VentanaVolver";
import FinDelJuego from "./View/FinDelJuego";
import Nivel4 from "./View/Nivel4";
import Nivel3 from "./View/Nivel3";
import Logo from "./View/Logo";
import Musica from "./View/Musica";

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
      debug: false,
    },
  },
  scene: [
    Logo,
    Cargando,
    Carga,
    Configuracion,
    Creditos,
    Juego,
    MenuPrincipal,
    Tienda,
    Trivia,
    Nivel1,
    Nivel2,
    Nivel3,
    Nivel4,
    Hud,
    VentanaVolver,
    FinDelJuego,
    Musica,
  ],
};
export default new Phaser.Game(config);

//npm run start
