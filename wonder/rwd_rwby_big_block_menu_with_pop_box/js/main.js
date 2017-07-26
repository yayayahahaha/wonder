window.onload = function(argument) {
	var words = [" “	As a girl, I wanted to be just like those heroes in the books. Someone who fought for what was right and protected people who couldn't protect themselves!	” —Ruby, on her motivations for becoming a Huntress",
		"“My father was not the start of our name, and I refuse to let him be the end of it.	” —Weiss, regarding her future",
		"“	With all due respect, you need to start taking some larger strides. Until then, I'd rather avoid any unnecessary attention. I want people to see me for who I am, not what I am.	” —Blake, to Ozpin on keeping her identity a secre ",
		"“	I still want to know what happened to my mother and why she left me, but I will never let that search control me.	” —Yang, to Blake Belladonna"
	]

	var blocks = document.getElementsByClassName('block');

	for (var key in blocks) {
		if (typeof blocks[key] === "object") {
			switch (key) {
				case "0":
					blocks[key].onclick = function() {
						console.log("R");
						pop_mask_function("r", 0);
					}
					break;
				case "1":
					blocks[key].onclick = function() {
						console.log("W");
						pop_mask_function("w", 2);
					}
					break;
				case "2":
					blocks[key].onclick = function() {
						console.log("B");
						pop_mask_function("b", 2);
					}
					break;
				case "3":
					blocks[key].onclick = function() {
						console.log("Y");
						pop_mask_function("y", 3);
					}
					break;
			}
		}
	}

	var pop_mask = document.getElementsByClassName('pop_mask')[0],
		pop_img = document.getElementsByClassName('pop_img')[0],
		pop_content = document.getElementsByClassName('pop_content')[0];

	pop_mask.onclick = function() {
		pop_mask.style.opacity = 0;

		setTimeout(function() {
			pop_img.className = "pop_img ";
			pop_mask.style.zIndex = -1;
			pop_mask.className = "pop_mask"
		}, 300);
	}

	function pop_mask_function(name, number) {
		pop_mask.style.opacity = 1;
		pop_mask.style.zIndex = 3;
		pop_mask.className += " pop_mask_animation";
		pop_img.className = "pop_img " + name + "_photo";
		pop_content.innerHTML = words[number];
	}
}