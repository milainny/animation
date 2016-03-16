init = function() {
	console.log("animator starts \n");
	//inicia objeto animação
	animator = new Animator();

	//audio

	animator.setAudio(audios);

	animator.setAnimationStatus(AnimationStatus.CONTINUE);

	//background
	animator.setSteps(new TcpAnimation(TcpConf, msg.msg1, true));
	animator.setSteps(new EmptyAnimation(msg.msg2));
	animator.setSteps(new EmptyAnimation(msg.msg3));
	animator.setSteps(new EmptyAnimation(msg.msg4));
	animator.setSteps(new TcpAnimation(TcpConf, msg.msg5, true));

	blocks = new BlockAnimation(1,4);
		blocks.setAttributes(TcpConf1,msg.msg2); //TwhsIncrease
	animator.setSteps(blocks);

	animator.setSteps(new HtmlMessageAnimation2([ {
		"id": "text5",
		"dx": 700,
		"dy": 220,
		"size": 120,
		"styleClass": "bg-blue",
		"content": msg.msg6
	}],  msg.msg5, ThreeWayArrow4));

animator.setSteps(new TcpAnimation(TcpConf3, msg.msg7, true, false));

blocks = new BlockAnimation(1,5);
	blocks.setAttributes(TcpConf2,msg.msg7); //TwhsDecreaseLeft
animator.setSteps(blocks);

animator.setSteps(new TcpAnimation(TcpConf, msg.msg8, true));

	blocks = new BlockAnimation(1,4);
		blocks.setAttributes(TcpConf4,msg.msg8); //TwhsIncrease
	animator.setSteps(blocks);

	animator.setSteps(new HtmlMessageAnimation2([ {
		"id": "text5",
		"dx": 320,
		"dy": 220,
		"size": 130,
		"styleClass": "bg-blue",
		"content": msg.msg9
	}],  msg.msg8, ThreeWayArrow8));

	animator.setSteps(new HtmlMessageAnimation2([ {
		"id": "text5",
		"dx": 320,
		"dy": 220,
		"size": 130,
		"styleClass": "bg-blue",
		"content": msg.msg6
	}],  msg.msg8, ThreeWayArrow9));

	animator.setSteps(new TcpAnimation(TcpConf5, msg.msg10, true, false));
	blocks = new BlockAnimation(1,6);
		blocks.setAttributes(TcpConf6,msg.msg10); //TwhsDecrease
	animator.setSteps(blocks);

	animator.setSteps(new TcpAnimation(TcpConf, msg.msg11, true));

	blocks = new BlockAnimation(1,4);
		blocks.setAttributes(TcpConf7,msg.msg11); //TwhsIncrease
	animator.setSteps(blocks);

animator.setSteps(new HtmlMessageAnimation2([ {
	"id": "text5",
	"dx": 700,
	"dy": 220,
	"size": 130,
	"styleClass": "bg-blue",
	"content": msg.msg12
}],  msg.msg11, ThreeWayArrow3));

animator.setSteps(new HtmlMessageAnimation2([ {
	"id": "text5",
	"dx": 700,
	"dy": 220,
	"size": 130,
	"styleClass": "bg-blue",
	"content": msg.msg13
}],  msg.msg11, ThreeWayArrow4));

animator.setSteps(new TcpAnimation(TcpConf8, msg.msg14, true, false));

blocks = new BlockAnimation(1,5);
	blocks.setAttributes(TcpConf9,msg.msg14); //TwhsDecreaseLeft
animator.setSteps(blocks);

animator.setSteps(new TcpAnimation(TcpConf, msg.msg15, true));

blocks = new BlockAnimation(1,4);
	blocks.setAttributes(TcpConf7,msg.msg15); //TwhsIncrease
animator.setSteps(blocks);

animator.setSteps(new HtmlMessageAnimation2([ {
"id": "text5",
"dx": 700,
"dy": 220,
"size": 130,
"styleClass": "bg-blue",
"content": msg.msg12
}],  msg.msg15, ThreeWayArrow3));

animator.setSteps(new HtmlMessageAnimation2([ {
"id": "text5",
"dx": 700,
"dy": 220,
"size": 130,
"styleClass": "bg-blue",
"content": msg.msg16
}],  msg.msg15, ThreeWayArrow4));

animator.setSteps(new TcpAnimation(TcpConf8, msg.msg17, true, false));

blocks = new BlockAnimation(1,5);
	blocks.setAttributes(TcpConf9,msg.msg17); //TwhsDecreaseLeft
animator.setSteps(blocks);

animator.setSteps(new TcpAnimation(TcpConf, msg.msg18, true));

blocks = new BlockAnimation(1,4);
	blocks.setAttributes(TcpConf4,msg.msg18); //TwhsIncrease
animator.setSteps(blocks);

animator.setSteps(new HtmlMessageAnimation2([ {
	"id": "text5",
	"dx": 320,
	"dy": 220,
	"size": 130,
	"styleClass": "bg-blue",
	"content": msg.msg21
}],  msg.msg18, ThreeWayArrow8));

animator.setSteps(new HtmlMessageAnimation2([ {
	"id": "text5",
	"dx": 320,
	"dy": 220,
	"size": 130,
	"styleClass": "bg-blue",
	"content": msg.msg20
}],  msg.msg18, ThreeWayArrow9));

animator.setSteps(new TcpAnimation(TcpConf5, msg.msg19, true, false));
blocks = new BlockAnimation(1,6);
	blocks.setAttributes(TcpConf6,msg.msg19); //TwhsDecrease
animator.setSteps(blocks);

animator.setSteps(new TcpAnimation(TcpConf, msg.msg19 + APP.CONF.finishButton, true));

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
