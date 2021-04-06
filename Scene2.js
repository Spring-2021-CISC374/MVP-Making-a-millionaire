class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        let config = this.game.config;
        
        this.physics.world.setBoundsCollision();

        this.menuBtn = this.add.image("60", "25", "menu_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.input.on('pointerdown', () => this.scene.start('mainMenu'))
        })
        
        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate:20,
            repeat: -1
        });

        this.player = this.physics.add.sprite(config.width/2, config.height-200, "ship3");
        this.player.play("ship3_anim");
        
        this.cursorKeys = this.input.keyboard.createCursorKeys();

        this.add.text(20,500,"Arrow keys for left/right, up to stop", {
            font: "14px Arial", 
            fill: "yellow"
        });
    }
}