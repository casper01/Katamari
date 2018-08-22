/// <reference path="lib/require.d.ts"/>
/// <reference path="lib/phaser.d.ts"/>
/// <reference path="lib/underscore.d.ts"/>
define(["require", "exports", "./game", "./settings"], function (require, exports, game_1, settings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require([], function () {
        var config = {
            type: Phaser.AUTO,
            width: settings_1.default.width,
            height: settings_1.default.height,
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
            this.load.image('sky', 'assets/sky.jpg');
            this.load.image('grass', 'assets/grass2.png'); // TODO: export to resources
            this.load.spritesheet('player', 'assets/bird_sprite.png', {
                frameWidth: 97,
                frameHeight: 65
            });
            this.load.spritesheet('boom', 'assets/boom.png', {
                frameWidth: 64,
                frameHeight: 64
            });
        }
        function create() {
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
            game = new game_1.default(this);
        }
        function update() {
            game.update();
        }
    });
});
//# sourceMappingURL=config.js.map