define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var settings = {
        minV: 10,
        maxV: 200,
        minSize: 0.25,
        maxSize: 2,
        player: {
            startX: 400,
            startY: 300,
            growStep: 0.5,
            velocity: 200,
            bgVelocity: 4
        },
        world: {
            marginL: 150,
            marginR: 150,
            marginT: 100,
            marginB: 100,
            width: 800,
            height: 600
        },
        imgs: {
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
            }
        }
    };
    exports.default = settings;
});
//# sourceMappingURL=settings.js.map