/// <reference path="lib/require.d.ts"/>
/// <reference path="lib/phaser.d.ts"/>
define(["require", "exports", "./test"], function (require, exports, test_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require([], function () {
        console.log("Witamy w require");
        var game = new test_1.default();
    });
});
//# sourceMappingURL=config.js.map