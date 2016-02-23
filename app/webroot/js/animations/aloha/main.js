var configAnimacao = {
	//Status indica como está o andamento do jogo: pausado, iniciado e finalizado
	statusAnimacao: "iniciada",
	velocidade: 100,
	intervalo: 0,
	frameIndex: 0
}

var tileSheet=new Image();
tileSheet.src="../../img/oldAnimation/animacao3.png";

/* Variaveis utilizadas para controlar o audio */
var aud = 1;
var auto = 'autoplay';
var arq = '';
var caminhoAudIni = '<audio id=\"aud\" src=\"../../audio/';
var caminhoAudMeio = '\"';
var caminhoAudFim = '></audio>';

/* Variaveis utilizadas para mover elementos */
var dx = 0;
var dy = 0;
var x  = 50;
var y  = 100;

/* Variaveis utilizadas para redimensionar os elementos*/
var comprimento = 0;
var largura     = 0;
var dcomp 		= 0;
var dlarg  		= 0;

/* Posicionamento das Camadas */
var xCamadasBaseA = 50 /*50*/;
var yCamadasBaseA = 100 /*150*/;

/* Posicionamento das Setas */		
var xSetasBase = 120 /*50*/;
var ySetasBase = 120 /*150*/;

/* Posicionamento dos Pacotes */
var xPacotesBase = 120 /*50*/;
var yPacotesBase = 120 /*150*/;

/* Ind Mostra LED */
var lIndLed = false;

var canvasApp = {
	init:function(){
		theCanvas = document.getElementById("canvas");
		theDivPrincipal = document.getElementById("divPrincipal");
		theDivText 	 = document.getElementById("divTexto");
		theDivFim    = document.getElementById("divFim");
		theDivEsq    = document.getElementById("divEsq");
		theDivDir    = document.getElementById("divDir");
		if (theCanvas.getContext){
			context = theCanvas.getContext("2d");
			theDivText.style.display="block";
			theDivFim.style.display="none";
			theDivEsq.style.display="none";
			theDivDir.style.display="none";
			canvasApp.startUp();
		}else{
			alert("Seu navegador não tem suporte ao Canvas.");
			return;
		}
	},	
	pausar:function(){
		configAnimacao.statusAnimacao = "pausada";
		clearInterval(configAnimacao.intervalo);
	},
	continuar:function(){
		if(configAnimacao.statusAnimacao != "iniciada"){
			theDivText.style.display="none";
			theDivFim.style.display="none";
			theDivEsq.style.display="none";
			theDivDir.style.display="none";
			configAnimacao.statusAnimacao = "iniciada";	
			canvasApp.startUp();
		}
	},
	parar:function(){
		configAnimacao.frameIndex = 0;
		lIndLed = false;
		canvasApp.pausar();
		canvasApp.continuar();	
	},
	som:function(){
		aud = !aud;
		if (aud){
			auto = 'autoplay';
			document.getElementById('aud').play();
		}
		else{
			auto = '';
			document.getElementById('aud').pause();
		}
		
	},
	eventImageLoaded:function () {
		startUp();
	},	
	startUp:function (){
		configAnimacao.intervalo = setInterval(canvasApp.drawScreen, configAnimacao.velocidade);
	},	
	drawLine:function (){
		context.beginPath();
        context.lineWidth = 15;
		context.moveTo(83 , 405);
        context.lineTo(theCanvas.width - 102, 405);
        context.stroke();
	},
	drawListen2:function(numIter){
		aux = 104;
		iter = 0;
		while(iter < numIter){
			context.drawImage(tileSheet, 400, 0,100,100,aux,385,15,40);
			aux = aux + 27;
			iter++;
		}
	},
	drawListen1:function(numIter){
		aux = 340;
		iter = 0;
		while(iter < numIter){
			context.drawImage(tileSheet, 500, 0,100,100,85,aux,40,15);
			aux = aux + 27;
			iter++;
		}
	},
	drawListenH1:function(){
		aux = 104;
		context.drawImage(tileSheet, 400, 0,100,100,aux,385,15,40);
		aux = aux + 27;
		context.drawImage(tileSheet, 400, 0,100,100,aux,385,15,40);
		aux = aux + 27;
		context.drawImage(tileSheet, 400, 0,100,100,aux,385,15,40);
		aux = aux + 27;
		context.drawImage(tileSheet, 400, 0,100,100,aux,385,15,40);
		aux = aux + 27;
		context.drawImage(tileSheet, 400, 0,100,100,aux,385,15,40);
		aux = aux + 27;
		context.drawImage(tileSheet, 400, 0,100,100,aux,385,15,40);
		aux = aux + 27;
		context.drawImage(tileSheet, 400, 0,100,100,aux,385,15,40);
		aux = aux + 27;
		context.drawImage(tileSheet, 400, 0,100,100,aux,385,15,40);
		aux = aux + 27;
		context.drawImage(tileSheet, 400, 0,100,100,aux,385,15,40);

	},
	drawListenV1:function(){
		aux = 340;
		context.drawImage(tileSheet, 500, 0,100,100,85,aux,40,15);
		aux = aux + 27;
		context.drawImage(tileSheet, 500, 0,100,100,85,aux,40,15);
		aux = aux + 27;
		context.drawImage(tileSheet, 500, 0,100,100,85,aux,40,15);		
	},
	drawDesktop3:function (){
		context.fillStyle = '#000000';
		context.font = 'bold 20px arial';
		context.fillText('Host C', 650, 220);
		context.drawImage(tileSheet, 0, 0,100,100,650,250,100,100);
	},
	drawDesktop2:function (){
		context.fillStyle = '#000000';
		context.font = 'bold 20px arial';
		context.fillText('Host B', 350, 220);
		context.drawImage(tileSheet, 0, 0,100,100,350,250,100,100);
	},
	drawDesktop1:function (){
		context.fillStyle = '#000000';
		context.font = 'bold 20px arial';
		context.fillText('Host A', 50, 220);
		context.drawImage(tileSheet, 0, 0,100,100,50,250,100,100);
	},
	drawPacote1:function(){
		context.drawImage(tileSheet, 100, 0,100,100,x,y,40,50);
	},
	drawPacote2:function(){
		context.drawImage(tileSheet, 100, 0,100,100,x2,y2,40,50);
	},
	drawCrash:function(){
		context.drawImage(tileSheet, 300, 0,100,100,xl,yl,90,90);
	},
	drawLine1:function(){
		context.beginPath();
        context.lineWidth = 20;
		context.moveTo(90, 330);
        context.lineTo(90, 412);
        context.stroke();
	},
	drawLine2:function(){
		context.beginPath();
        context.lineWidth = 20;
		context.moveTo(390, 330);
        context.lineTo(390, 412);
        context.stroke();

	},
	drawLine3:function(){
		context.beginPath();
        context.lineWidth = 20;
		context.moveTo(690, 330);
        context.lineTo(690, 412);
        context.stroke();
	},
	drawTitulo:function(){
		context.fillStyle = '#000000';
		context.font = 'bold 30px arial';
		context.fillText('Protocolo Aloha Puro', 250, 50);
	},
	drawFundo:function (){
		context.fillStyle="#FFFFFF";
		context.fillRect(0,0,theCanvas.width,theCanvas.height);
	},
	drawPrincipal:function (){
		canvasApp.drawLine();
		canvasApp.drawDesktop1();
		canvasApp.drawDesktop2();
		canvasApp.drawDesktop3();
		canvasApp.drawLine1();
		canvasApp.drawLine2();
		canvasApp.drawLine3();
	},
	drawInit:function (){
		canvasApp.drawFundo();
		canvasApp.drawPrincipal();
		canvasApp.drawTitulo();
	},
	drawScreen:function () {
		var cConteudo = '';
		theDivText.innerHTML = cConteudo;
		canvasApp.drawInit();
		if (configAnimacao.statusAnimacao == 'iniciada'){
			configAnimacao.frameIndex++;
		}
				
		if (configAnimacao.frameIndex == 1){
			theDivText.style.display="block";
			cConteudo = 'O <b>protocolo Aloha puro</b> é um protocolo de acesso aleatório, sem intervalo e totalmente descentralizado.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			arq = 'sub1.mp3';
			cConteudo = cConteudo + caminhoAudIni + arq + caminhoAudMeio + auto + caminhoAudFim;
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 2){
			theDivText.style.display="block";
			cConteudo = 'Quando um quadro chega pela primeira vez, o host imediatamente transmite o quadro inteiro ao canal broadcast.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			arq = 'sub2.mp3';
			cConteudo = cConteudo + caminhoAudIni + arq + caminhoAudMeio + auto + caminhoAudFim;
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 3){
			y = 320;
			x = 80;
			comprimento = 50;
			largura     = 100;
			canvasApp.drawPacote1();
			
			theDivText.style.display="block";
			cConteudo = 'Usaremos um exemplo para demonstrar o funcionamento do protocolo Aloha.'
			cConteudo = cConteudo + '<br><b>EX.:</b>O <b>host A</b> deseja enviar um quadro para o <b>host C</b> e o encaminha ao canal broadcast.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.drawPacote1();
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex > 3 && configAnimacao.frameIndex < 16){
			dx = 0;
			dy = 5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex == 16){
			y = 382;
			x = 80;
			canvasApp.drawPacote1();
//			theDivText.style.display="block";
//			cConteudo = cConteudo + '<audio id=\"aud\" src=\"../../audio/sub1.mp3\" autoplay></audio>';
//			theDivText.innerHTML = cConteudo;
		}else if(configAnimacao.frameIndex > 16 && configAnimacao.frameIndex < 65){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1(); 
		}else if(configAnimacao.frameIndex == 65){
			theDivText.style.display="block";
			cConteudo = 'Durante a transmissão, o transmissor é capaz de inferir se houve uma colisão ou não do quadro enviado.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			
			canvasApp.drawPacote1();
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex == 66){
			y2 = 320;
			x2 = 380;
			canvasApp.drawPacote1();
			canvasApp.drawPacote2();	
		}else if(configAnimacao.frameIndex == 67){
			theDivText.style.display="block";
			cConteudo = cConteudo + ' Agora, suponha que o <b>host B</b> também deseja enviar um quadro para o <b>host C</b> e o encaminha ao canal broadcast';	
			cConteudo = cConteudo + ' no mesmo momento em que o quadro enviado pelo <b>host A</b> é transmitido, ocasionando';
			cConteudo = cConteudo + ' assim uma <b>colisão<b>.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			
			canvasApp.drawPacote1();
			canvasApp.drawPacote2();	
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 67 && configAnimacao.frameIndex < 79){
			dx = 5;
			dy = 0;
			dx2 = 0;
			dy2 = 5;
			x = x + dx;
			y = y + dy;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			
			canvasApp.drawPacote1();
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex == 79){
			x = 380;
			y = 385;
			x2 = 380;
			y2 = 380;
			xl = 345;
			yl = 420;
			canvasApp.drawCrash();
			canvasApp.drawPacote1();
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex > 79 && configAnimacao.frameIndex < 85){
			dx = 0;
			dy = 5;
			dx2 = 0;
			dy2 = 5;
			x = x + dx;
			y = y + dy;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			
			canvasApp.drawCrash();
			canvasApp.drawPacote1();
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex == 85){
			
			canvasApp.drawCrash();
			canvasApp.drawPacote1();
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex == 86){
			canvasApp.drawCrash();
		}else if(configAnimacao.frameIndex == 87){
			y = 320;
			x = 80;
			
			theDivText.style.display="block";
			cConteudo = 'Neste caso o <b>host A</b> retransmite imediatamente o quadro através do canal broadcast.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;			
			canvasApp.drawPacote1();			
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 87 && configAnimacao.frameIndex < 100){
			dx = 0;
			dy = 5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if( configAnimacao.frameIndex == 100){
			y = 382;
			x = 80;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex > 100 && configAnimacao.frameIndex < 161){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();			
		}else if(configAnimacao.frameIndex == 161){
			x2 = x;
			y2 = y;
			canvasApp.drawPacote2();
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if (configAnimacao.frameIndex > 161 && configAnimacao.frameIndex < 175){
			dx2 = 0;
			dy2 = -5;			
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote2();
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if (configAnimacao.frameIndex == 175){
			xl = 260;
			yl = 350;
			canvasApp.drawCrash();
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
			dx2 = -5;
			dy2 = 0;			
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex > 175 && configAnimacao.frameIndex < 190){
			canvasApp.drawCrash();
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
			dx2 = -5;
			dy2 = 0;			
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex > 189 && configAnimacao.frameIndex < 221){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex == 221){
			x = 680;
			y = 382;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex > 221 && configAnimacao.frameIndex < 234){
			dx = 0;
			dy = -5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex == 234){	
			y2 = 320;
			x2 = 380;
			theDivText.style.display="block";
			cConteudo = 'Considere <b>p</b> uma probabilidade, ou seja, um número entre 0 e 1.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.drawPacote2();
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex == 235){
			y2 = 320;
			x2 = 380;
			theDivText.style.display="block";
			cConteudo = 'O <b>host B</b> aguardará por um tempo de transmissão de quadro e então retransmitirá o quadro com probabilidade <b>p</b>, ';
			cConteudo = cConteudo + 'ou aguardará por um outro tempo de quadro com probabilidade <b>1-p</b>.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.drawPacote2();
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 235 && configAnimacao.frameIndex < 247){
			dx2 = 0;
			dy2 = 5;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex == 247){
			x = 380;
			y = 382;
			y2 = 382;
			x2 = 380;
			canvasApp.drawPacote1();
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex > 247 && configAnimacao.frameIndex < 307){
			dx = -5;
			dy = 0;
			dx2 = 5;
			dy2 = 0;
			x = x + dx;
			y = y + dy;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote1();
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex == 307){
			x = 80;
			y = 382;
			x2 = 680;
			y2 = 382;
			canvasApp.drawPAcote1();
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex > 307 && configAnimacao.frameIndex < 320){
			dx = 0;
			dy = -5;
			dx2 = 0;
			dy2 = -5;
			x = x + dx;
			y = y + dy;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote1();
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex == 320){
			xl = -10;
			yl = 350;
			canvasApp.drawCrash();
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex > 320 && configAnimacao.frameIndex < 331){
			canvasApp.drawCrash();
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex == 331){
			theDivFim.style.display="block";
			cConteudo = '';
			cConteudo = cConteudo + '<button id="reiniciar" onclick="canvasApp.continuar();" class="btn btn-success">Reiniciar</button>';
			theDivFim.innerHTML = cConteudo;
			canvasApp.pausar();
		}else{
			canvasApp.parar();
		}
	},
};

window.onload = function() {
	$("#divDir, #divEsq").css("display", "none"); //workaround
	canvasApp.init();
};
