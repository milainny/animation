init = function() {
	console.log("animator starts \n");
	//inicia objeto animação
	animator = new Animator();

	//audio

	animator.setAudio(audios);

	animator.setAnimationStatus(AnimationStatus.CONTINUE);

	//background
	animator.setSteps(new ThreeWayhandShakeAnimation(ThreeWayhandShakeConf, msg.msg1, true));
	animator.setSteps(new ThreeWayhandShakeAnimation(ThreeWayhandShakeConf, msg.msg2, true));

	blocks = new BlockAnimation(1,4);
		blocks.setAttributes(ThreeWayConf1,msg.msg2); //TwhsIncrease
	animator.setSteps(blocks);
	animator.setSteps(new EmptyAnimation(msg.msg2));
	//animator.setSteps(new ThreeWayhandShakeAnimation(ThreeWayArrow1, msg.msg1, false));
	animator.setSteps(new HtmlMessageAnimation2([ {
		"id": "text5",
		"dx": 700,
		"dy": 220,
		"size": 120,
		"styleClass": "bg-blue",
		"content": msg.msg3
	}],  msg.msg2, ThreeWayArrow1));

	animator.setSteps(new HtmlMessageAnimation2([ {
		"id": "text5",
		"dx": 700,
		"dy": 220,
		"size": 120,
		"styleClass": "bg-blue",
		"content": msg.msg4
	}],  msg.msg2, ThreeWayArrow2));

animator.setSteps(new HtmlMessageAnimation2([ {
	"id": "text5",
	"dx": 700,
	"dy": 220,
	"size": 130,
	"styleClass": "bg-blue",
	"content": msg.msg5
}],  msg.msg2, ThreeWayArrow3));

animator.setSteps(new HtmlMessageAnimation2([ {
	"id": "text5",
	"dx": 700,
	"dy": 220,
	"size": 130,
	"styleClass": "bg-blue",
	"content": msg.msg6
}],  msg.msg2, ThreeWayArrow4));

animator.setSteps(new HtmlMessageAnimation2([ {
	"id": "text5",
	"dx": 700,
	"dy": 220,
	"size": 130,
	"styleClass": "bg-blue",
	"content": msg.msg7
}],  msg.msg2, ThreeWayArrow5));
animator.setSteps(new ThreeWayhandShakeAnimation(ThreeWayConf3, msg.msg8, true, false));

blocks = new BlockAnimation(1,5);
	blocks.setAttributes(ThreeWayConf2,msg.msg8); //TwhsDecreaseLeft
animator.setSteps(blocks);

animator.setSteps(new ThreeWayhandShakeAnimation(ThreeWayhandShakeConf, msg.msg9, true));

	blocks = new BlockAnimation(1,4);
		blocks.setAttributes(ThreeWayConf4,msg.msg9); //TwhsIncrease
	animator.setSteps(blocks);

	animator.setSteps(new HtmlMessageAnimation2([ {
		"id": "text5",
		"dx": 330,
		"dy": 220,
		"size": 120,
		"styleClass": "bg-blue",
		"content": msg.msg10
	}],  msg.msg9, ThreeWayArrow6));

	animator.setSteps(new HtmlMessageAnimation2([ {
		"id": "text5",
		"dx": 330,
		"dy": 220,
		"size": 120,
		"styleClass": "bg-blue",
		"content": msg.msg11
	}],  msg.msg9, ThreeWayArrow7));

	animator.setSteps(new HtmlMessageAnimation2([ {
		"id": "text5",
		"dx": 330,
		"dy": 220,
		"size": 130,
		"styleClass": "bg-blue",
		"content": msg.msg5
	}],  msg.msg9, ThreeWayArrow8));

	animator.setSteps(new HtmlMessageAnimation2([ {
		"id": "text5",
		"dx": 330,
		"dy": 220,
		"size": 130,
		"styleClass": "bg-blue",
		"content": msg.msg12
	}],  msg.msg9, ThreeWayArrow9));

	animator.setSteps(new HtmlMessageAnimation2([ {
		"id": "text5",
		"dx": 330,
		"dy": 220,
		"size": 100,
		"styleClass": "bg-blue",
		"content": msg.msg7
	}],  msg.msg9, ThreeWayArrow10));

	animator.setSteps(new HtmlMessageAnimation2([ {
		"id": "text5",
		"dx": 330,
		"dy": 220,
		"size": 100,
		"styleClass": "bg-blue",
		"content": msg.msg13
	}],  msg.msg9, ThreeWayArrow11));


	animator.setSteps(new ThreeWayhandShakeAnimation(ThreeWayConf5, msg.msg14, true, false));
	blocks = new BlockAnimation(1,6);
		blocks.setAttributes(ThreeWayConf6,msg.msg14); //TwhsDecrease
	animator.setSteps(blocks);

	animator.setSteps(new ThreeWayhandShakeAnimation(ThreeWayhandShakeConf, msg.msg15, true));

	blocks = new BlockAnimation(1,4);
		blocks.setAttributes(ThreeWayConf7,msg.msg15); //TwhsIncrease
	animator.setSteps(blocks);
	//animator.setSteps(new EmptyAnimation(msg.msg2));
	//animator.setSteps(new ThreeWayhandShakeAnimation(ThreeWayArrow1, msg.msg1, false));
	animator.setSteps(new HtmlMessageAnimation2([ {
		"id": "text5",
		"dx": 700,
		"dy": 220,
		"size": 120,
		"styleClass": "bg-blue",
		"content": msg.msg3
	}],  msg.msg15, ThreeWayArrow1));

	animator.setSteps(new HtmlMessageAnimation2([ {
		"id": "text5",
		"dx": 700,
		"dy": 220,
		"size": 120,
		"styleClass": "bg-blue",
		"content": msg.msg4
	}],  msg.msg15, ThreeWayArrow2));

animator.setSteps(new HtmlMessageAnimation2([ {
	"id": "text5",
	"dx": 700,
	"dy": 220,
	"size": 130,
	"styleClass": "bg-blue",
	"content": msg.msg16
}],  msg.msg15, ThreeWayArrow3));

animator.setSteps(new HtmlMessageAnimation2([ {
	"id": "text5",
	"dx": 700,
	"dy": 220,
	"size": 130,
	"styleClass": "bg-blue",
	"content": msg.msg17
}],  msg.msg15, ThreeWayArrow4));

animator.setSteps(new HtmlMessageAnimation2([ {
	"id": "text5",
	"dx": 700,
	"dy": 220,
	"size": 130,
	"styleClass": "bg-blue",
	"content": msg.msg13
}],  msg.msg15, ThreeWayArrow5));


animator.setSteps(new ThreeWayhandShakeAnimation(ThreeWayConf3, msg.msg18, true, false));

blocks = new BlockAnimation(1,5);
	blocks.setAttributes(ThreeWayConf2,msg.msg18); //TwhsDecreaseLeft
animator.setSteps(blocks);

animator.setSteps(new ThreeWayhandShakeAnimation(ThreeWayhandShakeConf, msg.msg19 + APP.CONF.finishButton, true));

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
