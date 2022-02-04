import RoomScene from '../RoomScene'

import { Button, MoveTo, ShowHint, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Lounge extends RoomScene {

    constructor() {
        super("Lounge");

        /** @type {Phaser.GameObjects.Sprite} */
        this.danceFloor;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dancingPenguin1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dancingPenguin2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dancingPenguin3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dancingPenguin4;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dancingPenguin5;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dancingPenguin6;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftSpeaker;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rightSpeaker;
        /** @type {Phaser.GameObjects.Sprite} */
        this.targetBg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.layer1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.layer2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.layer3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.targetFg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.stairsRailing;
        /** @type {Phaser.GameObjects.Sprite} */
        this.vsRailing;
        /** @type {Phaser.GameObjects.Sprite} */
        this.scoreboardBg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.scoreboard;
        /** @type {Phaser.GameObjects.Sprite} */
        this.scoreboardFg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.blankMachine;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bitsAndBoltsAnim;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bitsAndBoltsHover;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bitsAndBoltsMachine;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bitsAndBoltsStool;
        /** @type {Phaser.GameObjects.Sprite} */
        this.thinIceAnim;
        /** @type {Phaser.GameObjects.Sprite} */
        this.thinIceHover;
        /** @type {Phaser.GameObjects.Sprite} */
        this.thinIceMachine;
        /** @type {Phaser.GameObjects.Sprite} */
        this.astroBarrierAnim;
        /** @type {Phaser.GameObjects.Sprite} */
        this.astroBarrierHover;
        /** @type {Phaser.GameObjects.Sprite} */
        this.astroBarrierMachine;
        /** @type {Phaser.GameObjects.Sprite} */
        this.vendingMachine;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bin;
        /** @type {Phaser.GameObjects.Sprite} */
        this.astroBarrierStool;
        /** @type {Phaser.GameObjects.Sprite} */
        this.thinIceStool;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftChair1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftChair2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftChair2Back;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftChair3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftChair3Back;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftChair4;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftTable;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rightChair1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rightChair2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rightChair3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rightChair3Back;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rightChair4;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rightChair4Back;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rightTable;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lights;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'dance': () => this.triggerRoom(120, 1200, 792),
            'ice': () => this.triggerGame("thinIce"),
            'astro': () => this.triggerGame("astroBarrier"),
            'bolts': () => this.unimplementedPrompt(),
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorPreload() {

        this.load.pack("arcade-pack", "assets/media/rooms/arcade/arcade-pack.json");
    }

    /** @returns {void} */
    _create() {

        // rectangle
        const rectangle = this.add.rectangle(769, 773, 350, 250);
        rectangle.isFilled = true;
        rectangle.fillColor = 2032417;

        // danceFloor
        const danceFloor = this.add.sprite(761, 801, "arcade", "danceFloor0001.png");
        danceFloor.scaleX = 0.5;
        danceFloor.scaleY = 0.5;

        // dancingPenguin1
        const dancingPenguin1 = this.add.sprite(822, 778, "arcade", "dancingPenguin0001.png");

        // dancingPenguin2
        const dancingPenguin2 = this.add.sprite(771, 814, "arcade", "dancingPenguin0001.png");

        // dancingPenguin3
        const dancingPenguin3 = this.add.sprite(663, 809, "arcade", "dancingPenguin0001.png");

        // dancingPenguin4
        const dancingPenguin4 = this.add.sprite(707, 846, "arcade", "dancingPenguin0001.png");

        // dancingPenguin5
        const dancingPenguin5 = this.add.sprite(812, 850, "arcade", "dancingPenguin0001.png");

        // dancingPenguin6
        const dancingPenguin6 = this.add.sprite(723, 777, "arcade", "dancingPenguin0001.png");

        // bg
        const bg = this.add.sprite(760, 480, "arcade", "bg.png");

        // leftSpeaker
        const leftSpeaker = this.add.sprite(298, 124, "arcade", "leftSpeaker0001.png");

        // rightSpeaker
        const rightSpeaker = this.add.sprite(1239, 124, "arcade", "rightSpeaker0001.png");

        // targetBg
        const targetBg = this.add.sprite(760, 237, "arcade", "targetBg.png");

        // layer1
        const layer1 = this.add.sprite(760, 242, "arcade", "layer1.png");

        // layer2
        const layer2 = this.add.sprite(760, 279, "arcade", "layer2.png");

        // layer3
        const layer3 = this.add.sprite(760, 304, "arcade", "layer3.png");

        // targetFg
        const targetFg = this.add.sprite(760, 313, "arcade", "targetFg.png");

        // stairsRailing
        const stairsRailing = this.add.sprite(1412, 716, "arcade", "stairsRailing.png");

        // vsRailing
        const vsRailing = this.add.sprite(760, 440, "arcade", "vsRailing.png");

        // scoreboardBg
        const scoreboardBg = this.add.sprite(760, 59, "arcade", "scoreboardBg.png");

        // scoreboard
        const scoreboard = this.add.sprite(760, 88, "arcade", "scoreboardBlueWin0334.png");

        // scoreboardFg
        const scoreboardFg = this.add.sprite(760, 86, "arcade", "scoreboardFg.png");

        // blankMachine
        const blankMachine = this.add.sprite(364, 300, "arcade", "blankMachine.png");

        // bitsAndBoltsAnim
        const bitsAndBoltsAnim = this.add.sprite(235, 391, "arcade", "bitsAndBoltsAnim.png0001.png");

        // bitsAndBoltsHover
        const bitsAndBoltsHover = this.add.sprite(216, 393, "arcade", "bitsAndBoltsHover0001.png");

        // bitsAndBoltsMachine
        const bitsAndBoltsMachine = this.add.sprite(233, 406, "arcade", "bitsAndBoltsMachine.png");

        // bitsAndBoltsStool
        const bitsAndBoltsStool = this.add.sprite(311.5891140376454, 484.5944387857579, "arcade", "bitsAndBoltsStool.png");
        bitsAndBoltsStool.setOrigin(0.49315190062742337, 0.16587295368964744);

        // thinIceAnim
        const thinIceAnim = this.add.sprite(1176, 272, "arcade", "thinIceAnim0001.png");

        // thinIceHover
        const thinIceHover = this.add.sprite(1201, 265, "arcade", "thinIceHover0001.png");

        // thinIceMachine
        const thinIceMachine = this.add.sprite(1178, 297, "arcade", "thinIceMachine0001.png");

        // astroBarrierAnim
        const astroBarrierAnim = this.add.sprite(1253, 373, "arcade", "astroBarrierAnim0001.png");

        // astroBarrierHover
        const astroBarrierHover = this.add.sprite(1273, 377, "arcade", "astroBarrierHover0001.png");

        // astroBarrierMachine
        const astroBarrierMachine = this.add.sprite(1263, 404, "arcade", "astroBarrierMachine.png");

        // vendingMachine
        const vendingMachine = this.add.sprite(94, 538, "arcade", "vendingMachine0001.png");

        // bin
        const bin = this.add.sprite(33, 663, "arcade", "bin.png");

        // astroBarrierStool
        const astroBarrierStool = this.add.sprite(1188.0732063867658, 463.3426043765047, "arcade", "astroBarrierStool.png");
        astroBarrierStool.setOrigin(0.48455343977943055, 0.17409455358796386);

        // thinIceStool
        const thinIceStool = this.add.sprite(1101.0732063867658, 376.9524139566534, "arcade", "thinIceStool.png");
        thinIceStool.setOrigin(0.48455343977943055, 0.15881773578740002);

        // leftChair1
        const leftChair1 = this.add.sprite(317.6951414295994, 701.6806776606555, "arcade", "leftChair1.png");
        leftChair1.setOrigin(0.5632793492177711, 0.4283129050819656);

        // leftChair2
        const leftChair2 = this.add.sprite(390.787118440437, 824.0065527220394, "arcade", "leftChair2.png");
        leftChair2.setOrigin(0.4213559296257846, 0.11850727265841281);

        // leftChair2Back
        const leftChair2Back = this.add.sprite(426, 848, "arcade", "leftChair2Back.png");

        // leftChair3
        const leftChair3 = this.add.sprite(208.87254272923522, 854.2194342816024, "arcade", "leftChair3.png");
        leftChair3.setOrigin(0.6342289225831509, 0.1836032539111443);

        // leftChair3Back
        const leftChair3Back = this.add.sprite(174, 882, "arcade", "leftChair3Back.png");

        // leftChair4
        const leftChair4 = this.add.sprite(181.9224867581063, 761.0919770108376, "arcade", "leftChair4.png");
        leftChair4.setOrigin(0.7719443106879423, 0.40623603945541403);

        // leftTable
        const leftTable = this.add.sprite(267, 783, "arcade", "leftTable.png");

        // rightChair1
        const rightChair1 = this.add.sprite(1200.8305378033951, 729.7438181781602, "arcade", "rightChair1.png");
        rightChair1.setOrigin(0.4758951700825163, 0.4287987842808539);

        // rightChair2
        const rightChair2 = this.add.sprite(1345.0918066277738, 765.9046605109634, "arcade", "rightChair2.png");
        rightChair2.setOrigin(0.369614208361352, 0.4598792166217588);

        // rightChair3
        const rightChair3 = this.add.sprite(1343.1144073868438, 854.069205868704, "arcade", "rightChair3.png");
        rightChair3.setOrigin(0.5754865109486892, 0.05651674817644429);

        // rightChair3Back
        const rightChair3Back = this.add.sprite(1361, 898, "arcade", "rightChair3Back.png");

        // rightChair4
        const rightChair4 = this.add.sprite(1131.793785985382, 833.7104486716275, "arcade", "rightChair4.png");
        rightChair4.setOrigin(0.5859972909542038, 0.06197958778457297);

        // rightChair4Back
        const rightChair4Back = this.add.sprite(1095, 868, "arcade", "rightChair4Back.png");

        // rightTable
        const rightTable = this.add.sprite(1246, 802, "arcade", "rightTable.png");

        // lights
        const lights = this.add.sprite(760, 57, "arcade", "lights.png");

        // lists
        const sort = [leftChair1, rightTable, rightChair4Back, rightChair4, rightChair3Back, rightChair3, rightChair2, rightChair1, leftTable, leftChair4, leftChair3Back, leftChair3, leftChair2Back, leftChair2];

        // bitsAndBoltsHover (components)
        const bitsAndBoltsHoverSimpleButton = new SimpleButton(bitsAndBoltsHover);
        bitsAndBoltsHoverSimpleButton.hoverCallback = () => this.onBoltsOver();
        bitsAndBoltsHoverSimpleButton.hoverOutCallback = () => this.onBoltsOut();
        const bitsAndBoltsHoverMoveTo = new MoveTo(bitsAndBoltsHover);
        bitsAndBoltsHoverMoveTo.x = 310;
        bitsAndBoltsHoverMoveTo.y = 485;
        const bitsAndBoltsHoverShowHint = new ShowHint(bitsAndBoltsHover);
        bitsAndBoltsHoverShowHint.text = "Bits And Bolts";

        // thinIceHover (components)
        const thinIceHoverSimpleButton = new SimpleButton(thinIceHover);
        thinIceHoverSimpleButton.hoverCallback = () => this.onIceOver();
        thinIceHoverSimpleButton.hoverOutCallback = () => this.onIceOut();
        const thinIceHoverMoveTo = new MoveTo(thinIceHover);
        thinIceHoverMoveTo.x = 1100;
        thinIceHoverMoveTo.y = 375;
        const thinIceHoverShowHint = new ShowHint(thinIceHover);
        thinIceHoverShowHint.text = "Thin Ice";

        // astroBarrierHover (components)
        const astroBarrierHoverSimpleButton = new SimpleButton(astroBarrierHover);
        astroBarrierHoverSimpleButton.hoverCallback = () => this.onAstroOver();
        astroBarrierHoverSimpleButton.hoverOutCallback = () => this.onAstroOut();
        const astroBarrierHoverMoveTo = new MoveTo(astroBarrierHover);
        astroBarrierHoverMoveTo.x = 1190;
        astroBarrierHoverMoveTo.y = 460;
        const astroBarrierHoverShowHint = new ShowHint(astroBarrierHover);
        astroBarrierHoverShowHint.text = "Astro Barrier";

        this.danceFloor = danceFloor;
        this.dancingPenguin1 = dancingPenguin1;
        this.dancingPenguin2 = dancingPenguin2;
        this.dancingPenguin3 = dancingPenguin3;
        this.dancingPenguin4 = dancingPenguin4;
        this.dancingPenguin5 = dancingPenguin5;
        this.dancingPenguin6 = dancingPenguin6;
        this.bg = bg;
        this.leftSpeaker = leftSpeaker;
        this.rightSpeaker = rightSpeaker;
        this.targetBg = targetBg;
        this.layer1 = layer1;
        this.layer2 = layer2;
        this.layer3 = layer3;
        this.targetFg = targetFg;
        this.stairsRailing = stairsRailing;
        this.vsRailing = vsRailing;
        this.scoreboardBg = scoreboardBg;
        this.scoreboard = scoreboard;
        this.scoreboardFg = scoreboardFg;
        this.blankMachine = blankMachine;
        this.bitsAndBoltsAnim = bitsAndBoltsAnim;
        this.bitsAndBoltsHover = bitsAndBoltsHover;
        this.bitsAndBoltsMachine = bitsAndBoltsMachine;
        this.bitsAndBoltsStool = bitsAndBoltsStool;
        this.thinIceAnim = thinIceAnim;
        this.thinIceHover = thinIceHover;
        this.thinIceMachine = thinIceMachine;
        this.astroBarrierAnim = astroBarrierAnim;
        this.astroBarrierHover = astroBarrierHover;
        this.astroBarrierMachine = astroBarrierMachine;
        this.vendingMachine = vendingMachine;
        this.bin = bin;
        this.astroBarrierStool = astroBarrierStool;
        this.thinIceStool = thinIceStool;
        this.leftChair1 = leftChair1;
        this.leftChair2 = leftChair2;
        this.leftChair2Back = leftChair2Back;
        this.leftChair3 = leftChair3;
        this.leftChair3Back = leftChair3Back;
        this.leftChair4 = leftChair4;
        this.leftTable = leftTable;
        this.rightChair1 = rightChair1;
        this.rightChair2 = rightChair2;
        this.rightChair3 = rightChair3;
        this.rightChair3Back = rightChair3Back;
        this.rightChair4 = rightChair4;
        this.rightChair4Back = rightChair4Back;
        this.rightTable = rightTable;
        this.lights = lights;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create(){
        super.create()

        this.astroBarrierAnim.play("astroBarrierAnim")
        this.thinIceAnim.play("thinIceAnim")
        this.bitsAndBoltsAnim.play("bitsAndBoltsAnim")

        this.dancingPenguin(this.dancingPenguin6)
        this.dancingPenguin(this.dancingPenguin5)
        this.dancingPenguin(this.dancingPenguin4)
        this.dancingPenguin(this.dancingPenguin3)
        this.dancingPenguin(this.dancingPenguin2)
        this.dancingPenguin(this.dancingPenguin1)

        this.danceFloor.play("danceFloor")
    }

    dancingPenguin(penguin){
        var frame = Phaser.Math.RND.between(1, 194)

        penguin.play({ key: 'dancingPenguin', startFrame: frame }, true)        
    }

    onBoltsOver(){
        this.bitsAndBoltsHover.setFrame("bitsAndBoltsHover0002.png")
    }

    onIceOver(){
        this.thinIceHover.setFrame("thinIceHover0002.png")
    }

    onAstroOver(){
        this.astroBarrierHover.setFrame("astroBarrierHover0002.png")
    }

    onBoltsOut(){
        this.bitsAndBoltsHover.setFrame("bitsAndBoltsHover0001.png")
    }

    onIceOut(){
        this.thinIceHover.setFrame("thinIceHover0001.png")
    }

    onAstroOut(){
        this.astroBarrierHover.setFrame("astroBarrierHover0001.png")
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
