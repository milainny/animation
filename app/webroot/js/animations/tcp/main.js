var configAnimacao = {
	//Status indica como está o andamento do jogo: pausado, iniciado e finalizado
	statusAnimacao: "iniciada",
	velocidade: 100,
	intervalo: 0,
	frameIndex: 0
};

var tileSheet=new Image();
tileSheet.src="../img/oldAnimation/animacao5.png";

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

/* Identifica qual imagem deve ser apresentada */
var posicao = 0;

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
		context.fillText('Host A', 660, 480);
	},
	drawServer:function (){
		context.drawImage(tileSheet, 0, 0,100,100,50,350,100,100);
		context.fillText('Host B', 50, 480);
	},
	drawRouterA:function (){
		context.drawImage(tileSheet, 200, 0,100,100,275,375,60,60);
	},
	drawRouterB:function (){
		context.drawImage(tileSheet, 200, 0,100,100,475,375,60,60);
	},
	drawPacote:function (pos){
		context.drawImage(tileSheet, pos, 0,100,100,x+550,y,comprimento,largura);
	},	
	drawPacote2:function (pos){
		context.drawImage(tileSheet, pos, 0,100,100,x,y,comprimento,largura);
	},	
	drawCrash:function(){
		context.drawImage(tileSheet, 1000, 0,100,100,xl,yl,90,90);
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
	drawPacoteEnlace:function(posicao){
		context.drawImage(tileSheet, posicao, 0,100,100,x,y,35,35);
	},
	drawPacoteEnlace2:function(){
		context.drawImage(tileSheet, 800, 0,100,100,x,y,35,35);
	},
	drawPacoteEnlace3:function(){
		context.drawImage(tileSheet, 900, 0,100,100,x,y,35,35);
	},
	drawPacoteEnlace4:function(){
		context.drawImage(tileSheet, 900, 0,100,100,x2,y2,35,35);
	},
	drawTitulo:function(){
		context.fillStyle = '#000000';
		context.font = 'bold 25px arial';
		context.fillText('TCP: Número de sequência e número de reconhecimento', 50, 50);
	},
	drawFundo:function (){
		context.fillStyle="#FFFFFF";
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
			cConteudo = 'Dois dos mais importantes campos do cabeçalho TCP são o campo de <b>número de sequência</b> e o campo de <b>número de reconhecimento</b>.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 2){
			theDivText.style.display="block";
			cConteudo = 'Esses números são aplicados sobre a cadeia de bytes transmitidos, e não sobre a série de segmentos transmitidos.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex == 3){
			theDivText.style.display="block";
			cConteudo = 'O <b>número de sequência</b> para um segmento é o número do primeiro byte do segmento.';	
			cConteudo = cConteudo + '<br><b>EX.:</b> Suponha que um processo no host A deseja enviar uma mensagem ao processo no host B por uma conexão TCP.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex == 4){
			theDivText.style.display="block";
			cConteudo = 'Considere que a cadeia de dados seja um arquivo de 500.000 bytes, o MSS (maximum segment size) seja de 1.000 bytes e que seja atribuído o número 0 ao primeiro byte da cadeia de dados.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex == 5){
			theDivText.style.display="block";
			cConteudo = 'Neste caso, o TCP constrói 500 segmentos a partir da cadeia de dados.';
			cConteudo = cConteudo + '<br>O primeiro segmento recebe o <b>número de sequência</b> 0, o segundo 1000, o terceiro 2000 e assim sucessivamente.';			
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex == 6){
			y = 300;
			x = 150;
			comprimento = 50;
			largura     = 50;
			canvasApp.drawPacote(700);
		}else if(configAnimacao.frameIndex > 6 && configAnimacao.frameIndex < 27){
			dx = -5;
			dy = -10;
			x = x + dx;
			y = y + dy;
			dcomp 		= 5;
			dlarg  		= 5;
			comprimento = comprimento + dcomp;
			largura     = largura + dlarg;
			canvasApp.drawPacote(700);
		}else if(configAnimacao.frameIndex == 27){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote(700);
			canvasApp.drawSetaDir4();
			theDivDir.style.display="block";
			cConteudo = '<b>Número de sequência</b> = 0.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivDir.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex > 27 && configAnimacao.frameIndex < 49){
			dx = 5;
			dy = 10;
			x = x + dx;
			y = y + dy;
			
			dcomp 		= -5;
			dlarg  		= -5;
			comprimento = comprimento + dcomp;
			largura     = largura + dlarg;
			
			canvasApp.drawPacote(700);
		}else if(configAnimacao.frameIndex == 49){
			x  = 615;
			y  = 387;
			canvasApp.drawPacoteEnlace(700);
		}else if(configAnimacao.frameIndex > 49 && configAnimacao.frameIndex < 67){
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace(700);
		}else if(configAnimacao.frameIndex == 67){
			x  = x - 80;
			y  = 387;
			canvasApp.drawPacoteEnlace(700);
		}else if(configAnimacao.frameIndex > 67 && configAnimacao.frameIndex < 92){
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace(700);
		}else if(configAnimacao.frameIndex == 92){
			x  = x - 80;
			y  = 387;
			canvasApp.drawPacoteEnlace(700);
		}else if(configAnimacao.frameIndex > 92 && configAnimacao.frameIndex < 112){
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace(700);
		}else if(configAnimacao.frameIndex == 112){
			theDivText.style.display="block";
			cConteudo = 'Já o <b>número de reconhecimento</b> que um host atribui a seu segmento é o número de sequência do próximo byte que ele está aguardando.';	
			cConteudo = cConteudo + '<br><b>EX.:</b> O host B está prestes a enviar os bytes numerados de 0 a 535 ao host A.';
			cConteudo = cConteudo + '<br>Como acabou de receber os bytes de 0 a 999, o host B envia como <b>número de reconhecimento</b> o valor 1000 referente ao próximo byte.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex == 113){
			y = 300;
			x = 50;
			comprimento = 50;
			largura     = 50;
			canvasApp.drawPacote2(1200);
		}else if(configAnimacao.frameIndex > 113 && configAnimacao.frameIndex < 134){
			dx = 0;
			dy = -10;
			x = x + dx;
			y = y + dy;
			dcomp 		= 5;
			dlarg  		= 5;
			comprimento = comprimento + dcomp;
			largura     = largura + dlarg;
			canvasApp.drawPacote2(1200);
		}else if(configAnimacao.frameIndex == 134){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote2(1200);
			canvasApp.drawSetaEsq4();
			theDivEsq.style.display="block";
			cConteudo = '<b>Número de sequência</b> = 0.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivEsq.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 135){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote2(1200);
			canvasApp.drawSetaEsq3();
			theDivEsq.style.display="block";
			cConteudo = '<b>Número de reconhecimento</b> = 1000.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivEsq.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex > 135 && configAnimacao.frameIndex < 156){
			dx = 0;
			dy = 10;
			x = x + dx;
			y = y + dy;
			dcomp 		= -5;
			dlarg  		= -5;
			comprimento = comprimento + dcomp;
			largura     = largura + dlarg;
			canvasApp.drawPacote2(1200);
		}else if(configAnimacao.frameIndex == 156){
			x  = 148;
			y  = 387;
			canvasApp.drawPacoteEnlace(1200);
		}else if(configAnimacao.frameIndex > 156 && configAnimacao.frameIndex < 177){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace(1200);
		}else if(configAnimacao.frameIndex == 177){
			x  = x + 80;
			y  = 387;
			canvasApp.drawPacoteEnlace(1200);
		}else if(configAnimacao.frameIndex > 177 && configAnimacao.frameIndex < 202){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace(1200);	
		}else if(configAnimacao.frameIndex == 202){
			x  = x + 80;
			y  = 387;
			canvasApp.drawPacoteEnlace(1200);
		}else if(configAnimacao.frameIndex > 202 && configAnimacao.frameIndex < 220){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace(1200);
		}else if(configAnimacao.frameIndex == 220){
			theDivText.style.display="block";
			cConteudo = 'Ao receber o segmento com o <b>número de reconhecimento</b> 1000, o host A encaminha os bytes de 1000 a 1999 ao host B.';	
			cConteudo = cConteudo + '<br>O host A também solicita o próximo segmento ao host B, informando o número 536 no campo <b>número de reconhecimento</b>.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 221){
			y = 300;
			x = 150;
			comprimento = 50;
			largura     = 50;
			canvasApp.drawPacote(1100);
		}else if(configAnimacao.frameIndex > 221 && configAnimacao.frameIndex < 242){
			dx = -5;
			dy = -10;
			x = x + dx;
			y = y + dy;
			
			dcomp 		= 5;
			dlarg  		= 5;
			comprimento = comprimento + dcomp;
			largura     = largura + dlarg;
			canvasApp.drawPacote(1100);
		}else if(configAnimacao.frameIndex == 242){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote(1100);
			canvasApp.drawSetaDir4();
			theDivDir.style.display="block";
			cConteudo = '<b>Número de sequência</b> = 1000.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivDir.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 243){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote(1100);
			canvasApp.drawSetaDir3();
			theDivDir.style.display="block";
			cConteudo = '<b>Número de reconhecimento</b> = 536.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivDir.innerHTML = cConteudo;
			canvasApp.pausar();	
		}
		
		else if(configAnimacao.frameIndex > 243 && configAnimacao.frameIndex < 265){
			dx = 5;
			dy = 10;
			x = x + dx;
			y = y + dy;
			dcomp 		= -5;
			dlarg  		= -5;
			comprimento = comprimento + dcomp;
			largura     = largura + dlarg;
			canvasApp.drawPacote(1100);
		}else if(configAnimacao.frameIndex == 265){
			x  = 615;
			y  = 387;
			canvasApp.drawPacoteEnlace(1100);
		}else if(configAnimacao.frameIndex > 265 && configAnimacao.frameIndex < 283){
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace(1100);
		}else if(configAnimacao.frameIndex == 283){
			x  = x - 80;
			y  = 387;
			canvasApp.drawPacoteEnlace(1100);
		}else if(configAnimacao.frameIndex > 283 && configAnimacao.frameIndex < 308){
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace(1100);
		}else if(configAnimacao.frameIndex == 308){
			x  = x - 80;
			y  = 387;
			canvasApp.drawPacoteEnlace(1100);
		}else if(configAnimacao.frameIndex > 308 && configAnimacao.frameIndex < 328){
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace(1100);
		}else if(configAnimacao.frameIndex == 328){
			theDivText.style.display="block";
			cConteudo = 'Vamos considerar que logo em seguida o host A encaminha o próximo segmento ao host B, com número de sequência 2000.';	
			cConteudo = cConteudo + '<br>Como o host A ainda não recebeu o segmento de sequência 536, ele informa novamente este valor no campo <b>número de reconhecimento</b>.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 329){
			y = 300;
			x = 150;
			comprimento = 50;
			largura     = 50;
			canvasApp.drawPacote(1100);
		}else if(configAnimacao.frameIndex > 329 && configAnimacao.frameIndex < 350){
			dx = -5;
			dy = -10;
			x = x + dx;
			y = y + dy;
			dcomp 		= 5;
			dlarg  		= 5;
			comprimento = comprimento + dcomp;
			largura     = largura + dlarg;
			canvasApp.drawPacote(1100);
		}else if(configAnimacao.frameIndex == 350){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote(1100);
			canvasApp.drawSetaDir4();
			theDivDir.style.display="block";			
			cConteudo = '<b>Número de sequência</b> = 2000.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivDir.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 351){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote(1100);
			canvasApp.drawSetaDir3();
			theDivDir.style.display="block";
			cConteudo = '<b>Número de reconhecimento</b> = 536.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivDir.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex > 351 && configAnimacao.frameIndex < 373){
			dx = 5;
			dy = 10;
			x = x + dx;
			y = y + dy;
			
			dcomp 		= -5;
			dlarg  		= -5;
			comprimento = comprimento + dcomp;
			largura     = largura + dlarg;
			
			canvasApp.drawPacote(1100);
		}else if(configAnimacao.frameIndex == 373){
			x  = 615;
			y  = 387;
			canvasApp.drawPacoteEnlace(1100);
		}else if(configAnimacao.frameIndex > 373 && configAnimacao.frameIndex < 391){
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace(1100);
		}else if(configAnimacao.frameIndex == 391){
			x  = x - 80;
			y  = 387;
			canvasApp.drawPacoteEnlace(1100);
		}else if(configAnimacao.frameIndex > 391 && configAnimacao.frameIndex < 416){
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace(1100);
		}else if(configAnimacao.frameIndex == 416){
			x  = x - 80;
			y  = 387;
			canvasApp.drawPacoteEnlace(1100);
		}else if(configAnimacao.frameIndex > 416 && configAnimacao.frameIndex < 436){
			dx = -5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace(1100);
		}else if(configAnimacao.frameIndex == 436){
			theDivText.style.display="block";
			cConteudo = 'O host B por sua vez envia o segmento com número de sequência 536 ao host A.';	
			cConteudo = cConteudo + '<br>Como o host B recebeu os segmentos de sequência 1000 e 2000 sucessivamente, ele envia no campo <b>número de reconhecimento</b> o valor 3000, que é o próximo segmento a ser enviado pelo host A.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 437){
			theDivText.style.display="block";
			cConteudo = 'Dizemos que o TCP provê <b>reconhecimentos cumulativos</b>, pois ele reconhece todos os bytes até o primeiro byte que está faltando na cadeia.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 438){
			y = 300;
			x = 50;
			comprimento = 50;
			largura     = 50;
			canvasApp.drawPacote2(1200);
		}else if(configAnimacao.frameIndex > 438 && configAnimacao.frameIndex < 459){
			dx = 0;
			dy = -10;
			x = x + dx;
			y = y + dy;
			dcomp 		= 5;
			dlarg  		= 5;
			comprimento = comprimento + dcomp;
			largura     = largura + dlarg;
			canvasApp.drawPacote2(1200);
		}else if(configAnimacao.frameIndex == 459){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote2(1200);
			canvasApp.drawSetaEsq4();
			theDivEsq.style.display="block";
			cConteudo = '<b>Número de sequência</b> = 536.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivEsq.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex == 460){
			x  = 50;
			y  = 100;
			canvasApp.drawPacote2(1200);
			canvasApp.drawSetaEsq3();
			theDivEsq.style.display="block";
			cConteudo = '<b>Número de reconhecimento</b> = 3000.';	
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivEsq.innerHTML = cConteudo;
			canvasApp.pausar();	
		}else if(configAnimacao.frameIndex > 460 && configAnimacao.frameIndex < 481){
			dx = 0;
			dy = 10;
			x = x + dx;
			y = y + dy;
			dcomp 		= -5;
			dlarg  		= -5;
			comprimento = comprimento + dcomp;
			largura     = largura + dlarg;
			canvasApp.drawPacote2(1200);
		}else if(configAnimacao.frameIndex == 481){
			x  = 148;
			y  = 387;
			canvasApp.drawPacoteEnlace(1200);
		}else if(configAnimacao.frameIndex > 481 && configAnimacao.frameIndex < 502){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace(1200);
		}else if(configAnimacao.frameIndex == 502){
			x  = x + 80;
			y  = 387;
			canvasApp.drawPacoteEnlace(1200);
		}else if(configAnimacao.frameIndex > 502 && configAnimacao.frameIndex < 527){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace(1200);	
		}else if(configAnimacao.frameIndex == 527){
			x  = x + 80;
			y  = 387;
			canvasApp.drawPacoteEnlace(1200);
		}else if(configAnimacao.frameIndex > 527 && configAnimacao.frameIndex < 545){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace(1200);
		}else if(configAnimacao.frameIndex == 545){
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
