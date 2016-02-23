//configurações gerais;

//Enum que será usado para controlar o status da anima��o
AnimationStatus = Object.freeze({
	"CONTINUE" : 1,
	"BREAK" : 0
});

ImageElements = Object.freeze({
	"HOST" : { name:"host", dx: 0, textDy: 25 },
	"HOST2" : { name:"host", dx: 0, textDy: 10, text: "13pt Arial" },
	"SERVER": { name: "server", dx: 100, textDy: 25 },
	"ROUTER": { name: "router", dx: 200, textDy: -85 },
	"SWITCH": { name: "router", dx: 300, textDy: -85 },
	"ARROW" : { name: "arrow", dx: 850 }
});


//Elementos da página
var img = new Image();
img.src = "../../img/layout_grid.gif";

var back = 0;
var bloco = 0;
var passos = 0;
var k = 0;

var currentPlayer;
var thisSound;

var sound = new Audio("");
var aud = 1;

function Animator() {
	this.canvas = {
		width : 1152,
		height : 768,
		widthBase : 480,
		heightBase : 320,
	};
	this.canvasBg = document.getElementById("myCanvas");
	this.canvasAnimation = document.getElementById("myCanvas2");
	this.contextBg = this.canvasBg.getContext("2d");
	this.contextAnimation = this.canvasAnimation.getContext("2d");
	this.aspectRadio = this.canvas.width / this.canvas.height;
	this.status = AnimationStatus.BREAK;
	this.steps = [];
	this.step = 0;
	this.radioX = this.canvas.width / this.canvas.widthBase;
	this.radioY = this.canvas.height / this.canvas.heightBase;
	this.messageText = document.getElementById("msg");
	this.backSteps = [];
	this.audios = [];

	// provided by Paul Irish
	window.requestAnimFrame = (function(callback) {
		return window.requestAnimatorFrame || window.webkitRequestAnimatorFrame || window.mozRequestAnimatorFrame || window.oRequestAnimatorFrame || window.msRequestAnimatorFrame ||
		function(callback) {
			window.setTimeout(callback, 1000 / 60);
		};
	})();
};

Animator.prototype.getCanvasBg = function() {
	return this.canvasBg;
};

Animator.prototype.getCanvasAnimation = function() {
	return this.canvasAnimation;
};

Animator.prototype.getContextBg = function() {
	return this.contextBg;
};

Animator.prototype.getContextAnimation = function() {
	return this.contextAnimation;
};

Animator.prototype.clearAnimation = function() {
	this.contextAnimation.clearRect(500, 200, this.canvasAnimation.width, this.canvasAnimation.height);
};

Animator.prototype.speak = function(){
	aud = !aud;
	if (aud){
		if(sound.paused && thisSound != currentPlayer){
			sound = new Audio(thisSound); //Load a new sound
		}
		sound.play();

	}
	else{
		sound.pause();
	}
};

Animator.prototype.backStep = function(){
	this.steps = buildStack(this.backSteps, this.steps);
	this.nextStep();
};

Animator.prototype.blockStep = function(newSteps){
	this.steps = newSteps;
	this.status = 1;
};

Animator.prototype.nextStep = function() {
	//só vai deixar clicar no botao e executar uma por vez
	console.log(this.getStatus());
	if (this.getStatus() == AnimationStatus.CONTINUE) {

		var animation = this.steps.shift();

			if (!back){

				this.backSteps.push(animation);
				animation = this.steps.shift();
			}

		var that = this;

		new som(this.audio.shift());
		//troca o texto
		if(animation.prototype.message) {
			this.changeText(animation.prototype.message);

			if(animation instanceof EmptyAnimation) {
				this.clearAnimation();
				return;
			}
		}
		//seta animador pra bloquear mais animações
		this.stop();

		//anima
		if(animation instanceof Array) {
			animation.forEach(function(item) {
				that.animate(item);
			});
		} else {
			//
			this.animate(animation);
		}

		//this.animate(this.steps.pop());
	}
};

Animator.prototype.changeText = function(text) {
	this.messageText.innerHTML = text;
};

Animator.prototype.animate = function(animation) {
	var that = this;
	//clear
	this.clearAnimation();
	//console.log("clear");
	//update
	if (animation.update) {
		//console.log(typeof animation.update);
		animation.update();
	} else {
		animation.prototype.stop();
	}
	//render
	animation.render(this.getContextAnimation());
	//anima
	if (animation.prototype.getAnimationStatus() === AnimationStatus.CONTINUE) {
		requestAnimFrame(function() {
			console.log("animating");
			that.animate(animation);
		});
	} else {
		//animação concluida
		console.log("fim da animacao");
		if(animation.prototype.persistent) {
			//limpa o contexto da animação
			this.clearAnimation();
			//desenha no contexto geral
			animation.render(this.getContextBg());
		}
		//seta animator para continuar
		this.go();
	}
};

Animator.prototype.getCanvas = function() {
	return this.canvas;
};
//animatorStatus
Animator.prototype.getStatus = function() {
	return this.status;
};

//FIXME remover esse método
Animator.prototype.setAnimationStatus = function(status) {
	if (status <= 1) {
		this.status = status;
		//TODO tentar melhorar aqui
	}
};

Animator.prototype.setAudio = function (audio){
	this.audio = audio;
};

Animator.prototype.stop = function() {
	this.status = AnimationStatus.BREAK;
};

Animator.prototype.go = function() {
	this.status = AnimationStatus.CONTINUE;
};

Animator.prototype.getSteps = function() {
	return this.steps;
};

Animator.prototype.setSteps = function(step) {
	this.steps.push(step);
};

Animator.prototype.getStep = function() {
	return this.step;
};

Animator.prototype.setStep = function(step) {
	this.step = step;
};

Animator.prototype.getCurrentStep = function() {
	return this.steps.pop();
};


Animator.prototype.clearContext = function(context) {
	context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Animator.prototype.getAspectRadio = function() {
	return this.aspectRadio;
};

//TODO arrumar
/*
 * Animator
 */
function Animator() {
	this.canvas = {
		width : 1152,
		height : 768,
		widthBase : 480,
		heightBase : 320,
	};
	this.canvasBg = document.getElementById("myCanvas");
	this.canvasAnimation = document.getElementById("myCanvas2");
	this.contextBg = this.canvasBg.getContext("2d");
	this.contextAnimation = this.canvasAnimation.getContext("2d");
	this.aspectRadio = this.canvas.width / this.canvas.height;
	this.status = AnimationStatus.BREAK;
	this.steps = [];
	this.step = 0;
	this.radioX = this.canvas.width / this.canvas.widthBase;
	this.radioY = this.canvas.height / this.canvas.heightBase;
	this.messageText = document.getElementById("msg");
	this.backSteps = [];
	this.audios = [];

	// provided by Paul Irish
	window.requestAnimFrame = (function(callback) {
		return window.requestAnimatorFrame || window.webkitRequestAnimatorFrame || window.mozRequestAnimatorFrame || window.oRequestAnimatorFrame || window.msRequestAnimatorFrame ||
		function(callback) {
			window.setTimeout(callback, 1000 / 60);
		};
	})();
};

Animator.prototype.getCanvasBg = function() {
	return this.canvasBg;
};

Animator.prototype.getCanvasAnimation = function() {
	return this.canvasAnimation;
};

Animator.prototype.getContextBg = function() {
	return this.contextBg;
};

Animator.prototype.getContextAnimation = function() {
	return this.contextAnimation;
};

Animator.prototype.restoreCanvasOpacity = function(ctx) {
	ctx.globalAlpha = 1;
};

Animator.prototype.clearAnimation = function(ctx) {
	var ctxToClear;
	if(ctx) {
		ctxToClear = ctx;
	} else {
		ctxToClear = this.getContextAnimation();
	}
	ctxToClear.clearRect(0, 0, this.canvasAnimation.width, this.canvasAnimation.height);
};

Animator.prototype.endAnimation = function() {
	//limpa contexto da animação
	this.clearAnimation(this.getContextAnimation());
	//limpa contexto do background
	this.clearAnimation(this.getContextBg());
	//
	alert("fim");

};

Animator.prototype.speak = function(){
	aud = !aud;
	if (aud){
		if(sound.paused && thisSound != currentPlayer){
			sound = new Audio(thisSound); //Load a new sound
		}
		sound.play();

	}
	else{
		sound.pause();
	}
};

Animator.prototype.backStep = function(){
	this.steps = buildStack(this.backSteps, this.steps);
	this.nextStep();
};

Animator.prototype.nextStep = function() {
	//só vai deixar clicar no botao e executar uma por vez
	console.log(this.getStatus());

	//REMOVE MENSAGENS DA TELA
	APP.removeMessages();

	if (this.getStatus() == AnimationStatus.CONTINUE) {

		var animation = this.steps.shift();
		if (bloco != 0){
			bloco = bloco -1;
		}else{
			if (!back){
				this.backSteps.push(animation);
			}else{
				back = 0;
				now = animation;
			}
		}

		var that = this;

//		TODO melhorar a parte de esconder o conteudo HTML
		if(!animation.prototype.isHtmlContentVisible()) {
			document.getElementById("htmlContent").style.opacity  = 0; //TODO arrumar aqui
		}

		new som(this.audio.shift());

		//troca o texto
		if(animation.prototype.message) {


			this.changeText(animation.prototype.message);

			//checa o fim da animação
			if(animation instanceof EndAnimation || animation == null) {
				//this.myHtml = document.getElementByID();
				this.setAnimationStatus(AnimationStatus.BREAK);
				return;
			}

			if(animation instanceof EmptyAnimation) {

				if(animation.htmlCont) {
					animation.htmlCont.render();
					animation.htmlCont.myHtml.style.opacity = 1;
				}

				this.clearAnimation();
				return;
			}
		}
		//seta animador pra bloquear mais animações
		this.stop();

		//anima
		if(animation instanceof Array) {
			animation.forEach(function(item) {
				that.animate(item);
			});
		} else {
			//
			this.animate(animation);
		}

		//this.animate(this.steps.pop());
	}
};

Animator.prototype.changeText = function(text) {
	this.messageText.innerHTML = text;
};

Animator.prototype.animate = function(animation) {
	var that = this;
	//clear ctx animation
	this.clearAnimation();
	//clera ctx bg
	if(animation.prototype.bgClear) {
		this.clearAnimation(this.getContextBg());
	}
	//console.log("clear");
	//update
	if (animation.update) {
		//console.log(typeof animation.update);
		animation.update();
	} else {
		animation.prototype.stop();
	}
	//render
	animation.render(this.getContextAnimation());
	//anima
	if (animation.prototype.getAnimationStatus() === AnimationStatus.CONTINUE) {
		requestAnimFrame(function() {
//			console.log("animating");
			that.animate(animation);
		});
	} else {
		//animação concluida
//		console.log("fim da animacao");
		if(animation.prototype.persistent) {
			//limpa o contexto da animação
			this.clearAnimation();
			//desenha no contexto geral
			animation.render(this.getContextBg());
		}
		//seta animator para continuar
		this.go();

		if(animation.prototype.next){
			this.nextStep();
		}

	}
};

Animator.prototype.getCanvas = function() {
	return this.canvas;
};
//animatorStatus
Animator.prototype.getStatus = function() {
	return this.status;
};

//FIXME remover esse método
Animator.prototype.setAnimationStatus = function(status) {
	if (status <= 1) {
		this.status = status;
		//TODO tentar melhorar aqui
	}
};

Animator.prototype.setAudio = function (audio){
	this.audio = audio;
};

Animator.prototype.stop = function() {
	this.status = AnimationStatus.BREAK;
};

Animator.prototype.go = function() {
	this.status = AnimationStatus.CONTINUE;
};

Animator.prototype.getSteps = function() {
	return this.steps;
};

Animator.prototype.setSteps = function(step) {
	this.steps.push(step);
};

Animator.prototype.getStep = function() {
	return this.step;
};

Animator.prototype.setStep = function(step) {
	this.step = step;
};

Animator.prototype.getCurrentStep = function() {
	return this.steps.pop();
};


Animator.prototype.clearContext = function(context) {
	context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Animator.prototype.getAspectRadio = function() {
	return this.aspectRadio;
};

/*
 * Animation
 */
var Animation = function(msg) {
	this.status = AnimationStatus.CONTINUE;
	this.render = undefined;
	this.update = undefined;
	this.opacity = 0;
	this.persistent = true;
	this.message = (msg) ? msg : undefined;
	this.contentHtmlVisible = false;
	this.bgClear = false;
	this.next = false;
};

Animation.prototype.stop = function() {
	this.status = AnimationStatus.BREAK;
};

Animation.prototype.getAnimationStatus = function() {
	return this.status;
};

Animation.prototype.isHtmlContentVisible = function() {
	return this.contentHtmlVisible;
};


Animation.prototype.drawPath = function(ctx, path) {
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth= (path.line) ? path.line : "8";
	ctx.strokeStyle= (path.color) ? path.color : "#f2f2f2";

	ctx.moveTo(path.sx, path.sy);
	ctx.lineTo(path.dx,path.dy);

	ctx.stroke();
	ctx.restore();
};

Animation.prototype.drawPaths = function(ctx, paths) {
	//percorre a lista e desenha as imagens
	for(var key in paths) {
		this.drawPath(ctx, paths[key]);
	}

};

Animation.prototype.drawImage = function(ctx, imgToDraw) {
	ctx.save();
	ctx.drawImage(imgToDraw.img, imgToDraw.sX, imgToDraw.sY, imgToDraw.sWidth, imgToDraw.sHeight, imgToDraw.dX, imgToDraw.dY, imgToDraw.dWidth, imgToDraw.dHeight);
	ctx.restore();
};

Animation.prototype.drawImages = function(ctx, images) {
	//percorre a lista e desenha as imagens
	for(var key in images) {
		this.drawImage(ctx, images[key]);
	}

};


var EmptyAnimation = function(msg, isHtmlVisible, htmlContent, next) {
	this.prototype = new Animation(msg);
	this.prototype.contentHtmlVisible = (isHtmlVisible) ? isHtmlVisible : false;
	this.htmlCont = (htmlContent) ? new HtmlContentAnimation(htmlContent) : null;
	this.prototype.next = (next) ? true : false;
};


var Message = function(coord){
	this.speed = 3;
	this.width = 20;
	this.height = 10;
	this.x = coord.sx;
	this.y = coord.sy;
	this.dx = coord.dx - coord.sx;
	this.dy = coord.dy - coord.sy;
	this.distance = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
	this.moves = this.distance / this.speed;
	this.xunits = (coord.dx - coord.sx) / this.moves;
	this.yunits = (coord.dy - coord.sy) / this.moves;

	this.rotate = (coord.rotate) ? coord.rotate : 0;

	this.alphaOff = 20;
	this.alphaOn = this.moves - this.alphaOff;
};



var Rectangle = function(x, y, color) {
	this.x = (x) ? x : 200;
	this.y = (y) ? y : 275;
	this.width = 320;
	this.height = 200;
	this.borderWidth = 1;
	this.velocityX = 0;
	this.velocityY = 0;
	this.orientarion = 0;
	this.fillStyle = (color) ? color : 'black';
};

Rectangle.prototype.draw = function(ctx) {
	ctx.save();
	ctx.beginPath();
	ctx.rect(this.x, this.y, this.width, this.height);
	ctx.fillStyle = this.fillStyle;
	ctx.fill();
	//ctx.lineWidth = this.borderWidth;
	//ctx.strokeStyle = '#f2f2f2';
	//ctx.stroke();
	ctx.closePath();
	ctx.restore();
};


//Responsável pelos elementos da imagem
function ImageHost(imgElement, coord, message) {
	this.sX = (imgElement) ? imgElement.dx : 0;
	//TODO renomear essas variaveis para algo mais legivel!
	this.sY = 0;
	this.sWidth = 100;
	this.sHeight = 100;
	this.dX = (coord) ? coord.x : 0;
	this.dY = (coord) ? coord.y: 135;
	this.dWidth = 100;
	this.dHeight = 100;
	this.velocityX = 0;
	this.img = new Image();
	this.img.src = "../../img/elements.png";
	this.opacity = 0;
	this.imgElement = imgElement;
	this.rotate = (coord.rotate) ? coord.rotate : 0;

	this.title = (message) ? message.title: undefined;
	this.subtitle = (message) ? message.subtitle : undefined;

	//FIXME construtor não seta o valor
	__construct = function() {
		//this.img.src = "img/elements.png";
	}();

};

ImageHost.prototype.setDx = function(dX) {
	this.dX = dX;
};

ImageHost.prototype.setDy = function(dY) {
	this.dY = dY;
};

ImageHost.prototype.getContext = function() {
	return this.context;
};

ImageHost.prototype.getImg = function() {
	return this.img;
};

ImageHost.prototype.getPosxText = function() {
	return this.sWidth / 2 + this.dX;
};

ImageHost.prototype.getPosyText = function() {
	return this.dY + this.sHeight + this.imgElement.textDy;
};

ImageHost.prototype.getPosyTextSubtitle = function() {
	return this.getPosyText() + 20;
};

ImageHost.prototype.getDx = function() {
	return this.dX;
};

ImageHost.prototype.getDy = function() {
	return this.dY;
};

ImageHost.prototype.setSx = function(sX) {
	this.sX = sX;
};

ImageHost.prototype.setSy = function(sY) {
	this.sY = sY;
};

ImageHost.prototype.drawText = function(ctx, colorText) {
	//settings
	ctx.save();

	ctx.font = "bold 15pt Arial";
	if(this.imgElement.text) {
		ctx.font = this.imgElement.text;
	}
	ctx.textAlign = 'center';
	ctx.textBaseLine = 'top';

	if(colorText) {
		ctx.fillStyle = colorText;
	}

	if (this.title) {
		ctx.fillText(this.title, this.getPosxText(), this.getPosyText(), 300);
	}

	if (this.subtitle) {
		ctx.font = "13pt Arial";
		ctx.fillText(this.subtitle, this.getPosxText(), this.getPosyTextSubtitle(), 300);
	}

	ctx.restore();

};

ImageHost.prototype.drawImage = function(ctx, colorText, scale) {
	var color = "black";
	//desenha imagem
	ctx.save();

	if(scale) {
		ctx.translate(scale, scale);
	}

	ctx.drawImage(this.img, this.sX, this.sY, this.sWidth, this.sHeight, this.dX, this.dY, this.dWidth, this.dHeight);

	//desenha o texto


	if(colorText) {
		color = colorText;
	}

	this.drawText(ctx, color);

	ctx.restore();

};

ImageHost.prototype.updateImage = function() {
	opacity += 1;
	velocityX += Math.random() * 0.1 * (55 - dWidth);
	dWidth += velocityX;
	dHeight += velocityX;
};


var MessageAnimation = function(coord, msg, next, noAlphaEnd) {
	this.prototype = new Animation(msg);
	this.message = new Message(coord);
	this.prototype.persistent = false;
	this.opacity = 0.5;
	this.rotate = (coord) ? coord.rotate : 0;
	this.prototype.next = (next) ? true : false;
	this.noAlphaEnd = (noAlphaEnd) ? noAlphaEnd : false;
};


MessageAnimation.prototype.render = function(ctx) {
ctx.globalAlpha = this.opacity;
ctx.save();
ctx.globalCompositeOperation = "destination-over";
ctx.translate(this.message.x, this.message.y);
ctx.rotate(this.rotate * (Math.PI/180));
ctx.beginPath();
ctx.rect(-(this.message.width/2), -(this.message.height/2), this.message.width, this.message.height);
ctx.fillStyle = this.message.fillStyle;
ctx.fill();
ctx.restore();
};

MessageAnimation.prototype.update = function() {

if(this.message.moves > 0 ) {
	//vai decrementando os movimentos
	this.message.moves--;

	//opacity alpha ON
	if(this.message.moves >= this.message.alphaOn) {
		this.opacity += 0.1;
	}
	//opacity alpha OFF
	if(!this.noAlphaEnd && this.message.moves <= this.message.alphaOff) {
		this.opacity -= 0.1;
	}
	//moving
	this.message.x += this.message.xunits;
	this.message.y += this.message.yunits;

} else {
	//stop animation
	this.prototype.stop();
	//reset alpha
	if(!this.noAlphaEnd) {
		this.opacity = 0;
	}
}

};

var MessageAnimation2 = function(pos, next, routers) {
this.prototype = new Animation();
this.msgs = this.buildMsgs(pos);
this.prototype.persistent = false;
this.opacity = 0.5;
//this.rotate = (coord) ? coord.rotate : 0;
this.prototype.next = (next) ? true : false;
//this.noAlphaEnd = (noAlphaEnd) ? noAlphaEnd : false;
};

MessageAnimation2.prototype.buildMsgs = function(pos) {
var msgs = [];
for (var i = 0; i < pos.length; i++) {
	msgs[i] = new Message(pos[i]);
}
return msgs;
};

MessageAnimation2.prototype.render = function(ctx) {
//drawBorderRoutes
this.prototype.drawImages(ctx, this.borderRoutes);

for (var i = 0; i < this.msgs.length; i++) {
	ctx.globalAlpha = this.opacity;
	ctx.save();
	ctx.translate(this.msgs[i].x, this.msgs[i].y);
	ctx.rotate(this.msgs[i].rotate * (Math.PI/180));
	ctx.beginPath();
	ctx.rect(-(this.msgs[i].width/2), -(this.msgs[i].height/2), this.msgs[i].width, this.msgs[i].height);
	ctx.fillStyle = this.msgs[i].fillStyle;
	ctx.fill();
	ctx.restore();
}

};

MessageAnimation2.prototype.update = function() {

var end = false;

for (var i = 0; i < this.msgs.length; i++) {

	if(this.msgs[i].moves > 0 ) {
		end = false;
		//vai decrementando os movimentos
		this.msgs[i].moves--;

		//opacity alpha ON
		if(this.msgs[i].moves >= this.msgs[i].alphaOn) {
			this.opacity += 0.1;
		}
		//opacity alpha OFF
		if(!this.noAlphaEnd && this.msgs[i].moves <= this.msgs[i].alphaOff) {
			this.opacity -= 0.1;
		}
		//moving
		this.msgs[i].x += this.msgs[i].xunits;
		this.msgs[i].y += this.msgs[i].yunits;

	} else {
		end = true;
	}

}

if(end) {
	this.prototype.stop();
}


};

var RouterTableAnimation = function(htmlContent, msgToShow) {
	this.prototype = new Animation(msgToShow);
	this.table = document.getElementById("htmlContent");
	this.content = htmlContent;
	this.opacity = 0;
	this.prototype.persistent = false;
	this.prototype.contentHtmlVisible = true;

	this.router1b = {"x":650, "y":540};
};

RouterTableAnimation.prototype.focus = function(ctx, as) {
	ctx.save();
	ctx.beginPath();
	ctx.arc(as.x, as.y, 50, 0, 2 * Math.PI, false);
	ctx.lineWidth="4";
	ctx.strokeStyle = "red";
	ctx.stroke();
	ctx.restore();
};

RouterTableAnimation.prototype.update = function(ctx) {
	//atualiza conteudo da tabela
	this.table.innerHTML = this.content;
	//
	if (this.opacity <= 1) {
		this.opacity += 0.05;
		this.table.style.opacity = this.opacity;
	} else {
		this.prototype.stop();
	}
};

RouterTableAnimation.prototype.render = function(ctx) {
	//this.focus(ctx, this.router1b);
};

drawPath = function(ctx, pos) {
	ctx.beginPath();
	ctx.lineWidth= (pos.path) ? pos.path : "10";
	ctx.strokeStyle= (pos.color) ? pos.color : "#ccc"; // Green path
	ctx.moveTo(pos.sx, pos.sy);
	ctx.lineTo(pos.dx,pos.dy);
	ctx.stroke(); // Draw it
};

var APP = {};

APP.CONF = {};

APP.newElement = function(el) {
	var node = document.getElementById("wrapper");
	e = document.createElement("div");
	e.setAttribute("id", el.id);
	node.appendChild(e);
	e.classList.add("textMessage");
	e.innerHTML = el.content;

	e.style.position = "absolute";
//	e.style.border = "solid 1px";
	e.style.width = (el.size) ? el.size + "px" : "400px";
	e.style.marginLeft = el.dx + "px";
	e.style.marginTop = el.dy + "px";


	if(el.styleClass) {
		e.classList.add(el.styleClass);
	}

	return e;
};

APP.CONF.textStyle = {
		"default" : "15pt Arial",
		"arial16Bold": "bold 16pt Arial",
		"arial13": "13pt Arial",
		"as": "bold 18pt Arial"
};

APP.CONF.getTextStyle = function(style) {
	return (this.textStyle[style]) ? this.textStyle[style] : this.textStyle["default"];
};

APP.removeMessages = function() {
	var elementsToRemove = Array.prototype.slice.call(document.querySelectorAll(".textMessage"));
	for(var i = 0; i < elementsToRemove.length; i++) {
		elToRemove = elementsToRemove[i];
		elToRemove.parentNode.removeChild(elToRemove);
	}
};

var HtmlContentAnimation = function(htmlContent) {
//	this.prototype = new Animation(msgToShow);
	this.myHtml = document.getElementById("htmlContent");
	this.content = htmlContent;
	this.opacity = 0;
//	this.prototype.persistent = false;
//	this.prototype.contentHtmlVisible = true;

};


HtmlContentAnimation.prototype.update = function(ctx) {
	//atualiza conteudo da tabela
	this.html.innerHTML = this.content;
	//
	if (this.opacity <= 1) {
		this.opacity += 0.05;
		this.html.style.opacity = this.opacity;
	} else {
		this.prototype.stop();
	}
};

HtmlContentAnimation.prototype.render = function(ctx) {
	this.myHtml.innerHTML = this.content;
//	this.myHtml.style.opacity = "1";
};


el1 = {
	"id": "text1",
	"dx": 50,
	"dy": 280,
	"content": msg.html5
};

el2 = {
	"id": "text2",
	"dx": 380,
	"dy": 200,
	"content": msg.html4
};

el3 = {
	"id": "text3",
	"dx": 720,
	"dy": 280,
	"content": msg.html6
};

el4 = {
	"id": "text3",
	"dx": 250,
	"dy": 240,
	"content": msg.html7
};

el5 = {
	"id": "text3",
	"dx": 200,
	"dy": 115,
	"size": 750,
	"content": msg.html8
};

el6 = {
	"id": "text3",
	"dx": 250,
	"dy": 240,
	"content": msg.html9
};

el7 = {
	"id": "text3",
	"dx": 200,
	"dy": 100,
	"size": 750,
	"content": msg.html10
};

el8 = {
		"id": "text3",
		"dx": 200,
		"dy": 115,
		"size": 750,
		"content": msg.html11
	};

el9 = {
		"id": "text3",
		"dx": 350,
		"dy": 210,
		"size": 450,
		"content": msg.html12
	};



APP.CONF.finishButton = "<br/> <a id='btn-restart' href='' class='btn btn-info' onclick='init()'>Reiniciar a animação</a>";

var EndAnimation = function(msgToShow) {
	this.prototype = new Animation(msgToShow);
};

EndAnimation.prototype.render = function(ctx) {
	ctx.globalAlpha = 0.5;
	ctx.rect(0, 0, 1152, 768);
	ctx.fillStyle = "#fff";
	ctx.fill();
	console.log(ctx.globalAlpha);
};

var HtmlMessageAnimation = function(htmlElements, msgToShow, showArrow) {
	this.prototype = new Animation(msgToShow);
	this.elements = htmlElements;
	this.prototype.persistent = false;
	this.showArrow = (showArrow) ? showArrow : false;

	this.arrows = [new ImageHost(ImageElements.ARROW, {"x": 360, "y": 300, "rotate": -40}),
	               new ImageHost(ImageElements.ARROW, {"x": 630, "y": 220, "rotate": -25})];
};

HtmlMessageAnimation.prototype.render = function(ctx) {
	ctx.globalAlpha = 1;
	if(this.showArrow) {
		for (var i = 0; i < this.arrows.length; i++) {
			this.drawArrow(ctx, this.arrows[i]);
		}
	}

	for(var i in this.elements) {
		APP.newElement(this.elements[i]);
	}
};


HtmlMessageAnimation.prototype.drawArrow = function(ctx, arrow) {
	ctx.save();
	ctx.translate(arrow.dX, arrow.dY);
	ctx.rotate(arrow.rotate * (Math.PI/180));
	arrow.setDx(-50);
	arrow.setDy(-50);
	arrow.drawImage(ctx);
	ctx.restore();
};


var TextMessageAnimation = function() {
	this.prototype = new Animation();
};

TextMessageAnimation.prototype.render = function(ctx) {
	this.drawText(ctx, {"title": "Network Number","y": 20, "style": "arial16Bold" });
	this.drawText(ctx, {"title": "162.103.128.0", "y": 140});
	this.drawText(ctx, {"title": "10100010.10000000.00000000", "y": 160});
};


TextMessageAnimation.prototype.drawText = function(ctx, text) {
	ctx.save();
	ctx.font = APP.CONF.getTextStyle(text.style);
	ctx.textAlign = 'center';
	ctx.textBaseLine = 'top';
	ctx.fillText(text.title, 150, text.y, 300);
	ctx.restore();
};


//configurações gerais;

//Enum que será usado para controlar o status da anima��o
AnimationStatus = Object.freeze({
	"CONTINUE" : 1,
	"BREAK" : 0
});

ImageElements = Object.freeze({
	"HOST" : { name:"host", dx: 0, textDy: 25 },
	"HOST2" : { name:"host", dx: 0, textDy: 10, text: "13pt Arial" },
	"SERVER": { name: "server", dx: 100, textDy: 25 },
	"ROUTER": { name: "router", dx: 200, textDy: -85 },
	"SWITCH": { name: "router", dx: 300, textDy: -85 },
	"ARROW" : { name: "arrow", dx: 850 }
});



function Animator() {
	this.canvas = {
		width : 1152,
		height : 768,
		widthBase : 480,
		heightBase : 320,
	};
	this.canvasBg = document.getElementById("myCanvas");
	this.canvasAnimation = document.getElementById("myCanvas2");
	this.contextBg = this.canvasBg.getContext("2d");
	this.contextAnimation = this.canvasAnimation.getContext("2d");
	this.aspectRadio = this.canvas.width / this.canvas.height;
	this.status = AnimationStatus.BREAK;
	this.steps = [];
	this.step = 0;
	this.radioX = this.canvas.width / this.canvas.widthBase;
	this.radioY = this.canvas.height / this.canvas.heightBase;
	this.messageText = document.getElementById("msg");
	this.backSteps = [];
	this.audios = [];

	// provided by Paul Irish
	window.requestAnimFrame = (function(callback) {
		return window.requestAnimatorFrame || window.webkitRequestAnimatorFrame || window.mozRequestAnimatorFrame || window.oRequestAnimatorFrame || window.msRequestAnimatorFrame ||
		function(callback) {
			window.setTimeout(callback, 1000 / 60);
		};
	})();
};

Animator.prototype.getCanvasBg = function() {
	return this.canvasBg;
};

Animator.prototype.getCanvasAnimation = function() {
	return this.canvasAnimation;
};

Animator.prototype.getContextBg = function() {
	return this.contextBg;
};

Animator.prototype.getContextAnimation = function() {
	return this.contextAnimation;
};

Animator.prototype.clearAnimation = function() {
	this.contextAnimation.clearRect(500, 200, this.canvasAnimation.width, this.canvasAnimation.height);
};

Animator.prototype.speak = function(){
	aud = !aud;
	if (aud){
		if(sound.paused && thisSound != currentPlayer){
			sound = new Audio(thisSound); //Load a new sound
		}
		sound.play();

	}
	else{
		sound.pause();
	}
};

Animator.prototype.backStep = function(){
	this.steps = buildStack(this.backSteps, this.steps);
	this.nextStep();
};

Animator.prototype.nextStep = function() {
	//só vai deixar clicar no botao e executar uma por vez
	console.log(this.getStatus());
	if (this.getStatus() == AnimationStatus.CONTINUE) {

		var animation = this.steps.shift();
		//if (bloco != 0){
			bloco = bloco -1;
		//}else{
			if (!back){

				this.backSteps.push(animation);
				animation = this.steps.shift();
			}else{
				back = 0;
		//		now = animation;
			}
		//}

		var that = this;
		new som(this.audio.shift());

		//troca o texto
		if(animation.prototype.message) {
			this.changeText(animation.prototype.message);

			if(animation instanceof EmptyAnimation) {
				this.clearAnimation();
				return;
			}
		}
		//seta animador pra bloquear mais animações
		this.stop();

		//anima
		if(animation instanceof Array) {
			animation.forEach(function(item) {
				that.animate(item);
			});
		} else {
			//
			this.animate(animation);
		}

		//this.animate(this.steps.pop());
	}
};

Animator.prototype.changeText = function(text) {
	this.messageText.innerHTML = text;
};

Animator.prototype.animate = function(animation) {
	var that = this;
	//clear
	this.clearAnimation();
	//console.log("clear");
	//update
	if (animation.update) {
		//console.log(typeof animation.update);
		animation.update();
	} else {
		animation.prototype.stop();
	}
	//render
	animation.render(this.getContextAnimation());
	//anima
	if (animation.prototype.getAnimationStatus() === AnimationStatus.CONTINUE) {
		requestAnimFrame(function() {
			console.log("animating");
			that.animate(animation);
		});
	} else {
		//animação concluida
		console.log("fim da animacao");
		if(animation.prototype.persistent) {
			//limpa o contexto da animação
			this.clearAnimation();
			//desenha no contexto geral
			animation.render(this.getContextBg());
		}
		//seta animator para continuar
		this.go();
	}
};

Animator.prototype.getCanvas = function() {
	return this.canvas;
};
//animatorStatus
Animator.prototype.getStatus = function() {
	return this.status;
};

//FIXME remover esse método
Animator.prototype.setAnimationStatus = function(status) {
	if (status <= 1) {
		this.status = status;
		//TODO tentar melhorar aqui
	}
};

Animator.prototype.setAudio = function (audio){
	this.audio = audio;
};

Animator.prototype.stop = function() {
	this.status = AnimationStatus.BREAK;
};

Animator.prototype.go = function() {
	this.status = AnimationStatus.CONTINUE;
};

Animator.prototype.getSteps = function() {
	return this.steps;
};

Animator.prototype.setSteps = function(step) {
	this.steps.push(step);
};

Animator.prototype.getStep = function() {
	return this.step;
};

Animator.prototype.setStep = function(step) {
	this.step = step;
};

Animator.prototype.getCurrentStep = function() {
	return this.steps.pop();
};


Animator.prototype.clearContext = function(context) {
	context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Animator.prototype.getAspectRadio = function() {
	return this.aspectRadio;
};

//TODO arrumar
/*
* Animator
*/
function Animator() {
	this.canvas = {
		width : 1152,
		height : 768,
		widthBase : 480,
		heightBase : 320,
	};
	this.canvasBg = document.getElementById("myCanvas");
	this.canvasAnimation = document.getElementById("myCanvas2");
	this.contextBg = this.canvasBg.getContext("2d");
	this.contextAnimation = this.canvasAnimation.getContext("2d");
	this.aspectRadio = this.canvas.width / this.canvas.height;
	this.status = AnimationStatus.BREAK;
	this.steps = [];
	this.step = 0;
	this.radioX = this.canvas.width / this.canvas.widthBase;
	this.radioY = this.canvas.height / this.canvas.heightBase;
	this.messageText = document.getElementById("msg");
	this.backSteps = [];
	this.backAudios = [];
	this.audios = [];

	// provided by Paul Irish
	window.requestAnimFrame = (function(callback) {
		return window.requestAnimatorFrame || window.webkitRequestAnimatorFrame || window.mozRequestAnimatorFrame || window.oRequestAnimatorFrame || window.msRequestAnimatorFrame ||
		function(callback) {
			window.setTimeout(callback, 1000 / 60);
		};
	})();
};

Animator.prototype.getCanvasBg = function() {
	return this.canvasBg;
};

Animator.prototype.getCanvasAnimation = function() {
	return this.canvasAnimation;
};

Animator.prototype.getContextBg = function() {
	return this.contextBg;
};

Animator.prototype.getContextAnimation = function() {
	return this.contextAnimation;
};

Animator.prototype.restoreCanvasOpacity = function(ctx) {
	ctx.globalAlpha = 1;
};

Animator.prototype.clearAnimation = function(ctx) {
	var ctxToClear;
	if(ctx) {
		ctxToClear = ctx;
	} else {
		ctxToClear = this.getContextAnimation();
	}
	ctxToClear.clearRect(0, 0, this.canvasAnimation.width, this.canvasAnimation.height);
};

Animator.prototype.endAnimation = function() {
	//limpa contexto da animação
	this.clearAnimation(this.getContextAnimation());
	//limpa contexto do background
	this.clearAnimation(this.getContextBg());
	//
	alert("fim");

};

Animator.prototype.speak = function(){
	aud = !aud;
	if (aud){
		if(sound.paused && thisSound != currentPlayer){
			sound = new Audio(thisSound); //Load a new sound
		}
		sound.play();
		document.getElementById("aud").style.backgroundPosition = "0px -60px";
	}
	else{
		sound.pause();
		document.getElementById("aud").style.backgroundPosition = "0px 0px";
	}
};

Animator.prototype.backStep = function(){
	if (this.backSteps.length > 1){
		this.steps = buildStack(this.backSteps, this.steps);
		this.audio = buildStack(this.backAudios, this.audio);
		this.nextStep();
	}
};

Animator.prototype.nextStep = function() {
	sound.pause();
	//só vai deixar clicar no botao e executar uma por vez
	console.log(this.getStatus());

	//REMOVE MENSAGENS DA TELA
	APP.removeMessages();
	var prox = false;

	if (this.getStatus() == AnimationStatus.CONTINUE) {

		var animation = this.steps.shift();


		if ((animation instanceof BlockAnimation) || (animation instanceof BlockBackground)){
			if(!back){
				k = animation.passos;

				if (animation instanceof BlockBackground){
					k--;
				}
			}else{
				if (animation instanceof BlockBackground){
					k = 1;
				}
			}
		}else{
			if (k == 0){
				var s = this.audio.shift();
				new som(s); //Load a new sound
				thisSound = s;
				this.backAudios.push(s);
			}else{
				k--;
			}
		}
		// Adiciona os passos quando é um bloco de animação
		if ((animation instanceof BlockAnimation) || (animation instanceof BlockBackground)){
			if (back != 1){
			animation.addPassos();
			passos = animation.passos;
			bloco = 1
			}else{
				if (animation instanceof BlockBackground){
					animation.addPassos();
			passos = animation.passos;
			bloco = 1
				}
			}
		}
	//	if (!(animation instanceof MessageAnimation)){
		if ((passos == 0) || (bloco)){
				this.backSteps.push(animation);
				bloco = 0;

				// Trata a volta que é precisa voltar dois para o BlockAnimation
				if ((animation instanceof BlockAnimation) || (animation instanceof BlockBackground)){
					if (back && animation instanceof BlockAnimation ){
						this.steps = buildStack(this.backSteps, this.steps);
					}
					if (back && animation instanceof BlockBackground){
						this.clearAnimation(this.getContextBg());
					}
//					if (back){
						//this.steps = buildStack(this.backSteps, this.steps);
						//if (animation instanceof BlockBackground){
							//this.clearAnimation(this.getContextBg());

						//}
						//prox = true;
					//}
					back = 0;
					this.nextStep();

				}
		}else if(passos > 0){
			passos--;
		}

		var that = this;

//		TODO melhorar a parte de esconder o conteudo HTML
		if(!animation.prototype.isHtmlContentVisible()) {
			document.getElementById("htmlContent").style.opacity = 0; //TODO arrumar aqui
		}
		back = 0;
		//troca o texto
		if(animation.prototype.message) {

			this.changeText(animation.prototype.message);

			//checa o fim da animação
			if(animation instanceof EndAnimation || animation == null) {

				this.setAnimationStatus(AnimationStatus.BREAK);
				return;

			}

			if(animation instanceof EmptyAnimation) {

				if(animation.htmlCont) {
					animation.htmlCont.render();
					animation.htmlCont.myHtml.style.opacity = 1;
				}

				this.clearAnimation();
				return;
			}
		}

		//seta animador pra bloquear mais animações
		this.stop();

		//anima
		if(animation instanceof Array) {
			animation.forEach(function(item) {
				that.animate(item);
			});
		} else {
			//
			this.animate(animation);
		}

		//this.animate(this.steps.pop());
	}
	if (prox){
		this.nextStep();
	}
};

Animator.prototype.changeText = function(text) {
	this.messageText.innerHTML = text;
};

Animator.prototype.animate = function(animation) {
	var that = this;
	//clear ctx animation
	this.clearAnimation();
	//clera ctx bg
	if(animation.prototype.bgClear) {
		this.clearAnimation(this.getContextBg());
	}
	//console.log("clear");
	//update
	if (animation.update) {
		//console.log(typeof animation.update);
		animation.update();
	} else {
		animation.prototype.stop();
	}
	//render
	animation.render(this.getContextAnimation());
	//anima
	if (animation.prototype.getAnimationStatus() === AnimationStatus.CONTINUE) {
		requestAnimFrame(function() {
//			console.log("animating");
			that.animate(animation);
		});
	} else {
		//animação concluida
//		console.log("fim da animacao");
		if(animation.prototype.persistent) {
			//limpa o contexto da animação
			this.clearAnimation();
			//desenha no contexto geral
			animation.render(this.getContextBg());
		}
		//seta animator para continuar
		this.go();

		if(animation.prototype.next){
			this.nextStep();
		}

	}
};

Animator.prototype.getCanvas = function() {
	return this.canvas;
};
//animatorStatus
Animator.prototype.getStatus = function() {
	return this.status;
};

//FIXME remover esse método
Animator.prototype.setAnimationStatus = function(status) {
	if (status <= 1) {
		this.status = status;
		//TODO tentar melhorar aqui
	}
};

Animator.prototype.setAudio = function (audio){
	this.audio = audio;
};

Animator.prototype.stop = function() {
	this.status = AnimationStatus.BREAK;
};

Animator.prototype.go = function() {
	this.status = AnimationStatus.CONTINUE;
};

Animator.prototype.getSteps = function() {
	return this.steps;
};

Animator.prototype.setSteps = function(step) {
	this.steps.push(step);
};

Animator.prototype.getStep = function() {
	return this.step;
};

Animator.prototype.setStep = function(step) {
	this.step = step;
};

Animator.prototype.getCurrentStep = function() {
	return this.steps.pop();
};


Animator.prototype.clearContext = function(context) {
	context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Animator.prototype.getAspectRadio = function() {
	return this.aspectRadio;
};

/*
* Animation
*/
var Animation = function(msg) {
	this.status = AnimationStatus.CONTINUE;
	this.render = undefined;
	this.update = undefined;
	this.opacity = 0;
	this.persistent = true;
	this.message = (msg) ? msg : undefined;
	this.contentHtmlVisible = false;
	this.bgClear = false;
	this.next = false;
};

Animation.prototype.stop = function() {
	this.status = AnimationStatus.BREAK;
};

Animation.prototype.getAnimationStatus = function() {
	return this.status;
};

Animation.prototype.isHtmlContentVisible = function() {
	return this.contentHtmlVisible;
};


Animation.prototype.drawPath = function(ctx, path) {
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth= (path.line) ? path.line : "8";
	ctx.strokeStyle= (path.color) ? path.color : "#f2f2f2";

	ctx.moveTo(path.sx, path.sy);
	ctx.lineTo(path.dx,path.dy);

	ctx.stroke();
	ctx.restore();
};

Animation.prototype.drawPaths = function(ctx, paths) {
	//percorre a lista e desenha as imagens
	for(var key in paths) {
		this.drawPath(ctx, paths[key]);
	}

};

Animation.prototype.drawImage = function(ctx, imgToDraw) {
	ctx.save();
	ctx.drawImage(imgToDraw.img, imgToDraw.sX, imgToDraw.sY, imgToDraw.sWidth, imgToDraw.sHeight, imgToDraw.dX, imgToDraw.dY, imgToDraw.dWidth, imgToDraw.dHeight);
	ctx.restore();
};

Animation.prototype.drawImages = function(ctx, images) {
	//percorre a lista e desenha as imagens
	for(var key in images) {
		this.drawImage(ctx, images[key]);
	}

};


var EmptyAnimation = function(msg, isHtmlVisible, htmlContent, next) {
	this.prototype = new Animation(msg);
	this.prototype.contentHtmlVisible = (isHtmlVisible) ? isHtmlVisible : false;
	this.htmlCont = (htmlContent) ? new HtmlContentAnimation(htmlContent) : null;
	this.prototype.next = (next) ? true : false;
};


var Message = function(coord){
	this.speed = 3;
	this.width = 20;
	this.height = 10;
	this.x = coord.sx;
	this.y = coord.sy;
	this.dx = coord.dx - coord.sx;
	this.dy = coord.dy - coord.sy;
	this.distance = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
	this.moves = this.distance / this.speed;
	this.xunits = (coord.dx - coord.sx) / this.moves;
	this.yunits = (coord.dy - coord.sy) / this.moves;

	this.rotate = (coord.rotate) ? coord.rotate : 0;

	this.alphaOff = 20;
	this.alphaOn = this.moves - this.alphaOff;
};



var Rectangle = function(x, y, color) {
	this.x = (x) ? x : 200;
	this.y = (y) ? y : 275;
	this.width = 320;
	this.height = 200;
	this.borderWidth = 1;
	this.velocityX = 0;
	this.velocityY = 0;
	this.orientarion = 0;
	this.fillStyle = (color) ? color : 'black';
};

Rectangle.prototype.draw = function(ctx) {
	ctx.save();
	ctx.beginPath();
	ctx.rect(this.x, this.y, this.width, this.height);
	ctx.fillStyle = this.fillStyle;
	ctx.fill();
	//ctx.lineWidth = this.borderWidth;
	//ctx.strokeStyle = '#f2f2f2';
	//ctx.stroke();
	ctx.closePath();
	ctx.restore();
};




var MessageAnimation = function(coord, msg, next, noAlphaEnd) {
	this.prototype = new Animation(msg);
	this.message = new Message(coord);
	this.prototype.persistent = false;
	this.opacity = 0.5;
	this.rotate = (coord) ? coord.rotate : 0;
	this.prototype.next = (next) ? true : false;
	this.noAlphaEnd = (noAlphaEnd) ? noAlphaEnd : false;
};


MessageAnimation.prototype.render = function(ctx) {
ctx.globalAlpha = this.opacity;
ctx.save();
ctx.globalCompositeOperation = "destination-over";
ctx.translate(this.message.x, this.message.y);
ctx.rotate(this.rotate * (Math.PI/180));
ctx.beginPath();
ctx.rect(-(this.message.width/2), -(this.message.height/2), this.message.width, this.message.height);
ctx.fillStyle = this.message.fillStyle;
ctx.fill();
ctx.restore();
};

MessageAnimation.prototype.update = function() {

if(this.message.moves > 0 ) {
	//vai decrementando os movimentos
	this.message.moves--;

	//opacity alpha ON
	if(this.message.moves >= this.message.alphaOn) {
		this.opacity += 0.1;
	}
	//opacity alpha OFF
	if(!this.noAlphaEnd && this.message.moves <= this.message.alphaOff) {
		this.opacity -= 0.1;
	}
	//moving
	this.message.x += this.message.xunits;
	this.message.y += this.message.yunits;

} else {
	//stop animation
	this.prototype.stop();
	//reset alpha
	if(!this.noAlphaEnd) {
		this.opacity = 0;
	}
}
};

var MessageAnimation2 = function(pos, next, routers) {
this.prototype = new Animation();
this.msgs = this.buildMsgs(pos);
this.prototype.persistent = false;
this.opacity = 0.5;
//this.rotate = (coord) ? coord.rotate : 0;
this.prototype.next = (next) ? true : false;
//this.noAlphaEnd = (noAlphaEnd) ? noAlphaEnd : false;
};

MessageAnimation2.prototype.buildMsgs = function(pos) {
var msgs = [];
for (var i = 0; i < pos.length; i++) {
	msgs[i] = new Message(pos[i]);
}
return msgs;
};

MessageAnimation2.prototype.render = function(ctx) {
//drawBorderRoutes
this.prototype.drawImages(ctx, this.borderRoutes);

for (var i = 0; i < this.msgs.length; i++) {
	ctx.globalAlpha = this.opacity;
	ctx.save();
	ctx.translate(this.msgs[i].x, this.msgs[i].y);
	ctx.rotate(this.msgs[i].rotate * (Math.PI/180));
	ctx.beginPath();
	ctx.rect(-(this.msgs[i].width/2), -(this.msgs[i].height/2), this.msgs[i].width, this.msgs[i].height);
	ctx.fillStyle = this.msgs[i].fillStyle;
	ctx.fill();
	ctx.restore();
}

};

MessageAnimation2.prototype.update = function() {

var end = false;

for (var i = 0; i < this.msgs.length; i++) {

	if(this.msgs[i].moves > 0 ) {
		end = false;
		//vai decrementando os movimentos
		this.msgs[i].moves--;

		//opacity alpha ON
		if(this.msgs[i].moves >= this.msgs[i].alphaOn) {
			this.opacity += 0.1;
		}
		//opacity alpha OFF
		if(!this.noAlphaEnd && this.msgs[i].moves <= this.msgs[i].alphaOff) {
			this.opacity -= 0.1;
		}
		//moving
		this.msgs[i].x += this.msgs[i].xunits;
		this.msgs[i].y += this.msgs[i].yunits;

	} else {
		end = true;
	}

}

if(end) {
	this.prototype.stop();
}


};

var DnsMessageAnimation = function(msgToShow) {
	this.prototype = new Animation(msgToShow);
	this.dnsMessage = new Image();
	this.dnsMessage.src = "../../img/dnsMessage.png";
	this.scale = 0.2;
	this.prototype.persistent = false;
};

DnsMessageAnimation.prototype.render = function(ctx){
	ctx.globalAlpha = this.prototype.opacity;
//	ctx.rect(0,0, 1156, 768);
//	ctx.fillStyle="#fff";
//	ctx.fill();
	ctx.save();
//	ctx.scale(this.scale, this.scale);
	ctx.translate(576,384);
	ctx.drawImage(this.dnsMessage, -350, -250);
	ctx.restore();
};

DnsMessageAnimation.prototype.update = function(ctx) {
	if (this.prototype.opacity <= 1) {
		this.prototype.opacity += 0.05;
	} else {
		this.prototype.stop();
	}
};
/*
* Hosts and Servers animations
*/
var HostAnimation = function(msgToShow) {
	this.prototype = new Animation(msgToShow);
	//servers and hosts
	this.hosts = [new ImageHost(ImageElements.HOST, {"x":530, "y":540}, {"title": msg.sourceHost, "subtitle": msg.sourceHostURL}),
				  new ImageHost(ImageElements.HOST, {"x":180, "y":320}, {"title":  msg.requestHost, "subtitle": msg.requestHostURL}),
				  new ImageHost(ImageElements.SERVER, {"x":530, "y":320}, {"title": msg.localServer, "subtitle": msg.localServerURL}),
				  new ImageHost(ImageElements.SERVER, {"x":900, "y":100}, {"title": msg.rootServer}),
				  new ImageHost(ImageElements.SERVER, {"x":900, "y":320} ,{"title":msg.tldServer}),
				  new ImageHost(ImageElements.SERVER, {"x":900, "y":540}, {"title": msg.authorityServer, subtitle: msg.authorityServerURL})				  ];
	//caminhos
	this.paths = [{"sx":195, "sy":370, "dx": 550, "dy": 370},
				  {"sx":550, "sy":370, "dx": 950, "dy": 370},
				  {"sx":550, "sy":370, "dx": 950, "dy": 150},
				  {"sx":550, "sy":370, "dx": 950, "dy": 600},
				  {"sx":550, "sy":600, "dx": 950, "dy": 600}];
};

HostAnimation.prototype.render = function(ctx) {
	//opacity effect
	ctx.globalAlpha = this.prototype.opacity;
	//desenha os caminhos
	for (var i=0; i < this.paths.length; i++) {
	  this.drawPath(ctx, this.paths[i]);
	};
	//desenha os servers and hosts
	for (var i=0; i < this.hosts.length; i++) {
	  this.hosts[i].drawImage(ctx);
	};

};

HostAnimation.prototype.drawPath = function(ctx, coord) {
	ctx.beginPath();
	ctx.lineWidth="8";
	ctx.strokeStyle="#ccc"; // Green path
	ctx.moveTo(coord.sx, coord.sy);
	ctx.lineTo(coord.dx,coord.dy);
	ctx.stroke(); // Draw it
};

HostAnimation.prototype.update = function() {
	if (this.prototype.opacity <= 1) {
		this.prototype.opacity += 0.05;
	} else {
		this.prototype.stop();
	}
};

RootServerAnimation = function(coord, serverName, messageToShow,  color) {
	this.prototype = new Animation(messageToShow);
	this.rootServer = new ImageHost(ImageElements.SERVER, coord, serverName);
	this.background = new Rectangle(coord.x - 105, coord.y - 25, color);
	this.prototype.persistent = false;
};

RootServerAnimation.prototype.render = function(ctx) {
	ctx.globalAlpha = this.prototype.opacity;
	this.background.draw(ctx);
	this.rootServer.drawImage(ctx, colors.blank);
};

RootServerAnimation.prototype.update = function() {
	if (this.prototype.opacity <= 1) {
		this.prototype.opacity += 0.05;
	} else {
		this.prototype.stop();
	}
};

/*
* Routers
*/
var RouterAnimation = function(animationConf, msgToShow, next) {
	this.prototype = new Animation(msgToShow);

	this.routers = animationConf.routers;
	this.paths = animationConf.paths;
	this.text = animationConf.text;
	this.as = animationConf.as;
	this.prototype.bgClear = (animationConf.bgClear) ? true : false;
	this.prototype.next = (next) ? next : false;

	//this.sourceHost = new ImageHost(ImageElements.HOST, 856,250, msg.sourceHost, msg.sourceHostURL);
};

RouterAnimation.prototype.render = function(ctx) {
	//opacity effect
	ctx.globalAlpha = this.prototype.opacity;
	//AS
	for (var i = 0; i < this.as.length; i++) {
		this.drawAS(ctx, this.as[i]);
	}
	//caminhos
	this.drawPaths(ctx, this.paths);
	//roteadores
	for (var i = 0; i < this.routers.length; i++) {
		this.routers[i].drawImage(ctx);
	}
	//nomes das redes
	for (var i = 0; i < this.text.length; i++) {
		this.drawText(ctx, this.text[i]);
	};

	//this.drawAS(ctx, this.as[0], true);

};

RouterAnimation.prototype.drawPaths = function(ctx, paths) {
	//caminhos
	for (var i = 0; i < paths.length; i++) {
		this.drawPath(ctx, paths[i]);
	}
};

RouterAnimation.prototype.update = function() {
	if (this.prototype.opacity <= 1) {
		this.prototype.opacity += 0.05;
	} else {
		this.prototype.stop();
	}
};

RouterAnimation.prototype.drawPath = function(ctx, coord) {
	ctx.beginPath();
	ctx.lineWidth=(coord.line) ? (coord.line) : "10";
	ctx.strokeStyle= (coord.color) ? coord.color : "#999"; // Green path
	ctx.moveTo(coord.sx, coord.sy);
	ctx.lineTo(coord.dx,coord.dy);
	ctx.stroke(); // Draw it
};

RouterAnimation.prototype.drawText = function(ctx, text) {
	ctx.save();
	ctx.font = APP.CONF.getTextStyle(text.style);
	ctx.fillStyle = (text.color) ? text.color : "#000";
	ctx.textAlign = 'center';
	ctx.textBaseLine = 'top';
	ctx.fillText(text.text, text.coord.x, text.coord.y, 300);
	ctx.restore();
};

RouterAnimation.prototype.drawAS = function(ctx, as, stroke) {

	var radius = as.radius;
	ctx.save();
  // scale context horizontally
	ctx.scale(2, 1);
	ctx.beginPath();
//ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	ctx.lineWidth="4";
	ctx.strokeStyle = "#000";
	ctx.stroke();
	ctx.fillStyle="#f9f9f9";

	if(stroke) {
		radius = as.radius + 5;
		ctx.arc(as.x, as.y, radius, 0, 2 * Math.PI, false);
		ctx.lineWidth="4";
		ctx.strokeStyle = "#E5E5E5";
		ctx.stroke();
	} else{
		ctx.arc(as.x, as.y, radius, 0, 2 * Math.PI, false);
		ctx.fill();
	}

	ctx.restore();
};


/*
* CONF
*/
var AnimationConf = {
	"routers": [new ImageHost(ImageElements.ROUTER, {"x":400, "y":300}, {"title":"3a"}),
              new ImageHost(ImageElements.ROUTER, {"x":500, "y":200}, {"title":"3b"}),
				new ImageHost(ImageElements.ROUTER, {"x":600, "y":300}, {"title":"3c"}),

				new ImageHost(ImageElements.ROUTER, {"x":300, "y":400}, {"title":"2a"}),

				new ImageHost(ImageElements.ROUTER, {"x":400, "y":500}, {"title":"1a"}),
				new ImageHost(ImageElements.ROUTER, {"x":500, "y":400}, {"title":"1c"}),
				new ImageHost(ImageElements.ROUTER, {"x":600, "y":500	}, {"title":"1b"})],

	"routers2": {
		"router1c": new ImageHost(ImageElements.ROUTER, {"x":500, "y":400}, {"title":"1c"}),
		"router1a": new ImageHost(ImageElements.ROUTER, {"x":400, "y":500}, {"title":"1a"}),
		"router1b": new ImageHost(ImageElements.ROUTER, {"x":600, "y":500	}, {"title":"1b"})
	},

	"paths": [{"sx":450, "sy":350, "dx":550, "dy":250}, //3a - 3b
            {"sx":550, "sy":250, "dx":650, "dy":350}, //3b - 3c

            {"sx":450, "sy":550, "dx":650, "dy":550}, //1a - 1b
            //{"sx":450, "sy":550, "dx":550, "dy":450}, //1a - 1c
            {"sx":550, "sy":450, "dx":650, "dy":550}, // 1b - 1c

            {"sx":650, "sy":350, "dx":550, "dy":450}, //1c - 3c
            {"sx":450, "sy":550, "dx":350, "dy":450}, //1a - 2a
            {"sx":350, "sy":450, "dx":450, "dy":350}, //2a - 3a

            {"sx":650, "sy":550, "dx":780, "dy":550, "line": 6}, //rede Z
            {"sx":450, "sy":550, "dx":320, "dy":550, "line": 6}, //rede Y
            {"sx":650, "sy":350, "dx":800, "dy":350, "line": 6} //rede X
            ],
   "paths2": {
  	 "from1bTo1c": {"sx":550, "sy":450, "dx":650, "dy":550},
  	 "from1bTo1a": {"sx":450, "sy":550, "dx":650, "dy":550}
   },

  "text": [{"text": "x", "coord": {"x":740, "y":330} ,"color":"red"},
           {"text": "y", "coord": {"x":740, "y":530}},
           {"text": "z", "coord": {"x":370, "y":530}},
           {"text": "AS0", "coord": {"x":200, "y":400}, "style": "as"}],
   "as": [{"x":280, "y":400, "radius":220}],
};

var AnimationConf2 = {

	"routers": [new ImageHost(ImageElements.ROUTER, {"x":70, "y":400}, {"title":"3a"}),
              new ImageHost(ImageElements.ROUTER, {"x":185, "y":340}, {"title":"3b"}),
				new ImageHost(ImageElements.ROUTER, {"x":300, "y":400}, {"title":"3c"}),

				new ImageHost(ImageElements.ROUTER, {"x":410, "y":235}, {"title":"4a"}),
				new ImageHost(ImageElements.ROUTER, {"x":525, "y":175}, {"title":"4b"}),
				new ImageHost(ImageElements.ROUTER, {"x":640, "y":235}, {"title":"4c"}),

				new ImageHost(ImageElements.ROUTER, {"x":750, "y":400}, {"title":"2a"}),
				new ImageHost(ImageElements.ROUTER, {"x":865, "y":340}, {"title":"2c"}),
				new ImageHost(ImageElements.ROUTER, {"x":980, "y":400}, {"title":"2b"}),

				new ImageHost(ImageElements.ROUTER, {"x":525, "y":495}, {"title":"1a"}),
				new ImageHost(ImageElements.ROUTER, {"x":410, "y":555}, {"title":"1b"}),
				new ImageHost(ImageElements.ROUTER, {"x":640, "y":555}, {"title":"1c"}),
				new ImageHost(ImageElements.ROUTER, {"x":525, "y":615}, {"title":"1d"})],

	"routers2": {
		"router2a": new ImageHost(ImageElements.ROUTER, {"x":750, "y":400}, {"title":"2a"}),
		"router2b": new ImageHost(ImageElements.ROUTER, {"x":980, "y":400}, {"title":"2b"}),
		"router1c": new ImageHost(ImageElements.ROUTER, {"x":640, "y":555}, {"title":"1c"}),
		"router1d": new ImageHost(ImageElements.ROUTER, {"x":525, "y":615}, {"title":"1d"}),
		"router1a": new ImageHost(ImageElements.ROUTER, {"x":525, "y":495}, {"title":"1a"}),
		"router3c": new ImageHost(ImageElements.ROUTER, {"x":300, "y":400}, {"title":"3c"}),
		"router3b": new ImageHost(ImageElements.ROUTER, {"x":185, "y":340}, {"title":"3b"}),
		"router4a": new ImageHost(ImageElements.ROUTER, {"x":410, "y":235}, {"title":"4a"})
	},

	"paths": [{"sx":800, "sy":450, "dx":925, "dy":390}, //2a-2c
	          {"sx":1030, "sy":450, "dx":925, "dy":390}, //2b-2c
	          {"sx":800, "sy":450, "dx":1030, "dy":450}, //2a-2b

//	          {"sx":575, "sy":550, "dx":700, "dy":610}, //1a-1c
	          {"sx":575, "sy":550, "dx":460, "dy":610}, //1a-1b
	          {"sx":460, "sy":610, "dx":575, "dy":670}, //1b-1d
	          {"sx":460, "sy":610, "dx":700, "dy":610}, //1b-1c
	          {"sx":700, "sy":610, "dx":575, "dy":670}, //1c-1d

	          {"sx":240, "sy":390, "dx":125, "dy":450}, //3b-3a
//	          {"sx":240, "sy":390, "dx":350, "dy":450}, //3b-3c
	          {"sx":125, "sy":450, "dx":350, "dy":450}, //3a-3c

	          {"sx":575, "sy":225, "dx":465, "dy":285}, //4b-4a
	          {"sx":575, "sy":225, "dx":690, "dy":285}, //4b-4c
//	          {"sx":465, "sy":285, "dx":690, "dy":285}, //4a-4c

	          {"sx":700, "sy":610, "dx":800, "dy":450}, //1c-2a
	          {"sx":575, "sy":550, "dx":350, "dy":450}, //1a-3c
	          {"sx":240, "sy":390, "dx":465, "dy":285}, //3b-4a
//	          {"sx":925, "sy":390, "dx":690, "dy":285}, //2c-4c
            ],


  "text": [{"text": "AS1", "coord": {"x":435, "y":675}, "style": "as"},
           {"text": "AS2", "coord": {"x":925, "y":500}, "style": "as"},
           {"text": "AS3", "coord": {"x":225, "y":500}, "style": "as"},
           {"text": "AS4", "coord": {"x":575, "y":325}, "style": "as"}],
  "as": [{"x":288, "y":260, "radius":100}, //AS4,
         {"x":120, "y":430, "radius":100}, //AS3,
         {"x":457, "y":430, "radius":100}, //AS2,
         {"x":288, "y":615, "radius":125}, //AS1,
         ],
  "bgClear": true

	};

var AnimationConf3 = {
		"routers" : AnimationConf2.routers,
		"paths": [{"sx":800, "sy":450, "dx":925, "dy":390,  "color": "#01B0EC"}, //2a-2c
		          {"sx":1030, "sy":450, "dx":925, "dy":390, "color": "#01B0EC"}, //2b-2c
		          {"sx":800, "sy":450, "dx":1030, "dy":450, "color": "#01B0EC"}, //2a-2b

//		          {"sx":575, "sy":550, "dx":700, "dy":610}, //1a-1c
		          {"sx":575, "sy":550, "dx":460, "dy":610, "color": "#01B0EC"}, //1a-1b
		          {"sx":460, "sy":610, "dx":575, "dy":670, "color": "#01B0EC"}, //1b-1d
		          {"sx":460, "sy":610, "dx":700, "dy":610, "color": "#01B0EC"}, //1b-1c
		          {"sx":700, "sy":610, "dx":575, "dy":670, "color": "#01B0EC"}, //1c-1d
		          {"sx":575, "sy":550, "dx":700, "dy":610, "color": "#01B0EC"}, //1a-1c
		          {"sx":575, "sy":550, "dx":575, "dy":670, "color": "#01B0EC"}, //1a-1c

		          {"sx":240, "sy":390, "dx":125, "dy":450, "color": "#01B0EC"}, //3b-3a
		          {"sx":240, "sy":390, "dx":350, "dy":450, "color": "#01B0EC"}, //3b-3c
		          {"sx":125, "sy":450, "dx":350, "dy":450, "color": "#01B0EC"}, //3a-3c

		          {"sx":575, "sy":225, "dx":465, "dy":285, "color": "#01B0EC"}, //4b-4a
		          {"sx":575, "sy":225, "dx":690, "dy":285, "color": "#01B0EC"}, //4b-4c
		          {"sx":465, "sy":285, "dx":690, "dy":285, "color": "#01B0EC"}, //4a-4c
//
		          {"sx":700, "sy":610, "dx":800, "dy":450, "color": "#4fbe4f", "line": 14}, //1c-2a
		          {"sx":575, "sy":550, "dx":350, "dy":450, "color": "#4fbe4f", "line": 14}, //1a-3c
		          {"sx":240, "sy":390, "dx":465, "dy":285, "color": "#4fbe4f", "line": 14}, //3b-4a
		          {"sx":925, "sy":390, "dx":690, "dy":285, "color": "#4fbe4f", "line": 14}, //2c-4c
	              ],
	  "as" : AnimationConf2.as,
	  "text" : AnimationConf2.text,
    "bgClear": true
};

var AnimationConf4 = {
		"routers" : new Object(AnimationConf2.routers),
		"paths": Object.create(AnimationConf2.paths),
		"as" : AnimationConf2.as,
		//"text": AnimationConf2.text,
		"text" : [{"text": "x", "coord": {"x":775, "y":220} ,"color":"red"},
			  {"text": "AS1", "coord": {"x":435, "y":675}, "style": "as"},
		          {"text": "AS2", "coord": {"x":925, "y":500}, "style": "as"},
          		  {"text": "AS3", "coord": {"x":225, "y":500}, "style": "as"},
            		  {"text": "AS4", "coord": {"x":575, "y":325}, "style": "as"}],
		"bgClear":true
};

AnimationConf4.paths.push({"sx":925, "sy":390, "dx":690, "dy":285}); //2c4c
AnimationConf4.paths.push({"sx":690, "sy":285, "dx":800, "dy":225});


var RoutesAnimation = function(msgToShow) {
	this.prototype = new Animation(msgToShow);
	this.prototype.persistent = false;

	this.routers = AnimationConf.routers2;
	this.routers.router1b = new ImageHost(ImageElements.SWITCH, {"x":600, "y":500	}, {"title":"1b"});

	this.paths = AnimationConf.paths2;

};

RoutesAnimation.prototype.render = function(ctx) {
	this.changeColorPath(this.paths);

	this.prototype.drawPaths(ctx, this.paths);
	this.prototype.drawImages(ctx, this.routers);
};

RoutesAnimation.prototype.changeColorPath = function(paths, color) {
	var newColor = (color) ? color : "green";
	for(var key in paths) {
		paths[key].color = newColor;
	}
};

var BorderRouterAnimation = function(msgToShow, routers){
	this.prototype = new Animation(msgToShow);
	this.borderRoutes = this.buildBorderRouter(routers);
	this.prototype.persistent = false;
};

BorderRouterAnimation.prototype.buildBorderRouter = function(routers) {
	console.log(routers);
	if(routers == null) {
		routers =  [AnimationConf2.routers2.router1a,
		            AnimationConf2.routers2.router1c,
		            AnimationConf2.routers2.router2a,
		            AnimationConf2.routers2.router3b,
		            AnimationConf2.routers2.router3c,
		            AnimationConf2.routers2.router4a];
	}


	for (var i = 0; i < routers.length; i++) {
		routers[i].setSx(300);
	}

	return routers;
};

BorderRouterAnimation.prototype.render = function(ctx) {
	ctx.globalAlpha = 1; //TODO arrumar esse problema do globalAlhpa depois do messageAnimation
	this.prototype.drawImages(ctx, this.borderRoutes);
};

var RouterTableAnimation = function(htmlContent, msgToShow) {
	this.prototype = new Animation(msgToShow);
	this.table = document.getElementById("htmlContent");
	this.content = htmlContent;
	this.opacity = 0;
	this.prototype.persistent = false;
	this.prototype.contentHtmlVisible = true;

	this.router1b = {"x":650, "y":540};
};

RouterTableAnimation.prototype.focus = function(ctx, as) {
	ctx.save();
	ctx.beginPath();
	ctx.arc(as.x, as.y, 50, 0, 2 * Math.PI, false);
	ctx.lineWidth="4";
	ctx.strokeStyle = "red";
	ctx.stroke();
	ctx.restore();
};

RouterTableAnimation.prototype.update = function(ctx) {
	//atualiza conteudo da tabela
	this.table.innerHTML = this.content;
	//
	if (this.opacity <= 1) {
		this.opacity += 0.05;
		this.table.style.opacity = this.opacity;
	} else {
		this.prototype.stop();
	}
};

RouterTableAnimation.prototype.render = function(ctx) {
	//this.focus(ctx, this.router1b);
};


var drawCloud = function(ctx, pos) {
	var startX = pos.x;
	var startY = pos.y;
	var scale = pos.scale ? pos.scale : 2;

	ctx.save();
	ctx.scale(scale, scale);

	ctx.beginPath();
	ctx.moveTo(startX, startY);
	ctx.bezierCurveTo(startX - 40, startY + 20, startX - 40,
					  startY + 70, startX + 60, startY + 70);
	ctx.bezierCurveTo(startX + 80, startY + 100, startX + 150,
					  startY + 100, startX + 170, startY + 70);
	ctx.bezierCurveTo(startX + 250, startY + 70, startX + 250,
					  startY + 40, startX + 220, startY + 20);
	ctx.bezierCurveTo(startX + 260, startY - 40, startX + 200,
					  startY - 50, startX + 170, startY - 30);
	ctx.bezierCurveTo(startX + 150, startY - 75, startX + 80,
					  startY - 60, startX + 80, startY - 30);
	ctx.bezierCurveTo(startX + 30, startY - 75, startX - 20,
					  startY - 60, startX, startY);
	ctx.closePath();

	var grdCenterX = 260;
	var grdCenterY = 80;
	var grd = ctx.createRadialGradient(grdCenterX, grdCenterY,10, grdCenterX, grdCenterY, 200);
	grd.addColorStop(0, "#01B0EC"); // light blue
	grd.addColorStop(1, "#0484B0"); // dark blue


	ctx.fillStyle = grd;
	ctx.fill();

	ctx.lineWidth = 1;
	ctx.strokeStyle = "#0484B0";
	ctx.stroke();

	ctx.restore();
};


drawPath = function(ctx, pos) {
	ctx.beginPath();
	ctx.lineWidth= (pos.path) ? pos.path : "10";
	ctx.strokeStyle= (pos.color) ? pos.color : "#ccc"; // Green path
	ctx.moveTo(pos.sx, pos.sy);
	ctx.lineTo(pos.dx,pos.dy);
	ctx.stroke(); // Draw it
};


var CloudAnimation = function(msgToShow) {
	this.prototype = new Animation(msgToShow);

	this.mySwitch = new ImageHost(ImageElements.SWITCH, {"x": 125, "y": 120}, {title: "Switch"});
	//hosts sem ips
	this.hostsNoIP = [new ImageHost(ImageElements.HOST2, {"x": 0, "y": 0}),
					  new ImageHost(ImageElements.HOST2, {"x": 0, "y": 200}),
					  new ImageHost(ImageElements.HOST2, {"x": 250, "y": 200}),
					  new ImageHost(ImageElements.HOST2, {"x": 250, "y": 0})];

	this.hostsLeft = [new ImageHost(ImageElements.HOST2, {"x": 0, "y": 0}, {"title": "162.103.136.100"}),
					  new ImageHost(ImageElements.HOST2, {"x": 0, "y": 200}, {"title": "162.103.136.102"}),
					  new ImageHost(ImageElements.HOST2, {"x": 250, "y": 200}, {"title": "162.103.136.103"}),
					  new ImageHost(ImageElements.HOST2, {"x": 250, "y": 0}, {"title": "162.103.136.101"})];

	this.hostsRight = [new ImageHost(ImageElements.HOST2, {"x": 0, "y": 0}, {"title": "162.103.1.100"}),
					  new ImageHost(ImageElements.HOST2, {"x": 0, "y": 200}, {"title": "162.103.1.103"}),
					  new ImageHost(ImageElements.HOST2, {"x": 250, "y": 200}, {"title": "162.103.1.102"}),
					  new ImageHost(ImageElements.HOST2, {"x": 250, "y": 0}, {"title": "162.103.1.101"})];

	this.routerTop = new ImageHost(ImageElements.ROUTER, {"x":365 , "y":230}, {title: "Máscara: 255.255.128.0"});
	this.routerBottom = new ImageHost(ImageElements.ROUTER, {"x":365 , "y":357}, {title: "Máscara: 255.255.128.0"});

	this.pathToLeftSwitch = {"sx":580, "sy":570, "dx":225, "dy":570, "path":14}; //router-leftSwitch
	this.pathToRightSwitch = {"sx":580, "sy":570, "dx":925, "dy":570, "path":14}; //router-rightSwitch

	this.textsHosts1 = [{"content": "Endereço de Rede", "style": "arial16Bold"},
	                    {"content": "162.103.128.0", "style": "arial16Bold"},
	                    {"content": "10100010.01100111.10000000.00000000", "style": "arial13"}];

	this.textsHosts2 = [{"content": "Endereço de Rede", "style": "arial16Bold"},
	                    {"content": "162.103.0.0", "style": "arial16Bold"},
	                    {"content": "10100010.01100111.00000000.00000000", "style": "arial13"}];

	this.textsRouter = [{"content": "Máscara: 255.255.128.0", "style": "arial16Bold"},
	                    {"content": "11111111.11111111.10000000.00000000", "style": "arial13"}];




	this.prototype.bgClear = true;
};

CloudAnimation.prototype.render = function(ctx) {
	ctx.globalAlpha = this.prototype.opacity;

	this.drawBase(ctx);
	drawPath(ctx, this.pathToLeftSwitch);
	drawPath(ctx, this.pathToRightSwitch);

	this.drawMyImage(ctx, this.routerBottom, 1.4);

	this.drawHostsLeft(ctx, {"x":50, "y":400});
	this.drawHostsRight(ctx, {"x":750, "y":400});

	this.drawTexts(ctx, this.textsHosts1, {"x": 75, "y": 300});
	this.drawTexts(ctx, this.textsHosts2, {"x": 775, "y": 300});
	this.drawTexts(ctx, this.textsRouter, {"x": 425, "y": 290});
};

CloudAnimation.prototype.drawBase = function(ctx) {
	drawPath(ctx, {"sx":580, "sy":0, "dx":580, "dy":575, "path":12}); //internet-router
	drawCloud(ctx, {"x": 170, "y": 20});
	this.drawMyImage(ctx, this.routerTop, 1.4);
};

CloudAnimation.prototype.drawHostsLeft = function(ctx, pos) {
	this.drawHosts(ctx, this.hostsLeft, pos);
};

CloudAnimation.prototype.drawHostsRight = function(ctx, pos) {
	this.drawHosts(ctx, this.hostsRight, pos);
};

CloudAnimation.prototype.drawHostsNoIP = function(ctx, pos) {
	this.drawHosts(ctx, this.hostsNoIP, pos);
};

CloudAnimation.prototype.drawHosts = function(ctx, hosts, pos) {
	ctx.save();
	ctx.translate(pos.x, pos.y);

	drawPath(ctx, {"sx":175, "sy":165, "dx":50, "dy":50});
	drawPath(ctx, {"sx":175, "sy":165, "dx":50, "dy":250});
	drawPath(ctx, {"sx":175, "sy":165, "dx":300, "dy":250});
	drawPath(ctx, {"sx":175, "sy":165, "dx":300, "dy":50});

	this.mySwitch.drawImage(ctx);

	for (var i = 0; i < hosts.length; i++) {
		hosts[i].drawImage(ctx);
	}

	ctx.restore(ctx);

};


CloudAnimation.prototype.drawRouterTopIP = function(ctx) {
	this.drawTexts(ctx, [{"content": "162.103.X.X", "style": "arial16Bold"}], {"x": 550, "y": 365});
};

CloudAnimation.prototype.drawRoutersIP = function(ctx) {
	this.drawTexts(ctx, [{"content": "162.103.127.254", "style": "arial16Bold"}], {"x": 570, "y": 530});
  this.drawTexts(ctx, [{"content": "162.103.255.254", "style": "arial16Bold"}], {"x": 300, "y": 530});
};

CloudAnimation.prototype.drawMyImage = function(ctx, element, scale) {
	ctx.save();
	if(scale) {
		ctx.scale(scale, scale);
	}
	ctx.drawImage(element.img, element.sX, element.sY, element.sWidth, element.sHeight, element.dX, element.dY, element.dWidth, element.dHeight);
	ctx.restore();
};

CloudAnimation.prototype.drawText = function(ctx, text, verticalSpace) {
	ctx.font = APP.CONF.getTextStyle(text.style);
	ctx.textAlign = 'center';
	ctx.textBaseLine = 'top';
	ctx.fillText(text.content, 150, verticalSpace, 300);

};

CloudAnimation.prototype.drawTexts = function(ctx, texts, pos) {
	var verticalSpace = 0;

	ctx.save();
	ctx.translate(pos.x, pos.y);

	for (var i = 0; i < texts.length; i++) {
		verticalSpace += 25;
		this.drawText(ctx, texts[i], verticalSpace);
	}

	ctx.restore();
};

CloudAnimation.prototype.update = function() {
	if (this.prototype.opacity <= 1) {
		this.prototype.opacity += 0.05;
	} else {
		this.prototype.stop();
	}
};


var CloudAnimationIntro = function(msgToShow) {
	this.prototype = new Animation(msgToShow);
	this.cloudAnimation = new CloudAnimation();
	this.html = new HtmlContentAnimation(msg.html1);
	this.opacity = 0;
};

CloudAnimationIntro.prototype.render = function(ctx) {
	ctx.globalAlpha = this.opacity;
	drawCloud(ctx, {"x": 270, "y": 360, "scale": 1.5});
	this.cloudAnimation.drawBase(ctx);
	this.cloudAnimation.drawRouterTopIP(ctx);
	this.cloudAnimation.drawHostsNoIP(ctx, {"x":405, "y":400});
	this.html.render();
};

CloudAnimationIntro.prototype.update = function(ctx) {
	if (this.opacity <= 1) {
		this.opacity += 0.05;
		this.html.myHtml.style.opacity = this.opacity;
	} else {
		this.prototype.stop();
	}
};

var CloudAnimationIntro2 = function(msgToShow,next) {
	this.prototype = new Animation(msgToShow);
	this.cloudAnimation = new CloudAnimation();
	this.html = new HtmlContentAnimation(null);
	this.opacity = 0;
	this.prototype.next = (next) ? next : false;
};

CloudAnimationIntro2.prototype.render = function(ctx) {
	ctx.globalAlpha = this.opacity;
	drawCloud(ctx, {"x": 270, "y": 360, "scale": 1.5});
	this.cloudAnimation.drawBase(ctx);
	this.cloudAnimation.drawRouterTopIP(ctx);
	this.cloudAnimation.drawHostsNoIP(ctx, {"x":405, "y":400});
	this.html.render();
};

CloudAnimationIntro2.prototype.update = function(ctx) {
	if (this.opacity <= 1) {
		this.opacity += 0.05;
		this.html.myHtml.style.opacity = this.opacity;
	} else {
		this.prototype.stop();
	}
};

var CloudAnimationTransition = function() {
	this.prototype = new Animation();
	this.cloudAnimation = new CloudAnimation();
	this.html = new HtmlContentAnimation(msg.html1);
	this.prototype.bgClear = true;
	this.cloudPos = {
			"cloud1" : {
				"x": 270,
				"y":360
			},
			"cloud2" : {
				"x": 270,
				"y":360
			}
		};
	this.prototype.next = true;
};

CloudAnimationTransition.prototype.render = function(ctx) {
	//base
	this.cloudAnimation.drawBase(ctx);
	//ip do router
	this.cloudAnimation.drawRouterTopIP(ctx);
	//roteador top
	this.cloudAnimation.drawMyImage(ctx, this.cloudAnimation.routerBottom, 1.4);
	//clouds
//	drawCloud(ctx, {"x": 270, "y": 360, "scale": 1.5}); //origin
	drawCloud(ctx, {"x": this.cloudPos.cloud1.x, "y": this.cloudPos.cloud1.y, "scale": 1.5});
	drawCloud(ctx, {"x": this.cloudPos.cloud2.x, "y": this.cloudPos.cloud2.y, "scale": 1.5});


	if(this.cloudPos.cloud1.x <= 45){
		//paths
		drawPath(ctx, this.cloudAnimation.pathToLeftSwitch);
		drawPath(ctx, this.cloudAnimation.pathToRightSwitch);
		//hosts
		this.cloudAnimation.drawHostsNoIP(ctx, {"x":50, "y":400});
		this.cloudAnimation.drawHostsNoIP(ctx, {"x":750, "y":400});
		this.cloudAnimation.drawMyImage(ctx, this.cloudAnimation.routerBottom, 1.4);
	}
	//
	this.cloudAnimation.drawRoutersIP(ctx);
};

CloudAnimationTransition.prototype.update = function(ctx) {
	if(this.cloudPos.cloud1.x >= 45 && this.cloudPos.cloud2.x <= 495) {
		this.cloudPos.cloud1.x = this.cloudPos.cloud1.x - 5;
		this.cloudPos.cloud2.x = this.cloudPos.cloud2.x + 5;

	}else {
		this.prototype.stop();
	}
};

var CloudAnimationTransition2 = function() {
	this.prototype = new Animation();
	this.cloudAnimation = new CloudAnimation();
	this.html = new HtmlContentAnimation(msg.html1);
	this.prototype.bgClear = true;
	this.cloudPos = {
			"cloud1" : {
				"x": 270,
				"y":360
			},
			"cloud2" : {
				"x": 270,
				"y":360
			}
		};
	this.prototype.next = true;
};

CloudAnimationTransition2.prototype.render = function(ctx) {
	//base
	this.cloudAnimation.drawBase(ctx);
	//ip do router
	this.cloudAnimation.drawRouterTopIP(ctx);
	//roteador top
	this.cloudAnimation.drawMyImage(ctx, this.cloudAnimation.routerBottom, 1.4);
	//clouds
//	drawCloud(ctx, {"x": 270, "y": 360, "scale": 1.5}); //origin
	drawCloud(ctx, {"x": 40, "y": this.cloudPos.cloud1.y, "scale": 1.5});
	drawCloud(ctx, {"x": 500, "y": this.cloudPos.cloud2.y, "scale": 1.5});

	//if(this.cloudPos.cloud1.x <= 45){
		//paths
		drawPath(ctx, this.cloudAnimation.pathToLeftSwitch);
		drawPath(ctx, this.cloudAnimation.pathToRightSwitch);
		//hosts
		this.cloudAnimation.drawHostsNoIP(ctx, {"x":50, "y":400});
		this.cloudAnimation.drawHostsNoIP(ctx, {"x":750, "y":400});
		this.cloudAnimation.drawMyImage(ctx, this.cloudAnimation.routerBottom, 1.4);

	//		this.cloudAnimation.drawTexts(ctx, [{"content": "162.103.128.0", "style": "arial16Bold"}], {"x": 75, "y": 350});
	//		this.cloudAnimation.drawTexts(ctx, [{"content": "162.103.0.0", "style": "arial16Bold"}], {"x": 775, "y": 350});
//	}

this.cloudAnimation.drawRoutersIP(ctx);
};

var APP = {};

APP.CONF = {};

APP.newElement = function(el) {
	var node = document.getElementById("wrapper");
	e = document.createElement("div");
	e.setAttribute("id", el.id);
	node.appendChild(e);
	e.classList.add("textMessage");
	e.innerHTML = el.content;

	e.style.position = "absolute";
//	e.style.border = "solid 1px";
	e.style.width = (el.size) ? el.size + "px" : "400px";
	e.style.marginLeft = el.dx + "px";
	e.style.marginTop = el.dy + "px";


	if(el.styleClass) {
		e.classList.add(el.styleClass);
	}

	return e;
};

APP.CONF.textStyle = {
		"default" : "15pt Arial",
		"arial16Bold": "bold 16pt Arial",
		"arial13": "13pt Arial",
		"as": "bold 18pt Arial"
};

APP.CONF.getTextStyle = function(style) {
	return (this.textStyle[style]) ? this.textStyle[style] : this.textStyle["default"];
};

APP.removeMessages = function() {
	var elementsToRemove = Array.prototype.slice.call(document.querySelectorAll(".textMessage"));
	for(var i = 0; i < elementsToRemove.length; i++) {
		elToRemove = elementsToRemove[i];
		elToRemove.parentNode.removeChild(elToRemove);
	}
};

var HtmlContentAnimation = function(htmlContent) {
//	this.prototype = new Animation(msgToShow);
	this.myHtml = document.getElementById("htmlContent");
	this.content = htmlContent;
	this.opacity = 0;
//	this.prototype.persistent = false;
//	this.prototype.contentHtmlVisible = true;

};


HtmlContentAnimation.prototype.update = function(ctx) {
	//atualiza conteudo da tabela
	this.html.innerHTML = this.content;
	//
	if (this.opacity <= 1) {
		this.opacity += 0.05;
		this.html.style.opacity = this.opacity;
	} else {
		this.prototype.stop();
	}
};

HtmlContentAnimation.prototype.render = function(ctx) {
	this.myHtml.innerHTML = this.content;
//	this.myHtml.style.opacity = "1";
};


el1 = {
	"id": "text1",
	"dx": 50,
	"dy": 280,
	"content": msg.html5
};

el2 = {
	"id": "text2",
	"dx": 380,
	"dy": 200,
	"content": msg.html4
};

el3 = {
	"id": "text3",
	"dx": 720,
	"dy": 280,
	"content": msg.html6
};

el4 = {
	"id": "text3",
	"dx": 250,
	"dy": 240,
	"content": msg.html7
};

el5 = {
	"id": "text3",
	"dx": 200,
	"dy": 115,
	"size": 750,
	"content": msg.html8
};

el6 = {
	"id": "text3",
	"dx": 250,
	"dy": 240,
	"content": msg.html9
};

el7 = {
	"id": "text3",
	"dx": 200,
	"dy": 100,
	"size": 750,
	"content": msg.html10
};

el8 = {
		"id": "text3",
		"dx": 200,
		"dy": 115,
		"size": 750,
		"content": msg.html11
	};

el9 = {
		"id": "text3",
		"dx": 350,
		"dy": 210,
		"size": 450,
		"content": msg.html12
	};



APP.CONF.finishButton = "<br/> <a id='btn-restart' href='' class='btn btn-info' onclick='init()'>Reiniciar a animação</a>";

var EndAnimation = function(msgToShow) {
	this.prototype = new Animation(msgToShow);
};

EndAnimation.prototype.render = function(ctx) {
	ctx.globalAlpha = 0.5;
	ctx.rect(0, 0, 1152, 768);
	ctx.fillStyle = "#fff";
	ctx.fill();
	console.log(ctx.globalAlpha);
};

var HtmlMessageAnimation = function(htmlElements, msgToShow, showArrow) {
	this.prototype = new Animation(msgToShow);
	this.elements = htmlElements;
	this.prototype.persistent = false;
	this.showArrow = (showArrow) ? showArrow : false;

	this.arrows = [new ImageHost(ImageElements.ARROW, {"x": 360, "y": 300, "rotate": -40}),
	               new ImageHost(ImageElements.ARROW, {"x": 630, "y": 220, "rotate": -25})];
};

HtmlMessageAnimation.prototype.render = function(ctx) {
	ctx.globalAlpha = 1;
	if(this.showArrow) {
		for (var i = 0; i < this.arrows.length; i++) {
			this.drawArrow(ctx, this.arrows[i]);
		}
	}

	for(var i in this.elements) {
		APP.newElement(this.elements[i]);
	}
};


HtmlMessageAnimation.prototype.drawArrow = function(ctx, arrow) {
	ctx.save();
	ctx.translate(arrow.dX, arrow.dY);
	ctx.rotate(arrow.rotate * (Math.PI/180));
	arrow.setDx(-50);
	arrow.setDy(-50);
	arrow.drawImage(ctx);
	ctx.restore();
};


var TextMessageAnimation = function() {
	this.prototype = new Animation();
};

TextMessageAnimation.prototype.render = function(ctx) {
	this.drawText(ctx, {"title": "Network Number","y": 20, "style": "arial16Bold" });
	this.drawText(ctx, {"title": "162.103.128.0", "y": 140});
	this.drawText(ctx, {"title": "10100010.10000000.00000000", "y": 160});
};


TextMessageAnimation.prototype.drawText = function(ctx, text) {
	ctx.save();
	ctx.font = APP.CONF.getTextStyle(text.style);
	ctx.textAlign = 'center';
	ctx.textBaseLine = 'top';
	ctx.fillText(text.title, 150, text.y, 300);
	ctx.restore();
};

//Aloha Animation

ImageElementsAloha = Object.freeze({
	"HOST" : { name:"host", dx: 0, textDy: 25 },
	"TRAN" : { name:"tran", dx: 200, textDy: 10 },
	"GARBE": { name: "server", dx: 300, textDy: 25 },
	"WHITE": { name: "white", dx: 500, textDy: -85 },
	"SWITCH": { name: "router", dx: 300, textDy: -85 },
	"ARROW" : { name: "arrow", dx: 850 }
});

function ImageAloha(imgElement, coord, message) {
	this.sX = (imgElement) ? imgElement.dx : 0;
	//TODO renomear essas variaveis para algo mais legivel!
	this.sY = 0;
	this.sWidth = 100;
	this.sHeight = 100;
	this.dX = (coord) ? coord.x : 0;
	this.dY = (coord) ? coord.y: 135;
	this.dWidth = 100;
	this.dHeight = 100;
	this.velocityX = 0;
	this.img = new Image();
	this.img.src = "../../img/aloha.png";
	this.opacity = 0;
	this.imgElement = imgElement;
	this.rotate = (coord.rotate) ? coord.rotate : 0;

	this.title = (message) ? message.title: undefined;
	this.subtitle = (message) ? message.subtitle : undefined;

	//FIXME construtor não seta o valor
	__construct = function() {
		//this.img.src = "img/elements.png";
	}();

};

ImageAloha.prototype.setDx = function(dX) {
	this.dX = dX;
};

ImageAloha.prototype.setDy = function(dY) {
	this.dY = dY;
};

ImageAloha.prototype.getContext = function() {
	return this.context;
};

ImageAloha.prototype.getImg = function() {
	return this.img;
};

ImageAloha.prototype.getPosxText = function() {
	return this.sWidth / 2 + this.dX;
};

ImageAloha.prototype.getPosyText = function() {
	return this.dY + this.sHeight + this.imgElement.textDy;
};

ImageAloha.prototype.getPosyTextSubtitle = function() {
	return this.getPosyText() + 20;
};

ImageAloha.prototype.getDx = function() {
	return this.dX;
};

ImageAloha.prototype.getDy = function() {
	return this.dY;
};

ImageAloha.prototype.setSx = function(sX) {
	this.sX = sX;
};

ImageAloha.prototype.setSy = function(sY) {
	this.sY = sY;
};

ImageAloha.prototype.drawText = function(ctx, colorText) {
	//settings
	ctx.save();

	ctx.font = "bold 15pt Arial";
	if(this.imgElement.text) {
		ctx.font = this.imgElement.text;
	}
	ctx.textAlign = 'center';
	ctx.textBaseLine = 'top';

	if(colorText) {
		ctx.fillStyle = colorText;
	}

	if (this.title) {
		ctx.fillText(this.title, this.getPosxText(), this.getPosyText(), 300);
	}

	if (this.subtitle) {
		ctx.font = "13pt Arial";
		ctx.fillText(this.subtitle, this.getPosxText(), this.getPosyTextSubtitle(), 300);
	}

	ctx.restore();

};

ImageAloha.prototype.drawImage = function(ctx, colorText, scale) {
	var color = "black";
	//desenha imagem
	ctx.save();

	if(scale) {
		ctx.translate(scale, scale);
	}

	ctx.drawImage(this.img, this.sX, this.sY, this.sWidth, this.sHeight, this.dX, this.dY, this.dWidth, this.dHeight);

	//desenha o texto


	if(colorText) {
		color = colorText;
	}

	this.drawText(ctx, color);

	ctx.restore();

};

ImageAloha.prototype.updateImage = function() {
	opacity += 1;
	velocityX += Math.random() * 0.1 * (55 - dWidth);
	dWidth += velocityX;a
	dHeight += velocityX;
};

var AlohaConf = {
	"hosts": [new ImageAloha(ImageElementsAloha.HOST, {"x":200, "y":200}, {"title":""}),
              new ImageAloha(ImageElementsAloha.HOST, {"x":500, "y":200}, {"title":""}),
				new ImageAloha(ImageElementsAloha.HOST, {"x":800, "y":200}, {"title":""})],

	"paths": [{"sx":235, "sy":400, "dx":845, "dy":400}, //linha reta
				    {"sx":240, "sy":280, "dx":240, "dy":400},
				    {"sx":540, "sy":280, "dx":540, "dy":400},
				    {"sx":840, "sy":280, "dx":840, "dy":400},
			     ],

	"text": [{"text": "Host A", "coord": {"x":240, "y":180}},
					 {"text": "Host B", "coord": {"x":540, "y":180}},
					 {"text": "Host C", "coord": {"x":840, "y":180}}],

 "img": [new ImageAloha(ImageElementsAloha.WHITE, {"x":480, "y":450}, {"title":""})],
}
var AlohaTranConf = {
	"hosts": AlohaConf.hosts,
	"paths": AlohaConf.paths,
	"text": AlohaConf.text,
	"imgAloha": [new ImageAloha(ImageElementsAloha.TRAN, {"x":400, "y":360}, {"title":""})],
}

var AlohaGarbeConf1 = {
	"hosts": AlohaConf.hosts,
	"paths": AlohaConf.paths,
	"text": AlohaConf.text,
	"img": [new ImageAloha(ImageElementsAloha.GARBE, {"x":480, "y":450}, {"title":""})],
}

var AlohaGarbeConf2 = {
	"hosts": AlohaConf.hosts,
	"paths": AlohaConf.paths,
	"text": AlohaConf.text,
	"img": [new ImageAloha(ImageElementsAloha.GARBE, {"x":400, "y":300}, {"title":""})],
}

var AlohaGarbeConf3 = {
	"hosts": AlohaConf.hosts,
	"paths": AlohaConf.paths,
	"text": AlohaConf.text,
	"img": [new ImageAloha(ImageElementsAloha.GARBE, {"x":90, "y":300}, {"title":""})],
}

var AlohaAnimationTransition = function(animationConf, msgToShow, persistent, next) {
	this.prototype = new Animation(msgToShow);
	this.hosts = animationConf.hosts;
	this.paths = animationConf.paths;
	this.text = animationConf.text;
	this.imgAloha = animationConf.imgAloha;
	this.prototype.bgClear = (animationConf.bgClear) ? true : false;
	this.prototype.next = (next) ? next : false;
	this.prototype.persistent = persistent;
}

AlohaAnimationTransition.prototype.render = function(ctx) {
	//opacity effect
	ctx.globalAlpha = this.prototype.opacity;

	//pacote parado
	this.imgAloha[0].drawImage(ctx);
};

AlohaAnimationTransition.prototype.update = function() {
	if (this.prototype.opacity <= 1) {
		this.prototype.opacity += 0.1;
	} else {
		this.prototype.stop();
	}
};

var AlohaAnimation = function(animationConf, msgToShow, bgClear, next) {
	this.prototype = new Animation(msgToShow);
	this.hosts = animationConf.hosts;
	this.paths = animationConf.paths;
	this.text = animationConf.text;
	this.prototype.bgClear = (bgClear) ? true : false;
	this.prototype.next = (next) ? next : false;
	AlohaAnimationTransition.persistent = false;
};

AlohaAnimation.prototype.render = function(ctx) {
	//opacity effect
	ctx.globalAlpha = this.prototype.opacity;
	//caminhos
	this.drawPaths(ctx, this.paths);
	//roteadores
	for (var i = 0; i < this.hosts.length; i++) {
		this.hosts[i].drawImage(ctx);
	}
	//nomes das redes
	for (var i = 0; i < this.text.length; i++) {
		this.drawText(ctx, this.text[i]);
	};
};

AlohaAnimation.prototype.drawPaths = function(ctx, paths) {
	//caminhos
	for (var i = 0; i < paths.length; i++) {
		this.drawPath(ctx, paths[i]);
	}
};

AlohaAnimation.prototype.update = function() {
	if (this.prototype.opacity <= 1) {
		this.prototype.opacity += 0.1;
	} else {
		this.prototype.stop();
	}
};

AlohaAnimation.prototype.drawPath = function(ctx, coord) {
	ctx.beginPath();
	ctx.lineWidth=(coord.line) ? (coord.line) : "10";
	ctx.strokeStyle= (coord.color) ? coord.color : "#999"; // Green path
	ctx.moveTo(coord.sx, coord.sy);
	ctx.lineTo(coord.dx,coord.dy);
	ctx.stroke(); // Draw it
};

AlohaAnimation.prototype.drawText = function(ctx, text) {
	ctx.save();
	ctx.font = APP.CONF.getTextStyle(text.style);
	ctx.fillStyle = (text.color) ? text.color : "#000";
	ctx.textAlign = 'center';
	ctx.textBaseLine = 'top';
	ctx.fillText(text.text, text.coord.x, text.coord.y, 300);
	ctx.restore();
};

var MessageAnimationImg = function(pos, next, imgs) {
this.prototype = new Animation();
this.msgs = this.buildMsgs(pos);
this.prototype.persistent = false;
this.opacity = 0.5;
this.img = imgs.img;
this.prototype.next = (next) ? true : false;
};

MessageAnimationImg.prototype.buildMsgs = function(pos) {
var msgs = [];
for (var i = 0; i < pos.length; i++) {
	msgs[i] = new Message(pos[i]);
}
return msgs;
};

MessageAnimationImg.prototype.render = function(ctx) {
//drawImg
this.img[0].drawImage(ctx);
for (var i = 0; i < this.msgs.length; i++) {
	ctx.globalAlpha = this.opacity;
	ctx.save();
	ctx.translate(this.msgs[i].x, this.msgs[i].y);
	ctx.rotate(this.msgs[i].rotate * (Math.PI/180));
	ctx.beginPath();
	ctx.rect(-(this.msgs[i].width/2), -(this.msgs[i].height/2), this.msgs[i].width, this.msgs[i].height);
	ctx.fillStyle = this.msgs[i].fillStyle;
	ctx.fill();
	ctx.restore();
}

};

MessageAnimationImg.prototype.update = function() {

var end = false;

for (var i = 0; i < this.msgs.length; i++) {

	if(this.msgs[i].moves > 0 ) {
		end = false;
		//vai decrementando os movimentos
		this.msgs[i].moves--;

		//opacity alpha ON
		if(this.msgs[i].moves >= this.msgs[i].alphaOn) {
			this.opacity += 0.1;
		}
		//opacity alpha OFF
		if(!this.noAlphaEnd && this.msgs[i].moves <= this.msgs[i].alphaOff) {
			this.opacity -= 0.1;
		}
		//moving
		this.msgs[i].x += this.msgs[i].xunits;
		this.msgs[i].y += this.msgs[i].yunits;

	} else {
		end = true;
	}

}

if(end) {
	this.prototype.stop();
}
};

buildStack = function(backSteps, steps){
	back = 1;
	var newSteps = [];

	var atual;

	//if (now != ""){
	//	atual = now;
	//}else{
		atual = backSteps.pop();
	//}

	var ant = backSteps.pop();

	newSteps.push(ant);

	//if (now == ""){
		newSteps.push(atual);
	//}else{
	//	now = "";
	//}

	while (steps.length != 0){

		newSteps.push(steps.shift());

	};

	return newSteps;
};

buildStack2 = function(backSteps, steps){
	var newSteps = [];

	var atual;

	//if (now != ""){
	//	atual = now;
	//}else{
		atual = backSteps.pop();
	//}

	var ant = backSteps.pop();

//	var antAnt = backSteps.pop();


//	newSteps.push(antAnt);
	newSteps.push(ant);

	//if (now == ""){
		newSteps.push(atual);
	//}else{
	//	now = "";
	//}

	while (steps.length != 0){

		newSteps.push(steps.shift());

	};

	return newSteps;
};
som = function(file){
	if (aud){
		sound = new Audio(file); //Load a new sound
		sound.play(); //Play the sound effect
	}
};

var BlockAnimation = function(passos, type) {
	this.prototype = new Animation();
	this.passos = passos;
	this.type = type;
	this.coords = [];
	this.msgs = [];
	this.nexts = [];
	this.noAlphaEnds = [];
};

BlockAnimation.prototype.render = function(ctx) {
	ctx.globalAlpha = this.opacity;
	ctx.save();
	ctx.fill();
};

BlockAnimation.prototype.addPassos = function(){

	var realPassos = this.passos;
	var realType = this.type;
	var realCoords = [];
	var realMsgs = [];
	var realNexts = [];
	var realAlpha = [];
	bloco = this.passos;
	var newSteps = [];
	while (this.passos > 0){
		var c = this.coords.shift();
		var m = this.msgs.shift();
		var n = this.nexts.shift();
		var a = this.noAlphaEnds.shift();
		if (this.type == 1){
			newSteps.push(new MessageAnimation(c, m, n, a));
		}else if(this.type == 2){
			newSteps.push(new MessageAnimation2(c, m, n));
		}else{
			newSteps.push(new MessageAnimationImg(c, m, n));
		}
		realCoords.push(c);
		realMsgs.push(m);
		realNexts.push(n);
		realAlpha.push(a);
		this.passos = this.passos -1;
	}
	this.type = realType;
	this.passos = realPassos;
	this.coords = realCoords;
	this.msgs = realMsgs;
	this.nexts = realNexts;
	this.noAlphaEnds = realAlpha;

	var oldSteps = animator.getSteps();
	while (oldSteps.length != 0){
		newSteps.push(oldSteps.shift());
	}
	animator.blockStep(newSteps);

};

BlockAnimation.prototype.setAtributos = function(coord, msg, next, noAlphaEnd) {
	this.coords.push(coord);
	this.msgs.push(msg);
	this.nexts.push(next);
	this.noAlphaEnds.push(noAlphaEnd);
};

var BlockBackground = function(passos) {
	this.prototype = new Animation();
	this.passos = passos;
	this.type = [];
	this.msgs = [];
	this.nexts = [];
	this.outros = [];
	this.outros2 = [];
};

BlockBackground.prototype.render = function(ctx) {
	ctx.globalAlpha = this.opacity;
	ctx.save();
	ctx.fill();
};

BlockBackground.prototype.addPassos = function(){

	var realPassos = this.passos;
	var realType = [];
	var realMsgs = [];
	var realNexts = [];
	var realOutros = [];
	var realOutros2 = [];

	var newSteps = [];
	while (this.passos > 0){
		var t = this.type.shift();
		var m = this.msgs.shift();
		var n = this.nexts.shift();
		var o = this.outros.shift();
		var o2 = this.outros2.shift();

		if (t == 'ra'){ //RouterAnimation
			newSteps.push(new RouterAnimation(o,m,n));
		}
		if (t == 'hma'){ //HtmlMessageAnimation
			newSteps.push(new HtmlMessageAnimation(o,m,n));
		}
		if (t == 'ea'){ //EmptyAnimation
			newSteps.push(new EmptyAnimation(m,n,o));
		}
		if(t == 'cai2'){ //CloudAnimationIntro2
			newSteps.push(new CloudAnimationIntro2(m,n));
		}
		if(t == 'cat'){ //CloudAnimationTransition
			newSteps.push(new CloudAnimationTransition());
		}
		if(t == 'cat2'){ //CloudAnimationTransition2
			newSteps.push(new CloudAnimationTransition2());
		}
		if(t == 'ca'){ //CloudAnimation
			newSteps.push(new CloudAnimation(m));
		}
		if(t == 'aa'){ //AlohaAnimation
			newSteps.push(new AlohaAnimation(o,m,o2,n));
		}
		if(t == 'aat'){ //AlohaAnimationTransition
			newSteps.push(new AlohaAnimationTransition(o,m,o2,n));
		}
		realType.push(t);
		realMsgs.push(m);
		realNexts.push(n);
		realOutros.push(o);
		realOutros2.push(o2);
		this.passos = this.passos -1;
	}
	this.passos = realPassos;
	this.type = realType;
	this.msgs = realMsgs;
	this.nexts = realNexts;
	this.outros = realOutros;
	this.outros2 = realOutros2;

	var oldSteps = animator.getSteps();
	while (oldSteps.length != 0){
		newSteps.push(oldSteps.shift());
	}
	animator.blockStep(newSteps);

};

BlockBackground.prototype.setAtributos = function(type,msgs,next,outros,outros2) {
	this.type.push(type);
	this.msgs.push(msgs);
	this.nexts.push(next);
	this.outros.push(outros);
	this.outros2.push(outros2);
};

//funções para funcionar os botoẽs pelo teclado
function checkEventObj ( _event_ ){
	// --- IE explorer
	if ( window.event )
  		return window.event;
	// --- Netscape and other explorers
 	else
  		return _event_;
}

function applyKey (_event_){

	// --- Retrieve event object from current web explorer
	var winObj = checkEventObj(_event_);

 	var intKeyCode = winObj.keyCode;
 	var intAltKey = winObj.altKey;
 	var intCtrlKey = winObj.ctrlKey;

  	if ( intKeyCode == 39){
		animator.nextStep();
		return false;
  	}
	if (intKeyCode == 37 ){
		animator.backStep();
		return false;
	}

	if (intKeyCode == 32 ){
		animator.speak();
		return false;
	}
}
