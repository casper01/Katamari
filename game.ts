import Background from './background';
import Player from './player';
import Enemy from './enemy';
import settings from './settings';
import IMovable from './interfaces/IMovable';

class Game {
    _scene: Phaser.Scene
    _cursors: any;
    _background: Background;
    player: Player;
    enemies: Enemy[];
    boundingRect = {
        l: settings.world.marginL,
        t: settings.world.marginT,
        w: settings.world.width - settings.world.marginL - settings.world.marginR,
        h: settings.world.height - settings.world.marginT - settings.world.marginB
    };

    constructor(scene: Phaser.Scene) {
        this._scene = scene;
        this._cursors = this._scene.input.keyboard.createCursorKeys();
        this._scene.physics.world.setBounds(this.boundingRect.l, this.boundingRect.t, this.boundingRect.w, this.boundingRect.h);
        this._background = new Background(this._scene, settings.player.bgVelocity);
        this.player = new Player(this._scene);
        this.enemies = [];

        for(let i = 0; i < 5; i++) {
            this.addEnemy();
        }

    }

    addEnemy() {
        let pos = this.getRandomSidePos();
        let v = this.getRandomVelocity(pos.x, pos.y);
        let size = Math.random() * (settings.maxSize - settings.minSize) + settings.minSize;
        let enemy = new Enemy(this._scene, pos, v, size);
        this._scene.physics.add.collider(<any>this.player.getSprite(), <any>enemy.getSprite(), this.playerHitEnemy, Function(), {
            game: this,
            player: this.player,
            enemy: enemy
        });
        this.enemies.push(enemy);
    }

    getRandomVelocity(x: number, y: number) : any {
        let vx, vy, sign;
        if (x == 0) {
            sign = Math.random() < 0.5 ? -1 : 1;
            vx = _.random(settings.minV, settings.maxV);
            vy = sign * _.random(settings.minV, settings.maxV);
        }
        else if (y == 0) {
            sign = Math.random() < 0.5 ? -1 : 1;
            vx = sign * _.random(settings.minV, settings.maxV);
            vy = _.random(settings.minV, settings.maxV);
        }
        else if (x == settings.world.width) {
            sign = Math.random() < 0.5 ? -1 : 1;
            vx = -_.random(settings.minV, settings.maxV);
            vy = sign * _.random(settings.minV, settings.maxV);
        }
        else if (y == settings.world.height) {
            sign = Math.random() < 0.5 ? -1 : 1;
            vy = -_.random(settings.minV, settings.maxV);
            vx = sign * _.random(settings.minV, settings.maxV);
        }
        else {
            sign = Math.random() < 0.5 ? -1 : 1;
            vy = sign * _.random(settings.minV, settings.maxV);
            sign = Math.random() < 0.5 ? -1 : 1;
            vx = sign * _.random(settings.minV, settings.maxV);
        }
        return {
            x: vx,
            y: vy
        };
    }

    getRandomSidePos() : any {
        let side = _.random(3);
        let x, y;
        switch(side) {
        case 0:
            x = 0;
            y = _.random(settings.world.height);
            break;
        case 1:
            x = settings.world.width;
            y = _.random(settings.world.height);
            break;
        case 2:
            y = 0;
            x = _.random(settings.world.width);
            break;
        case 3:
            y = settings.world.height;
            x = _.random(settings.world.width);
            break;
        }
        return {
            x: x,
            y: y
        };
    }

    playerHitEnemy(this: any, player: Phaser.Physics.Arcade.Sprite, enemy: Phaser.Physics.Arcade.Sprite) : void {
        let e = <Enemy>this.enemy;
        let p = <Player>this.player;
        let game = <Game>this.game;

        if (p.getSize() > e.getSize()) {
            p.grow();
            e.getSprite().disableBody(true, true);
            let boom = game._scene.add.sprite(e.getSprite().x, e.getSprite().y, 'boom');
            boom.play('birdDestroy', true, 0);
        }
        else {
            // TODO: player should lose life 
            p.getSprite().disableBody(true, true);
            let boom = game._scene.add.sprite(p.getSprite().x, p.getSprite().y, 'boom');
            boom.play('birdDestroy', true, 0);
        }
    }

    private getAllMovingObjects() : IMovable[] {
        let allObjects : IMovable[] = [];
        allObjects = allObjects.concat(this.enemies);
        allObjects.push(this._background);
        return allObjects;
    }

    handleKeyPress() : void {
        if (this._cursors.left.isDown) {
            this.player.moveLeft();
            if (this.player._sprite.body.left == this.boundingRect.l) {
                this.getAllMovingObjects().forEach(obj => {
                    obj.moveRight();
                });
            }
        }
        if (this._cursors.right.isDown) {
            this.player.moveRight();
            if (this.player._sprite.body.right == this.boundingRect.l + this.boundingRect.w) {
                this.getAllMovingObjects().forEach(obj => {
                    obj.moveLeft();
                });
            }
        }
        if (this._cursors.up.isDown) {
            this.player.moveUp();
            if (this.player._sprite.body.top == this.boundingRect.t) {
                this.getAllMovingObjects().forEach(obj => {
                    obj.moveDown();
                });
            }
        }
        if (this._cursors.down.isDown) {
            this.player.moveDown();
            if (this.player._sprite.body.bottom == this.boundingRect.t + this.boundingRect.h) {
                this.getAllMovingObjects().forEach(obj => {
                    obj.moveUp();
                });
            }
        }
    }

    update() : void {
        this.player.update();
        this.handleKeyPress();
        this.removeEnemiesOffScreen();
        while (this.enemies.length < settings.enemyCount) {
            this.addEnemy();
        }
    }

    removeEnemiesOffScreen() : void {
        let filteredEnemies : Enemy[] = [];
        this.enemies.forEach(enemy => {
            if (enemy.getSprite().getBottomLeft().x > settings.world.width ||
                enemy.getSprite().getBottomLeft().y < 0 ||
                enemy.getSprite().getTopRight().x < 0 ||
                enemy.getSprite().getTopRight().y > settings.world.height ||
                (!enemy.getSprite().visible && !enemy.getSprite().body.enable)) {
                    enemy.kill();
                }
            else {
                filteredEnemies.push(enemy);
            }
        });
        this.enemies = filteredEnemies;
    }
}

export default Game;