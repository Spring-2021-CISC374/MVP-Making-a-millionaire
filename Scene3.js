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

        this.streak_val = 100;
        this.fifty_val = 50;
        this.audience_val = 75;
        this.min_invest = 200;

        this.backBtn = this.add.image("60", "25", "back_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.clickSound.play();
            this.input.on('pointerdown', () => this.scene.start('playGame'))
            this.clickSound.play();
        })

        this.investBtn = this.add.image("400", "500", "invest_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
            if (this.game.registry.get("score") >= this.min_invest) {
                this.investBtn.setScale(1.15);
                this.game.canvas.style.cursor = "pointer";
            } else {
                this.investBtn.tint = 0xA3A3A3;
            }
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
            this.investBtn.setScale(1);
            this.game.canvas.style.cursor = "default";
            this.investBtn.clearTint();
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.clickSound.play();
            //this.input.on('pointerdown', () => this.scene.start('mainMenu'))
            this.buy("investment", this.min_invest, this.invest_text);
            //this.game.registry.set("investment", this.game.registry.get("investment")+100);
        })

        this.streak = this.add.image("200", "235", "streak_img")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {

            if (this.game.registry.get("score") >= this.streak_val && this.game.registry.get("multiplier") == 0) {
                this.streak.setScale(1.15);
                this.game.canvas.style.cursor = "pointer";
            } else {
                this.streak.tint = 0xA3A3A3;
            }
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
            this.streak.setScale(1);
            this.game.canvas.style.cursor = "default";
            this.streak.clearTint();
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            //this.input.on('pointerdown', () => this.scene.start('mainMenu'))
            //this.streak.setScale(1.15)
            if (this.game.registry.get("score") >= this.streak_val && this.game.registry.get("multiplier") == 0) {
                this.buy("multiplier", 100, this.streak_owned);
            } else {
                this.multiplier_text = this.add.text(250,400,"Can only purchase single multiplier at a time", {
                    font: "16px Arial", 
                    fill: "yellow",
                    visible: false
                });
                //multiplier_text.visible = false;

                
                this.game.time.events.add(
                    0, 
                    function() {    
                        this.game.add.tween(this.multiplier_text).to({alpha: 1}, 1000, Phaser.Easing.Linear.None, true);
                        this.game.add.tween(this.multiplier_text).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
                    }, 
                this);
            }
        })
        

        this.fiftylifeline = this.add.image("400", "235", "5050_img")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
            if (this.game.registry.get("score") >= this.fifty_val) {
                this.fiftylifeline.setScale(1.15);
                this.game.canvas.style.cursor = "pointer";
            } else {
                this.fiftylifeline.tint = 0xA3A3A3;
            }
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
            this.fiftylifeline.setScale(1);
            this.game.canvas.style.cursor = "default";
            this.fiftylifeline.clearTint();
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            //this.input.on('pointerdown', () => this.scene.start('mainMenu'))
            //this.streak.setScale(1.15)
            this.buy("fifty", this.fifty_val, this.fifty_owned);
        })

        this.audiencelifeline = this.add.image("600", "235", "audience_img")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
            if (this.game.registry.get("score") >= this.audience_val) {
                this.audiencelifeline.setScale(1.15);
                this.game.canvas.style.cursor = "pointer";
            } else {
                this.audiencelifeline.tint = 0xA3A3A3;
            }
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
            this.audiencelifeline.setScale(1);
            this.game.canvas.style.cursor = "default";
            this.audiencelifeline.clearTint();
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            //this.input.on('pointerdown', () => this.scene.start('mainMenu'))
            //this.streak.setScale(1.15)
            this.buy("audience", this.audience_val, this.audience_owned);
        })

        this.add.text(350,120,"Shop", {
            font: "25px Arial", 
            fill: "yellow"
        });

        this.streak_price = this.add.text(160,290,"Price: 100", {
            font: "18px Arial", 
            fill: "yellow"
        });

        this.fifty_price = this.add.text(360,290,"Price: 50", {
            font: "18px Arial", 
            fill: "yellow"
        });

        this.audience_price = this.add.text(560,290,"Price: 75", {
            font: "18px Arial", 
            fill: "yellow"
        });

        this.streak_owned = this.add.text(155,315,"Owned:  "+this.game.registry.get("multiplier"), {
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


        this.cashtext = this.add.text(662,13,"Cash:  "+this.game.registry.get("score"), {
            font: "22px Arial", 
            fill: "greenyellow",
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
            //this.streak.setScale(1.15);
        })
        
        this.streak.on('pointerout',function(pointer){
            this.decrease_image();
            //this.streak.setScale(1)
        })*/
    }

    buy (name, price, owned_text) {
        if (this.game.registry.get("score") >= price) {
            this.game.registry.set("score", this.game.registry.get("score") - price);
            if (name == "investment") {
                this.game.registry.set(name, this.game.registry.get(name)+100);
            } else {
                this.game.registry.set(name, this.game.registry.get(name)+1);
            }
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
        this.streak.setScale(1.15);
    } 

    decrease_image() {
        this.streak.setScale(1);
    }
}