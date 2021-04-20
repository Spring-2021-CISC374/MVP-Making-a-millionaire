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

        this.cashtext = this.add.text(625,25,"Cash:  "+this.game.registry.get("score"), {
            font: "18px Arial", 
            fill: "yellow",
            stroke: 'black',
            strokeThickness: 3
        });
       

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

        this.game.registry.set("questionBank",[this.q1,this.q2,this.q3,this.q4]);
    }
}


