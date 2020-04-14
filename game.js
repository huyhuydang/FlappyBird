var game = function() {
	this.canvas = null;
	this.context = null;

	this.bg = null;
	this.base = null;
	this.bird = null;
	this.pipe = [];
	this.score = null;
	this.status = null;

	this.pipeSL = 3;

	this.currentXpipe = 288;

	//status
	this.gameOver = false;
	

	var self = this;

	this.init = function() {
		this.canvas = document.getElementById('canvas');
		this.canvas.width = 288;
		this.canvas.height = 512;
		this.context = canvas.getContext('2d');

		//create backdround
		this.bg = new bg(this);
		this.bg.init();

		//create pipe
		for (var i = 0; i < this.pipeSL; i++) {
			this.pipe.push(new pipe(this));
			this.pipe[i].init();
		}

		//create base
		this.base = new base(this);
		this.base.init();

		//create score
		this.score = new score(this);
		this.score.init();

		//create bird
		this.bird = new bird(this);
		this.bird.init();

		//Endgame
		this.status = new status(this);
		this.status.init();

		this.listenMouse();
		this.loop();
	}


	this.loop = function() {
		if (self.gameOver) {
			self.status.update();
			self.status.draw(); 
			self.canvas.addEventListener('click', function() {
				location.reload();
			});
		} else {
			self.update();
			self.draw();
		}
		setTimeout(self.loop, 25);
	}

	this.listenMouse = function() {
		this.canvas.addEventListener('click', function() {
			self.bird.flap();
		});
		document.addEventListener('keypress', function() {
			self.bird.flap();
		});
	}

	this.update = function() {
		this.bg.update();
		this.base.update();
		for (var i = 0; i < this.pipeSL; i++) {
			this.pipe[i].update();
		}
		this.score.update();
		this.bird.update();
		
	}


	this.draw = function() {
		this.bg.draw();
		for (var i = 0; i < this.pipeSL; i++) {
			this.pipe[i].draw();
		}
		this.base.draw();
		this.score.draw();
		this.bird.draw();
	}

}

var g = new game();
g.init();