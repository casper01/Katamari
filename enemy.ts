import settings from "./settings"
import IMovable from "./interfaces/IMovable"

class Enemy implements IMovable {
    private _scene: Phaser.Scene;
    private _sprite: Phaser.Physics.Arcade.Sprite;
    private _size: number;

    constructor(scene: Phaser.Scene, pos: any, v: any, size: number) {
        this._scene = scene;
        this._size = size;
        this._sprite = this._scene.physics.add.sprite(pos.x, pos.y, 'enemy');
        this._sprite.play('enemyFly', true, 0);
        this._sprite.setVelocity(v.x, v.y);
        this._sprite.setScale(size, size);

        if (v.x < 0) {
            this._sprite.flipX = true;
        }
    }

    getSprite() : Phaser.Physics.Arcade.Sprite {
        return this._sprite;
    }

    getSize() : number {
        return this._size;
    }

    moveLeft() : void {
        this._sprite.x -= settings.player.bgVelocity;
    }
    
    moveRight() : void {
        this._sprite.x += settings.player.bgVelocity;
    }

    moveUp() : void {
        this._sprite.y -= settings.player.bgVelocity;
    }
    
    moveDown() : void {
        this._sprite.y += settings.player.bgVelocity;
    }

    kill() : void {
        this._sprite.destroy();
    }
}

export default Enemy;