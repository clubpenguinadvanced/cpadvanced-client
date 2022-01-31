export default class RuffleManager {
	
	constructor(world, RuffleHolder, crumbs){
		
		this.world = world
		this.RuffleHolder = RuffleHolder
		this.crumbs = crumbs
		
		window.RufflePlayer = window.RufflePlayer || {};
		window.RufflePlayer.config = {
			"publicPath": "assets/scripts/lib/ruffle"
		}

		this.ruffle = window.RufflePlayer.newest();
        window.rufflePlayer = this.ruffle.createPlayer();
        window.rufflePlayer.style.width = '1520px';
        window.rufflePlayer.style.height = '960px';
		window.rufflePlayer.style.pointerEvents = 'auto';

        this.RuffleHolder.add.dom(760, 480, window.rufflePlayer)
		
		var ruffleplayer = document.getElementsByTagName("ruffle-player")
		ruffleplayer[0].style.visibility = "hidden";

		this.ruffle = window.RufflePlayer;
		
		window.unbound_getMyPlayerHex = this.getMyPlayerHex
		window.getMyPlayerHex = unbound_getMyPlayerHex.bind(this)
		
		window.unbound_killMinigame = this.killMinigame
		window.killMinigame = unbound_killMinigame.bind(this)
	}
	

    handleLoadMinigame(minigame) {
		
		var ruffleplayer = document.getElementsByTagName("ruffle-player")
		ruffleplayer[0].style.visibility = "visible";
		
        this.currentGame = window.rufflePlayer.load({
				url: "assets/media/games/swf/" + minigame + "/loader.swf",
				allowScriptAccess: true,
				quality: "low",
			});
		
		this.inMinigame = true
            
	}
	
	getMyPlayerHex(){
		return this.world.getColor(this.world.client.penguin.color)
	}
	
	checkCoins(){
		var canvas = document.getElementsByTagName("ruffle-player")[0].shadowRoot.children[2].children[2]
		console.log(canvas)
		var coins = canvas[0].getCoins()
		return coins
	}
	
	killMinigame(game, roomid, coins, stamps){
		
		if (this.inMinigame != true){
			return
			// punish player for cheating?
		}
		
		if (coins > 15000){
			return
			// punish player for cheating?
		}
		
		stamps.forEach(stamp => checkLegit(stamp, this.crumbs));
		
		function checkLegit(stamp, crumbs){
			if (crumbs.allowedstamps[game].allowedstamps.includes(stamp) == false){
				return
				// punish player for cheating?
			}
		}
		
		var ruffleplayer = document.getElementsByTagName("ruffle-player")
		ruffleplayer[0].destroy();
		ruffleplayer[0].style.visibility = "hidden";
		
		let room = this.crumbs.rooms[roomid]
        this.world.client.sendJoinRoom(roomid, room.key)
		
		this.world.network.send('JrKvJh5xBaQgJad7KXB56ty7uY77rhnVPLHe5M4caj2fDCW3gnTvBePwDcbnrre3fhyaEcRNVYRt3g8wzzbWPAyppa4pUzT5mLHXpSMHEe5NzA3E2JFhkvnhQQMGDLtH4wuLkKtLUXDKadNhpgxsrdpXc9YnzLEvEQpvxcsZtuWHteXP44AHNWxbJTX9g995zEK7PmUUmjEEHJ3WsFPHm5Y82tQDerKQKDrZtCfNxwYV7JBKPNGw55MvYBfrYb7AHxXajK2YGrvw3SamnT2cLQttd3WxE8b6M3MwCFr8a2QvYK5wNAb8WjDGZZWQss92cdBn9ssRqd6evu4thMaF4SV4cmNQAHWEyeCBpEYrEh8VrwUMdgktrLGVkx2CE6MSCkZ3xRZA3wuswhq4Z6LnXxkTXrfF34qcba8pU7DdmVwRzyM8fM8SUQ2WLMBnFHrdsYCPtpCAnGgGSTDL8zEbvbVLJLjeWz3pXaYY7GQPn7jef4s6XEsZPS9SngPSEMSH', 'end_ruffle_mingame', { coins: coins, game: game, stamps: stamps })
		
	}
	
}