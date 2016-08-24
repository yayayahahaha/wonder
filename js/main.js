/* create image loader, 
step1: load all images
step2: put each image to each wonder
step3: try change _img when click wonder without reload
 */

var team_rwby = {
	"ruby": "http://puu.sh/oXDLO/7b5a932ef1.jpg",
	"weiss": "http://puu.sh/oXDNd/169a74d36c.jpg",
	"blake": "http://puu.sh/oXDNQ/bec8c790e4.jpg",
	"yang": "http://puu.sh/oXDO9/3c169032d0.jpg"
};

var wonders_detail = [{
	"name": "Ruby",
	"image_source": team_rwby["ruby"],
	"url": "http",
	"content": "Ruby Rose"
}, {
	"name": "Weiss",
	"image_source": team_rwby["weiss"],
	"url": "http",
	"content": "Weiss Schnee"
}, {
	"name": "Blake",
	"image_source": team_rwby["blake"],
	"url": "http",
	"content": "Blake Belladona"
}, {
	"name": "Yang",
	"image_source": team_rwby["yang"],
	"url": "http",
	"content": "Yang Xio Long"
}, {
	"name": "Ruby",
	"image_source": team_rwby["ruby"],
	"url": "http",
	"content": "Ruby Rose"
}, {
	"name": "Weiss",
	"image_source": team_rwby["weiss"],
	"url": "http",
	"content": "Weiss Schnee"
}, {
	"name": "Blake",
	"image_source": team_rwby["blake"],
	"url": "http",
	"content": "Blake Belladona"
}, {
	"name": "Yang",
	"image_source": team_rwby["yang"],
	"url": "http",
	"content": "Yang Xio Long"
}, {
	"name": "Ruby",
	"image_source": team_rwby["ruby"],
	"url": "http",
	"content": "Ruby Rose"
}, {
	"name": "Weiss",
	"image_source": team_rwby["weiss"],
	"url": "http",
	"content": "Weiss Schnee"
}, {
	"name": "Blake",
	"image_source": team_rwby["blake"],
	"url": "http",
	"content": "Blake Belladona"
}, {
	"name": "Yang",
	"image_source": team_rwby["yang"],
	"url": "http",
	"content": "Yang Xio Long"
}, {
	"name": "Ruby",
	"image_source": team_rwby["ruby"],
	"url": "http",
	"content": "Ruby Rose"
}, {
	"name": "Weiss",
	"image_source": team_rwby["weiss"],
	"url": "http",
	"content": "Weiss Schnee"
}, {
	"name": "Blake",
	"image_source": team_rwby["blake"],
	"url": "http",
	"content": "Blake Belladona"
}, {
	"name": "Yang",
	"image_source": team_rwby["yang"],
	"url": "http",
	"content": "Yang Xio Long"
}, {
	"name": "Ruby",
	"image_source": team_rwby["ruby"],
	"url": "http",
	"content": "Ruby Rose"
}, {
	"name": "Ruby",
	"image_source": team_rwby["ruby"],
	"url": "http",
	"content": "Ruby Rose"
}, {
	"name": "Weiss",
	"image_source": team_rwby["weiss"],
	"url": "http",
	"content": "Weiss Schnee"
}, {
	"name": "Blake",
	"image_source": team_rwby["blake"],
	"url": "http",
	"content": "Blake Belladona"
}];

window.onload = function() {
	/* images loader  */
	var images = [],
		scene = document.getElementsByClassName('scene'),
		parallaxs = [],
		main_body = $("#main_body"),
		to_top = document.getElementById('to_top'),
		loaded_images = 0;

	var wonders = document.getElementsByClassName('wonder'),
		detail = document.getElementById('detail'),
		back = document.getElementById('back'),
		_block_items = [document.getElementById('_img'), document.getElementById('_content'), document.getElementById('_preview_btn')];

	for (var i = 0; i < wonders_detail.length; i++) {
		scene[i].getElementsByTagName('p')[0].innerHTML = wonders_detail[i].name;

		load_image(scene[i].getElementsByTagName('img')[0], wonders_detail[i].image_source, i, wonders_detail.length);
	}
	function load_image(img, src, number, total) {
		img.src = src;
		images.push(img);
		img.onload = function() {
			loaded_images++;
			if (loaded_images == total) {
				console.log("done!");
				document.getElementsByClassName('loading')[0].style.opacity = 0;
				setTimeout(function() {
					document.getElementsByClassName('loading')[0].style.display = "none";
					document.getElementsByClassName('loading')[0].innerHTML = "";
				}, 200);
			}else{
				// console.log((loaded_images*100/total)+"%");
			}
		}
	}

	/* this parallax_create() function include to_top_btn part */
	parallax_create(scene, parallaxs, main_body);

	/* create wonder click event */

	for (key in wonders) {
		create_wonder_click_event(wonders[key], parseInt(key), detail);
	}

	count = 0;

	function create_wonder_click_event(wonder, number, detail) {
		wonder.onclick = function() {
			console.log(this.getElementsByTagName('img')[0]);
			// this.getElementsByTagName('img')[0].src = wonders_detail[count % 4].image_source;
			detail.getElementsByClassName('_img')[0].style.background = "url("+this.getElementsByTagName('img')[0].src+")";
			detail.getElementsByClassName('_content')[0].innerHTML = wonders_detail[number].content;
			count++;

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

function parallax_create(scene, parallaxs, main_body) {


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