/** 
 * @noSelfInFile
 */

import { onGameBoot } from "ZomboidEvents";

export class ExampleServer {
    constructor() {
        print("ExampleServer instance created!");
        onGameBoot.addListener(() => this.onBoot());
    }

    private onBoot() {
        print("ExampleServer boot called!");
    }
}

new ExampleServer();
