//336X112
var base = function(game) {
	this.game = game;
	this.img = null;
	this.x = null;
	this.loaded = false;

	var self = this;
	this.init = function() {
		this.x = 0;
		this.img = new Image();
		this.img.onload = function() {
			self.loaded = true;
		}
		this.img.src = 'images/base.png';
	}

	this.update = function () {
		this.x-=2;
		if (this.x == -336) {
			this.x = 0;
		}
	}

	this.draw = function() {
		if (this.loaded == true) {
			self.game.context.drawImage(this.img, this.x, 450);
			self.game.context.drawImage(this.img, this.x + 336, 450)
		}
	}
}