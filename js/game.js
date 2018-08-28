define(["require", "exports", "./background", "./player", "./enemy", "./settings", "./endScreen"], function (require, exports, background_1, player_1, enemy_1, settings_1, endScreen_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = /** @class */ (function () {
        function Game(scene) {
            this.boundingRect = {
                l: settings_1.default.world.marginL,
                t: settings_1.default.world.marginT,
                w: settings_1.default.world.width - settings_1.default.world.marginL - settings_1.default.world.marginR,
                h: settings_1.default.world.height - settings_1.default.world.marginT - settings_1.default.world.marginB
            };
            this._scene = scene;
            this._cursors = this._scene.input.keyboard.createCursorKeys();
            this._scene.physics.world.setBounds(this.boundingRect.l, this.boundingRect.t, this.boundingRect.w, this.boundingRect.h);
            this._background = new background_1.default(this._scene, settings_1.default.player.bgVelocity);
            this.player = new player_1.default(this._scene);
            this.enemies = [];
            this._endScreen = new endScreen_1.default(this._scene);
            this._keySpace = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        }
        Game.prototype.addEnemy = function () {
            var size = Math.random() * (settings_1.default.maxSize - settings_1.default.minSize) + settings_1.default.minSize;
            var pos = this.getRandomSidePos(size);
            var v = this.getRandomVelocity(pos.x, pos.y);
            var enemy = new enemy_1.default(this._scene, pos, v, size);
            this._scene.physics.add.collider(this.player.getSprite(), enemy.getSprite(), this.playerHitEnemyHandler, Function(), {
                game: this,
                player: this.player,
                enemy: enemy
            });
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
            else if (x == settings_1.default.world.width) {
                sign = Math.random() < 0.5 ? -1 : 1;
                vx = -_.random(settings_1.default.minV, settings_1.default.maxV);
                vy = sign * _.random(settings_1.default.minV, settings_1.default.maxV);
            }
            else if (y == settings_1.default.world.height) {
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
        Game.prototype.getRandomSidePos = function (size) {
            var side = _.random(3);
            var x, y;
            switch (side) {
                case 0:
                    x = -size * this.player.getWidth() / 2;
                    y = _.random(settings_1.default.world.height);
                    break;
                case 1:
                    x = settings_1.default.world.width + size * this.player.getHeight() / 2;
                    y = _.random(settings_1.default.world.height);
                    break;
                case 2:
                    y = -size * this.player.getHeight() / 2;
                    x = _.random(settings_1.default.world.width);
                    break;
                case 3:
                    y = settings_1.default.world.height + size * this.player.getHeight() / 2;
                    x = _.random(settings_1.default.world.width);
                    break;
            }
            return {
                x: x,
                y: y
            };
        };
        Game.prototype.playerHitEnemyHandler = function (player, enemy) {
            var e = this.enemy;
            var p = this.player;
            var game = this.game;
            if (p.getSize() > e.getSize()) {
                p.grow();
                e.getSprite().disableBody(true, true);
                var boom = game._scene.add.sprite(e.getSprite().x, e.getSprite().y, 'boom');
                boom.play('birdDestroy', true, 0);
            }
            else {
                p.getSprite().disableBody(true, true);
                var boom = game._scene.add.sprite(p.getSprite().x, p.getSprite().y, 'boom');
                boom.play('birdDestroy', true, 0);
            }
        };
        Game.prototype.getAllMovingObjects = function () {
            var allObjects = [];
            allObjects = allObjects.concat(this.enemies);
            allObjects.push(this._background);
            return allObjects;
        };
        Game.prototype.handleKeyPress = function () {
            if (this._cursors.left.isDown) {
                this.player.moveLeft();
                if (this.player.getSprite().body.left == this.boundingRect.l) {
                    this.getAllMovingObjects().forEach(function (obj) {
                        obj.moveRight();
                    });
                }
            }
            if (this._cursors.right.isDown) {
                this.player.moveRight();
                if (this.player.getSprite().body.right == this.boundingRect.l + this.boundingRect.w) {
                    this.getAllMovingObjects().forEach(function (obj) {
                        obj.moveLeft();
                    });
                }
            }
            if (this._cursors.up.isDown) {
                this.player.moveUp();
                if (this.player.getSprite().body.top == this.boundingRect.t) {
                    this.getAllMovingObjects().forEach(function (obj) {
                        obj.moveDown();
                    });
                }
            }
            if (this._cursors.down.isDown) {
                this.player.moveDown();
                if (this.player.getSprite().body.bottom == this.boundingRect.t + this.boundingRect.h) {
                    this.getAllMovingObjects().forEach(function (obj) {
                        obj.moveUp();
                    });
                }
            }
        };
        Game.prototype.update = function () {
            if (this.player.isAlive()) {
                this.player.update();
                this.handleKeyPress();
                this.removeEnemiesOffScreen();
                while (this.enemies.length < settings_1.default.enemyCount) {
                    this.addEnemy();
                }
            }
            else {
                this._endScreen.setVisibility(true);
                this.enemies.forEach(function (enemy) {
                    enemy.kill();
                });
                this.enemies = [];
                if (this._keySpace.isDown) {
                    this._endScreen.setVisibility(false);
                    this.player = new player_1.default(this._scene);
                }
            }
        };
        Game.prototype.removeEnemiesOffScreen = function () {
            var filteredEnemies = [];
            this.enemies.forEach(function (enemy) {
                if (enemy.getSprite().getBottomLeft().x > settings_1.default.world.width ||
                    enemy.getSprite().getBottomLeft().y < 0 ||
                    enemy.getSprite().getTopRight().x < 0 ||
                    enemy.getSprite().getTopRight().y > settings_1.default.world.height ||
                    (!enemy.getSprite().visible && !enemy.getSprite().body.enable)) {
                    enemy.kill();
                }
                else {
                    filteredEnemies.push(enemy);
                }
            });
            this.enemies = filteredEnemies;
        };
        return Game;
    }());
    exports.default = Game;
});
//# sourceMappingURL=game.js.map