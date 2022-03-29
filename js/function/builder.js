// Quick test to make cargo work on a different logic
//
const Builder = new (function() {
	this.test = function() {
		console.log("hello world")
	}

	this.Player = function(blueprint) {
		let player = {
		}

		return player
	}

	this.Evolution = function(blueprint) {
		let evolution = {
		}

		return evolution
	}	

return this
})()
