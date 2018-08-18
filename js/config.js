/// <reference path="lib/require.d.ts"/>
/// <reference path="lib/phaser.d.ts"/>
define(["require", "exports", "./game"], function (require, exports, game_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require([], function () {
        var config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            scene: {
                preload: preload,
                create: create,
                update: update,
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
        }
        function create() {
            this.anims.create({
                key: 'playerFly',
                frames: this.anims.generateFrameNumbers('player', { start: 0, end: 8 }),
                frameRate: 10,
                repeat: -1
            });
            game = new game_1.default(this);
        }
        function update() {
            game.update();
        }
    });
});
//# sourceMappingURL=config.js.map