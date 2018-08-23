import settings from "./settings"
import IMovable from "./interfaces/IMovable"

class Enemy implements IMovable {
    private _scene: Phaser.Scene;
    private _sprite: Phaser.Physics.Arcade.Sprite;
    private _size: number;

    constructor(scene: Phaser.Scene, pos: any, v: any, size: number) {
        this._scene = scene;
        this._sprite = this._scene.physics.add.sprite(pos.x, pos.y, 'player');
        this._size = size;
        this._sprite.setVelocity(v.x, v.y);
        this._sprite.setScale(size, size);
    }

    getSprite() : Phaser.Physics.Arcade.Sprite {
        return this._sprite;
    }

    getSize() : number {
        return this._size;
    }

    moveLeft() : void {
        this._sprite.setPosition(this._sprite.body.center.x - settings.player.bgVelocity, this._sprite.body.center.y);
    }
    
    moveRight() : void {
        this._sprite.setPosition(this._sprite.body.center.x + settings.player.bgVelocity, this._sprite.body.center.y);
    }

    moveUp() : void {
        this._sprite.setPosition(this._sprite.body.center.x, this._sprite.body.center.y - settings.player.bgVelocity);
    }

    moveDown() : void {
        this._sprite.setPosition(this._sprite.body.center.x, this._sprite.body.center.y + settings.player.bgVelocity);
    }

    kill() : void {
        this._sprite.destroy();
    }
}

export default Enemy;