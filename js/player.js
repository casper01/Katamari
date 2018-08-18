define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Player = /** @class */ (function () {
        function Player(scene) {
            this.v = 200;
            this._scene = scene;
            this._player = this._scene.physics.add.sprite(400, 300, 'player'); // TODO: hardcoded
            this._player.play('playerFly', true, 0);
            this._player.setCollideWorldBounds(true);
        }
        Player.prototype.moveLeft = function () {
            this._player.setVelocityX(-this.v);
            this._player.flipX = true;
        };
        Player.prototype.moveRight = function () {
            this._player.setVelocityX(this.v);
            this._player.flipX = false;
        };
        Player.prototype.moveUp = function () {
            this._player.setVelocityY(-this.v);
        };
        Player.prototype.moveDown = function () {
            this._player.setVelocityY(this.v);
        };
        Player.prototype.update = function () {
            this._player.setVelocity(0, 0);
        };
        return Player;
    }());
    exports.default = Player;
});
//# sourceMappingURL=player.js.map