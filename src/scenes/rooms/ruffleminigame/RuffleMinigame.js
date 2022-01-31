import RoomScene from '../RoomScene'


/* START OF COMPILED CODE */

export default class RuffleMinigame extends RoomScene {

    constructor() {
        super("RuffleMinigame");

        /* START-USER-CTR-CODE */

        //this.music = "1160"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.rectangle(760, 480, 1520, 960);
        bg.isFilled = true;

        // lists
        const sort = [];

        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Array<any>} */
    sort;

    /* START-USER-CODE */

    create() {
        super.create()
    }

    //preload() {
        //this.load.audio("1160", "assets/media/music/1160.mp3");
    //}


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
