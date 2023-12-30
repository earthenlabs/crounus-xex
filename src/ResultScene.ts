import Phaser from "phaser";
import { CharacterBrain } from "./CharacterBrain";
import {
  DEMON_BODY_HEIGHT,
  DEMON_BODY_OFFSET_X,
  DEMON_BODY_OFFSET_Y,
  DEMON_BODY_WIDTH_IDLE,
} from "./const/Character";
import { WINDOW_WIDTH } from "./const/Game";
import { CharacterName } from "./enums/CharacterState";
import * as _ from "lodash-es"

export default class ResultScene extends Phaser.Scene {
  private skeleton?: Phaser.Physics.Arcade.Sprite;
  private death?: Phaser.Physics.Arcade.Sprite;
  private demon?: Phaser.Physics.Arcade.Sprite;

  private ground?: Phaser.Physics.Arcade.StaticGroup;

  private isWin?: boolean = false;

  private winText?: Phaser.GameObjects.Text;
  private rewardText?: Phaser.GameObjects.Text;
  private backButton?: Phaser.GameObjects.Sprite;

  private deathBrain?: CharacterBrain;
  private skeletonBrain?: CharacterBrain;
  private demonBrain?: CharacterBrain;

  private winner?: number;

  constructor() {
    super("ResultScene");
  }

  preload() {
    this.cameras.main.fadeIn(2000, 0, 0, 0, () => {});
  }

  create() {
    this.add.image(0, 0, "background").setOrigin(0, 0);

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

    const winnerGround = this.ground.create(
      0,
      300,
      undefined,
      undefined,
      false
    ) as Phaser.Physics.Arcade.Sprite;

    winnerGround.displayHeight = 10;
    winnerGround.displayWidth = 1280;
    winnerGround.setOrigin(0, 0);
    winnerGround.refreshBody();

    const board = this.add.sprite(640, 300, "boardBackground");
    board.setScale(0.5);

    this.backButton = this.add.sprite(640, 380, "button").setInteractive();
    this.backButton.setScale(0.4);

    this.winText = this.add.text(580, 200, "You've Lost!", {
      fontFamily: "customFont",
      fontSize: "12px",
      // fontStyle: "600",
      color: "#000000",
    });

    this.rewardText = this.add.text(550, 332.5, "Rewards:      0 XEX", {
      fontFamily: "customFont",
      fontSize: "12px",
      // fontStyle: "600",
      color: "#000000",
    });

    const chest = this.add.sprite(530, 337.5, "chest");
    chest.setScale(0.15);

    this.add.text(615, 375, "Back", {
      fontFamily: "customFont",
      fontSize: "14px",
      // fontStyle: "600",
      color: "#ffffff",
    });

    this.skeleton = this.physics.add.sprite(
      Phaser.Math.Between(200, WINDOW_WIDTH - 200),
      580,
      "skeletonAttack"
    );
    this.death = this.physics.add.sprite(
      Phaser.Math.Between(200, WINDOW_WIDTH - 200),
      565,
      "death"
    );
    this.demon = this.physics.add.sprite(
      Phaser.Math.Between(200, WINDOW_WIDTH - 200),
      565,
      "demon"
    );
    this.demon.body.setSize(DEMON_BODY_WIDTH_IDLE, DEMON_BODY_HEIGHT);
    this.demon.body.setOffset(DEMON_BODY_OFFSET_X, DEMON_BODY_OFFSET_Y);

    // this.winner = parseInt(localStorage.getItem("winner") || "-1");
    const theChosenOne = parseInt(localStorage.getItem("theChosenOne") || "-1");
    const isWin = localStorage.getItem("isWin") || "false"
    this.winner = this.winnerHandle(isWin, theChosenOne)

    this.physics.add.collider(
      [this.death, this.skeleton, this.demon],
      this.ground
    );

    switch (this.winner) {
      case 0:
        this.death?.setX(605);
        this.death?.setY(255);
        break;
      case 1:
        this.demon?.setX(650);
        this.demon?.setY(250);
        break;
      case 2:
        this.skeleton?.setX(645);
        this.skeleton?.setY(260);
      default:
        break;
    }

    if (this.winner == theChosenOne) {
      this.isWin = true;
      this.winText.text = "You've Won! ";
      const winAmount = localStorage.getItem("winAmount") || "0";
      this.rewardText.text = `Rewards: ${winAmount} XEX`;
    }

    this.deathBrain = new CharacterBrain(this.death, CharacterName.Death);

    this.skeletonBrain = new CharacterBrain(
      this.skeleton,
      CharacterName.Skeleton
    );

    this.demonBrain = new CharacterBrain(this.demon, CharacterName.Demon);

    this.backButtonHandle();
  }

  update() {
    switch (this.winner) {
      case 0:
        if (this.isWin) {
          this.death?.anims.play("deathDeath", true);
        } else {
          this.death?.anims.play("deathAttack", true);
        }
        this.demonBrain?.move();
        this.skeletonBrain?.move();
        break;
      case 1:
        if (this.isWin) {
          this.demon?.anims.play("demonDeath", true);
        } else {
          this.demon?.anims.play("demonAttack", true);
        }
        this.deathBrain?.move();
        this.skeletonBrain?.move();
        break;
      case 2:
        if (this.isWin) {
          this.skeleton?.anims.play("skeletonDeath", true);
        } else {
          this.skeleton?.anims.play("skeletonAttack", true);
        }
        this.deathBrain?.move();
        this.demonBrain?.move();
        break;
      default:
        break;
    }
  }

  backButtonHandle() {
    this.backButton?.on(
      "pointerdown",
      () => {
        this.backButton?.setAlpha(0.5);
        this.time.delayedCall(300, () => {
          this.backButton?.setAlpha(1);
          window.location.replace("/fight/index.html");
        });
      },
      this
    );
  }

  // handle when user would win
  winnerHandle(isWin: string, theChosenOne: number) {
    if(isWin == "true") {
      return theChosenOne
    }
    let characterArr = [0, 1, 2]
    _.remove(characterArr, (n) =>{
      return n == theChosenOne
    })
    return Phaser.Math.RND.pick(characterArr)
  }
}
