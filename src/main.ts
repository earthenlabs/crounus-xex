import Phaser from "phaser";
import { GAME_GRAVITY, WINDOW_HEIGHT, WINDOW_WIDTH } from "./const/Game";
import GuideScene from "./GuideScene";

import HelloWorldScene from "./HelloWorldScene";
import PreLoadScene from "./PreLoadScene";
import ResultScene from "./ResultScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "app",
  width: WINDOW_WIDTH,
  height: WINDOW_HEIGHT,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: GAME_GRAVITY },
      debug: false,
    },
  },
  scene: [PreLoadScene, ResultScene, GuideScene, HelloWorldScene]
};

const phaserGame = new Phaser.Game(config);

export default phaserGame
