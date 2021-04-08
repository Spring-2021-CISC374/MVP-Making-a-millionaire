class Scene4 extends Phaser.Scene {
    constructor() {
        super("settingScene");
    }

    preload() {
        this.load.audio("click","sounds/goodclick.mp3");
    }

    create() {
        let config = this.game.config;

        this.clickSound = this.sound.add("click");
        
        this.backBtn = this.add.image("60", "25", "back_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.clickSound.play();
            this.input.on('pointerdown', () => this.scene.start('mainMenu'))
            this.clickSound.play();
        })

        this.add.text(350,150,"Settings", {
            font: "25px Arial", 
            fill: "yellow"
        });
        
        this.physics.world.setBoundsCollision();
    }
}