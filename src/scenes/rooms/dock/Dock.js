import RoomScene from '../RoomScene'

import { SimpleButton, Button, MoveTo, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Dock extends RoomScene {

    constructor() {
        super("Dock");

        /** @type {Phaser.GameObjects.Sprite} */
        this.bg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bench;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bencharm;
        /** @type {Phaser.GameObjects.Sprite} */
        this.trees;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fence;
        /** @type {Phaser.GameObjects.Sprite} */
        this.stairs;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lantern;
        /** @type {Phaser.GameObjects.Sprite} */
        this.boat;
        /** @type {Phaser.GameObjects.Sprite} */
        this.wharf;
        /** @type {Phaser.GameObjects.Sprite} */
        this.barrier2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.barrier;
        /** @type {Phaser.GameObjects.Sprite} */
        this.tubes;
        /** @type {Phaser.GameObjects.Sprite} */
        this.table;
        /** @type {Phaser.GameObjects.Sprite} */
        this.board;
        /** @type {Phaser.GameObjects.Sprite} */
        this.shop;
        /** @type {Phaser.GameObjects.Sprite} */
        this.tape;
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'beach': () => this.triggerRoom(400, 950, 430),
            'village': () => this.triggerRoom(200, 1300, 760),
            'town': () => this.triggerRoom(100, 368, 640),
            'hydro': () => this.triggerGame("hydroHopper", 924)
        }

        this.music = "1162"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorPreload() {

        this.load.pack("dock-pack", "assets/media/rooms/dock/dock-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(843, 457, "dock", "bg");

        // bench
        const bench = this.add.sprite(177, 336, "dock", "bench");

        // bencharm
        const bencharm = this.add.sprite(117, 385.10402802800803, "dock", "bencharm");
        bencharm.setOrigin(0.5, 0.621806677645226);

        // trees
        const trees = this.add.sprite(1469, 531, "dock", "trees");

        // fence
        const fence = this.add.sprite(1219, 679, "dock", "fence");

        // stairs
        const stairs = this.add.sprite(368, 502, "dock", "stairs");

        // lantern
        const lantern = this.add.sprite(475, 510, "dock", "lantern");

        // boat
        const boat = this.add.sprite(174, 652, "dock", "floatyboaty0001");

        // wharf
        const wharf = this.add.sprite(232, 633, "dock", "wharf");

        // barrier2
        const barrier2 = this.add.sprite(532, 637, "dock", "barrier2");

        // barrier
        const barrier = this.add.sprite(296, 839, "dock", "barrier");

        // tubes
        const tubes = this.add.sprite(536, 678, "dock", "tubes0001");

        // table
        const table = this.add.sprite(939, 342, "dock", "table");

        // board_container
        const board_container = this.add.container(753, 656);

        // board
        const board = this.add.sprite(34, 0, "dock", "board");
        board_container.add(board);

        // shop
        const shop = this.add.sprite(0, 8, "dock", "uncurl0001");
        shop.scaleX = -1.5;
        shop.scaleY = 1.5;
        board_container.add(shop);

        // tape
        const tape = this.add.sprite(7, -25, "dock", "tape");
        tape.scaleX = -1.5;
        tape.scaleY = 1.5;
        board_container.add(tape);

        // lists
        const sort = [barrier2, tubes, barrier, bencharm, bench, lantern, table, board_container];

        // boat (components)
        const boatShowHint = new ShowHint(boat);
        boatShowHint.text = "Hydro Hopper";
        const boatMoveTo = new MoveTo(boat);
        boatMoveTo.x = 200;
        boatMoveTo.y = 650;
        new SimpleButton(boat);

        // tubes (components)
        const tubesSimpleButton = new SimpleButton(tubes);
        tubesSimpleButton.hoverCallback = () => this.onTubesHover();

        // shop (components)
        const shopSimpleButton = new SimpleButton(shop);
        shopSimpleButton.hoverCallback = () => this.onShopOver();
        shopSimpleButton.hoverOutCallback = () => this.onShopOut();

        this.bg = bg;
        this.bench = bench;
        this.bencharm = bencharm;
        this.trees = trees;
        this.fence = fence;
        this.stairs = stairs;
        this.lantern = lantern;
        this.boat = boat;
        this.wharf = wharf;
        this.barrier2 = barrier2;
        this.barrier = barrier;
        this.tubes = tubes;
        this.table = table;
        this.board = board;
        this.shop = shop;
        this.tape = tape;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.boat.play("floatyboaty")
    }

    onTubesHover(){
        this.tubes.play("docktubes")
    }

    onShopOver() {
        this.shop.play("uncurl")
    }

    onShopOut() {
        this.shop.stop("uncurl")
        this.shop.setFrame("uncurl0001")
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
