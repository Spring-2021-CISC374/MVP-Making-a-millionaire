class Scene3 extends Phaser.Scene {
    constructor() {
        super("additionalScene");
    }

    create() {
        let config = this.game.config;
        
        this.ship1 = this.add.sprite(config.width/2 -50, config.height/2,"ship");

        this.button1 = this.add.image("60", "25", "back_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.input.on('pointerdown', () => this.scene.start('playGame'))
        })
        
        this.physics.world.setBoundsCollision();
    }
}