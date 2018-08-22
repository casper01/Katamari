import settings from "./settings"

class Background {
    _moving_v: number;
    _sprite: any;
    _scene: Phaser.Scene;

    constructor(scene: any, moving_velocity: number) {
        this._moving_v = moving_velocity;
        this._scene = scene;
        this._sprite = this._scene.add.tileSprite(settings.width/2, settings.height/2, 
            settings.width, settings.height, settings.imgs.grass.key);
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