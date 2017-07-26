window.onload = function(argument) {
	var canvas = document.getElementById('c');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	if (canvas.getContext) {
		var c = canvas.getContext('2d'),
			w = canvas.width,
			h = canvas.height;

		c.strokeStyle = 'red';
		c.fillStyle = 'pink';
		c.lineWidth = 20;
		c.lineCap = "round";

		main_color = Math.ceil(Math.random()*360);
		arcs = [];
		arc_number = 75;


		function create_color() {
			this.hue = Math.ceil(Math.random() * 360);
			this.saturation = (Math.random() * 80) + 20 + "%";
			this.lightness = 50 + "%";

			return "hsl(" + main_color + "," + this.saturation + "," + this.lightness + ")";
		}

		Arc = function() {
			this.x = Math.random() * w;
			this.y = Math.random() * h;

			this.radius = Math.random() * 300;

			this.start_angle = Math.random() * 2 * Math.PI;
			this.end_angle = Math.random()*2*Math.PI;

			this.counterClockwise = Math.random() - 0.5 > 0 ? true : false;

			this.color = create_color();

			this.line_width = 10;

			this.rotation = 0;
		}

		Arc.prototype.animate = function() {
			c.save();

			c.beginPath();
			c.strokeStyle = this.color;
			c.lineWidth = this.line_width;

			c.translate(this.x, this.y);
			c.rotate(this.rotation * Math.PI / 180);

			c.arc(0, 0, this.radius, this.start_angle, this.end_angle, this.counterClockwise);
			c.stroke();

			c.restore();
		}

		function animation_setting(arcs) {

			/* setting animating way */
			arcs.forEach(function(arc) {
				TweenMax.to(arc, Math.ceil(Math.random()*10)+5, {
					rotation: 360,
					repeat: -1,
					ease: Power0.easeNone
				});
			});

		}

		function move(arcs) {
			/* add TweenLite ticker EventListener */
			TweenLite.ticker.addEventListener('tick', loop);

			function loop() {
				c.clearRect(0, 0, w, h);
				arcs.forEach(function(arc) {
					arc.animate();
				})
			}

		}

		/* initialize */
		for (var i = 0; i < arc_number; i++) {
			arcs.push(new Arc());
		}

		animation_setting(arcs);
		move(arcs);


	}
}