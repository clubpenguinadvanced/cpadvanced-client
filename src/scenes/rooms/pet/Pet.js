import RoomScene from '../RoomScene'

import { MoveTo, SimpleButton, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Pet extends RoomScene {

    constructor() {
        super("Pet");

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'adoption': () => this.unimplementedPrompt(),
            'cannon': () => this.unimplementedPrompt(),
            'hotel': () => this.unimplementedPrompt(),
            'park': () => this.triggerGame("puffleRoundup", 925),
            'plaza': () => this.triggerRoom(300, 1200, 400),
            'pufflescape': () => this.unimplementedPrompt()
            //                                    id   xpos  ypos
        }

        this.music = "659"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorPreload() {

        this.load.pack("petShop-pack", "assets/media/rooms/petShop/petShop-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_outside
        const bg_outside = this.add.sprite(929, 311, "pet", "bg_outside.png");

        // pufflescape
        const pufflescape = this.add.sprite(990, 187, "pet", "pufflescape_bg.png");

        // pufflescape_ball
        const pufflescape_ball = this.add.sprite(1001, 218, "pet", "pufflescape_ball0001.png");

        // pufflescape_top
        const pufflescape_top = this.add.sprite(1011, 120, "pet", "pufflescape_top.png");

        // puffle_launch_door
        const puffle_launch_door = this.add.sprite(1197, 166, "pet", "puffle_launch_door0001.png");

        // puffle_launch_bg
        const puffle_launch_bg = this.add.sprite(1218, 285, "pet", "puffle_launch_bg.png");

        // puffle_launch_cannon
        const puffle_launch_cannon = this.add.sprite(1243, 234, "pet", "puffle_launch_cannon0001.png");

        // puffle_launch_foreground
        const puffle_launch_foreground = this.add.sprite(1214, 195, "pet", "puffle_launch_foreground.png");

        // plaza_door
        const plaza_door = this.add.sprite(766, 192, "pet", "plaza_door0001.png");

        // room_bg
        const room_bg = this.add.sprite(774, 478, "pet", "room_bg.png");

        // park_door
        const park_door = this.add.sprite(1461, 340, "pet", "park_door0001.png");

        // room_bg_higher
        const room_bg_higher = this.add.sprite(775, 478, "pet", "room_bg_higher.png");

        // exit
        const exit = this.add.sprite(1473, 142, "pet", "exit0001.png");

        // rug
        const rug = this.add.sprite(765, 686, "pet", "rug.png");

        // rug_puffles
        const rug_puffles = this.add.sprite(777, 680, "pet", "rug_puffles0001.png");

        // pipes_pink
        const pipes_pink = this.add.sprite(849, 199, "pet", "pipes_pink.png");

        // goldberrymachine
        const goldberrymachine = this.add.sprite(557, 170, "pet", "goldberrymachine0001.png");

        // goldberry_bottom
        const goldberry_bottom = this.add.sprite(551, 378, "pet", "goldberry_bottom.png");

        // goldberry_spout
        const goldberry_spout = this.add.sprite(506, 292, "pet", "goldberry_spout0001.png");

        // house_puffles
        const house_puffles = this.add.sprite(316, 345, "pet", "house_puffles.png");

        // wood_bar
        const wood_bar = this.add.sprite(313, 463, "pet", "wood_bar.png");

        // puffle_items_eight
        const puffle_items_eight = this.add.sprite(1217, 476, "pet", "puffle_items_eight.png");

        // house_light
        const house_light = this.add.sprite(87, 333, "pet", "house_light0001.png");

        // hut_foreground
        const hut_foreground = this.add.sprite(766, 402, "pet", "hut_foreground.png");

        // railing_2
        const railing_2 = this.add.sprite(1322, 482, "pet", "railing.png");

        // railing_1
        const railing_1 = this.add.sprite(1419, 570, "pet", "railing.png");
        railing_1.angle = -6;

        // adoption_sign
        const adoption_sign = this.add.sprite(324, 138, "pet", "adoption_sign0001.png");

        // top_puffles
        const top_puffles = this.add.sprite(353, 175, "pet", "top_puffles.png");

        // puffle_items_seven
        const puffle_items_seven = this.add.sprite(1440, 616, "pet", "puffle_items_seven.png");

        // puffle_items_six
        const puffle_items_six = this.add.sprite(1325, 817, "pet", "puffle_items_six.png");

        // book
        const book = this.add.sprite(268, 522, "pet", "book0001.png");

        // goldberry_pad
        const goldberry_pad = this.add.sprite(254, 431, "pet", "goldberry_pad0001.png");

        // hotel_door
        const hotel_door = this.add.sprite(20, 566, "pet", "hotel_door0001.png");

        // arch
        const arch = this.add.sprite(22, 569, "pet", "arch.png");

        // hotel_puffle
        const hotel_puffle = this.add.sprite(81, 315, "pet", "hotel_puffle.png");

        // puffle_items_five
        const puffle_items_five = this.add.sprite(1006, 833, "pet", "puffle_items_five.png");

        // puffle_items_four
        const puffle_items_four = this.add.sprite(921, 418, "pet", "puffle_items_four.png");

        // puffle_items_two
        const puffle_items_two = this.add.sprite(409, 864, "pet", "puffle_items_two.png");

        // puffle_items_three
        const puffle_items_three = this.add.sprite(475, 409, "pet", "puffle_items_three.png");

        // puffle_items_one
        const puffle_items_one = this.add.sprite(284, 584, "pet", "puffle_items_one.png");

        // disco_ball
        const disco_ball = this.add.sprite(46, 74, "pet", "disco_ball.png");

        // foreground
        const foreground = this.add.sprite(695, 856, "pet", "foreground.png");

        // hotelDoor_btn
        const hotelDoor_btn = this.add.rectangle(84, 550, 128, 350);
        hotelDoor_btn.angle = -5;
        hotelDoor_btn.fillColor = 61161;
        hotelDoor_btn.fillAlpha = 0.5;

        // puffle_btn
        const puffle_btn = this.add.rectangle(321, 347, 250, 250);
        puffle_btn.angle = -5;
        puffle_btn.fillColor = 61161;
        puffle_btn.fillAlpha = 0.5;

        // outside_btn
        const outside_btn = this.add.rectangle(764, 200, 230, 180);
        outside_btn.fillColor = 61161;
        outside_btn.fillAlpha = 0.5;

        // pufflescape_btn
        const pufflescape_btn = this.add.rectangle(1009, 194, 150, 180);
        pufflescape_btn.fillColor = 61161;
        pufflescape_btn.fillAlpha = 0.5;

        // cannon_btn
        const cannon_btn = this.add.rectangle(1251, 320, 150, 230);
        cannon_btn.fillColor = 61161;
        cannon_btn.fillAlpha = 0.5;

        // park_btn
        const park_btn = this.add.rectangle(1457, 337, 150, 290);
        park_btn.angle = 5;
        park_btn.fillColor = 61161;
        park_btn.fillAlpha = 0.5;

        // lists
        const sort = [];

        // hotelDoor_btn (components)
        const hotelDoor_btnSimpleButton = new SimpleButton(hotelDoor_btn);
        hotelDoor_btnSimpleButton.hoverCallback = () => this.onHotelDoorOver();
        hotelDoor_btnSimpleButton.hoverOutCallback = () => this.onHotelDoorOut();
        const hotelDoor_btnMoveTo = new MoveTo(hotelDoor_btn);
        hotelDoor_btnMoveTo.x = 100;
        hotelDoor_btnMoveTo.y = 700;

        // puffle_btn (components)
        const puffle_btnSimpleButton = new SimpleButton(puffle_btn);
        puffle_btnSimpleButton.hoverCallback = () => this.onPufflesOver();
        puffle_btnSimpleButton.hoverOutCallback = () => this.onPufflesOut();
        const puffle_btnMoveTo = new MoveTo(puffle_btn);
        puffle_btnMoveTo.x = 300;
        puffle_btnMoveTo.y = 500;

        // outside_btn (components)
        const outside_btnSimpleButton = new SimpleButton(outside_btn);
        outside_btnSimpleButton.hoverCallback = () => this.onOutsideOver();
        outside_btnSimpleButton.hoverOutCallback = () => this.onOutsideOut();
        const outside_btnMoveTo = new MoveTo(outside_btn);
        outside_btnMoveTo.x = 750;
        outside_btnMoveTo.y = 300;

        // pufflescape_btn (components)
        const pufflescape_btnSimpleButton = new SimpleButton(pufflescape_btn);
        pufflescape_btnSimpleButton.hoverCallback = () => this.onPufflescapeOver();
        pufflescape_btnSimpleButton.hoverOutCallback = () => this.onPufflescapeOut();
        const pufflescape_btnMoveTo = new MoveTo(pufflescape_btn);
        pufflescape_btnMoveTo.x = 1000;
        pufflescape_btnMoveTo.y = 300;

        // cannon_btn (components)
        const cannon_btnSimpleButton = new SimpleButton(cannon_btn);
        cannon_btnSimpleButton.hoverCallback = () => this.onCannonOver();
        cannon_btnSimpleButton.hoverOutCallback = () => this.onCannonOut();
        const cannon_btnMoveTo = new MoveTo(cannon_btn);
        cannon_btnMoveTo.x = 1250;
        cannon_btnMoveTo.y = 450;

        // park_btn (components)
        const park_btnSimpleButton = new SimpleButton(park_btn);
        park_btnSimpleButton.hoverCallback = () => this.onParkDoorOver();
        park_btnSimpleButton.hoverOutCallback = () => this.onParkDoorOut();
        const park_btnMoveTo = new MoveTo(park_btn);
        park_btnMoveTo.x = 1400;
        park_btnMoveTo.y = 500;
        const park_btnShowHint = new ShowHint(park_btn);
        park_btnShowHint.text = "Puffle Roundup";

        this.bg_outside = bg_outside;
        this.pufflescape = pufflescape;
        this.pufflescape_ball = pufflescape_ball;
        this.pufflescape_top = pufflescape_top;
        this.puffle_launch_door = puffle_launch_door;
        this.puffle_launch_bg = puffle_launch_bg;
        this.puffle_launch_cannon = puffle_launch_cannon;
        this.puffle_launch_foreground = puffle_launch_foreground;
        this.plaza_door = plaza_door;
        this.room_bg = room_bg;
        this.park_door = park_door;
        this.room_bg_higher = room_bg_higher;
        this.exit = exit;
        this.rug = rug;
        this.rug_puffles = rug_puffles;
        this.pipes_pink = pipes_pink;
        this.goldberrymachine = goldberrymachine;
        this.goldberry_bottom = goldberry_bottom;
        this.goldberry_spout = goldberry_spout;
        this.house_puffles = house_puffles;
        this.wood_bar = wood_bar;
        this.puffle_items_eight = puffle_items_eight;
        this.house_light = house_light;
        this.hut_foreground = hut_foreground;
        this.railing_2 = railing_2;
        this.railing_1 = railing_1;
        this.adoption_sign = adoption_sign;
        this.top_puffles = top_puffles;
        this.puffle_items_seven = puffle_items_seven;
        this.puffle_items_six = puffle_items_six;
        this.book = book;
        this.goldberry_pad = goldberry_pad;
        this.hotel_door = hotel_door;
        this.arch = arch;
        this.hotel_puffle = hotel_puffle;
        this.puffle_items_five = puffle_items_five;
        this.puffle_items_four = puffle_items_four;
        this.puffle_items_two = puffle_items_two;
        this.puffle_items_three = puffle_items_three;
        this.puffle_items_one = puffle_items_one;
        this.disco_ball = disco_ball;
        this.foreground = foreground;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    bg_outside;
    /** @type {Phaser.GameObjects.Sprite} */
    pufflescape;
    /** @type {Phaser.GameObjects.Sprite} */
    pufflescape_ball;
    /** @type {Phaser.GameObjects.Sprite} */
    pufflescape_top;
    /** @type {Phaser.GameObjects.Sprite} */
    puffle_launch_door;
    /** @type {Phaser.GameObjects.Sprite} */
    puffle_launch_bg;
    /** @type {Phaser.GameObjects.Sprite} */
    puffle_launch_cannon;
    /** @type {Phaser.GameObjects.Sprite} */
    puffle_launch_foreground;
    /** @type {Phaser.GameObjects.Sprite} */
    plaza_door;
    /** @type {Phaser.GameObjects.Sprite} */
    room_bg;
    /** @type {Phaser.GameObjects.Sprite} */
    park_door;
    /** @type {Phaser.GameObjects.Sprite} */
    room_bg_higher;
    /** @type {Phaser.GameObjects.Sprite} */
    exit;
    /** @type {Phaser.GameObjects.Sprite} */
    rug;
    /** @type {Phaser.GameObjects.Sprite} */
    rug_puffles;
    /** @type {Phaser.GameObjects.Sprite} */
    pipes_pink;
    /** @type {Phaser.GameObjects.Sprite} */
    goldberrymachine;
    /** @type {Phaser.GameObjects.Sprite} */
    goldberry_bottom;
    /** @type {Phaser.GameObjects.Sprite} */
    goldberry_spout;
    /** @type {Phaser.GameObjects.Sprite} */
    house_puffles;
    /** @type {Phaser.GameObjects.Sprite} */
    wood_bar;
    /** @type {Phaser.GameObjects.Sprite} */
    puffle_items_eight;
    /** @type {Phaser.GameObjects.Sprite} */
    house_light;
    /** @type {Phaser.GameObjects.Sprite} */
    hut_foreground;
    /** @type {Phaser.GameObjects.Sprite} */
    railing_2;
    /** @type {Phaser.GameObjects.Sprite} */
    railing_1;
    /** @type {Phaser.GameObjects.Sprite} */
    adoption_sign;
    /** @type {Phaser.GameObjects.Sprite} */
    top_puffles;
    /** @type {Phaser.GameObjects.Sprite} */
    puffle_items_seven;
    /** @type {Phaser.GameObjects.Sprite} */
    puffle_items_six;
    /** @type {Phaser.GameObjects.Sprite} */
    book;
    /** @type {Phaser.GameObjects.Sprite} */
    goldberry_pad;
    /** @type {Phaser.GameObjects.Sprite} */
    hotel_door;
    /** @type {Phaser.GameObjects.Sprite} */
    arch;
    /** @type {Phaser.GameObjects.Sprite} */
    hotel_puffle;
    /** @type {Phaser.GameObjects.Sprite} */
    puffle_items_five;
    /** @type {Phaser.GameObjects.Sprite} */
    puffle_items_four;
    /** @type {Phaser.GameObjects.Sprite} */
    puffle_items_two;
    /** @type {Phaser.GameObjects.Sprite} */
    puffle_items_three;
    /** @type {Phaser.GameObjects.Sprite} */
    puffle_items_one;
    /** @type {Phaser.GameObjects.Sprite} */
    disco_ball;
    /** @type {Phaser.GameObjects.Sprite} */
    foreground;
    /** @type {Array<any>} */
    sort;

    /* START-USER-CODE */

    create() {
        super.create()
    }

    onHotelDoorOver(){
        this.hotel_door.setFrame("hotel_door0002.png")
        this.sound.add("petShop-DoorMiddleOpen").play()
    }

    onHotelDoorOut(){
        this.hotel_door.setFrame("hotel_door0001.png")
        this.sound.add("petShop-DoorMiddleClose").play()
    }

    onPufflesOver(){
        this.house_light.setFrame("house_light0002.png")
    }

    onPufflesOut(){
        this.house_light.setFrame("house_light0001.png")
    }

    onOutsideOver(){
        this.plaza_door.setFrame("plaza_door0002.png")
        this.sound.add("petShop-DoorPetOpen").play()
    }

    onOutsideOut(){
        this.plaza_door.setFrame("plaza_door0001.png")
        this.sound.add("petShop-DoorPetClose").play()
    }

    onPufflescapeOver(){
        this.pufflescape_ball.play("pufflescape_ball")
    }

    onPufflescapeOut(){
        this.pufflescape_ball.stop("pufflescape_ball")
        this.pufflescape_ball.setFrame("pufflescape_ball0001.png")
    }

    onCannonOver(){
        this.puffle_launch_cannon.play("puffle_launch_cannon")
        this.puffle_launch_door.play("puffle_launch_door")
    }

    onCannonOut(){
        this.puffle_launch_cannon.stop("puffle_launch_cannon")
        this.puffle_launch_door.stop("puffle_launch_door")
        this.puffle_launch_cannon.setFrame("puffle_launch_cannon0001.png")
        this.puffle_launch_door.setFrame("puffle_launch_door0001.png")
    }

    onParkDoorOver(){
        this.park_door.setFrame("park_door0002.png")
        this.sound.add("petShop-DoorRightOpen").play()
    }

    onParkDoorOut(){
        this.park_door.setFrame("park_door0001.png")
        this.sound.add("petShop-DoorRightClose").play()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
