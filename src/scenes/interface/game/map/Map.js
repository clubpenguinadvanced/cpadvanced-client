import BaseContainer from '@scenes/base/BaseContainer'

import { SimpleButton, Interactive, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Map extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 460);

        /** @type {Phaser.GameObjects.Sprite} */
        this.unselected;
        /** @type {Phaser.GameObjects.Sprite} */
        this.places;
        /** @type {Phaser.GameObjects.Sprite} */
        this.other;
        /** @type {Phaser.GameObjects.Sprite} */
        this.overlay;
        /** @type {Phaser.GameObjects.Container} */
        this.places_container;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cove;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dock;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dojo;
        /** @type {Phaser.GameObjects.Sprite} */
        this.forest;
        /** @type {Phaser.GameObjects.Sprite} */
        this.berg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.igloos;
        /** @type {Phaser.GameObjects.Sprite} */
        this.beach;
        /** @type {Phaser.GameObjects.Sprite} */
        this.shack;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plaza;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rink;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mtn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.village;
        /** @type {Phaser.GameObjects.Sprite} */
        this.forts;
        /** @type {Phaser.GameObjects.Sprite} */
        this.town;
        /** @type {Phaser.GameObjects.Container} */
        this.games_container;
        /** @type {Phaser.GameObjects.Sprite} */
        this.aqua;
        /** @type {Phaser.GameObjects.Sprite} */
        this.arcade;
        /** @type {Phaser.GameObjects.Sprite} */
        this.counters;
        /** @type {Phaser.GameObjects.Sprite} */
        this.jitsu;
        /** @type {Phaser.GameObjects.Sprite} */
        this.surfer;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dancecontest;
        /** @type {Phaser.GameObjects.Sprite} */
        this.soundstudio;
        /** @type {Phaser.GameObjects.Sprite} */
        this.hydro;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fishing;
        /** @type {Phaser.GameObjects.Sprite} */
        this.jetpack;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pizzatron;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cannon;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rescue;
        /** @type {Phaser.GameObjects.Sprite} */
        this.roundup;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pufflescape;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sled;
        /** @type {Phaser.GameObjects.Sprite} */
        this.smoothie;
        /** @type {Phaser.GameObjects.Container} */
        this.shops_container;
        /** @type {Phaser.GameObjects.Sprite} */
        this.catchinwavesupgrades;
        /** @type {Phaser.GameObjects.Sprite} */
        this.costumetrunk;
        /** @type {Phaser.GameObjects.Sprite} */
        this.hydrohopperupgrades;
        /** @type {Phaser.GameObjects.Sprite} */
        this.icefishingupgrades;
        /** @type {Phaser.GameObjects.Sprite} */
        this.martialartworks;
        /** @type {Phaser.GameObjects.Sprite} */
        this.musiccatalog;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguinstyle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.petfurniture;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sledraceupgrades;
        /** @type {Phaser.GameObjects.Sprite} */
        this.snowandsports;
        /** @type {Phaser.GameObjects.Sprite} */
        this.places_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.games_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.shops_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.close_btn;


        // unselected
        const unselected = scene.add.sprite(0, 24, "map", "background/unselected");
        unselected.visible = false;
        this.add(unselected);

        // places
        const places = scene.add.sprite(0, 24, "map", "background/placesselected");
        this.add(places);

        // other
        const other = scene.add.sprite(-62, -4, "map", "background/otherselected");
        other.visible = false;
        this.add(other);

        // overlay
        const overlay = scene.add.sprite(0, 23, "map", "overlay/main");
        this.add(overlay);

        // places_container
        const places_container = scene.add.container(-693, -210);
        this.add(places_container);

        // cove
        const cove = scene.add.sprite(1361, 401, "map", "places/cove0001");
        places_container.add(cove);

        // dock
        const dock = scene.add.sprite(221, 541, "map", "places/dock0001");
        places_container.add(dock);

        // dojo
        const dojo = scene.add.sprite(865, 23, "map", "places/dojoexterior0001");
        places_container.add(dojo);

        // forest
        const forest = scene.add.sprite(1121, 384, "map", "places/forest0001");
        places_container.add(forest);

        // berg
        const berg = scene.add.sprite(1375, 167, "map", "places/iceberg");
        places_container.add(berg);

        // igloos
        const igloos = scene.add.sprite(523, 469, "map", "places/igloomap0001");
        places_container.add(igloos);

        // beach
        const beach = scene.add.sprite(0, 350, "map", "places/lighthouse0001");
        places_container.add(beach);

        // shack
        const shack = scene.add.sprite(1108, 213, "map", "places/mineshack0001");
        places_container.add(shack);

        // plaza
        const plaza = scene.add.sprite(930, 288, "map", "places/plaza0001");
        places_container.add(plaza);

        // rink
        const rink = scene.add.sprite(616, 187, "map", "places/pool0001");
        places_container.add(rink);

        // mtn
        const mtn = scene.add.sprite(261, 116, "map", "places/skihill0001");
        places_container.add(mtn);

        // village
        const village = scene.add.sprite(312, 211, "map", "places/skivillage0001");
        places_container.add(village);

        // forts
        const forts = scene.add.sprite(705, 262, "map", "places/snowforts0001");
        places_container.add(forts);

        // town
        const town = scene.add.sprite(502, 322, "map", "places/town0001");
        places_container.add(town);

        // games_container
        const games_container = scene.add.container(-623, -272);
        games_container.visible = false;
        this.add(games_container);

        // aqua
        const aqua = scene.add.sprite(1230, 202, "map", "games/aquagrabber0001");
        games_container.add(aqua);

        // arcade
        const arcade = scene.add.sprite(450, 309, "map", "games/arcadegames0001");
        games_container.add(arcade);

        // counters
        const counters = scene.add.sprite(302, 379, "map", "games/beancounters0001");
        counters.visible = false;
        games_container.add(counters);

        // jitsu
        const jitsu = scene.add.sprite(789, 49, "map", "games/cardjitsu0001");
        jitsu.visible = false;
        games_container.add(jitsu);

        // surfer
        const surfer = scene.add.sprite(1071, 227, "map", "games/cartsurfer0001");
        games_container.add(surfer);

        // waves
        const waves = scene.add.sprite(1219, 458, "map", "games/catchinwaves0001");
        waves.visible = false;
        games_container.add(waves);

        // dancecontest
        const dancecontest = scene.add.sprite(558, 373, "map", "games/dancecontest0001");
        games_container.add(dancecontest);

        // soundstudio
        const soundstudio = scene.add.sprite(448, 444, "map", "games/dj3ksoundstudio0001");
        soundstudio.visible = false;
        games_container.add(soundstudio);

        // hydro
        const hydro = scene.add.sprite(124, 577, "map", "games/hydrohopper0001");
        games_container.add(hydro);

        // fishing
        const fishing = scene.add.sprite(182, 225, "map", "games/icefishing0001");
        games_container.add(fishing);

        // jetpack
        const jetpack = scene.add.sprite(6, 341, "map", "games/jetpackadventure0001");
        jetpack.visible = false;
        games_container.add(jetpack);

        // pizzatron
        const pizzatron = scene.add.sprite(954, 393, "map", "games/pizzatron0001");
        games_container.add(pizzatron);

        // cannon
        const cannon = scene.add.sprite(749, 422, "map", "games/pufflelaunch0001");
        cannon.visible = false;
        games_container.add(cannon);

        // rescue
        const rescue = scene.add.sprite(916, 239, "map", "games/pufflerescue0001");
        games_container.add(rescue);

        // roundup
        const roundup = scene.add.sprite(740, 284, "map", "games/puffleroundup0001");
        games_container.add(roundup);

        // pufflescape
        const pufflescape = scene.add.sprite(855, 490, "map", "games/pufflescape0001");
        pufflescape.visible = false;
        games_container.add(pufflescape);

        // sled
        const sled = scene.add.sprite(153, 88, "map", "games/sledracing0001");
        sled.visible = false;
        games_container.add(sled);

        // smoothie
        const smoothie = scene.add.sprite(322, 530, "map", "games/smoothiesmash0001");
        smoothie.visible = false;
        games_container.add(smoothie);

        // shops_container
        const shops_container = scene.add.container(-590, -202);
        shops_container.visible = false;
        this.add(shops_container);

        // catchinwavesupgrades
        const catchinwavesupgrades = scene.add.sprite(1192, 415, "map", "shops/catchinwavesupgrades0001");
        catchinwavesupgrades.visible = false;
        shops_container.add(catchinwavesupgrades);

        // costumetrunk
        const costumetrunk = scene.add.sprite(916, 320, "map", "shops/costumetrunk0001");
        costumetrunk.visible = false;
        shops_container.add(costumetrunk);

        // hydrohopperupgrades
        const hydrohopperupgrades = scene.add.sprite(172, 514, "map", "shops/hydrohopperupgrades0001");
        hydrohopperupgrades.visible = false;
        shops_container.add(hydrohopperupgrades);

        // icefishingupgrades
        const icefishingupgrades = scene.add.sprite(170, 241, "map", "shops/icefishingupgrades0001");
        icefishingupgrades.visible = false;
        shops_container.add(icefishingupgrades);

        // martialartworks
        const martialartworks = scene.add.sprite(746, 33, "map", "shops/martialartworks0001");
        martialartworks.visible = false;
        shops_container.add(martialartworks);

        // musiccatalog
        const musiccatalog = scene.add.sprite(0, 386, "map", "shops/musiccatalog0001");
        musiccatalog.visible = false;
        shops_container.add(musiccatalog);

        // penguinstyle
        const penguinstyle = scene.add.sprite(505, 349, "map", "shops/penguinstyle0001");
        shops_container.add(penguinstyle);

        // petfurniture
        const petfurniture = scene.add.sprite(747, 311, "map", "shops/petfurniture0001");
        petfurniture.visible = false;
        shops_container.add(petfurniture);

        // sledraceupgrades
        const sledraceupgrades = scene.add.sprite(123, 71, "map", "shops/sledracerupgrades0001");
        sledraceupgrades.visible = false;
        shops_container.add(sledraceupgrades);

        // snowandsports
        const snowandsports = scene.add.sprite(544, 172, "map", "shops/snowandsports0001");
        snowandsports.visible = false;
        shops_container.add(snowandsports);

        // places_btn
        const places_btn = scene.add.sprite(-649, -378, "map", "overlay/placesbutton0001");
        this.add(places_btn);

        // places_txt
        const places_txt = scene.add.text(-690, -326, "", {});
        places_txt.text = "Places";
        places_txt.setStyle({ "color": "#7f7f7fff", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        this.add(places_txt);

        // games_btn
        const games_btn = scene.add.sprite(-520, -378, "map", "overlay/gamesbutton0001");
        this.add(games_btn);

        // games_txt
        const games_txt = scene.add.text(-557, -326, "", {});
        games_txt.text = "Games";
        games_txt.setStyle({ "color": "#7f7f7fff", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        this.add(games_txt);

        // shops_btn
        const shops_btn = scene.add.sprite(-393, -378, "map", "overlay/shopsbutton0001");
        this.add(shops_btn);

        // shops_txt
        const shops_txt = scene.add.text(-429, -326, "", {});
        shops_txt.text = "Shops";
        shops_txt.setStyle({ "color": "#7f7f7fff", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        this.add(shops_txt);

        // close_btn
        const close_btn = scene.add.sprite(717, -414, "map", "overlay/closebutton0001");
        this.add(close_btn);

        // unselected (components)
        new Interactive(unselected);

        // overlay (components)
        new Interactive(overlay);

        // cove (components)
        const coveShowHint = new ShowHint(cove);
        coveShowHint.text = "Cove";
        const coveSimpleButton = new SimpleButton(cove);
        coveSimpleButton.hoverCallback = () => this.select(this.cove);
        coveSimpleButton.hoverOutCallback = () => this.unselect(this.cove);
        coveSimpleButton.callback = () => this.onRoomClick(810);

        // dock (components)
        const dockShowHint = new ShowHint(dock);
        dockShowHint.text = "Dock";
        const dockSimpleButton = new SimpleButton(dock);
        dockSimpleButton.hoverCallback = () => this.select(this.dock);
        dockSimpleButton.hoverOutCallback = () => this.unselect(this.dock);
        dockSimpleButton.callback = () => this.onRoomClick(800);

        // dojo (components)
        const dojoShowHint = new ShowHint(dojo);
        dojoShowHint.text = "Dojo Courtyard";
        const dojoSimpleButton = new SimpleButton(dojo);
        dojoSimpleButton.hoverCallback = () => this.select(this.dojo);
        dojoSimpleButton.hoverOutCallback = () => this.unselect(this.dojo);
        dojoSimpleButton.callback = () => this.onRoomClick(321);

        // forest (components)
        const forestShowHint = new ShowHint(forest);
        forestShowHint.text = "Forest";
        const forestSimpleButton = new SimpleButton(forest);
        forestSimpleButton.hoverCallback = () => this.select(this.forest);
        forestSimpleButton.hoverOutCallback = () => this.unselect(this.forest);
        forestSimpleButton.callback = () => this.onRoomClick(809);

        // berg (components)
        const bergSimpleButton = new SimpleButton(berg);
        bergSimpleButton.callback = () => this.onRoomClick(805);

        // igloos (components)
        const igloosShowHint = new ShowHint(igloos);
        igloosShowHint.text = "Player Igloos";
        const igloosSimpleButton = new SimpleButton(igloos);
        igloosSimpleButton.hoverCallback = () => this.select(this.igloos);
        igloosSimpleButton.hoverOutCallback = () => this.unselect(this.igloos);

        // beach (components)
        const beachShowHint = new ShowHint(beach);
        beachShowHint.text = "Beach";
        const beachSimpleButton = new SimpleButton(beach);
        beachSimpleButton.hoverCallback = () => this.select(this.beach);
        beachSimpleButton.hoverOutCallback = () => this.unselect(this.beach);
        beachSimpleButton.callback = () => this.onRoomClick(400);

        // shack (components)
        const shackShowHint = new ShowHint(shack);
        shackShowHint.text = "Mine Shack";
        const shackSimpleButton = new SimpleButton(shack);
        shackSimpleButton.hoverCallback = () => this.select(this.shack);
        shackSimpleButton.hoverOutCallback = () => this.unselect(this.shack);
        shackSimpleButton.callback = () => this.onRoomClick(807);

        // plaza (components)
        const plazaShowHint = new ShowHint(plaza);
        plazaShowHint.text = "Plaza";
        const plazaSimpleButton = new SimpleButton(plaza);
        plazaSimpleButton.hoverCallback = () => this.select(this.plaza);
        plazaSimpleButton.hoverOutCallback = () => this.unselect(this.plaza);
        plazaSimpleButton.callback = () => this.onRoomClick(300);

        // rink (components)
        const rinkShowHint = new ShowHint(rink);
        rinkShowHint.text = "Pool";
        const rinkSimpleButton = new SimpleButton(rink);
        rinkSimpleButton.hoverCallback = () => this.select(this.rink);
        rinkSimpleButton.hoverOutCallback = () => this.unselect(this.rink);
        rinkSimpleButton.callback = () => this.onRoomClick(802);

        // mtn (components)
        const mtnShowHint = new ShowHint(mtn);
        mtnShowHint.text = "Ski Hill";
        const mtnSimpleButton = new SimpleButton(mtn);
        mtnSimpleButton.hoverCallback = () => this.select(this.mtn);
        mtnSimpleButton.hoverOutCallback = () => this.unselect(this.mtn);
        mtnSimpleButton.callback = () => this.onRoomClick(230);

        // village (components)
        const villageShowHint = new ShowHint(village);
        villageShowHint.text = "Ski Village";
        const villageSimpleButton = new SimpleButton(village);
        villageSimpleButton.hoverCallback = () => this.select(this.village);
        villageSimpleButton.hoverOutCallback = () => this.unselect(this.village);
        villageSimpleButton.callback = () => this.onRoomClick(200);

        // forts (components)
        const fortsShowHint = new ShowHint(forts);
        fortsShowHint.text = "Snow Forts";
        const fortsSimpleButton = new SimpleButton(forts);
        fortsSimpleButton.hoverCallback = () => this.select(this.forts);
        fortsSimpleButton.hoverOutCallback = () => this.unselect(this.forts);
        fortsSimpleButton.callback = () => this.onRoomClick(801);

        // town (components)
        const townShowHint = new ShowHint(town);
        townShowHint.text = "Town";
        const townSimpleButton = new SimpleButton(town);
        townSimpleButton.hoverCallback = () => this.select(this.town);
        townSimpleButton.hoverOutCallback = () => this.unselect(this.town);
        townSimpleButton.callback = () => this.onRoomClick(100);

        // aqua (components)
        const aquaSimpleButton = new SimpleButton(aqua);
        aquaSimpleButton.callback = () => this.onRoomClick(805);
        const aquaShowHint = new ShowHint(aqua);
        aquaShowHint.text = "Aqua Grabber";

        // arcade (components)
        const arcadeSimpleButton = new SimpleButton(arcade);
        arcadeSimpleButton.callback = () => this.onRoomClick(121);
        const arcadeShowHint = new ShowHint(arcade);
        arcadeShowHint.text = "Arcade";

        // surfer (components)
        const surferSimpleButton = new SimpleButton(surfer);
        surferSimpleButton.callback = () => this.onRoomClick(808);
        const surferShowHint = new ShowHint(surfer);
        surferShowHint.text = "Cart Surfer";

        // dancecontest (components)
        const dancecontestSimpleButton = new SimpleButton(dancecontest);
        dancecontestSimpleButton.callback = () => this.onRoomClick(120);
        const dancecontestShowHint = new ShowHint(dancecontest);
        dancecontestShowHint.text = "Dance Contest";

        // hydro (components)
        const hydroSimpleButton = new SimpleButton(hydro);
        hydroSimpleButton.callback = () => this.onRoomClick(800);
        const hydroShowHint = new ShowHint(hydro);
        hydroShowHint.text = "Hydro Hopper";

        // fishing (components)
        const fishingSimpleButton = new SimpleButton(fishing);
        fishingSimpleButton.callback = () => this.onRoomClick(220);
        const fishingShowHint = new ShowHint(fishing);
        fishingShowHint.text = "Ice Fishing";

        // jetpack (components)
        new SimpleButton(jetpack);
        const jetpackShowHint = new ShowHint(jetpack);
        jetpackShowHint.text = "Jetpack Adventure";

        // pizzatron (components)
        const pizzatronSimpleButton = new SimpleButton(pizzatron);
        pizzatronSimpleButton.callback = () => this.onRoomClick(330);
        const pizzatronShowHint = new ShowHint(pizzatron);
        pizzatronShowHint.text = "Pizzatron 3000";

        // cannon (components)
        const cannonSimpleButton = new SimpleButton(cannon);
        cannonSimpleButton.callback = () => this.onRoomClick(310);
        const cannonShowHint = new ShowHint(cannon);
        cannonShowHint.text = "Puffle Launch";

        // rescue (components)
        const rescueSimpleButton = new SimpleButton(rescue);
        rescueSimpleButton.callback = () => this.onRoomClick(808);
        const rescueShowHint = new ShowHint(rescue);
        rescueShowHint.text = "Puffle Rescue";

        // roundup (components)
        const roundupSimpleButton = new SimpleButton(roundup);
        roundupSimpleButton.callback = () => this.onRoomClick(310);
        const roundupShowHint = new ShowHint(roundup);
        roundupShowHint.text = "Puffle Roundup\n";

        // penguinstyle (components)
        const penguinstyleSimpleButton = new SimpleButton(penguinstyle);
        penguinstyleSimpleButton.callback = () => this.onRoomClick(130);
        const penguinstyleShowHint = new ShowHint(penguinstyle);
        penguinstyleShowHint.text = "Penguin Style";

        // places_btn (components)
        const places_btnSimpleButton = new SimpleButton(places_btn);
        places_btnSimpleButton.callback = () => this.changeMode("places");

        // games_btn (components)
        const games_btnSimpleButton = new SimpleButton(games_btn);
        games_btnSimpleButton.callback = () => this.changeMode("games");

        // shops_btn (components)
        const shops_btnSimpleButton = new SimpleButton(shops_btn);
        shops_btnSimpleButton.callback = () => this.changeMode("shops");

        // close_btn (components)
        const close_btnSimpleButton = new SimpleButton(close_btn);
        close_btnSimpleButton.callback = () => { this.visible = false };

        this.unselected = unselected;
        this.places = places;
        this.other = other;
        this.overlay = overlay;
        this.places_container = places_container;
        this.cove = cove;
        this.dock = dock;
        this.dojo = dojo;
        this.forest = forest;
        this.berg = berg;
        this.igloos = igloos;
        this.beach = beach;
        this.shack = shack;
        this.plaza = plaza;
        this.rink = rink;
        this.mtn = mtn;
        this.village = village;
        this.forts = forts;
        this.town = town;
        this.games_container = games_container;
        this.aqua = aqua;
        this.arcade = arcade;
        this.counters = counters;
        this.jitsu = jitsu;
        this.surfer = surfer;
        this.waves = waves;
        this.dancecontest = dancecontest;
        this.soundstudio = soundstudio;
        this.hydro = hydro;
        this.fishing = fishing;
        this.jetpack = jetpack;
        this.pizzatron = pizzatron;
        this.cannon = cannon;
        this.rescue = rescue;
        this.roundup = roundup;
        this.pufflescape = pufflescape;
        this.sled = sled;
        this.smoothie = smoothie;
        this.shops_container = shops_container;
        this.catchinwavesupgrades = catchinwavesupgrades;
        this.costumetrunk = costumetrunk;
        this.hydrohopperupgrades = hydrohopperupgrades;
        this.icefishingupgrades = icefishingupgrades;
        this.martialartworks = martialartworks;
        this.musiccatalog = musiccatalog;
        this.penguinstyle = penguinstyle;
        this.petfurniture = petfurniture;
        this.sledraceupgrades = sledraceupgrades;
        this.snowandsports = snowandsports;
        this.places_btn = places_btn;
        this.games_btn = games_btn;
        this.shops_btn = shops_btn;
        this.close_btn = close_btn;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    mode = "places"

    changeMode(newMode){

        if (newMode == "places"){
            if (this.mode == "places"){
                this.places.visible = false
                this.unselected.visible = true
                this.mode = "none"
            }
            else{
                this.places_container.visible = true
                this.games_container.visible = false
                this.shops_container.visible = false
                this.places.visible = true
                this.other.visible = false
                this.unselected.visible = false
                this.mode = "places"
            }
        }
        else if (newMode == "games"){
            if (this.mode == "games"){
                this.other.visible = false
                this.unselected.visible = true
                this.games_container.visible = false
                this.places_container.visible = true
                this.mode = "none"
            }
            else{
                this.shops_container.visible = false
                this.places_container.visible = false
                this.games_container.visible = true
                this.places.visible = false
                this.other.visible = true
                this.unselected.visible = false
                this.mode = "games"
            }
        }
        else if (newMode == "shops"){
            if (this.mode == "shops"){
                this.other.visible = false
                this.unselected.visible = true
                this.shops_container.visible = false
                this.places_container.visible = true
                this.mode = "none"
            }
            else{
                this.games_container.visible = false
                this.places_container.visible = false
                this.shops_container.visible = true
                this.places.visible = false
                this.other.visible = true
                this.unselected.visible = false
                this.mode = "shops"
            }
        }
    }

    onRoomClick(id) {
        let room = this.crumbs.rooms[id]
        if (this.world.room.key == room.key) return

        this.visible = false

        this.world.client.sendJoinRoom(id, room.key, room.x, room.y, 80)
    }

    select(gameObject){
        gameObject.scaleX = 1.1
        gameObject.scaleY = 1.1
    }

    unselect(gameObject){
        gameObject.scaleX = 1
        gameObject.scaleY = 1
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
