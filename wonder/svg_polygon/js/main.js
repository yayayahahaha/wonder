window.onload = function(argument) {
	w = window.innerWidth;
	h = window.innerHeight;

	path_array = [],
		traingle_array = [];
	border_width = 5,
		// border_color = 'snow';
		border_color = 'black';
	now_who = "hello";
	position_info = [{}];

	setTimeout(function() {
		now_who = "";
	}, 1700);

	image_src = ["image/img(1).jpg",
		"image/img(2).jpg",
		"image/img(3).jpg",
		"image/img(4).jpg",
		"image/img(5).jpg",
		"image/img(6).jpg",
		"image/img(7).jpg",
		"image/img(8).jpg",
		"image/img(9).jpg",
		"image/img(10).jpg",
		"image/img(11).jpg",
		"image/img(12).jpg"
	];



	points = {
		"lt": [0, 0],
		"rt": [w, 0],
		"rb": [w, h],
		"lb": [0, h],
		"cc": [w / 2, h / 2],
		"ct": [(0 + w + w / 2) / 3, (0 + 0 + h / 2) / 3],
		"cr": [(w + w + w / 2) / 3, (0 + h + h / 2) / 3],
		"cb": [(0 + w + w / 2) / 3, (h + h + h / 2) / 3],
		"cl": [(0 + 0 + w / 2) / 3, (0 + h + h / 2) / 3]
	};

	d3.select("body")
		.append("svg")
		.attr({
			"width": w,
			"height": h
		});
	var svg = d3.select("svg");

	create_pattern(svg, 1, w / 2, h / 2, 0, 0);
	create_pattern(svg, 2, w / 2, h / 2, 0, h / 2);
	create_pattern(svg, 3, points["cl"][0], h, 0, 0);
	create_pattern(svg, 4, w / 2, h / 2, 0, 0);
	create_pattern(svg, 5, w / 2, h / 2, w / 2, 0);
	create_pattern(svg, 6, w, points["ct"][1], 0, 0);
	create_pattern(svg, 7, w / 2, h / 2, w / 2, 0);
	create_pattern(svg, 8, w / 2, h / 2, w / 2, h / 2);
	create_pattern(svg, 9, points["cl"][0], h, points['cr'][0], 0);
	create_pattern(svg, 10, w / 2, h / 2, 0, h / 2);
	create_pattern(svg, 11, w / 2, h / 2, w / 2, h / 2);
	create_pattern(svg, 12, w, points["ct"][1], 0, points['cb'][1]);


	// point_checker(svg);
	// draw_all_line(svg);

	draw_triangle(svg, points["lt"], points["rt"], points["ct"], "6", 0);
	draw_triangle(svg, points["lt"], points["ct"], points["cc"], "4", 100);
	draw_triangle(svg, points["lt"], points["cc"], points["cl"], "1", 200);
	draw_triangle(svg, points["lt"], points["cl"], points["lb"], "3", 300);
	draw_triangle(svg, points["cl"], points["cc"], points["lb"], "2", 400);
	draw_triangle(svg, points["lb"], points["cc"], points["cb"], "10", 500);
	draw_triangle(svg, points["lb"], points["cb"], points["rb"], "12", 600);
	draw_triangle(svg, points["cb"], points["cc"], points["rb"], "11", 700);
	draw_triangle(svg, points["cc"], points["cr"], points["rb"], "8", 800);
	draw_triangle(svg, points["cr"], points["rt"], points["rb"], "9", 900);
	draw_triangle(svg, points["cc"], points["rt"], points["cr"], "7", 1000);
	draw_triangle(svg, points["ct"], points["rt"], points["cc"], "5", 1100);

	d3.selectAll('path')
		.transition()
		.duration(200)
		.delay(1700)
		.style('opacity', 0.3);


	/* snap part */
}

function create_pattern(svg, number, width, height, x, y) {
	position_info.push({});
	position_info[number].width = width;
	position_info[number].height = height;
	position_info[number].x = x;
	position_info[number].y = y;

	svg.append("defs")
		.append('pattern')
		.attr({
			'id': 'pattern-id' + number,
			'patternUnits': 'userSpaceOnUse',
			'x': x,
			'y': y,
			'width': width,
			'height': height
		})
		.append("image")
		.attr({
			"id": 'image-id' + number,
			"xlink:href": image_src[number - 1],
			'width': width,
			'height': height,
			"preserveAspectRatio": "xMidYMid slice"
		});
}

function draw_triangle(svg, start_coordinate, middle_coordinate, end_coordinate, img_id, delay) {
	svg.append('path')
		.attr({
			"id": "triangle-id" + img_id,
			"d": make_path_straight(start_coordinate, middle_coordinate, end_coordinate),
			"stroke": border_color,
			"stroke-width": border_width,
			"fill": "url(#pattern-id" + img_id + ")"
		}).style({
			"opacity": 0,
			'z-index': 1
		})
		.transition()
		.duration(150)
		.delay(delay)
		.style({
			"opacity": 1,
			'z-index': 1

		})
		.transition()
		.duration(150)
		.delay(delay + 300)
		.style({
			"opacity": 0.15,
			'z-index': 1
		})
		.each(function(index, el) {
			this.coordinate = [start_coordinate, middle_coordinate, end_coordinate];
			this.number = img_id;
			this.onclick = function() {
				if (now_who == "") {
					/* set opacity and animation part */
					this.style.opacity = 1;
					document.getElementById('image-id' + img_id).style.opacity = 1;
					var s = Snap("#" + this.id);
					s.animate({
						d: "M" + w * 0.1 + " " + h * 0.1 + "L" + w * 0.9 + " " + h * 0.1 + " L" + w * 0.9 + " " + h * 0.9 + " L" + w * 0.1 + " " + h * 0.9 + "z"
					}, 400);

					/* change z-index part */
					svg.select('use')
						.remove();
					svg.append('use')
						.attr({
							"xlink:href": '#' + this.id
						});

					/* change pattern and image viewport part */
					var pattern = Snap("#pattern-id" + img_id);
					pattern.animate({
						x: w * 0.1,
						y: h * 0.1,
						width: w * 0.8,
						height: h * 0.8
					}, 400);

					/*					svg.select("#image-id" + img_id)
											.attr("preserveAspectRatio", "");*/
					var image = Snap("#image-id" + img_id);
					image.animate({
						width: w * 0.8,
						height: h * 0.8,
					}, 400);

					now_who = img_id;
				} else if ("triangle-id" + now_who == this.id) {
					Snap("#" + this.id).animate({
						d: make_path_straight(this.coordinate[0], this.coordinate[1], this.coordinate[2])
					}, 400);

					/* change pattern and image viewport part */
					var pattern = Snap("#pattern-id" + img_id);
					pattern.animate({
						x: position_info[now_who].x,
						y: position_info[now_who].y,
						width: position_info[now_who].width,
						height: position_info[now_who].height
					}, 400);

					svg.select("#image-id" + img_id)
						.transition()
						.delay(500)
						.duration(1)
						.attr("preserveAspectRatio", "xMidYMid slice");
					var image = Snap("#image-id" + img_id);
					image.animate({
						width: position_info[now_who].width,
						height: position_info[now_who].height,
					}, 400);

					setTimeout(function() {
						document.getElementById('image-id' + now_who).style.opacity = 0.3;
						now_who = "";
					}, 400);

					/* clear now_who */
				} else {

				}
			}

			this.onmouseover = function() {
				if (now_who) {} else {
					document.getElementById('image-id'+this.number).style.opacity = 1;
					this.style.opacity = 1;
				}
			}
			this.onmouseout = function() {
				if (now_who) {} else {
					document.getElementById('image-id'+this.number).style.opacity = 0.3;
					this.style.opacity = 1;
				}
			}
		});
}

function draw_all_line(svg) {
	/* center */
	draw_line(svg, points["cc"], points["rt"], 300);
	draw_line(svg, points["cc"], points["rb"], 300);
	draw_line(svg, poinpoints["lt"], ts["cc"], 300);
	draw_line(svg, points["cc"], points["lb"], 300);

	/* border */
	draw_line(svg, points["lt"], points["rt"], 300);
	draw_line(svg, points["rt"], points["rb"], 300);
	draw_line(svg, points["rb"], points["lb"], 300);
	draw_line(svg, points["lb"], points["lt"], 300);

	/*center top*/
	draw_line(svg, points["ct"], points["cc"], 500);
	draw_line(svg, points["ct"], points["rt"], 500);
	draw_line(svg, points["ct"], points["lt"], 500);

	/*center right*/
	draw_line(svg, points["cr"], points["cc"], 500);
	draw_line(svg, points["cr"], points["rt"], 500);
	draw_line(svg, points["cr"], points["rb"], 500);

	/*center bottom*/
	draw_line(svg, points["cb"], points["cc"], 500);
	draw_line(svg, points["cb"], points["rb"], 500);
	draw_line(svg, points["cb"], points["lb"], 500);

	/*center left*/
	draw_line(svg, points["cl"], points["cc"], 500);
	draw_line(svg, points["cl"], points["lt"], 500);
	draw_line(svg, points["cl"], points["lb"], 500);
}

function draw_line(svg, start_coordinate, end_coordinate, delay) {
	count_length = 0;
	svg.append('path')
		.attr({
			"d": make_path_straight(start_coordinate, end_coordinate),
			"stroke": border_color,
			"stroke-width": border_width
		}).each(function(index, el) {
			count_length = this.getTotalLength();
		})
		.attr({
			'stroke-dasharray': count_length,
			'stroke-dashoffset': count_length
		})
		.transition()
		.duration(500)
		.delay(delay)
		.attr('stroke-dashoffset', 0);
}

function make_path_straight() {
	d = "";
	if (arguments.length == 1) {
		console.log("please enter more than 1 parameter");
	} else if (arguments.length == 2) {
		// line part
		return "M" + arguments[0][0] + " " + arguments[0][1] + " L" + arguments[1][0] + " " + arguments[1][1] + "";
	} else {
		// polygon part
		return "M" + arguments[0][0] + " " + arguments[0][1] + " L" + arguments[1][0] + " " + arguments[1][1] + " L" + arguments[2][0] + " " + arguments[2][1] + " z";
	}
}

function point_checker(svg) {
	for (key in points) {
		svg.append('circle')
			.attr({
				'cx': points[key][0],
				'cy': points[key][1],
				'r': 10,
				'fill': '#ff0063',
				'stroke': '#ff0063',
				'stroke-width': '5px'
			});
	}
}

// var line_measure = line_good.getTotalLength();
// setAttribute("stroke-dasharray", line_measure);
// setAttribute("stroke-dashoffset", line_measure);