define(["require", "exports", "./settings"], function (require, exports, settings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Enemy = /** @class */ (function () {
        function Enemy(scene, pos, v, size) {
            this._scene = scene;
            this._size = size;
            this._sprite = this._scene.physics.add.sprite(pos.x, pos.y, 'enemy');
            this._sprite.play('enemyFly', true, 0);
            this._sprite.setVelocity(v.x, v.y);
            this._sprite.setScale(size, size);
            if (v.x < 0) {
                this._sprite.flipX = true;
            }
        }
        Enemy.prototype.getSprite = function () {
            return this._sprite;
        };
        Enemy.prototype.getSize = function () {
            return this._size;
        };
        Enemy.prototype.moveLeft = function () {
            this._sprite.x -= settings_1.default.player.bgVelocity;
        };
        Enemy.prototype.moveRight = function () {
            this._sprite.x += settings_1.default.player.bgVelocity;
        };
        Enemy.prototype.moveUp = function () {
            this._sprite.y -= settings_1.default.player.bgVelocity;
        };
        Enemy.prototype.moveDown = function () {
            this._sprite.y += settings_1.default.player.bgVelocity;
        };
        Enemy.prototype.kill = function () {
            this._sprite.destroy();
        };
        return Enemy;
    }());
    exports.default = Enemy;
});
//# sourceMappingURL=enemy.js.map