class Scene1 extends Phaser.Scene {
    constructor() {
        super("mainMenu");
    }

    preload() {

        this.load.image("back_btn","assets/images/back_btn.png");
        this.load.image("start_btn","assets/images/start_btn.png");
        this.load.image("menu_btn","assets/images/menu_btn.png");
        this.load.image("shop_btn","assets/images/shop_btn.png");
        this.load.image("settings_btn","assets/images/settings_btn.png");
        this.load.audio("click","sounds/goodclick.mp3");
    }

    create() {
        /*
        let config = this.game.config;
        this.add.text(20,20,"Loading game...");
        this.scene.start("playGame");*/

        console.log("Scene 1 score: ", this.game.registry.get("score"));

        let config = this.game.config;

        this.clickSound = this.sound.add("click");
        
        this.startBtn = this.add.image("400", "225", "start_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.input.on('pointerdown', () => this.scene.start('playGame'))
            this.clickSound.play();
        })

        this.shopBtn = this.add.image("400", "300", "shop_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.input.on('pointerdown', () => this.scene.start('shopScene'))
            this.clickSound.play();
        })

        this.settingsBtn = this.add.image("400", "375", "settings_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.input.on('pointerdown', () => this.scene.start('settingScene'))
            this.clickSound.play();
        })
       

    }
}


