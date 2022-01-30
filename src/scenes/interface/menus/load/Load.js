import BaseScene from '@scenes/base/BaseScene'

import { Interactive } from '@components/components'


/* START OF COMPILED CODE */

export default class Load extends BaseScene {

    constructor() {
        super("Load");

        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {Phaser.GameObjects.Sprite} */
        this.loading;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("load-pack", "assets/media/interface/menus/load/load-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "load", "bg");
        bg.setOrigin(0, 0);

        // text
        const text = this.add.text(760, 590, "", {});
        text.setOrigin(0.5, 0);
        text.text = "Loading Content";
        text.setStyle({ "align": "center", "fixedWidth":800,"fixedHeight":40,"fontFamily": "Burbank Small", "fontSize": "32px" });

        // loading
        const loading = this.add.sprite(760, 410, "loading_assets", "shovelling0001.png");

        // bg (components)
        new Interactive(bg);

        this.text = text;
        this.loading = loading;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create(data) {

        this.events.on('sleep', this.onSleep, this)
        this.events.on('wake', this.onWake, this)

        this._create()

        var sprite = Phaser.Math.RND.between(0, 15)
        if (sprite < 6) {
			this.loading.setPosition(760, 410)
            this.loading.play("shovelling")
        } else if (sprite < 11) {
            this.loading.setPosition(760, 300)
            this.loading.play("pizzatron")
        } else {
            this.loading.setPosition(760, 370)
            this.loading.play("cartSurfer")
        }

        this.setContent(data.text)
    }

    onSleep() {

    }

    onWake(sys, data) {
        var sprite = Phaser.Math.RND.between(0, 15)
        if (sprite < 6) {
			this.loading.setPosition(760, 410)
            this.loading.play("shovelling")
        } else if (sprite < 11) {
            this.loading.setPosition(760, 300)
            this.loading.play("pizzatron")
        } else {
            this.loading.setPosition(760, 370)
            this.loading.play("cartSurfer")
        }


        this.setContent(data.text)
    }

    setContent(text, showBar) {
        this.text.text = text
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
