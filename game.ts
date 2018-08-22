import Background from './background';
import Player from './player';
import Enemy from './enemy';
import settings from './settings';

class Game {
    _scene: Phaser.Scene
    _cursors: any;
    _background: Background;
    player: Player;
    enemies: Enemy[];

    constructor(scene: Phaser.Scene) {
        this._scene = scene;
        this._cursors = this._scene.input.keyboard.createCursorKeys();
        this._scene.physics.world.setBounds(150, 100, 500, 400);
        this._background = new Background(this._scene, settings.player.velocity);
        this.player = new Player(this._scene);
        this.enemies = [];

        for(let i = 0; i < 10; i++) {
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
        else if (x == settings.width) {
            sign = Math.random() < 0.5 ? -1 : 1;
            vx = -_.random(settings.minV, settings.maxV);
            vy = sign * _.random(settings.minV, settings.maxV);
        }
        else if (y == settings.height) {
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
        console.log("side: ", side);
        switch(side) {
        case 0:
            x = 0;
            y = _.random(settings.height);
            console.log("x: ", x, " y: ", y);
            break;
        case 1:
            x = settings.width;
            y = _.random(settings.height);
            console.log("x: ", x, " y: ", y);
            break;
        case 2:
            y = 0;
            x = _.random(settings.width);
            console.log("x: ", x, " y: ", y);
            break;
        case 3:
            y = settings.height;
            x = _.random(settings.width);
            console.log("x: ", x, " y: ", y);
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

    update() : void {
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
    }
}

export default Game;