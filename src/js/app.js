import { loader } from "./core/loader.js";
import { PlayScreen } from "./core/playScreen.js";
import { ScreenManager } from "./core/screenManager.js";

let canvas, ctx, scale;

let screenManager;
let playScreen;

const ScreensAvailable = {
    PLAY_SCREEN: "PLAY_SCREEN"
}

window.addEventListener("DOMContentLoaded", () => {

    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");
    scale = 1;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", (e) => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    console.log("Initial settings done.");

    loader();
});

export function startGame() {

    playScreen = new PlayScreen(ScreensAvailable.PLAY_SCREEN);

    screenManager = new ScreenManager(playScreen);
}