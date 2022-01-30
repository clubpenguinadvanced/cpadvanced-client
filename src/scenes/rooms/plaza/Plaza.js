import RoomScene from '../RoomScene'

import { MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Plaza extends RoomScene {

    constructor() {
        super("Plaza");

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'cave': () => this.triggerRoom(806, 1200, 400),
            'forts': () => this.triggerRoom(801, 1200, 400),
            'hotel': () => this.unimplementedPrompt(),
            'mall': () => this.unimplementedPrompt(),
            'park': () => this.unimplementedPrompt(),
            'pet': () => this.triggerRoom(310, 1200, 400),
            'pizza': () => this.triggerRoom(330, 1200, 400),
            'shack': () => this.triggerRoom(809, 1200, 400)

        }
		
		this.music = "1170"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("plaza-pack", "assets/media/rooms/plaza/plaza-pack.json");
		
		/* START-USER-CTR-CODE */

        this.load.audio("1170", "assets/media/music/1170.mp3");

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(765, 428, "plaza", "bg.png");

        // parkGate
        const parkGate = this.add.sprite(-32, 330, "plaza", "parkGate0001.png");

        // shopsBg
        const shopsBg = this.add.sprite(802, 316, "plaza", "shopsBg.png");

        // cannon
        const cannon = this.add.sprite(305, 422, "plaza", "cannon0001.png");

        // shopfronts
        const shopfronts = this.add.sprite(820, 252, "plaza", "shopfronts.png");

        // cannonSmoke
        const cannonSmoke = this.add.sprite(236, 221, "plaza", "cannonSmoke0002.png");
        cannonSmoke.visible = false;

        // cannonPuffle
        const cannonPuffle = this.add.sprite(29, 494, "plaza", "cannonPuffle0002.png");
        cannonPuffle.visible = false;

        // flagLeft
        const flagLeft = this.add.sprite(807, 68, "plaza", "flagLeft0001.png");

        // flagRight
        const flagRight = this.add.sprite(1145, 69, "plaza", "flagRight0001.png");

        // hotelDoor
        const hotelDoor = this.add.sprite(679, 396, "plaza", "hotelDoor0001.png");

        // petDoor
        const petDoor = this.add.sprite(419, 424, "plaza", "petDooe0001.png");

        // mallDoor
        const mallDoor = this.add.sprite(952, 392, "plaza", "mallDoor0001.png");

        // pizzaDoor
        const pizzaDoor = this.add.sprite(1257, 408, "plaza", "pizzaDoor0001.png");

        // manhole
        const manhole = this.add.sprite(544, 484, "plaza", "manhole0011.png");
        manhole.scaleX = 1.05;

        // shopSign
        const shopSign = this.add.sprite(402, 288, "plaza", "shopSign0001.png");

        // fg
        const fg = this.add.sprite(776, 811, "plaza", "fg.png");

        // parkGate_btn
        const parkGate_btn = this.add.rectangle(164, 334, 200, 250);
        parkGate_btn.fillColor = 643561;
        parkGate_btn.fillAlpha = 0.5;

        // manhole_btn
        const manhole_btn = this.add.rectangle(545, 532, 100, 80);
        manhole_btn.fillColor = 643561;
        manhole_btn.fillAlpha = 0.5;

        // lists
        const sort = [];

        // cannon (components)
        const cannonSimpleButton = new SimpleButton(cannon);
        cannonSimpleButton.hoverCallback = () => this.onCannonOver();
        cannonSimpleButton.hoverOutCallback = () => this.onCannonOut();

        // hotelDoor (components)
        const hotelDoorSimpleButton = new SimpleButton(hotelDoor);
        hotelDoorSimpleButton.hoverCallback = () => this.onHotelOver();
        hotelDoorSimpleButton.hoverOutCallback = () => this.onHotelOut();
        const hotelDoorMoveTo = new MoveTo(hotelDoor);
        hotelDoorMoveTo.x = 680;
        hotelDoorMoveTo.y = 450;

        // petDoor (components)
        const petDoorSimpleButton = new SimpleButton(petDoor);
        petDoorSimpleButton.hoverCallback = () => this.onPetOver();
        petDoorSimpleButton.hoverOutCallback = () => this.onPetOut();
        const petDoorMoveTo = new MoveTo(petDoor);
        petDoorMoveTo.x = 420;
        petDoorMoveTo.y = 450;

        // mallDoor (components)
        const mallDoorSimpleButton = new SimpleButton(mallDoor);
        mallDoorSimpleButton.hoverCallback = () => this.onMallOver();
        mallDoorSimpleButton.hoverOutCallback = () => this.onMallOut();
        const mallDoorMoveTo = new MoveTo(mallDoor);
        mallDoorMoveTo.x = 950;
        mallDoorMoveTo.y = 450;

        // pizzaDoor (components)
        const pizzaDoorSimpleButton = new SimpleButton(pizzaDoor);
        pizzaDoorSimpleButton.hoverCallback = () => this.onPizzaOver();
        pizzaDoorSimpleButton.hoverOutCallback = () => this.onPizzaOut();
        const pizzaDoorMoveTo = new MoveTo(pizzaDoor);
        pizzaDoorMoveTo.x = 1260;
        pizzaDoorMoveTo.y = 450;

        // parkGate_btn (components)
        const parkGate_btnSimpleButton = new SimpleButton(parkGate_btn);
        parkGate_btnSimpleButton.hoverCallback = () => this.onParkOver();
        parkGate_btnSimpleButton.hoverOutCallback = () => this.onParkOut();
        const parkGate_btnMoveTo = new MoveTo(parkGate_btn);
        parkGate_btnMoveTo.x = 170;
        parkGate_btnMoveTo.y = 450;

        // manhole_btn (components)
        const manhole_btnSimpleButton = new SimpleButton(manhole_btn);
        manhole_btnSimpleButton.hoverCallback = () => this.onManholeOver();
        manhole_btnSimpleButton.hoverOutCallback = () => this.onManholeOut();
        const manhole_btnMoveTo = new MoveTo(manhole_btn);
        manhole_btnMoveTo.x = 545;
        manhole_btnMoveTo.y = 532;

        this.bg = bg;
        this.parkGate = parkGate;
        this.shopsBg = shopsBg;
        this.cannon = cannon;
        this.shopfronts = shopfronts;
        this.cannonSmoke = cannonSmoke;
        this.cannonPuffle = cannonPuffle;
        this.flagLeft = flagLeft;
        this.flagRight = flagRight;
        this.hotelDoor = hotelDoor;
        this.petDoor = petDoor;
        this.mallDoor = mallDoor;
        this.pizzaDoor = pizzaDoor;
        this.manhole = manhole;
        this.shopSign = shopSign;
        this.fg = fg;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    bg;
    /** @type {Phaser.GameObjects.Sprite} */
    parkGate;
    /** @type {Phaser.GameObjects.Sprite} */
    shopsBg;
    /** @type {Phaser.GameObjects.Sprite} */
    cannon;
    /** @type {Phaser.GameObjects.Sprite} */
    shopfronts;
    /** @type {Phaser.GameObjects.Sprite} */
    cannonSmoke;
    /** @type {Phaser.GameObjects.Sprite} */
    cannonPuffle;
    /** @type {Phaser.GameObjects.Sprite} */
    flagLeft;
    /** @type {Phaser.GameObjects.Sprite} */
    flagRight;
    /** @type {Phaser.GameObjects.Sprite} */
    hotelDoor;
    /** @type {Phaser.GameObjects.Sprite} */
    petDoor;
    /** @type {Phaser.GameObjects.Sprite} */
    mallDoor;
    /** @type {Phaser.GameObjects.Sprite} */
    pizzaDoor;
    /** @type {Phaser.GameObjects.Sprite} */
    manhole;
    /** @type {Phaser.GameObjects.Sprite} */
    shopSign;
    /** @type {Phaser.GameObjects.Sprite} */
    fg;
    /** @type {Array<any>} */
    sort;

    /* START-USER-CODE */

    create() {
        super.create()
        this.flagLeft.play("flagLeft")
        this.flagRight.play("flagRight")
    }

    onPetOver(){
        this.petDoor.setFrame("petDooe0002.png")
        this.sound.add("plaza-PetDoorOpen").play()
    }

    onPetOut(){
        this.petDoor.setFrame("petDooe0001.png")
        this.sound.add("plaza-PetDoorClose").play()
    }

    onHotelOver(){
        this.hotelDoor.setFrame("hotelDoor0002.png")
        this.sound.add("plaza-HotelDoorOpen").play()
    }

    onHotelOut(){
        this.hotelDoor.setFrame("hotelDoor0001.png")
        this.sound.add("plaza-HotelDoorClose").play()
    }

    onMallOver(){
        this.mallDoor.setFrame("mallDoor0002.png")
        this.sound.add("plaza-StageDoorOpen").play()
    }

    onMallOut(){
        this.mallDoor.setFrame("mallDoor0001.png")
        this.sound.add("plaza-StageDoorClose").play()
    }

    onPizzaOver(){
        this.pizzaDoor.setFrame("pizzaDoor0002.png")
        this.sound.add("plaza-PizzaDoorOpen").play()
    }

    onPizzaOut(){
        this.pizzaDoor.setFrame("pizzaDoor0001.png")
        this.sound.add("plaza-PizzaDoorClose").play()
    }

    onManholeOver(){
        this.manhole.setFrame("manhole0012.png")
        this.sound.add("plaza-ManholeOpen").play()
    }

    onManholeOut(){
        this.manhole.setFrame("manhole0011.png")
        this.sound.add("plaza-ManholeClose").play()
    }

    onCannonOver(){
        this.cannon.play("cannon")
        this.cannonPuffle.visible = true
        this.cannonPuffle.play("cannonPuffle")
        this.cannonSmoke.visible = true
        this.cannonSmoke.play("cannonSmoke")
        this.sound.add("plaza-Cannon").play()
    }

    onCannonOut(){
        this.cannon.setFrame("cannon0001.png")
    }

    onParkOver(){
        this.parkGate.setFrame("parkGate0006.png")
    }

    onParkOut(){
        this.parkGate.setFrame("parkGate0001.png")
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// export default plaza
