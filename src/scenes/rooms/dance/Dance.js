import RoomScene from '../RoomScene'

import { MoveTo, SimpleButton, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Dance extends RoomScene {

    constructor() {
        super("Dance");

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'arcade': () => this.triggerRoom(121, 1200, 400),
            'boiler': () => this.unimplementedPrompt(),
            'contest': () => this.unimplementedPrompt(),
            'soundstudio': () => this.unimplementedPrompt(),
            'town': () => this.triggerRoom(100, 1200, 400),
        }

        this.music = "1165"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorPreload() {

        this.load.pack("danceClub-pack", "assets/media/rooms/danceClub/danceClub-pack.json");
    }

    /** @returns {void} */
    _create() {

        // rectangle
        const rectangle = this.add.rectangle(164, 296, 200, 500);
        rectangle.isFilled = true;
        rectangle.fillColor = 4143686;

        // danceFloor
        const danceFloor = this.add.sprite(704, 660, "danceClub", "danceFloor0001.png");

        // door
        const door = this.add.sprite(139, 270, "danceClub", "doorAnim.png0001.png");

        // upstairs
        const upstairs = this.add.sprite(1361, 327, "danceClub", "upstairs0001.png");

        // bg
        const bg = this.add.sprite(751, 483, "danceClub", "bg.png");

        // leftRailing
        const leftRailing = this.add.sprite(407, 320, "danceClub", "leftRailing.png");

        // floorSpeaker
        const floorSpeaker = this.add.sprite(339, 339, "danceClub", "floorSpeaker0001.png");

        // doorRailingLeft
        const doorRailingLeft = this.add.sprite(152, 561, "danceClub", "doorRailingLeft.png");

        // doorRailingRight
        const doorRailingRight = this.add.sprite(273, 430, "danceClub", "doorRailingRight.png");

        // backChair
        const backChair = this.add.sprite(1445, 683, "danceClub", "backChair.png");

        // rightChair
        const rightChair = this.add.sprite(1541, 799, "danceClub", "rightChair.png");

        // table
        const table = this.add.sprite(1423, 778, "danceClub", "table.png");

        // leftChair
        const leftChair = this.add.sprite(1340, 880, "danceClub", "leftChair.png");

        // leftChairBack
        const leftChairBack = this.add.sprite(1301, 886, "danceClub", "leftChairBack.png");

        // soundStudio
        const soundStudio = this.add.sprite(692, 392, "danceClub", "soundStudio0001.png");

        // sofa
        const sofa = this.add.sprite(149.36760765951857, 627.7627502053078, "danceClub", "sofa.png");
        sofa.setOrigin(0.6049295941144784, 0.15003229044350086);

        // rightRailing
        const rightRailing = this.add.sprite(962, 324, "danceClub", "rightRailing.png");

        // boilerSpeaker
        const boilerSpeaker = this.add.sprite(1033, 314, "danceClub", "boilerSpeakerClosed0001.png");

        // danceContest
        const danceContest = this.add.sprite(1149, 319, "danceClub", "danceContest0001.png");

        // rightSpeaker
        const rightSpeaker = this.add.sprite(1081, 55, "danceClub", "rightSpeaker0001.png");

        // corner
        const corner = this.add.sprite(1301, 240, "danceClub", "corner.png");

        // upstairsRailing
        const upstairsRailing = this.add.sprite(1176, 500, "danceClub", "upstairsRailing.png");

        // neonSign
        const neonSign = this.add.sprite(1135, 109, "danceClub", "neonSign0001.png");

        // leftSpeaker
        const leftSpeaker = this.add.sprite(290, 73, "danceClub", "leftSpeaker0001.png");

        // fg
        const fg = this.add.sprite(734, 1007.5, "danceClub", "fg.png");
        fg.setOrigin(0.5, 1);

        // keeper
        const keeper = this.add.sprite(1039, 218, "danceClub", "keeperAnim0001.png");

        // boiler_btn
        const boiler_btn = this.add.rectangle(1030, 306, 128, 200);
        boiler_btn.fillColor = 55770;
        boiler_btn.fillAlpha = 0.5;

        // lists
        const sort = [fg, doorRailingLeft, floorSpeaker, doorRailingRight, boiler_btn, leftRailing, leftChair, leftChairBack, table, rightChair, backChair, upstairsRailing, sofa];

        // door (components)
        const doorSimpleButton = new SimpleButton(door);
        doorSimpleButton.hoverCallback = () => this.onDoorOver();
        doorSimpleButton.hoverOutCallback = () => this.onDoorOut();
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 200;
        doorMoveTo.y = 500;

        // upstairs (components)
        const upstairsSimpleButton = new SimpleButton(upstairs);
        upstairsSimpleButton.hoverCallback = () => this.onStairsOver();
        upstairsSimpleButton.hoverOutCallback = () => this.onStairsOut();
        const upstairsMoveTo = new MoveTo(upstairs);
        upstairsMoveTo.x = 1400;
        upstairsMoveTo.y = 500;

        // soundStudio (components)
        const soundStudioSimpleButton = new SimpleButton(soundStudio);
        soundStudioSimpleButton.hoverCallback = () => this.onSoundStudioOver();
        soundStudioSimpleButton.hoverOutCallback = () => this.onSoundStudioOut();
        const soundStudioMoveTo = new MoveTo(soundStudio);
        soundStudioMoveTo.x = 700;
        soundStudioMoveTo.y = 350;

        // danceContest (components)
        const danceContestSimpleButton = new SimpleButton(danceContest);
        danceContestSimpleButton.hoverCallback = () => this.onContestOver();
        danceContestSimpleButton.hoverOutCallback = () => this.onContestOut();
        const danceContestMoveTo = new MoveTo(danceContest);
        danceContestMoveTo.x = 1100;
        danceContestMoveTo.y = 480;

        // boiler_btn (components)
        const boiler_btnSimpleButton = new SimpleButton(boiler_btn);
        boiler_btnSimpleButton.hoverCallback = () => this.onSpeakerOver();
        boiler_btnSimpleButton.hoverOutCallback = () => this.onSpeakerOut();
        const boiler_btnMoveTo = new MoveTo(boiler_btn);
        boiler_btnMoveTo.x = 1000;
        boiler_btnMoveTo.y = 400;

        this.danceFloor = danceFloor;
        this.door = door;
        this.upstairs = upstairs;
        this.bg = bg;
        this.leftRailing = leftRailing;
        this.floorSpeaker = floorSpeaker;
        this.doorRailingLeft = doorRailingLeft;
        this.doorRailingRight = doorRailingRight;
        this.backChair = backChair;
        this.rightChair = rightChair;
        this.table = table;
        this.leftChair = leftChair;
        this.leftChairBack = leftChairBack;
        this.soundStudio = soundStudio;
        this.sofa = sofa;
        this.rightRailing = rightRailing;
        this.boilerSpeaker = boilerSpeaker;
        this.danceContest = danceContest;
        this.rightSpeaker = rightSpeaker;
        this.corner = corner;
        this.upstairsRailing = upstairsRailing;
        this.neonSign = neonSign;
        this.leftSpeaker = leftSpeaker;
        this.fg = fg;
        this.keeper = keeper;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    danceFloor;
    /** @type {Phaser.GameObjects.Sprite} */
    door;
    /** @type {Phaser.GameObjects.Sprite} */
    upstairs;
    /** @type {Phaser.GameObjects.Sprite} */
    bg;
    /** @type {Phaser.GameObjects.Sprite} */
    leftRailing;
    /** @type {Phaser.GameObjects.Sprite} */
    floorSpeaker;
    /** @type {Phaser.GameObjects.Sprite} */
    doorRailingLeft;
    /** @type {Phaser.GameObjects.Sprite} */
    doorRailingRight;
    /** @type {Phaser.GameObjects.Sprite} */
    backChair;
    /** @type {Phaser.GameObjects.Sprite} */
    rightChair;
    /** @type {Phaser.GameObjects.Sprite} */
    table;
    /** @type {Phaser.GameObjects.Sprite} */
    leftChair;
    /** @type {Phaser.GameObjects.Sprite} */
    leftChairBack;
    /** @type {Phaser.GameObjects.Sprite} */
    soundStudio;
    /** @type {Phaser.GameObjects.Sprite} */
    sofa;
    /** @type {Phaser.GameObjects.Sprite} */
    rightRailing;
    /** @type {Phaser.GameObjects.Sprite} */
    boilerSpeaker;
    /** @type {Phaser.GameObjects.Sprite} */
    danceContest;
    /** @type {Phaser.GameObjects.Sprite} */
    rightSpeaker;
    /** @type {Phaser.GameObjects.Sprite} */
    corner;
    /** @type {Phaser.GameObjects.Sprite} */
    upstairsRailing;
    /** @type {Phaser.GameObjects.Sprite} */
    neonSign;
    /** @type {Phaser.GameObjects.Sprite} */
    leftSpeaker;
    /** @type {Phaser.GameObjects.Sprite} */
    fg;
    /** @type {Phaser.GameObjects.Sprite} */
    keeper;
    /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Rectangle>} */
    sort;

    /* START-USER-CODE */

    create() {
        super.create()
        this.keeper.play("keeperAnim")
        this.leftSpeaker.play("leftSpeaker")
        this.rightSpeaker.play("rightSpeaker")
        this.boilerSpeaker.play("boilerSpeakerClosed")
        this.danceFloor.play("danceFloor")
        this.floorSpeaker.play("floorSpeaker")
        this.neonSign.play("neonSign")
    }

    onSoundStudioOver() {
        this.soundStudio.setFrame("soundStudio0002.png")
    }

    onSoundStudioOut() {
        this.soundStudio.setFrame("soundStudio0001.png")
    }

    onDoorOver() {
        this.door.play("doorAnim")
        this.sound.add("danceClub-Door").play();
    }

    onDoorOut() {
        this.door.stop("doorAnim")
        this.door.setFrame("doorAnim.png0001.png")
    }

    onSpeakerOver() {
        this.boilerSpeaker.setX(1000)
        this.boilerSpeaker.setY(320)
        this.boilerSpeaker.stop("boilerSpeakerClosed")
        this.boilerSpeaker.setFrame("boilerSpeakerOpen.png")
        this.sound.add("danceClub-SpeakerOpen").play();
    }

    onSpeakerOut() {
        this.boilerSpeaker.setX(1033)
        this.boilerSpeaker.setY(314)
        this.boilerSpeaker.play("boilerSpeakerClosed")
        this.sound.add("danceClub-SpeakerClose").play();
    }

    onContestOver() {
        this.danceContest.setFrame("danceContest0002.png")
    }

    onContestOut() {
        this.danceContest.setFrame("danceContest0001.png")
    }

    onStairsOver() {
        this.upstairs.setFrame("upstairs0002.png")
        this.sound.add("danceClub-LightOn").play();
    }

    onStairsOut() {
        this.upstairs.setFrame("upstairs0001.png")
        this.sound.add("danceClub-LightOff").play();
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// export default template
