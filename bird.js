var bird = function(game) {
	this.game = game;
	this.loaded = false;
	this.img = null;
	this.src = null;
	this.x = null;
	this.y = null;
	this.speedY = null;
	this.acenletion = null;

	this.frameImage = 0;
	this.checkFlap = null;
   


	var self = this;

	this.init = function() {
		this.x = 100;
		this.y = 100;
		this.speedY = 0;
		this.acenletion = 0.5;
		this.img = new Image()
		this.img.onload = function() {
			self.loaded = true; 
		}
		this.src = 'images/upflap.png';
		this.img.src = this.src;
	}
 


	this.flap = function() {
		if (self.game.gameOver) {
			return;
		} else {
			var soundFlap = new Audio("sounds/wing.mp3");
		}
		soundFlap.play();
		this.checkFlap = true;
		this.speedY = -5;
	}   

	this.update = function() {
		if (this.frameImage % 3 == 0) {
			this.changeImage();
			this.checkFlap = false;
		}
		this.frameImage++;
		this.speedY += this.acenletion;
		this.y += this.speedY;
		if (this.speedY > 10 && this.speedY < 18) {
			var soundSwoosh = new Audio('sounds/swoosh.mp3');
			soundSwoosh.play();
		}

		if (this.y >=  426) {
			soundHit.play();
			soundDie.play();
			self.game.gameOver = true;
		}
	}

	this.changeImage = function() {
		if (this.checkFlap == true && this.src == 'images/upflap.png') {
			this.src = 'images/downflap.png';
		}
		if (this.checkFlap == true && this.src == 'images/midflap.png') {
			this.src = 'images/downflap.png';
		}
		if (this.checkFlap == false && this.src == 'images/downflap.png') {
			this.src = 'images/midflap.png';
		}
		if (this.checkFlap == false && this.src == 'images/midflap.png') {
			this.src = 'images/upflap.png';
		}
		this.img.src = this.src;
	}
		

	

	this.draw = function() {
		if (this.loaded == true) {
			self.game.context.drawImage(this.img, this.x, this.y)
		}
	}

}