import GameScene from '@games/GameScene'

/* START OF COMPILED CODE */

export default class RuffleMinigame extends GameScene {

    constructor() {
        super("RuffleMinigame");

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    // Write your code here

    create() {

        this._create();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
