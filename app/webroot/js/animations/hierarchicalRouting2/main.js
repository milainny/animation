init = function() {
	console.log("animator starts \n");
	//inicia objeto animação
	animator = new Animator();

	//audio

	animator.setAudio(audios);

	animator.setAnimationStatus(AnimationStatus.CONTINUE);

	//background
	animator.setSteps(new RouterAnimation(AnimationConf, msg.intro.msg1));

	animator.setSteps(new EmptyAnimation(msg.intro.msg2));
	animator.setSteps(new EmptyAnimation(msg.intro.msg3));

	animator.setSteps(new EmptyAnimation(msg.intraAS.msg1));
	animator.setSteps(new EmptyAnimation(msg.intraAS.msg2));
	animator.setSteps(new EmptyAnimation(msg.intraAS.msg3));
	animator.setSteps(new EmptyAnimation(msg.intraAS.msg4));

	//TABELA DE ROTEAMENTO
	animator.setSteps(new RoutesAnimation(msg.tabelaRoteamento.msg1));

	animator.setSteps(new HtmlMessageAnimation([ {
		"id": "table1",
		"dx": 210,
		"dy": 120,
		"size": 700,
		"content": msg.htmlTable.table1
	}],  msg.tabelaRoteamento.msg2, false));


	animator.setSteps(new HtmlMessageAnimation([ {
		"id": "table2",
		"dx": 210,
		"dy": 120,
		"size": 700,
		"content": msg.htmlTable.table2
	}], msg.tabelaRoteamento.msg4, false));

	animator.setSteps(new HtmlMessageAnimation([ {
		"id": "table2",
		"dx": 210,
		"dy": 120,
		"size": 700,
		"content": msg.htmlTable.table3
	}], msg.tabelaRoteamento.msg5, false));

	blocks = new BlockAnimation(3,1);
		blocks.setAttributes({"sx":650, "sy":550, "dx":550, "dy":450, "rotate": 40}, msg.interAS.dns7, true);
		blocks.setAttributes({"sx":550, "sy":450, "dx":650, "dy":350, "rotate": -40}, null, true);
		blocks.setAttributes({"sx":650, "sy":350, "dx":800, "dy":350}, null, true);
	animator.setSteps(blocks);
	animator.setSteps(new EmptyAnimation(msg.tabelaRoteamento.msg6));

	//INTER-AS
	animator.setSteps(new EmptyAnimation(msg.interAS.msg1));
	animator.setSteps(new EmptyAnimation(msg.interAS.msg2));

	blocks = new BlockBackground(2);
		blocks.setAttributes(new RouterAnimation(AnimationConf,"",true));
		blocks.setAttributes(new HtmlMessageAnimation([ {
			"id": "text3",
			"dx": 210,
			"dy": 120,
			"size": 700,
			"styleClass": "bg-blue",
			"content": msg.htmlContent.html1
		}], msg.interAS.msg2, false));
	animator.setSteps(blocks);

	//blocks = new BlockBackground(2);
	animator.setSteps(new RouterAnimation(AnimationConf2, msg.interAS.msg5));
	animator.setSteps(new BorderRouterAnimation(msg.interAS.msg56,null));
	//animator.setSteps(blocks);
	//animator.setSteps(new RouterAnimation(AnimationConf2, msg.interAS.msg5,true));
	//animator.setSteps(new BorderRouterAnimation(null));
	animator.setSteps(new BorderRouterAnimation(msg.interAS.msg6, [AnimationConf2.routers2.router2b]));

	blocks = new BlockAnimation(2,1);
		blocks.setAttributes({"sx":1030, "sy":450, "dx":800, "dy":450}, msg.interAS.dns7, true);
		blocks.setAttributes({"sx":800, "sy":450, "dx":700, "dy":610, "rotate": -54}, msg.interAS.dns7, true);
	animator.setSteps(blocks);

	animator.setSteps(new EmptyAnimation(msg.interAS.msg12));
	animator.setSteps(new BorderRouterAnimation(msg.interAS.msg8, [AnimationConf2.routers2.router1d]));
	animator.setSteps(new EmptyAnimation(msg.interAS.msg9));
	animator.setSteps(new EmptyAnimation(msg.interAS.msg10));


	//SESSOES BGP
	blocks = new BlockBackground(2);
		blocks.setAttributes(new RouterAnimation(AnimationConf2,"",true));
		blocks.setAttributes(new EmptyAnimation(msg.sessaoBGP.msg1));
	animator.setSteps(blocks);

//	animator.setStep(new EmptyAnimation(msg.sessaoBGP.msg2));

	blocks = new BlockBackground(2);
		blocks.setAttributes(new RouterAnimation(AnimationConf3, msg.sessaoBGP.msg3, true));
		blocks.setAttributes(new HtmlMessageAnimation([ {
			"id": "msg1",
			"dx": 325,
			"dy": 120,
			"size": 500,
			"content": msg.htmlContent.html2
		}], null, false));
	animator.setSteps(blocks);

	animator.setSteps(new EmptyAnimation(msg.sessaoBGP.msg4));

	animator.setSteps(new BorderRouterAnimation(msg.sessaoBGP.msg5, [AnimationConf2.routers2.router3c]));

	blocks = new BlockAnimation(1,1);
		blocks.setAttributes({"sx":350, "sy":450, "dx":575, "dy":550, "rotate": 28}, null, true);
	animator.setSteps(blocks);

	animator.setSteps(new BorderRouterAnimation(msg.sessaoBGP.msg5, [AnimationConf2.routers2.router1a]));

	blocks = new BlockAnimation(1,1);
		blocks.setAttributes({"sx":575, "sy":550, "dx":350, "dy":450, "rotate": 28}, null, true);
	animator.setSteps(blocks);

	animator.setSteps(new EmptyAnimation(msg.sessaoBGP.msg6));

	blocks = new BlockAnimation(2,2);
		blocks.setAttributes([{"sx":350, "sy":450, "dx":240, "dy":390, "rotate": 28},{"sx":350, "sy":450, "dx":125, "dy":450, "rotate": 0}], true);
		blocks.setAttributes([{"sx":240, "sy":390, "dx":125, "dy":450, "rotate": -28}]);
	animator.setSteps(blocks);
	//ATRIBUTOSBGP

	blocks = new BlockBackground(2);
	blocks.setAttributes(new RouterAnimation(AnimationConf3, "", true));
	blocks.setAttributes(new EmptyAnimation(msg.atributosBGP.msg1));
	animator.setSteps(blocks);

	animator.setSteps(new RouterAnimation(AnimationConf4, msg.atributosBGP.msg2));
	animator.setSteps(new EmptyAnimation(msg.atributosBGP.msg3));

	blocks = new BlockAnimation(4,2);
		blocks.setAttributes([{"sx":800, "sy":450, "dx":700, "dy":610, "rotate": -54}], true);
		blocks.setAttributes([{"sx":700, "sy":610, "dx":460, "dy":610, "rotate": 0}], true);
		blocks.setAttributes([{"sx":460, "sy":610, "dx":575, "dy":550, "rotate": -30}], true);
		blocks.setAttributes([{"sx":575, "sy":550, "dx":350, "dy":450, "rotate": 30}], true);
	animator.setSteps(blocks);

	animator.setSteps(new EmptyAnimation(msg.atributosBGP.msg4));
	animator.setSteps(new EmptyAnimation(msg.atributosBGP.msg5));
	animator.setSteps(new BorderRouterAnimation(msg.atributosBGP.msg6, [AnimationConf2.routers2.router1d]));

	blocks = new BlockAnimation(5,2);
		blocks.setAttributes([{"sx":575, "sy":670, "dx":700, "dy":610, "rotate": -30}], true);
		blocks.setAttributes([{"sx":700, "sy":610, "dx":800, "dy":450, "rotate": -54}], true);
		blocks.setAttributes([{"sx":800, "sy":450, "dx":925, "dy":390, "rotate": -30}], true);
		blocks.setAttributes([{"sx":925, "sy":390, "dx":690, "dy":285, "rotate": 30}], true);
		blocks.setAttributes([{"sx":690, "sy":285, "dx":790, "dy":230, "rotate": -30}], true);
	animator.setSteps(blocks);

	animator.setSteps(new EndAnimation(msg.atributosBGP.msg7 + APP.CONF.finishButton));
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
