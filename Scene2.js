class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        let config = this.game.config;
        
        this.physics.world.setBoundsCollision();

        
        this.input.on('pointerdown', () => this.scene.start('additionalScene'))
        
        this.anims.create({
            key: "ship1_anim",
            frames: this.anims.generateFrameNumbers("ship"),
            frameRate:20,
            repeat: -1
        });
        this.anims.create({
            key: "ship2_anim",
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate:20,
            repeat: -1
        });
        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate:20,
            repeat: -1
        });
        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate:20,
            repeat: 0,
            hideOnComplete: true
        });
        this.anims.create({
            key: "red",
            frames: this.anims.generateFrameNumbers("power-up",{
                start: 0,
                end: 1
            }),
            frameRate:20,
            repeat: -1
        });
        this.anims.create({
            key: "gray",
            frames: this.anims.generateFrameNumbers("power-up",{
                start: 2,
                end: 3
            }),
            frameRate:20,
            repeat: -1
        });

        this.ship1 = this.add.sprite(config.width/2 -50, config.height/2,"ship");
        this.ship2 = this.add.sprite(config.width/2, config.height/2,"ship2");
        this.ship3 = this.add.sprite(config.width/2 +50, config.height/2,"ship3");

        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0,0);

        this.ship1.play("ship1_anim");
        this.ship2.play("ship2_anim");
        this.ship3.play("ship3_anim");

        this.ship1.setInteractive();
        this.ship2.setInteractive();
        this.ship3.setInteractive();

        this.player = this.physics.add.sprite(config.width/2, config.height-200, "ship3");
        this.player.play("ship3_anim");

        this.input.on("gameobjectdown",this.destroyShip, this);
        
        this.cursorKeys = this.input.keyboard.createCursorKeys();

        this.powerUps = this.physics.add.group();

        var maxObjects = 4;
        for (var i = 0; i < maxObjects; i++) {
            var powerUp = this.physics.add.sprite(16,16,"power-up");
            this.powerUps.add(powerUp);
            powerUp.setRandomPosition(0,100,config.width, config.height);

            if (Math.random() > 0.5) {
                powerUp.play("red");
            } else {
                powerUp.play("gray");
            }
            
            powerUp.setVelocity(50,100);
            powerUp.setCollideWorldBounds(true);
            this.player.setCollideWorldBounds(true);
            powerUp.setBounce(1);
        }

        this.physics.add.collider(this.powerUps,this.powerUps);

        this.physics.add.collider(this.powerUps,this.player, function(player,powerUp) {
            player.setTexture("explosion");
            player.play("explode");
        });

        this.add.text(20,20,"Arrow keys for left/right, up to stop", {
            font: "14px Arial", 
            fill: "yellow"
        });
    }

    moveShip(ship,speed) {
        let config = this.game.config;
        ship.y += speed;
        if (ship.y > config.height){
            this.resetShipPos(ship);
        }
    }

    resetShipPos(ship) {
        let config = this.game.config;
        ship.y = 0;
        var randomX = Phaser.Math.Between(0,config.width);
        ship.x = randomX;
    }

    destroyShip(pointer, gameObject) {
        gameObject.setTexture("explosion");
        gameObject.play("explode");
    }

    update() {
        this.moveShip(this.ship1,1);
        this.moveShip(this.ship2,2);

        this.background.tilePositionY += 0.5;

        this.movePlayerManager();
    }

    movePlayerManager() {
        if (this.cursorKeys.left.isDown){
            this.player.setVelocityX(-100);
        } else if (this.cursorKeys.right.isDown) {
            this.player.setVelocityX(100);
        } else if (this.cursorKeys.up.isDown) {
            this.player.setVelocityX(0);
        }
    }
}