import RoomScene from '../RoomScene'

import { Animation, Button, MoveTo, SimpleButton, Zone } from '@components/components'


/* START OF COMPILED CODE */

export default class Shop extends RoomScene {

    constructor() {
        super("Shop");

        /** @type {Phaser.GameObjects.Sprite} */
        this.bg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rail;
        /** @type {Phaser.GameObjects.Sprite} */
        this.speakers;
        /** @type {Phaser.GameObjects.Sprite} */
        this.chairBody;
        /** @type {Phaser.GameObjects.Sprite} */
        this.chairArm;
        /** @type {Phaser.GameObjects.Sprite} */
        this.chairBody_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.chairArm_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.deskChair;
        /** @type {Phaser.GameObjects.Sprite} */
        this.desk;
        /** @type {Phaser.GameObjects.Sprite} */
        this.chest;
        /** @type {Phaser.GameObjects.Sprite} */
        this.register;
        /** @type {Phaser.GameObjects.Sprite} */
        this.spinner;
        /** @type {Phaser.GameObjects.Sprite} */
        this.door;
        /** @type {Phaser.GameObjects.Sprite} */
        this.circularStool;
        /** @type {Phaser.GameObjects.Sprite} */
        this.squareStool;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.catalog;
        /** @type {Phaser.GameObjects.Sprite} */
        this.unlock;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 932, 560)
        }
        this.music = '1173'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("clothesShop-pack", "assets/media/rooms/clothesShop/clothesShop-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(765, 468, "clothesShop", "bg");

        // rail
        const rail = this.add.sprite(363, 472, "clothesShop", "rail");

        // speakers
        const speakers = this.add.sprite(762, 224, "clothesShop", "speakers0001");

        // chairBody
        const chairBody = this.add.sprite(282, 640, "clothesShop", "chairBody");

        // chairArm
        const chairArm = this.add.sprite(301, 686, "clothesShop", "chairArm");

        // chairBody_1
        const chairBody_1 = this.add.sprite(336, 767, "clothesShop", "chairBody");

        // chairArm_1
        const chairArm_1 = this.add.sprite(355, 814, "clothesShop", "chairArm");

        // deskChair
        const deskChair = this.add.sprite(1370, 380, "clothesShop", "deskChair");

        // desk
        const desk = this.add.sprite(1351, 461, "clothesShop", "desk");

        // chest
        const chest = this.add.sprite(1353, 539, "clothesShop", "chest");

        // register
        const register = this.add.sprite(1289, 369, "clothesShop", "register");

        // spinner
        const spinner = this.add.sprite(1403, 436, "clothesShop", "spinner0001");

        // door
        const door = this.add.sprite(1103, 248, "clothesShop", "door");

        // circularStool
        const circularStool = this.add.sprite(1119, 628, "clothesShop", "circularStool");

        // squareStool
        const squareStool = this.add.sprite(1054, 691, "clothesShop", "squareStool");

        // fg
        const fg = this.add.sprite(782, 481, "clothesShop", "fg");

        // catalog
        const catalog = this.add.sprite(1340, 1055, "clothesShop", "style");
        catalog.setOrigin(0, 2);

        // unlock
        const unlock = this.add.sprite(1415, 771, "clothesShop", "unlock");
        unlock.visible = false;

        // lists
        const sort = [catalog];

        // register (components)
        const registerButton = new Button(register);
        registerButton.spriteName = "register";
        registerButton.activeFrame = false;

        // spinner (components)
        const spinnerSimpleButton = new SimpleButton(spinner);
        spinnerSimpleButton.hoverCallback = () => this.onSpinnerOver();
        spinnerSimpleButton.hoverOutCallback = () => this.onSpinnerOut();

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 1100;
        doorMoveTo.y = 350;

        // catalog (components)
        const catalogButton = new Button(catalog);
        catalogButton.spriteName = "style";
        catalogButton.callback = () => this.interface.loadExternal('ClothingCatalog');
        catalogButton.activeFrame = false;
        catalogButton.pixelPerfect = true;

        this.bg = bg;
        this.rail = rail;
        this.speakers = speakers;
        this.chairBody = chairBody;
        this.chairArm = chairArm;
        this.chairBody_1 = chairBody_1;
        this.chairArm_1 = chairArm_1;
        this.deskChair = deskChair;
        this.desk = desk;
        this.chest = chest;
        this.register = register;
        this.spinner = spinner;
        this.door = door;
        this.circularStool = circularStool;
        this.squareStool = squareStool;
        this.fg = fg;
        this.catalog = catalog;
        this.unlock = unlock;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onSpinnerOver(){
        this.spinner.play("spinner")
    }

    onSpinnerOut(){
        this.spinner.stop("spinner")
        this.spinner.setFrame("spinner0001")
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
