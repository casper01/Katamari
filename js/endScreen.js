define(["require", "exports", "./settings"], function (require, exports, settings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EndScreen = /** @class */ (function () {
        function EndScreen(scene) {
            this._scene = scene;
            this._sprite = this._scene.add.sprite(0, 0, settings_1.default.imgs.black.key);
            this._sprite.setScale(800, 600);
            this._text = this._scene.add.text(settings_1.default.endText.x, settings_1.default.endText.y, settings_1.default.endText.text, { font: settings_1.default.endText.conf });
            this._sprite.alpha = 0;
            this._text.alpha = 0;
        }
        EndScreen.prototype.setActive = function () {
            this._sprite.alpha = 0.5;
            this._text.alpha = 1;
        };
        return EndScreen;
    }());
    exports.default = EndScreen;
});
//# sourceMappingURL=endScreen.js.map