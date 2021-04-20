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
            this.buy("investment", 100, this.invest_text);
            //this.game.registry.set("investment", this.game.registry.get("investment")+100);
        })

        this.streak = this.add.image("200", "235", "streak_img")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            //this.input.on('pointerdown', () => this.scene.start('mainMenu'))
            //this.streak.setScale(1.25)
            this.buy("streak", 200, this.streak_owned);
        })

        this.fiftylifeline = this.add.image("400", "235", "5050_img")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            //this.input.on('pointerdown', () => this.scene.start('mainMenu'))
            //this.streak.setScale(1.25)
            this.buy("fifty", 150, this.fifty_owned);
        })

        this.audiencelifeline = this.add.image("600", "235", "audience_img")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            //this.input.on('pointerdown', () => this.scene.start('mainMenu'))
            //this.streak.setScale(1.25)
            this.buy("audience", 120, this.audience_owned);
        })

        this.add.text(350,120,"Shop", {
            font: "25px Arial", 
            fill: "yellow"
        });

        this.streak_price = this.add.text(160,290,"Price: 200", {
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

        this.streak_owned = this.add.text(155,315,"Owned:  "+this.game.registry.get("streak"), {
            font: "18px Arial", 
            fill: "yellow"
        });

        this.fifty_owned = this.add.text(355,315,"Owned:  "+this.game.registry.get("fifty"), {
            font: "18px Arial", 
            fill: "yellow"
        });

        this.audience_owned = this.add.text(555,315,"Owned:  "+this.game.registry.get("audience"), {
            font: "18px Arial", 
            fill: "yellow"
        });


        this.cashtext = this.add.text(625,25,"Cash:  "+this.game.registry.get("score"), {
            font: "18px Arial", 
            fill: "yellow",
            stroke: 'black',
            strokeThickness: 3
        });

        this.invest_text = this.add.text(320,550,"Amount Invested: "+this.game.registry.get("investment"), {
            font: "18px Arial", 
            fill: "yellow",
            stroke: 'black',
            strokeThickness: 3
        });

        this.physics.world.setBoundsCollision();
    }

    update() {
        /*
        this.streak.on('pointerover',function(pointer){
            this.enlarge_image();
            //this.streak.setScale(1.25);
        })
        
        this.streak.on('pointerout',function(pointer){
            this.decrease_image();
            //this.streak.setScale(1)
        })*/
    }

    buy (name, price, owned_text) {
        if (this.game.registry.get("score") >= price) {
            this.game.registry.set("score", this.game.registry.get("score") - price);
            if (name == "investment") {this.game.registry.set(name, this.game.registry.get(name)+100);}
            else {this.game.registry.set(name, this.game.registry.get(name)+1);}
            console.log("Quantity: ", this.game.registry.get(name));
            this.cashtext.setText("Cash:  "+this.game.registry.get("score"));
        }
        if (name == "investment"){
            this.invest_text.setText("Amount Invested: "+this.game.registry.get("investment"));
        }
        else {
            owned_text.setText("Owned:  "+this.game.registry.get(name));
        }
    }

    enlarge_image() {
        this.streak.setScale(1.25);
    } 

    decrease_image() {
        this.streak.setScale(1);
    }
}