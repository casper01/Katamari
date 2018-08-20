define(["require", "exports", "./background", "./player", "./enemy"], function (require, exports, background_1, player_1, enemy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = /** @class */ (function () {
        function Game(scene) {
            this._scene = scene;
            this._cursors = this._scene.input.keyboard.createCursorKeys();
            this._scene.physics.world.setBounds(150, 100, 500, 400);
            this._background = new background_1.default(this._scene, 4); // TODO: hardcoded velocity
            this.player = new player_1.default(this._scene);
            // new stuff
            var enemy = new enemy_1.default(this._scene);
            this._scene.physics.add.collider(this.player.getSprite(), enemy.getSprite(), this.hit, null, this);
        }
        Game.prototype.hit = function (player, enemy) {
            enemy.disableBody(true, true);
            var boom = this._scene.add.sprite(enemy.x, enemy.y, 'boom');
            boom.play('birdDestroy', true, 0);
        };
        Game.prototype.update = function () {
            var self = this;
            this.player.update();
            if (this._cursors.left.isDown) {
                this._background.moveLeft();
                this.player.moveLeft();
            }
            if (this._cursors.right.isDown) {
                this._background.moveRight();
                this.player.moveRight();
            }
            if (this._cursors.up.isDown) {
                this._background.moveUp();
                this.player.moveUp();
            }
            if (this._cursors.down.isDown) {
                this._background.moveDown();
                this.player.moveDown();
            }
        };
        return Game;
    }());
    exports.default = Game;
});
//# sourceMappingURL=game.js.map