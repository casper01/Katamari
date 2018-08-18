define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Player = /** @class */ (function () {
        function Player(scene) {
            this._scene = scene;
            this._scene.add.sprite(100, 100, 'player').play('playerFly', true, 0);
        }
        return Player;
    }());
    exports.default = Player;
});
//# sourceMappingURL=player.js.map