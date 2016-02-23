window.requestAnimFrame = (function(callback) {
	return	window.requestAnimationFrame ||
		 	window.webkitRequestAnimationFrame ||
		 	window.mozRequestAnimationFrame ||
		 	window.oRequestAnimationFrame ||
		 	window.msRequestAnimationFrame ||
		 	function(callback) {
		 		window.setTimeout(callback, 1000/60);
		 	};
})();


myCircle = function() {
	this.x = 200,
	this.y = 275,
	this.width = 100,
	this.height = 200;
};



step1 = function() {
	var context = document.getElementById('myCanvas').getContext('2d');
	context.clearRect(0,0, 500, 500);
	drawCircle(Stuff.circle, context);
	updateCircle(Stuff.circle, "x");

	if (Stuff.circle.x === 300) {
		Stuff.animation.status = "break";
	}
};

step2 = function() {
	console.log("spet1");
	var context = document.getElementById('myCanvas').getContext('2d');
	context.clearRect(0,0, 500, 500);
	drawCircle(Stuff.circle, context);
	updateCircle(Stuff.circle, "y");

	if (Stuff.circle.y === 400) {
		Stuff.animation.status = "break";
	}

};

step3 = function() {
	console.log("aew");
};

function initCircle() {
	Stuff.circle = new myCircle();
}

function updateCircle(circle, direction) {
	if(direction==="x") {
		circle.x = circle.x + 1;
	} else {
		circle.y = circle.y + 1;
	}
}

Stuff = {
	animation: {
		status: "continue"
	},
	steps : [step1, step2, step3]
};

Stuff.circle = new myCircle();

myRectangle = function() {
	this.x = 200,
	this.y = 275,
	this.width = 100,
	this.height = 50,
	this.borderWidth = 5,
	this.velocityX = 0;
	this.velocityY = 0;
	this.orientarion = 0;

};

function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function drawRectangle(myRectangle, context) {
	context.beginPath();
	context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
	context.fillStyle = myRectangle.fillStyle;
	context.fill();
	context.lineWidth = myRectangle.borderWidth;
	context.strokeStyle = 'black';
	context.stroke();
}


function test() {
	return true;
}

function drawCircle(circle, context) {
	context.beginPath();
	context.arc(circle.x, circle.y, 70, 0, 2 * Math.PI, true);
	context.fill();
}

function init() {
	Stuff.rectangles = [];
	for(var i=0; i<20; i++) {
		Stuff.rectangles[i] = new myRectangle();
		Stuff.rectangles[i].x = 0;
		Stuff.rectangles[i].y = 0;
		Stuff.rectangles[i].width = 10;
		Stuff.rectangles[i].height = 10;
		Stuff.rectangles[i].borderWidth = 1;
		Stuff.rectangles[i].fillStyle = get_random_color();
	}

	Stuff.centerX = 250;
	Stuff.centerY = 250;

	Stuff.rectangles2 = [];
	for(var i=0; i<20; i++) {
		Stuff.rectangles2[i] = new myRectangle();
		Stuff.rectangles2[i].x = 0;
		Stuff.rectangles2[i].y = 0;
		Stuff.rectangles2[i].width = 20;
		Stuff.rectangles2[i].height = 20;
		Stuff.rectangles2[i].borderWidth = 1;
		Stuff.rectangles2[i].fillStyle = get_random_color();
	}
}

function draw(context) {
	drawRectangle(Stuff.rectangle, context); 
}

function updateRectangle(rectangle) {
	rectangle.velocityX += Math.random()*0.001*(Stuff.centerX - rectangle.x);
	rectangle.velocityY += Math.random()*0.001*(Stuff.centerY - rectangle.y);
	rectangle.x += rectangle.velocityX;
	rectangle.y += rectangle.velocityY;
}

function moveRectangle(rec, posx, posy) {
	
	rec.x = posx;
	rec.y = posy;
}

function myUpdateRectangle(rec) {

	if(rec.x < 490 && rec.y == 0) {
		rec.orientarion = 0;
		rec.x +=2;
	}

	if(rec.x == 490 && rec.y < 490) {
		rec.x = 490;
		rec.y += 2;
	}

	if(rec.x <= 490 && rec.y == 490) {
		rec.x += -2;
		/*console.log(rec.x, rec.y);*/
	}

	if(rec.x ==0 && rec.y >=0 ){
		rec.y += -2;
	}

}

function Animation() {
	//membros privados
	var _canvas = {
		width: '500px',
		height: '500px'
	};
	var _step = 0;

	return {
		getContext: function(idCanvas) {
			return document.getElementById(idCanvas).getContext('2d');
		},
		getCanvas: function() {
			return _canvas;
		},
		getStep: function() {
			return _step;
		},
		nextStep: function() {
			Stuff.animation.status = "continue";
			animar(Stuff.steps[_step]);
			_step += 1;
		}

	};
}

animation = new Animation();

function animate() {
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');


	var canvas2 = document.getElementById('myCanvas2');
	var context2 = canvas2.getContext('2d');

	//clear
	context.clearRect(0,0, canvas.width, canvas.height);
	context2.clearRect(0,0, canvas.width, canvas.height);

	//update
	for(var i=0; i<1; i++) {
		myUpdateRectangle(Stuff.rectangles[i]);
	}

		for(var i=0; i<1; i++) {
		updateRectangle(Stuff.rectangles2[i]);
	}
	//render
	for(var i=0; i<1; i++) {
		drawRectangle(Stuff.rectangles[i], context);
	}	

	for(var i=0; i<1; i++) {
		drawRectangle(Stuff.rectangles2[i], context2);
	}	

	if(Stuff.animation.status === "continue") {
		/*console.log(Stuff.animation.status);*/
		requestAnimFrame(function() {
			animate();
		});	
	}
	
}
var s;

function animar(animateFunction) {
	if(Stuff.animation.status == "continue") {
		requestAnimFrame(function() {
			animateFunction();	
			animar(animateFunction);
		});	
	}
}



window.onload = function() {
	init();
	//animate();
	//animar(Stuff.steps[0]);
};

function pauseAnimation() {
	if(Stuff.animation.status == "continue") {
		Stuff.animation.status = "pause";
	} else {
		Stuff.animation.status = "continue";
	}
}