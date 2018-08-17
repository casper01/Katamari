import Background from './background'

class Game {
    _scene: Phaser.Scene
    _cursors: any;
    _background: Background;

    constructor(scene: Phaser.Scene) {
        this._scene = scene;
        this._cursors = this._scene.input.keyboard.createCursorKeys();
        this._background = new Background(this._scene, 4); // TODO: hardcoded velocity
        
        // testing
        this._scene.add.sprite(100, 100, 'dragon').play('moveCharacter', true, 0);
    }

    update() : void {
        let self = <Phaser.Scene><any> this;

        if (this._cursors.left.isDown) {
            this._background.moveLeft();
        }
        if (this._cursors.right.isDown) {
            this._background.moveRight();
        }
        if (this._cursors.up.isDown) {
            this._background.moveUp();
        }
        if (this._cursors.down.isDown) {
            this._background.moveDown();
        }
    }
}

export default Game;