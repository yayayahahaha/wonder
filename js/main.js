window.onload = function() {
	var scene = document.getElementsByClassName('scene');
	var parallaxs = [];
	var main_body = $("#main_body");

	for (var i = 0; i < scene.length; i++) {
		var parallax = new Parallax(scene[i], {
			relativeInput: true,
			calibrateX: true,
			calibrateY: true,
			invertX: Math.random() > 0.5 ? true : false,
			invertY: Math.random() > 0.5 ? true : false,
			limitX: false,
			limitY: false,
			scalarX: Math.random() * 20 - Math.random() * 8,
			scalarY: Math.random() * 20 - Math.random() * 8,
			frictionX: 0.01,
			frictionY: 0.01,
			originX: 1,
			originY: 1
		});
		parallaxs.push(parallax);
	}
	parallaxs.push(new Parallax(document.getElementById('egg'), {
		relativeInput: true,
		calibrateX: false,
		calibrateY: false,
		invertX: true,
		invertY: true,
		limitX: false,
		limitY: false,
		scalarX: 500,
		scalarY: 500,
		frictionX: 0.01,
		frictionY: 0.01,
		originX: 1,
		originY: 1
	}));

	main_body.mousewheel(function() {

	});
}