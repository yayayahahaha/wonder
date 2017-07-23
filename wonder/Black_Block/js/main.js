window.onload = function(argument) {

	var request = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(cb) {
		return setTimeout(cb, 30)
	};

	w = window.innerWidth,
		h = window.innerHeight;

	var canvas = document.getElementById('c');
	canvas.width = w,
		canvas.height = h;

	var c = canvas.getContext("2d"),
		x = 100,
		y = 100;
		frameCount = 0;

	lineNumber = 3,
		lineObjectArray = [];

	var random = function() {
		tempI = arguments[0];
		return Math.random() * tempI;
	}

	window.document.body.onclick = function(argument) {

	}

	/* start from startPoint, end at endPoint. During the animation, use previousPoint and nextPoint to caculate it.
		then use bezierPoint 1 and 2 to make the curve.  */
	var Line = function() {
		this.startPoint = [];
		this.endPoint = [];

		/* up ilne */
		this.startPoint1 = [0, 0];
		this.nextStartPoint1 = [];
		this.endPoint1 = [w, 0];
		this.nextEndPoint1 = [];

		/* right line */
		this.startPoint2 = [w, 0];
		this.nextStartPoint2 = [w, h];
		this.endPoint2 = [w, h];
		this.nextEndPoint2 = [];

		/* down line */
		this.startPoint3 = [0, h];
		this.nextStartPoint3 = [w, h];
		this.endPoint3 = [w, h];
		this.nextEndPoint3 = [];

		/* left line */
		this.startPoint4 = [0, 0];
		this.nextStartPoint4 = [0, h];
		this.endPoint4 = [0, h];
		this.nextEndPoint4 = [];

		this.delayTime = 0;
		this.cap = "round";
		this.lineWidth = 10;
		this.speed = 3;
		this.color = "black";
	}

	Line.prototype.update = function(frame, whichLine) {

		this.drawLine(this.startPoint1, this.endPoint1, 1);
		this.drawLine(this.startPoint2, this.endPoint2, 2);
		this.drawLine(this.startPoint3, this.endPoint3, 3);
		this.drawLine(this.startPoint4, this.endPoint4, 4);

		this.updatePoint();

		// console.log(this.startPoint[1] - h/2);
		if (this.startPoint1[1] - h >= 1) {
			frameCount = 0;
			this.initializePoint();
		};

	};

	Line.prototype.initializePoint = function() {
		this.startPoint = [];
		this.endPoint = [];

		/* up ilne */
		this.startPoint1 = [0, 0];
		this.nextStartPoint1 = [];
		this.endPoint1 = [w, 0];
		this.nextEndPoint1 = [];

		/* right line */
		this.startPoint2 = [w, 0];
		this.nextStartPoint2 = [w, h];
		this.endPoint2 = [w, h];
		this.nextEndPoint2 = [];

		/* down line */
		this.startPoint3 = [0, h];
		this.nextStartPoint3 = [w, h];
		this.endPoint3 = [w, h];
		this.nextEndPoint3 = [];

		/* left line */
		this.startPoint4 = [0, 0];
		this.nextStartPoint4 = [0, h];
		this.endPoint4 = [0, h];
		this.nextEndPoint4 = [];		
	};

	Line.prototype.updatePoint = function() {
		this.nextStartPoint1[0] = this.startPoint1[0];
		this.nextStartPoint1[1] = this.startPoint1[1] + 2 * this.speed;
		this.nextEndPoint1[0] = this.endPoint1[0];
		this.nextEndPoint1[1] = this.endPoint1[1] + 2 * this.speed;

		this.nextStartPoint2[0] = this.startPoint2[0] - (2*(w/h)) * this.speed;
		this.nextStartPoint2[1] = this.startPoint2[1];
		this.nextEndPoint2[0] = this.endPoint2[0] - (2*(w/h)) * this.speed;
		this.nextEndPoint2[1] = this.endPoint2[1];

		this.nextStartPoint3[0] = this.startPoint3[0];
		this.nextStartPoint3[1] = this.startPoint3[1]-2 * this.speed;
		this.nextEndPoint3[0] = this.endPoint3[0];
		this.nextEndPoint3[1] = this.endPoint3[1] - 2 * this.speed;

		this.nextStartPoint4[0] = this.startPoint4[0] + (2*(w/h)) * this.speed;
		this.nextStartPoint4[1] = this.startPoint4[1];
		this.nextEndPoint4[0] = this.endPoint4[0]+ (2*(w/h)) * this.speed;
		this.nextEndPoint4[1] = this.endPoint4[1];

		this.startPoint1 = this.nextStartPoint1;
		this.startPoint2 = this.nextStartPoint2;
		this.startPoint3 = this.nextStartPoint3;
		this.startPoint4 = this.nextStartPoint4;

		this.endPoint1 = this.nextEndPoint1;
		this.endPoint2 = this.nextEndPoint2;
		this.endPoint3 = this.nextEndPoint3;
		this.endPoint4 = this.nextEndPoint4;
	};

	Line.prototype.drawLine = function() {
		this.startPoint[0] = arguments[0][0];
		this.startPoint[1] = arguments[0][1];
		this.endPoint[0] = arguments[1][0];
		this.endPoint[1] = arguments[1][1];


		c.beginPath();
		c.moveTo(this.startPoint[0], this.startPoint[1]);
		c.lineTo(this.endPoint[0], this.endPoint[1]);
		c.lineWidth = this.lineWidth;
		c.strokeStyle = this.color;
		c.stroke();
		// c.endPath();
	};

	function init(lineNumber) {
		for (var i = 0; i < lineNumber; i++) {
			lineObjectArray[i] = new Line();
		};
	}

	function loop() {

		c.fillStyle = 'rgba(235,235,235,0.03)';
		// c.fillStyle = 'rgba(20,20,20,0.04)';
		c.fillRect(0, 0, w, h);
		for (var i = 0; i < lineObjectArray.length; i++) {
			lineObjectArray[i].update(frameCount, i);
		};

		frameCount++;
		window.requestAnimationFrame(loop);
	}

	init(lineNumber);
	loop();


	/*
			switch (i) {
				case 0:
					this.nextStartPoint = [this.startPoint[0], this.startPoint[1] + 10];
					this.nextEndPoint = [this.endPoint[0], this.endPoint[1] + 10];
					this.drawLine();
				case 1:
					this.nextStartPoint = [this.startPoint[0] - 10, this.startPoint[1]];
					this.nextEndPoint = [this.endPoint[0] - 10, this.endPoint[1]];
					this.drawLine();
				case 2:
					this.nextStartPoint = [this.startPoint[0], this.startPoint[1] - 10];
					this.nextEndPoint = [this.endPoint[0], this.endPoint[1] - 10];
					this.drawLine();
				case 3:
					this.nextStartPoint = [this.startPoint[0] + 10, this.startPoint[1]];
					this.nextEndPoint = [this.endPoint[0] + 10, this.endPoint[1]];
					this.drawLine();
			}
	*/


}

/*
	how to create point:
	c.fillStyle = color;
	c.fillRect(x, y, width, height);
	c.lineWidth = integer;
	c.strokeStyle = color;
	c.stroke();

	how to create black mask:
	c.fillStyle = 'rgba(0,0,0,0.08)';
  	c.fillRect(0, 0, w, h);

  	how to create a line:
	context.beginPath();
	context.moveTo(100, 20); //this is the start point
	context.lineTo(200, 160); //draw a straight line from start point to this point
	context.quadraticCurveTo(230, 200, 250, 120);  // draw a quadratic curve from previous point
	context.bezierCurveTo(290, -40, 300, 200, 400, 150); /draw a bezier curve from previous point 
	context.lineTo(450, 200); //draw a striaght line from previous point
	
	context.lineWidth = integer; 
	context.strokeStyle = color;
	context.stroke();


	change color use hsl:
	c.strokeStyle = 'hsla(' + ((frame) * 5) % 360 + ', ' + "100%" + ', ' + random(100).toString() + "%" + ', 1)';


*/