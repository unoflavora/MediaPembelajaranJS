import Phaser from "phaser";
import IntroScene from "./scenes/intro";

var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    physics: {
        default: 'arcade',
    },
    scene: [IntroScene]
};

export const game = new Phaser.Game(config);
