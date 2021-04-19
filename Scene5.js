class Scene5 extends Phaser.Scene {
    constructor() {
        super("endScene");
    }

    preload() {

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
        
        this.add.text (275, 300,"FINAL SCORE" + finalScore);
       

    }
}


