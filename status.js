var status = function(game) {
	this.game = game;
	this.img = null;
	this.loaded = false;


	var self = this;

	this.init = function() {
		this.img = new Image();
		this.img.onload = function() {
			self.loaded = true;
		}
		this.img.src = 'images/btn.png';
	}

	this.update = function() {
		console.log('ddd');
	}

	this.draw = function() {
		if (this.loaded) {
			self.game.context.drawImage(this.img, 84, 226)
		}
	}
}