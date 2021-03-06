import settings from "./settings";

class EndScreen {
    private _scene: Phaser.Scene;
    private _sprite: Phaser.GameObjects.Sprite;
    private _text: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene) {
        this._scene = scene;
        this._sprite = this._scene.add.sprite(0, 0, settings.imgs.black.key);
        this._sprite.setScale(800, 600);
        this._text = this._scene.add.text(settings.endText.x, settings.endText.y, settings.endText.text, { font: settings.endText.conf });
        this.setVisibility(false);
    }

    setVisibility(mode: boolean) : void {
        if (mode) {
            this._sprite.alpha = 0.5;
            this._text.alpha = 1;
        }
        else {
            this._sprite.alpha = 0;
            this._text.alpha = 0;
        }
    }
}

export default EndScreen;