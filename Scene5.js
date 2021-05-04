class Scene5 extends Phaser.Scene {
    constructor() {
        super("endScene");
    }

    preload() {
        this.load.image("start_btn","assets/images/start_btn.png");
    }

    create() {

        let config = this.game.config;

        console.log("FINAL Score: ", this.game.registry.get("score"));
        var finalScore = this.game.registry.get("score")

/*
        this.suspenseMusic = this.sound.add("backgroundMusic").play();
*/
        this.clickSound = this.sound.add("click");

        this.add.text(275,150,"GAME OVER", {
            font: "30px Arial", 
            fill: "yellow"
        });
        
        this.add.text (215, 300,"FINAL SCORE: " + finalScore,{
            font: "30px Arial", 
            fill: "yellow"});
       
        this.startBtn = this.add.image("400", "275", "start_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.game.destroy(true);
            this.input.on('pointerdown', () => startGame())
            this.clickSound.play();
        })

    }

    update() {}
}


