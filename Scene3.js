class Scene3 extends Phaser.Scene {
    constructor() {
        super("shopScene");
    }

    preload() {
        this.load.audio("click","sounds/goodclick.mp3");
    }

    create() {
        let config = this.game.config;

        this.clickSound = this.sound.add("click");
        
        this.clickSound = this.sound.add("click");

        this.backBtn = this.add.image("60", "25", "back_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.clickSound.play();
            this.input.on('pointerdown', () => this.scene.start('mainMenu'))
            this.clickSound.play();
        })

        this.investBtn = this.add.image("400", "500", "invest_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.clickSound.play();
            //this.input.on('pointerdown', () => this.scene.start('mainMenu'))
        })

        this.streak = this.add.image("200", "235", "streak_img")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            //this.input.on('pointerdown', () => this.scene.start('mainMenu'))
            //this.streak.setScale(1.25)
            console.log("Streak bought");
        })

        this.fiftylifeline = this.add.image("400", "235", "5050_img")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            //this.input.on('pointerdown', () => this.scene.start('mainMenu'))
            //this.streak.setScale(1.25)
            console.log("5050 lifeline bought bought");
        })

        this.audiencelifeline = this.add.image("600", "235", "audience_img")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            //this.input.on('pointerdown', () => this.scene.start('mainMenu'))
            //this.streak.setScale(1.25)
            console.log("Audience lifeline bought bought");
        })

        this.add.text(350,120,"Shop", {
            font: "25px Arial", 
            fill: "yellow"
        });

        this.mult_price = this.add.text(160,290,"Price: 200", {
            font: "18px Arial", 
            fill: "yellow"
        });

        this.fifty_price = this.add.text(360,290,"Price: 150", {
            font: "18px Arial", 
            fill: "yellow"
        });

        this.audience_price = this.add.text(560,290,"Price: 120", {
            font: "18px Arial", 
            fill: "yellow"
        });

        this.mult_owned = this.add.text(155,315,"Owned:  "+this.game.registry.get("streak"), {
            font: "18px Arial", 
            fill: "yellow"
        });

        this.fifty_owned = this.add.text(355,315,"Owned:  "+this.game.registry.get("fifty"), {
            font: "18px Arial", 
            fill: "yellow"
        });

        this.fifty_owned = this.add.text(555,315,"Owned:  "+this.game.registry.get("audience"), {
            font: "18px Arial", 
            fill: "yellow"
        });


        this.cashtext = this.add.text(625,25,"Cash:  "+this.game.registry.get("score"), {
            font: "18px Arial", 
            fill: "yellow"
        });

        this.physics.world.setBoundsCollision();
    }

    update() {
        this.streak.on('pointerover',function(pointer){
            this.enlarge_image();
            //this.streak.setScale(1.25);
        })
        
        this.streak.on('pointerout',function(pointer){
            this.decrease_image();
            //this.streak.setScale(1)
        })
    }

    enlarge_image() {
        this.streak.setScale(1.25);
    } 

    decrease_image() {
        this.streak.setScale(1);
    }
}