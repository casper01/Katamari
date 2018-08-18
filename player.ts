class Player {
    _scene : Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this._scene = scene;
        this._scene.add.sprite(100, 100, 'player').play('playerFly', true, 0);
    }
}

export default Player;