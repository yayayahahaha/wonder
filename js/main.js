window.onload = function() {
	var scene = document.getElementsByClassName('scene');
	var parallaxs = [];

	for (var i = 0; i < scene.length; i++) {
		var parallax = new Parallax(scene[i], {
			calibrateX: true,
			calibrateY: true,
			invertX: Math.random() > 0.5 ? true:false,
			invertY: Math.random() > 0.5 ? true:false,
			limitX: false,
			limitY: false,
			scalarX: 40,
			scalarY: 50,
			frictionX: 0.01,
			frictionY: 0.01,
			originX: 0,
			originY: 1
		});
		parallaxs.push(parallax);
	}
}