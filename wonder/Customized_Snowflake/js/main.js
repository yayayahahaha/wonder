$(document).ready(function() {

	window.onresize = function(argument) {
		/*console.log();*/
	}

	var canvas = $('#canvas')[0];
	var oriCenter = {
		x: window.innerWidth / 2,
		y: window.innerHeight / 2
	}

	if (window.innerWidth > window.innerHeight) {
		canvas.width = window.innerWidth * 2;
		canvas.height = window.innerWidth * 2;
		$("._rotate").css({
			top: -canvas.height / 2 + oriCenter.y,
			left: -canvas.width / 2 + oriCenter.x
		});
	} else {
		canvas.width = window.innerHeight;
		canvas.height = window.innerHeight;
		$("._rotate").css({
			top: -canvas.height / 2 + oriCenter.y,
			left: -canvas.width / 2 + oriCenter.x
		});
	}



	checked = 0,
		check_distance_lock = true;

	if (canvas.getContext) {
		var c = canvas.getContext('2d');
		var w = canvas.width;
		var h = canvas.height;
		c.strokeStyle = 'rgba(174,194,224,0.5)';
		// c.strokeStyle = "rgba(255,255,255,1)";
		c.lineCap = 'round';



		var axis_number = 3,
			divide_equally = true,
			point_number = 24,
			axis_length,
			line_weight = 1,
			center_point = {
				x: w / 2,
				y: h / 2
			};



		function createArray() {
			if (check_distance_lock) {
				point_distance = axis_length / point_number;
			}
			point_array = [];
			for (var i = 0; i < axis_number; i++) {
				point_array[i] = [];

				for (var j = 0; j < point_number; j++) {
					point_array[i][j] = {
						x: 0,
						y: 0
					};
				};
			};

			drawAxis(axis_number);
		}

		function drawAxis(axis_number) {
			var each_distance = 360 / axis_number;
			/*			for (var i = 0; i <= axis_number - 1; i++) {
							c.beginPath();
							c.moveTo(center_point.x, center_point.y);
							c.lineTo(center_point.x + Math.cos((each_distance * i / 360) * (Math.PI * 2)) * axis_length, center_point.y + Math.sin((each_distance * i / 360) * (Math.PI * 2)) * axis_length);
							c.stroke();
							c.closePath();
						};*/

			createPoint(each_distance);
		}

		function createPoint() {
			var each_distance = arguments[0];
			// console.log(each_distance);
			for (var i = 0; i < axis_number; i++) {
				for (var j = 0; j < point_number; j++) {
					point_array[i][j].x = center_point.x + Math.cos((each_distance * i / 360) * (Math.PI * 2)) * point_distance * j;
					point_array[i][j].y = center_point.y + Math.sin((each_distance * i / 360) * (Math.PI * 2)) * point_distance * j;
				};
			};

			drawPoint();
		}

		function drawPoint() {
			for (var i = 0; i < axis_number; i++) {
				for (var j = 0; j < point_number; j++) {
					c.beginPath();
					c.arc(point_array[i][j].x, point_array[i][j].y, 0, 0, Math.PI * 2, false);
					c.stroke();
					c.closePath();
				};
			};

			connectPoint();
		}

		function connectPoint() {
			for (var i = 0; i < axis_number; i++) {
				for (var j = 0; j < point_number; j++) {
					c.beginPath();
					c.moveTo(point_array[i][j].x, point_array[i][j].y);
					// c.lineTo(100, 100);
					c.lineTo(point_array[(i + 1) % axis_number][(point_number - 1) - j].x, point_array[(i + 1) % axis_number][(point_number - 1) - j].y);
					c.stroke();
					c.closePath();
				};
			};

			// nextPoint();
		}

		function init() {
			c.lineWidth = line_weight;

			createArray();
		}



		function controllerPart() {


			var axis_controller_display = document.getElementById("axis_count"),
				point_controller_display = document.getElementById("point_count"),
				point_distance_controller_display = document.getElementById("point_distance_count"),
				axis_length_controller_display = document.getElementById("axis_length_count"),
				line_weight_display = document.getElementById("line_weight_count"),
				rotate_speed_display = document.getElementById("rotate_speed_count");

			var axis_controller = document.getElementById('axis_controller'),
				point_controller = document.getElementById('point_controller'),
				point_distance_controller = document.getElementById('point_distance_controller'),
				axis_length_controller = document.getElementById("axis_length_controller"),
				line_weight_controller = document.getElementById("line_weight_controller"),
				rotate_speed_controller = document.getElementById("rotate_speed_controller");

			if (window.innerWidth > window.innerHeight) {
				axis_length = window.innerHeight / 2;
			} else {
				axis_length = window.innerWidth / 2;
			}

			rotate_speed_controller.onmousedown = function() {
				checked = 1;
				this.onmousemove = function() {
					if (checked == 1) {
						$("canvas").css({
							"-webkit-animation": "_rotate_animation " + this.value / 10 + "s linear infinite",
							"-moz-animation": "_rotate_animation " + this.value / 10 + "s linear infinite",
							"animation": "_rotate_animation " + this.value / 10 + "s linear infinite"
						});

						rotate_speed_display.innerHTML = this.value/10 + "s";
					}
				}
			}


			axis_length_controller_display.innerHTML = axis_length;
			axis_length_controller.value = axis_length;

			line_weight_controller.onmousedown = function() {
				checked = 1;
				this.onmousemove = function() {
					if (checked == 1) {
						c.clearRect(0, 0, w, h);
						line_weight_display.innerHTML = this.value;
						line_weight = this.value;
						init();
					}
				}
			}


			axis_controller.onmousedown = function() {
				checked = 1;
				this.onmousemove = function() {
					if (checked == 1) {
						c.clearRect(0, 0, w, h);
						axis_controller_display.innerHTML = this.value;
						axis_number = this.value;
						init();
					};
				}
			};

			point_controller.onmousedown = function() {
				checked = 1;
				check_distance_lock = true;
				this.onmousemove = function() {
					if (checked == 1) {
						c.clearRect(0, 0, w, h);
						point_controller_display.innerHTML = this.value - 2;
						point_distance_controller_display.innerHTML = this.value - 2;
						point_number = this.value;

						point_distance_controller.value = this.value;

						init();
					};
				}
			};

			point_distance_controller.onmousedown = function() {
				checked = 1;
				check_distance_lock = false;
				this.onmousemove = function() {
					if (checked == 1) {
						c.clearRect(0, 0, w, h);
						point_controller_display.innerHTML = this.value - 2;
						point_distance_controller_display.innerHTML = this.value - 2;
						point_number = this.value;

						point_controller.value = this.value;

						init();
					};
				}
			};

			axis_length_controller.onmousedown = function() {
				checked = 1;
				check_distance_lock = true;
				this.onmousemove = function() {
					if (checked == 1) {
						c.clearRect(0, 0, w, h);
						axis_length_controller_display.innerHTML = this.value;
						axis_length = this.value;

						axis_length_controller = this.value;

						init();
					};
				}
			}

			document.getElementsByTagName("body")[0].onmouseup = function(event) {
				checked = 0;
			}
		};

		controllerPart();
		init();

		/* color shinne part */
		var color_count = 0;
		setInterval(function() {
			c.clearRect(0, 0, w, h);
			c.beginPath();
			c.strokeStyle = "rgba(" + (255) + "," + (255) + "," + (255) + "," + (Math.sin((color_count / 10) % 360) * 0.5 + 0.7) + ")";
			c.stroke();
			init();
			color_count++;
		}, 24);

		var random = function() {
			tempI = arguments[0];
			return Math.random() * tempI;
		}

	}
});

/*canvas {
  -moz-animation: _rotate_animation 30s linear infinite;
  -webkit-animation: _rotate_animation 30s linear infinite;
  animation: _rotate_animation 30s linear infinite;
}*/