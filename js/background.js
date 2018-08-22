define(["require", "exports", "./settings"], function (require, exports, settings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Background = /** @class */ (function () {
        function Background(scene, moving_velocity) {
            this._moving_v = moving_velocity;
            this._scene = scene;
            this._sprite = this._scene.add.tileSprite(settings_1.default.width / 2, settings_1.default.height / 2, settings_1.default.width, settings_1.default.height, settings_1.default.imgs.grass.key);
        }
        Background.prototype.moveLeft = function () {
            this._sprite.tilePositionX -= this._moving_v;
        };
        Background.prototype.moveRight = function () {
            this._sprite.tilePositionX += this._moving_v;
        };
        Background.prototype.moveUp = function () {
            this._sprite.tilePositionY -= this._moving_v;
        };
        Background.prototype.moveDown = function () {
            this._sprite.tilePositionY += this._moving_v;
        };
        return Background;
    }());
    exports.default = Background;
});
//# sourceMappingURL=background.js.map