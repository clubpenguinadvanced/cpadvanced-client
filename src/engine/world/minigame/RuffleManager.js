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
		
		window.RuffleManager = this;

	}

    handleLoadMinigame(minigame) {
		
		var ruffleplayer = document.getElementsByTagName("ruffle-player")
		ruffleplayer[0].style.visibility = "visible";
		
        this.currentGame = this.rufflePlayer.load({
				url: "assets/media/games/swf/" + minigame + "/loader.swf",
				allowScriptAccess: true,
				quality: "low",
			});
            
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
		
		if (coins > 15000){
			console.log("nah fam u cappin'")
		}
		
		stamps.forEach(stamp => checkLegit(stamp, this.crumbs));
		
		function checkLegit(stamp, crumbs){
			if (crumbs.allowedstamps[game].allowedstamps.includes(stamp) == false){
				console.log("nah fam u cappin'")
			}
		}
		
		this.currentGame = this.rufflePlayer.destroy();
		var ruffleplayer = document.getElementsByTagName("ruffle-player")
		ruffleplayer[0].style.visibility = "hidden";
		
		let room = this.crumbs.rooms[roomid]
        this.world.client.sendJoinRoom(roomid, room.key)
		
	}
	
}