define(["require", "exports", "./settings"], function (require, exports, settings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Player = /** @class */ (function () {
        function Player(scene) {
            this._v = settings_1.default.player.velocity;
            this._size = 1;
            this._scene = scene;
            this._sprite = this._scene.physics.add.sprite(settings_1.default.player.startX, settings_1.default.player.startY, settings_1.default.imgs.player.key);
            this._sprite.play('playerFly', true, 0);
            this._sprite.setCollideWorldBounds(true);
            this._sprite.setScale(this._size, this._size);
        }
        Player.prototype.moveLeft = function () {
            this._sprite.setVelocityX(-this._v);
            this._sprite.flipX = true;
        };
        Player.prototype.moveRight = function () {
            this._sprite.setVelocityX(this._v);
            this._sprite.flipX = false;
        };
        Player.prototype.moveUp = function () {
            this._sprite.setVelocityY(-this._v);
        };
        Player.prototype.moveDown = function () {
            this._sprite.setVelocityY(this._v);
        };
        Player.prototype.update = function () {
            this._sprite.setVelocity(0, 0);
        };
        Player.prototype.getSprite = function () {
            return this._sprite;
        };
        Player.prototype.getSize = function () {
            return this._size;
        };
        Player.prototype.grow = function () {
            if (this._size > 2) {
                return;
            }
            this._size += settings_1.default.player.growStep;
            this._sprite.setScale(this._size, this._size);
        };
        Player.prototype.getWidth = function () {
            return this._sprite.width;
        };
        Player.prototype.getHeight = function () {
            return this._sprite.height;
        };
        Player.prototype.isAlive = function () {
            return this._sprite.visible && this._sprite.body.enable;
        };
        return Player;
    }());
    exports.default = Player;
});
//# sourceMappingURL=player.js.map