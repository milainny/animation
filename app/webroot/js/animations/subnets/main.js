init = function() {
	console.log("animator starts \n");
	//inicia objeto animação
	animator = new Animator();

	animator.setAudio(audios);

	animator.setAnimationStatus(AnimationStatus.CONTINUE);

	animator.setSteps(new CloudAnimationIntro(msg.sub1));
	animator.setSteps(new EmptyAnimation(msg.sub2));
	animator.setSteps(new EmptyAnimation(msg.sub3, false, msg.html2));

	blocks = new BlockBackground(2);
		blocks.setAttributes('cai2',msg.sub4,true); //CloudAnimationIntro2
		blocks.setAttributes('ea',msg.sub4); //EmptyAnimation
	animator.setSteps(blocks);

	blocks = new BlockBackground(2);
		blocks.setAttributes('cat'); //CloudAnimationTransition
		blocks.setAttributes('ea', msg.sub5, false, msg.html3); //EmptyAnimation
	animator.setSteps(blocks);

	animator.setSteps(new HtmlMessageAnimation([el1, el2, el3], msg.sub6));
//	animator.setSteps(new EmptyAnimation(msg.sub7));


	blocks = new BlockBackground(2);
		blocks.setAttributes('cat2'); //CloudAnimationTransition2
		blocks.setAttributes('ea', msg.sub7); //EmptyAnimation
	animator.setSteps(blocks);

	blocks = new BlockBackground(1);
		blocks.setAttributes('ca',msg.sub8); //CloudAnimation
	animator.setSteps(blocks);

	animator.setSteps(new HtmlMessageAnimation([el4, el5], msg.sub9, true));

	blocks = new BlockAnimation(2,1);
		blocks.setAttributes({"sx": 100, "sy": 450, "dx": 225,"dy": 565, "rotate": 40}, null, true);
		blocks.setAttributes({"sx": 225, "sy": 565, "dx": 350,"dy": 650, "rotate": 40}, null, true);
	animator.setSteps(blocks);

	animator.setSteps(new EmptyAnimation(msg.sub10));

	animator.setSteps(new HtmlMessageAnimation([el6, el7], msg.sub11, true));

	blocks = new BlockAnimation(2,1);
		blocks.setAttributes({"sx": 350, "sy": 650, "dx": 225,"dy": 565, "rotate": 40}, null, true);
		blocks.setAttributes({"sx": 225, "sy": 570, "dx": 565,"dy": 570}, null, true);
	animator.setSteps(blocks);
	//forwarding table
	animator.setSteps(new HtmlMessageAnimation([el8, el9], msg.sub12));

	blocks = new BlockAnimation(2,1);
		blocks.setAttributes({"sx": 565, "sy": 570, "dx": 925,"dy": 570}, msg.sub13, true);
		blocks.setAttributes({"sx": 925, "sy": 570, "dx": 1050,"dy": 650, "rotate": 38}, null, true);
	animator.setSteps(blocks);
	animator.setSteps(new EndAnimation(msg.sub13 + APP.CONF.finishButton));

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
