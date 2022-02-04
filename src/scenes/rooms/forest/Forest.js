import RoomScene from '../RoomScene'

import { MoveTo, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class Forest extends RoomScene {

    constructor() {
        super("Forest");

        /** @type {Phaser.GameObjects.Sprite} */
        this.bg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.wateranimbottom;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waterfallanimtop;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waterfallanimmid;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waterfallanimdrops;
        /** @type {Phaser.GameObjects.Sprite} */
        this.stump;
        /** @type {Phaser.GameObjects.Sprite} */
        this.backtree;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bgfront;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fallen;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cave;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cavepebble;
        /** @type {Phaser.GameObjects.Sprite} */
        this.islandright;
        /** @type {Phaser.GameObjects.Sprite} */
        this.islandmid;
        /** @type {Phaser.GameObjects.Sprite} */
        this.islandleft;
        /** @type {Phaser.GameObjects.Sprite} */
        this.righttrees;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rightbush;
        /** @type {Phaser.GameObjects.Sprite} */
        this.stairs;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rock;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fg;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 1240, 660),
            'shack': () => this.triggerRoom(807, 500, 800),
            'cove': () => this.triggerRoom(810, 520, 416)
        }

        this.music = "1168"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorPreload() {

        this.load.pack("forest-pack", "assets/media/rooms/forest/forest-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(792, 453, "forest", "bg");

        // wateranimbottom
        const wateranimbottom = this.add.sprite(843, 308, "forest", "wateranimbottom0001");

        // waterfallanimtop
        const waterfallanimtop = this.add.sprite(831, 163, "forest", "waterfallanimtop0001");

        // waterfallanimmid
        const waterfallanimmid = this.add.sprite(839, 232, "forest", "waterfallanimmid0001");

        // waterfallanimdrops
        const waterfallanimdrops = this.add.sprite(842, 239, "forest", "waterfallanimdrops0001");

        // stump
        const stump = this.add.sprite(496, 308, "forest", "stump");

        // backtree
        const backtree = this.add.sprite(391, 139, "forest", "backtree");

        // bgfront
        const bgfront = this.add.sprite(631, 181, "forest", "bgfront");

        // fallen
        const fallen = this.add.sprite(728, 313, "forest", "fallen");

        // cave
        const cave = this.add.sprite(1112.8677120524321, 334.0015293780231, "forest", "cave");
        cave.setOrigin(0.5377353005325134, 0.9133918791542961);

        // cavepebble
        const cavepebble = this.add.sprite(1174, 345, "forest", "cavepebble");

        // islandright
        const islandright = this.add.sprite(1010.655152937067, 468.2069082377599, "forest", "islandright");
        islandright.setOrigin(0.7026897466489224, 0.23470527515225756);

        // islandmid
        const islandmid = this.add.sprite(757, 535, "forest", "islandmid");

        // islandleft
        const islandleft = this.add.sprite(618.4875151319026, 522.9441207316119, "forest", "islandleft");
        islandleft.setOrigin(0.49647439424685913, 0.3743868499376673);

        // righttrees
        const righttrees = this.add.sprite(1515, 329, "forest", "righttrees");

        // rightbush
        const rightbush = this.add.sprite(1488, 699, "forest", "rightbush");

        // stairs
        const stairs = this.add.sprite(1399, 828, "forest", "stairs");

        // rock
        const rock = this.add.sprite(83, 698, "forest", "rockopen0001");

        // fg
        const fg = this.add.sprite(609, 722, "forest", "fg");

        // lists
        const sort = [islandleft, islandright, islandmid, cave, cavepebble];

        // rock (components)
        const rockSimpleButton = new SimpleButton(rock);
        rockSimpleButton.hoverCallback = () => this.onRockOver();
        rockSimpleButton.hoverOutCallback = () => this.onRockOut();

        this.bg = bg;
        this.wateranimbottom = wateranimbottom;
        this.waterfallanimtop = waterfallanimtop;
        this.waterfallanimmid = waterfallanimmid;
        this.waterfallanimdrops = waterfallanimdrops;
        this.stump = stump;
        this.backtree = backtree;
        this.bgfront = bgfront;
        this.fallen = fallen;
        this.cave = cave;
        this.cavepebble = cavepebble;
        this.islandright = islandright;
        this.islandmid = islandmid;
        this.islandleft = islandleft;
        this.righttrees = righttrees;
        this.rightbush = rightbush;
        this.stairs = stairs;
        this.rock = rock;
        this.fg = fg;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create(){
        super.create()

        this.waterfallanimdrops.play("waterfallanimdrops")
        this.waterfallanimmid.play("waterfallanimmid")
        this.waterfallanimtop.play("waterfallanimtop")
        this.wateranimbottom.play("wateranimbottom")
    }

    onRockOver(){
        this.rock.play("rockopen")
    }

    onRockOut(){
        this.rock.play("rockclose")
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
