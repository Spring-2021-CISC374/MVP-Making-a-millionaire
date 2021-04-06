class Scene3 extends Phaser.Scene {
    constructor() {
        super("questionScene");
    }

    create() {
        let config = this.game.config;
        let questionNumber = 1;
        this.add.text(50,25,"Question " + questionNumber.toLocaleString());
        



    }
}