import RoomScene from '../RoomScene'

import { MoveTo, SimpleButton, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Cove extends RoomScene {

    constructor() {
        super("Cove");

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forest': () => this.triggerRoom(809, 1200, 400),
            'waves': () => this.unimplementedPrompt()
        }

        this.music = "1164"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("cove-pack", "assets/media/rooms/cove/cove-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(746, 443, "cove", "bg.png");

        // campfire
        const campfire = this.add.sprite(357.04089918545844, 615.7945041176556, "cove", "campfire0001.png");
        campfire.setOrigin(0.43972517449756354, 0.49901665969551984);

        // deckArm
        const deckArm = this.add.sprite(484.5345796315084, 261.4930217621434, "cove", "deckArm.png");
        deckArm.setOrigin(0.7555684683718482, 0.8799068565353616);

        // lifesaver
        const lifesaver = this.add.sprite(467, 344, "cove", "lifesaver.png");

        // shack
        const shack = this.add.sprite(1292.3077813782786, 366.6118371156327, "cove", "shack.png");
        shack.setOrigin(0.4927603544416989, 0.8464145086201211);

        // leftChair
        const leftChair = this.add.sprite(1106.33552020297, 456.4076203039245, "cove", "leftChair.png");
        leftChair.setOrigin(0.41668339917019637, 0.5214314878810877);

        // table
        const table = this.add.sprite(1203.7191162109375, 501.7171057082594, "cove", "table.png");
        table.setOrigin(0.47859586858294617, 0.8416693511667394);

        // rightChair
        const rightChair = this.add.sprite(1296.1134099530216, 497.7560663534776, "cove", "rightChair.png");
        rightChair.setOrigin(0.4573435503842143, 0.0639562928164177);

        // rightChairBack
        const rightChairBack = this.add.sprite(1332.6115466119159, 542.1888692879219, "cove", "rightChairBack.png");
        rightChairBack.setOrigin(0.507457885511169, 0.7150957048807296);

        // rope1
        const rope1 = this.add.sprite(1031, 496, "cove", "rope1.png");

        // rope2
        const rope2 = this.add.sprite(1090, 538, "cove", "rope2.png");

        // rope3
        const rope3 = this.add.sprite(1280, 567, "cove", "rope3.png");

        // rightTree
        const rightTree = this.add.sprite(1493.0544561694467, 621.9653327805138, "cove", "rightTree.png");
        rightTree.setOrigin(0.4878784204503978, 0.6563277451969659);

        // shop
        const shop = this.add.sprite(1013, 276, "cove", "uncurl0001.png");
        shop.scaleX = -1;

        // log
        const log = this.add.sprite(207, 477, "cove", "log.png");

        // medicWall
        const medicWall = this.add.sprite(892, 193, "cove", "medicWall.png");

        // cooler
        const cooler = this.add.sprite(117, 519, "cove", "cooler.png");

        // rock
        const rock = this.add.sprite(507, 885, "cove", "rock.png");

        // leftTree
        const leftTree = this.add.sprite(34, 703, "cove", "leftTree.png");

        // drink
        const drink = this.add.sprite(911, 515, "cove", "drink.png");

        // water1
        const water1 = this.add.sprite(1166, 651, "cove", "water1.png");

        // water2
        const water2 = this.add.sprite(1043, 673, "cove", "water2.png");

        // water3
        const water3 = this.add.sprite(989, 695, "cove", "water3.png");

        // water4
        const water4 = this.add.sprite(966, 717, "cove", "water4.png");

        // water5
        const water5 = this.add.sprite(1016, 738.5, "cove", "water5.png");

        // water6
        const water6 = this.add.sprite(1006, 760, "cove", "water6.png");

        // water7
        const water7 = this.add.sprite(1006, 782, "cove", "water7.png");

        // water8
        const water8 = this.add.sprite(1006, 804, "cove", "water8.png");

        // water9
        const water9 = this.add.sprite(1053.5, 826, "cove", "water9.png");

        // water10
        const water10 = this.add.sprite(1077, 848, "cove", "water10.png");

        // water11
        const water11 = this.add.sprite(1086, 870, "cove", "water11.png");

        // water12
        const water12 = this.add.sprite(1029.5, 892, "cove", "water12.png");

        // water13
        const water13 = this.add.sprite(1086, 914, "cove", "water13.png");

        // water14
        const water14 = this.add.sprite(1088, 936, "cove", "water14.png");

        // water15
        const water15 = this.add.sprite(1089, 958, "cove", "water15.png");

        // waves
        const waves = this.add.sprite(1248, 672, "cove", "waves0001.png");

        // fg_left
        const fg_left = this.add.sprite(175, 980, "cove", "fg_left.png");
        fg_left.setOrigin(0.5, 1);

        // fg_right
        const fg_right = this.add.sprite(1356, 972, "cove", "fg_right.png");
        fg_right.setOrigin(0.5, 1);

        // lists
        const sort = [shack, leftChair, table, rightChairBack, rope3, rope1, rightChair, rope2, rightTree, log, medicWall, cooler, rock, leftTree, drink, fg_left, water15, water14, water13, water12, water10, water11, water9, water8, water7, water6, water4, water5, water3, water2, water1, deckArm, waves, fg_right, campfire];

        // shop (components)
        const shopSimpleButton = new SimpleButton(shop);
        shopSimpleButton.hoverCallback = () => this.onShopOver();
        shopSimpleButton.hoverOutCallback = () => this.onShopOut();
        shopSimpleButton.callback = () => this.onShopClick();

        // waves (components)
        const wavesSimpleButton = new SimpleButton(waves);
        wavesSimpleButton.hoverCallback = () => this.onWavesOver();
        wavesSimpleButton.hoverOutCallback = () => this.onWavesOut();
        const wavesMoveTo = new MoveTo(waves);
        wavesMoveTo.x = 1250;
        wavesMoveTo.y = 670;

        this.bg = bg;
        this.campfire = campfire;
        this.deckArm = deckArm;
        this.lifesaver = lifesaver;
        this.shack = shack;
        this.leftChair = leftChair;
        this.table = table;
        this.rightChair = rightChair;
        this.rightChairBack = rightChairBack;
        this.rope1 = rope1;
        this.rope2 = rope2;
        this.rope3 = rope3;
        this.rightTree = rightTree;
        this.shop = shop;
        this.log = log;
        this.medicWall = medicWall;
        this.cooler = cooler;
        this.rock = rock;
        this.leftTree = leftTree;
        this.drink = drink;
        this.water1 = water1;
        this.water2 = water2;
        this.water3 = water3;
        this.water4 = water4;
        this.water5 = water5;
        this.water6 = water6;
        this.water7 = water7;
        this.water8 = water8;
        this.water9 = water9;
        this.water10 = water10;
        this.water11 = water11;
        this.water12 = water12;
        this.water13 = water13;
        this.water14 = water14;
        this.water15 = water15;
        this.waves = waves;
        this.fg_left = fg_left;
        this.fg_right = fg_right;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    bg;
    /** @type {Phaser.GameObjects.Sprite} */
    campfire;
    /** @type {Phaser.GameObjects.Sprite} */
    deckArm;
    /** @type {Phaser.GameObjects.Sprite} */
    lifesaver;
    /** @type {Phaser.GameObjects.Sprite} */
    shack;
    /** @type {Phaser.GameObjects.Sprite} */
    leftChair;
    /** @type {Phaser.GameObjects.Sprite} */
    table;
    /** @type {Phaser.GameObjects.Sprite} */
    rightChair;
    /** @type {Phaser.GameObjects.Sprite} */
    rightChairBack;
    /** @type {Phaser.GameObjects.Sprite} */
    rope1;
    /** @type {Phaser.GameObjects.Sprite} */
    rope2;
    /** @type {Phaser.GameObjects.Sprite} */
    rope3;
    /** @type {Phaser.GameObjects.Sprite} */
    rightTree;
    /** @type {Phaser.GameObjects.Sprite} */
    shop;
    /** @type {Phaser.GameObjects.Sprite} */
    log;
    /** @type {Phaser.GameObjects.Sprite} */
    medicWall;
    /** @type {Phaser.GameObjects.Sprite} */
    cooler;
    /** @type {Phaser.GameObjects.Sprite} */
    rock;
    /** @type {Phaser.GameObjects.Sprite} */
    leftTree;
    /** @type {Phaser.GameObjects.Sprite} */
    drink;
    /** @type {Phaser.GameObjects.Sprite} */
    water1;
    /** @type {Phaser.GameObjects.Sprite} */
    water2;
    /** @type {Phaser.GameObjects.Sprite} */
    water3;
    /** @type {Phaser.GameObjects.Sprite} */
    water4;
    /** @type {Phaser.GameObjects.Sprite} */
    water5;
    /** @type {Phaser.GameObjects.Sprite} */
    water6;
    /** @type {Phaser.GameObjects.Sprite} */
    water7;
    /** @type {Phaser.GameObjects.Sprite} */
    water8;
    /** @type {Phaser.GameObjects.Sprite} */
    water9;
    /** @type {Phaser.GameObjects.Sprite} */
    water10;
    /** @type {Phaser.GameObjects.Sprite} */
    water11;
    /** @type {Phaser.GameObjects.Sprite} */
    water12;
    /** @type {Phaser.GameObjects.Sprite} */
    water13;
    /** @type {Phaser.GameObjects.Sprite} */
    water14;
    /** @type {Phaser.GameObjects.Sprite} */
    water15;
    /** @type {Phaser.GameObjects.Sprite} */
    waves;
    /** @type {Phaser.GameObjects.Sprite} */
    fg_left;
    /** @type {Phaser.GameObjects.Sprite} */
    fg_right;
    /** @type {Phaser.GameObjects.Sprite[]} */
    sort;

    /* START-USER-CODE */

    create() {
        super.create()
        this.campfire.play("campfire")
    }

    onWavesOver() {
        this.waves.setFrame("waves0002.png")
    }

    onWavesOut() {
        this.waves.setFrame("waves0001.png")
    }

    onShopOver() {
        this.shop.play("uncurl")
    }

    onShopOut() {
        this.shop.stop("uncurl")
        this.shop.setFrame("uncurl0001.png")
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// export default template
