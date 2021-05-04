class Scene1 extends Phaser.Scene {
    constructor() {
        super("mainMenu");
    }

    preload() {

        this.load.image("back_btn","assets/images/back_btn.png");
        this.load.image("start_btn","assets/images/start_btn.png");
        this.load.image("menu_btn","assets/images/menu_btn.png");
        this.load.image("shop_btn","assets/images/shop_btn.png");
        this.load.image("invest_btn","assets/images/invest_btn.png");
        this.load.image("streak_img", "assets/images/x2resize.png");
        this.load.image("5050_img", "assets/images/5050resize.png");
        this.load.image("audience_img", "assets/images/audienceresize.png");
        this.load.image("settings_btn","assets/images/settings_btn.png");
        this.load.audio("click","sounds/goodclick.mp3");
        this.load.audio("backgroundMusic","sounds/suspense.mp3");
        
    }

    create() {
        /*
        let config = this.game.config;
        this.add.text(20,20,"Loading game...");
        this.scene.start("playGame");*/

        console.log("Scene 1 score: ", this.game.registry.get("score"));

        let config = this.game.config;
/*
        this.suspenseMusic = this.sound.add("backgroundMusic").play();
*/
        this.clickSound = this.sound.add("click");

        this.add.text(275,150,"Making a Millionaire", {
            font: "30px Arial", 
            fill: "yellow"
        });
        
        this.startBtn = this.add.image("400", "275", "start_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.input.on('pointerdown', () => this.scene.start('playGame'))
            this.clickSound.play();
        })

        this.shopBtn = this.add.image("400", "350", "shop_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.input.on('pointerdown', () => this.scene.start('shopScene'))
            this.clickSound.play();
        })

        this.settingsBtn = this.add.image("400", "425", "settings_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.input.on('pointerdown', () => this.scene.start('settingScene'))
            this.clickSound.play();
        })

        this.cashtext = this.add.text(662,13,"Cash:  "+this.game.registry.get("score"), {
            font: "22px Arial", 
            fill: "greenyellow",
            stroke: 'black',
            strokeThickness: 3
        });

        //prevents randomizing questions every lobby trip to avoid duplicates
        if (this.game.registry.get("questionNumber") == 0) {
            this.getQuestions();
        }

    }

    getQuestions() {
        // Is this an efficent way to code in the questions? Absolitely not.
        // Is it an effective way? YES.

        this.q1 = ["Which of these is a financial term?",
        "b",
        "Global Variable",
        "Compound Interest",
        "Convergent Evolution",
        "Three Pointer"];

        this.q2 = ["This term represents partial ownership of a company",
        "a",
        "Stocks",
        "Bonds",
        "Assets",
        "Liabilities"];

        this.q3 = ["Which has a higher expected value?",
        "a",
        "10% chance of $5,000",
        "1% chance of $25,000",
        "100% chance of $400",
        "65% chance of $650"];

        this.q4 = ["Which is not a reliable way to save for retirement?",
        "d",
        "401k",
        "Traditional IRA",
        "Roth IRA",
        "Bitcoin"];

        this.q5 = ["Approximate number of hours worked over 43 years",
        "a",
        "86,000 hours",
        "244,000 hours",
        "6,500 hours",
        "980 hours"];

        this.q6 = ["Another name for the US government:",
        "c",
        "Father Fred",
        "Aunt Sally",
        "Uncle Sam",
        "Uncle Fred"];

        this.q7 = ["When it comes to taxes, the more money you make...",
        "a",
        "The more taxes you pay",
        "The fewer taxes you pay",
        "Everyone pays the same",
        "The lower % you pay in taxes"];

        this.q8 = ["US government funded Health Insurance is called:",
        "d",
        "FICO",
        "Heals on Wheels",
        "Foodstamps",
        "Medicare"];

        this.q9 = ["What is a common trait of financially secure people?",
        "c",
        "Quit school before 18",
        "Always keep $500 on them",
        "Worked part-time as a teen",
        "Started a business"];

        this.q10 = ["This is a plan for how to spend money",
        "b",
        "Paycheck",
        "Budget",
        "Credit Card",
        "Cash Diary"];
        /*
        this.q11 = ["Which is not a reliable way to save for retirement?",
        "d",
        "401k",
        "Traditional IRA",
        "Roth IRA",
        "Bitcoin"];

        this.q12 = ["Which is not a reliable way to save for retirement?",
        "d",
        "401k",
        "Traditional IRA",
        "Roth IRA",
        "Bitcoin"];

        this.q13 = ["Which is not a reliable way to save for retirement?",
        "d",
        "401k",
        "Traditional IRA",
        "Roth IRA",
        "Bitcoin"];

        this.q14 = ["Which is not a reliable way to save for retirement?",
        "d",
        "401k",
        "Traditional IRA",
        "Roth IRA",
        "Bitcoin"];

        this.q15 = ["Which is not a reliable way to save for retirement?",
        "d",
        "401k",
        "Traditional IRA",
        "Roth IRA",
        "Bitcoin"];
        */
        
        let questions = [this.q1,this.q2,this.q3,this.q4,this.q5,this.q6,this.q7,this.q8,this.q9,this.q10]
        for (var i = questions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = questions[i];
            questions[i] = questions[j];
            questions[j] = temp;
        }
        this.game.registry.set("questionBank",questions);
    }
}


