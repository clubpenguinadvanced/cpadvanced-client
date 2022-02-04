import RoomScene from '../RoomScene'

import { MoveTo, SimpleButton, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Town extends RoomScene {

    constructor() {
        super("Town");

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'dock': () => this.triggerRoom(800, 1200, 400),
            'snowForts': () => this.triggerRoom(801, 360, 520),
            'coffeeShop': () => this.triggerRoom(110, 700, 450),
            'danceClub': () => this.triggerRoom(120, 300, 560),
            'clothesShop': () => this.triggerRoom(130, 1036, 520),
            'hats': () => this.interface.prompt.showItem(413)
        }

        this.music = '1160'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorPreload() {

        this.load.pack("town-pack", "assets/media/rooms/town/town-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        const sky = this.add.image(-92, -72, "town", "bg_sky.png");
        sky.setOrigin(0, 0);

        // bg
        const bg = this.add.image(-97.80423540374727, 986.0732936798435, "town", "background.png");
        bg.setOrigin(0.0006852446809371995, 1.0032013740410073);

        // noticeboard
        const noticeboard = this.add.image(227, 532.0810695829088, "town", "noticeboard.png");
        noticeboard.setOrigin(0.5, -0.0009630584300948194);

        // front_trees
        const front_trees = this.add.image(-140.0645866423041, 732.6692749019403, "town", "front_trees.png");
        front_trees.setOrigin(-0.000037033625174373305, 0.012728011654378707);

        // dc_door
        const dc_door = this.add.sprite(852.6224744531738, 191.5476374205231, "town", "danceclubdoor0001.png");
        dc_door.setOrigin(0.5579637817944546, -0.002307969050704048);

        // coffee_door
        const coffee_door = this.add.sprite(425.0580922656529, 330.6070121767309, "town", "coffeedoor0001.png");
        coffee_door.setOrigin(0.5507261533206609, -0.0027676246941171125);

        // clothes_door
        const clothes_door = this.add.sprite(1113.9854670312639, 270.80911446172684, "town", "clothesdoor0001.png");
        clothes_door.setOrigin(0.4877768305251397, -0.01994307153677468);

        // bench_arm
        const bench_arm = this.add.image(262.5309753417969, 528.4562288520525, "town", "bench_arm.png");
        bench_arm.setOrigin(0.47839655086139365, 0.7665475678359499);

        // clothes_rack
        const clothes_rack = this.add.image(1198.8140929688152, 391.8275851517446, "town", "clothesrack.png");
        clothes_rack.setOrigin(0.5072043625558867, 0.011544218710822484);

        // left_chair
        const left_chair = this.add.image(552.0159298652105, 429.7304992897617, "town", "chair_left.png");
        left_chair.setOrigin(0.43846826392076804, 0.2992761373118083);

        // right_chair
        const right_chair = this.add.image(702.9279176653323, 415.18392931025767, "town", "chair_right.png");
        right_chair.setOrigin(0.5418277481710252, 0.27855253873250896);

        // coloured_lights
        const coloured_lights = this.add.sprite(837.7591937679998, -86.67256088001315, "town", "colouredlights0001.png");
        coloured_lights.setOrigin(0.49671744383068733, 0.00587362442472057);

        // dance_cover
        const dance_cover = this.add.image(854.2408062320002, 332.31435637599895, "town", "danceclubcover.png");
        dance_cover.setOrigin(0.5079538861025653, 0.4574233155686223);

        // main_lights
        const main_lights = this.add.sprite(587.1898850479691, -34.59901073601432, "town", "lights0001.png");
        main_lights.setOrigin(0.00036237604574263714, 0.009681408322522898);

        // shopfronts
        const shopfronts = this.add.image(204.98832704793267, 106.30728331998318, "town", "shopfronts.png");
        shopfronts.setOrigin(-0.002646461293556528, 0.007956149379252361);

        // speakers
        const speakers = this.add.sprite(674.5279337519796, 266.49823173599606, "town", "speakers0001.png");
        speakers.setOrigin(0.004390614229826486, -0.0234651291250616);

        // stars_anim
        const stars_anim = this.add.sprite(791.2004946319928, 275.1838753599971, "town", "stars_animations0001.png");
        stars_anim.setOrigin(0.01746424311105394, 0.02276683384609813);
        stars_anim.visible = false;

        // stars
        const stars = this.add.image(795.9229133279932, 278.66548782399735, "town", "stars.png");
        stars.setOrigin(0.016295875660959563, 0.014467126608638104);

        // table
        const table = this.add.image(628.362414669051, 476.3085517350086, "town", "table.png");
        table.setOrigin(0.5222867233277427, 0.7080516274288713);

        // betahats
        const betahats = this.add.sprite(1234, 688, "town", "betahats.png");

        // lists
        const sort = [bench_arm, left_chair, right_chair, table];

        // dc_door (components)
        const dc_doorSimpleButton = new SimpleButton(dc_door);
        dc_doorSimpleButton.hoverCallback = () => this.DiscoDoorOver();
        dc_doorSimpleButton.hoverOutCallback = () => this.DiscoDoorOut();
        const dc_doorMoveTo = new MoveTo(dc_door);
        dc_doorMoveTo.x = 890;
        dc_doorMoveTo.y = 400;

        // coffee_door (components)
        const coffee_doorSimpleButton = new SimpleButton(coffee_door);
        coffee_doorSimpleButton.hoverCallback = () => this.CoffeeDoorOver();
        coffee_doorSimpleButton.hoverOutCallback = () => this.CoffeeDoorOut();
        const coffee_doorMoveTo = new MoveTo(coffee_door);
        coffee_doorMoveTo.x = 460;
        coffee_doorMoveTo.y = 450;

        // clothes_door (components)
        const clothes_doorSimpleButton = new SimpleButton(clothes_door);
        clothes_doorSimpleButton.hoverCallback = () => this.ShopDoorOver();
        clothes_doorSimpleButton.hoverOutCallback = () => this.ShopDoorOut();
        const clothes_doorMoveTo = new MoveTo(clothes_door);
        clothes_doorMoveTo.x = 1130;
        clothes_doorMoveTo.y = 400;

        // betahats (components)
        new SimpleButton(betahats);
        const betahatsMoveTo = new MoveTo(betahats);
        betahatsMoveTo.x = 1200;
        betahatsMoveTo.y = 665;

        this.dc_door = dc_door;
        this.coffee_door = coffee_door;
        this.clothes_door = clothes_door;
        this.coloured_lights = coloured_lights;
        this.main_lights = main_lights;
        this.speakers = speakers;
        this.stars_anim = stars_anim;
        this.betahats = betahats;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    dc_door;
    /** @type {Phaser.GameObjects.Sprite} */
    coffee_door;
    /** @type {Phaser.GameObjects.Sprite} */
    clothes_door;
    /** @type {Phaser.GameObjects.Sprite} */
    coloured_lights;
    /** @type {Phaser.GameObjects.Sprite} */
    main_lights;
    /** @type {Phaser.GameObjects.Sprite} */
    speakers;
    /** @type {Phaser.GameObjects.Sprite} */
    stars_anim;
    /** @type {Phaser.GameObjects.Sprite} */
    betahats;
    /** @type {Phaser.GameObjects.Image[]} */
    sort;

    /* START-USER-CODE */

    create() {
        super.create()

        this.main_lights.play("lights")
        this.coloured_lights.play("colouredlights")
        this.speakers.play("speakers")

    }

    DiscoDoorOver(){
        this.dc_door.play("danceclubdoor")
        this.sound.add("town-DoorDiscoOpen").play()
    }

    DiscoDoorOut(){
        this.dc_door.stop("danceclubdoor")
        this.dc_door.setFrame("danceclubdoor0001.png")
        this.sound.add("town-DoorDiscoClose").play()
    }

    CoffeeDoorOver(){
        this.coffee_door.setFrame("coffeedoor0002.png")
        this.sound.add("town-DoorCoffeeOpen").play()
    }

    CoffeeDoorOut(){
        this.coffee_door.setFrame("coffeedoor0001.png")
        this.sound.add("town-DoorCoffeeClose").play()
    }

    ShopDoorOver(){
        this.clothes_door.setFrame("clothesdoor0002.png")
        this.sound.add("town-DoorShopOpen").play()
    }

    ShopDoorOut(){
        this.clothes_door.setFrame("clothesdoor0001.png")
        this.sound.add("town-DoorShopClose").play()
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
