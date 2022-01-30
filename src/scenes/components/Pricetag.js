import EventComponent from './EventComponent'

/* START OF COMPILED CODE */

export default class Pricetag extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.GameObject} */
        this.gameObject;
        /** @type {number} */
        this.id = 0;


        this.gameObject = gameObject;
        gameObject["__Pricetag"] = this;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {Pricetag} */
    static getComponent(gameObject) {
        return gameObject["__Pricetag"];
    }


    /* START-USER-CODE */

    start() {
        super.start()
        this.gameObject.text = this.scene.pricetag(this.id)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

//export default Button
