const settings = {
    width: 800,
    height: 600,
    minV: 10,
    maxV: 200,
    minSize: 0.25,
    maxSize: 2,
    player: {
        startX: 400,
        startY: 300,
        growStep: 0.5,
        velocity: 200
    },
    imgs: {
        sky: {
            key: "sky",
            path: "assets/sky.jpg"  // TODO: na razie unused
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
}

export default settings;