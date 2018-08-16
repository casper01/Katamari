class SimpleGame {
    game : Phaser.Game;
    width = 800;
    height = 600;
    background : any;
    player : any;
    cursors : any;
    xx = 0;
    yy = 0;

    constructor() {

        let config = {
            type: Phaser.AUTO,
            width: this.width,
            height: this.height,
            scene: {
                preload: this.preload,
                create: this.create,
                update: this.update,
            }
        };
        
        this.game = new Phaser.Game(config);
    }

    preload() : void {
        let self = <Phaser.Scene><any> this;
        self.load.image('sky', 'assets/sky.jpg');
        self.load.image('grass', 'assets/grass2.png');
    }

    create() : void {
        let self = <Phaser.Scene><any> this;
        this.background = self.add.tileSprite(400, 300, 800, 600, 'grass');
        
        this.cursors = self.input.keyboard.createCursorKeys();
        this.xx = 0;
        this.yy = 0;
    }

    update() : void {
        let self = <Phaser.Scene><any> this;

        if (this.cursors.left.isDown) {
            this.xx = -2;
        }
        if (this.cursors.right.isDown) {
            this.xx = 2;
        }
        if (this.cursors.up.isDown) {
            this.yy = -2;
        }
        if (this.cursors.down.isDown) {
            this.yy = 2;
        }
        if (this.cursors.left.isUp && this.cursors.right.isUp) {
            this.xx = 0;
        }
        if (this.cursors.up.isUp && this.cursors.down.isUp) {
            this.yy = 0;
        }

        this.background.tilePositionX += this.xx;
        this.background.tilePositionY += this.yy;
        // console.log(this.background.tilePositionX, this.background.tilePositionY, this.xx, this.yy);
    }
}

export default SimpleGame;
