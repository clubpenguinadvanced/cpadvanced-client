import RoomScene from '../RoomScene'

/* START OF COMPILED CODE */

export default class Forts extends RoomScene {

    constructor() {
        super("Forts");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 1200, 400),
            'town': () => this.triggerRoom(100, 360, 520),
            'rink': () => this.triggerRoom(802, 700, 450)
        }

        this.music = 1169
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorPreload() {

        this.load.pack("snowForts-pack", "assets/media/rooms/snowForts/snowForts-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(803, 497, "snowForts", "bg.png");

        // clockTower
        const clockTower = this.add.sprite(1203, 220, "snowForts", "clockTower.png");

        // leftFortMain
        const leftFortMain = this.add.sprite(497.38907969285145, 676.8232144028275, "snowForts", "leftFortMain.png");
        leftFortMain.setOrigin(0.5117042125142706, 0.5499413881899945);

        // leftFortTower
        const leftFortTower = this.add.sprite(875, 685.9549449828754, "snowForts", "leftFortTower.png");
        leftFortTower.setOrigin(0.5, 0.27346685456250674);

        // leftFortOut
        const leftFortOut = this.add.sprite(777.7556318771406, 738.7010303413978, "snowForts", "leftFortOut.png");
        leftFortOut.setOrigin(0.505775104859015, 0.5991674909681916);

        // leftFortStick
        const leftFortStick = this.add.sprite(567.3241398001211, 744.903467901271, "snowForts", "leftFortStick.png");
        leftFortStick.setOrigin(0.46121941739305927, 0.2011007223539471);

        // leftFlag
        const leftFlag = this.add.sprite(449, 482, "snowForts", "flagLeft0001.png");

        // rightFortTower
        const rightFortTower = this.add.sprite(764.9559415571031, 454.44058442896954, "snowForts", "rightFortTower.png");
        rightFortTower.setOrigin(0.5115173681578684, 0.35732215565626185);

        // rightFortMain
        const rightFortMain = this.add.sprite(847, 507.83084099435837, "snowForts", "rightFortMain.png");
        rightFortMain.setOrigin(0.5, 0.710682450282821);

        // rightFortOut2
        const rightFortOut2 = this.add.sprite(1206, 589.1897665871167, "snowForts", "rightFortOut2.png");
        rightFortOut2.setOrigin(0.5, 0.6565098185047802);

        // rightFortStick
        const rightFortStick = this.add.sprite(1070, 472.55631877140576, "snowForts", "rightFortStick.png");
        rightFortStick.setOrigin(0.5, 0.7017967674874225);

        // rightFortOut
        const rightFortOut = this.add.sprite(1072.2443681228594, 587.0355084985065, "snowForts", "rightFortOut.png");
        rightFortOut.setOrigin(0.4914775151595118, 0.7464803374310665);

        // rightFlag
        const rightFlag = this.add.sprite(791, 354, "snowForts", "flagRight0001.png");

        // target
        const target = this.add.sprite(1310, 213, "snowForts", "target0001.png");

        // snowman
        const snowman = this.add.sprite(1398, 721, "snowForts", "snowman.png");

        // clockTime
        const clockTime = this.add.text(1111, 191, "", {});
        clockTime.scaleY = 1.5;
        clockTime.angle = 1;
        clockTime.setOrigin(0.5, 0.5);
        clockTime.text = "12:58";
        clockTime.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "45px" });

        // am_pm
        const am_pm = this.add.text(1188, 176, "", {});
        am_pm.angle = 1;
        am_pm.setOrigin(0.5, 0.5);
        am_pm.text = "AM";
        am_pm.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });

        // day
        const day = this.add.text(1122, 254, "", {});
        day.angle = 5;
        day.setOrigin(0.5, 0.5);
        day.text = "WEDNESDAY";
        day.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });

        // lists
        const sort = [leftFortMain, rightFlag, rightFortOut, rightFortStick, rightFortOut2, rightFortMain, rightFortTower, leftFlag, leftFortStick, leftFortOut, leftFortTower];

        this.bg = bg;
        this.clockTower = clockTower;
        this.leftFortMain = leftFortMain;
        this.leftFortTower = leftFortTower;
        this.leftFortOut = leftFortOut;
        this.leftFortStick = leftFortStick;
        this.leftFlag = leftFlag;
        this.rightFortTower = rightFortTower;
        this.rightFortMain = rightFortMain;
        this.rightFortOut2 = rightFortOut2;
        this.rightFortStick = rightFortStick;
        this.rightFortOut = rightFortOut;
        this.rightFlag = rightFlag;
        this.target = target;
        this.snowman = snowman;
        this.clockTime = clockTime;
        this.am_pm = am_pm;
        this.day = day;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    bg;
    /** @type {Phaser.GameObjects.Sprite} */
    clockTower;
    /** @type {Phaser.GameObjects.Sprite} */
    leftFortMain;
    /** @type {Phaser.GameObjects.Sprite} */
    leftFortTower;
    /** @type {Phaser.GameObjects.Sprite} */
    leftFortOut;
    /** @type {Phaser.GameObjects.Sprite} */
    leftFortStick;
    /** @type {Phaser.GameObjects.Sprite} */
    leftFlag;
    /** @type {Phaser.GameObjects.Sprite} */
    rightFortTower;
    /** @type {Phaser.GameObjects.Sprite} */
    rightFortMain;
    /** @type {Phaser.GameObjects.Sprite} */
    rightFortOut2;
    /** @type {Phaser.GameObjects.Sprite} */
    rightFortStick;
    /** @type {Phaser.GameObjects.Sprite} */
    rightFortOut;
    /** @type {Phaser.GameObjects.Sprite} */
    rightFlag;
    /** @type {Phaser.GameObjects.Sprite} */
    target;
    /** @type {Phaser.GameObjects.Sprite} */
    snowman;
    /** @type {Phaser.GameObjects.Text} */
    clockTime;
    /** @type {Phaser.GameObjects.Text} */
    am_pm;
    /** @type {Phaser.GameObjects.Text} */
    day;
    /** @type {Phaser.GameObjects.Sprite[]} */
    sort;

    /* START-USER-CODE */

    // Write your code here

    create() {

        super.create();
        this.leftFlag.play("fortsFlagLeft");
        this.rightFlag.play("fortsFlagRight");

        var now = new Date();
        var timeInHours = now.getHours();
        if (timeInHours > 12) {
            timeInHours = timeInHours - 12
            this.am_pm.text = "PM"
        }
        var timeInMinutes = now.getMinutes();
        if (timeInMinutes < 10) {
            this.clockTime.text = timeInHours + ":0" + timeInMinutes;
        } else {
            this.clockTime.text = timeInHours + ":" + timeInMinutes;
        }
        var day = now.getDay()

        if (day == 1) {
            this.day.text = "MONDAY"
        } else if (day == 2) {
            this.day.text = "TUESDAY"
        } else if (day == 3) {
            this.day.text = "WEDNESDAY"
        } else if (day == 4) {
            this.day.text = "THURSDAY"
        } else if (day == 5) {
            this.day.text = "FRIDAY"
        } else if (day = 6) {
            this.day.text = "SATURDAY"
        } else {
            this.day.text = "SUNDAY"
        }

        this.bounds = this.target.getBounds()
        this.target.on('animationcomplete', () => this.onTargetAnimComplete())

    }

    onSnowballComplete(x, y) {
        if (this.bounds.contains(x, y)) {
            this.target.play("target")
        }
    }

    onTargetAnimComplete() {
        this.target.setFrame("target0001.png")
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here