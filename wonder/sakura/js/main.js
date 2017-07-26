window.onload = function(argument) {
	var canvas = document.getElementById('c');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	if (canvas.getContext) {
		var c = canvas.getContext('2d'),
			w = canvas.width,
			h = canvas.height,
			petal_width = 3,
			petal_number = 1000,
			petals = [];

		c.fillStyle = "pink";
		c.strokeStyle = 'red';
		c.lineWidth = 10;

		c.fillRect(100, 100, 300, 200);

		Petal = function() {
			 this.x = Math.random() * 2 * w;
			this.y = Math.random() * h;

			this.petal_width = Math.random() * 4 + 3;

			this.vector_x = Math.random() * 2 - 4;
			this.speed = Math.random() * 4;
		}

		Petal.prototype.move = function() {
			this.x += this.vector_x;
			this.y += this.speed;

			if (this.y > h || this.x < 0) {
				 this.x = Math.random() * 2 * w;
				this.y = -20 * Math.random();
			}
		}

		Petal.prototype.draw = function() {
			c.fillRect(this.x, this.y, this.petal_width, this.petal_width);
		}

		function start() {
			for (var i = 0; i < petal_number; i++) {
				petals[i].draw();
				petals[i].move();
			}
		}

		for (var i = 0; i < petal_number; i++) {
			petals.push(new Petal());
		}


		setInterval(function() {
			c.clearRect(0, 0, w, h);
			start();
		}, 24);

	}
}