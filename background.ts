import settings from "./settings"
import IMovable from "./interfaces/IMovable"

class Background implements IMovable {
    _moving_v: number;
    _sprite: Phaser.GameObjects.TileSprite;
    _scene: Phaser.Scene;

    constructor(scene: any, moving_velocity: number) {
        this._moving_v = moving_velocity;
        this._scene = scene;
        this._sprite = this._scene.add.tileSprite(settings.world.width/2, settings.world.height/2, 
            settings.world.width, settings.world.height, settings.imgs.grass.key);
    }

    moveLeft() : void {
        this._sprite.tilePositionX += this._moving_v;
    }

    moveRight() : void {
        this._sprite.tilePositionX -= this._moving_v;
    }

    moveUp() : void {
        this._sprite.tilePositionY += this._moving_v;
    }

    moveDown() : void {
        this._sprite.tilePositionY -= this._moving_v;
    }
}

export default Background;