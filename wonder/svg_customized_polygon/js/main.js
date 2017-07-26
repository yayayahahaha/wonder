window.onload = function(argument) {
	w = window.innerWidth,
		h = window.innerHeight;

	/* svg init */
	var paper = Snap(w, h);

	var team_rwby = {
	"ruby": "http://puu.sh/oXDLO/7b5a932ef1.jpg",
	"weiss": "http://puu.sh/oXDNd/169a74d36c.jpg",
	"blake": "http://puu.sh/oXDNQ/bec8c790e4.jpg",
	"yang": "http://puu.sh/oXDO9/3c169032d0.jpg"
};


	/* this polygons' array include coordinates and image's source  */
	var polygons = [];
	polygons.push({
		"coordinates": [
			[0, 0],
			[w * 0.6, 0],
			[0, h *0.5]
		],
		"strokeStyle": "black",
		"strokeWidth": 10,
		"image_src": 'R.png'
	}, {
		"coordinates": [
			[0, h *0.5 ],
			[w * 0.3, h *0.25],
			[w * 0.55, h],
			[0, h]
		],
		"strokeStyle": "black",
		"strokeWidth": 10,
		"image_src": 'Y.png'
	}, {
		"coordinates": [
			[w * 0.3, h *0.25],
			[w * 0.75, h *0.55],
			[w * 0.55, h],
		],
		"strokeStyle": "black",
		"strokeWidth": 10,
		"image_src": 'B.png'
	}, {
		"coordinates": [
			[w * 0.55, h],
			[w, 0],
			[w, h],
		],
		"strokeStyle": "black",
		"strokeWidth": 10,
		"image_src": 'R.png'
	}, {
		"coordinates": [
			[w * 0.6, 0],
			[w, 0],
			[w * 0.75, h *0.55],
			[w * 0.3, h *0.25],
		],
		"strokeStyle": "black",
		"strokeWidth": 10,
		"image_src": 'W.png'
	});

	for (var i = 0; i < polygons.length; i++) {
		make_polygon_layout(paper, polygons[i]);
	}
}

function make_polygon_layout() {
	paper = arguments[0];
	polygon = arguments[1];
	tempA = [];
	for (var i = 0; i < polygon.coordinates.length; i++) {
		tempA[i] = polygon.coordinates[i];
	}
	/* get largest and smallest x coordinate */
	tempA.sort(function(a, b) {
		return a[0] - b[0];
	});
	sX = tempA[0][0];
	bX = tempA[tempA.length - 1][0];

	/* get largest and smallest ycoordinate */
	tempA.sort(function(a, b) {
		return a[1] - b[1];
	});
	sY = tempA[0][1];
	bY = tempA[tempA.length - 1][1];

	polygon.startPoint = [sX, sY];
	polygon.endPoint = [bX, bY];

	polygon.width = polygon.endPoint[0] - polygon.startPoint[0];
	polygon.height = polygon.endPoint[1] - polygon.startPoint[1];

	var pattern = paper.image(polygon.image_src, 0, 0, polygon.width, polygon.height)
		.attr("preserveAspectRatio", "xMidYMid slice")
		.pattern({
			'x': polygon.startPoint[0],
			'y': polygon.startPoint[1],
			'width': polygon.width,
			'height': polygon.height
		}).attr('viewBox', "");

	var path = paper.path({
		"d": make_path(polygon.coordinates),
		"strokeWidth": polygon.strokeWidth,
		'stroke-linejoin': "round",
		'stroke': polygon.strokeStyle,
		"fill": pattern,
	});

	path.click(function(event) {

	});

}

function make_path() {
	d = "M";
	coordinates = arguments[0];
	for (var i = 0; i < coordinates.length; i++) {
		if (i == 0) {
			d += coordinates[i][0] + " " + coordinates[i][1]
		} else {
			d += "L" + coordinates[i][0] + " " + coordinates[i][1]
		}
	}
	return d + "z";
	// return d;
}

/*var paper = Snap(200,200);
var pattern = paper.image("logo.svg",0,0,50,50)
   .pattern(0,0,50,50);
var path = paper.path("M0,0h200v200h-200z").attr("fill", pattern);*/