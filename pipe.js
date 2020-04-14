var soundScore = new Audio('sounds/score.mp3');
var soundHit = new Audio('sounds/hit.mp3');
var soundDie = new Audio('sounds/die.mp3');
//52x320
var pipe = function(game) {
	this.game = game;
	this.imgs = null;
	this.imgn = null; 
	this.loaded = false;
	this.x = null;
	this.ys = null;
	this.yn = null;
	this.frameImage = 0;
	this.kc = 52;

	var self = this;

	this.init = function() {
		this.x = self.game.currentXpipe + Math.random()*100 + 52;
		self.game.currentXpipe = this.x;
		this.ys = Math.random()*256 + 256;
		this.yn = this.ys - 200 - 320; 
		this.imgs = new Image();
		this.imgn = new Image();
		this.imgs.onload = function() {
			self.loaded = true;
		}
		this.imgs.src = 'images/pipeSouth.png';
		this.imgn.src = 'images/pipeNorth.png';

	}


	this.checkHit = function() {
		//Dieu kien cham vao cot
		if (
				(this.x <= self.game.bird.x + 34) &&
				(this.x + 52 >= self.game.bird.x)
			) {
			//Dieu kien chui qua khe
			if (
					(this.ys > self.game.bird.y+24) &&
					(this.yn + 320 < self.game.bird.y)
				) {
				if (
						this.x + 2 > self.game.bird.x + 34 &&
						this.x - 2 < self.game.bird.x + 34
					) {
					self.game.score.point++;
				}
				soundScore.play();
				self.game.gameOver = false;
			} else {
				//soundHit.play();
				//soundDie.play();
				//self.game.gameOver = true;
			}

		} 
		
	}


	this.update = function() {
		this.checkHit();
		if (self.game.gameOver) {
			return;
		}
		this.x-= 2;
		if (this.x <= -52) {
			this.x = 288;
			this.ys = Math.random()*256 + 256;
			this.yn = this.ys- 200 - 320;
		}

		this.frameImage++;  
	}


	this.draw = function(kc) {
		if (this.loaded) {
			self.game.context.drawImage(this.imgs, this.x, this.ys);
			self.game.context.drawImage(this.imgn, this.x, this.yn)
		}
	}
}