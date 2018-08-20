define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Player = /** @class */ (function () {
        function Player(scene) {
            this.v = 200;
            this._scene = scene;
            this._sprite = this._scene.physics.add.sprite(400, 300, 'player'); // TODO: hardcoded
            this._sprite.play('playerFly', true, 0);
            this._sprite.setCollideWorldBounds(true);
        }
        Player.prototype.moveLeft = function () {
            this._sprite.setVelocityX(-this.v);
            this._sprite.flipX = true;
        };
        Player.prototype.moveRight = function () {
            this._sprite.setVelocityX(this.v);
            this._sprite.flipX = false;
        };
        Player.prototype.moveUp = function () {
            this._sprite.setVelocityY(-this.v);
        };
        Player.prototype.moveDown = function () {
            this._sprite.setVelocityY(this.v);
        };
        Player.prototype.update = function () {
            this._sprite.setVelocity(0, 0);
        };
        Player.prototype.getSprite = function () {
            return this._sprite;
        };
        return Player;
    }());
    exports.default = Player;
});
//# sourceMappingURL=player.js.map