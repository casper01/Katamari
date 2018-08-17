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
        }
        function create() {
            game = new game_1.default(this);
        }
        function update() {
            game.update();
        }
    });
});
//# sourceMappingURL=config.js.map