import RoomScene from '../RoomScene'

import { SimpleButton, MoveTo } from '@components/components'


/* START OF COMPILED CODE */

export default class Shack extends RoomScene {

    constructor() {
        super("Shack");

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'dojo': () => this.triggerRoom(321, 1200, 400),
            'school': () => this.triggerRoom(122, 1200, 400),
            'mine': () => this.triggerRoom(808, 1200, 400),
            'forest': () => this.triggerRoom(809, 1200, 400)
        }

        this.music = "1172"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorPreload() {

        this.load.pack("mineShack-pack", "assets/media/rooms/mineShack/mineShack-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(753, 458, "mineShack", "bg.png");

        // bench
        const bench = this.add.sprite(1239, 561, "mineShack", "bench.png");

        // schoolExterior
        const schoolExterior = this.add.sprite(168, 344, "mineShack", "schoolExterior.png");

        // flag
        const flag = this.add.sprite(292, 126, "mineShack", "flag0001.png");

        // flagpole
        const flagpole = this.add.sprite(341, 240, "mineShack", "flagpole.png");

        // bigTree
        const bigTree = this.add.sprite(18.18606745103341, 435.1554366855416, "mineShack", "bigTree.png");
        bigTree.setOrigin(0.35438931072258273, 0.7324058219810949);

        // gateLeft
        const gateLeft = this.add.sprite(40, 606, "mineShack", "gateLeft.png");

        // gateRight
        const gateRight = this.add.sprite(478, 756, "mineShack", "gateRight.png");

        // book
        const book = this.add.sprite(722, 792, "mineShack", "book.png");

        // guitar
        const guitar = this.add.sprite(885, 811, "mineShack", "guitar.png");

        // unconsciousPeopleDontWantTea
        const unconsciousPeopleDontWantTea = this.add.sprite(830, 843, "mineShack", "unconsciousPeopleDontWantTea.png");

        // netLeft
        const netLeft = this.add.sprite(1037, 699, "mineShack", "netLeft.png");

        // netMiddle
        const netMiddle = this.add.sprite(1163, 700, "mineShack", "netMiddle.png");

        // netRight
        const netRight = this.add.sprite(1286, 763, "mineShack", "netRight.png");

        // schoolDoor
        const schoolDoor = this.add.sprite(497, 353, "mineShack", "schoolDoor0001.png");

        // stairway
        const stairway = this.add.sprite(1004, 363, "mineShack", "stairway0001.png");

        // lantern
        const lantern = this.add.sprite(1068, 454, "mineShack", "lantern.png");

        // bucket
        const bucket = this.add.sprite(1357, 748, "mineShack", "bucket.png");

        // tree
        const tree = this.add.sprite(1502, 590, "mineShack", "tree.png");

        // rock
        const rock = this.add.sprite(1492, 713, "mineShack", "rock.png");

        // veggiePatch
        const veggiePatch = this.add.sprite(1455, 845, "mineShack", "veggiePatch.png");

        // volleyball
        const volleyball = this.add.sprite(1135, 811, "mineShack", "volleyball0001.png");

        // overhead
        const overhead = this.add.sprite(989, 291, "mineShack", "overhead.png");

        // lists
        const sort = [bench, schoolExterior, flag, flagpole, bigTree, gateLeft, gateRight, book, guitar, unconsciousPeopleDontWantTea, netLeft, netMiddle, netRight, schoolDoor, lantern, bucket, tree, rock, veggiePatch, volleyball, overhead];

        // schoolDoor (components)
        const schoolDoorSimpleButton = new SimpleButton(schoolDoor);
        schoolDoorSimpleButton.hoverCallback = () => this.onSchoolOver();
        schoolDoorSimpleButton.hoverOutCallback = () => this.onSchoolOut();
        const schoolDoorMoveTo = new MoveTo(schoolDoor);
        schoolDoorMoveTo.x = 500;
        schoolDoorMoveTo.y = 400;

        // stairway (components)
        const stairwaySimpleButton = new SimpleButton(stairway);
        stairwaySimpleButton.hoverCallback = () => this.onMineOver();
        stairwaySimpleButton.hoverOutCallback = () => this.onMineOut();
        const stairwayMoveTo = new MoveTo(stairway);
        stairwayMoveTo.x = 1000;
        stairwayMoveTo.y = 400;

        this.bg = bg;
        this.bench = bench;
        this.schoolExterior = schoolExterior;
        this.flag = flag;
        this.flagpole = flagpole;
        this.bigTree = bigTree;
        this.gateLeft = gateLeft;
        this.gateRight = gateRight;
        this.book = book;
        this.guitar = guitar;
        this.unconsciousPeopleDontWantTea = unconsciousPeopleDontWantTea;
        this.netLeft = netLeft;
        this.netMiddle = netMiddle;
        this.netRight = netRight;
        this.schoolDoor = schoolDoor;
        this.stairway = stairway;
        this.lantern = lantern;
        this.bucket = bucket;
        this.tree = tree;
        this.rock = rock;
        this.veggiePatch = veggiePatch;
        this.volleyball = volleyball;
        this.overhead = overhead;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    bg;
    /** @type {Phaser.GameObjects.Sprite} */
    bench;
    /** @type {Phaser.GameObjects.Sprite} */
    schoolExterior;
    /** @type {Phaser.GameObjects.Sprite} */
    flag;
    /** @type {Phaser.GameObjects.Sprite} */
    flagpole;
    /** @type {Phaser.GameObjects.Sprite} */
    bigTree;
    /** @type {Phaser.GameObjects.Sprite} */
    gateLeft;
    /** @type {Phaser.GameObjects.Sprite} */
    gateRight;
    /** @type {Phaser.GameObjects.Sprite} */
    book;
    /** @type {Phaser.GameObjects.Sprite} */
    guitar;
    /** @type {Phaser.GameObjects.Sprite} */
    unconsciousPeopleDontWantTea;
    /** @type {Phaser.GameObjects.Sprite} */
    netLeft;
    /** @type {Phaser.GameObjects.Sprite} */
    netMiddle;
    /** @type {Phaser.GameObjects.Sprite} */
    netRight;
    /** @type {Phaser.GameObjects.Sprite} */
    schoolDoor;
    /** @type {Phaser.GameObjects.Sprite} */
    stairway;
    /** @type {Phaser.GameObjects.Sprite} */
    lantern;
    /** @type {Phaser.GameObjects.Sprite} */
    bucket;
    /** @type {Phaser.GameObjects.Sprite} */
    tree;
    /** @type {Phaser.GameObjects.Sprite} */
    rock;
    /** @type {Phaser.GameObjects.Sprite} */
    veggiePatch;
    /** @type {Phaser.GameObjects.Sprite} */
    volleyball;
    /** @type {Phaser.GameObjects.Sprite} */
    overhead;
    /** @type {Phaser.GameObjects.Sprite[]} */
    sort;

    /* START-USER-CODE */

    create() {
        super.create()

        this.flag.play("flag")
    }

    onSchoolOver(){
        this.schoolDoor.setFrame("schoolDoor0002.png")
        this.sound.add("mineShack-DoorOpen").play()
    }

    onSchoolOut(){
        this.schoolDoor.setFrame("schoolDoor0001.png")
        this.sound.add("mineShack-DoorClose").play()
    }

    onMineOver(){
        this.stairway.setFrame("stairway0002.png")
        this.sound.add("mineShack-LightOn").play()
    }

    onMineOut(){
        this.stairway.setFrame("stairway0001.png")
        this.sound.add("mineShack-LightOff").play()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// export default template
