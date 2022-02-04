import RoomScene from '../RoomScene'

import { Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Beach extends RoomScene {

    constructor() {
        super("Beach");

        /** @type {Phaser.GameObjects.Sprite} */
        this.woodrailing;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftrocks;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lighthousedoor;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lighthouserailing;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rightchair;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rightchairarm;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftchair;
        /** @type {Phaser.GameObjects.Sprite} */
        this.snowcastle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.trees;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rightrocks;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 450, 750),
            'dock': () => this.triggerRoom(800, 240, 420),
            'light': () => this.unimplementedPrompt(),
            'ship': null
        }
        this.music = "582"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorPreload() {

        this.load.pack("beach-pack", "assets/media/rooms/beach/beach-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(726, 456, "beach", "bg");

        // woodrailing
        const woodrailing = this.add.sprite(161, 524, "beach", "woodrailing");

        // leftrocks
        const leftrocks = this.add.sprite(249, 650, "beach", "leftrocks");

        // lighthousedoor
        const lighthousedoor = this.add.sprite(397, 322, "beach", "lighthousedoor");

        // lighthouserailing
        const lighthouserailing = this.add.sprite(382, 411, "beach", "lighthouserailing");

        // rightchair
        const rightchair = this.add.sprite(1013, 480, "beach", "rightchair");

        // rightchairarm
        const rightchairarm = this.add.sprite(948.0086684597807, 559.7832885054825, "beach", "rightchairarm");
        rightchairarm.setOrigin(0.48642011588740636, 0.7478328850548246);

        // leftchair
        const leftchair = this.add.sprite(850, 545, "beach", "leftchair");

        // snowcastle
        const snowcastle = this.add.sprite(775, 690, "beach", "snowcastle");

        // trees
        const trees = this.add.sprite(1382, 441, "beach", "trees");

        // rightrocks
        const rightrocks = this.add.sprite(1352, 616, "beach", "rightrocks");

        // bucket
        this.add.image(1100, 575, "beach", "bucket");

        // lists
        const sort = [rightrocks, trees, snowcastle, leftchair, rightchairarm, rightchair, lighthouserailing, lighthousedoor];

        // lighthousedoor (components)
        const lighthousedoorButton = new Button(lighthousedoor);
        lighthousedoorButton.spriteName = "lighthousedoor";
        lighthousedoorButton.activeFrame = false;
        const lighthousedoorMoveTo = new MoveTo(lighthousedoor);
        lighthousedoorMoveTo.x = 420;
        lighthousedoorMoveTo.y = 400;

        this.woodrailing = woodrailing;
        this.leftrocks = leftrocks;
        this.lighthousedoor = lighthousedoor;
        this.lighthouserailing = lighthouserailing;
        this.rightchair = rightchair;
        this.rightchairarm = rightchairarm;
        this.leftchair = leftchair;
        this.snowcastle = snowcastle;
        this.trees = trees;
        this.rightrocks = rightrocks;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
