/// <reference path="lib/require.d.ts"/>
/// <reference path="lib/phaser.d.ts"/>
/// <reference path="lib/underscore.d.ts"/>
define(["require", "exports", "./game", "./settings"], function (require, exports, game_1, settings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require([], function () {
        var config = {
            type: Phaser.AUTO,
            width: settings_1.default.world.width,
            height: settings_1.default.world.height,
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
        var game;
        function preload() {
            this.load.image(settings_1.default.imgs.grass.key, settings_1.default.imgs.grass.path);
            this.load.image(settings_1.default.imgs.black.key, settings_1.default.imgs.black.path);
            this.load.spritesheet(settings_1.default.imgs.player.key, settings_1.default.imgs.player.path, {
                frameWidth: settings_1.default.imgs.player.frameWidth,
                frameHeight: settings_1.default.imgs.player.frameHeight
            });
            this.load.spritesheet(settings_1.default.imgs.boom.key, settings_1.default.imgs.boom.path, {
                frameWidth: settings_1.default.imgs.boom.frameWidth,
                frameHeight: settings_1.default.imgs.boom.frameHeight
            });
            this.load.spritesheet(settings_1.default.imgs.enemy.key, settings_1.default.imgs.enemy.path, {
                frameWidth: settings_1.default.imgs.enemy.frameWidth,
                frameHeight: settings_1.default.imgs.enemy.frameHeight
            });
        }
        function create() {
            this.anims.create({
                key: 'playerFly',
                frames: this.anims.generateFrameNumbers('player', { start: 0, end: 8 }),
                frameRate: 15,
                repeat: -1
            });
            this.anims.create({
                key: 'enemyFly',
                frames: this.anims.generateFrameNumbers('enemy', { start: 0, end: 13 }),
                frameRate: 10,
                repeat: -1
            });
            this.anims.create({
                key: 'birdDestroy',
                frames: this.anims.generateFrameNumbers('boom', { start: 0, end: 24 }),
                frameRate: 50,
                hideOnComplete: true
            });
            game = new game_1.default(this);
        }
        function update() {
            game.update();
        }
    });
});
//# sourceMappingURL=config.js.map