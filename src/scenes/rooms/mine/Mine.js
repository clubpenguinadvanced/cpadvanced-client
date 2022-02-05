import RoomScene from '../RoomScene'

import { MoveTo, SimpleButton, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Mine extends RoomScene {

    constructor() {
        super("Mine");

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'cave': () => this.triggerRoom(806, 1200, 400),
            'gold': () => this.triggerRoom(813, 1200, 400),
            'rescue': () => this.triggerGame("puffleRescue", 949),
            'shack': () => this.triggerRoom(807, 1200, 400),
            'surfer': () => this.triggerGame("cartSurfer", 905)
        }

        this.music = "675"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorPreload() {

        this.load.pack("mine-pack", "assets/media/rooms/mine/mine-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(746, 468, "mine", "bg.png");

        // cartAnim
        const cartAnim = this.add.sprite(1360, 320, "mine", "cartAnim0001.png");

        // cartBack
        const cartBack = this.add.sprite(1142, 294, "mine", "cartBack.png");

        // cartFront
        const cartFront = this.add.sprite(1151, 420, "mine", "cartFront.png");

        // surferSign
        const surferSign = this.add.sprite(1395, 295, "mine", "surferSign.png");

        // goldMineWalkway
        const goldMineWalkway = this.add.sprite(1230, 654, "mine", "goldMineWalkway.png");

        // goldMineLight
        const goldMineLight = this.add.sprite(1348, 697, "mine", "goldMineLight.png");
        goldMineLight.alpha = 0.01;
        goldMineLight.alphaTopLeft = 0.01;
        goldMineLight.alphaTopRight = 0.01;
        goldMineLight.alphaBottomLeft = 0.01;
        goldMineLight.alphaBottomRight = 0.01;

        // floorRocksGoldMine
        const floorRocksGoldMine = this.add.sprite(956, 839, "mine", "floorRocksGoldMine.png");

        // caveEntrance
        const caveEntrance = this.add.sprite(101, 339, "mine", "caveEntrance.png");

        // floorRocksMiddle
        const floorRocksMiddle = this.add.sprite(368, 839, "mine", "floorRocksMiddle.png");

        // rescueBoard
        const rescueBoard = this.add.sprite(480, 186, "mine", "rescueBoard0001.png");

        // rescueTable
        const rescueTable = this.add.sprite(457, 374, "mine", "rescueTable.png");

        // puffle
        const puffle = this.add.sprite(353, 398, "mine", "puffle0001.png");

        // puffleBed
        const puffleBed = this.add.sprite(355, 434, "mine", "puffleBed.png");

        // floorRocksPuffle
        const floorRocksPuffle = this.add.sprite(333, 509, "mine", "floorRocksPuffle.png");

        // surfaceLight
        const surfaceLight = this.add.sprite(820, 207, "mine", "surfaceLight.png");
        surfaceLight.alpha = 0.01;
        surfaceLight.alphaTopLeft = 0.01;
        surfaceLight.alphaTopRight = 0.01;
        surfaceLight.alphaBottomLeft = 0.01;
        surfaceLight.alphaBottomRight = 0.01;

        // caveLight
        const caveLight = this.add.sprite(107, 405, "mine", "caveLight.png");
        caveLight.alpha = 0.01;
        caveLight.alphaTopLeft = 0.01;
        caveLight.alphaTopRight = 0.01;
        caveLight.alphaBottomLeft = 0.01;
        caveLight.alphaBottomRight = 0.01;

        // fg
        const fg = this.add.sprite(746, 982, "mine", "fg.png");
        fg.setOrigin(0.5, 1);

        // cart_btn
        const cart_btn = this.add.rectangle(1228, 370, 250, 150);
        cart_btn.angle = -25;
        cart_btn.fillColor = 2550781;
        cart_btn.fillAlpha = 0.5;

        // lists
        const sort = [cartBack, cartFront, surferSign, goldMineLight, floorRocksGoldMine, caveEntrance, floorRocksMiddle, rescueTable, puffle, puffleBed, floorRocksPuffle, surfaceLight, caveLight, fg, cart_btn];

        // goldMineLight (components)
        const goldMineLightSimpleButton = new SimpleButton(goldMineLight);
        goldMineLightSimpleButton.hoverCallback = () => this.onGoldMineOver();
        goldMineLightSimpleButton.hoverOutCallback = () => this.onGoldMineOut();
        const goldMineLightMoveTo = new MoveTo(goldMineLight);
        goldMineLightMoveTo.x = 1350;
        goldMineLightMoveTo.y = 700;

        // rescueBoard (components)
        const rescueBoardSimpleButton = new SimpleButton(rescueBoard);
        rescueBoardSimpleButton.hoverCallback = () => this.onRescueOver();
        rescueBoardSimpleButton.hoverOutCallback = () => this.onRescueOut();
        const rescueBoardMoveTo = new MoveTo(rescueBoard);
        rescueBoardMoveTo.x = 540;
        rescueBoardMoveTo.y = 400;
        const rescueBoardShowHint = new ShowHint(rescueBoard);
        rescueBoardShowHint.text = "Puffle Rescue";

        // surfaceLight (components)
        const surfaceLightSimpleButton = new SimpleButton(surfaceLight);
        surfaceLightSimpleButton.hoverCallback = () => this.onSurfaceOver();
        surfaceLightSimpleButton.hoverOutCallback = () => this.onSurfaceOut();
        const surfaceLightMoveTo = new MoveTo(surfaceLight);
        surfaceLightMoveTo.x = 820;
        surfaceLightMoveTo.y = 300;

        // caveLight (components)
        const caveLightSimpleButton = new SimpleButton(caveLight);
        caveLightSimpleButton.hoverCallback = () => this.onCaveOver();
        caveLightSimpleButton.hoverOutCallback = () => this.onCaveOut();
        const caveLightMoveTo = new MoveTo(caveLight);
        caveLightMoveTo.x = 150;
        caveLightMoveTo.y = 500;

        // cart_btn (components)
        const cart_btnSimpleButton = new SimpleButton(cart_btn);
        cart_btnSimpleButton.hoverCallback = () => this.onCartOver();
        cart_btnSimpleButton.hoverOutCallback = () => this.onCartOut();
        const cart_btnMoveTo = new MoveTo(cart_btn);
        cart_btnMoveTo.x = 1230;
        cart_btnMoveTo.y = 370;
        const cart_btnShowHint = new ShowHint(cart_btn);
        cart_btnShowHint.text = "Cart Surfer";

        this.bg = bg;
        this.cartAnim = cartAnim;
        this.cartBack = cartBack;
        this.cartFront = cartFront;
        this.surferSign = surferSign;
        this.goldMineWalkway = goldMineWalkway;
        this.goldMineLight = goldMineLight;
        this.floorRocksGoldMine = floorRocksGoldMine;
        this.caveEntrance = caveEntrance;
        this.floorRocksMiddle = floorRocksMiddle;
        this.rescueBoard = rescueBoard;
        this.rescueTable = rescueTable;
        this.puffle = puffle;
        this.puffleBed = puffleBed;
        this.floorRocksPuffle = floorRocksPuffle;
        this.surfaceLight = surfaceLight;
        this.caveLight = caveLight;
        this.fg = fg;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    bg;
    /** @type {Phaser.GameObjects.Sprite} */
    cartAnim;
    /** @type {Phaser.GameObjects.Sprite} */
    cartBack;
    /** @type {Phaser.GameObjects.Sprite} */
    cartFront;
    /** @type {Phaser.GameObjects.Sprite} */
    surferSign;
    /** @type {Phaser.GameObjects.Sprite} */
    goldMineWalkway;
    /** @type {Phaser.GameObjects.Sprite} */
    goldMineLight;
    /** @type {Phaser.GameObjects.Sprite} */
    floorRocksGoldMine;
    /** @type {Phaser.GameObjects.Sprite} */
    caveEntrance;
    /** @type {Phaser.GameObjects.Sprite} */
    floorRocksMiddle;
    /** @type {Phaser.GameObjects.Sprite} */
    rescueBoard;
    /** @type {Phaser.GameObjects.Sprite} */
    rescueTable;
    /** @type {Phaser.GameObjects.Sprite} */
    puffle;
    /** @type {Phaser.GameObjects.Sprite} */
    puffleBed;
    /** @type {Phaser.GameObjects.Sprite} */
    floorRocksPuffle;
    /** @type {Phaser.GameObjects.Sprite} */
    surfaceLight;
    /** @type {Phaser.GameObjects.Sprite} */
    caveLight;
    /** @type {Phaser.GameObjects.Sprite} */
    fg;
    /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Rectangle>} */
    sort;

    /* START-USER-CODE */

    create() {
        super.create()
        this.puffle.play("puffle")
    }

    onCaveOver(){
        this.caveLight.alpha = 1
        this.sound.add("mine-LightOn").play()
    }

    onCaveOut(){
        this.caveLight.alpha = 0.01
        this.sound.add("mine-LightOff").play()
    }

    onSurfaceOver(){
        this.surfaceLight.alpha = 1
        this.sound.add("mine-LightOn").play()
    }

    onSurfaceOut(){
        this.surfaceLight.alpha = 0.01
        this.sound.add("mine-LightOff").play()
    }

    onCartOver(){
        this.cartAnim.play("cartAnim")
        this.sound.add("mine-cart").play()
    }

    onCartOut(){
        this.cartAnim.stop("cartAnim")
        this.cartAnim.setFrame("cartAnim0001.png")
    }

    onGoldMineOver(){
        this.goldMineLight.alpha = 1
        this.sound.add("mine-LightOn").play()
    }

    onGoldMineOut(){
        this.goldMineLight.alpha = 0.01
        this.sound.add("mine-LightOff").play()
    }

    onRescueOver(){
        this.rescueBoard.setFrame("rescueBoard0002.png")
        this.sound.add("mine-PhoneRing").play()
    }

    onRescueOut(){
        this.rescueBoard.setFrame("rescueBoard0001.png")
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// export default template
