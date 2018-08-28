import settings from "./settings"
import IMovable from "./interfaces/IMovable"

class Background implements IMovable {
    private _moving_v: number;
    private _sprite: Phaser.GameObjects.TileSprite;
    private _scene: Phaser.Scene;

    constructor(scene: any, moving_velocity: number) {
        this._moving_v = moving_velocity;
        this._scene = scene;
        this._sprite = this._scene.add.tileSprite(settings.world.width/2, settings.world.height/2, 
            settings.world.width, settings.world.height, settings.imgs.grass.key);
    }

    moveLeft() : void {
        this._sprite.tilePositionX += this._moving_v;
        if (this._sprite.tilePositionX > settings.imgs.grass.width) {
            this._sprite.tilePositionX -= settings.imgs.grass.width;
        }
    }

    moveRight() : void {
        this._sprite.tilePositionX -= this._moving_v;
        if (this._sprite.tilePositionX < 0) {
            this._sprite.tilePositionX += settings.imgs.grass.width;
        }
    }

    moveUp() : void {
        this._sprite.tilePositionY += this._moving_v;
        if (this._sprite.tilePositionY > settings.imgs.grass.height) {
            this._sprite.tilePositionY -= settings.imgs.grass.height;
        }
    }

    moveDown() : void {
        this._sprite.tilePositionY -= this._moving_v;
        if (this._sprite.tilePositionY < 0) {
            this._sprite.tilePositionY += settings.imgs.grass.height;
        }
    }
}

export default Background;