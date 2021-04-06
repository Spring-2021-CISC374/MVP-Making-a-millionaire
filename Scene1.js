class Scene1 extends Phaser.Scene {
    constructor() {
        super("mainMenu");
    }

    preload() {
        this.load.image("background","assets/images/background.png");

        this.load.image("back_btn","assets/images/back_btn.png");
        this.load.image("start_btn","assets/images/start_btn.png");
        this.load.image("menu_btn","assets/images/menu_btn.png");
        this.load.image("shop_btn","assets/images/shop_btn.png");
        this.load.image("settings_btn","assets/images/settings_btn.png");



        
        this.load.spritesheet("ship","assets/spritesheets/ship.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("ship2","assets/spritesheets/ship2.png",{
            frameWidth: 32,
            frameHeight: 16
        });
        this.load.spritesheet("ship3","assets/spritesheets/ship3.png",{
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet("explosion","assets/spritesheets/explosion.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("power-up","assets/spritesheets/power-up.png",{
            frameWidth: 16,
            frameHeight: 16
        });
    }

    create() {
        /*
        let config = this.game.config;
        this.add.text(20,20,"Loading game...");
        this.scene.start("playGame");*/


        let config = this.game.config;
        
        this.startBtn = this.add.image("400", "225", "start_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.input.on('pointerdown', () => this.scene.start('playGame'))
        })

        this.shopBtn = this.add.image("400", "300", "shop_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.input.on('pointerdown', () => this.scene.start('shopScene'))
        })

        this.settingsBtn = this.add.image("400", "375", "settings_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.input.on('pointerdown', () => this.scene.start('settingScene'))
        })
       

    }
}

