import RoomScene from '../RoomScene'

import { MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class DojoExt extends RoomScene {

    constructor() {
        super("DojoExt");

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'dojo': () => this.unimplementedPrompt(),
            'shack': () => this.triggerRoom(807, 1200, 400)
        }

        this.music = "1166"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorPreload() {

        this.load.pack("dojoCourtyard-pack", "assets/media/rooms/dojoCourtyard/dojoCourtyard-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(766, 459, "dojoCourtyard", "bg.png");

        // water
        const water = this.add.sprite(320, 357, "dojoCourtyard", "water0001.png");

        // bg_upper
        const bg_upper = this.add.sprite(860, 545, "dojoCourtyard", "bg_upper.png");

        // door
        const door = this.add.sprite(791, 496, "dojoCourtyard", "door0001.png");

        // dojo
        const dojo = this.add.sprite(679, 475, "dojoCourtyard", "dojo.png");

        // leftStatue
        const leftStatue = this.add.sprite(477, 835, "dojoCourtyard", "leftStatue.png");

        // rightStatue
        const rightStatue = this.add.sprite(1125, 826, "dojoCourtyard", "rightStatue.png");

        // trees
        const trees = this.add.sprite(1392, 783, "dojoCourtyard", "trees.png");

        // lists
        const sort = [leftStatue, rightStatue, trees];

        // door (components)
        const doorSimpleButton = new SimpleButton(door);
        doorSimpleButton.hoverCallback = () => this.onDojoOver();
        doorSimpleButton.hoverOutCallback = () => this.onDojoOut();
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 800;
        doorMoveTo.y = 600;

        this.bg = bg;
        this.water = water;
        this.bg_upper = bg_upper;
        this.door = door;
        this.dojo = dojo;
        this.leftStatue = leftStatue;
        this.rightStatue = rightStatue;
        this.trees = trees;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    bg;
    /** @type {Phaser.GameObjects.Sprite} */
    water;
    /** @type {Phaser.GameObjects.Sprite} */
    bg_upper;
    /** @type {Phaser.GameObjects.Sprite} */
    door;
    /** @type {Phaser.GameObjects.Sprite} */
    dojo;
    /** @type {Phaser.GameObjects.Sprite} */
    leftStatue;
    /** @type {Phaser.GameObjects.Sprite} */
    rightStatue;
    /** @type {Phaser.GameObjects.Sprite} */
    trees;
    /** @type {Phaser.GameObjects.Sprite[]} */
    sort;

    /* START-USER-CODE */

    create() {
        super.create()
        this.water.play("water")
    }

    onDojoOver() {
        this.door.setFrame("door0002.png")
    }

    onDojoOut() {
        this.door.setFrame("door0001.png")
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// export default template
