import RoomScene from '../RoomScene'
import { SimpleButton, MoveTo } from '@components/components'

/* START OF COMPILED CODE */

export default class School extends RoomScene {

    constructor() {
        super("School");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'rink': () => this.triggerRoom(802, 1200, 400),
            'shack': () => this.triggerRoom(807, 360, 520)
        }
		
		this.music = "436"
		
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("school-pack", "assets/media/rooms/school/school-pack.json");
		
		/* START-USER-CTR-CODE */

        this.load.audio("436", "assets/media/music/436.mp3");

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(776, 451, "school", "bg.png");

        // table3
        const table3 = this.add.sprite(400, 373, "school", "table3.png");

        // chair3_container
        const chair3_container = this.add.container(322, 403);

        // chair3
        const chair3 = this.add.sprite(20, 2, "school", "chair234.png");
        chair3.setOrigin(0.5, 0);
        chair3_container.add(chair3);

        // chair3_back
        const chair3_back = this.add.sprite(0, 22.760789923319408, "school", "chair234back.png");
        chair3_back.setOrigin(0.5, 0.7395872623507306);
        chair3_container.add(chair3_back);

        // chair4_container
        const chair4_container = this.add.container(421, 404);

        // chair4
        const chair4 = this.add.sprite(20, 1, "school", "chair234.png");
        chair4.setOrigin(0.5, 0);
        chair4_container.add(chair4);

        // chair4_back
        const chair4_back = this.add.sprite(4.3983237644104705, 21.314953627527643, "school", "chair234back.png");
        chair4_back.setOrigin(0.5483332281803348, 0.7243679329213436);
        chair4_container.add(chair4_back);

        // table1
        const table1 = this.add.sprite(337, 500, "school", "table1.png");

        // teacherChair
        const teacherChair = this.add.sprite(749, 290, "school", "teacherChair.png");

        // teacherDesk
        const teacherDesk = this.add.sprite(692, 329, "school", "teacherDesk.png");

        // chair1
        const chair1 = this.add.sprite(260, 533.5, "school", "chair1.png");
        chair1.setOrigin(0.5, 0);

        // table4
        const table4 = this.add.sprite(712, 387, "school", "table4.png");

        // rightWall_container
        const rightWall_container = this.add.container(1352, 319);

        // canteenServer
        const canteenServer = this.add.sprite(0, 0, "school", "canteenServer.png");
        rightWall_container.add(canteenServer);

        // canteenHood
        const canteenHood = this.add.sprite(20, -189, "school", "canteenHood.png");
        rightWall_container.add(canteenHood);

        // rightWall
        const rightWall = this.add.sprite(78, 98, "school", "rightWall.png");
        rightWall_container.add(rightWall);

        // rightDoor
        const rightDoor = this.add.sprite(1472, 579, "school", "rightDoor0001.png");

        // chair7_container
        const chair7_container = this.add.container(659, 421);

        // chair7
        const chair7 = this.add.sprite(2, -10, "school", "chair567.png");
        chair7.setOrigin(0.5, 0);
        chair7_container.add(chair7);

        // chair7_back
        const chair7_back = this.add.sprite(1.197936311753665, 21.5628536115658, "school", "chair567back.png");
        chair7_back.setOrigin(0.514261146568496, 0.7269774064375347);
        chair7_container.add(chair7_back);

        // chair8_container
        const chair8_container = this.add.container(767, 418);

        // chair8
        const chair8 = this.add.sprite(0, -16.5, "school", "chair8.png");
        chair8.setOrigin(0.5, 0);
        chair8_container.add(chair8);

        // chair8_back
        const chair8_back = this.add.sprite(13.39587262350733, 21.5628536115658, "school", "chair8back.png");
        chair8_back.setOrigin(0.5299484077938417, 0.7073351308804404);
        chair8_container.add(chair8_back);

        // table2
        const table2 = this.add.sprite(715, 500, "school", "table2.png");

        // chair2_container
        const chair2_container = this.add.container(373, 531);

        // chair2
        const chair2 = this.add.sprite(22, -1, "school", "chair234.png");
        chair2.setOrigin(0.5, 0);
        chair2_container.add(chair2);

        // chair2_back
        const chair2_back = this.add.sprite(3.593808935260938, 19.166980988058526, "school", "chair234back.png");
        chair2_back.setOrigin(0.5394924058819883, 0.7017576946111423);
        chair2_container.add(chair2_back);

        // chair6_container
        const chair6_container = this.add.container(769, 547);

        // chair6
        const chair6 = this.add.sprite(1.5634976625442505, -16.98732852935791, "school", "chair567.png");
        chair6.setOrigin(0.5, 0);
        chair6_container.add(chair6);

        // chair6_back
        const chair6_back = this.add.sprite(0.5634976625442505, 15.179652935537774, "school", "chair567back.png");
        chair6_back.setOrigin(0.5, 0.7017576946111423);
        chair6_container.add(chair6_back);

        // chair5_container
        const chair5_container = this.add.container(656, 546);

        // chair5
        const chair5 = this.add.sprite(1.5634976625442505, -16.98732852935791, "school", "chair567.png");
        chair5.setOrigin(0.5, 0);
        chair5_container.add(chair5);

        // chair5_back
        const chair5_back = this.add.sprite(-0.6344386492094145, 13.98171662378411, "school", "chair567back.png");
        chair5_back.setOrigin(0.48573885343150397, 0.6891478386979459);
        chair5_container.add(chair5_back);

        // leftWall_container
        const leftWall_container = this.add.container(218.7298705687275, 676.2769277264274);

        // leftWall
        const leftWall = this.add.sprite(-52.729866396966784, -259.2769228420844, "school", "leftWall.png");
        leftWall_container.add(leftWall);

        // leftDoor
        const leftDoor = this.add.sprite(67, 851.4999949524841, "school", "leftDoor0001.png");
        leftDoor.setOrigin(0.5, 1);

        // dividingWall
        const dividingWall = this.add.sprite(720.9706106456971, 630.364914403714, "school", "dividingWall.png");
        dividingWall.setOrigin(0.38968657589760514, 0.8916872021144354);

        // cafeChair2
        const cafeChair2 = this.add.sprite(1314, 488, "school", "cafeChair24.png");

        // cafeChair3
        const cafeChair3 = this.add.sprite(1022, 354, "school", "cafeChair3.png");

        // cafeTable1
        const cafeTable1 = this.add.sprite(1235, 553, "school", "cafeTable1.png");

        // cafeChair4
        const cafeChair4 = this.add.sprite(1229, 374, "school", "cafeChair24.png");

        // cafeChair1_container
        const cafeChair1_container = this.add.container(1080, 564);

        // cafeChair1
        const cafeChair1 = this.add.sprite(20, -12.5, "school", "cafeChair1.png");
        cafeChair1.setOrigin(0.5, 0);
        cafeChair1_container.add(cafeChair1);

        // cafeChair1_back
        const cafeChair1_back = this.add.sprite(0, 28.750471482087733, "school", "cafeChair1Back.png");
        cafeChair1_back.setOrigin(0.5, 0.7521971182639274);
        cafeChair1_container.add(cafeChair1_back);

        // cafeTable2
        const cafeTable2 = this.add.sprite(1124, 407, "school", "cafeTable2.png");

        // exitSignLeft
        const exitSignLeft = this.add.sprite(27, 372, "school", "exitSignLeft.png");

        // exitSignRight
        const exitSignRight = this.add.sprite(1511, 375, "school", "exitSignRight.png");

        // microphone
        const microphone = this.add.sprite(1100, 269, "school", "microphone.png");

        // fg
        const fg = this.add.sprite(760.0000241551735, 993.0000008777695, "school", "fg.png");
        fg.setOrigin(0.5, 1);

        // lists
        const sort = [canteenServer, microphone, exitSignRight, exitSignLeft, cafeTable2, cafeChair1_container, cafeChair4, cafeTable1, cafeChair3, cafeChair2, dividingWall, chair5_container, chair6_container, chair2_container, table2, chair8_container, chair7_container, table4, teacherDesk, teacherChair, table1, chair4_container, chair3_container, table3, chair1, leftWall_container, fg, leftDoor];

        // rightDoor (components)
        const rightDoorSimpleButton = new SimpleButton(rightDoor);
        rightDoorSimpleButton.hoverCallback = () => this.onRightDoorOver();
        rightDoorSimpleButton.hoverOutCallback = () => this.onRightDoorOut();
        const rightDoorMoveTo = new MoveTo(rightDoor);
        rightDoorMoveTo.x = 1400;
        rightDoorMoveTo.y = 750;

        // leftDoor (components)
        const leftDoorSimpleButton = new SimpleButton(leftDoor);
        leftDoorSimpleButton.hoverCallback = () => this.onLeftDoorOver();
        leftDoorSimpleButton.hoverOutCallback = () => this.onLeftDoorOut();
        const leftDoorMoveTo = new MoveTo(leftDoor);
        leftDoorMoveTo.x = 160;
        leftDoorMoveTo.y = 750;

        this.bg = bg;
        this.table3 = table3;
        this.chair3 = chair3;
        this.chair3_back = chair3_back;
        this.chair4 = chair4;
        this.chair4_back = chair4_back;
        this.table1 = table1;
        this.teacherChair = teacherChair;
        this.teacherDesk = teacherDesk;
        this.chair1 = chair1;
        this.table4 = table4;
        this.canteenServer = canteenServer;
        this.canteenHood = canteenHood;
        this.rightWall = rightWall;
        this.rightDoor = rightDoor;
        this.chair7 = chair7;
        this.chair7_back = chair7_back;
        this.chair8 = chair8;
        this.chair8_back = chair8_back;
        this.table2 = table2;
        this.chair2 = chair2;
        this.chair2_back = chair2_back;
        this.chair6 = chair6;
        this.chair6_back = chair6_back;
        this.chair5 = chair5;
        this.chair5_back = chair5_back;
        this.leftWall = leftWall;
        this.leftDoor = leftDoor;
        this.dividingWall = dividingWall;
        this.cafeChair2 = cafeChair2;
        this.cafeChair3 = cafeChair3;
        this.cafeTable1 = cafeTable1;
        this.cafeChair4 = cafeChair4;
        this.cafeChair1 = cafeChair1;
        this.cafeChair1_back = cafeChair1_back;
        this.cafeTable2 = cafeTable2;
        this.exitSignLeft = exitSignLeft;
        this.exitSignRight = exitSignRight;
        this.microphone = microphone;
        this.fg = fg;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    bg;
    /** @type {Phaser.GameObjects.Sprite} */
    table3;
    /** @type {Phaser.GameObjects.Sprite} */
    chair3;
    /** @type {Phaser.GameObjects.Sprite} */
    chair3_back;
    /** @type {Phaser.GameObjects.Sprite} */
    chair4;
    /** @type {Phaser.GameObjects.Sprite} */
    chair4_back;
    /** @type {Phaser.GameObjects.Sprite} */
    table1;
    /** @type {Phaser.GameObjects.Sprite} */
    teacherChair;
    /** @type {Phaser.GameObjects.Sprite} */
    teacherDesk;
    /** @type {Phaser.GameObjects.Sprite} */
    chair1;
    /** @type {Phaser.GameObjects.Sprite} */
    table4;
    /** @type {Phaser.GameObjects.Sprite} */
    canteenServer;
    /** @type {Phaser.GameObjects.Sprite} */
    canteenHood;
    /** @type {Phaser.GameObjects.Sprite} */
    rightWall;
    /** @type {Phaser.GameObjects.Sprite} */
    rightDoor;
    /** @type {Phaser.GameObjects.Sprite} */
    chair7;
    /** @type {Phaser.GameObjects.Sprite} */
    chair7_back;
    /** @type {Phaser.GameObjects.Sprite} */
    chair8;
    /** @type {Phaser.GameObjects.Sprite} */
    chair8_back;
    /** @type {Phaser.GameObjects.Sprite} */
    table2;
    /** @type {Phaser.GameObjects.Sprite} */
    chair2;
    /** @type {Phaser.GameObjects.Sprite} */
    chair2_back;
    /** @type {Phaser.GameObjects.Sprite} */
    chair6;
    /** @type {Phaser.GameObjects.Sprite} */
    chair6_back;
    /** @type {Phaser.GameObjects.Sprite} */
    chair5;
    /** @type {Phaser.GameObjects.Sprite} */
    chair5_back;
    /** @type {Phaser.GameObjects.Sprite} */
    leftWall;
    /** @type {Phaser.GameObjects.Sprite} */
    leftDoor;
    /** @type {Phaser.GameObjects.Sprite} */
    dividingWall;
    /** @type {Phaser.GameObjects.Sprite} */
    cafeChair2;
    /** @type {Phaser.GameObjects.Sprite} */
    cafeChair3;
    /** @type {Phaser.GameObjects.Sprite} */
    cafeTable1;
    /** @type {Phaser.GameObjects.Sprite} */
    cafeChair4;
    /** @type {Phaser.GameObjects.Sprite} */
    cafeChair1;
    /** @type {Phaser.GameObjects.Sprite} */
    cafeChair1_back;
    /** @type {Phaser.GameObjects.Sprite} */
    cafeTable2;
    /** @type {Phaser.GameObjects.Sprite} */
    exitSignLeft;
    /** @type {Phaser.GameObjects.Sprite} */
    exitSignRight;
    /** @type {Phaser.GameObjects.Sprite} */
    microphone;
    /** @type {Phaser.GameObjects.Sprite} */
    fg;
    /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
    sort;

    /* START-USER-CODE */

    // Write your code here

    create() {

        super.create();
    }

    onRightDoorOver(){
        this.rightDoor.setFrame("rightDoor0002.png")
        this.sound.add("school-DoorOpen").play()
    }

    onRightDoorOut(){
        this.rightDoor.setFrame("rightDoor0001.png")
        this.sound.add("school-DoorClose").play()
    }

    onLeftDoorOver(){
        this.leftDoor.setFrame("leftDoor0002.png")
        this.sound.add("school-DoorOpen").play()
    }

    onLeftDoorOut(){
        this.leftDoor.setFrame("leftDoor0001.png")
        this.sound.add("school-DoorClose").play()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
