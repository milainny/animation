//utilitárias
var TO_RADIANS = Math.PI/180;

function isNumber(obj) {
  return !isNaN( parseFloat( obj ) ) && isFinite( obj );
}





//TODO verificar isso aqui se da pra aproveitar
function OnResizeCalled() {
	var gameWidth = window.innerWidth;
	var gameHeight = window.innerHeight;
	var scaleToFitX = gameWidth / 800;
	var scaleToFitY = gameHeight / 480;

	var currentScreenRatio = gameWidth / gameHeight;
	var optimalRatio = Math.min(scaleToFitX, scaleToFitY);

	// In 16/9 like screen, let's play fullscreen!
	if (currentScreenRatio >= 1.77 && currentScreenRatio <= 1.79) {
		canvas.style.width = gameWidth + "px";
		canvas.style.height = gameHeight + "px";
	} else {
		canvas.style.width = 800 * optimalRatio + "px";
		canvas.style.height = 480 * optimalRatio + "px";
	}
}