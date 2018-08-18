class Player {
    _scene : Phaser.Scene;
    _player: Phaser.Physics.Arcade.Sprite;
    v = 200;

    constructor(scene: Phaser.Scene) {
        this._scene = scene;
        this._player = this._scene.physics.add.sprite(400, 300, 'player'); // TODO: hardcoded
        this._player.play('playerFly', true, 0);
        this._player.setCollideWorldBounds(true);
    }

    moveLeft() : void {
        this._player.setVelocityX(-this.v);
        this._player.flipX = true;
    }

    moveRight() : void {
        this._player.setVelocityX(this.v);
        this._player.flipX = false;
    }

    moveUp() : void {
        this._player.setVelocityY(-this.v);
    }

    moveDown() : void {
        this._player.setVelocityY(this.v);
    }

    update() : void {
        this._player.setVelocity(0, 0);
    }
}

export default Player;