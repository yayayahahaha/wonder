window.onload = function(argument) {
	var canvas = document.getElementById('c');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	if (canvas.getContext) {
		var c = canvas.getContext('2d'),
			w = canvas.width,
			h = canvas.height;

		c.strokeStyle = 'red';
		// c.strokeStyle = 'rgba(255,255,255,0.5)';
		c.fillStyle = 'black';
		c.lineWidth = .1;
		// c.strokeStyle = color;

		var points = {
			number: 333,
			connect_distance: 50,
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
			this.speed_x = Math.random() * 20;
			this.speed_y = Math.random() * 20;

			// just radius, nothing special
			this.radius = Math.random() * 5;

		}


		// define the prototype of Point
		Point.prototype = {
			draw_point: function() {
				// c.fillStyle = 'black';
				// c.fillStyle = 'rgba(255,255,255,1)';
				c.beginPath();

				// arc(x, y, radius, start angle, end angle, clockwise),
				c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
				c.fill();
			},

			// this part we have to make every point have their each new position
			// so we need for-loop to do that
			next_position: function() {
				var temp_p = this;

				if (temp_p.x < 0 || temp_p.x > w) {
					temp_p.vector_x = -temp_p.vector_x;
				} else if (temp_p.y < 0 || temp_p.y > h) {
					temp_p.vector_y = -temp_p.vector_y;
				}

				temp_p.x += temp_p.vector_x * temp_p.speed_x;
				temp_p.y += temp_p.vector_y * temp_p.speed_y;

			},


		};

		init();

		connect_each = function() {
			var temp_array = points.array;
			var temp_queue = arguments[0];

			for (var i = 0; i < points.number; i++) {
				for (var j = 0; j < points.number; j++) {
					pre_p = points.array[i];
					next_p = temp_array[j];

					if ((pre_p.x - next_p.x) < points.connect_distance && (pre_p.y - next_p.y) < points.connect_distance && (pre_p.x - next_p.x) > -points.connect_distance && (pre_p.y - next_p.y) > -points.connect_distance) {
						c.beginPath();
						c.moveTo(pre_p.x, pre_p.y);
						c.lineTo(next_p.x, next_p.y);
						c.stroke();
						c.closePath();
					}
				}
			}
		}

		// create each point
		function init() {
			for (var i = 0; i < points.number; i++) {
				points.array.push(new Point());
				points.array[i].draw_point();
			}
		}

		function animated_part() {
			var temp_array = points.array;
			for (var i = 0; i < points.number; i++) {
				temp_array[i].next_position();
				temp_array[i].draw_point();
			}
			connect_each();
		}


		// timer
		setInterval(function() {
			// c.fillStyle = 'rgba(0,0,0,0)';
			// c.fillRect(0, 0, w, h);

			animated_part();
		}, 33);

	}
}