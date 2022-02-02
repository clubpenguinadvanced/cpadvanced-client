import RoomScene from '../RoomScene'

import { MoveTo, SimpleButton, ShowHint } from '@components/components'

/* START OF COMPILED CODE */

export default class Cave extends RoomScene {

    constructor() {
        super("Cave");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'boiler': () => this.unimplementedPrompt(),
            'mine': () => this.triggerRoom(808, 360, 520),
            'plaza': () => this.triggerRoom(300, 700, 450)
        }

        this.music = "670"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorPreload() {

        this.load.pack("undergroundPool-pack", "assets/media/rooms/undergroundPool/undergroundPool-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_png
        const bg_png = this.add.sprite(751, 484, "undergroundPool", "bg.png");

        // caveHover
        const caveHover = this.add.sprite(1189, 495, "undergroundPool", "caveHover.png");
        caveHover.alpha = 0.01;
        caveHover.alphaTopLeft = 0.01;
        caveHover.alphaTopRight = 0.01;
        caveHover.alphaBottomLeft = 0.01;
        caveHover.alphaBottomRight = 0.01;

        // wall_png
        const wall_png = this.add.sprite(1314, 392, "undergroundPool", "wall.png");

        // fg_png
        const fg_png = this.add.sprite(761, 973, "undergroundPool", "fg.png");
        fg_png.setOrigin(0.5, 1);

        // pool_png
        const pool_png = this.add.sprite(692, 694, "undergroundPool", "pool.png");

        // splash1_png
        const splash1_png = this.add.sprite(725, 872, "undergroundPool", "splash1.png");

        // splash2_png
        const splash2_png = this.add.sprite(926, 807, "undergroundPool", "splash2.png");

        // splash3_png
        const splash3_png = this.add.sprite(919, 521, "undergroundPool", "splash3.png");

        // splash4_png
        const splash4_png = this.add.sprite(714, 514, "undergroundPool", "splash4.png");

        // sprite_42_png
        const sprite_42_png = this.add.sprite(270, 638, "undergroundPool", "Sprite 42.png");

        // splash3_png_1
        const splash3_png_1 = this.add.sprite(383, 854, "undergroundPool", "splash3.png");

        // lifeguardChair_png
        const lifeguardChair_png = this.add.sprite(333, 408, "undergroundPool", "lifeguardChair.png");

        // lifeguardArm_png
        const lifeguardArm_png = this.add.sprite(287, 391, "undergroundPool", "lifeguardArm.png");

        // ladder_png
        const ladder_png = this.add.sprite(782, 203, "undergroundPool", "ladder.png");

        // windowBottom_png
        const windowBottom_png = this.add.sprite(559, 260, "undergroundPool", "windowBottom.png");
        windowBottom_png.angle = -5;

        // fishAnim
        const fishAnim = this.add.sprite(560, 300, "undergroundPool", "fishAnim0001.png");
        fishAnim.angle = -5;

        // crabAnim
        const crabAnim = this.add.sprite(553, 210, "undergroundPool", "crabAnim0001.png");
        crabAnim.angle = -5;

        // windowTop_png
        const windowTop_png = this.add.sprite(559, 260, "undergroundPool", "windowTop.png");
        windowTop_png.angle = -5;

        // caveHover_btn
        const caveHover_btn = this.add.rectangle(1233, 444, 150, 150);
        caveHover_btn.fillColor = 828413;
        caveHover_btn.fillAlpha = 0.5;

        // lists
        const sort = [ladder_png, lifeguardArm_png, wall_png, fg_png];

        // caveHover_btn (components)
        const caveHover_btnSimpleButton = new SimpleButton(caveHover_btn);
        caveHover_btnSimpleButton.hoverCallback = () => this.onCaveHoverOver();
        caveHover_btnSimpleButton.hoverOutCallback = () => this.onCaveHoverOut();
        const caveHover_btnMoveTo = new MoveTo(caveHover_btn);
        caveHover_btnMoveTo.x = 1200;
        caveHover_btnMoveTo.y = 500;

        this.bg_png = bg_png;
        this.caveHover = caveHover;
        this.wall_png = wall_png;
        this.fg_png = fg_png;
        this.pool_png = pool_png;
        this.splash1_png = splash1_png;
        this.splash2_png = splash2_png;
        this.splash3_png = splash3_png;
        this.splash4_png = splash4_png;
        this.sprite_42_png = sprite_42_png;
        this.splash3_png_1 = splash3_png_1;
        this.lifeguardChair_png = lifeguardChair_png;
        this.lifeguardArm_png = lifeguardArm_png;
        this.ladder_png = ladder_png;
        this.windowBottom_png = windowBottom_png;
        this.fishAnim = fishAnim;
        this.crabAnim = crabAnim;
        this.windowTop_png = windowTop_png;
        this.caveHover_btn = caveHover_btn;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    bg_png;
    /** @type {Phaser.GameObjects.Sprite} */
    caveHover;
    /** @type {Phaser.GameObjects.Sprite} */
    wall_png;
    /** @type {Phaser.GameObjects.Sprite} */
    fg_png;
    /** @type {Phaser.GameObjects.Sprite} */
    pool_png;
    /** @type {Phaser.GameObjects.Sprite} */
    splash1_png;
    /** @type {Phaser.GameObjects.Sprite} */
    splash2_png;
    /** @type {Phaser.GameObjects.Sprite} */
    splash3_png;
    /** @type {Phaser.GameObjects.Sprite} */
    splash4_png;
    /** @type {Phaser.GameObjects.Sprite} */
    sprite_42_png;
    /** @type {Phaser.GameObjects.Sprite} */
    splash3_png_1;
    /** @type {Phaser.GameObjects.Sprite} */
    lifeguardChair_png;
    /** @type {Phaser.GameObjects.Sprite} */
    lifeguardArm_png;
    /** @type {Phaser.GameObjects.Sprite} */
    ladder_png;
    /** @type {Phaser.GameObjects.Sprite} */
    windowBottom_png;
    /** @type {Phaser.GameObjects.Sprite} */
    fishAnim;
    /** @type {Phaser.GameObjects.Sprite} */
    crabAnim;
    /** @type {Phaser.GameObjects.Sprite} */
    windowTop_png;
    /** @type {Phaser.GameObjects.Rectangle} */
    caveHover_btn;
    /** @type {Phaser.GameObjects.Sprite[]} */
    sort;

    /* START-USER-CODE */

    // Write your code here

    create() {

        super.create()

        this.crabAnim.play("crabAnim")
        this.fishAnim.play("fishAnim")

        this.sound.add("undergroundPool-crab").play({
            loop: true
        })

    }

    onCaveHoverOver() {
        this.caveHover.alpha = 1;
        this.sound.add("undergroundPool-lighton").play()
    }
    onCaveHoverOut() {
        this.caveHover.alpha = 0.01;
        this.sound.add("undergroundPool-lightoff").play()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
