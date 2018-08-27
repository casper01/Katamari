import settings from "./settings";

class EndScreen {
    _scene: Phaser.Scene;
    _sprite: Phaser.GameObjects.Sprite;
    _text: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene) {
        this._scene = scene;
        this._sprite = this._scene.add.sprite(0, 0, settings.imgs.black.key);
        this._sprite.setScale(800, 600);
        this._text = this._scene.add.text(settings.endText.x, settings.endText.y, settings.endText.text, { font: settings.endText.conf });
        this._sprite.alpha = 0;
        this._text.alpha = 0;
    }

    setActive() : void {
        this._sprite.alpha = 0.5;
        this._text.alpha = 1;
    }
}

export default EndScreen;