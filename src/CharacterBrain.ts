import Phaser from "phaser";
import {
  CHARACTER_VELOCITY,
  DEATH_BODY_HEIGHT,
  DEATH_BODY_OFFSET_X_IDLE,
  DEATH_BODY_OFFSET_X_IDLE_FLIP_X,
  DEATH_BODY_OFFSET_Y,
  DEATH_BODY_WIDTH_IDLE,
  DEATH_FLIPX_MOVING_OFFSET,
  DEMON_BODY_HEIGHT,
  DEMON_BODY_OFFSET_X,
  DEMON_BODY_OFFSET_Y,
  DEMON_BODY_WIDTH_IDLE,
  SKELETON_BODY_HEIGHT,
  SKELETON_BODY_OFFSET_X,
  SKELETON_BODY_OFFSET_X_FLIP_X,
  SKELETON_BODY_OFFSET_Y,
  SKELETON_BODY_WIDTH_IDLE,
  SKELETON_FLIPX_MOVING_OFFSET,
} from "./const/Character";
import { WINDOW_WIDTH } from "./const/Game";
import {
  CharacterName,
  CharacterSide,
  CharacterState,
} from "./enums/CharacterState";

export class CharacterBrain {
  private character: Phaser.Physics.Arcade.Sprite;
  private name: CharacterName | string;
  private state: CharacterState = CharacterState.Walk;
  private side: CharacterSide = CharacterSide.Right;
  private movingDistance: number = 0;

  constructor(character: Phaser.Physics.Arcade.Sprite, characterName: string) {
    this.character = character;
    this.name = characterName;
    this.randomSide()
  }

  randomSide() {
    this.side = Phaser.Math.Between(CharacterSide.Left, CharacterSide.Right);
  }

  randomMovingSide() {
    if(this.movingDistance >= 50) {
      this.movingDistance = 0
      this.randomSide()
    }
  }

  move() {
    this.movingDistance += 1
    switch (this.state) {
      case CharacterState.Walk:
        this.character.setVelocityX(160);
        this.character.anims.play(`${this.name}Walk`, true);
        this.handleAnimation();
        break;
      default:
        this.state = CharacterState.Idle;
        this.character.anims.play(`${this.name}Idle`, true);
        this.handleAnimation();
    }
  }

  handleAnimation() {
    let offsetX = 0;
    let offsetY = 0;
    let bodyWidth = 0;
    let bodyHeight = 0;
    let velocity = 1;
    let flipX = false;
    this.handleMoveOutWorld();
    switch (this.name) {
      case CharacterName.Death:
        offsetX = DEATH_BODY_OFFSET_X_IDLE;
        offsetY = DEATH_BODY_OFFSET_Y;
        bodyWidth = DEATH_BODY_WIDTH_IDLE;
        bodyHeight = DEATH_BODY_HEIGHT;

        // Death will flip when sprite is right side
        if (this.side == CharacterSide.Right) {
          flipX = true;
          offsetX = DEATH_BODY_OFFSET_X_IDLE_FLIP_X;
        }
        else {
          flipX = false
        }
        switch (this.state) {
          case CharacterState.Walk:
            velocity = this.side == CharacterSide.Right ? CHARACTER_VELOCITY : -CHARACTER_VELOCITY;
            break;
          default:
            if (this.side == CharacterSide.Right) {
              offsetX = DEATH_BODY_OFFSET_X_IDLE_FLIP_X;
            }
            velocity = 0;
            break;
        }
        break;
      case CharacterName.Skeleton:
        offsetX = SKELETON_BODY_OFFSET_X;
        offsetY = SKELETON_BODY_OFFSET_Y;
        bodyWidth = SKELETON_BODY_WIDTH_IDLE;
        bodyHeight = SKELETON_BODY_HEIGHT;

        // skeleton will flip when left side
        if (this.side == CharacterSide.Left) {
          flipX = true
          offsetX = SKELETON_BODY_OFFSET_X_FLIP_X;
        } else {
          flipX = false
        }

        switch (this.state) {
          case CharacterState.Walk:
            velocity = this.side == CharacterSide.Right ? CHARACTER_VELOCITY : -CHARACTER_VELOCITY;
            break;
          default:
            velocity = 0;
            break;
        }
        break;
      case CharacterName.Demon:
        offsetX = DEMON_BODY_OFFSET_X
        offsetY = DEMON_BODY_OFFSET_Y
        bodyWidth = DEMON_BODY_WIDTH_IDLE
        bodyHeight = DEMON_BODY_HEIGHT
        if (this.side == CharacterSide.Left) {
          flipX = true
        } else {
          flipX = false
        }

        switch (this.state) {
          case CharacterState.Walk:
            velocity = this.side == CharacterSide.Right ? CHARACTER_VELOCITY : -CHARACTER_VELOCITY;
            break;
          default:
            velocity = 0;
            break;
        }
        break;

    }
    this.character.setSize(bodyWidth, bodyHeight);
    this.character.setOffset(offsetX, offsetY);
    this.character.setVelocityX(velocity);
    this.character.flipX = flipX;
  }

  // handle character move out world
  handleMoveOutWorld() {
    if (
      (this.character.x + this.character.body.width >= WINDOW_WIDTH - 100 &&
        this.side == CharacterSide.Right) ||
      (this.character.x - this.character.body.width <= 0 &&
        this.side == CharacterSide.Left)
    ) {
      if (this.side == CharacterSide.Right) {
        this.side = CharacterSide.Left;
        if (this.name == CharacterName.Death) {
          this.character.setX(this.character.x - DEATH_FLIPX_MOVING_OFFSET);
        }
        if (this.name == CharacterName.Skeleton) {
          this.character.setX(this.character.x + SKELETON_FLIPX_MOVING_OFFSET);
        }
      } else {
        this.side = CharacterSide.Right;
        if (this.name == CharacterName.Death) {
          this.character.setX(this.character.x + DEATH_FLIPX_MOVING_OFFSET);
        }
        if (this.name == CharacterName.Skeleton) {
          this.character.setX(this.character.x + SKELETON_FLIPX_MOVING_OFFSET);
        }
      }
    }
  }
}
