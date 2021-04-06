class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    preload() {
        this.load.image("question_frame","assets/images/question_frame.png");
    }

    create() {
        let config = this.game.config;
    
        this.menuBtn = this.add.image("60", "25", "menu_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.input.on('pointerdown', () => this.scene.start('mainMenu'))
        })

        this.question_frame = this.add.image("0","296","question_frame");
        this.question_frame.setOrigin(0,0);

        this.cursorKeys = this.input.keyboard.createCursorKeys();

        /*this.add.text(20,500,"This is sample text", {
            font: "14px Arial", 
            fill: "yellow"
        });*/
    }
}