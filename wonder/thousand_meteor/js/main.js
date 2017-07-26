window.onload = function(argument) {
	var canvas = document.getElementById('c');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	if (canvas.getContext) {
		var c = canvas.getContext('2d'),
			w = canvas.width,
			h = canvas.height;

		c.strokeStyle = 'red';
		c.fillStyle = 'white';
		c.lineWidth = .1;
		// c.strokeStyle = color;

		var points = {
			number: 1000,
			connect_distance: 150,
			mouse_distance: 100,

			// to handle each point by queue so we need this arrau
			array: []
		}

		Point = function() {
			// define origin place
			this.x = Math.random() * w;
			this.y = Math.random() * h;

			// the meaning of minus 0.5 is to make a vector which between -0.5~0.5
			// not too short not too long 
			this.vector_x = Math.random() - 0.5;
			this.vector_y = Math.random() - 0.5;


			// trying to make each point has different speed
			this.speed_x = Math.random() * 5;
			this.speed_y = Math.random() * 5;

			// just radius, nothing special
			this.radius = Math.random() * 2;

		}


		// define the prototype of Point
		Point.prototype = {
			draw_point: function() {
				c.fillStyle = 'rgba(255,255,255,1)';
				c.beginPath();

				// arc(x, y, radius, start angle, end angle, clockwise),
				c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
				c.fill();
			},

			// this part we have to make every point have their each new position
			// so we need for-loop to do that
			next_position: function() {
				if (this.x < 0 || this.x > w) {
					this.vector_x = -this.vector_x;
				} else if (this.y < 0 || this.y > h) {
					this.vector_y = -this.vector_y;
				}

				this.x += this.vector_x * this.speed_x;
				this.y += this.vector_y * this.speed_y;

			},
			connect_each: function() {
				console.log("let ignore this part temporarily.");
			}

		};

		init();

		// create each point
		function init() {
			for (var i = 0; i < points.number; i++) {
				points.array.push(new Point());
				points.array[i].draw_point();
			}
		}

		function animated_part() {
			for (var i = 0; i < points.number; i++) {
				points.array[i].next_position();
				points.array[i].draw_point();
			}
		}


		// timer
		setInterval(function() {
			c.fillStyle = 'rgba(0,0,0,0.2)';
			c.fillRect(0, 0, w, h);

			animated_part();
		}, 24);

	}
}