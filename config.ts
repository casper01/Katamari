/// <reference path="lib/require.d.ts"/>
/// <reference path="lib/phaser.d.ts"/>


import SimpleGame from "./test";

require([], () => {
    console.log("Witamy w require");
    let game = new SimpleGame();
});
