var bg = function(game) {
	this.game = game;
	this.img = null;
	this.loaded = false;
	this.x = 0;

	var self = this;
	this.init = function() {
		this.img = new Image();
		this.img.onload = function() {
			self.loaded = true;
		}
	}

	this.update = function() {
		this.img.src = 'images/bg.png';
		this.x--;
		if (this.x <= -288) {
			this.x = 0;
		}
	}


	this.draw = function() {
		if (this.loaded) {
			self.game.context.drawImage(this.img, this.x, 0);
			self.game.context.drawImage(this.img, this.x+288, 0);
		}
	}
}