class Enemy {
    private _scene: Phaser.Scene;
    private _sprite: Phaser.Physics.Arcade.Sprite;

    constructor(scene: Phaser.Scene) {
        this._scene = scene;
        this._sprite = this._scene.physics.add.sprite(200, 200, 'player'); // TODO: hardcoded
    }

    getSprite() : Phaser.Physics.Arcade.Sprite {
        return this._sprite;
    }
}

export default Enemy;