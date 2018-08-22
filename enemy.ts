class Enemy {
    private _scene: Phaser.Scene;
    private _sprite: Phaser.Physics.Arcade.Sprite;

    constructor(scene: Phaser.Scene, pos: any, v: any, size: number) {
        this._scene = scene;
        this._sprite = this._scene.physics.add.sprite(pos.x, pos.y, 'player'); // TODO: hardcoded
        this._sprite.setVelocity(v.x, v.y);
        this._sprite.setScale(size, size);
    }

    getSprite() : Phaser.Physics.Arcade.Sprite {
        return this._sprite;
    }
}

export default Enemy;