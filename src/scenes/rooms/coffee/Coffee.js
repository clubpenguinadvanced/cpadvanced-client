import RoomScene from '../RoomScene'

import { MoveTo, SimpleButton, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Coffee extends RoomScene {

    constructor() {
        super("Coffee");

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'beans': () => this.unimplementedPrompt(),
            'book': () => this.triggerRoom(111, 1200, 400),
            'smoothie': () => this.unimplementedPrompt(),
            'town': () => this.triggerRoom(100, 1200, 400)
        }

        this.music = "1163"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorPreload() {

        this.load.pack("coffeeShop-pack", "assets/media/rooms/coffeeShop/coffeeShop-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(759, 487, "coffeeShop", "bg.png");

        // sofaStool
        const sofaStool = this.add.sprite(278, 493, "coffeeShop", "sofaStool.png");

        // door
        const door = this.add.sprite(738, 261, "coffeeShop", "door0001.png");

        // railings
        const railings = this.add.sprite(673, 539, "coffeeShop", "railings.png");

        // smashBottom
        const smashBottom = this.add.sprite(115, 652, "coffeeShop", "smashBottom.png");

        // counterBottom
        const counterBottom = this.add.container(115, 634);

        // countertopBottom
        const countertopBottom = this.add.sprite(70, 186, "coffeeShop", "countertopBottom.png");
        counterBottom.add(countertopBottom);

        // countertopBottomExtras
        const countertopBottomExtras = this.add.sprite(0, 126, "coffeeShop", "countertopBottomExtras0001.png");
        counterBottom.add(countertopBottomExtras);

        // registerBottom
        const registerBottom = this.add.sprite(192, 0, "coffeeShop", "registerBottom0001.png");
        counterBottom.add(registerBottom);

        // smashTop
        const smashTop = this.add.sprite(93, 482, "coffeeShop", "smashTopDefault.png");

        // stool1
        const stool1 = this.add.sprite(450, 728, "coffeeShop", "stool.png");

        // stool2
        const stool2 = this.add.sprite(431, 821, "coffeeShop", "stool.png");

        // counterTop
        const counterTop = this.add.container(933, 412);

        // countertopTop
        const countertopTop = this.add.sprite(3, 0, "coffeeShop", "countertopTop.png");
        counterTop.add(countertopTop);

        // registerTop
        const registerTop = this.add.sprite(0, 37, "coffeeShop", "registerTop0001.png");
        counterTop.add(registerTop);

        // table
        const table = this.add.sprite(476, 421, "coffeeShop", "table.png");

        // backSofa
        const backSofa = this.add.sprite(488, 292, "coffeeShop", "backSofa.png");

        // frontTable
        const frontTable = this.add.sprite(923, 790, "coffeeShop", "frontTable.png");

        // chairBottom
        const chairBottom = this.add.sprite(748, 779.174180419722, "coffeeShop", "chairBottom.png");
        chairBottom.setOrigin(0.5, 0.25803635147584353);

        // chairTop
        const chairTop = this.add.sprite(744, 782.0150632068667, "coffeeShop", "chairTop.png");
        chairTop.setOrigin(0.5, 0.6419508028855793);

        // chairArm
        const chairArm = this.add.sprite(719, 819.5879879613924, "coffeeShop", "chairArm.png");
        chairArm.setOrigin(0.5, 0.6557054924830535);

        // upstairs
        const upstairs = this.add.sprite(1335, 339, "coffeeShop", "upstairsDefault.png");

        // beanTrolley
        const beanTrolley = this.add.sprite(1367, 764, "coffeeShop", "beanTrolley0001.png");

        // fg
        const fg = this.add.sprite(723, 979.5, "coffeeShop", "fg.png");
        fg.setOrigin(0.5, 1);

        // sofa
        const sofa = this.add.container(1122, 776);

        // frontSofaLower
        const frontSofaLower = this.add.sprite(0, 69, "coffeeShop", "frontSofaLower.png");
        sofa.add(frontSofaLower);

        // frontSofaUpper
        const frontSofaUpper = this.add.sprite(110, 45, "coffeeShop", "frontSofaUpper.png");
        sofa.add(frontSofaUpper);

        // beanBag
        const beanBag = this.add.sprite(114, 0, "coffeeShop", "beanBag.png");
        sofa.add(beanBag);

        // lists
        const sort = [table, railings, fg, beanTrolley, frontTable, stool2, stool1, sofaStool, counterBottom, counterTop, sofa, chairBottom, chairTop, chairArm];

        // door (components)
        const doorSimpleButton = new SimpleButton(door);
        doorSimpleButton.hoverCallback = () => this.onDoorOver();
        doorSimpleButton.hoverOutCallback = () => this.onDoorOut();
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 740;
        doorMoveTo.y = 300;

        // registerBottom (components)
        const registerBottomSimpleButton = new SimpleButton(registerBottom);
        registerBottomSimpleButton.hoverCallback = () => this.onRegister2Over();
        registerBottomSimpleButton.hoverOutCallback = () => this.onRegister2Out();

        // smashTop (components)
        const smashTopSimpleButton = new SimpleButton(smashTop);
        smashTopSimpleButton.hoverCallback = () => this.onSmoothieOver();
        smashTopSimpleButton.hoverOutCallback = () => this.onSmoothieOut();
        const smashTopMoveTo = new MoveTo(smashTop);
        smashTopMoveTo.x = 100;
        smashTopMoveTo.y = 700;

        // registerTop (components)
        const registerTopSimpleButton = new SimpleButton(registerTop);
        registerTopSimpleButton.hoverCallback = () => this.onRegister1Over();
        registerTopSimpleButton.hoverOutCallback = () => this.onRegister1Out();

        // upstairs (components)
        const upstairsSimpleButton = new SimpleButton(upstairs);
        upstairsSimpleButton.hoverCallback = () => this.onStairsOver();
        upstairsSimpleButton.hoverOutCallback = () => this.onStairsOut();
        const upstairsMoveTo = new MoveTo(upstairs);
        upstairsMoveTo.x = 1300;
        upstairsMoveTo.y = 500;

        // beanTrolley (components)
        const beanTrolleySimpleButton = new SimpleButton(beanTrolley);
        beanTrolleySimpleButton.hoverCallback = () => this.onBeansOver();
        beanTrolleySimpleButton.hoverOutCallback = () => this.onBeansOut();
        const beanTrolleyMoveTo = new MoveTo(beanTrolley);
        beanTrolleyMoveTo.x = 1360;
        beanTrolleyMoveTo.y = 760;

        this.bg = bg;
        this.sofaStool = sofaStool;
        this.door = door;
        this.railings = railings;
        this.smashBottom = smashBottom;
        this.countertopBottom = countertopBottom;
        this.countertopBottomExtras = countertopBottomExtras;
        this.registerBottom = registerBottom;
        this.smashTop = smashTop;
        this.stool1 = stool1;
        this.stool2 = stool2;
        this.countertopTop = countertopTop;
        this.registerTop = registerTop;
        this.table = table;
        this.backSofa = backSofa;
        this.frontTable = frontTable;
        this.chairBottom = chairBottom;
        this.chairTop = chairTop;
        this.chairArm = chairArm;
        this.upstairs = upstairs;
        this.beanTrolley = beanTrolley;
        this.fg = fg;
        this.frontSofaLower = frontSofaLower;
        this.frontSofaUpper = frontSofaUpper;
        this.beanBag = beanBag;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    bg;
    /** @type {Phaser.GameObjects.Sprite} */
    sofaStool;
    /** @type {Phaser.GameObjects.Sprite} */
    door;
    /** @type {Phaser.GameObjects.Sprite} */
    railings;
    /** @type {Phaser.GameObjects.Sprite} */
    smashBottom;
    /** @type {Phaser.GameObjects.Sprite} */
    countertopBottom;
    /** @type {Phaser.GameObjects.Sprite} */
    countertopBottomExtras;
    /** @type {Phaser.GameObjects.Sprite} */
    registerBottom;
    /** @type {Phaser.GameObjects.Sprite} */
    smashTop;
    /** @type {Phaser.GameObjects.Sprite} */
    stool1;
    /** @type {Phaser.GameObjects.Sprite} */
    stool2;
    /** @type {Phaser.GameObjects.Sprite} */
    countertopTop;
    /** @type {Phaser.GameObjects.Sprite} */
    registerTop;
    /** @type {Phaser.GameObjects.Sprite} */
    table;
    /** @type {Phaser.GameObjects.Sprite} */
    backSofa;
    /** @type {Phaser.GameObjects.Sprite} */
    frontTable;
    /** @type {Phaser.GameObjects.Sprite} */
    chairBottom;
    /** @type {Phaser.GameObjects.Sprite} */
    chairTop;
    /** @type {Phaser.GameObjects.Sprite} */
    chairArm;
    /** @type {Phaser.GameObjects.Sprite} */
    upstairs;
    /** @type {Phaser.GameObjects.Sprite} */
    beanTrolley;
    /** @type {Phaser.GameObjects.Sprite} */
    fg;
    /** @type {Phaser.GameObjects.Sprite} */
    frontSofaLower;
    /** @type {Phaser.GameObjects.Sprite} */
    frontSofaUpper;
    /** @type {Phaser.GameObjects.Sprite} */
    beanBag;
    /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
    sort;

    /* START-USER-CODE */

    create() {
        super.create()
    }

    onDoorOver() {
        this.door.setFrame("door0002.png")
        this.sound.add("coffee-DoorOpen").play()
    }

    onDoorOut() {
        this.door.setFrame("door0001.png")
        this.sound.add("coffee-DoorClose").play()
    }

    onStairsOver() {
        this.upstairs.setFrame("upstairsHover.png")
        this.sound.add("coffee-LightOn").play()
    }

    onStairsOut() {
        this.upstairs.setFrame("upstairsDefault.png")
        this.sound.add("coffee-LightOff").play()
    }

    onRegister2Over() {
        this.registerBottom.play("registerBottom")
        this.sound.add("coffee-cashOpen").play()
    }

    onRegister2Out() {
        this.registerBottom.stop("registerBottom")
        this.registerBottom.setFrame("registerBottom0001.png")
        this.sound.add("coffee-cashClose").play()
    }

    onRegister1Over() {
        this.registerTop.play("registerTop")
        this.sound.add("coffee-cashOpen").play()
    }

    onRegister1Out() {
        this.registerTop.stop("registerTop")
        this.registerTop.setFrame("registerTop0001.png")
        this.sound.add("coffee-cashClose").play()
    }

    onBeansOver() {
        this.beanTrolley.play("beanTrolley")
        this.sound.add("coffee-beans").play()
    }

    onBeansOut() {
        this.beanTrolley.stop("beanTrolley")
        this.beanTrolley.setFrame("beanTrolley0001.png")
    }

    onSmoothieOver() {
        this.smashTop.setFrame("smashTopHover.png")
        this.sound.add("coffee-blender").play()
    }

    onSmoothieOut() {
        this.smashTop.setFrame("smashTopDefault.png")
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// export default template
