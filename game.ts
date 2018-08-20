import Background from './background';
import Player from './player';
import Enemy from './enemy';

class Game {
    _scene: Phaser.Scene
    _cursors: any;
    _background: Background;
    player: Player;

    constructor(scene: Phaser.Scene) {
        this._scene = scene;
        this._cursors = this._scene.input.keyboard.createCursorKeys();
        this._scene.physics.world.setBounds(150, 100, 500, 400);
        this._background = new Background(this._scene, 4); // TODO: hardcoded velocity
        this.player = new Player(this._scene);

        // new stuff
        let enemy = new Enemy(this._scene);

        this._scene.physics.add.collider(this.player.getSprite(), enemy.getSprite(), this.hit, null, this);
    }

    hit(player: Phaser.Physics.Arcade.Sprite, enemy: Phaser.Physics.Arcade.Sprite) : void {
        enemy.disableBody(true, true);
        let boom = this._scene.add.sprite(enemy.x, enemy.y, 'boom');
        boom.play('birdDestroy', true, 0);
    }

    update() : void {
        let self = <Phaser.Scene><any> this;
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