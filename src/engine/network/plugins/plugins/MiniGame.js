import Plugin from '../Plugin'


export default class MiniGame extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'start_game': this.startGame,
            'send_move': this.sendMove,
            'game_over': this.gameOver,
			'end_ruffle_mingame': this.endRuffleMinigame
        }
    }
	
	get client() {
        return this.world.client
    }

    startGame(args) {
        this.world.room.handleStartGame(args)
    }

    sendMove(args) {
        this.world.room.handleSendMove(args)
    }

    gameOver(args) {
        // Temporary
        this.world.client.sendJoinRoom(230, 'Ski Hill', 0, 0)
    }
	
	endRuffleMinigame(args){
		this.client.coins = args.coins
		let prompt = this.world.game.scene.getScene('InterfaceController').prompt
		if (args.coinsEarned == null){
			args.coinsEarned = 0
		}
        prompt.showCoins(this.world.getString(args.game), args.coinsEarned)
	}

}
