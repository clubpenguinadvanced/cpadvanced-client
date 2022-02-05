import Plugin from '../Plugin'


export default class Get extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'get_player': this.getPlayer,
			'get_unverified_users': this.getUnverifedUsers
        }
    }

    getPlayer(args) {
        this.interface.main.playerCard._showCard(args.penguin)
    }
	
	getUnverifedUsers(args) {
		this.interface.main.moderator.showUnverifiedUsers(args.users)
	}

}
