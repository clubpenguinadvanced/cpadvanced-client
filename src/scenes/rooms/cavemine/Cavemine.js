import RoomScene from '../RoomScene'

import { MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Cavemine extends RoomScene {

    constructor() {
        super("Cavemine");

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'hats': () => this.interface.prompt.showItem(429),
            'lake': () => this.triggerRoom(814, 1200, 400),
            'mine': () => this.triggerRoom(808, 1200, 400)
            //                                         id   xpos  ypos
        }

        this.music = "532"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorPreload() {

        this.load.pack("goldMine-pack", "assets/media/rooms/goldMine/goldMine-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(795, 514, "goldMine", "bg.png");

        // goldPuffleAdopt
        const goldPuffleAdopt = this.add.sprite(391, 220, "goldMine", "goldPuffleAdopt0001.png");

        // backRightRope
        const backRightRope = this.add.sprite(459, 347, "goldMine", "backRightRope.png");

        // backLeftRope
        const backLeftRope = this.add.sprite(309, 357, "goldMine", "backLeftRope.png");

        // rightRope
        const rightRope = this.add.sprite(579, 411, "goldMine", "rightRope.png");

        // leftRope
        const leftRope = this.add.sprite(364, 436, "goldMine", "leftRope.png");

        // rock1
        const rock1 = this.add.sprite(320, 515, "goldMine", "rock1.png");

        // mineDoor
        const mineDoor = this.add.sprite(170, 561, "goldMine", "mineDoor.png");

        // stool1
        const stool1 = this.add.sprite(309, 794, "goldMine", "stool1.png");

        // stool2
        const stool2 = this.add.sprite(433, 845, "goldMine", "stool2.png");

        // table
        const table = this.add.sprite(259, 885, "goldMine", "table.png");

        // mineHover
        const mineHover = this.add.sprite(170, 573, "goldMine", "mineHover.png");
        mineHover.alpha = 0.01;
        mineHover.alphaTopLeft = 0.01;
        mineHover.alphaTopRight = 0.01;
        mineHover.alphaBottomLeft = 0.01;
        mineHover.alphaBottomRight = 0.01;

        // leftWall
        const leftWall = this.add.sprite(92, 387, "goldMine", "leftWall.png");

        // hiddenLakeHover
        const hiddenLakeHover = this.add.sprite(999, 399, "goldMine", "hiddenLakeHover.png");
        hiddenLakeHover.alpha = 0.01;
        hiddenLakeHover.alphaTopLeft = 0.01;
        hiddenLakeHover.alphaTopRight = 0.01;
        hiddenLakeHover.alphaBottomLeft = 0.01;
        hiddenLakeHover.alphaBottomRight = 0.01;

        // machinary
        const machinary = this.add.sprite(1055, 519, "goldMine", "machinary.png");

        // rock2
        const rock2 = this.add.sprite(431, 588, "goldMine", "rock2.png");

        // itemBox
        const itemBox = this.add.sprite(761, 477, "goldMine", "itemBox0001.png");

        // fg
        const fg = this.add.sprite(750, 484, "goldMine", "fg.png");

        // hat_btn
        const hat_btn = this.add.rectangle(744, 396, 200, 250);
        hat_btn.angle = 10;
        hat_btn.fillColor = 3728890;
        hat_btn.fillAlpha = 0.5;

        // lists
        const sort = [];

        // mineHover (components)
        const mineHoverSimpleButton = new SimpleButton(mineHover);
        mineHoverSimpleButton.hoverCallback = () => this.onMineOver();
        mineHoverSimpleButton.hoverOutCallback = () => this.onMineOut();
        const mineHoverMoveTo = new MoveTo(mineHover);
        mineHoverMoveTo.x = 170;
        mineHoverMoveTo.y = 600;

        // hiddenLakeHover (components)
        const hiddenLakeHoverSimpleButton = new SimpleButton(hiddenLakeHover);
        hiddenLakeHoverSimpleButton.hoverCallback = () => this.onHiddenLakeOver();
        hiddenLakeHoverSimpleButton.hoverOutCallback = () => this.onHiddenLakeOut();
        const hiddenLakeHoverMoveTo = new MoveTo(hiddenLakeHover);
        hiddenLakeHoverMoveTo.x = 1000;

        // hat_btn (components)
        const hat_btnSimpleButton = new SimpleButton(hat_btn);
        hat_btnSimpleButton.hoverCallback = () => this.onHatOver();
        hat_btnSimpleButton.hoverOutCallback = () => this.onHatOut();
        const hat_btnMoveTo = new MoveTo(hat_btn);
        hat_btnMoveTo.x = 720;
        hat_btnMoveTo.y = 500;

        this.bg = bg;
        this.goldPuffleAdopt = goldPuffleAdopt;
        this.backRightRope = backRightRope;
        this.backLeftRope = backLeftRope;
        this.rightRope = rightRope;
        this.leftRope = leftRope;
        this.rock1 = rock1;
        this.mineDoor = mineDoor;
        this.stool1 = stool1;
        this.stool2 = stool2;
        this.table = table;
        this.mineHover = mineHover;
        this.leftWall = leftWall;
        this.hiddenLakeHover = hiddenLakeHover;
        this.machinary = machinary;
        this.rock2 = rock2;
        this.itemBox = itemBox;
        this.fg = fg;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    bg;
    /** @type {Phaser.GameObjects.Sprite} */
    goldPuffleAdopt;
    /** @type {Phaser.GameObjects.Sprite} */
    backRightRope;
    /** @type {Phaser.GameObjects.Sprite} */
    backLeftRope;
    /** @type {Phaser.GameObjects.Sprite} */
    rightRope;
    /** @type {Phaser.GameObjects.Sprite} */
    leftRope;
    /** @type {Phaser.GameObjects.Sprite} */
    rock1;
    /** @type {Phaser.GameObjects.Sprite} */
    mineDoor;
    /** @type {Phaser.GameObjects.Sprite} */
    stool1;
    /** @type {Phaser.GameObjects.Sprite} */
    stool2;
    /** @type {Phaser.GameObjects.Sprite} */
    table;
    /** @type {Phaser.GameObjects.Sprite} */
    mineHover;
    /** @type {Phaser.GameObjects.Sprite} */
    leftWall;
    /** @type {Phaser.GameObjects.Sprite} */
    hiddenLakeHover;
    /** @type {Phaser.GameObjects.Sprite} */
    machinary;
    /** @type {Phaser.GameObjects.Sprite} */
    rock2;
    /** @type {Phaser.GameObjects.Sprite} */
    itemBox;
    /** @type {Phaser.GameObjects.Sprite} */
    fg;
    /** @type {Array<any>} */
    sort;

    /* START-USER-CODE */

    create() {
        super.create()
    }

    onHatOver(){
        this.itemBox.setFrame("itemBox0002.png")
    }

    onHatOut(){
        this.itemBox.setFrame("itemBox0001.png")
    }

    onMineOver(){
        this.mineHover.alpha = 1
        this.sound.add("goldMine-LightOn").play()
    }

    onMineOut(){
        this.mineHover.alpha = 0.01
        this.sound.add("goldMine-LightOff").play()
    }

    onHiddenLakeOver(){
        this.hiddenLakeHover.alpha = 1
        this.sound.add("goldMine-LightOn").play()
    }

    onHiddenLakeOut(){
        this.hiddenLakeHover.alpha = 0.01
        this.sound.add("goldMine-LightOff").play()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// export default template
