class Scene4 extends Phaser.Scene {
    constructor() {
        super("settingScene");
    }

    create() {
        let config = this.game.config;
        
        this.backBtn = this.add.image("60", "25", "back_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.input.on('pointerdown', () => this.scene.start('mainMenu'))
        })

        this.add.text(350,150,"Settings", {
            font: "25px Arial", 
            fill: "yellow"
        });

        this.add.text(350,250,"Settings", {
            font: "25px Arial", 
            fill: "yellow"
        });

        
        this.physics.world.setBoundsCollision();
    }
}