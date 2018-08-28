define(["require", "exports", "./settings"], function (require, exports, settings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Background = /** @class */ (function () {
        function Background(scene, moving_velocity) {
            this._moving_v = moving_velocity;
            this._scene = scene;
            this._sprite = this._scene.add.tileSprite(settings_1.default.world.width / 2, settings_1.default.world.height / 2, settings_1.default.world.width, settings_1.default.world.height, settings_1.default.imgs.grass.key);
        }
        Background.prototype.moveLeft = function () {
            this._sprite.tilePositionX += this._moving_v;
            if (this._sprite.tilePositionX > settings_1.default.imgs.grass.width) {
                this._sprite.tilePositionX -= settings_1.default.imgs.grass.width;
            }
        };
        Background.prototype.moveRight = function () {
            this._sprite.tilePositionX -= this._moving_v;
            if (this._sprite.tilePositionX < 0) {
                this._sprite.tilePositionX += settings_1.default.imgs.grass.width;
            }
        };
        Background.prototype.moveUp = function () {
            this._sprite.tilePositionY += this._moving_v;
            if (this._sprite.tilePositionY > settings_1.default.imgs.grass.height) {
                this._sprite.tilePositionY -= settings_1.default.imgs.grass.height;
            }
        };
        Background.prototype.moveDown = function () {
            this._sprite.tilePositionY -= this._moving_v;
            if (this._sprite.tilePositionY < 0) {
                this._sprite.tilePositionY += settings_1.default.imgs.grass.height;
            }
        };
        return Background;
    }());
    exports.default = Background;
});
//# sourceMappingURL=background.js.map