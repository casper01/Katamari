import settings from "./settings";
import IMovable from "./interfaces/IMovable"

class Player implements IMovable {
    private _scene : Phaser.Scene;
    private _sprite: Phaser.Physics.Arcade.Sprite;
    private _size: number;
    private _v = settings.player.velocity;

    constructor(scene: Phaser.Scene) {
        this._size = 1;
        this._scene = scene;
        this._sprite = this._scene.physics.add.sprite(settings.player.startX, settings.player.startY, settings.imgs.player.key);
        this._sprite.play('playerFly', true, 0);
        this._sprite.setCollideWorldBounds(true);
        this._sprite.setScale(this._size, this._size);
    }

    moveLeft() : void {
        this._sprite.setVelocityX(-this._v);
        this._sprite.flipX = true;
    }

    moveRight() : void {
        this._sprite.setVelocityX(this._v);
        this._sprite.flipX = false;
    }

    moveUp() : void {
        this._sprite.setVelocityY(-this._v);
    }

    moveDown() : void {
        this._sprite.setVelocityY(this._v);
    }

    update() : void {
        this._sprite.setVelocity(0, 0);
    }

    getSprite() : Phaser.Physics.Arcade.Sprite {
        return this._sprite;
    }

    getSize() : number {
        return this._size;
    }

    grow() : void {
        if (this._size > 2) {
            return;
        }

        this._size += settings.player.growStep;
        this._sprite.setScale(this._size, this._size);
    }

    getWidth() : number { 
        return this._sprite.width;
    }

    getHeight() : number { 
        return this._sprite.height;
    }

    isAlive() : boolean {
        return this._sprite.visible && this._sprite.body.enable;
    }
}

export default Player;