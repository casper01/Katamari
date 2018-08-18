define(["require", "exports", "./background", "./player"], function (require, exports, background_1, player_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = /** @class */ (function () {
        function Game(scene) {
            this._scene = scene;
            this._cursors = this._scene.input.keyboard.createCursorKeys();
            this._scene.physics.world.setBounds(150, 100, 500, 400);
            this._background = new background_1.default(this._scene, 4); // TODO: hardcoded velocity
            this.player = new player_1.default(this._scene);
        }
        Game.prototype.update = function () {
            var self = this;
            this.player.update();
            if (this._cursors.left.isDown) {
                this._background.moveLeft();
                this.player.moveLeft();
            }
            if (this._cursors.right.isDown) {
                this._background.moveRight();
                this.player.moveRight();
            }
            if (this._cursors.up.isDown) {
                this._background.moveUp();
                this.player.moveUp();
            }
            if (this._cursors.down.isDown) {
                this._background.moveDown();
                this.player.moveDown();
            }
        };
        return Game;
    }());
    exports.default = Game;
});
//# sourceMappingURL=game.js.map