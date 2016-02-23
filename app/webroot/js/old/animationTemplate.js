var Animator = function(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");
    this.t = 0;
    this.timeInterval = 0;
    this.startTime = 0;
    this.lastTime = 0;
    this.frame = 0;
    this.animating = false;
    this.Animators = [];

    // provided by Paul Irish
    window.requestAnimFrame = (function(callback) {
      return window.requestAnimatorFrame || window.webkitRequestAnimatorFrame || window.mozRequestAnimatorFrame || window.oRequestAnimatorFrame || window.msRequestAnimatorFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    })();
};

Animator.prototype.getContext = function() {
  return this.context;
};

Animator.prototype.getCanvas = function() {
  return this.canvas;
};

Animator.prototype.clear = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Animator.prototype.setStage = function(func) {
  this.stage = func;
};

Animator.prototype.isAnimating = function() {
  return this.animating;
};

Animator.prototype.getFrame = function() {
  return this.frame;
};

Animator.prototype.start = function() {
  this.animating = true;
  var date = new Date();
  this.startTime = date.getTime();
  this.lastTime = this.startTime;

  if (this.stage !== undefined) {
    this.stage();
  }

  this.AnimatorLoop();
};

Animator.prototype.stop = function() {
  this.animating = false;
};

Animator.prototype.getTimeInterval = function() {
  return this.timeInterval;
};

Animator.prototype.getTime = function() {
  return this.t;
};

Animator.prototype.getFps = function() {
  return this.timeInterval > 0 ? 1000 / this.timeInterval : 0;
};

Animator.prototype.AnimatorLoop = function() {
  var that = this;

  this.frame++;
  var date = new Date();
  var thisTime = date.getTime();
  this.timeInterval = thisTime - this.lastTime;
  this.t += this.timeInterval;
  this.lastTime = thisTime;
  
  console.log(this.frame);

  if (this.stage !== undefined) {
    this.stage();
  }

  if (this.animating) {
    requestAnimFrame(function() {
      that.AnimatorLoop();
    });
  }
};



window.onload = function(){
                var anim = new Animator("myCanvas");
                var canvas = anim.getCanvas();
                var context = anim.getContext();
                
                var linearSpeed = 100; // pixels / second
                var box = {
                    x: 0,
                    y: canvas.height / 2 - 25,
                    width: 100,
                    height: 50
                };
                
                anim.setStage(function(){
                    // update
                    var linearDistEachFrame = linearSpeed * this.getTimeInterval() / 1000;
                    
                    if (box.x < canvas.width - box.width) {
                        box.x += linearDistEachFrame;
                    }
                    else {
                        this.stop();
                    }
                    
                    // clear
                    this.clear();
                    
                    // draw
                    context.beginPath();
                    context.fillStyle = "blue";
                    context.fillRect(box.x, box.y, box.width, box.height);
                });
                
                
                
                var anim2 = new Animator("myCanvas");
                
                anim2.setStage(function(){
                    // update
                    var linearDistEachFrame = linearSpeed * this.getTimeInterval() / 1000;
                    
                    if (box.x < 500) {
                        box.x += 4;
                    }
                    else {
                        this.stop();
                    }
                    
                    // clear
                    this.clear();
                    
                    // draw
                    context.beginPath();
                    context.fillStyle = "red";
                    context.fillRect(box.x, 200, box.width, box.height);
                });
                
                
				anim.start();
                anim2.start();
            };