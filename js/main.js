var wonders_detail = [{
	"name": "Name",
	"image_source": "http:",
	"url": "http",
	"content": ""
}, {
	"name": "Name",
	"image_source": "http:",
	"url": "http",
	"content": ""
}, {
	"name": "Name",
	"image_source": "http:",
	"url": "http",
	"content": ""
}, {
	"name": "Name",
	"image_source": "http:",
	"url": "http",
	"content": ""
}, {
	"name": "Name",
	"image_source": "http:",
	"url": "http",
	"content": ""
}];

window.onload = function() {
	/* this parallax_create() function include to_top_btn part */
	parallax_create();

	/* create wonder click event */
	var wonders = document.getElementsByClassName('wonder'),
		detail = document.getElementById('detail'),
		back = document.getElementById('back'),
		_block_items = [document.getElementById('_img'), document.getElementById('_content'), document.getElementById('_preview_btn')];
	for (key in wonders) {
		create_wonder_click_event(wonders[key], parseInt(key), detail);
	}

	function create_wonder_click_event(wonder, number, detail) {
		wonder.onclick = function() {
			detail.style.opacity = 1;
			detail.style.zIndex = 1;
			_block_items.forEach(function(item) {
				item.style.transform = "translateX(0px)";
				item.style.opacity = 1;
			});
		}
	}
	back.onclick = function() {
		detail.style.opacity = 0;
		_block_items.forEach(function(item) {
			item.style.transform = "translateX(-50px)";
			item.style.opacity = 0;
		})
		setTimeout(function() {
			detail.style.zIndex = -2;
		}, 150);
	}
}

function parallax_create() {
	var scene = document.getElementsByClassName('scene');
	var parallaxs = [];
	var main_body = $("#main_body"),
		to_top = document.getElementById('to_top');

	for (var i = 0; i < scene.length; i++) {
		var parallax = new Parallax(scene[i], {
			calibrateX: true,
			calibrateY: true,
			invertX: Math.random() > 0.5 ? true : false,
			invertY: Math.random() > 0.5 ? true : false,
			scalarX: 45,
			scalarY: 45,
			frictionX: 0.01,
			frictionY: 0.01
		});
		parallaxs.push(parallax);
	}
	parallaxs.push(new Parallax(document.getElementById('egg'), {
		// relativeInput: true,
		calibrateX: true,
		calibrateY: true,
		invertX: true,
		invertY: true,
		scalarX: 5000,
		scalarY: 5000,
		frictionX: 0.03,
		frictionY: 0.03
	}));

	/* start to_top_part */
	main_body.mousewheel(function(e) {
		if (e.deltaY == 1) {
			if (main_body.scrollTop() - e.deltaFactor <= 0) {
				to_top.style.opacity = 0;
			}
		} else {
			if (main_body.scrollTop() + e.deltaFactor >= 0) {
				to_top.style.opacity = 1;
			}
		}
	});

	to_top.onclick = function() {
		main_body.animate({
				scrollTop: 0
			},
			400,
			function() {
				to_top.style.opacity = 0;
			});
	}
}