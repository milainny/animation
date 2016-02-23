init = function() {
	console.log("animator starts \n");
	//inicia objeto animação
	animator = new Animator();

	animator.setAudio(audios);

	animator.setAnimationStatus(AnimationStatus.CONTINUE);
	animator.setSteps(new HostAnimation(msg.dns.intro1));
//	//mensagens de introdução
	animator.setSteps(new EmptyAnimation(msg.dns.intro2));

	//	blocks.setAtributos('ea', msg.dns.intro3); //EmptyAnimation
		animator.setSteps(new HtmlMessageAnimation([{ //HtmlMessageAnimation
			"id": "text3",
			"dx": 210,
			"dy": 120,
			"size": 700,
			"styleClass": "bg-blue",
			"content": "<p>" + msg.dns.intro4 + "</p>"
		}],msg.dns.intro3,false));

	animator.setSteps(new EmptyAnimation(msg.dns.intro5));
//	//iterações
  animator.setSteps(new EmptyAnimation(msg.dns.dns1));
	blocks = new BlockAnimation(1,1);
		blocks.setAtributos({"sx":250, "sy":370, "dx":555, "dy":370}, msg.dns.dns1,true);
	animator.setSteps(blocks);
	animator.setSteps(new DnsMessageAnimation(msg.dns.dnsMessage));
	animator.setSteps(new EmptyAnimation(msg.dns.dns2));
	blocks = new BlockAnimation(1,1);
		blocks.setAtributos({"sx":555, "sy":370 , "dx":950, "dy":150, "rotate": -32}, msg.dns.dns2,true);
	animator.setSteps(blocks);
	animator.setSteps(new RootServerAnimation({"x":900, "y":100} , {"title": msg.rootServer}, msg.dns.rootServer, colors.blue));
	animator.setSteps(new EmptyAnimation(msg.dns.dns3));
	blocks = new BlockAnimation(1,1);
		blocks.setAtributos({"sx":950, "sy":150, "dx": 555, "dy": 370, "rotate": -32}, msg.dns.dns3,true);
	animator.setSteps(blocks);
	animator.setSteps(new EmptyAnimation(msg.dns.dns4));
	blocks = new BlockAnimation(1,1);
		blocks.setAtributos({"sx":570, "sy":370, "dx": 950, "dy": 370}, msg.dns.dns4,true);
	animator.setSteps(blocks);
	animator.setSteps(new RootServerAnimation({"x":900, "y":320}, {"title":msg.tldServer }, msg.dns.tldServer, colors.orange));
	animator.setSteps(new EmptyAnimation(msg.dns.dns5));
	blocks = new BlockAnimation(1,1);
		blocks.setAtributos({"sx":950, "sy":370, "dx": 570, "dy": 370}, msg.dns.dns5,true);
	animator.setSteps(blocks);
	animator.setSteps(new EmptyAnimation(msg.dns.dns6));
	blocks = new BlockAnimation(1,1);
		blocks.setAtributos({"sx":555, "sy":370, "dx": 950, "dy": 600, "rotate": 32}, msg.dns.dns6,true);
	animator.setSteps(blocks);
	animator.setSteps(new RootServerAnimation({"x":900, "y":540}, {"title":msg.authorityServer}, msg.dns.authorityServer, colors.purple));
	animator.setSteps(new EmptyAnimation(msg.dns.dns7));
	blocks = new BlockAnimation(1,1);
		blocks.setAtributos({"sx":950, "sy":600, "dx": 555, "dy": 370, "rotate": 32}, msg.dns.dns7,true);
	animator.setSteps(blocks);
	animator.setSteps(new EmptyAnimation(msg.dns.dns8));
	blocks = new BlockAnimation(1,1);
		blocks.setAtributos({"sx":555, "sy":370 , "dx":250, "dy":370}, msg.dns.dns8,true);
	animator.setSteps(blocks);
	animator.setSteps(new EndAnimation(msg.dns.dns9 + APP.CONF.finishButton));

};

//função que inicia a parada
window.onload = function() {
	init();


};

function gridOff() {
	$("#wrapper").toggleClass("grid");
};

/* TODO
 - animçao não pode pausar no meio do step
 - imagens diretas n�o podem sofrer altera��es como por exemplo aumentar seu tamanho (vai pixelizar)
 - tentar montar um esquema de posicionamento do objeto relativo ao tamanho do canvas
 - refactoring usando 'use strict' mode;
 - tentar fazer a arrow direto no canvas

 PROBLEMAS
 - texto em canvas, tentar usar a classe http://www.canvastext.com/documentation.php

 */
