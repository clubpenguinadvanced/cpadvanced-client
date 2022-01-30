import RoomScene from '../RoomScene'
import { SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class Mtn extends RoomScene {

    constructor() {
        super("Mtn");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 1200, 400),
            'village2': () => this.triggerRoom(200, 360, 520)
        }
		
		this.music = 1174
		
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("skiHill-pack", "assets/media/rooms/skiHill/skiHill-pack.json");
		
		/* START-USER-CTR-CODE */

        this.load.audio("1174", "assets/media/music/1174.mp3");

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(729, 452, "skiHill", "bg.png");

        // liftBack
        const liftBack = this.add.sprite(444, 135, "skiHill", "lift_back0001.png");

        // skiTrack
        this.add.image(1174, 357, "skiHill", "skiTrack.png");

        // bg2
        const bg2 = this.add.sprite(744, 485, "skiHill", "bg_2.png");

        // liftFront
        const liftFront = this.add.sprite(479, 145, "skiHill", "lift_front0001.png");

        // hutBack
        const hutBack = this.add.image(1012, 260.9999858471424, "skiHill", "hut_back.png");

        // hut
        const hut = this.add.sprite(1062.3900808090457, 287.36862624622466, "skiHill", "hut.png");
        hut.setOrigin(0.48382484494401995, 0.7612287541540822);

        // middleSign
        const middleSign = this.add.sprite(994, 666, "skiHill", "middleSign.png");

        // rightSign
        const rightSign = this.add.sprite(1191, 539, "skiHill", "rightSign.png");

        // trees
        const trees = this.add.sprite(456, 860, "skiHill", "trees.png");

        // note
        const note = this.add.sprite(463, 174, "skiHill", "note0001.png");

        // forwardTracks
        const forwardTracks = this.add.sprite(717, 652, "skiHill", "forwardTracks.png");

        // leftTracks
        const leftTracks = this.add.sprite(252, 575, "skiHill", "leftTracks.png");

        // rightTracks
        const rightTracks = this.add.sprite(1086, 624, "skiHill", "rightTracks.png");

        // leftSign
        const leftSign = this.add.sprite(459, 595, "skiHill", "leftSign.png");

        // lists
        const sort = [hut, hutBack];

        // note (components)
        const noteSimpleButton = new SimpleButton(note);
        noteSimpleButton.hoverCallback = () => this.onShopOver();
        noteSimpleButton.hoverOutCallback = () => this.onShopOut();

        this.bg = bg;
        this.liftBack = liftBack;
        this.bg2 = bg2;
        this.liftFront = liftFront;
        this.hut = hut;
        this.middleSign = middleSign;
        this.rightSign = rightSign;
        this.trees = trees;
        this.note = note;
        this.forwardTracks = forwardTracks;
        this.leftTracks = leftTracks;
        this.rightTracks = rightTracks;
        this.leftSign = leftSign;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    bg;
    /** @type {Phaser.GameObjects.Sprite} */
    liftBack;
    /** @type {Phaser.GameObjects.Sprite} */
    bg2;
    /** @type {Phaser.GameObjects.Sprite} */
    liftFront;
    /** @type {Phaser.GameObjects.Sprite} */
    hut;
    /** @type {Phaser.GameObjects.Sprite} */
    middleSign;
    /** @type {Phaser.GameObjects.Sprite} */
    rightSign;
    /** @type {Phaser.GameObjects.Sprite} */
    trees;
    /** @type {Phaser.GameObjects.Sprite} */
    note;
    /** @type {Phaser.GameObjects.Sprite} */
    forwardTracks;
    /** @type {Phaser.GameObjects.Sprite} */
    leftTracks;
    /** @type {Phaser.GameObjects.Sprite} */
    rightTracks;
    /** @type {Phaser.GameObjects.Sprite} */
    leftSign;
    /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
    sort;

    /* START-USER-CODE */

    // Write your code here

    create() {

        super.create();
        this.liftBack.play("lift_back");
        this.liftFront.play("lift_front");
    }

    onShopOver() {
        this.note.play("rollout")
    }

    onShopOut() {
        this.note.stop("rollout")
        this.note.setFrame("note0001.png")
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
