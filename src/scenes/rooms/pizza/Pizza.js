import RoomScene from '../RoomScene'
import { SimpleButton, MoveTo } from '@components/components'


/* START OF COMPILED CODE */

export default class Pizza extends RoomScene {

    constructor() {
        super("Pizza");

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 1200, 400),
            'pizzatron': () => this.triggerGame("pizzatron")
            //                                         id   xpos  ypos
        }

        this.music = 676

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("pizzaParlor-pack", "assets/media/rooms/pizzaParlor/pizzaParlor-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(692, 473, "pizzaParlor", "bg.png");

        // autocooker
        const autocooker = this.add.sprite(1246, 224, "pizzaParlor", "autocooker.png0001.png");

        // stageFloor
        const stageFloor = this.add.sprite(1066, 506, "pizzaParlor", "stageFloor.png");

        // stageBg
        const stageBg = this.add.sprite(1382, 247, "pizzaParlor", "stageBg.png");

        // microphone
        const microphone = this.add.sprite(1323, 550, "pizzaParlor", "microphone.png");

        // amp
        const amp = this.add.sprite(1466, 590, "pizzaParlor", "amp.png");

        // stageFg
        const stageFg = this.add.sprite(1363, 353, "pizzaParlor", "stageFg.png");

        // sofaSection
        const sofaSection = this.add.sprite(708.1503773436751, 751.4323582016651, "pizzaParlor", "sofaSection.png");
        sofaSection.setOrigin(0.503112010479562, 0.655227756107674);

        // pianoStool
        const pianoStool = this.add.sprite(1289, 475, "pizzaParlor", "pianoStool.png");

        // pizzatronFlap
        const pizzatronFlap = this.add.sprite(343, 224, "pizzaParlor", "pizzatronFlap0001.png");

        // doors
        const doors = this.add.sprite(766, 187, "pizzaParlor", "doors0001.png");

        // overDoor
        const overDoor = this.add.sprite(771, 183, "pizzaParlor", "overDoor.png");

        // desk_png
        const desk_png = this.add.sprite(547, 296, "pizzaParlor", "desk.png");

        // counterContainer
        const counterContainer = this.add.container(356, 360);

        // counterBack
        const counterBack = this.add.sprite(18, 120, "pizzaParlor", "counterBack.png");
        counterContainer.add(counterBack);

        // register
        const register = this.add.sprite(0, 0, "pizzaParlor", "register0001.png");
        counterContainer.add(register);

        // counterFront
        const counterFront = this.add.sprite(320, 539, "pizzaParlor", "counterFront.png");

        // stool1
        const stool1 = this.add.sprite(505.5240206303339, 425.0133015172807, "pizzaParlor", "stool.png");
        stool1.setOrigin(0.49412371148560363, 0.20886698748579122);

        // stool2
        const stool2 = this.add.sprite(505.04804126066784, 507.10938223237207, "pizzaParlor", "stool.png");
        stool2.setOrigin(0.48824742297120793, 0.19038235177060261);

        // stool3
        const stool3 = this.add.sprite(449.57206189100174, 584.0613409717042, "pizzaParlor", "stool.png");
        stool3.setOrigin(0.48237113445681157, 0.19962466962819636);

        // chair1
        const chair1 = this.add.sprite(677, 476, "pizzaParlor", "chairFacingForwards.png");

        // chair2
        const chair2 = this.add.sprite(825, 439, "pizzaParlor", "chairFacingLeft.png");

        // chair3
        const chair3 = this.add.sprite(907, 604, "pizzaParlor", "chairFacingRight.png");

        // chair4
        const chair4 = this.add.sprite(1020, 504, "pizzaParlor", "chairFacingForwards.png");

        // tableLeft
        const tableLeft = this.add.sprite(765, 516, "pizzaParlor", "tableLeft.png");

        // tableRight
        const tableRight = this.add.sprite(1044, 597, "pizzaParlor", "tableRight.png");

        // railing
        const railing = this.add.sprite(923, 311, "pizzaParlor", "railing.png");

        // careStationPad
        const careStationPad = this.add.sprite(1010, 366, "pizzaParlor", "careStationPad0001.png");

        // fg
        const fg = this.add.sprite(807, 982, "pizzaParlor", "fg.png");
        fg.setOrigin(0.5, 1);

        // lists
        const sort = [railing, tableRight, tableLeft, chair4, chair3, chair2, chair1, stool3, stool2, stool1, counterFront, desk_png, pianoStool, sofaSection, stageFg, amp, microphone, stageBg, counterContainer, fg];

        // pizzatronFlap (components)
        const pizzatronFlapSimpleButton = new SimpleButton(pizzatronFlap);
        pizzatronFlapSimpleButton.hoverCallback = () => this.onPizzatronOver();
        pizzatronFlapSimpleButton.hoverOutCallback = () => this.onPizzatronOut();
        const pizzatronFlapMoveTo = new MoveTo(pizzatronFlap);
        pizzatronFlapMoveTo.x = 320;
        pizzatronFlapMoveTo.y = 300;

        // doors (components)
        const doorsSimpleButton = new SimpleButton(doors);
        doorsSimpleButton.hoverCallback = () => this.onDoorOver();
        doorsSimpleButton.hoverOutCallback = () => this.onDoorOut();
        const doorsMoveTo = new MoveTo(doors);
        doorsMoveTo.x = 800;
        doorsMoveTo.y = 300;

        // register (components)
        const registerSimpleButton = new SimpleButton(register);
        registerSimpleButton.hoverCallback = () => this.onRegisterOver();
        registerSimpleButton.hoverOutCallback = () => this.onRegisterOut();

        this.bg = bg;
        this.autocooker = autocooker;
        this.stageFloor = stageFloor;
        this.stageBg = stageBg;
        this.microphone = microphone;
        this.amp = amp;
        this.stageFg = stageFg;
        this.sofaSection = sofaSection;
        this.pianoStool = pianoStool;
        this.pizzatronFlap = pizzatronFlap;
        this.doors = doors;
        this.overDoor = overDoor;
        this.desk_png = desk_png;
        this.counterBack = counterBack;
        this.register = register;
        this.counterFront = counterFront;
        this.stool1 = stool1;
        this.stool2 = stool2;
        this.stool3 = stool3;
        this.chair1 = chair1;
        this.chair2 = chair2;
        this.chair3 = chair3;
        this.chair4 = chair4;
        this.tableLeft = tableLeft;
        this.tableRight = tableRight;
        this.railing = railing;
        this.careStationPad = careStationPad;
        this.fg = fg;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    bg;
    /** @type {Phaser.GameObjects.Sprite} */
    autocooker;
    /** @type {Phaser.GameObjects.Sprite} */
    stageFloor;
    /** @type {Phaser.GameObjects.Sprite} */
    stageBg;
    /** @type {Phaser.GameObjects.Sprite} */
    microphone;
    /** @type {Phaser.GameObjects.Sprite} */
    amp;
    /** @type {Phaser.GameObjects.Sprite} */
    stageFg;
    /** @type {Phaser.GameObjects.Sprite} */
    sofaSection;
    /** @type {Phaser.GameObjects.Sprite} */
    pianoStool;
    /** @type {Phaser.GameObjects.Sprite} */
    pizzatronFlap;
    /** @type {Phaser.GameObjects.Sprite} */
    doors;
    /** @type {Phaser.GameObjects.Sprite} */
    overDoor;
    /** @type {Phaser.GameObjects.Sprite} */
    desk_png;
    /** @type {Phaser.GameObjects.Sprite} */
    counterBack;
    /** @type {Phaser.GameObjects.Sprite} */
    register;
    /** @type {Phaser.GameObjects.Sprite} */
    counterFront;
    /** @type {Phaser.GameObjects.Sprite} */
    stool1;
    /** @type {Phaser.GameObjects.Sprite} */
    stool2;
    /** @type {Phaser.GameObjects.Sprite} */
    stool3;
    /** @type {Phaser.GameObjects.Sprite} */
    chair1;
    /** @type {Phaser.GameObjects.Sprite} */
    chair2;
    /** @type {Phaser.GameObjects.Sprite} */
    chair3;
    /** @type {Phaser.GameObjects.Sprite} */
    chair4;
    /** @type {Phaser.GameObjects.Sprite} */
    tableLeft;
    /** @type {Phaser.GameObjects.Sprite} */
    tableRight;
    /** @type {Phaser.GameObjects.Sprite} */
    railing;
    /** @type {Phaser.GameObjects.Sprite} */
    careStationPad;
    /** @type {Phaser.GameObjects.Sprite} */
    fg;
    /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
    sort;

    /* START-USER-CODE */

    create() {
        super.create()
    }

    onRegisterOver(){
        this.register.setFrame("register0003.png")
        this.sound.add("pizzaParlor-RegisterOver").play()
    }

    onRegisterOut(){
        this.register.setFrame("register0001.png")
        this.sound.add("pizzaParlor-RegisterOut").play()
    }

    onPizzatronOver(){
        this.pizzatronFlap.setFrame("pizzatronFlap0002.png")
        this.sound.add("pizzaParlor-DoorKitchenOpen").play()
    }

    onPizzatronOut(){
        this.pizzatronFlap.setFrame("pizzatronFlap0001.png")
        this.sound.add("pizzaParlor-DoorKitchenClose").play()
    }

    onDoorOver(){
        this.doors.setFrame("doors0002.png")
        this.sound.add("pizzaParlor-DoorFrontOpen").play()
    }

    onDoorOut(){
        this.doors.setFrame("doors0001.png")
        this.sound.add("pizzaParlor-DoorFrontClose").play()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
