var configAnimacao = {
	//Status indica como está o andamento do jogo: pausado, iniciado e finalizado
	statusAnimacao: "iniciada",
	velocidade: 100,
	intervalo: 0,
	frameIndex: 0
}

var tileSheet=new Image();
tileSheet.src="../img/oldAnimation/animacao4.png";

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
	eventImageLoaded:function () {
		startUp();
	},	
	startUp:function (){
		configAnimacao.intervalo = setInterval(canvasApp.drawScreen, configAnimacao.velocidade);
	},	
	drawMedirTensao:function(){
		context.drawImage(tileSheet, 900, 0,100,100,xMT,370,90,70);
	},
	drawLed:function(){
		context.drawImage(tileSheet, 1200, 0,100,100,100,330,30,30);
		context.drawImage(tileSheet, 1200, 0,100,100,400,330,30,30);
		context.drawImage(tileSheet, 1200, 0,100,100,700,330,30,30);
	},
	drawLine:function (){
		context.beginPath();
        context.lineWidth = 15;
		context.moveTo(83 , 405);
        context.lineTo(theCanvas.width - 102, 405);
        context.stroke();
	},
	drawListenRigth:function(numIter){
		aux = 400;
		iter = 0;
		while(iter < numIter){
			context.drawImage(tileSheet, 400, 0,100,100,aux,385,15,40);
			aux = aux + 27;
			iter++;
		}
	},
	drawListenLeft:function(numIter){
		aux = 365;
		iter = 0;
		while(iter < numIter){
			context.drawImage(tileSheet, 400, 0,100,100,aux,385,15,40);
			aux = aux - 27;
			iter++;
		}
	},
	drawListenDown:function(numIter){
		aux = 340;
		iter = 0;
		while(iter < numIter){
			context.drawImage(tileSheet, 500, 0,100,100,386,aux,40,15);
			aux = aux + 27;
			iter++;
		}
	},
	drawListenUpLeft:function(numIter){
		aux = 385;
		iter = 0;
		while(iter < numIter){
			context.drawImage(tileSheet, 500, 0,100,100,85,aux,40,15);
			aux = aux - 27;
			iter++;
		}
	},
	drawListenUpRigth:function(numIter){
		aux = 385;
		iter = 0;
		while(iter < numIter){
			context.drawImage(tileSheet, 500, 0,100,100,685,aux,40,15);
			aux = aux - 27;
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
	drawBuffer1:function(){
		context.drawImage(tileSheet, 200, 0,100,100,150,300,100,20);
		context.drawImage(tileSheet, 200, 0,100,100,150,320,100,20);
	},
	drawPacote1:function(){
		context.drawImage(tileSheet, 100, 0,100,100,x,y,40,50);
	},
	drawPacote2:function(){
		context.drawImage(tileSheet, 100, 0,100,100,x2,y2,40,50);
	},
	drawPacote3:function(){
		context.drawImage(tileSheet, 100, 0,100,100,x3,y3,40,50);
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
		context.fillText('Protocolo Ethernet', 250, 50);
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
		
		//LED
		if(lIndLed && configAnimacao.frameIndex % 10 == 0){
			canvasApp.drawLed();
		}
		
		if (configAnimacao.frameIndex == 1){
			theDivText.style.display="block";
			cConteudo = 'Por ser capaz de permitir o acesso a um canal broadcast, o <b>Ethernet</b> precisa de um protocolo de acesso múltiplo, neste caso o <b>CSMA/CD (Carrier Sense Multiple Access with Collision Detection)</b>.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 2){
			theDivText.style.display="block";
			cConteudo = 'Cada adaptador executa o protocolo <b>CSMA/CD</b> sem coordenação explícita com os demais adaptadores <b>Ethernet</b>.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 3){
			theDivText.style.display="block";
			cConteudo = 'Vamos ilustrar o funcionamento do protocolo através do seguinte exemplo:';
			cConteudo = cConteudo + '<br>Considere que o <b>host A</b> deseja enviar um quadro para o <b>host C</b> através do canal broadcast.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 4){
			y = 297;
			x = 150;
			comprimento = 50;
			largura     = 100;
			canvasApp.drawPacote1();
			canvasApp.drawBuffer1();
			theDivText.style.display="block";
			cConteudo = 'O adaptador recebe o datagrama da camada de rede, prepara um quadro <b>Ethernet</b> e o insere no buffer de saída do adaptador.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.drawPacote1();
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 5){
			y = 297;
			x = 150;
			comprimento = 50;
			largura     = 100;
			canvasApp.drawPacote1();
			canvasApp.drawBuffer1();
			theDivText.style.display="block";
			cConteudo = 'Como o protocolo <b>CSMA/CD</b> não utiliza <b>"compartimentos"</b>, um adaptador pode começar a transmitir a qualquer momento.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.drawPacote1();
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 6){
			y = 297;
			x = 150;
			comprimento = 50;
			largura     = 100;
			canvasApp.drawPacote1();
			canvasApp.drawBuffer1();
			theDivText.style.display="block";
			cConteudo = 'Cada adaptador <b>Ethernet</b> é capaz de perceber se outros adaptadores estão transmitindo e detectar colisões, medindo os níveis de tensão antes e durante a transmissão.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.drawLed();
			lIndLed = true;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 6 && configAnimacao.frameIndex < 86){
			y = 297;
			x = 150;
			comprimento = 50;
			largura     = 100;
			canvasApp.drawPacote1();
			canvasApp.drawBuffer1();
		}else if(configAnimacao.frameIndex == 86){
			y = 297;
			x = 150;
			comprimento = 50;
			largura     = 100;
			canvasApp.drawPacote1();
			canvasApp.drawBuffer1();
			y2 = 320;
			x2 = 380;
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex > 86 && configAnimacao.frameIndex < 96){
			y = 297;
			x = 150;
			comprimento = 50;
			largura     = 100;
			canvasApp.drawPacote1();
			canvasApp.drawBuffer1();
			dx2 = 0;
			dy2 = 5;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex > 95 && configAnimacao.frameIndex < 98){
			y = 297;
			x = 150;
			comprimento = 50;
			largura     = 100;
			canvasApp.drawPacote1();
			canvasApp.drawBuffer1();
			dx2 = 0;
			dy2 = 5;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex == 98){
			y = 297;
			x = 150;
			comprimento = 50;
			largura     = 100;
			canvasApp.drawPacote1();
			canvasApp.drawBuffer1();
			y2 = 382;
			x2 = 380;
			y3 = 382;
			x3 = 380;
			canvasApp.drawPacote2();
			canvasApp.drawPacote3();
		}else if(configAnimacao.frameIndex > 98 && configAnimacao.frameIndex < 105){
			y = 297;
			x = 150;
			comprimento = 50;
			largura     = 100;
			canvasApp.drawPacote1();
			canvasApp.drawBuffer1();
			dx2 = 5;
			dy2 = 0;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			dx3 = -5;
			dy3 = 0;
			x3 = x3 + dx3;
			y3 = y3 + dy3;
			canvasApp.drawPacote2();
			canvasApp.drawPacote3();
		}else if(configAnimacao.frameIndex >= 105 && configAnimacao.frameIndex < 115){
			y = 297;
			x = 150;
			comprimento = 50;
			largura     = 100;
			canvasApp.drawPacote1();
			canvasApp.drawBuffer1();
			dx2 = 5;
			dy2 = 0;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			dx3 = -5;
			dy3 = 0;
			x3 = x3 + dx3;
			y3 = y3 + dy3;
			canvasApp.drawPacote2();			
			canvasApp.drawPacote3();			
		}else if(configAnimacao.frameIndex == 115){
			canvasApp.drawPacote1();
			canvasApp.drawBuffer1();
			canvasApp.drawPacote2();
			canvasApp.drawPacote3();
			theDivText.style.display="block";
			cConteudo = 'Antes de iniciar a transmissão, o host A identifica que o host B está enviando um quadro. Então, o host A aborta sua transmissão.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 115 && configAnimacao.frameIndex < 125){
			y = 297;
			x = 150;
			comprimento = 50;
			largura     = 100;
			canvasApp.drawPacote1();
			canvasApp.drawBuffer1();			
			dx2 = 5;
			dy2 = 0;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote2();
			dx3 = -5;
			dy3 = 0;
			x3 = x3 + dx3;
			y3 = y3 + dy3;
			canvasApp.drawPacote3();			
		}else if(configAnimacao.frameIndex >= 125 && configAnimacao.frameIndex < 135){
			y = 297;
			x = 150;
			comprimento = 50;
			largura     = 100;
			canvasApp.drawPacote1();
			canvasApp.drawBuffer1();
			dx2 = 5;
			dy2 = 0;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote2();
			dx3 = -5;
			dy3 = 0;
			x3 = x3 + dx3;
			y3 = y3 + dy3;
			canvasApp.drawPacote3();
		}else if (configAnimacao.frameIndex >= 135 && configAnimacao.frameIndex < 145){
			y = 297;
			x = 150;
			comprimento = 50;
			largura     = 100;
			canvasApp.drawPacote1();
			canvasApp.drawBuffer1();
			dx2 = 5;
			dy2 = 0;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote2();
			dx3 = -5;
			dy3 = 0;
			x3 = x3 + dx3;
			y3 = y3 + dy3;
			canvasApp.drawPacote3();
		}else if(configAnimacao.frameIndex >= 145 && configAnimacao.frameIndex < 158){
			y = 297;
			x = 150;
			comprimento = 50;
			largura     = 100;
			canvasApp.drawPacote1();
			canvasApp.drawBuffer1();
			dx2 = 5;
			dy2 = 0;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote2();
			dx3 = -5;
			dy3 = 0;
			x3 = x3 + dx3;
			y3 = y3 + dy3;
			canvasApp.drawPacote3();
		}else if(configAnimacao.frameIndex == 158){
			y = 297;
			x = 150;
			comprimento = 50;
			largura     = 100;
			canvasApp.drawPacote1();
			canvasApp.drawBuffer1();
			x2 = 680;
			y2 = 382;
			canvasApp.drawPacote2();
			x3 = 80;
			y3 = 382;
			canvasApp.drawPacote3();
		}else if(configAnimacao.frameIndex > 158 && configAnimacao.frameIndex < 172){
			y = 297;
			x = 150;
			comprimento = 50;
			largura     = 100;
			canvasApp.drawPacote1();
			canvasApp.drawBuffer1();
			dx2 = 0;
			dy2 = -5;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote2();
			dx3 = 0;
			dy3 = -5;
			x3 = x3 + dx3;
			y3 = y3 + dy3;
			canvasApp.drawPacote3();
		}else if(configAnimacao.frameIndex > 171 && configAnimacao.frameIndex < 181){
			xl = -10;
			yl = 345;
			canvasApp.drawCrash(); 
			dx3 = -5;
			dy3 = 0;
			x3 = x3 + dx3;
			y3 = y3 + dy3;
			canvasApp.drawPacote3();
		}else if(configAnimacao.frameIndex == 181){ // old: 172			
			y = 297;
			x = 150;
			comprimento = 50;
			largura     = 100;
			canvasApp.drawPacote1();
			canvasApp.drawBuffer1();
			theDivText.style.display="block";
			cConteudo = 'Este processo de <b>"ouvir"</b> antes de enviar é denominado <b>detecção de portadora</b>.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 182){ //old: 173
			y = 320;
			x = 80;
			canvasApp.drawPacote1();
			theDivText.style.display="block";
			cConteudo = 'Ao identificar que o canal está livre, o <b>host A</b> encaminha o quadro ao canal broadcast.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 183){ //old: 174
			y = 320;
			x = 80;
			canvasApp.drawPacote1();
			theDivText.style.display="block";
			cConteudo = 'Durante a transmissão, o adaptador monitora a presença de energia vinda de outros adaptadores.';	
			cConteudo = cConteudo + '<br>Este processo de <b>"ouvir"</b> enquanto <b>"fala"</b> é denominado <b>detecção de colisão</b>.'
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex > 183 && configAnimacao.frameIndex < 196){ //old: 174 e 187
			dx = 0;
			dy = 5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex == 196){//old 187
			y = 382;
			x = 80;
			canvasApp.drawPacote1();			
		}else if(configAnimacao.frameIndex > 196 && configAnimacao.frameIndex < 256){//old 187 e 308
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();			
		}else if(configAnimacao.frameIndex == 256){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
			y2 = y;
			x2 = x;
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex > 256 && configAnimacao.frameIndex < 269){
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
		}else if(configAnimacao.frameIndex == 269){
			xl = 250;
			yl = 345;
			canvasApp.drawCrash();			
			dx2 = -5;
			dy2 = 0;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote2();
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex > 269 && configAnimacao.frameIndex < 287){
			canvasApp.drawCrash();			
			dx2 = -5;
			dy2 = 0;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote2();
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex > 286 && configAnimacao.frameIndex < 317){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex == 317){ //old 308
			x = 680;
			y = 382;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex > 317 && configAnimacao.frameIndex < 331){ //old 308 e 322
			dx = 0;
			dy = -5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex == 331){ //old 322
			theDivText.style.display="block";
			cConteudo = 'Caso não seja detectada nenhuma energia vinda de outros adaptadores, o <b>host A</b> considera o quadro como entregue.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 332){ //old 323
			theDivText.style.display="block";
			cConteudo = 'Considere agora que o <b>host A</b> esteja enviando um quadro ao <b>host C</b>.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 333){ //old 324
			y = 320;
			x = 80;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex > 333 && configAnimacao.frameIndex < 346){ //old 324 e 337
			dx = 0;
			dy = 5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex == 346){ //old 337
			y = 382;
			x = 80;
			canvasApp.drawPacote1();
			y2 = 320;
			x2 = 380;
			canvasApp.drawPacote2();
			theDivText.style.display="block";
			cConteudo = 'Suponha que antes do quadro enviado pelo <b>host A</b> passar pelo <b>host B</b>, o <b>host B</b> deseja iniciar uma transmissão.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex > 346 && configAnimacao.frameIndex < 359){ // 337 e 350
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
		}else if(configAnimacao.frameIndex == 359){ //old 350
			canvasApp.drawPacote1();
			y2 = 382;
			x2 = 380;
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex > 359 && configAnimacao.frameIndex < 384){ //old 350 e 375
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
		}else if(configAnimacao.frameIndex == 384){ //old 375
			canvasApp.drawPacote1();
			canvasApp.drawPacote2();
			theDivText.style.display="block";
			cConteudo = 'Ao detectar a presença de energia vinda de outro host, o <b>host B</b> aborta a sua transmissão.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 385){ //old 376
			x = 260;
			y = 385;
			x2 = 260;
			y2 = 380;
			xl = 225;
			yl = 420;
			canvasApp.drawCrash();
			canvasApp.drawPacote1();
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex > 385 && configAnimacao.frameIndex < 391){ //old 376 e 382
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
		}else if(configAnimacao.frameIndex == 391){ //old 382
			theDivText.style.display="block";
			cConteudo = 'Para garantir que todos os hosts, inclusive o <b>host A</b>, estejam cientes da colisão, o <b>host B</b> envia um sinal de reforço de colisão de 48 bits.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex >= 392 && configAnimacao.frameIndex < 397){ //old 383 e 388
			canvasApp.drawListenDown(1);
		}else if(configAnimacao.frameIndex >= 397 && configAnimacao.frameIndex < 402){ //old 388 e 393
			canvasApp.drawListenDown(2);
		}else if(configAnimacao.frameIndex >= 402 && configAnimacao.frameIndex < 407){ //old 393 e 398
			canvasApp.drawListenDown(3);
			canvasApp.drawListenRigth(1);
			canvasApp.drawListenLeft(1);
		}else if(configAnimacao.frameIndex >= 407 && configAnimacao.frameIndex < 412){ //old 398 e 403
			canvasApp.drawListenDown(3);
			canvasApp.drawListenRigth(2);
			canvasApp.drawListenLeft(2);
		}else if(configAnimacao.frameIndex >= 412 && configAnimacao.frameIndex < 417){
			canvasApp.drawListenDown(3);
			canvasApp.drawListenRigth(3);
			canvasApp.drawListenLeft(3);
		}else if(configAnimacao.frameIndex >= 417 && configAnimacao.frameIndex < 422){
			canvasApp.drawListenDown(3);
			canvasApp.drawListenRigth(4);
			canvasApp.drawListenLeft(4);
		}else if(configAnimacao.frameIndex >= 422 && configAnimacao.frameIndex < 427){
			canvasApp.drawListenDown(3);
			canvasApp.drawListenRigth(5);
			canvasApp.drawListenLeft(5);
		}else if(configAnimacao.frameIndex >= 427 && configAnimacao.frameIndex < 432){
			canvasApp.drawListenDown(3);
			canvasApp.drawListenRigth(6);
			canvasApp.drawListenLeft(6);
		}else if(configAnimacao.frameIndex >= 432 && configAnimacao.frameIndex < 437){
			canvasApp.drawListenDown(3);
			canvasApp.drawListenRigth(7);
			canvasApp.drawListenLeft(7);
		}else if(configAnimacao.frameIndex >= 437 && configAnimacao.frameIndex < 442){
			canvasApp.drawListenDown(3);
			canvasApp.drawListenRigth(8);
			canvasApp.drawListenLeft(8);
		}else if(configAnimacao.frameIndex >= 442 && configAnimacao.frameIndex < 447){
			canvasApp.drawListenDown(3);
			canvasApp.drawListenRigth(9);
			canvasApp.drawListenLeft(9);
		}else if(configAnimacao.frameIndex >= 447 && configAnimacao.frameIndex < 452){
			canvasApp.drawListenDown(3);
			canvasApp.drawListenRigth(10);
			canvasApp.drawListenLeft(10);
		}else if(configAnimacao.frameIndex >= 452 && configAnimacao.frameIndex < 457){
			canvasApp.drawListenDown(3);
			canvasApp.drawListenRigth(11);
			canvasApp.drawListenLeft(11);
		}else if(configAnimacao.frameIndex >= 457 && configAnimacao.frameIndex < 462){
			canvasApp.drawListenDown(3);
			canvasApp.drawListenRigth(11);
			canvasApp.drawListenLeft(11);
			canvasApp.drawListenUpLeft(1);
			canvasApp.drawListenUpRigth(1);
		}else if(configAnimacao.frameIndex >= 462 && configAnimacao.frameIndex < 467){
			canvasApp.drawListenDown(3);
			canvasApp.drawListenRigth(11);
			canvasApp.drawListenLeft(11);
			canvasApp.drawListenUpLeft(2);
			canvasApp.drawListenUpRigth(2);
		}else if(configAnimacao.frameIndex >= 467 && configAnimacao.frameIndex < 472){ //old 458 e 463
			canvasApp.drawListenDown(3);
			canvasApp.drawListenRigth(11);
			canvasApp.drawListenLeft(11);
			canvasApp.drawListenUpLeft(3);
			canvasApp.drawListenUpRigth(3);
		}else if(configAnimacao.frameIndex == 472){
			theDivText.style.display="block";
			cConteudo = 'Após abortar a transmissão, os hosts entram em fase de <b>backoff exponencial</b>.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();			
		}else if(configAnimacao.frameIndex == 473){
			theDivText.style.display="block";
			cConteudo = 'Nesta fase, os hosts aguardam um tempo aleatório, antes de tentar uma retransmissão.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();			
		}else if(configAnimacao.frameIndex == 474){
			theDivText.style.display="block";
			cConteudo = 'Ao aguardar um tempo aleatório, o <b>host A</b> inicia a retransmissão.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();			
		}else if(configAnimacao.frameIndex == 475){
			y = 320;
			x = 80;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex > 475 && configAnimacao.frameIndex < 488){
			dx = 0;
			dy = 5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex == 488){
			y = 382;
			x = 80;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex > 488 && configAnimacao.frameIndex < 549){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex == 549){
			x2 =x;
			y2 = y;
			canvasApp.drawPacote2();
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex > 549 && configAnimacao.frameIndex < 561){
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
		}else if(configAnimacao.frameIndex > 560 && configAnimacao.frameIndex < 575){
			xl = 250;
			yl = 345;
			canvasApp.drawCrash();
			dx2 = -5;
			dy2 = 0;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote2();			
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();			
		}else if(configAnimacao.frameIndex > 574 && configAnimacao.frameIndex < 609){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();			
		}else if(configAnimacao.frameIndex == 609){
			x = 680;
			y = 382;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex > 609 && configAnimacao.frameIndex < 622){
			dx = 0;
			dy = -5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex == 622){
			theDivText.style.display="block";
			cConteudo = 'Também após aguardar um tempo aleatório, o <b>host B</b> inicia a retransmissão.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();			
		}else if(configAnimacao.frameIndex == 623){
			y2 = 320;
			x2 = 380;
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex > 623 && configAnimacao.frameIndex < 636){
			dx2 = 0;
			dy2 = 5;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex == 636){
			y2 = 382;
			x2 = 380;
			canvasApp.drawPacote2();
			x = x2;
			y = y2;
			canvasApp.drawPacote1();			
		}else if(configAnimacao.frameIndex > 636 && configAnimacao.frameIndex < 696){
			dx2 = -5;
			dy2 = 0;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote2();
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex == 696){
			y2 = 382;
			x2 = 80;
			x = 680;
			y = 382;
			canvasApp.drawPacote2();
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex > 696 && configAnimacao.frameIndex < 709){
			dx2 = 0;
			dy2 = -5;
			x2 = x2 + dx2;
			y2 = y2 + dy2;
			canvasApp.drawPacote2();
			dx = 0;
			dy = -5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if (configAnimacao.frameIndex == 709){
			xl = 600;
			yl = 350;
			canvasApp.drawCrash();	
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if (configAnimacao.frameIndex > 709 && configAnimacao.frameIndex < 718){
			canvasApp.drawCrash();	
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex == 718){
			theDivText.style.display="block";
			cConteudo = 'Caso o quadro não seja enviado em no máximo <b>dezesseis tentativas</b>, ele é descartado.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();			
		}else if(configAnimacao.frameIndex == 719){
			theDivFim.style.display="block";
			cConteudo = '';
			cConteudo = cConteudo + '<button id="reiniciar" onclick="canvasApp.continuar();" class="btn btn-success">Reiniciar</button>';
			theDivFim.innerHTML = cConteudo;
			canvasApp.pausar();
		}
		else{	
			canvasApp.parar();
		}
	},
};

window.onload = function() {
	$("#divDir, #divEsq").css("display", "none"); //workaround
	canvasApp.init();
};
