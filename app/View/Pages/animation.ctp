<?php echo $this->fetch('content'); ?>
<!--<div id="controlPanel">
	<button id="pause" value="pause" onclick="pauseAnimation()">Pause</button>
	<button id="grid" onclick="gridOff()">Grid</button>
</div>-->
<div id="buttons">
	<button id="voltar" alt="Voltar Animação"; onclick="animator.backStep();" class="buttonBack"></button>
	<button id="continuar" alt="Avançar Animação"; onclick="animator.nextStep();" class="buttonNext"></button>
	<button id="aud" alt="Ativar/Desativar Áudio"onclick="animator.speak();" class="buttonSom"></button>
</div>
<div id="wrapper">
	<div id="wrapperMsg">
		<p id="msg"><?=__('clickToStart')?></p>
		<!--<button id="btn-nextStep" value="nextStep" class="btn btn-success"
			onclick="animator.nextStep()"><?=__('btnContinue')?></button> -->
	</div>
	<div id="htmlContent"></div>
	<canvas id="myCanvas" width="1152" height="768">
			Seu suporte para canvas ta bixado
		</canvas>
	<canvas id="myCanvas2" width="1152" height="768">
			Seu suporte para canvas ta bixado
	</canvas>
</div>

<script language="javascript">
	document.onkeydown = applyKey;
	document.getElementById("aud").style.backgroundPosition = "0px 0px";
</script>
