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
	"name": "Svg Polygon Layout",
	"image_source": "img/svg_polygon.jpg",
	"url": "wonder/svg_polygon/",
	"content": "<span>Main Idea:</span> <br> Svg Polygon Layout <br> <br> <span>Plugin:</span> <br> Snap.js D3.js <br> <br> <span>Main Skill:</span> <br> Polygon layout and animation <br> <br> <span>Date:</span> <br> 2016/9 <br> <br> Image Source:   <br> https://wall.alphacoders.com/big.php?i=731778  <br> https://wall.alphacoders.com/big.php?i=662361  <br> https://wall.alphacoders.com/big.php?i=665318  <br> https://wall.alphacoders.com/big.php?i=692002  <br> https://wall.alphacoders.com/big.php?i=678651  <br> https://wall.alphacoders.com/big.php?i=681590  <br> https://wall.alphacoders.com/big.php?i=445259  <br> https://wall.alphacoders.com/big.php?i=552395  <br> https://wall.alphacoders.com/big.php?i=552399  <br> https://wall.alphacoders.com/big.php?i=552394  <br> https://wall.alphacoders.com/big.php?i=445275  <br> https://wall.alphacoders.com/big.php?i=643334  <br> <br> First time using snap with d3, has a lots of dirty codes.  <br> next time will be better<br>"
}, {
	"name": "SVG Customized Polygon",
	"image_source": "img/SVG_customized_polygon.jpg",
	"url": "wonder/SVG_customized_polygon/",
	"content": "<span>Main Idea:</span> <br> SVG Customized Polygon <br> <br> <span>Plugin:</span> <br> Snap.js <br> <br> <span>Main Skill:</span> <br> use json type to make create polygon layout more easier <br> <br> <span>Date:</span> <br> 2016/9 <br> <br> Image source:  <br> https://wall.alphacoders.com/big.php?i=552399  <br> https://wall.alphacoders.com/big.php?i=552395  <br> https://wall.alphacoders.com/big.php?i=552393  <br> https://wall.alphacoders.com/big.php?i=552394  <br> <br> use json type to make create polygon layout more functional<br>"
}, {
	"name": "Stained Glass",
	"image_source": "img/Stained Glass.jpg",
	"url": "wonder/Stained_Glass/",
	"content": "<span>Main Idea:</span> <br> Stained Glass <br> <br> <span>Plugin:</span> <br> delaunay.js <br> <br> <span>Main Skill:</span> <br> Delaunay Traingulation Method <br> <br> <span>Date:</span> <br> 2016/9 <br> <br> Inspire: http://codepen.io/FlyC/pen/wzZVRB  <br> <br> modify DelaunayJS' example<br> <br>"
}, {
	"name": "Leaf Vein",
	"image_source": "img/leaf_vein.jpg",
	"url": "wonder/Leaf_Vein/",
	"content": "<span>Main Idea:</span> <br> Leaf Vein <br> <br> <span>Plugin:</span> <br> TweenMax <br> <br> <span>Main Skill:</span> <br> Canvas animation, center of gravity <br> <br> <span>Date:</span> <br> 2016/9 <br> <br> Divide view_port to two triangle,<br> then find each triangle's gravity center,<br> again, and again.<br> <br>"
}, {
	"name": "Floating Words",
	"image_source": "img/Floating Words.jpg",
	"url": "wonder/Floating_Words/",
	"content": "<span>Main Idea:</span> <br> Floating Words <br> <br> <span>Plugin:</span> <br> No-plugin <br> <br> <span>Main Skill:</span> <br> Canvas fillText, measureText <br> <br> <span>Date:</span> <br> 2016/9 <br> <br> Words source: lyrics of song \"Red Like Roses part II\" - RWBY Theme <br> determine size and speed by it frequency in lyrics <br> hope you like it : ) <br>"
}, {
	"name": "Chess Board",
	"image_source": "img/chess_board.jpg",
	"url": "wonder/chess_board/",
	"content": "<span>Main Idea:</span> <br> Chess Board <br> <br> <span>Plugin:</span> <br> No-plugin <br> <br> <span>Main Skill:</span> <br> CSS Background linear-gradient <br> <br> <span>Date:</span> <br> 2016/8 <br> <br> code from: <br> https://gist.github.com/orioltf/2566558 <br>"
}, {
	"name": "Firefly Firework",
	"image_source": "img/bezier_line.jpg",
	"url": "wonder/BezierLine/",
	"content": "<span>Main Idea:</span><br> Firefly Firework <br> <br> <span>Plugin:</span><br> No-plugin <br> <br> <span>Main Skill:</span><br> Canvas Animation <br><br> <span>Date:</span> <br> 2015/07 <br> <br> Use bezier line function to create firework-like curve line, <br> then use hsl function create firefly-like sparkle. <br> <pre></pre>"
}, {
	"name": "Flashlight",
	"image_source": 'img/Flashlight.jpg',
	"url": "wonder/Flashlight/",
	"content": "<span>Main Idea:</span><br> Flashlight <br> <br> <span>Plugin:</span><br> Jquery <br> <br> <span>Main Skill:</span><br> Canvas Global Composite Operation <br><br> <span>Date:</span> <br> 2016/03 <br> <br> Use canvas' global composite operation to clip the dark we want to light up, <br> still have some efficacy problem <br> <pre></pre>"
}, {
	"name": "Line Animation",
	"image_source": 'img/line_animation.jpg',
	"url": "wonder/line_animation/",
	"content": "<span>Main Idea:</span><br> Line Animation <br> <br> <span>Plugin:</span><br> No plugin. <br> <br> <span>Main Skill:</span><br> Svg Moving Line <br><br> <span>Date:</span> <br> 2014/10 <br> <br> Use stroke-dashoffset and the setting of dasharray to create illusion <br> You may see some square, but they didn't every exist. <br> <pre></pre>"
}, {
	"name": "Pure CSS Particle Background",
	"image_source": 'img/particle_background.jpg',
	"url": "wonder/particle_background/",
	"content": "<span>Main Idea:</span><br> Pure CSS Particle Background <br> <br> <span>Plugin:</span><br> No plugin. <br> <br> <span>Main Skill:</span><br> CSS linear-gradient <br><br> <span>Date:</span> <br> 2016/07 <br> <br> Use CSS color attribute \"linear-gradient\" draw a small size background then repeat it. <br> <pre></pre>"
}, {
	"name": "Black Block",
	"image_source": 'img/Black Block.jpg',
	"url": "wonder/Black_Block/",
	"content": "<span>Main Idea:</span><br> Black Block <br> <br> <span>Plugin:</span><br> No plugin. <br> <br> <span>Main Skill:</span><br> Canvas point setting and line practice <br><br> <span>Date:</span> <br> 2015/09 <br> <br> count block's four points then scale it by minus each coordinate, <br> rotate it with css <br>"
}, {
	"name": "Parallax RWBY transform",
	"image_source": 'img/Parallax_RWBY_transform.jpg',
	"url": "wonder/Parallax_RWBY_transform/",
	"content": "<span>Main Idea:</span><br> Parallax RWBY transform <br> <br> <span>Plugin:</span><br> No plugin. <br> <br> <span>Main Skill:</span><br> CSS perspective. <br><br> <span>Date:</span> <br> 2016/05 <br> <br> use pure css create parallax effect with depth of field.   <br> and a little bit pop-up photo browser. <br> <br> image source: pixiv.net <br> <pre></pre>"
}, {
	"name": "Parallax RWBY with content",
	"image_source": 'img/Parallax_RWBY_with_content.jpg',
	"url": "wonder/Parallax_RWBY_with_content/",
	"content": "<span>Main Idea:</span><br> Parallax RWBY with content <br> <br> <span>Plugin:</span><br> No plugin <br> <br> <span>Main Skill:</span><br> CSS image attachment <br><br> <span>Date:</span> <br> 2016/05 <br> <br> Pure css simple parallax effect demo, without  javascript. <br> <br> images source: pixiv <br> content soure: rwby wiki <br> <pre></pre>"
}, {
	"name": "Customized Snowflake",
	"image_source": 'img/Customized Snowflake.jpg',
	"url": "wonder/Customized_Snowflake/",
	"content": "<span>Main Idea:</span><br> Customized Snowflake <br> <br> <span>Plugin:</span><br> No plugin <br> <br> <span>Main Skill:</span><br> Math application <br><br> <span>Date:</span> <br> 2016/12 <br> <br> Every lines you see are straight, but it seems that there's a curve between each axis. Have some bugs when setting the point number and axis length but it's still cool I thought :D <br> <br> Hope you enjoyed! <br> <pre></pre>"
}, {
	"name": "Paper Texture",
	"image_source": 'img/paper_texture.jpg',
	"url": "wonder/paper_texture/",
	"content": "<span>Main Idea:</span><br> Paper Texture <br> <br> <span>Plugin:</span><br> No plugin <br> <br> <span>Main Skill:</span><br> CSS Linear-gradient <br><br> <span>Date:</span> <br> 2014/09 <br> <br> Use two kind of white create a paper texture like background. <br> <pre></pre>"
}, {
	"name": "HappyBirthday",
	"image_source": 'img/HappyBirthday.jpg',
	"url": "wonder/HappyBirthday/",
	"content": "<span>Main Idea:</span><br> HappyBirthday <br> <br> <span>Plugin:</span><br> No plugin <br> <br> <span>Main Skill:</span><br> CSS perspective effect and transform rotate <br><br> <span>Date:</span> <br> 2015/10 <br> <br> Yep, just say happ birthday to myself! <br> <pre></pre>"
}, {
	"name": "RWD RWBY Big Block Menu with pop box",
	"image_source": 'img/RWD RWBY Big Block Menu with pop box.jpg',
	"url": "wonder/RWD_RWBY_Big_Block_Menu_with_pop_box/",
	"content": "<span>Main Idea:</span><br> RWD RWBY Big Block Menu with pop box <br> <br> <span>Plugin:</span><br> No plugin <br> <br> <span>Main Skill:</span><br> RWD and media practice <br><br> <span>Date:</span> <br> 2016/08 <br> <br> Resize and clikc it to see RWD effect <br> <br> Image Source: http://www.pixiv.net/ <br> Introduction Source: http://rwby.wikia.com/wiki/RWBY_Wiki <br> <pre></pre>"
}, {
	"name": "Colorful Worm Paint",
	"image_source": 'img/Colorful Worm Paint.jpg',
	"url": "wonder/Colorful_Worm_Paint/",
	"content": "<span>Main Idea:</span><br> Colorful Worm Paint <br> <br> <span>Plugin:</span><br> No plugin <br> <br> <span>Main Skill:</span><br> Canvas without clean view <br><br> <span>Date:</span> <br> 2015/07 <br> <br> modify the code from \"Firefly Firework\" <br> try to heart user's eyes (? <br> but it's cool and some kind of beautiful, right? <br>"
}, {
	"name": "Rain Tunnel",
	"image_source": 'img/Rain Tunnel.jpg',
	"url": "wonder/Rain_Tunnel/",
	"content": "<span>Main Idea:</span><br> Rain Tunnel <br> <br> <span>Plugin:</span><br> No plugin <br> <br> <span>Main Skill:</span><br> Canvas vertor practice <br><br> <span>Date:</span> <br> 2015/10 <br> <br> Base on Max Ruigewaard's \"Rain on HTML5 Canvas\"  code <br> http://codepen.io/ruigewaard/pen/JHDdF <br> <br> change some code and write some comment use my poor English, <br> add hover effect to make it looks like a tunnel <br> <br> Hope you enjoyed, Rain Tunnel : D <br>"
}, {
	"name": "Snow of Sakura",
	"image_source": 'img/sakura.jpg',
	"url": "wonder/sakura/",
	"content": "<span>Main Idea:</span><br> Rain of Sakura <br> <br> <span>Plugin:</span><br> No plugin <br> <br> <span>Main Skill:</span><br> Canvas Animation <br><br> <span>Date:</span> <br> 2016/06 <br> <br> One day I saw a very beautiful photo of sakura <br> so, here it is :D"
}, {
	"name": "千流星",
	"image_source": 'img/千流星.jpg',
	"url": "wonder/千流星/",
	"content": "<span>Main Idea:</span><br> 千流星 <br> <br> <span>Plugin:</span><br> No plugin <br> <br> <span>Main Skill:</span><br> Canvas Animation <br><br> <span>Date:</span> <br> 2016/03 <br> <br> imitate from \"http://codepen.io/dleatherman/pen/kAzgw\" <br> <br> \"Thousands of Shooting Start\" <br> I'm always imagining a sky has a thousands of shooting stars, which means have a thousands of wishes could make all dreams come true :D <br> Well I know if it really happened probably means the end of the world, <br> but I thought it could be beautiful anyhow, right :D? <br> <br> By imitating other fantastic programmers, well, truly advance my own skill and understand the shortage of myself. <br> I hope someday I could become the one who is imitated by someone 0w- <br>"
}, {
	"name": "Ink Blood Nightmares",
	"image_source": 'img/Ink Blood Nightmares.jpg',
	"url": "wonder/Ink_Blood_Nightmares/",
	"content": "<span>Main Idea:</span><br> Ink Blood Nightmares <br> <br> <span>Plugin:</span><br> No plugin <br> <br> <span>Main Skill:</span><br> Canvas Animation <br><br> <span>Date:</span> <br> 2016/03 <br> <br> modify from \"千流星\" <br> <br> Alright I know I'm not that good at naming something,  <br> but.. whatever. <br> it takes a lots of time for me to enhance the efficacy. <br> Hope you like it :D <br> <br> The  Chinese name comes from a novel called \"日落後\" write by 星子 <br> is totally not the translation of the English name. <br>"
}, {
	"name": "Pure CSS TurnStile",
	"image_source": 'img/Pure CSS TurnStile.jpg',
	"url": "wonder/Pure_CSS_TurnStile/",
	"content": "<span>Main Idea:</span><br> Pure CSS TurnStile <br> <br> <span>Plugin:</span><br> No plugin <br> <br> <span>Main Skill:</span><br> CSS Animation and perspective <br><br> <span>Date:</span> <br> 2016/06 <br> <br> rotate combine perspective attribute."
}, {
	"name": "Music Vitualization",
	"image_source": 'img/Music Vitualization.jpg',
	"url": "wonder/Music_Vitualization/",
	"content": "<span>Main Idea:</span><br> Music Vitualization <br> <br> <span>Plugin:</span><br> No plugin <br> <br> <span>Main Skill:</span><br> Javescript Audio Data Vitualization <br><br> <span>Date:</span> <br> 2016/08 <br> <br> Practice from \"https://www.patrick-wied.at/blog/how-to-create-audio-visualizations-with-javascript-html\" <br> get music data, then vitualize it (?)"
}, {
	"name": "Line Fall",
	"image_source": 'img/Line Fall.jpg',
	"url": "wonder/Line_Fall/",
	"content": "<span>Main Idea:</span><br> Line Fall <br> <br> <span>Plugin:</span><br> No plugin <br> <br> <span>Main Skill:</span><br> Canvas Animation <br><br> <span>Date:</span> <br> 2016/05 <br> <br> at first, all lines seem to move around randomly, but before long all lines go vertical, and few seconds later,   <br> <br> line fall shows up. <br>"
}, {
	"name": "Round and Round",
	"image_source": 'img/round and round.jpg',
	"url": "wonder/round_and_round/",
	"content": "<span>Main Idea:</span><br> Round and Round <br> <br> <span>Plugin:</span><br> TweenMax <br> <br> <span>Main Skill:</span><br> Canvas Animation <br><br> <span>Date:</span> <br> 2016/08 <br> <br> when I first think about \"Round and round\", this song comes to my mind:   <br> https://youtu.be/VQFhd3X8p6g?t=21s     <br> yeah, Adventure Time's song: Food Chain Song   <br> <br> basically, this project is a practice about canvas animation combine with tweenmax,     <br> the rotation part is the most weird part, you have to use save() and restore() to decide origin of canvas each time. <br> <br> Color I use hsl(), rather than rgb() it could make the same saturation  color. <br>"
}];

document.addEventListener("DOMContentLoaded", function() {

	new Vue({
		el: '#main_body',
		data: {
			list: wonders_detail,
			loadedNumber: 0,
			loadingProcess: 0,
			loadingContext: "0%",
			loadingStyle: "",
			detailClass: "detail",
			detailStyle: "",
			detailHTML: ""
		},
		watch: {
			loadingProcess: function(now) {
				this.loadingContext = now + "%";
			}
		},
		methods: {
			setBackground: function(input) {
				return "background-image: url('" + input + "'')";
			},
			wonderClick: function(key) {
				this.detailClass = 'detail clicked';

				this.detailHTML = this.list[key].content;
				this.detailStyle = "background-image: url("+this.list[key].image_source+");";

				_block_items[2].onclick = function() {
					window.open(this.list[key].url, '_blank');
				};
			},
			imageLoaded: function() {
				var total = this.list.length;
				this.loadedNumber++;
				this.loadingProcess = Math.round(this.loadedNumber * 10000 / total) / 100;

				if (this.loadedNumber == this.list.length) {
					this.loadingStyle = "opacity: 0; pointer-events:none;";
				}
			},
			back: function() {
				this.detailClass = "detail";
			}
		}
	});

	/* images loader  */
	var scene = document.getElementsByClassName('scene'),
		parallaxs = [],
		main_body = $("#main_body"),
		main_btn = document.getElementsByClassName('title')[0],
		about_body = $("#about_body"),
		about_btn = document.getElementsByClassName('about')[0],
		creator_body = $("#creator_body"),
		creator_btn = document.getElementsByClassName('creator')[0],
		now_at = 1,
		to_top = document.getElementById('to_top');

	var wonders = document.querySelectorAll(".wonder"),
		_block_items = [document.querySelector('#_img'), document.querySelector('#_content'), document.querySelector('#_preview_btn')];

	/* this parallax_create() function include to_top_btn part */
	parallax_create(scene, parallaxs, main_body);

	/* create wonder click event */
	for (var key in wonders) {
		create_wonder_click_event(wonders[key], parseInt(key), detail);
	}

	function create_wonder_click_event(wonder, number, detail) {

		return;

		wonder.onclick = function() {};
	}

	main_btn.onclick = function() {
		if (now_at == 2) {
			about_body.css({
				zIndex: -1,
				transform: 'translateX(100vw)'
			});
		} else if (now_at == 3) {
			creator_body.css({
				zIndex: -1,
				transform: 'translateX(100vw)'
			});
			about_body.css({
				zIndex: -1,
				transform: 'translateX(100vw)'
			});
		}
		to_top.style.transform = "translateX(0vw)";
		main_body.css({
			zIndex: 1,
			left: '0vw'
		});

		now_at = 1;
	};
	about_btn.onclick = function() {
		if (now_at == 1) {
			to_top.style.transform = "translateX(-100vw)";
			main_body.css({
				zIndex: -1,
				left: '-100vw'
			});
		} else if (now_at == 3) {
			creator_body.css({
				zIndex: -1,
				transform: 'translateX(100vw)'
			});
		}
		about_body.css({
			zIndex: 1,
			transform: 'translateX(0vw)'
		});

		now_at = 2;
	};
	creator_btn.onclick = function() {
		if (now_at == 2) {
			about_body.css({
				zIndex: -1,
				transform: 'translateX(-100vw)'
			});
		} else if (now_at == 1) {
			to_top.style.transform = "translateX(-100vw)";
			main_body.css({
				zIndex: -1,
				left: '-100vw'
			});
			about_body.css({
				zIndex: -1,
				transform: 'translateX(-100vw)'
			});
		}
		creator_body.css({
			zIndex: 1,
			transform: 'translateX(0vw)'
		});

		now_at = 3;
	};

	back.onclick = function() {
		return;
		detail.style.opacity = 0;
		_block_items.forEach(function(item) {
			item.style.transform = "translateX(-50px)";
			item.style.opacity = 0;
		});
		setTimeout(function() {
			detail.style.zIndex = -2;
		}, 150);
	};

});

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
	};
}