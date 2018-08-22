define(["require", "exports", "./background", "./player", "./enemy", "./settings"], function (require, exports, background_1, player_1, enemy_1, settings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = /** @class */ (function () {
        function Game(scene) {
            this._scene = scene;
            this._cursors = this._scene.input.keyboard.createCursorKeys();
            this._scene.physics.world.setBounds(150, 100, 500, 400);
            this._background = new background_1.default(this._scene, 4); // TODO: hardcoded velocity
            this.player = new player_1.default(this._scene);
            this.enemies = [];
            for (var i = 0; i < 10; i++) {
                this.addEnemy();
            }
        }
        Game.prototype.addEnemy = function () {
            var pos = this.getRandomSidePos();
            var v = this.getRandomVelocity(pos.x, pos.y);
            var size = Math.random() * (settings_1.default.maxSize - settings_1.default.minSize) + settings_1.default.minSize;
            var enemy = new enemy_1.default(this._scene, pos, v, size);
            this._scene.physics.add.collider(this.player.getSprite(), enemy.getSprite(), this.hit, null, this);
            this.enemies.push(enemy);
        };
        Game.prototype.getRandomVelocity = function (x, y) {
            var vx, vy, sign;
            if (x == 0) {
                sign = Math.random() < 0.5 ? -1 : 1;
                vx = _.random(settings_1.default.minV, settings_1.default.maxV);
                vy = sign * _.random(settings_1.default.minV, settings_1.default.maxV);
            }
            else if (y == 0) {
                sign = Math.random() < 0.5 ? -1 : 1;
                vx = sign * _.random(settings_1.default.minV, settings_1.default.maxV);
                vy = _.random(settings_1.default.minV, settings_1.default.maxV);
            }
            else if (x == settings_1.default.width) {
                sign = Math.random() < 0.5 ? -1 : 1;
                vx = -_.random(settings_1.default.minV, settings_1.default.maxV);
                vy = sign * _.random(settings_1.default.minV, settings_1.default.maxV);
            }
            else if (y == settings_1.default.height) {
                sign = Math.random() < 0.5 ? -1 : 1;
                vy = -_.random(settings_1.default.minV, settings_1.default.maxV);
                vx = sign * _.random(settings_1.default.minV, settings_1.default.maxV);
            }
            else {
                sign = Math.random() < 0.5 ? -1 : 1;
                vy = sign * _.random(settings_1.default.minV, settings_1.default.maxV);
                sign = Math.random() < 0.5 ? -1 : 1;
                vx = sign * _.random(settings_1.default.minV, settings_1.default.maxV);
            }
            return {
                x: vx,
                y: vy
            };
        };
        Game.prototype.getRandomSidePos = function () {
            var side = _.random(3);
            var x, y;
            console.log("side: ", side);
            switch (side) {
                case 0:
                    x = 0;
                    y = _.random(settings_1.default.height);
                    console.log("x: ", x, " y: ", y);
                    break;
                case 1:
                    x = settings_1.default.width;
                    y = _.random(settings_1.default.height);
                    console.log("x: ", x, " y: ", y);
                    break;
                case 2:
                    y = 0;
                    x = _.random(settings_1.default.width);
                    console.log("x: ", x, " y: ", y);
                    break;
                case 3:
                    y = settings_1.default.height;
                    x = _.random(settings_1.default.width);
                    console.log("x: ", x, " y: ", y);
                    break;
            }
            return {
                x: x,
                y: y
            };
        };
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