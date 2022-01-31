import ErrorPrompt from './ErrorPrompt'
import ItemPrompt from '@scenes/interface/prompts/ItemPrompt'
import LoadingPrompt from '@scenes/interface/prompts/LoadingPrompt'
import WindowPrompt from '@scenes/interface/prompts/WindowPrompt'
import CoinsPrompt from '@scenes/interface/prompts/CoinsPrompt'


export default class PromptController {

    constructor(_interface) {
        this.interface = _interface

        this.error = new ErrorPrompt(_interface, 760, 480)
        this.item = new ItemPrompt(_interface, 760, 480)
        this.loading = new LoadingPrompt(_interface, 760, 480)
        this.window = new WindowPrompt(_interface, 760, 480)
		this.coins = new CoinsPrompt(_interface, 760, 480)

        _interface.add.existing(this.error)
        _interface.add.existing(this.item)
        _interface.add.existing(this.loading)
        _interface.add.existing(this.window)
		_interface.add.existing(this.coins)
    }

    showError(text, buttonText = 'Okay', callback = () => this.error.visible = false) {
        this.error.show(text, buttonText, callback)
        this.setCursor()
    }

    showItem(item) {
        this.item.showItem(item)
        this.setCursor()
    }

    showFurniture(item) {
        this.item.showFurniture(item)
        this.setCursor()
    }

    showLoading(scene, progress = 0) {
        this.loading.show(scene, progress)
        this.setCursor()
    }

    showWindow(text, buttonLayout = 'single', callback = () => {}, noCallback = () => this.window.visible = false) {
        this.window.show(text, buttonLayout, callback, noCallback)
        this.setCursor()
    }
	
	showCoins(game, coins) {
        this.coins.show(game, coins)
        this.setCursor()
    }

    hideAll() {
        this.loading.visible = false
    }

    setCursor() {
        this.interface.input.setDefaultCursor('default')
    }

}
