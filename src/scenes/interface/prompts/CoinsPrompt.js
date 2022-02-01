import BaseContainer from '@scenes/base/BaseContainer'

import { Interactive, NineSlice, Button } from '@components/components'


/* START OF COMPILED CODE */

export default class CoinsPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.bg;
        /** @type {Phaser.GameObjects.Text} */
        this.game;
        /** @type {Phaser.GameObjects.Text} */
        this.youearned;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Text} */
        this.yourcoins;
        /** @type {Phaser.GameObjects.Sprite} */
        this.close_btn;


        this.visible = false;

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.rectangle(0, 0, 800, 350);
        bg.isFilled = true;
        bg.fillColor = 164045;
        this.add(bg);

        // game
        const game = scene.add.text(0, -125, "", {});
        game.setOrigin(0.5, 0.5);
        game.text = "Game";
        game.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":628,"fontFamily": "Burbank Small", "fontSize": "45px", "fontStyle": "bold", "shadow.offsetX":1,"shadow.offsetY":1,"shadow.color": "#012234ff", "shadow.fill":true});
        this.add(game);

        // youearned
        const youearned = scene.add.text(0, -78, "", {});
        youearned.setOrigin(0.5, 0.5);
        youearned.text = "You've earned:";
        youearned.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":628,"fontFamily": "Burbank Small", "fontSize": "30px" });
        this.add(youearned);

        // coins
        const coins = scene.add.text(0, 47, "", {});
        coins.setOrigin(0.5, 0.5);
        coins.text = "69 coins";
        coins.setStyle({ "color": "#ffffffff", "fixedWidth":628,"fontFamily": "Burbank Small", "fontSize": "45px", "fontStyle": "bold", "shadow.offsetX":3,"shadow.offsetY":2,"shadow.color": "#012855ff", "shadow.fill":true});
        coins.setPadding({"left":175});
        this.add(coins);

        // yourcoins
        const yourcoins = scene.add.text(0, 101, "", {});
        yourcoins.setOrigin(0.5, 0.5);
        yourcoins.text = "Your total coins: 420";
        yourcoins.setStyle({ "color": "#ffffffff", "fixedWidth":628,"fontFamily": "Burbank Small", "fontSize": "30px", "shadow.offsetX":3,"shadow.offsetY":2,"shadow.color": "#012855ff" });
        yourcoins.setPadding({"left":175});
        this.add(yourcoins);

        // close_btn
        const close_btn = scene.add.sprite(347, -122, "main", "blue-button");
        this.add(close_btn);

        // blue_x
        const blue_x = scene.add.image(347, -124, "main", "blue-x");
        this.add(blue_x);

        // coin
        const coin = scene.add.image(-210, 72, "main", "coin");
        coin.scaleX = 0.75;
        coin.scaleY = 0.75;
        this.add(coin);

        // block (components)
        new Interactive(block);

        // bg (components)
        const bgNineSlice = new NineSlice(bg);
        bgNineSlice.corner = 50;

        // close_btn (components)
        const close_btnButton = new Button(close_btn);
        close_btnButton.spriteName = "blue-button";
        close_btnButton.callback = () => this.visible = false;

        this.bg = bg;
        this.game = game;
        this.youearned = youearned;
        this.coins = coins;
        this.yourcoins = yourcoins;
        this.close_btn = close_btn;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(game, coins) {
        this.coins.text = coins.toString() + " coins"
        this.game.text = game
        this.yourcoins.text = "Your total coins: " + this.world.client.coins.toString()

        this.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
