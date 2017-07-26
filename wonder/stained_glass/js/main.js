window.onload = function(argument) {
	var canvas = document.getElementById("canvas");
	canvas.width = innerWidth;
	canvas.height = innerHeight;

	w = canvas.width,
		h = canvas.height;

	var ctx = canvas.getContext("2d");

	if (w > h) {
		point_number = h * 2;
	} else {
		point_number = w * 2;
	}
	main_color = Math.ceil(Math.random() * 255);
	ctx.lineWidth = 3;
	ctx.strokeStyle = 'snow';
	var vertices = new Array(point_number),
		i, x, y;

	init();

	document.getElementsByTagName('body')[0].onclick = function() {
		main_color = Math.ceil(Math.random() * 255);
		init();
	}

	function init() {
		for (i = vertices.length; i--;) {
			x = Math.random() * w;
			y = Math.random() * h;
			vertices[i] = [x, y];
		}
		vertices.push([0, 0]);
		vertices.push([w, 0]);
		vertices.push([w, h]);
		vertices.push([0, h]);

		var triangles = Delaunay.triangulate(vertices);

		for (i = triangles.length; i;) {
			ctx.beginPath();
			--i;
			ctx.moveTo(vertices[triangles[i]][0], vertices[triangles[i]][1]);
			--i;
			ctx.lineTo(vertices[triangles[i]][0], vertices[triangles[i]][1]);
			--i;
			ctx.lineTo(vertices[triangles[i]][0], vertices[triangles[i]][1]);
			ctx.closePath();
			ctx.stroke();
			ctx.fillStyle = create_color();
			ctx.fill();
		}
	}

	function create_color() {
		this.hue = Math.ceil(Math.random() * 360);
		this.saturation = (Math.random() * 50) + 50 + "%";
		this.lightness = 60 - (Math.random() * 20) + "%";

		return "hsl(" + main_color + "," + this.saturation + "," + this.lightness + ")";
	}

}