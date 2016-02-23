init = function() {
	console.log("animator starts \n");
	//inicia objeto animação
	animator = new Animator();

	//audio

	animator.setAudio(audios);

	animator.setAnimationStatus(AnimationStatus.CONTINUE);

	//background
	animator.setSteps(new EthernetAnimation(EthernetConf, msg.msg1, false));
	animator.setSteps(new EmptyAnimation(msg.msg2));
	animator.setSteps(new EthernetAnimation(EthernetConf, msg.msg3, true));
	animator.setSteps(new EthernetAnimationTransition(EthernetConf2, msg.msg4, true));
	animator.setSteps(new EthernetAnimationTransition(EthernetConf2, msg.msg5, true));
	animator.setSteps(new EthernetAnimationTransition(EthernetConf3, msg.msg6, false));
	blocks = new BlockAnimation(2,7);
		blocks.setAtributos([{"sx":540, "sy":300, "dx":540, "dy":400, "rotate": 90}], true, EthernetConf3);
		blocks.setAtributos([{"sx":540, "sy":400, "dx":350, "dy":400},{"sx":540, "sy":400, "dx":650, "dy":400}],true,EthernetConf3);
	animator.setSteps(blocks);
	blocks = new BlockBackground(1);
		blocks.setAtributos('eat', msg.msg7, false, EthernetTranConf, false); //EthernetAnimationTransition
	animator.setSteps(blocks);
	blocks = new BlockAnimation(3,7);
		blocks.setAtributos([{"sx":450, "sy":400, "dx":240, "dy":400},{"sx":650, "sy":400, "dx":840, "dy":400}],true,EthernetConf3);
		blocks.setAtributos([{"sx":240, "sy":400, "dx":240, "dy":320, "rotate": 90},{"sx":840, "sy":400, "dx":840, "dy":300, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":240, "sy":320, "dx":130, "dy":320, "rotate": 0}],true,AlohaGarbeConf3); //aproveitando a conf da lixeira do Aloha
	animator.setSteps(blocks);
	animator.setSteps(new EthernetAnimationTransition(EthernetConf2, msg.msg8, true));
	animator.setSteps(new EthernetAnimation(EthernetConf, msg.msg9, true));
	animator.setSteps(new EmptyAnimation(msg.msg10));
	blocks = new BlockAnimation(6,7);
		blocks.setAtributos([{"sx":240, "sy":300, "dx":240, "dy":400, "rotate": 90}], true,EthernetConf3);
		blocks.setAtributos([{"sx":240, "sy":400, "dx":540, "dy":400}], true,EthernetConf3);
		blocks.setAtributos([{"sx":540, "sy":400, "dx":590, "dy":400},{"sx":540, "sy":400, "dx":540, "dy":300, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":590, "sy":400, "dx":720, "dy":400},{"sx":540, "sy":300, "dx":450, "dy":300, "rotate": 90}],true,AlohaGarbeConf2);
		blocks.setAtributos([{"sx":720, "sy":400, "dx":840, "dy":400}],true,AlohaGarbeConf2);
		blocks.setAtributos([{"sx":840, "sy":400, "dx":840, "dy":300, "rotate": 90}], true,EthernetConf3);
	animator.setSteps(blocks);
  animator.setSteps(new EmptyAnimation(msg.msg11));
	animator.setSteps(new EmptyAnimation(msg.msg12));
	blocks = new BlockAnimation(1,7);
		blocks.setAtributos([{"sx":240, "sy":300, "dx":240, "dy":400, "rotate": 90}], true,EthernetConf3);
	animator.setSteps(blocks);
	blocks = new BlockBackground(1);
	  //blocks.setAtributos('ea',  msg.msg7, true, EthernetConf2, false);
		blocks.setAtributos('eat', msg.msg13, false, EthernetTranConf2, false); //EthernetAnimationTransition
	animator.setSteps(blocks);
	blocks = new BlockAnimation(2,7);
		blocks.setAtributos([{"sx":245, "sy":400, "dx":245, "dy":400},{"sx":540, "sy":300, "dx":540, "dy":400, "rotate": 90}], true, EthernetConf3);
		blocks.setAtributos([{"sx":235, "sy":400, "dx":380, "dy":400},{"sx":540, "sy":400, "dx":380, "dy":400},{"sx":540, "sy":400, "dx":670, "dy":400}],true,EthernetConf3);
	animator.setSteps(blocks);
	blocks = new BlockBackground(1);
		//blocks.setAtributos('ea',  msg.msg7, true, EthernetConf2, false);
		blocks.setAtributos('eat', msg.msg14, false, EthernetTranConf3, false); //EthernetAnimationTransition
	animator.setSteps(blocks);
	//animator.setSteps(new EthernetAnimation(EthernetTranConf3, msg.msg14, true));
	blocks = new BlockAnimation(1,7);
		blocks.setAtributos([{"sx":380, "sy":400, "dx":380, "dy":450},{"sx":670, "sy":400, "dx":670, "dy":450}],true,EthernetGarbeConf);
	animator.setSteps(blocks);
	animator.setSteps(new EmptyAnimation(msg.msg15));
	blocks = new BlockAnimation(18,7);
		blocks.setAtributos([{"sx":540, "sy":300, "dx":540, "dy":300, "rotate": 90}, {"sx":-10, "sy":300, "dx":-10, "dy":400, "rotate": 90}], true, EthernetConf3);
		blocks.setAtributos([{"sx":540, "sy":300, "dx":540, "dy":300, "rotate": 90}, {"sx":540, "sy":330, "dx":540, "dy":330, "rotate": 90},{"sx":-10, "sy":300, "dx":-10, "dy":400, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":540, "sy":300, "dx":540, "dy":300, "rotate": 90}, {"sx":540, "sy":330, "dx":540, "dy":330, "rotate": 90},{"sx":540, "sy":360, "dx":540, "dy":360, "rotate": 90},{"sx":-10, "sy":300, "dx":-10, "dy":400, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":540, "sy":300, "dx":540, "dy":300, "rotate": 90}, {"sx":540, "sy":330, "dx":540, "dy":330, "rotate": 90},{"sx":540, "sy":360, "dx":540, "dy":360, "rotate": 90}, {"sx":540, "sy":390, "dx":540, "dy":390, "rotate": 90},{"sx":-10, "sy":300, "dx":-10, "dy":400, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":510, "sy":400, "dx":510, "dy":400}, {"sx":570, "sy":400, "dx":570, "dy":400}, {"sx":540, "sy":300, "dx":540, "dy":300, "rotate": 90}, {"sx":540, "sy":330, "dx":540, "dy":330, "rotate": 90},{"sx":540, "sy":360, "dx":540, "dy":360, "rotate": 90}, {"sx":540, "sy":390, "dx":540, "dy":390, "rotate": 90},{"sx":-10, "sy":300, "dx":-10, "dy":400, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":480, "sy":400, "dx":480, "dy":400}, {"sx":600, "sy":400, "dx":600, "dy":400}, {"sx":510, "sy":400, "dx":510, "dy":400}, {"sx":570, "sy":400, "dx":570, "dy":400}, {"sx":540, "sy":300, "dx":540, "dy":300, "rotate": 90}, {"sx":540, "sy":330, "dx":540, "dy":330, "rotate": 90},{"sx":540, "sy":360, "dx":540, "dy":360, "rotate": 90}, {"sx":540, "sy":390, "dx":540, "dy":390, "rotate": 90},{"sx":-10, "sy":300, "dx":-10, "dy":400, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":450, "sy":400, "dx":450, "dy":400}, {"sx":630, "sy":400, "dx":630, "dy":400}, {"sx":480, "sy":400, "dx":480, "dy":400}, {"sx":600, "sy":400, "dx":600, "dy":400}, {"sx":510, "sy":400, "dx":510, "dy":400}, {"sx":570, "sy":400, "dx":570, "dy":400}, {"sx":540, "sy":300, "dx":540, "dy":300, "rotate": 90}, {"sx":540, "sy":330, "dx":540, "dy":330, "rotate": 90},{"sx":540, "sy":360, "dx":540, "dy":360, "rotate": 90}, {"sx":540, "sy":390, "dx":540, "dy":390, "rotate": 90},{"sx":-10, "sy":300, "dx":-10, "dy":400, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":420, "sy":400, "dx":420, "dy":400}, {"sx":660, "sy":400, "dx":660, "dy":400}, {"sx":450, "sy":400, "dx":450, "dy":400}, {"sx":630, "sy":400, "dx":630, "dy":400}, {"sx":480, "sy":400, "dx":480, "dy":400}, {"sx":600, "sy":400, "dx":600, "dy":400}, {"sx":510, "sy":400, "dx":510, "dy":400}, {"sx":570, "sy":400, "dx":570, "dy":400}, {"sx":540, "sy":300, "dx":540, "dy":300, "rotate": 90}, {"sx":540, "sy":330, "dx":540, "dy":330, "rotate": 90},{"sx":540, "sy":360, "dx":540, "dy":360, "rotate": 90}, {"sx":540, "sy":390, "dx":540, "dy":390, "rotate": 90},{"sx":-10, "sy":300, "dx":-10, "dy":400, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":390, "sy":400, "dx":390, "dy":400}, {"sx":690, "sy":400, "dx":690, "dy":400}, {"sx":420, "sy":400, "dx":420, "dy":400}, {"sx":660, "sy":400, "dx":660, "dy":400}, {"sx":450, "sy":400, "dx":450, "dy":400}, {"sx":630, "sy":400, "dx":630, "dy":400}, {"sx":480, "sy":400, "dx":480, "dy":400}, {"sx":600, "sy":400, "dx":600, "dy":400}, {"sx":510, "sy":400, "dx":510, "dy":400}, {"sx":570, "sy":400, "dx":570, "dy":400}, {"sx":540, "sy":300, "dx":540, "dy":300, "rotate": 90}, {"sx":540, "sy":330, "dx":540, "dy":330, "rotate": 90},{"sx":540, "sy":360, "dx":540, "dy":360, "rotate": 90}, {"sx":540, "sy":390, "dx":540, "dy":390, "rotate": 90},{"sx":-10, "sy":300, "dx":-10, "dy":400, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":360, "sy":400, "dx":360, "dy":400}, {"sx":720, "sy":400, "dx":720, "dy":400}, {"sx":390, "sy":400, "dx":390, "dy":400}, {"sx":690, "sy":400, "dx":690, "dy":400}, {"sx":420, "sy":400, "dx":420, "dy":400}, {"sx":660, "sy":400, "dx":660, "dy":400}, {"sx":450, "sy":400, "dx":450, "dy":400}, {"sx":630, "sy":400, "dx":630, "dy":400}, {"sx":480, "sy":400, "dx":480, "dy":400}, {"sx":600, "sy":400, "dx":600, "dy":400}, {"sx":510, "sy":400, "dx":510, "dy":400}, {"sx":570, "sy":400, "dx":570, "dy":400}, {"sx":540, "sy":300, "dx":540, "dy":300, "rotate": 90}, {"sx":540, "sy":330, "dx":540, "dy":330, "rotate": 90},{"sx":540, "sy":360, "dx":540, "dy":360, "rotate": 90}, {"sx":540, "sy":390, "dx":540, "dy":390, "rotate": 90},{"sx":-10, "sy":300, "dx":-10, "dy":400, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":330, "sy":400, "dx":330, "dy":400}, {"sx":750, "sy":400, "dx":750, "dy":400}, {"sx":360, "sy":400, "dx":360, "dy":400}, {"sx":720, "sy":400, "dx":720, "dy":400}, {"sx":420, "sy":400, "dx":420, "dy":400}, {"sx":660, "sy":400, "dx":660, "dy":400}, {"sx":390, "sy":400, "dx":390, "dy":400}, {"sx":690, "sy":400, "dx":690, "dy":400}, {"sx":450, "sy":400, "dx":450, "dy":400}, {"sx":630, "sy":400, "dx":630, "dy":400}, {"sx":480, "sy":400, "dx":480, "dy":400}, {"sx":600, "sy":400, "dx":600, "dy":400}, {"sx":510, "sy":400, "dx":510, "dy":400}, {"sx":570, "sy":400, "dx":570, "dy":400}, {"sx":540, "sy":300, "dx":540, "dy":300, "rotate": 90}, {"sx":540, "sy":330, "dx":540, "dy":330, "rotate": 90},{"sx":540, "sy":360, "dx":540, "dy":360, "rotate": 90}, {"sx":540, "sy":390, "dx":540, "dy":390, "rotate": 90},{"sx":-10, "sy":300, "dx":-10, "dy":400, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":300, "sy":400, "dx":300, "dy":400}, {"sx":780, "sy":400, "dx":780, "dy":400}, {"sx":330, "sy":400, "dx":330, "dy":400}, {"sx":750, "sy":400, "dx":750, "dy":400}, {"sx":420, "sy":400, "dx":420, "dy":400}, {"sx":660, "sy":400, "dx":660, "dy":400}, {"sx":360, "sy":400, "dx":360, "dy":400}, {"sx":720, "sy":400, "dx":720, "dy":400}, {"sx":390, "sy":400, "dx":390, "dy":400}, {"sx":690, "sy":400, "dx":690, "dy":400}, {"sx":450, "sy":400, "dx":450, "dy":400}, {"sx":630, "sy":400, "dx":630, "dy":400}, {"sx":480, "sy":400, "dx":480, "dy":400}, {"sx":600, "sy":400, "dx":600, "dy":400}, {"sx":510, "sy":400, "dx":510, "dy":400}, {"sx":570, "sy":400, "dx":570, "dy":400}, {"sx":540, "sy":300, "dx":540, "dy":300, "rotate": 90}, {"sx":540, "sy":330, "dx":540, "dy":330, "rotate": 90},{"sx":540, "sy":360, "dx":540, "dy":360, "rotate": 90}, {"sx":540, "sy":390, "dx":540, "dy":390, "rotate": 90},{"sx":-10, "sy":300, "dx":-10, "dy":400, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":270, "sy":400, "dx":270, "dy":400}, {"sx":810, "sy":400, "dx":810, "dy":400}, {"sx":300, "sy":400, "dx":300, "dy":400}, {"sx":780, "sy":400, "dx":780, "dy":400}, {"sx":330, "sy":400, "dx":330, "dy":400}, {"sx":750, "sy":400, "dx":750, "dy":400}, {"sx":420, "sy":400, "dx":420, "dy":400}, {"sx":660, "sy":400, "dx":660, "dy":400}, {"sx":360, "sy":400, "dx":360, "dy":400}, {"sx":720, "sy":400, "dx":720, "dy":400}, {"sx":390, "sy":400, "dx":390, "dy":400}, {"sx":690, "sy":400, "dx":690, "dy":400}, {"sx":450, "sy":400, "dx":450, "dy":400}, {"sx":630, "sy":400, "dx":630, "dy":400}, {"sx":480, "sy":400, "dx":480, "dy":400}, {"sx":600, "sy":400, "dx":600, "dy":400}, {"sx":510, "sy":400, "dx":510, "dy":400}, {"sx":570, "sy":400, "dx":570, "dy":400}, {"sx":540, "sy":300, "dx":540, "dy":300, "rotate": 90}, {"sx":540, "sy":330, "dx":540, "dy":330, "rotate": 90},{"sx":540, "sy":360, "dx":540, "dy":360, "rotate": 90}, {"sx":540, "sy":390, "dx":540, "dy":390, "rotate": 90},{"sx":-10, "sy":300, "dx":-10, "dy":400, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":245, "sy":400, "dx":245, "dy":400}, {"sx":835, "sy":400, "dx":835, "dy":400}, {"sx":270, "sy":400, "dx":270, "dy":400}, {"sx":810, "sy":400, "dx":810, "dy":400}, {"sx":300, "sy":400, "dx":300, "dy":400}, {"sx":780, "sy":400, "dx":780, "dy":400}, {"sx":330, "sy":400, "dx":330, "dy":400}, {"sx":750, "sy":400, "dx":750, "dy":400}, {"sx":420, "sy":400, "dx":420, "dy":400}, {"sx":660, "sy":400, "dx":660, "dy":400}, {"sx":360, "sy":400, "dx":360, "dy":400}, {"sx":720, "sy":400, "dx":720, "dy":400}, {"sx":390, "sy":400, "dx":390, "dy":400}, {"sx":690, "sy":400, "dx":690, "dy":400}, {"sx":450, "sy":400, "dx":450, "dy":400}, {"sx":630, "sy":400, "dx":630, "dy":400}, {"sx":480, "sy":400, "dx":480, "dy":400}, {"sx":600, "sy":400, "dx":600, "dy":400}, {"sx":510, "sy":400, "dx":510, "dy":400}, {"sx":570, "sy":400, "dx":570, "dy":400}, {"sx":540, "sy":300, "dx":540, "dy":300, "rotate": 90}, {"sx":540, "sy":330, "dx":540, "dy":330, "rotate": 90},{"sx":540, "sy":360, "dx":540, "dy":360, "rotate": 90}, {"sx":540, "sy":390, "dx":540, "dy":390, "rotate": 90},{"sx":-10, "sy":300, "dx":-10, "dy":400, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":240, "sy":380, "dx":240, "dy":380, "rotate": 90}, {"sx":840, "sy":380, "dx":840, "dy":380, "rotate": 90}, {"sx":245, "sy":400, "dx":245, "dy":400}, {"sx":835, "sy":400, "dx":835, "dy":400}, {"sx":270, "sy":400, "dx":270, "dy":400}, {"sx":810, "sy":400, "dx":810, "dy":400}, {"sx":300, "sy":400, "dx":300, "dy":400}, {"sx":780, "sy":400, "dx":780, "dy":400}, {"sx":330, "sy":400, "dx":330, "dy":400}, {"sx":750, "sy":400, "dx":750, "dy":400}, {"sx":420, "sy":400, "dx":420, "dy":400}, {"sx":660, "sy":400, "dx":660, "dy":400}, {"sx":360, "sy":400, "dx":360, "dy":400}, {"sx":720, "sy":400, "dx":720, "dy":400}, {"sx":390, "sy":400, "dx":390, "dy":400}, {"sx":690, "sy":400, "dx":690, "dy":400}, {"sx":450, "sy":400, "dx":450, "dy":400}, {"sx":630, "sy":400, "dx":630, "dy":400}, {"sx":480, "sy":400, "dx":480, "dy":400}, {"sx":600, "sy":400, "dx":600, "dy":400}, {"sx":510, "sy":400, "dx":510, "dy":400}, {"sx":570, "sy":400, "dx":570, "dy":400}, {"sx":540, "sy":300, "dx":540, "dy":300, "rotate": 90}, {"sx":540, "sy":330, "dx":540, "dy":330, "rotate": 90},{"sx":540, "sy":360, "dx":540, "dy":360, "rotate": 90}, {"sx":540, "sy":390, "dx":540, "dy":390, "rotate": 90},{"sx":-10, "sy":300, "dx":-10, "dy":400, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":240, "sy":350, "dx":240, "dy":350, "rotate": 90}, {"sx":840, "sy":350, "dx":840, "dy":350, "rotate": 90}, {"sx":240, "sy":380, "dx":240, "dy":380, "rotate": 90}, {"sx":840, "sy":380, "dx":840, "dy":380, "rotate": 90}, {"sx":245, "sy":400, "dx":245, "dy":400}, {"sx":835, "sy":400, "dx":835, "dy":400}, {"sx":270, "sy":400, "dx":270, "dy":400}, {"sx":810, "sy":400, "dx":810, "dy":400}, {"sx":300, "sy":400, "dx":300, "dy":400}, {"sx":780, "sy":400, "dx":780, "dy":400}, {"sx":330, "sy":400, "dx":330, "dy":400}, {"sx":750, "sy":400, "dx":750, "dy":400}, {"sx":420, "sy":400, "dx":420, "dy":400}, {"sx":660, "sy":400, "dx":660, "dy":400}, {"sx":360, "sy":400, "dx":360, "dy":400}, {"sx":720, "sy":400, "dx":720, "dy":400}, {"sx":390, "sy":400, "dx":390, "dy":400}, {"sx":690, "sy":400, "dx":690, "dy":400}, {"sx":450, "sy":400, "dx":450, "dy":400}, {"sx":630, "sy":400, "dx":630, "dy":400}, {"sx":480, "sy":400, "dx":480, "dy":400}, {"sx":600, "sy":400, "dx":600, "dy":400}, {"sx":510, "sy":400, "dx":510, "dy":400}, {"sx":570, "sy":400, "dx":570, "dy":400}, {"sx":540, "sy":300, "dx":540, "dy":300, "rotate": 90}, {"sx":540, "sy":330, "dx":540, "dy":330, "rotate": 90},{"sx":540, "sy":360, "dx":540, "dy":360, "rotate": 90}, {"sx":540, "sy":390, "dx":540, "dy":390, "rotate": 90},{"sx":-10, "sy":300, "dx":-10, "dy":400, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":240, "sy":320, "dx":240, "dy":320, "rotate": 90}, {"sx":840, "sy":320, "dx":840, "dy":320, "rotate": 90}, {"sx":240, "sy":350, "dx":240, "dy":350, "rotate": 90}, {"sx":840, "sy":350, "dx":840, "dy":350, "rotate": 90}, {"sx":240, "sy":380, "dx":240, "dy":380, "rotate": 90}, {"sx":840, "sy":380, "dx":840, "dy":380, "rotate": 90}, {"sx":245, "sy":400, "dx":245, "dy":400}, {"sx":835, "sy":400, "dx":835, "dy":400}, {"sx":270, "sy":400, "dx":270, "dy":400}, {"sx":810, "sy":400, "dx":810, "dy":400}, {"sx":300, "sy":400, "dx":300, "dy":400}, {"sx":780, "sy":400, "dx":780, "dy":400}, {"sx":330, "sy":400, "dx":330, "dy":400}, {"sx":750, "sy":400, "dx":750, "dy":400}, {"sx":420, "sy":400, "dx":420, "dy":400}, {"sx":660, "sy":400, "dx":660, "dy":400}, {"sx":360, "sy":400, "dx":360, "dy":400}, {"sx":720, "sy":400, "dx":720, "dy":400}, {"sx":390, "sy":400, "dx":390, "dy":400}, {"sx":690, "sy":400, "dx":690, "dy":400}, {"sx":450, "sy":400, "dx":450, "dy":400}, {"sx":630, "sy":400, "dx":630, "dy":400}, {"sx":480, "sy":400, "dx":480, "dy":400}, {"sx":600, "sy":400, "dx":600, "dy":400}, {"sx":510, "sy":400, "dx":510, "dy":400}, {"sx":570, "sy":400, "dx":570, "dy":400}, {"sx":540, "sy":300, "dx":540, "dy":300, "rotate": 90}, {"sx":540, "sy":330, "dx":540, "dy":330, "rotate": 90},{"sx":540, "sy":360, "dx":540, "dy":360, "rotate": 90}, {"sx":540, "sy":390, "dx":540, "dy":390, "rotate": 90},{"sx":-10, "sy":300, "dx":-10, "dy":400, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":240, "sy":290, "dx":240, "dy":290, "rotate": 90}, {"sx":840, "sy":290, "dx":840, "dy":290, "rotate": 90}, {"sx":240, "sy":320, "dx":240, "dy":320, "rotate": 90}, {"sx":840, "sy":320, "dx":840, "dy":320, "rotate": 90}, {"sx":240, "sy":350, "dx":240, "dy":350, "rotate": 90}, {"sx":840, "sy":350, "dx":840, "dy":350, "rotate": 90}, {"sx":240, "sy":380, "dx":240, "dy":380, "rotate": 90}, {"sx":840, "sy":380, "dx":840, "dy":380, "rotate": 90}, {"sx":245, "sy":400, "dx":245, "dy":400}, {"sx":835, "sy":400, "dx":835, "dy":400}, {"sx":270, "sy":400, "dx":270, "dy":400}, {"sx":810, "sy":400, "dx":810, "dy":400}, {"sx":300, "sy":400, "dx":300, "dy":400}, {"sx":780, "sy":400, "dx":780, "dy":400}, {"sx":330, "sy":400, "dx":330, "dy":400}, {"sx":750, "sy":400, "dx":750, "dy":400}, {"sx":420, "sy":400, "dx":420, "dy":400}, {"sx":660, "sy":400, "dx":660, "dy":400}, {"sx":360, "sy":400, "dx":360, "dy":400}, {"sx":720, "sy":400, "dx":720, "dy":400}, {"sx":390, "sy":400, "dx":390, "dy":400}, {"sx":690, "sy":400, "dx":690, "dy":400}, {"sx":450, "sy":400, "dx":450, "dy":400}, {"sx":630, "sy":400, "dx":630, "dy":400}, {"sx":480, "sy":400, "dx":480, "dy":400}, {"sx":600, "sy":400, "dx":600, "dy":400}, {"sx":510, "sy":400, "dx":510, "dy":400}, {"sx":570, "sy":400, "dx":570, "dy":400}, {"sx":540, "sy":300, "dx":540, "dy":300, "rotate": 90}, {"sx":540, "sy":330, "dx":540, "dy":330, "rotate": 90},{"sx":540, "sy":360, "dx":540, "dy":360, "rotate": 90}, {"sx":540, "sy":390, "dx":540, "dy":390, "rotate": 90},{"sx":-10, "sy":300, "dx":-10, "dy":400, "rotate": 90}],true,EthernetConf3);
	animator.setSteps(blocks);
	animator.setSteps(new EmptyAnimation(msg.msg16));
	animator.setSteps(new EmptyAnimation(msg.msg17));
	animator.setSteps(new EmptyAnimation(msg.msg18));
	blocks = new BlockAnimation(6,7);
		blocks.setAtributos([{"sx":240, "sy":300, "dx":240, "dy":400, "rotate": 90}], true,EthernetConf3);
		blocks.setAtributos([{"sx":240, "sy":400, "dx":540, "dy":400}], true,EthernetConf3);
		blocks.setAtributos([{"sx":540, "sy":400, "dx":590, "dy":400},{"sx":540, "sy":400, "dx":540, "dy":300, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":590, "sy":400, "dx":720, "dy":400},{"sx":540, "sy":300, "dx":450, "dy":300, "rotate": 90}],true,AlohaGarbeConf2);
		blocks.setAtributos([{"sx":720, "sy":400, "dx":840, "dy":400}],true,AlohaGarbeConf2);
		blocks.setAtributos([{"sx":840, "sy":400, "dx":840, "dy":300, "rotate": 90}], true,EthernetConf3);
	animator.setSteps(blocks);
	animator.setSteps(new EmptyAnimation(msg.msg19));
	blocks = new BlockAnimation(4,7);
		blocks.setAtributos([{"sx":540, "sy":300, "dx":540, "dy":400, "rotate": 90}], true, EthernetConf3);
		blocks.setAtributos([{"sx":540, "sy":400, "dx":240, "dy":400},{"sx":540, "sy":400, "dx":840, "dy":400}],true,EthernetConf3);
		blocks.setAtributos([{"sx":240, "sy":400, "dx":240, "dy":320, "rotate": 90},{"sx":840, "sy":400, "dx":840, "dy":320, "rotate": 90}],true,EthernetConf3);
		blocks.setAtributos([{"sx":840, "sy":320, "dx":730, "dy":320, "rotate": 0}],true, EthernetGarbeConf2); //aproveitando a conf da lixeira do Aloha
	animator.setSteps(blocks);
	animator.setSteps(new EmptyAnimation(msg.msg20 + APP.CONF.finishButton));
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
