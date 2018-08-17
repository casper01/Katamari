class Background {
    _moving_v: number;
    _sprite: any;
    _scene: Phaser.Scene;

    constructor(scene: any, moving_velocity: number) {
        this._moving_v = moving_velocity;
        this._scene = scene;
        this._sprite = this._scene.add.tileSprite(400, 300, 800, 600, 'grass'); // TODO: moze init spritow w jakims oddzielnym miejscu

    }

    moveLeft() : void {
        this._sprite.tilePositionX -= this._moving_v;
    }

    moveRight() : void {
        this._sprite.tilePositionX += this._moving_v;
    }

    moveUp() : void {
        this._sprite.tilePositionY -= this._moving_v;
    }

    moveDown() : void {
        this._sprite.tilePositionY += this._moving_v;
    }
}

export default Background;