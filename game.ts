import Background from './background';
import Player from './player';

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