window.onload =  function() {
    var config = {
        width: 800,
        height: 600,
        bakckgroundColor: 0x000000,
        scene: [Scene1, Scene2, Scene3, Scene4],
        pixelArt: true,
        physics: {
            default: "arcade",
            arcade: {
                debug: false
            }
        }
    }
    var game = new Phaser.Game(config);

    game.registry.set("score", 1000)
    game.registry.set("streak", 0)
    game.registry.set("fifty", 0)
    game.registry.set("audience", 0)
    game.registry.set("questionNumber",0)
    game.registry.set("investment",0)


    /*
    export var flags = {
        questionsAttempted = 0,
        currentScore = 0,
        currentStreak = 0
    }*/
}