class Scene3 extends Phaser.Scene {
    constructor() {
        super("shopScene");
    }

    create() {
        let config = this.game.config;
        
        this.backBtn = this.add.image("60", "25", "back_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.input.on('pointerdown', () => this.scene.start('mainMenu'))
        })

        
        this.physics.world.setBoundsCollision();
    }
}