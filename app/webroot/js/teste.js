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
