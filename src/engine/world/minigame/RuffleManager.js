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
        this.rufflePlayer = this.ruffle.createPlayer();
        this.rufflePlayer.style.width = '1520px';
        this.rufflePlayer.style.height = '960px';
		this.rufflePlayer.style.pointerEvents = 'auto';

        this.RuffleHolder.add.dom(760, 480, this.rufflePlayer)
		
		var ruffleplayer = document.getElementsByTagName("ruffle-player")
		ruffleplayer[0].style.visibility = "hidden";

		this.ruffle = window.RufflePlayer;
		
		window.getMyPlayerHex = this.getMyPlayerHex
		window.getMyPlayerHex = getMyPlayerHex.bind(this)
		
		window.killMinigame = this.killMinigame
		window.killMinigame = killMinigame.bind(this)
	}
	

    handleLoadMinigame(minigame) {
		
		var ruffleplayer = document.getElementsByTagName("ruffle-player")
		ruffleplayer[0].style.visibility = "visible";
		
        this.currentGame = this.rufflePlayer.load({
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
		this.rufflePlayer.pause();
		ruffleplayer[0].style.visibility = "hidden";
		
		let room = this.crumbs.rooms[roomid]
        this.world.client.sendJoinRoom(roomid, room.key)
		
		this.world.network.send('end_ruffle_mingame', { coins: coins, game: game, stamps: stamps })
		window.show()
		
	}
	
}