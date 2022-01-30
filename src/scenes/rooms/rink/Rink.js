import RoomScene from '../RoomScene'


/* START OF COMPILED CODE */

export default class Rink extends RoomScene {

    constructor() {
        super("Rink");

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'school': () => this.triggerRoom(122, 1200, 400),
            'forts': () => this.triggerRoom(801, 360, 520)
        }
		
		this.music = "1171"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("pool-pack", "assets/media/rooms/pool/pool-pack.json");
		
		/* START-USER-CTR-CODE */

        this.load.audio("1171", "assets/media/music/1171.mp3");

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        // bg_png
        const bg_png = this.add.sprite(811, 339, "pool", "bg.png");

        // forts_png
        const forts_png = this.add.sprite(52, 351, "pool", "forts.png");

        // poolRim_png
        const poolRim_png = this.add.sprite(1206, 623, "pool", "poolRim.png");

        // planteers_png
        const planteers_png = this.add.sprite(809, 755, "pool", "planteers.png");

        // school_png
        const school_png = this.add.sprite(1478, 383, "pool", "school.png");

        // railing_png
        const railing_png = this.add.sprite(1130, 520, "pool", "railing.png");

        // deck1_png
        const deck1_png = this.add.sprite(884, 385, "pool", "deck1.png");

        // deck2_png
        const deck2_png = this.add.sprite(1037, 390, "pool", "deck2.png");

        // deck3_png
        const deck3_png = this.add.sprite(1183, 387, "pool", "deck3.png");

        // deck4Table_png
        const deck4Table_png = this.add.sprite(1294, 380, "pool", "deck4Table.png");

        // deck4_png
        const deck4_png = this.add.sprite(1338, 412, "pool", "deck4.png");

        // stall_png
        const stall_png = this.add.sprite(1068, 163, "pool", "stall.png");

        // tree_png
        const tree_png = this.add.sprite(1486, 63, "pool", "tree.png");

        // waterfallTop_png
        const waterfallTop_png = this.add.sprite(383, 335, "pool", "waterfallTop.png");

        // waterDropletsTop
        const waterDropletsTop = this.add.sprite(387, 298, "pool", "waterDroplets0001.png");

        // waterDropletsMid
        const waterDropletsMid = this.add.sprite(433, 389, "pool", "waterDroplets0001.png");

        // waterDropletsBottom
        const waterDropletsBottom = this.add.sprite(506, 476, "pool", "waterDroplets0001.png");
        waterDropletsBottom.scaleX = 1.3;
        waterDropletsBottom.scaleY = 0.7;

        // lists
        const sort = [];

        this.bg_png = bg_png;
        this.forts_png = forts_png;
        this.poolRim_png = poolRim_png;
        this.planteers_png = planteers_png;
        this.school_png = school_png;
        this.railing_png = railing_png;
        this.deck1_png = deck1_png;
        this.deck2_png = deck2_png;
        this.deck3_png = deck3_png;
        this.deck4Table_png = deck4Table_png;
        this.deck4_png = deck4_png;
        this.stall_png = stall_png;
        this.tree_png = tree_png;
        this.waterfallTop_png = waterfallTop_png;
        this.waterDropletsTop = waterDropletsTop;
        this.waterDropletsMid = waterDropletsMid;
        this.waterDropletsBottom = waterDropletsBottom;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    bg_png;
    /** @type {Phaser.GameObjects.Sprite} */
    forts_png;
    /** @type {Phaser.GameObjects.Sprite} */
    poolRim_png;
    /** @type {Phaser.GameObjects.Sprite} */
    planteers_png;
    /** @type {Phaser.GameObjects.Sprite} */
    school_png;
    /** @type {Phaser.GameObjects.Sprite} */
    railing_png;
    /** @type {Phaser.GameObjects.Sprite} */
    deck1_png;
    /** @type {Phaser.GameObjects.Sprite} */
    deck2_png;
    /** @type {Phaser.GameObjects.Sprite} */
    deck3_png;
    /** @type {Phaser.GameObjects.Sprite} */
    deck4Table_png;
    /** @type {Phaser.GameObjects.Sprite} */
    deck4_png;
    /** @type {Phaser.GameObjects.Sprite} */
    stall_png;
    /** @type {Phaser.GameObjects.Sprite} */
    tree_png;
    /** @type {Phaser.GameObjects.Sprite} */
    waterfallTop_png;
    /** @type {Phaser.GameObjects.Sprite} */
    waterDropletsTop;
    /** @type {Phaser.GameObjects.Sprite} */
    waterDropletsMid;
    /** @type {Phaser.GameObjects.Sprite} */
    waterDropletsBottom;
    /** @type {Array<any>} */
    sort;

    /* START-USER-CODE */

    create() {
        super.create()

        this.waterDropletsTop.play("waterDroplets")
        this.waterDropletsMid.play("waterDroplets")
        this.waterDropletsBottom.play("waterDroplets")
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// export default Town
