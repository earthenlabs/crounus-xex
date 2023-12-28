import Phaser from "phaser";
import { CharacterBrain } from "./CharacterBrain";
import {
  DEATH_BODY_HEIGHT,
  DEATH_BODY_WIDTH_ATTACK,
  DEATH_SCALE,
  DEMON_BODY_HEIGHT,
  DEMON_BODY_OFFSET_X,
  DEMON_BODY_OFFSET_Y,
  DEMON_BODY_WIDTH_IDLE,
  SKELETON_BODY_HEIGHT,
  SKELETON_BODY_WIDTH_ATTACK,
} from "./const/Character";
import { CharacterName } from "./enums/CharacterState";
import { animateText } from "./utils/TextAnimation";

export default class GuideScene extends Phaser.Scene {
  private ground?: Phaser.Physics.Arcade.StaticGroup;

  private skeleton?: Phaser.Physics.Arcade.Sprite;
  private death?: Phaser.Physics.Arcade.Sprite;
  private demon?: Phaser.Physics.Arcade.Sprite;

  private deathBrain?: CharacterBrain;
  private skeletonBrain?: CharacterBrain;
  private demonBrain?: CharacterBrain;

  constructor() {
    super("GuideScene");
  }

  preload() {
    // this.load.image("background", "/assets/background.png");
    // this.load.image("ground", "/assets/platform.png");
    // this.load.spritesheet("death", "/assets/character/deathWithEffect.png", {
    //   frameWidth: 140,
    //   frameHeight: 93,
    // })
    // this.load.spritesheet("knightIdle", "/assets/character/knight/idle.png", {
    //   frameWidth: 100,
    //   frameHeight: 64,
    // })
    // this.load.spritesheet("demon", "/assets/character/demonScale.png", {
    //   frameWidth: 160,
    //   frameHeight: 160,
    // })
    // this.load.spritesheet("skeletonIdle", "/assets/character/skeleton/idleScale.png", {
    //   frameWidth: 48,
    //   frameHeight: 64,
    // })
    // this.load.spritesheet("skeletonWalk", "/assets/character/skeleton/walkScale.png", {
    //   frameWidth: 44,
    //   frameHeight: 64,
    // })
    // this.load.spritesheet("skeletonAttack", "/assets/character/skeleton/attackScale.png", {
    //   frameWidth: 86,
    //   frameHeight: 74,
    // })
  }

  create() {
    this.add.image(0, 0, "background").setOrigin(0, 0);

    const text = this.add.text(500, 360, "", {
      fontSize: "16px",
      fontStyle: "400",
      fontFamily: "customFont",
    });

    const guideText = [
      "Welcome, fearless adventurer!    ",
      "In Crounus XEX, your mission is to \nbattle monsters, earn XEX, and rank up.   ",
      "Get ready for some exciting challenges!   ",
    ];

    animateText(this, text, guideText[0], {
      delay: 100,
      callback: () => {
        text.text = ""
        text.setX(336)
        console.log(text.width, text.height);
        animateText(this, text, guideText[1], {
          delay: 100,
          callback: () => {
          text.text = ""
          text.setX(336)
          console.log(text.width, text.height);
            animateText(this, text, guideText[2], {
              delay: 100,
              callback: () => {},
            });
          },
        });
      },
    });

    this.ground = this.physics.add.staticGroup();
    const ground = this.ground.create(
      0,
      612,
      undefined,
      undefined,
      false
    ) as Phaser.Physics.Arcade.Sprite;
    ground.displayHeight = 10;
    ground.displayWidth = 1280;
    this.ground.setOrigin(0, 0);
    ground.refreshBody();

    this.skeleton = this.physics.add
      .sprite(200, 550, "skeletonIdle")
      .setOrigin(0, 0);
    this.skeleton.body.setSize(
      SKELETON_BODY_WIDTH_ATTACK,
      SKELETON_BODY_HEIGHT
    );

    this.death = this.physics.add.sprite(500, 500, "death").setOrigin(0, 0);
    this.death.setScale(DEATH_SCALE);
    this.death.body.setSize(DEATH_BODY_WIDTH_ATTACK, DEATH_BODY_HEIGHT);

    this.demon = this.physics.add.sprite(900, 480, "demon").setOrigin(0, 0);
    this.demon.body.setSize(DEMON_BODY_WIDTH_IDLE, DEMON_BODY_HEIGHT);
    this.demon.body.setOffset(DEMON_BODY_OFFSET_X, DEMON_BODY_OFFSET_Y);
    this.demon.flipX = false;

    this.physics.add.collider(
      [this.skeleton, this.death, this.demon],
      this.ground
    );

    this.deathBrain = new CharacterBrain(this.death, CharacterName.Death);

    this.skeletonBrain = new CharacterBrain(
      this.skeleton,
      CharacterName.Skeleton
    );

    this.demonBrain = new CharacterBrain(this.demon, CharacterName.Demon);

    this.time.delayedCall(15000, () => {
      this.cameras.main.fadeOut(1000, 0, 0, 0, (_: any, progress: any) => {
        if (progress == 1) {
          // this.scene.start("ResultScene");
          localStorage.setItem("startGame", "0");
          window.location.replace("/fight/index.html");
        }
      });
    });

    this.input.once("pointerdown", () => {
      this.cameras.main.fadeOut(1000, 0, 0, 0, (_: any, progress: any) => {
        if (progress == 1) {
          // this.scene.start("ResultScene");
          localStorage.setItem("startGame", "0");
          window.location.replace("/fight/index.html");
        }
      });
    });
  }

  update() {
    this.deathBrain?.move();
    this.skeletonBrain?.move();
    this.demonBrain?.move();
  }
}
