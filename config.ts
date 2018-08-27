/// <reference path="lib/require.d.ts"/>
/// <reference path="lib/phaser.d.ts"/>
/// <reference path="lib/underscore.d.ts"/>

import Game from "./game";
import settings from './settings';

require([], () => {
    let config = {
        type: Phaser.AUTO,
        width: settings.world.width,
        height: settings.world.height,
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
        this.load.image(settings.imgs.sky.key, settings.imgs.sky.path);
        this.load.image(settings.imgs.grass.key, settings.imgs.grass.path);
        this.load.spritesheet(settings.imgs.player.key, settings.imgs.player.path, { 
            frameWidth: settings.imgs.player.frameWidth, 
            frameHeight: settings.imgs.player.frameHeight
        });
        this.load.spritesheet(settings.imgs.boom.key, settings.imgs.boom.path, { 
            frameWidth: settings.imgs.boom.frameWidth,
            frameHeight: settings.imgs.boom.frameHeight
        });
        this.load.spritesheet(settings.imgs.enemy.key, settings.imgs.enemy.path, {
            frameWidth: settings.imgs.enemy.frameWidth,
            frameHeight: settings.imgs.enemy.frameHeight
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
            key: 'enemyFly',
            frames: this.anims.generateFrameNumbers('enemy', { start: 0, end: 13 }),
            frameRate: 20,
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
