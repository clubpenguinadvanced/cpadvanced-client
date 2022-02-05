import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, NineSlice, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Settings extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Container} */
        this.settings_container;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox;
        /** @type {Phaser.GameObjects.Container} */
        this.credits;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // rectangle
        const rectangle = scene.add.rectangle(0, -22, 708, 600);
        rectangle.isFilled = true;
        rectangle.fillColor = 164045;
        this.add(rectangle);

        // settings_container
        const settings_container = scene.add.container(-132, -238);
        this.add(settings_container);

        // buddies
        const buddies = scene.add.text(201, 411, "", {});
        buddies.setOrigin(0.5, 0.5);
        buddies.text = "88/100 Buddies";
        buddies.setStyle({ "color": "#000000ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "32px" });
        settings_container.add(buddies);

        // icon
        const icon = scene.add.image(0, 409, "main", "buddy/icon-online");
        settings_container.add(icon);

        // button
        const button = scene.add.image(132, 305, "main", "help-button");
        settings_container.add(button);

        // account
        const account = scene.add.text(153, 304, "", {});
        account.setOrigin(0.5, 0.5);
        account.text = "Manage Account";
        account.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":562,"fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        settings_container.add(account);

        // music
        const music = scene.add.text(263, 201, "", {});
        music.setOrigin(0.5, 0.5);
        music.text = "Mute Music";
        music.setStyle({ "color": "#000000ff", "fixedWidth":348,"fontFamily": "Burbank Small", "fontSize": "32px" });
        settings_container.add(music);

        // age
        const age = scene.add.text(132, 130, "", {});
        age.setOrigin(0.5, 0.5);
        age.text = "Your penguin is 0 days old";
        age.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "32px" });
        settings_container.add(age);

        // server
        const server = scene.add.text(132, 82, "", {});
        server.setOrigin(0.5, 0.5);
        server.text = "You're on Server Name";
        server.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "30px" });
        settings_container.add(server);

        // settings
        const settings = scene.add.text(132, 0, "", {});
        settings.setOrigin(0.5, 0.5);
        settings.text = "SETTINGS";
        settings.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        settings_container.add(settings);

        // checkbox
        const checkbox = scene.add.image(56, 199, "login", "checkbox");
        checkbox.setOrigin(0.41509, 0.5849);
        settings_container.add(checkbox);

        // credits
        const credits = scene.add.container(0, -238);
        credits.visible = false;
        this.add(credits);

        // credits_body
        const credits_body = scene.add.text(0, 248, "", {});
        credits_body.setOrigin(0.5, 0.5);
        credits_body.text = "A massive thanks to:\n\ncomfy#0806 - Developing\nJeff The Rock#1387 - Room Design\nPiter#6645 - Room Design\nTea ♡#8640 - Item Design\n\nAnd all the moderators and\nother staff members in the Club\nPenguin Advanced game and Discord.\n\nCPA would not be possible without you\n\nPowered by github.com/wizguin/yukon";
        credits_body.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":562,"fontFamily": "Burbank Small", "fontSize": "24px" });
        credits.add(credits_body);

        // credits_header
        const credits_header = scene.add.text(0, -17, "", {});
        credits_header.setOrigin(0.5, 0.5);
        credits_header.text = "CREDITS";
        credits_header.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        credits.add(credits_header);

        // x_button
        const x_button = scene.add.image(300, -268, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(300, -270, "main", "blue-x");
        this.add(blue_x);

        // credits_btn
        const credits_btn = scene.add.image(239, -268, "main", "blue-button");
        this.add(credits_btn);

        // credits_txt
        const credits_txt = scene.add.text(239, -269, "", {});
        credits_txt.setOrigin(0.5, 0.5);
        credits_txt.text = "?";
        credits_txt.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold", "stroke": "#003366", "strokeThickness":10});
        this.add(credits_txt);

        // block (components)
        new Interactive(block);

        // rectangle (components)
        const rectangleNineSlice = new NineSlice(rectangle);
        rectangleNineSlice.corner = 50;

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "help-button";

        // checkbox (components)
        const checkboxSimpleButton = new SimpleButton(checkbox);
        checkboxSimpleButton.callback = () => this.onMuteClick();

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => { this.visible = false };

        // credits_btn (components)
        const credits_btnButton = new Button(credits_btn);
        credits_btnButton.spriteName = "blue-button";
        credits_btnButton.callback = () => this.creditsClick();

        this.settings_container = settings_container;
        this.checkbox = checkbox;
        this.credits = credits;

        /* START-USER-CTR-CODE */

        if (localStorage.muteMusic != 'true'){
            this.checkbox.checked = false
            this.checkbox.setTexture('login', "checkbox")
        }
        else{
            this.checkbox.checked = true
            this.checkbox.setTexture('login', "checkbox-active")
        }

        let oneDay = 1000 * 60 * 60 * 24
        let timeDiff = Date.now() - Date.parse(this.world.client.joinTime)
        let daysDiff = Math.round(timeDiff / oneDay)

        server.text = `You're on ${this.network.worldName}`
        age.text = `Your penguin is ${daysDiff} days old`
        buddies.text = `${this.world.client.buddies.length}/100 Buddies`

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onMuteClick() {
        this.toggle(this.checkbox)
        if(localStorage.muteMusic != 'true'){
            localStorage.muteMusic = true
            this.world.room.sound.stopAll()
        }
        else{
            localStorage.muteMusic = false
            this.world.room.addMusic()
        }
    }

    creditsClick(){
        if (this.credits.visible){
            this.credits.visible = false
            this.settings_container.visible = true
        }
        else{
            this.credits.visible = true
            this.settings_container.visible = false
        }
    }

    toggle(checkbox) {
        let texture = (checkbox.checked) ? 'checkbox' : 'checkbox-active'

        checkbox.checked = !checkbox.checked
        checkbox.setTexture('login', texture)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
