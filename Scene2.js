class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    preload() {
        this.load.image("question_frame","assets/images/question_frame.png");
        this.load.image("question_frame_top","assets/images/question_frame_top.png");
        this.load.image("question_inside","assets/images/question_inside.png");
        this.load.audio("click","sounds/goodclick.mp3");
        this.load.image("background","graphics/background1.png");
    }

    create() {
        let config = this.game.config;

        this.questionAmount = 100;
        this.questionAmountRight = this.questionAmount*(1 + this.game.registry.get("streak") * 0.1)
        this.questionAmountWrong = this.questionAmount
        this.answered = 0;

        this.clickSound = this.sound.add("click");

        this.background = this.add.image(400,300,"background");
        
        /*
        this.menuBtn = this.add.image("60", "25", "menu_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            //this.game.registry.set("score", 30)
            this.clickSound.play();
            this.input.on('pointerdown', () => this.scene.start('mainMenu'))
            this.clickSound.play();
        })*/

        this.cashtext = this.add.text(662,13,"Cash:  "+this.game.registry.get("score"), {
            font: "22px Arial", 
            fill: "greenyellow",
            stroke: 'black',
            strokeThickness: 3
        });

        this.streaktext = this.add.text(662,50,"Streak:  "+this.game.registry.get("streak"), {
            font: "22px Arial", 
            fill: "greenyellow",
            stroke: 'black',
            strokeThickness: 3
        });

        this.question_frame_top = this.add.image("0","335","question_frame_top");
        this.question_frame_top.setOrigin(0,0);
        this.question_frame = this.add.image("0","445","question_frame");
        this.question_frame.setOrigin(0,0);

        this.clickSound = this.sound.add("click");

        //not sure if this line does anything
        this.cursorKeys = this.input.keyboard.createCursorKeys();

        this.game.registry.set("questionNumber",this.game.registry.get("questionNumber")+1);
    }

    update() {
        //this is an initial question, later we can change this
        var questionNumber = this.game.registry.get("questionNumber");
        var question = this.game.registry.get("questionBank")[questionNumber -1];

        if (questionNumber > 14) {
            //currently does not fully work
            this.scene.start('endScene')
        }

        this.add.text(330,10,"Question #" + questionNumber, {
            font: "28px Arial", 
            fill: "yellow",
            stroke: 'black',
            strokeThickness: 3})
        this.loadQuestion(question);
        
    }

    titleScreen = () => {
        if (this.scene !== undefined) {
            this.scene.start('mainMenu');
        }
    }

    loadQuestion(question) {
        //sets answer as "a" "b" "c" or "d"
        var answer = question[1];
        console.log(this.game.registry.get("questionNumber"))

        //handles a being correct
        if (answer == "a") {
            this.question_insideA = this.add.image("85","461","question_inside").setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.input.on('pointerdown', () => {if (this.answered <= 1) {this.add.text(5,100,"CORRECT", {
                    font: "158px Arial", 
                    fill: "green",
                    stroke: 'white',
                    strokeThickness: 3
                    })}})
                    //stuff to happen if right and chosen
                    this.answered++;
                    console.log("Score before: ", this.game.registry.get("score"))
                    this.game.registry.set("score", this.game.registry.get("score")+this.questionAmountRight)
                    console.log("Score after: ", this.game.registry.get("score"))
                    this.questionAmount = 0;
                    setTimeout(this.titleScreen,3000);
                    this.game.registry.set("investment", this.game.registry.get("investment")*1.05);
                    this.game.registry.set("streak",this.game.registry.get("streak") + 1);

            })
        //handles a being wrong
        } else {
            this.question_insideA = this.add.image("85","461","question_inside").setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.input.on('pointerdown', () => {if (this.answered <= 1) {this.add.text(90,100,"WRONG", {
                    font: "158px Arial", 
                    fill: "red",
                    stroke: 'white',
                    strokeThickness: 3
                    })}})
                    //stuff to happen if wrong and chosen
                    this.answered++;
                    console.log("Score: ", this.game.registry.get("score"))
                    this.game.registry.set("score", this.game.registry.get("score")-this.questionAmountWrong)
                    console.log("Score: ", this.game.registry.get("score"))
                    this.questionAmount = 0;
                    setTimeout(this.titleScreen,5000);
                    this.game.registry.set("investment", this.game.registry.get("investment")*1.05);
                    this.game.registry.set("streak",0);

            })
        }
        this.question_insideA.setOrigin(0,0);

        if (answer == "b") {
            this.question_insideB = this.add.image("445","461","question_inside").setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.input.on('pointerdown', () => {if (this.answered <= 1) {this.add.text(5,100,"CORRECT", {
                    font: "158px Arial", 
                    fill: "green",
                    stroke: 'white',
                    strokeThickness: 3
                })}})
                    this.answered++;
                    console.log("Score before: ", this.game.registry.get("score"))
                    this.game.registry.set("score", this.game.registry.get("score")+this.questionAmountRight)
                    console.log("Score after: ", this.game.registry.get("score"))
                    this.questionAmount = 0;
                    setTimeout(this.titleScreen,3000);
                    this.game.registry.set("investment", this.game.registry.get("investment")*1.05);
                    this.game.registry.set("streak",this.game.registry.get("streak") + 1);
                    
            })
        } else {
                this.question_insideB = this.add.image("445","461","question_inside").setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.input.on('pointerdown', () => {if (this.answered <= 1) {this.add.text(90,100,"WRONG", {
                    font: "158px Arial", 
                    fill: "red",
                    stroke: 'white',
                    strokeThickness: 3
                    })}})
                    this.answered++;
                    console.log("Score: ", this.game.registry.get("score"))
                    this.game.registry.set("score", this.game.registry.get("score")-this.questionAmountWrong)
                    console.log("Score: ", this.game.registry.get("score"))
                    this.questionAmount = 0;
                    setTimeout(this.titleScreen,5000);
                    this.game.registry.set("investment", this.game.registry.get("investment")*1.05);
                    this.game.registry.set("streak",0);
            })
        }
        this.question_insideB.setOrigin(0,0);

        if (answer == "c") {
            this.question_insideC = this.add.image("85","526","question_inside").setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.input.on('pointerdown', () => {if (this.answered <= 1) {this.add.text(5,100,"CORRECT", {
                    font: "158px Arial", 
                    fill: "green",
                    stroke: 'white',
                    strokeThickness: 3
                    })}})
                    this.answered++;
                    console.log("Score before: ", this.game.registry.get("score"))
                    this.game.registry.set("score", this.game.registry.get("score")+this.questionAmountRight)
                    console.log("Score after: ", this.game.registry.get("score"))
                    this.questionAmount = 0;
                    setTimeout(this.titleScreen,3000);
                    this.game.registry.set("investment", this.game.registry.get("investment")*1.05);
                    this.game.registry.set("streak",this.game.registry.get("streak") + 1);
            })
        } else {
                this.question_insideC = this.add.image("85","526","question_inside").setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.input.on('pointerdown', () => {if (this.answered <= 1) {this.add.text(90,100,"WRONG", {
                    font: "158px Arial", 
                    fill: "red",
                    stroke: 'white',
                    strokeThickness: 3
                    })}})
                    this.answered++;
                    console.log("Score: ", this.game.registry.get("score"))
                    this.game.registry.set("score", this.game.registry.get("score")-this.questionAmountWrong)
                    console.log("Score: ", this.game.registry.get("score"))
                    this.questionAmount = 0;
                    setTimeout(this.titleScreen,5000);
                    this.game.registry.set("investment", this.game.registry.get("investment")*1.05);
                    this.game.registry.set("streak",0);
            })
        }
        this.question_insideC.setOrigin(0,0);

        if (answer == "d") {
            this.question_insideD = this.add.image("445","526","question_inside").setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.input.on('pointerdown', () => {if (this.answered <= 1) {this.add.text(5,100,"CORRECT", {
                    font: "158px Arial", 
                    fill: "green",
                    stroke: 'white',
                    strokeThickness: 3
                    })}})
                    this.answered++;
                    console.log("Score before: ", this.game.registry.get("score"))
                    this.game.registry.set("score", this.game.registry.get("score")+this.questionAmountRight)
                    console.log("Score after: ", this.game.registry.get("score"))
                    this.questionAmount = 0;
                    setTimeout(this.titleScreen,3000);
                    this.game.registry.set("investment", this.game.registry.get("investment")*1.05);
                    this.game.registry.set("streak",this.game.registry.get("streak") + 1);
            })
        } else {
                this.question_insideD = this.add.image("445","526","question_inside").setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.input.on('pointerdown', () => {if (this.answered <= 1) {this.add.text(90,100,"WRONG", {
                    font: "158px Arial", 
                    fill: "red",
                    stroke: 'white',
                    strokeThickness: 3
                    })}})
                    this.answered++;
                    console.log("Score before: ", this.game.registry.get("score"))
                    this.game.registry.set("score", this.game.registry.get("score")-this.questionAmountWrong)
                    console.log("Score after: ", this.game.registry.get("score"))
                    this.questionAmount = 0;
                    setTimeout(this.titleScreen,5000);
                    this.game.registry.set("investment", this.game.registry.get("investment")*1.05);
                    this.game.registry.set("streak",0);
            })
        }
        this.question_insideD.setOrigin(0,0);

        this.cashtext.setText("Cash:  "+this.game.registry.get("score"));

        this.add.text(117,372,question[0], {
            font: "25px Helvetica", 
            fill: "yellow",
            stroke: 'black',
            strokeThickness: 1
        });
        this.add.text(85,468,question[2], {
            font: "20px Arial", 
            fill: "yellow",
            stroke: 'black',
            strokeThickness: 1
        });
        this.add.text(445,468,question[3], {
            font: "20px Arial", 
            fill: "yellow",
            stroke: 'black',
            strokeThickness: 1
        });
        this.add.text(85,533,question[4], {
            font: "20px Arial", 
            fill: "yellow",
            stroke: 'black',
            strokeThickness: 1
        });
        this.add.text(445,533,question[5], {
            font: "20px Arial", 
            fill: "yellow",
            stroke: 'black',
            strokeThickness: 1
        });
    }

}