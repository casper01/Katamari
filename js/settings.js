define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var settings = {
        minV: 10,
        maxV: 200,
        minSize: 0.25,
        maxSize: 3,
        enemyCount: 6,
        player: {
            startX: 400,
            startY: 300,
            growStep: 0.1,
            velocity: 200,
            bgVelocity: 4
        },
        world: {
            marginL: 200,
            marginR: 200,
            marginT: 150,
            marginB: 150,
            width: 800,
            height: 600
        },
        endText: {
            x: 200,
            y: 300,
            text: "Press SPACE to play again",
            conf: "32px Arial"
        },
        imgs: {
            black: {
                key: "black",
                path: "assets/black.png"
            },
            sky: {
                key: "sky",
                path: "assets/sky.jpg" // TODO: na razie unused
            },
            grass: {
                key: "grass",
                path: "assets/grass2.png"
            },
            player: {
                key: "player",
                path: "assets/bird_sprite.png",
                frameWidth: 97,
                frameHeight: 65
            },
            boom: {
                key: "boom",
                path: "assets/boom.png",
                frameWidth: 64,
                frameHeight: 64
            },
            enemy: {
                key: "enemy",
                path: "assets/enemy2_sprite.png",
                frameWidth: 97,
                frameHeight: 65
            },
            enemy2: {
                key: "enemy2",
                path: "assets/enemy_sprite.png",
                frameWidth: 81,
                frameHeight: 75
            }
        }
    };
    exports.default = settings;
});
//# sourceMappingURL=settings.js.map