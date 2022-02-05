import RoomScene from '../RoomScene'

import { MoveTo, SimpleButton, Button } from '@components/components'


/* START OF COMPILED CODE */

export default class Village extends RoomScene {

    constructor() {
        super("Village");

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'beach': () => this.triggerRoom(400, 1200, 400),
            'dock': () => this.triggerRoom(800, 1200, 400),
            'epf': () => this.unimplementedPrompt(),
            'lodge': () => this.triggerRoom(220, 1200, 400),
            'mtn': () => this.triggerRoom(230, 1200, 400)
        }

        this.music = "1174"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorPreload() {

        this.load.pack("skiVillage-pack", "assets/media/rooms/skiVillage/skiVillage-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_back
        const bg_back = this.add.sprite(749, 481, "skiVillage", "bg_back");

        // tubes
        const tubes = this.add.sprite(137, 303, "skiVillage", "tubes0001");

        // tubepile
        const tubepile = this.add.sprite(486, 454, "skiVillage", "tubepile0001");

        // liftFront
        const liftFront = this.add.sprite(208, 128, "skiVillage", "liftFront0001");

        // bg_front
        const bg_front = this.add.sprite(746, 483, "skiVillage", "bg_front");

        // epfdoor
        const epfdoor = this.add.sprite(1338, 435, "skiVillage", "epfdoor");

        // lodgedoor
        const lodgedoor = this.add.sprite(1010, 355, "skiVillage", "lodgedoor");

        // tourbooth
        const tourbooth = this.add.sprite(196, 627.8410268752398, "skiVillage", "tourbooth");
        tourbooth.setOrigin(0.5, 0.6600029423359306);

        // bin
        const bin = this.add.sprite(744, 413.1670847675757, "skiVillage", "bin");
        bin.setOrigin(0.5, 0.7091750655541994);

        // epfsign
        const epfsign = this.add.sprite(1323, 261, "skiVillage", "epfsign");

        // fg
        const fg = this.add.sprite(777, 867, "skiVillage", "fg");

        // liftBack
        const liftBack = this.add.sprite(186, 163, "skiVillage", "liftBack0001");

        // lists
        const sort = [tourbooth, bin];

        // epfdoor (components)
        const epfdoorButton = new Button(epfdoor);
        epfdoorButton.spriteName = "epfdoor";
        epfdoorButton.hoverCallback = () => this.onEpfOver();
        epfdoorButton.hoverOutCallback = () => this.onEpfOut();
        epfdoorButton.activeFrame = false;
        const epfdoorMoveTo = new MoveTo(epfdoor);
        epfdoorMoveTo.x = 1300;
        epfdoorMoveTo.y = 500;

        // lodgedoor (components)
        const lodgedoorButton = new Button(lodgedoor);
        lodgedoorButton.spriteName = "lodgedoor";
        lodgedoorButton.hoverCallback = () => this.onLodgeOver();
        lodgedoorButton.hoverOutCallback = () => this.onLodgeOut();
        lodgedoorButton.activeFrame = false;
        const lodgedoorMoveTo = new MoveTo(lodgedoor);
        lodgedoorMoveTo.x = 1000;
        lodgedoorMoveTo.y = 390;

        // tourbooth (components)
        const tourboothButton = new Button(tourbooth);
        tourboothButton.spriteName = "tourbooth";
        tourboothButton.activeFrame = false;
        const tourboothMoveTo = new MoveTo(tourbooth);
        tourboothMoveTo.x = 180;
        tourboothMoveTo.y = 620;

        this.bg_back = bg_back;
        this.tubes = tubes;
        this.tubepile = tubepile;
        this.liftFront = liftFront;
        this.bg_front = bg_front;
        this.epfdoor = epfdoor;
        this.lodgedoor = lodgedoor;
        this.tourbooth = tourbooth;
        this.bin = bin;
        this.epfsign = epfsign;
        this.fg = fg;
        this.liftBack = liftBack;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    bg_back;
    /** @type {Phaser.GameObjects.Sprite} */
    tubes;
    /** @type {Phaser.GameObjects.Sprite} */
    tubepile;
    /** @type {Phaser.GameObjects.Sprite} */
    liftFront;
    /** @type {Phaser.GameObjects.Sprite} */
    bg_front;
    /** @type {Phaser.GameObjects.Sprite} */
    epfdoor;
    /** @type {Phaser.GameObjects.Sprite} */
    lodgedoor;
    /** @type {Phaser.GameObjects.Sprite} */
    tourbooth;
    /** @type {Phaser.GameObjects.Sprite} */
    bin;
    /** @type {Phaser.GameObjects.Sprite} */
    epfsign;
    /** @type {Phaser.GameObjects.Sprite} */
    fg;
    /** @type {Phaser.GameObjects.Sprite} */
    liftBack;
    /** @type {Phaser.GameObjects.Sprite[]} */
    sort;

    /* START-USER-CODE */

    create() {
        super.create()
        this.tubes.play("tubes")
        this.tubepile.play("tubepile")
        this.liftFront.play("liftFront")
        this.liftBack.play("liftBack")
    }

    onLodgeOver(){
        this.sound.add("skiVillage-LodgeDoorOpen").play()
    }

    onLodgeOut(){
        this.sound.add("skiVillage-LodgeDoorClose").play()
    }

    onEpfOver(){
        this.sound.add("skiVillage-EPFDoorOpen").play()
    }

    onEpfOut(){
        this.sound.add("skiVillage-EPFDoorClose").play()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// export default template
