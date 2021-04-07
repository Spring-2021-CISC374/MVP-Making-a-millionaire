class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    preload() {
        this.load.image("question_frame","assets/images/question_frame.png");
        this.load.image("question_frame_top","assets/images/question_frame_top.png");
        this.load.image("question_inside","assets/images/question_inside.png");
    }

    create() {
        let config = this.game.config;
    
        this.menuBtn = this.add.image("60", "25", "menu_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.game.registry.set("score", 30)
            this.input.on('pointerdown', () => this.scene.start('mainMenu'))
        })

        this.question_frame_top = this.add.image("0","335","question_frame_top");
        this.question_frame_top.setOrigin(0,0);
        this.question_frame = this.add.image("0","445","question_frame");
        this.question_frame.setOrigin(0,0);
        this.question_insideA = this.add.image("85","461","question_inside").setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.input.on('pointerdown', () => this.scene.resume('mainMenu'))
        })
        this.question_insideA.setOrigin(0,0);
        this.question_insideB = this.add.image("445","461","question_inside").setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.input.on('pointerdown', () => this.scene.start('mainMenu'))
        })
        this.question_insideB.setOrigin(0,0);
        this.question_insideC = this.add.image("85","526","question_inside").setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.input.on('pointerdown', () => this.scene.start('mainMenu'))
        })
        this.question_insideC.setOrigin(0,0);
        this.question_insideD = this.add.image("445","526","question_inside").setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.input.on('pointerdown', () => this.scene.start('mainMenu'))
        })
        this.question_insideD.setOrigin(0,0);

        //not sure if this line does anything
        this.cursorKeys = this.input.keyboard.createCursorKeys();
    }

    update() {
        this.displayQuestion("Which of these is a financial term?","Global Variable","Compound Interest","Convergent Evolution","Three Pointer");
    }

    displayQuestion(question,aA,aB,aC,aD) {
        this.add.text(117,372,question, {
            font: "24px Arial", 
            fill: "yellow"
        });
        this.add.text(85,468,aA, {
            font: "20px Arial", 
            fill: "yellow"
        });
        this.add.text(445,468,aB, {
            font: "20px Arial", 
            fill: "yellow"
        });
        this.add.text(85,533,aC, {
            font: "20px Arial", 
            fill: "yellow"
        });
        this.add.text(445,533,aD, {
            font: "20px Arial", 
            fill: "yellow"
        });
        console.log("Score: ", this.game.registry.get("score"))
        this.game.registry.set("score", 20)
        console.log("Score: ", this.game.registry.get("score"))
    }
}