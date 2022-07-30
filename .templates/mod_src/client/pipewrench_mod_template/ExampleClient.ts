/** 
 * @noSelfInFile
 */

import { onGameBoot } from "ZomboidEvents";

export class ExampleClient {
    constructor() {
        print("ExampleClient instance created!");
        onGameBoot.addListener(() => this.onBoot());
    }

    private onBoot() {
        print("ExampleClient boot called!");
    }
}

new ExampleClient();
