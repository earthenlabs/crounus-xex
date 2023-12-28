import Phaser from "phaser";

export default class PreLoadScene extends Phaser.Scene {

  constructor() {
    super("preload");
  }

  preload() {
    this.load.image("background", "/assets/background.png");
    this.load.image("board", "/assets/GUI/resultBoard.png");
    this.load.image("boardBorder", "/assets/GUI/boardBorder.png");
    this.load.image("boardBackground", "/assets/GUI/board2.png");
    this.load.image("button", "/assets/GUI/button2.png");
    this.load.image("chest", "/assets/GUI/chest.webp");

    this.load.spritesheet("death", "/assets/character/deathWithEffect.png", {
      frameWidth: 140,
      frameHeight: 93,
    });

    this.load.spritesheet("demon", "/assets/character/demonScale.png", {
      frameWidth: 160,
      frameHeight: 160,
    });

    this.load.spritesheet(
      "skeletonIdle",
      "/assets/character/skeleton/idleScale.png",
      {
        frameWidth: 48,
        frameHeight: 64,
      }
    );

    this.load.spritesheet(
      "skeletonWalk",
      "/assets/character/skeleton/walkScale.png",
      {
        frameWidth: 44,
        frameHeight: 64,
      }
    );

    this.load.spritesheet(
      "skeletonAttack",
      "/assets/character/skeleton/attackScale.png",
      {
        frameWidth: 86,
        frameHeight: 74,
      }
    );

    this.load.spritesheet(
      "skeletonDeath",
      "/assets/character/skeleton/deathScale.png",
      {
        frameWidth: 66,
        frameHeight: 64,
      }
    );

  }

  create() {
    this.loadAnimation()
    const startGame = parseInt(localStorage.getItem('startGame') || '1')
    if(startGame) {
      this.scene.start('GuideScene')
    }
    else {
      this.scene.start('ResultScene')
    }
  }

  update() {
  }

  
  loadAnimation() {

    this.anims.create({
      key: "demonDeath",
      frames: this.anims.generateFrameNumbers("demon", { start: 92, end: 115 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "demonAttack",
      frames: this.anims.generateFrameNumbers("demon", { start: 46, end: 55 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "deathAttack",
      frames: this.anims.generateFrameNumbers("death", { start: 16, end: 24 }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: "deathDeath",
      frames: this.anims.generateFrameNumbers("death", { start: 27, end: 38 }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: "deathIdle",
      frames: this.anims.generateFrameNumbers("death", { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "deathWalk",
      frames: this.anims.generateFrameNumbers("death", { start: 8, end: 15 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "demonIdle",
      frames: this.anims.generateFrameNumbers("demon", { start: 0, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "demonWalk",
      frames: this.anims.generateFrameNumbers("demon", { start: 23, end: 27 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "skeletonIdle",
      frames: this.anims.generateFrameNumbers("skeletonIdle", {
        start: 0,
        end: 10,
      }),
      frameRate: 11,
      repeat: -1,
    });

    this.anims.create({
      key: "skeletonWalk",
      frames: this.anims.generateFrameNumbers("skeletonWalk", {
        start: 0,
        end: 13,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "skeletonAttack",
      frames: this.anims.generateFrameNumbers("skeletonAttack", {
        start: 0,
        end: 17,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "skeletonDeath",
      frames: this.anims.generateFrameNumbers("skeletonDeath", {
        start: 0,
        end: 14,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

}
