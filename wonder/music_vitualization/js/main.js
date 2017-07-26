 window.onload = function() {
	var canvas = document.getElementById('c');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	var c = canvas.getContext('2d'),
		w = canvas.width,
		h = canvas.height,
		main_color = Math.ceil(Math.random() * 360);

	c.strokeStyle = 'rgba(255,255,255,0.2)';
	c.fillStyle = 'rgba(0,0,0,0.1)';
	c.lineWidth = 1;

	function create_color() {
		this.hue = Math.ceil(Math.random() * 360);
		this.saturation = (Math.random() * 20) + 80 + "%";
		this.lightness = 50 + "%";

		return "hsl(" + hue + "," + this.saturation + "," + this.lightness + ")";
	}


	var ctx = new AudioContext();
	var audio = document.getElementById('myAudio');
	var audioSrc = ctx.createMediaElementSource(audio);
	var analyser = ctx.createAnalyser();
	// we have to connect the MediaElementSource with the analyser 
	audioSrc.connect(analyser);
	audioSrc.connect(ctx.destination);
	// we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)

	// frequencyBinCount tells you how many values you'll receive from the analyser
	var frequencyData = new Uint8Array(analyser.frequencyBinCount);

	// we're ready to receive some data!
	// loop
	function renderFrame() {
		requestAnimationFrame(renderFrame);
		// update data in frequencyData
		analyser.getByteFrequencyData(frequencyData);
		// render frame based on values in frequencyData
		// console.log(frequencyData);

		c.fillRect(0, 0, w, h);

		frequencyData.forEach(function(value, index) {
			value *= 2;


			c.beginPath();
			/*right side*/
			c.moveTo(w / 2 + index, h / 2);
			c.lineTo(w / 2 + index, value + h / 2);
			c.moveTo(w / 2 + index, h / 2);
			c.lineTo(w / 2 + index, h / 2 - value);
			/*left side*/
			c.moveTo(w / 2 - index, h / 2);
			c.lineTo(w / 2 - index, value + h / 2);
			c.moveTo(w / 2 - index, h / 2);
			c.lineTo(w / 2 - index, h / 2 - value);

			/*right side*/
			c.moveTo(w / 2, h / 2 + index);
			c.lineTo(value + w / 2, h / 2 + index);
			c.moveTo(w / 2, h / 2 + index);
			c.lineTo(w / 2 - value, h / 2 + index);
			/*left side*/
			c.moveTo(w / 2, h / 2 - index);
			c.lineTo(value + w / 2, h / 2 - index);
			c.moveTo(w / 2, h / 2 - index);
			c.lineTo(w / 2 - value, h / 2 - index);
			c.stroke();
		});

	}
	audio.play();
	renderFrame();


};