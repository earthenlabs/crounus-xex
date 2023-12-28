import Phaser from "phaser";

export default class HelloWorldScene extends Phaser.Scene {
  private platform?: Phaser.Physics.Arcade.StaticGroup;
  private player?: Phaser.Physics.Arcade.Sprite;
  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
  private stars?: Phaser.Physics.Arcade.Group;

  constructor() {
    super("hello-world");
  }

  preload() {
    this.load.image("sky", "/assets/sky.png");
    this.load.image("ground", "/assets/platform.png");
    this.load.image("star", "/assets/star.png");
    this.load.image("bomb", "/assets/bomb.png");
    this.load.spritesheet("dude", "/assets/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.add.image(0, 0, "sky").setOrigin(0, 0);

    this.platform = this.physics.add.staticGroup();

    const ground = this.platform.create(
      400,
      568,
      "ground"
    ) as Phaser.Physics.Arcade.Sprite;

    ground.setScale(2).refreshBody();

    this.platform.create(600, 400, "ground");
    this.platform.create(50, 250, "ground");
    this.platform.create(750, 220, "ground");

    this.player = this.physics.add.sprite(100, 450, "dude");

    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    this.physics.add.collider(this.player, this.platform);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.stars = this.physics.add.group({
      key: "star",
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 },
    });

    this.stars.children.iterate((c) => {
      const child = c as Phaser.Physics.Arcade.Image;
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });
    this.physics.add.collider(this.stars, this.platform);
    this.physics.add.overlap(this.player, this.stars, this.handleStar, undefined)
  }

  update() {
    if (this.cursors?.left.isDown) {
      this.player?.setVelocityX(-160);

      this.player?.anims.play("left", true);
    } else if (this.cursors?.right.isDown) {
      this.player?.setVelocityX(160);

      this.player?.anims.play("right", true);
    } else {
      this.player?.setVelocityX(0);

      this.player?.anims.play("turn");
    }

    if (this.cursors?.up.isDown && this.player?.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }

  handleStar( _: Phaser.GameObjects.GameObject, star: Phaser.GameObjects.GameObject) {
    const s = star as Phaser.Physics.Arcade.Image
    s.disableBody(true, true)
  }
}
