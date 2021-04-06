class Scene3 extends Phaser.Scene {
    constructor() {
        super("additionalScene");
    }

    create() {
        let config = this.game.config;
        
        this.ship1 = this.add.sprite(config.width/2 -50, config.height/2,"ship");
        this.physics.world.setBoundsCollision();
    }
}