window.onload = function(argument) {
	var canvas = document.getElementById('c');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	if (canvas.getContext) {
		var c = canvas.getContext('2d'),
			w = canvas.width,
			h = canvas.height;

		c.lineWidth = 1;
		c.lineCap = "round";
		speed = 10;
		how_many = 3;

		main_color = Math.ceil(Math.random() * 360);
		triangle_array = [
			[0, 0, 0, h, w, h],
			[0, 0, w, 0, w, h]
		];
		points_array = [];
		current_number = 2;

		Point = function(x, y, toX, toY) {
			this.x = x;
			this.y = y;
			this.toX = toX;
			this.toY = toY;

			this.color = create_color();
		}

		Point.prototype.animate = function() {
			c.beginPath();
			c.strokeStyle = this.color;

			c.arc(this.x, this.y, 1, 0, Math.PI * 2, false);
			c.stroke();
			// console.log(this);
		}

		first_point = new Point(0, 0, w, h);
		TweenMax.to(first_point, speed, {
			x: first_point.toX,
			y: first_point.toY,
			ease: "linear"
		});

		for (var i = 0; i < Math.pow(3, how_many)-1; i++) {
			math_part(triangle_array[i]);
		}

		function math_part(triangle) {
			center_gravity = [(triangle[0] + triangle[2] + triangle[4]) / 3, (triangle[1] + triangle[3] + triangle[5]) / 3];
			triangle_array.push([triangle[0], triangle[1], triangle[2], triangle[3], center_gravity[0], center_gravity[1]]);
			triangle_array.push([triangle[0], triangle[1], triangle[4], triangle[5], center_gravity[0], center_gravity[1]]);
			triangle_array.push([triangle[2], triangle[3], triangle[4], triangle[5], center_gravity[0], center_gravity[1]]);

			no1 = new Point(center_gravity[0], center_gravity[1], triangle[0], triangle[1]);
			no2 = new Point(center_gravity[0], center_gravity[1], triangle[2], triangle[3]);
			no3 = new Point(center_gravity[0], center_gravity[1], triangle[4], triangle[5]);
			points_array.push(no1);
			points_array.push(no2);
			points_array.push(no3);

			TweenMax.to(no1, speed, {
				x: no1.toX,
				y: no1.toY,
				ease: "linear"
			});
			TweenMax.to(no2, speed, {
				x: no2.toX,
				y: no2.toY,
				ease: "linear"
			});
			TweenMax.to(no3, speed, {
				x: no3.toX,
				y: no3.toY,
				ease: "linear"
			});
		}

		function move() {
			/* add TweenLite ticker EventListener */
			TweenLite.ticker.addEventListener('tick', loop);

			function loop() {
				// c.clearRect(0, 0, w, h);
				first_point.animate();
				for (var i = 0; i < points_array.length; i++) {
					points_array[i].animate();
				}
			}
		}

		move();

	}
}

function create_color() {
	// main_color = Math.ceil(Math.random()*255);
	this.hue = Math.ceil(Math.random() * 360);
	this.saturation = (Math.random() * 80) + 20 + "%";
	this.lightness = 50 + "%";

	return "hsl(" + main_color + "," + this.saturation + "," + this.lightness + ")";
}