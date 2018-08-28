const settings = {
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
        grass: {
            key: "grass",
            path: "assets/grass2.png",
            width: 512,
            height: 512
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
            path: "assets/enemy_sprite.png",
            frameWidth: 97,
            frameHeight: 65
        }
    }
}

export default settings;