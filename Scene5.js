class Scene5 extends Phaser.Scene {
    constructor() {
        super("endScene");
    }

    preload() {
        this.load.image("end_game_btn","assets/images/end_game_btn.png");
    }

    create() {

        let config = this.game.config;

        console.log("FINAL Score: ", this.game.registry.get("score"));
        var finalScore = this.game.registry.get("score")

/*
        this.suspenseMusic = this.sound.add("backgroundMusic").play();
*/
        this.clickSound = this.sound.add("click");

        this.end_game_btn = this.add.image("400", "400", "end_game_btn")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            //this.game.registry.set("score", 30)
            this.clickSound.play();
            this.input.on('pointerdown', () => this.scene.start('mainMenu'))
            this.clickSound.play();
        })

        this.add.text(275,150,"GAME OVER", {
            font: "30px Arial", 
            fill: "yellow"
        });
        
        this.add.text (215, 300,"FINAL SCORE: " + finalScore,{
            font: "30px Arial", 
            fill: "yellow"});
       

    }

    update() {}
}


