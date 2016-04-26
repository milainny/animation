init = function() {
	console.log("animator starts \n");
	//inicia objeto animação
	animator = new Animator();

	//audio

	animator.setAudio(audios);

	animator.setAnimationStatus(AnimationStatus.CONTINUE);

	//background
	animator.setSteps(new AlohaAnimation(AlohaConf, msg.msg1, false));
	animator.setSteps(new EmptyAnimation(msg.msg2));
	animator.setSteps(new EmptyAnimation(msg.msg3));
	blocks = new BlockAnimation(2,1);
		blocks.setAttributes({"sx":240, "sy":300, "dx":240, "dy":400, "rotate": 90}, msg.msg3, true, "../../audio/al/a1.mp3", null);
		blocks.setAttributes({"sx":240, "sy":400, "dx":400, "dy":400}, null, true, "../../audio/al/a1.mp3", null);
	animator.setSteps(blocks);
	blocks = new BlockBackground(2);
	  blocks.setAttributes('aa',  msg.msg4, true, AlohaConf, false);
		blocks.setAttributes('aat', msg.msg4, false, AlohaTranConf, false); //AlohaAnimationTransition
	animator.setSteps(blocks);
	blocks = new BlockBackground(2);
		blocks.setAttributes('aa', msg.msg5, true, AlohaConf, false);
		blocks.setAttributes('aat', msg.msg5, false, AlohaTranConf, false); //AlohaAnimationTransition
	animator.setSteps(blocks);
	blocks = new BlockAnimation(2,3);
		blocks.setAttributes([{"sx":400, "sy":400, "dx":550, "dy":400},{"sx":540, "sy":300, "dx":540, "dy":400, "rotate": 90}], true, AlohaGarbeConf1, "../../audio/al/a2.mp3");
		blocks.setAttributes([{"sx":540, "sy":400, "dx":630, "dy":400},{"sx":540, "sy":400, "dx":630, "dy":400, "rotate": 90}], true, AlohaGarbeConf1, "");
	animator.setSteps(blocks);
	animator.setSteps(new EmptyAnimation(msg.msg6));
	blocks = new BlockAnimation(6,3);
		blocks.setAttributes([{"sx":240, "sy":300, "dx":240, "dy":400, "rotate": 90}], true,AlohaConf, "../../audio/al/a3.mp3");
		blocks.setAttributes([{"sx":240, "sy":400, "dx":540, "dy":400}], true,AlohaConf, "");
		blocks.setAttributes([{"sx":540, "sy":400, "dx":590, "dy":400},{"sx":540, "sy":400, "dx":540, "dy":300, "rotate": 90}],true,AlohaConf, "");
		blocks.setAttributes([{"sx":590, "sy":400, "dx":720, "dy":400},{"sx":540, "sy":300, "dx":450, "dy":300, "rotate": 90}],true,AlohaGarbeConf2, "");
		blocks.setAttributes([{"sx":720, "sy":400, "dx":840, "dy":400}],true,AlohaGarbeConf2, "");
		blocks.setAttributes([{"sx":840, "sy":400, "dx":840, "dy":300, "rotate": 90}], true,AlohaConf, "");
	animator.setSteps(blocks);
	animator.setSteps(new EmptyAnimation(msg.msg7));
	animator.setSteps(new EmptyAnimation(msg.msg8));
	blocks = new BlockAnimation(4,3);
		blocks.setAttributes([{"sx":540, "sy":300, "dx":540, "dy":400, "rotate": 90}], true, AlohaConf);
		blocks.setAttributes([{"sx":540, "sy":400, "dx":240, "dy":400},{"sx":540, "sy":400, "dx":840, "dy":400}],true,AlohaConf);
		blocks.setAttributes([{"sx":240, "sy":400, "dx":240, "dy":320, "rotate": 90},{"sx":840, "sy":400, "dx":840, "dy":300, "rotate": 90}],true,AlohaGarbeConf3);
		blocks.setAttributes([{"sx":240, "sy":320, "dx":130, "dy":320, "rotate": 0}],true,AlohaGarbeConf3);
	animator.setSteps(blocks);
	animator.setSteps(new EmptyAnimation(msg.msg8 + APP.CONF.finishButton));
};

//função que inicia a parada
window.onload = function() {
	init();
	//animate();
	//animar(Stuff.steps[0]);
};

function gridOff() {
	$("#wrapper").toggleClass("grid");
}

/* TODO
 - animçao não pode pausar no meio do step
 - imagens diretas n�o podem sofrer altera��es como por exemplo aumentar seu tamanho (vai pixelizar)
 - tentar montar um esquema de posicionamento do objeto relativo ao tamanho do canvas
 - refactoring usando 'use strict' mode;
 - tentar fazer a arrow direto no canvas
 - tentar utilizar uma tabela HTML mesmo em vez das imagens

 PROBLEMAS
 - texto em canvas, tentar usar a classe http://www.canvastext.com/documentation.php

 */
