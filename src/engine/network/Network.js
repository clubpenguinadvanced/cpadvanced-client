import DataHandler from './DataHandler'

import io from 'socket.io-client'

import CryptoJS from 'crypto-js'


export default class Network {

    constructor(game) {
        this.game = game
        this.crumbs = game.crumbs

        this.handler = new DataHandler(this)
        this.client = null

        this.saveUsername = false
        this.savePassword = false
        this.token = null

        // Used to switch back to correct login scene on an error
        this.lastLoginScene = null

        this.worldName
    }

    connectLogin(saveUsername, savePassword, onConnect) {
        this.saveUsername = saveUsername
        this.savePassword = savePassword

        this.connect('Login', () => {
            onConnect()
        }, () => {
            this.disconnect()
        })
    }

    connectGame(world, username, key) {
        // Only create token if save password is checked and space is available
        let createToken = this.savePassword && Object.keys(this.savedPenguins).length <= 6
        let response = { username: username, key: key, createToken: createToken }

        // If a token exists for the user add the token selector to response,
        // so that the token can be deleted/refreshed by the server
        let token = this.getToken(username)

        if (token) {
            response.token = token.split(':')[0]
        }

        this.connect(world, () => {
            this.send('game_auth', response)
            this.worldName = world

        }, () => {
            this.onConnectionLost()
        })
    }

	encryptData(text){
  		const passphrase = 'JrKvJh5xBaQgJad7KXB56ty7uY77rhnVPLHe5M4caj2fDCW3gnTvBePwDcbnrre3fhyaEcRNVYRt3g8wzzbWPAyppa4pUzT5mLHXpSMHEe5NzA3E2JFhkvnhQQMGDLtH4wuLkKtLUXDKadNhpgxsrdpXc9YnzLEvEQpvxcsZtuWHteXP44AHNWxbJTX9g995zEK7PmUUmjEEHJ3WsFPHm5Y82tQDerKQKDrZtCfNxwYV7JBKPNGw55MvYBfrYb7AHxXajK2YGrvw3SamnT2cLQttd3WxE8b6M3MwCFr8a2QvYK5wNAb8WjDGZZWQss92cdBn9ssRqd6evu4thMaF4SV4cmNQAHWEyeCBpEYrEh8VrwUMdgktrLGVkx2CE6MSCkZ3xRZA3wuswhq4Z6LnXxkTXrfF34qcba8pU7DdmVwRzyM8fM8SUQ2WLMBnFHrdsYCPtpCAnGgGSTDL8zEbvbVLJLjeWz3pXaYY7GQPn7jef4s6XEsZPS9SngPSEMSH';
  		return CryptoJS.AES.encrypt(text, passphrase).toString();
	};
	
	decryptData(ciphertext){
		const passphrase = 'JrKvJh5xBaQgJad7KXB56ty7uY77rhnVPLHe5M4caj2fDCW3gnTvBePwDcbnrre3fhyaEcRNVYRt3g8wzzbWPAyppa4pUzT5mLHXpSMHEe5NzA3E2JFhkvnhQQMGDLtH4wuLkKtLUXDKadNhpgxsrdpXc9YnzLEvEQpvxcsZtuWHteXP44AHNWxbJTX9g995zEK7PmUUmjEEHJ3WsFPHm5Y82tQDerKQKDrZtCfNxwYV7JBKPNGw55MvYBfrYb7AHxXajK2YGrvw3SamnT2cLQttd3WxE8b6M3MwCFr8a2QvYK5wNAb8WjDGZZWQss92cdBn9ssRqd6evu4thMaF4SV4cmNQAHWEyeCBpEYrEh8VrwUMdgktrLGVkx2CE6MSCkZ3xRZA3wuswhq4Z6LnXxkTXrfF34qcba8pU7DdmVwRzyM8fM8SUQ2WLMBnFHrdsYCPtpCAnGgGSTDL8zEbvbVLJLjeWz3pXaYY7GQPn7jef4s6XEsZPS9SngPSEMSH';
		const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
		const originalText = bytes.toString(CryptoJS.enc.Utf8);
		return originalText;
	};

    connect(world, onConnect, onDisconnect) {
        this.disconnect()

        let config = this.crumbs.worlds[world]

        this.client = io.connect(config.host, { path: config.path })

        this.client.once('connect', onConnect)
        this.client.once('disconnect', onDisconnect)
        this.client.on('connect_error', () => this.onConnectionLost())
        this.client.on('message', (message) => this.onMessage(message))
    }

    disconnect() {
        if (this.client) {
            this.client.disconnect()
        }
    }

    send(action, args = {}) {
		let messagedata = JSON.stringify({ action: action, args: args })
		
        this.client.emit('message', this.encryptData(messagedata) + "\xdd")
		
		let parsed = JSON.parse(messagedata)
		
		if (localStorage.logging == 'true') {
            console.log('[Network] Message sent:', parsed.action, parsed.args)
        }
    }

    // Handlers

    onMessage(message) {
        this.handler.handle(this.decryptData(message))
    }

    onConnectionLost() {
        this.disconnect()

        let prompt = this.game.scene.getScene('InterfaceController').prompt
        prompt.showError('Connection was lost.\nPlease click to learn more', 'Learn More', () => { })
    }

    // Saved penguins

    get isSavedPenguins() {
        if (localStorage.getItem('saved_penguins')) {
            return true
        } else {
            return false
        }
    }

    get savedPenguins() {
        let savedPenguins = localStorage.getItem('saved_penguins')

        if (!savedPenguins) {
            return {}
        }

        try {
            return JSON.parse(savedPenguins)
        } catch (error) {
            return {}
        }
    }

    getToken(username) {
        let save = this.savedPenguins[username.toLowerCase()]

        if (save && save.token) {
            return save.token
        } else {
            return null
        }
    }

}
