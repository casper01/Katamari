/// <reference path="lib/require.d.ts"/>
/// <reference path="lib/phaser.d.ts"/>


import Game from "./game";

require([], () => {
    let config = {
        type: Phaser.AUTO,
        width: 800,     // TODO: hardcoded
        height: 600,    // TODO: hardcoded
        scene: {
            preload: preload,
            create: create,
            update: update,
        },
        physics: {
            default: 'arcade'
        }
    };
    new Phaser.Game(config);
    let game: Game;

    function preload(this: Phaser.Scene) {
        this.load.image('sky', 'assets/sky.jpg');
        this.load.image('grass', 'assets/grass2.png');  // TODO: export to resources
        this.load.spritesheet('player', 'assets/bird_sprite.png', { 
            frameWidth: 97, 
            frameHeight: 65
        });
        this.load.spritesheet('boom', 'assets/boom.png', { 
            frameWidth: 64, 
            frameHeight: 64
        });
    }

    function create(this: Phaser.Scene) {
        this.anims.create({
            key: 'playerFly',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'birdDestroy',
            frames: this.anims.generateFrameNumbers('boom', { start: 0, end: 24 }),
            frameRate: 50,
            hideOnComplete: true
        });

        game = new Game(this);
    }

    function update() {
        game.update();
    }
});
