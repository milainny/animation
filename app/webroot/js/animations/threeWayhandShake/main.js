var configAnimacao = {
	//Status indica como está o andamento do jogo: pausado, iniciado e finalizado
	statusAnimacao: "iniciada",
	velocidade: 100,
	intervalo: 0,
	frameIndex: 0
}

var tileSheet=new Image();
tileSheet.src="../img/oldAnimation/animacao2.png";

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
		canvasApp.pausar();
		canvasApp.continuar();	
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
		context.moveTo(100, 405);
        context.lineTo(theCanvas.width - 100, 405);
        context.stroke();
	},
	drawDesktop:function (){
		context.drawImage(tileSheet, 0, 0,100,100,650,350,100,100);
		context.fillStyle = '#000000';
		context.font = 'bold 20px arial';
		context.fillText('IP 194.153.205.26', 620, 480);
		context.fillText('Cliente origem', 620, 500);
	},
	drawServer:function (){
		context.drawImage(tileSheet, 100, 0,100,100,50,350,100,100);
		context.fillText('IP 130.57.20.1', 20, 480);
		context.fillText('Servidor destino', 20, 500);
	},
	drawRouterA:function (){
		context.drawImage(tileSheet, 200, 0,100,100,275,375,60,60);
	},
	drawRouterB:function (){
		context.drawImage(tileSheet, 200, 0,100,100,475,375,60,60);
	},
	drawPacote1:function (){
		context.drawImage(tileSheet, 700, 0,100,100,x+550,y,comprimento,largura);
	},	
	drawPacote2:function (){
		context.drawImage(tileSheet, 800, 0,100,100,x,y,comprimento,largura);
	},	
	drawPacote3:function (){
		context.drawImage(tileSheet, 900, 0,100,100,x+550,y,comprimento,largura);
	},	
	drawSetaDir1:function (){
		context.drawImage(tileSheet, 400, 0,100,100,x+685,y+120,50,50);
		
		context.drawImage(tileSheet, 300, 0,100,100,x+585,y+140,100,50);
		
		context.drawImage(tileSheet, 500, 0,100,100,x+535,y+140,50,50);
	},
	drawSetaDir2:function (){
		context.drawImage(tileSheet, 400, 0,100,100,x+670,y+120,50,50);
		
		context.drawImage(tileSheet, 300, 0,100,100,x+585,y+140,85,50);
		
		context.drawImage(tileSheet, 500, 0,100,100,x+535,y+140,50,50);
	},
	drawSetaDir3:function (){
		context.drawImage(tileSheet, 400, 0,100,100,x+655,y+120,50,50);
		
		context.drawImage(tileSheet, 300, 0,100,100,x+585,y+140,70,50);
		
		context.drawImage(tileSheet, 500, 0,100,100,x+535,y+140,50,50);
	},
	drawSetaDir4:function (){
		context.drawImage(tileSheet, 400, 0,100,100,x+640,y+120,50,50);
		
		context.drawImage(tileSheet, 300, 0,100,100,x+585,y+140,55,50);
		
		context.drawImage(tileSheet, 500, 0,100,100,x+535,y+140,50,50);
	},
	drawSetaDir5:function (){
		context.drawImage(tileSheet, 400, 0,100,100,x+620,y+120,50,50);

		context.drawImage(tileSheet, 300, 0,100,100,x+585,y+140,40,50);
		
		context.drawImage(tileSheet, 500, 0,100,100,x+535,y+140,50,50);
	},
	drawSetaEsq1:function (){
		context.drawImage(tileSheet, 400, 0,100,100,x+5,y+120,50,50);
		
		context.drawImage(tileSheet, 300, 0,100,100,x+15,y+140,100,50);
		
		context.drawImage(tileSheet, 600, 0,100,100,x+115,y+140,50,50);
	},
	drawSetaEsq2:function (){
		context.drawImage(tileSheet, 400, 0,100,100,x+20,y+120,50,50);
		
		context.drawImage(tileSheet, 300, 0,100,100,x+30,y+140,85,50);
		
		context.drawImage(tileSheet, 600, 0,100,100,x+115,y+140,50,50);
	},
	drawSetaEsq3:function (){
		context.drawImage(tileSheet, 400, 0,100,100,x+35,y+120,50,50);
		
		context.drawImage(tileSheet, 300, 0,100,100,x+45,y+140,70,50);
		
		context.drawImage(tileSheet, 600, 0,100,100,x+115,y+140,50,50);
	},
	drawSetaEsq4:function (){
		context.drawImage(tileSheet, 400, 0,100,100,x+50,y+120,50,50);
		
		context.drawImage(tileSheet, 300, 0,100,100,x+60,y+140,55,50);
		
		context.drawImage(tileSheet, 600, 0,100,100,x+115,y+140,50,50);
	},
	drawSetaEsq5:function (){
		context.drawImage(tileSheet, 400, 0,100,100,x+70,y+120,50,50);
		
		context.drawImage(tileSheet, 300, 0,100,100,x+75,y+140,40,50);
		
		context.drawImage(tileSheet, 600, 0,100,100,x+115,y+140,50,50);
	},
	drawSetaEsq6:function (){
		context.drawImage(tileSheet, 400, 0,100,100,x+85,y+120,50,50);
		
		context.drawImage(tileSheet, 300, 0,100,100,x+90,y+140,25,50);
		
		context.drawImage(tileSheet, 600, 0,100,100,x+115,y+140,50,50);
	},
	drawPacoteEnlace:function(){
		context.drawImage(tileSheet, 700, 0,100,100,x,y,35,35);
	},
	drawPacoteEnlace2:function(){
		context.drawImage(tileSheet, 800, 0,100,100,x,y,35,35);
	},
	drawPacoteEnlace3:function(){
		context.drawImage(tileSheet, 900, 0,100,100,x,y,35,35);
	},
	drawTitulo:function(){
		context.fillStyle = '#000000';
		context.font = 'bold 30px arial';
		context.fillText('O estabelecimento de conexões TCP', 150, 50);
		context.fillText('(Three-way Handshake)', 230, 80);
	},
	drawFundo:function (){
		context.fillStyle="#fff";
		context.fillRect(0,0,theCanvas.width,theCanvas.height);
	},
	drawPrincipal:function (){
		canvasApp.drawLine();
		canvasApp.drawDesktop();
		canvasApp.drawServer();
		canvasApp.drawRouterA();
		canvasApp.drawRouterB();
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
			cConteudo = 'O <b>Three-way Handshake</b> é um processo de acordo entre as duas partes que desejam estabelecer uma comunicação que consiste em três etapas.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 2){
			theDivText.style.display="block";
			cConteudo = '1. O cliente envia um segmento (requisição) com as <b>flags SYN = 1 e ACK = 0</b>';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 3){
			y = 300;
			x = 150;
			comprimento = 50;
			largura     = 50;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex > 3 && configAnimacao.frameIndex < 24){
			dx = -5;
			dy = -10;
			x = x + dx;
			y = y + dy;
			
			dcomp 		= 5;
			dlarg  		= 5;
			comprimento = comprimento + dcomp;
			largura     = largura + dlarg;
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex == 24){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote1();
			canvasApp.drawSetaDir1();
			theDivDir.style.display="block";
			cConteudo = 'Porta de Origem: <br>TCP 1026';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivDir.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 25){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote1();
			canvasApp.drawSetaDir2();
			theDivDir.style.display="block";
			cConteudo = 'Porta de Destino: <br>TCP 524';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivDir.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 26){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote1();
			canvasApp.drawSetaDir3();
			theDivDir.style.display="block";
			cConteudo = 'Número de Sequência: <br>SEQ = 0';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivDir.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 27){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote1();
			canvasApp.drawSetaDir4();
			theDivDir.style.display="block";
			cConteudo = 'Tamanho da Janela: <br>WIN = 8192 bytes';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivDir.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 28){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote1();
			canvasApp.drawSetaDir5();
			theDivDir.style.display="block";
			cConteudo = 'Flag SYN: <br>SYN = 1';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivDir.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex > 28 && configAnimacao.frameIndex < 49){
			dx = 5;
			dy = 10;
			x = x + dx;
			y = y + dy;
			
			dcomp 		= -5;
			dlarg  		= -5;
			comprimento = comprimento + dcomp;
			largura     = largura + dlarg;
			
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex == 49){
			x  = 615;
			y  = 387;
			canvasApp.drawPacoteEnlace();
		}else if(configAnimacao.frameIndex > 49 && configAnimacao.frameIndex < 67){
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace();
		}else if(configAnimacao.frameIndex == 67){
			x  = x - 80;
			y  = 387;
			canvasApp.drawPacoteEnlace();
		}else if(configAnimacao.frameIndex > 67 && configAnimacao.frameIndex < 92){
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace();
		}else if(configAnimacao.frameIndex == 92){
			x  = x - 80;
			y  = 387;
			canvasApp.drawPacoteEnlace();
		}else if(configAnimacao.frameIndex > 92 && configAnimacao.frameIndex < 116){
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace();
		}else if(configAnimacao.frameIndex == 116){
			divTexto.style.display="block";
			cConteudo = '2. O servidor responde com um segmento contendo as <b>flags SYN = 1 e ACK = 1</b>, representando que a conexão foi aceita e estabelecida e reconhecendo o segmento anterior.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			divTexto.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 117){
			y = 300;
			x = 50;
			comprimento = 50;
			largura     = 50;
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex > 117 && configAnimacao.frameIndex < 138){
			dx = 0;
			dy = -10;
			x = x + dx;
			y = y + dy;
			
			dcomp 		= 5;
			dlarg  		= 5;
			comprimento = comprimento + dcomp;
			largura     = largura + dlarg;
			
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex == 138){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote2();
			canvasApp.drawSetaEsq1();
			theDivEsq.style.display="block";
			cConteudo = 'Porta de Origem: <br>TCP 524';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivEsq.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 139){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote2();
			canvasApp.drawSetaEsq2();
			theDivEsq.style.display="block";
			cConteudo = 'Porta de Destino: <br>TCP 1026';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivEsq.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 140){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote2();
			canvasApp.drawSetaEsq3();
			theDivEsq.style.display="block";
			cConteudo = 'Número de Sequência: <br>SEQ = 0';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivEsq.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 141){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote2();
			canvasApp.drawSetaEsq4();
			theDivEsq.style.display="block";
			cConteudo = 'Tamanho da Janela: <br>WIN = 32768 bytes';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivEsq.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 142){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote2();
			canvasApp.drawSetaEsq5();
			theDivEsq.style.display="block";
			cConteudo = 'Flag SYN: <br>SYN = 1';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivEsq.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 143){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote2();
			canvasApp.drawSetaEsq6();
			theDivEsq.style.display="block";
			cConteudo = 'Flag ACK: <br>ACK = 1';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivEsq.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex > 143 && configAnimacao.frameIndex < 164){
			dx = 0;
			dy = 10;
			x = x + dx;
			y = y + dy;
			
			dcomp 		= -5;
			dlarg  		= -5;
			comprimento = comprimento + dcomp;
			largura     = largura + dlarg;
			
			canvasApp.drawPacote2();
		}else if(configAnimacao.frameIndex == 164){
			x  = 132;
			y  = 387;
			canvasApp.drawPacoteEnlace2();
		}else if(configAnimacao.frameIndex > 164 && configAnimacao.frameIndex < 188){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace2();
		}else if(configAnimacao.frameIndex == 188){
			x  = x + 80;
			y  = 387;
			canvasApp.drawPacoteEnlace2();
		}else if(configAnimacao.frameIndex > 188 && configAnimacao.frameIndex < 213){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace2();	
		}else if(configAnimacao.frameIndex == 213){
			x  = x + 80;
			y  = 387;
			canvasApp.drawPacoteEnlace2();
		}else if(configAnimacao.frameIndex > 213 && configAnimacao.frameIndex < 231){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace2();	
		}else if (configAnimacao.frameIndex == 231){	
			divTexto.style.display="block";
			cConteudo = '3. O cliente responde com um segmento com a <b>flag ACK = 1</b>';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			divTexto.innerHTML = cConteudo;
			canvasApp.pausar();
		}
		
		else if(configAnimacao.frameIndex == 232){
			y = 300;
			x = 150;
			comprimento = 50;
			largura     = 50;
			canvasApp.drawPacote3();
		}else if(configAnimacao.frameIndex > 232 && configAnimacao.frameIndex < 253){
			dx = -5;
			dy = -10;
			x = x + dx;
			y = y + dy;
			
			dcomp 		= 5;
			dlarg  		= 5;
			comprimento = comprimento + dcomp;
			largura     = largura + dlarg;
			canvasApp.drawPacote3();
		}else if(configAnimacao.frameIndex == 253){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote3();
			canvasApp.drawSetaDir1();
			theDivDir.style.display="block";
			cConteudo = 'Porta de Origem: <br>TCP 1026';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivDir.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 254){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote3();
			canvasApp.drawSetaDir2();
			theDivDir.style.display="block";
			cConteudo = 'Porta de Destino: <br>TCP 524';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivDir.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 255){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote3();
			canvasApp.drawSetaDir3();
			theDivDir.style.display="block";
			cConteudo = 'Número de Sequência: <br>SEQ = 1';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivDir.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 256){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote3();
			canvasApp.drawSetaDir4();
			theDivDir.style.display="block";
			cConteudo = 'Tamanho da Janela: <br>WIN = 8760 bytes';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivDir.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 257){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote3();
			canvasApp.drawSetaDir5();
			theDivDir.style.display="block";
			cConteudo = 'Flag ACK: <br>ACK = 1';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivDir.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex > 257 && configAnimacao.frameIndex < 278){
			dx = 5;
			dy = 10;
			x = x + dx;
			y = y + dy;
			
			dcomp 		= -5;
			dlarg  		= -5;
			comprimento = comprimento + dcomp;
			largura     = largura + dlarg;
			
			canvasApp.drawPacote1();
		}else if(configAnimacao.frameIndex == 278){
			x  = 615;
			y  = 387;
			canvasApp.drawPacoteEnlace3();
		}else if(configAnimacao.frameIndex > 278 && configAnimacao.frameIndex < 296){
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace3();
		}else if(configAnimacao.frameIndex == 296){
			x  = x - 80;
			y  = 387;
			canvasApp.drawPacoteEnlace3();
		}else if(configAnimacao.frameIndex > 296 && configAnimacao.frameIndex < 321){
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace3();
		}else if(configAnimacao.frameIndex == 321){
			x  = x - 80;
			y  = 387;
			canvasApp.drawPacoteEnlace3();
		}else if(configAnimacao.frameIndex > 321 && configAnimacao.frameIndex < 345){
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace3();
		}else if(configAnimacao.frameIndex == 345){
			divTexto.style.display="block";
			cConteudo = 'Após o término dos 3 passos, o <b>Three-way Handshake</b> está completo e as duas partes podem trocar dados entre si.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			divTexto.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex == 346){
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
	canvasApp.init();
};
