import BaseScene from '@scenes/base/BaseScene'

import { Animation, Button, SimpleButton } from '@components/components'
import TextInput from '@engine/interface/text/TextInput'

import Checks from './checks/Checks'
import WaitPrompt from './prompts/WaitPrompt'
import SavePrompt from './prompts/SavePrompt'


/* START OF COMPILED CODE */

export default class Login extends BaseScene {

    constructor() {
        super("Login");

        /** @type {Checks} */
        this.checks;
        /** @type {WaitPrompt} */
        this.waitPrompt;
        /** @type {SavePrompt} */
        this.savePrompt;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 1, "load", "bg");
        bg.setOrigin(0, 0);

        // backButton
        const backButton = this.add.sprite(760, 876, "login", "small-button");

        // createButton
        const createButton = this.add.sprite(760, 728, "login", "large-button");

        // forgotButton
        const forgotButton = this.add.sprite(760, 604, "login", "small-button");

        // note
        this.add.image(1182, 556, "login", "note");

        // backText
        const backText = this.add.text(760, 876, "", {});
        backText.setOrigin(0.5, 0.5);
        backText.text = "Back";
        backText.setStyle({ "align": "right", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "30px" });
        backText.setLineSpacing(25);

        // registerText2
        const registerText2 = this.add.text(760, 747, "", {});
        registerText2.setOrigin(0.5, 0.5);
        registerText2.text = "Create a free account now";
        registerText2.setStyle({ "align": "right", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "35px" });
        registerText2.setLineSpacing(25);

        // registerText
        const registerText = this.add.text(760, 713, "", {});
        registerText.setOrigin(0.5, 0.5);
        registerText.text = "Don't have a penguin?";
        registerText.setStyle({ "align": "right", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "30px" });
        registerText.setLineSpacing(25);

        // forgotText
        const forgotText = this.add.text(760, 604, "", {});
        forgotText.setOrigin(0.5, 0.5);
        forgotText.text = "Forgot your password?";
        forgotText.setStyle({ "align": "right", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "30px" });
        forgotText.setLineSpacing(25);

        // loginButton
        const loginButton = this.add.sprite(760, 483, "login", "login-button");

        // loginText
        const loginText = this.add.text(760, 483, "", {});
        loginText.setOrigin(0.5, 0.5);
        loginText.text = "Login";
        loginText.setStyle({ "align": "right", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "38px" });
        loginText.setLineSpacing(25);

        // passwordText
        const passwordText = this.add.text(482, 258, "", {});
        passwordText.setOrigin(0, 0.5);
        passwordText.text = "Password:";
        passwordText.setStyle({ "align": "right", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "30px" });
        passwordText.setLineSpacing(25);

        // usernameText
        const usernameText = this.add.text(419, 200, "", {});
        usernameText.setOrigin(0, 0.5);
        usernameText.text = "Penguin Name:";
        usernameText.setStyle({ "align": "right", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "30px" });
        usernameText.setLineSpacing(25);

        // password
        this.add.image(815, 258, "login", "input");

        // username
        this.add.image(815, 200, "login", "input");

        // checks
        const checks = new Checks(this, 568, 328);
        this.add.existing(checks);

        // waitPrompt
        const waitPrompt = new WaitPrompt(this, 760, 480);
        this.add.existing(waitPrompt);
        waitPrompt.visible = false;

        // savePrompt
        const savePrompt = new SavePrompt(this, 760, 480);
        this.add.existing(savePrompt);
        savePrompt.visible = false;

        // backButton (components)
        const backButtonSimpleButton = new SimpleButton(backButton);
        backButtonSimpleButton.callback = () => this.onBackClick();
        const backButtonAnimation = new Animation(backButton);
        backButtonAnimation.key = "small-button";
        backButtonAnimation.end = 3;
        backButtonAnimation.repeat = 0;
        backButtonAnimation.onHover = true;

        // createButton (components)
        const createButtonSimpleButton = new SimpleButton(createButton);
        createButtonSimpleButton.callback = () => this.onCreateClick();
        const createButtonAnimation = new Animation(createButton);
        createButtonAnimation.key = "large-button";
        createButtonAnimation.end = 3;
        createButtonAnimation.repeat = 0;
        createButtonAnimation.onHover = true;

        // forgotButton (components)
        new SimpleButton(forgotButton);
        const forgotButtonAnimation = new Animation(forgotButton);
        forgotButtonAnimation.key = "small-button";
        forgotButtonAnimation.end = 3;
        forgotButtonAnimation.repeat = 0;
        forgotButtonAnimation.onHover = true;

        // loginButton (components)
        const loginButtonButton = new Button(loginButton);
        loginButtonButton.spriteName = "login-button";
        loginButtonButton.callback = () => this.onLoginSubmit();

        this.checks = checks;
        this.waitPrompt = waitPrompt;
        this.savePrompt = savePrompt;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        this._create()

        this.network.lastLoginScene = 'Login'

        // Todo: change to depth component
        this.waitPrompt.depth = 1
        this.savePrompt.depth = 1

        // Login form
        let style = {
            width: 380,
            height: 53,
            padding: '0 6px 0 6px',
            filter: 'none',
            fontFamily: 'Burbank Small',
            fontSize: 35,
            color: '#000'
        }

        this.usernameInput = new TextInput(this, 815, 200, 'text', style, () => this.onLoginSubmit(), 12, false)
        this.passwordInput = new TextInput(this, 815, 259, 'password', style, () => this.onLoginSubmit(), 128, false)

        this.add.existing(this.usernameInput)
        this.add.existing(this.passwordInput)

        // Input
        this.input.keyboard.on('keydown-ENTER', () => this.onLoginSubmit())
    }

    onLoginSubmit() {
        let username = this.usernameInput.text
        let password = this.passwordInput.text

        this.interface.showLoading(`Logging in ${username}`)
        this.scene.stop()

        this.network.connectLogin(this.checks.username.checked, this.checks.password.checked, () => {
            this.network.send('JrKvJh5xBaQgJad7KXB56ty7uY77rhnVPLHe5M4caj2fDCW3gnTvBePwDcbnrre3fhyaEcRNVYRt3g8wzzbWPAyppa4pUzT5mLHXpSMHEe5NzA3E2JFhkvnhQQMGDLtH4wuLkKtLUXDKadNhpgxsrdpXc9YnzLEvEQpvxcsZtuWHteXP44AHNWxbJTX9g995zEK7PmUUmjEEHJ3WsFPHm5Y82tQDerKQKDrZtCfNxwYV7JBKPNGw55MvYBfrYb7AHxXajK2YGrvw3SamnT2cLQttd3WxE8b6M3MwCFr8a2QvYK5wNAb8WjDGZZWQss92cdBn9ssRqd6evu4thMaF4SV4cmNQAHWEyeCBpEYrEh8VrwUMdgktrLGVkx2CE6MSCkZ3xRZA3wuswhq4Z6LnXxkTXrfF34qcba8pU7DdmVwRzyM8fM8SUQ2WLMBnFHrdsYCPtpCAnGgGSTDL8zEbvbVLJLjeWz3pXaYY7GQPn7jef4s6XEsZPS9SngPSEMSH', 'login', { username: username, password: password })
        })
    }

    onCreateClick() {
        window.location.href = '/create-a-penguin'
    }

    onBackClick() {
        this.network.disconnect()
        this.scene.start('Start')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
