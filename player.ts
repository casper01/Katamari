class Player {
    _scene : Phaser.Scene;
    _sprite: Phaser.Physics.Arcade.Sprite;
    v = 200;

    constructor(scene: Phaser.Scene) {
        this._scene = scene;
        this._sprite = this._scene.physics.add.sprite(400, 300, 'player'); // TODO: hardcoded
        this._sprite.play('playerFly', true, 0);
        this._sprite.setCollideWorldBounds(true);
    }

    moveLeft() : void {
        this._sprite.setVelocityX(-this.v);
        this._sprite.flipX = true;
    }

    moveRight() : void {
        this._sprite.setVelocityX(this.v);
        this._sprite.flipX = false;
    }

    moveUp() : void {
        this._sprite.setVelocityY(-this.v);
    }

    moveDown() : void {
        this._sprite.setVelocityY(this.v);
    }

    update() : void {
        this._sprite.setVelocity(0, 0);
    }

    getSprite() : Phaser.Physics.Arcade.Sprite {
        return this._sprite;
    }
}

export default Player;