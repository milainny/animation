init = function() {
	console.log("animator starts \n");
	//inicia objeto animação
	animator = new Animator();
	animator.setAnimationStatus(AnimationStatus.CONTINUE);
	
	animator.setStep(new CloudAnimationIntro(msg.sub1));
	animator.setStep(new EmptyAnimation(msg.sub2));
	animator.setStep(new EmptyAnimation(msg.sub3, false, msg.html2));
	animator.setStep(new EmptyAnimation(msg.sub4));
	animator.setStep(new CloudAnimationTransition());
	animator.setStep(new EmptyAnimation(msg.sub5, false, msg.html3)); 
	animator.setStep(new HtmlMessageAnimation([el1, el2, el3], msg.sub6));
	animator.setStep(new EmptyAnimation(msg.sub7));
	
	animator.setStep(new CloudAnimation(msg.sub8));
	animator.setStep(new HtmlMessageAnimation([el4, el5], msg.sub9, true));
	
	animator.setStep(new MessageAnimation({"sx": 100, "sy": 450, "dx": 225,"dy": 565, "rotate": 40}, null, true));
	animator.setStep(new MessageAnimation({"sx": 225, "sy": 565, "dx": 350,"dy": 650, "rotate": 40}, null, true));
	
	animator.setStep(new EmptyAnimation(msg.sub10));
	
	animator.setStep(new HtmlMessageAnimation([el6, el7], msg.sub11, true));
	animator.setStep(new MessageAnimation({"sx": 350, "sy": 650, "dx": 225,"dy": 565, "rotate": 40}, null, true));
	animator.setStep(new MessageAnimation({"sx": 225, "sy": 570, "dx": 565,"dy": 570}, null, true));
	//forwarding table
	animator.setStep(new HtmlMessageAnimation([el8, el9], msg.sub12));

	animator.setStep(new MessageAnimation({"sx": 565, "sy": 570, "dx": 925,"dy": 570}, msg.sub13, true));
	animator.setStep(new MessageAnimation({"sx": 925, "sy": 570, "dx": 1050,"dy": 650, "rotate": 38}, null, true));
	animator.setStep(new EndAnimation(msg.sub13 + APP.CONF.finishButton));
	
};
