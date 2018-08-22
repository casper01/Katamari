define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Enemy = /** @class */ (function () {
        function Enemy(scene, pos, v, size) {
            this._scene = scene;
            this._sprite = this._scene.physics.add.sprite(pos.x, pos.y, 'player'); // TODO: hardcoded
            this._sprite.setVelocity(v.x, v.y);
            this._sprite.setScale(size, size);
        }
        Enemy.prototype.getSprite = function () {
            return this._sprite;
        };
        return Enemy;
    }());
    exports.default = Enemy;
});
//# sourceMappingURL=enemy.js.map