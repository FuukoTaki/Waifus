import { Screen } from "./screen.js";

export class ScreenManager {

    constructor(currentScreen) {

        if (currentScreen instanceof Screen) {
            console.log("ScreenDetected.");
        }

        this.currentScreen = currentScreen;
    }

    switchScreen(newScreen) {

        if (newScreen instanceof Screen) {


        }

        this.currentScreen.end();

        this.currentScreen = newScreen;
    }
}