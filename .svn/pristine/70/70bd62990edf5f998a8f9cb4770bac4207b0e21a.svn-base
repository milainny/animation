var ArrowAnimation = function(posX, posY, rotate, arrowNumber, msg) {
		this.prototype = new Animation(msg);
		this.posX = posX;
		
		this.posY = posY;
		
		this.rotate = rotate;
		this.arrow = new ImageHost(ImageElements.ARROW, posX, posY);
		this.arrowNumber = arrowNumber;
		this.opacity = 0;
		this.prototype.persistent = false;
	};
	

ArrowAnimation.prototype.render = function(ctx) {
	ctx.globalAlpha = this.opacity;
	ctx.save();
	ctx.translate(this.posX, this.posY);
	ctx.rotate(this.rotate * (Math.PI/180));
	this.arrow.drawImage(ctx);
/*	ctx.beginPath();
	ctx.arc(385, 295, 20, 0, 2 * Math.PI, false);
	ctx.fillStyle = '#f2f2f2';
	ctx.fill();
	ctx.closePath();*/
	this.arrow.setDx(-50);
	this.arrow.setDy(-50);
	ctx.restore();
	this.drawText(ctx, this.arrowNumber);
};

ArrowAnimation.prototype.update = function() {
	if (this.opacity <= 1) {
		this.opacity += 0.06;
	} else {
		this.prototype.stop();
	}
};

ArrowAnimation.prototype.drawText = function(ctx, text) {
	ctx.font = "bold 21pt Arial";
	ctx.textAlign = 'center';
	ctx.textBaseLine = 'top';
	ctx.fillStyle = "black";
	ctx.fillText(text, this.posX, this.posY - 15, 300);
	
};
