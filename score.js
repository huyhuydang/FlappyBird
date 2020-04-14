var score = function(game) {
	this.game = game;
	this.img = null;
	this.loaded = false;
	this.point = 0;
	this.temp = null;
	this.src = [
		'images/0.png',
		'images/1.png',
		'images/2.png',
		'images/3.png',
		'images/4.png',
		'images/5.png',
		'images/6.png',
		'images/7.png',
		'images/8.png',
		'images/9.png'

	]

	var self = this;

	this.init = function() {
		this.img = new Image();
		this.img.onload = function() {
			self.loaded = true;
		}
		this.img.src = this.src[this.point];
	}

	this.changePoint = function() {
		this.temp = this.point.toString().split('');
		//console.log(this.temp.length);
	}

	this.update = function() {
		this.img.src = this.src[this.point];
		this.changePoint();
		//console.log(this.point);
	}

	this.draw = function() {
		if (this.loaded) {
			if (this.temp.length == 1) {
				this.img.src = this.src[Number(this.temp[0])];
				self.game.context.drawImage(this.img, 250, 5, 15, 20);
			} else if (this.temp.length == 2) {
				this.img.src = this.src[Number(this.temp[0])];
				self.game.context.drawImage(this.img, 240, 5, 15, 20);
				this.img.src = this.src[Number(this.temp[1])];
				self.game.context.drawImage(this.img, 255, 5, 15, 20);
			}
		}
	}
}