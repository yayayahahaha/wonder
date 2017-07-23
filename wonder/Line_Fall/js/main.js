window.onload = function() {
	var canvas = document.getElementById('c');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	if (canvas.getContext) {
		var c = canvas.getContext('2d'),
			w = canvas.width,
			h = canvas.height;

		line_number = 1000;
		line_array = [];
		c.strokeStyle = 'white';
		c.lineWidth = 1;

		Line = function() {
			this.x = Math.random() * w;
			this.y = Math.random() * h;

			this.vector_x = (Math.random() - 0.5);
			this.vector_y = (Math.random() - 0.5);


			this.lx = Math.random() * w;
			this.ly = Math.random() * h;

			this.vector_lx = (Math.random() - 0.5);
			this.vector_ly = (Math.random() - 0.5);

			this.ori_speed = Math.random() * 200;
			this.line_speed = Math.random() * 200;
		}

		Line.prototype = {
			draw_line: function() {
				c.beginPath();
				c.moveTo(this.x, this.y);
				c.lineTo(this.lx, this.ly);
				c.stroke();
			},

			next_point: function() {
				if (this.x < 0 || this.x > w) {
					this.vector_x = -this.vector_x;
				}
				if (this.lx < 0 || this.lx > w) {
					this.vector_lx = -this.vector_lx;
				}
/*				if (this.y < 0 || this.y > h) {
					this.vector_y = -this.vector_y;
				}
				if (this.ly < 0 || this.ly > h) {
					this.vector_ly = -this.vector_ly;
				}*/

				this.x += this.vector_x * this.ori_speed;
				this.y += this.vector_y * this.ori_speed;

				this.lx += this.vector_lx * this.line_speed;
				this.ly += this.vector_ly * this.line_speed;
			}
		}

		init();

		function init() {
			for (var i = 0; i < line_number; i++) {
				line_array.push(new Line());
				line_array[i].draw_line();
			}
		}

		function animate_part() {
			for (var i = 0; i < line_array.length; i++) {
				line_array[i].next_point();
				line_array[i].draw_line();
			}
		}

		function clean_canvas() {
			c.fillStyle = 'black';
			c.fillRect(0, 0, w, h);
		}

		setInterval(function() {
			clean_canvas();
			animate_part();
		}, 24);

	}

}