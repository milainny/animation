init = function() {
	console.log("animator starts \n");
	//inicia objeto animação
	animator = new Animator();

	//audio

	animator.setAudio(audios);

	animator.setAnimationStatus(AnimationStatus.CONTINUE);

	//background
	animator.setSteps(new HybridModelAnimation(HybridConf, msg.msg1, false));
	animator.setSteps(new EmptyAnimation(msg.msg2));
	animator.setSteps(new HybridModelAnimation(HybridConf, msg.msg3, true));
	blocks = new BlockBackground(16);
		blocks.setAttributes('ha',  msg.msg4, true, HybridConf2, false);
		blocks.setAttributes('ha', msg.msg4, true, HybridConf3, false);
		blocks.setAttributes('ha', msg.msg4, true, HybridConf3, false);
		blocks.setAttributes('ha', msg.msg4, true, HybridConf3, false);
		blocks.setAttributes('ha', msg.msg4, true, HybridConf4, false);
		blocks.setAttributes('ha', msg.msg4, true, HybridConf4, false);
		blocks.setAttributes('ha', msg.msg4, true, HybridConf4, false);
		blocks.setAttributes('ha', msg.msg4, true, HybridConf5, false);
		blocks.setAttributes('ha', msg.msg4, true, HybridConf5, false);
		blocks.setAttributes('ha', msg.msg4, true, HybridConf5, false);
		blocks.setAttributes('ha', msg.msg4, true, HybridConf6, false);
		blocks.setAttributes('ha', msg.msg4, true, HybridConf6, false);
		blocks.setAttributes('ha', msg.msg4, true, HybridConf6, false);
		blocks.setAttributes('ha', msg.msg4, true, HybridConf7, false);
		blocks.setAttributes('ha', msg.msg4, true, HybridConf7, false);
		blocks.setAttributes('ha', msg.msg4, false, HybridConf7, false);
	animator.setSteps(blocks);
	animator.setSteps(new HybridModelAnimation(HybridConf8, msg.msg5, true));
	animator.setSteps(new HybridModelAnimation(HybridConf9, msg.msg6, true));
	blocks = new BlockAnimation(1,8);
		blocks.setAttributes(HybridConf9, msg.msg6, 1,[260, 105 , 260, 155]);
	animator.setSteps(blocks);
	animator.setSteps(new HybridModelAnimation(HybridConf10, msg.msg7, true));
	blocks = new BlockAnimation(1,8);
		blocks.setAttributes(HybridConf10, msg.msg7, 1,[260, 155 , 260, 205]);
	animator.setSteps(blocks);
	animator.setSteps(new HybridModelAnimation(HybridConf11, msg.msg8, true));
	blocks = new BlockAnimation(1,8);
		blocks.setAttributes(HybridConf11, msg.msg8, 1,[260, 205 , 260, 255]);
	animator.setSteps(blocks);
	animator.setSteps(new HybridModelAnimation(HybridConf12, msg.msg9, true));
	blocks = new BlockAnimation(1,8);
		blocks.setAttributes(HybridConf12, msg.msg9, 1,[260, 255 , 260, 305]);
	animator.setSteps(blocks);
	animator.setSteps(new HybridModelAnimation(HybridConf13, msg.msg10, true));
	animator.setSteps(new HybridModelAnimation(HybridConf14, msg.msg11, true));
	blocks = new BlockAnimation(1,8);
		blocks.setAttributes(HybridConf14, msg.msg11, 3,[250, 430 , 400, 430]);
	animator.setSteps(blocks);
	animator.setSteps(new HybridModelAnimation(HybridConf15, msg.msg12, true));
	blocks = new BlockAnimation(1,8);
		blocks.setAttributes(HybridConf15, msg.msg12, 2,[290, 305 , 290, 255]);
	animator.setSteps(blocks);
	animator.setSteps(new HybridModelAnimation(HybridConf16, msg.msg13, true));
	animator.setSteps(new HybridModelAnimation(HybridConf16, msg.msg14, true));
	blocks = new BlockAnimation(1,8);
		blocks.setAttributes(HybridConf16, msg.msg14, 2,[315, 255 , 315, 205]);
	animator.setSteps(blocks);
	animator.setSteps(new HybridModelAnimation(HybridConf17, msg.msg15, true));
	blocks = new BlockAnimation(1,8);
		blocks.setAttributes(HybridConf18, msg.msg15, 1,[500, 205 , 340, 255]);
	animator.setSteps(blocks);
	animator.setSteps(new HybridModelAnimation(HybridConf19, msg.msg16, true));
	blocks = new BlockAnimation(1,8);
		blocks.setAttributes(HybridConf19, msg.msg16, 1,[500, 255 , 340, 305]);
	animator.setSteps(blocks);
	animator.setSteps(new HybridModelAnimation(HybridConf20, msg.msg17, true));
	blocks = new BlockAnimation(1,8);
		blocks.setAttributes(HybridConf21, msg.msg17, 3,[450, 430 , 600, 430]);
	animator.setSteps(blocks);
	animator.setSteps(new HybridModelAnimation(HybridConf20, msg.msg18, true));
	blocks = new BlockAnimation(6,8);
		blocks.setAttributes(HybridConf20, msg.msg18, 2,[500, 305 , 500, 255]);
		blocks.setAttributes(HybridConf22, msg.msg18, 2,[510, 255 , 510, 205]);
		blocks.setAttributes(HybridConf23, msg.msg18, 2,[710, 205 , 710, 255]);
		blocks.setAttributes(HybridConf23, msg.msg18, 1,[710, 205 , 710, 255]);
		blocks.setAttributes(HybridConf24, msg.msg18, 1,[710, 255 , 710, 305]);
		blocks.setAttributes(HybridConf25, msg.msg18, 3,[640, 430 , 820, 430]);
	animator.setSteps(blocks);
	animator.setSteps(new HybridModelAnimation(HybridConf26, msg.msg19, true));
	animator.setSteps(new HybridModelAnimation(HybridConf26, msg.msg20, true));
	blocks = new BlockAnimation(1,8);
		blocks.setAttributes(HybridConf26, msg.msg20, 2,[740, 305 , 740, 255]);
	animator.setSteps(blocks);
	animator.setSteps(new HybridModelAnimation(HybridConf27, msg.msg21, true));
	animator.setSteps(new HybridModelAnimation(HybridConf27, msg.msg22, true));
	blocks = new BlockAnimation(1,8);
		blocks.setAttributes(HybridConf27, msg.msg22, 2,[750, 255 , 750, 205]);
	animator.setSteps(blocks);
	animator.setSteps(new HybridModelAnimation(HybridConf28, msg.msg23, true));
	blocks = new BlockAnimation(1,8);
			blocks.setAttributes(HybridConf28, msg.msg23, 2,[760, 205 , 760, 155]);
	animator.setSteps(blocks);
	animator.setSteps(new HybridModelAnimation(HybridConf29, msg.msg24, true));
	blocks = new BlockAnimation(1,8);
			blocks.setAttributes(HybridConf29, msg.msg24, 2,[770, 155 , 760, 105]);
	animator.setSteps(blocks);
	animator.setSteps(new HybridModelAnimation(HybridConf30, msg.msg25 + APP.CONF.finishButton, true));
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
