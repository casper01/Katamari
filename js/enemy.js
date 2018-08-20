define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Enemy = /** @class */ (function () {
        function Enemy(scene) {
            this._scene = scene;
            this._sprite = this._scene.physics.add.sprite(200, 200, 'player'); // TODO: hardcoded
        }
        Enemy.prototype.getSprite = function () {
            return this._sprite;
        };
        return Enemy;
    }());
    exports.default = Enemy;
});
//# sourceMappingURL=enemy.js.map