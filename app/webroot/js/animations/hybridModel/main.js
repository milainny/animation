var configAnimacao = {
	//Status indica como está o andamento do jogo: pausado, iniciado e finalizado
	statusAnimacao: "iniciada",
	velocidade: 100,
	intervalo: 0,
	frameIndex: 0
}

var tileSheet=new Image();
tileSheet.src="../../img/oldAnimation/animacao1.png";

/* Variaveis utilizadas para mover elementos */
var dx = 0;
var dy = 0;
var x  = 0;
var y  = 0;

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
		if (theCanvas.getContext){
			context = theCanvas.getContext("2d");

			theDivText.style.display="block";
			theDivFim.style.display="none";
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
		context.moveTo(100, 455);
        context.lineTo(theCanvas.width - 100, 455);
        context.stroke();
	},
	drawDesktop:function (){
		context.drawImage(tileSheet, 0, 0,100,100,50,400,100,100);
	},
	drawServer:function (){
		context.drawImage(tileSheet, 100, 0,100,100,650,400,100,100);
	},
	drawRouterA:function (){
		context.drawImage(tileSheet, 200, 0,100,100,275,425,60,60);
	},
	drawRouterB:function (){
		context.drawImage(tileSheet, 200, 0,100,100,475,425,60,60);
	},
	drawCamadaFisicaA:function (){
		context.drawImage(tileSheet, 700, 0,100,100,xCamadasBaseA,yCamadasBaseA+200,100,100);
		context.drawImage(tileSheet, 700, 0,100,100,xCamadasBaseA+600,yCamadasBaseA+200,100,100);
	},
	drawCamadaFisicaB:function (){
		context.drawImage(tileSheet, 700, 0,100,100,xCamadasBaseA+200,yCamadasBaseA+200,100,100);
		context.drawImage(tileSheet, 700, 0,100,100,xCamadasBaseA+400,yCamadasBaseA+200,100,100);
	},
	drawCamadaEnlaceA:function (){
		context.drawImage(tileSheet, 600, 0,100,100,xCamadasBaseA,yCamadasBaseA+150,100,100);
		context.drawImage(tileSheet, 600, 0,100,100,xCamadasBaseA+600,yCamadasBaseA+150,100,100);
	},
	drawCamadaEnlaceB:function (){
		context.drawImage(tileSheet, 600, 0,100,100,xCamadasBaseA+200,yCamadasBaseA+150,100,100);
		context.drawImage(tileSheet, 600, 0,100,100,xCamadasBaseA+400,yCamadasBaseA+150,100,100);
	},
	drawCamadaRedeA:function (){
		context.drawImage(tileSheet, 500, 0,100,100,xCamadasBaseA,yCamadasBaseA+100,100,100);
		context.drawImage(tileSheet, 500, 0,100,100,xCamadasBaseA+600,yCamadasBaseA+100,100,100);
	},
	drawCamadaRedeB:function (){
		context.drawImage(tileSheet, 500, 0,100,100,xCamadasBaseA+200,yCamadasBaseA+100,100,100);
		context.drawImage(tileSheet, 500, 0,100,100,xCamadasBaseA+400,yCamadasBaseA+100,100,100);
	},
	drawCamadaTransporte:function (){
		context.drawImage(tileSheet, 400, 0,100,100,xCamadasBaseA,yCamadasBaseA+50,100,100);
		context.drawImage(tileSheet, 400, 0,100,100,xCamadasBaseA+600,yCamadasBaseA+50,100,100);
	},
	drawCamadaAplicacao:function (){
		context.drawImage(tileSheet, 300, 0,100,100,xCamadasBaseA,yCamadasBaseA,100,100);
		context.drawImage(tileSheet, 300, 0,100,100,xCamadasBaseA+600,yCamadasBaseA,100,100);
	},
	drawSetaAplicacao:function (){
		context.drawImage(tileSheet, 900, 0,100,100,xSetasBase,ySetasBase-1,60,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+60,ySetasBase,100,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+160,ySetasBase,100,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+260,ySetasBase,100,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+360,ySetasBase,100,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+460,ySetasBase,40,60);
		context.drawImage(tileSheet, 800, 0,100,100,xSetasBase+500,ySetasBase-1,60,60);
	},
	drawSetaTransporte:function (){
		context.drawImage(tileSheet, 900, 0,100,100,xSetasBase,ySetasBase+50-1,60,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+60,ySetasBase+50,100,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+160,ySetasBase+50,100,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+260,ySetasBase+50,100,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+360,ySetasBase+50,100,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+460,ySetasBase+50,40,60);
		context.drawImage(tileSheet, 800, 0,100,100,xSetasBase+500,ySetasBase+50,60,60);
	},
	drawSetaRede:function (){
		context.drawImage(tileSheet, 900, 0,100,100,xSetasBase,ySetasBase+100-1,60,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+60,ySetasBase+100,40,60);
		context.drawImage(tileSheet, 800, 0,100,100,xSetasBase+100,ySetasBase+100-1,60,60);

		context.drawImage(tileSheet, 900, 0,100,100,xSetasBase+200,ySetasBase+100-1,60,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+260,ySetasBase+100,40,60);
		context.drawImage(tileSheet, 800, 0,100,100,xSetasBase+300,ySetasBase+100-1,60,60);

		context.drawImage(tileSheet, 900, 0,100,100,xSetasBase+400,ySetasBase+100-1,60,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+460,ySetasBase+100,40,60);
		context.drawImage(tileSheet, 800, 0,100,100,xSetasBase+500,ySetasBase+100-1,60,60);
	},
	drawSetaEnlace:function (){
		context.drawImage(tileSheet, 900, 0,100,100,xSetasBase,ySetasBase+150-1,60,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+60,ySetasBase+150,40,60);
		context.drawImage(tileSheet, 800, 0,100,100,xSetasBase+100,ySetasBase+150-1,60,60);

		context.drawImage(tileSheet, 900, 0,100,100,xSetasBase+200,ySetasBase+150-1,60,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+260,ySetasBase+150,40,60);
		context.drawImage(tileSheet, 800, 0,100,100,xSetasBase+300,ySetasBase+150-1,60,60);

		context.drawImage(tileSheet, 900, 0,100,100,xSetasBase+400,ySetasBase+150-1,60,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+460,ySetasBase+150,40,60);
		context.drawImage(tileSheet, 800, 0,100,100,xSetasBase+500,ySetasBase+150-1,60,60);
	},
	drawSetaFisica:function (){
		context.drawImage(tileSheet, 900, 0,100,100,xSetasBase,ySetasBase+200-1,60,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+60,ySetasBase+200,40,60);
		context.drawImage(tileSheet, 800, 0,100,100,xSetasBase+100,ySetasBase+200-1,60,60);

		context.drawImage(tileSheet, 900, 0,100,100,xSetasBase+200,ySetasBase+200-1,60,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+260,ySetasBase+200,40,60);
		context.drawImage(tileSheet, 800, 0,100,100,xSetasBase+300,ySetasBase+200-1,60,60);

		context.drawImage(tileSheet, 900, 0,100,100,xSetasBase+400,ySetasBase+200-1,60,60);
		context.drawImage(tileSheet, 1000, 0,100,100,xSetasBase+460,ySetasBase+200,40,60);
		context.drawImage(tileSheet, 800, 0,100,100,xSetasBase+500,ySetasBase+200-1,60,60);
	},
	drawPacoteCamadaAplicacao:function(){
		context.drawImage(tileSheet, 1100, 0,100,100,x,y,60,60);
	},
	drawPacoteCamadaTransporte:function(){
		context.drawImage(tileSheet, 1200, 0,100,100,x,y,60,60);
	},
	drawPacoteCamadaRede:function(){
		context.drawImage(tileSheet, 1300, 0,100,100,x,y,60,60);
	},
	drawPacoteCamadaEnlace:function(){
		context.drawImage(tileSheet, 1400, 0,100,100,x,y,60,60);
	},
	drawPacoteCamadaFisica:function(){
		context.drawImage(tileSheet, 1400, 0,100,100,x,y,60,60);
	},
	drawPacoteEnlace:function(){
		context.drawImage(tileSheet, 1400, 0,100,100,x,y,50,50);
	},
	drawPacote:function(){
		context.drawImage(tileSheet, 1500, 0,100,100,x,y,60,60);
	},
	drawTitulo:function(){
		context.fillStyle = '#000000';
		context.font = 'bold 30px arial';
		context.fillText('O Modelo Híbrido', 280, 50);
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
	drawCamadasA:function (){
		canvasApp.drawCamadaFisicaA();
		canvasApp.drawCamadaEnlaceA();
		canvasApp.drawCamadaRedeA();
		canvasApp.drawCamadaTransporte();
		canvasApp.drawCamadaAplicacao();
	},
	drawCamadasB:function (){
		canvasApp.drawCamadaFisicaB();
		canvasApp.drawCamadaEnlaceB();
		canvasApp.drawCamadaRedeB();
	},
	drawSetas:function(){
		canvasApp.drawSetaAplicacao();
		canvasApp.drawSetaTransporte();
		canvasApp.drawSetaRede();
		canvasApp.drawSetaEnlace();
		canvasApp.drawSetaFisica();
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
			cConteudo = 'O conjunto de protocolos da arquitetura de redes pode ser visto como um <b>modelo de camadas</b>.';
			cConteudo = cConteudo + '<br>Cada camada é responsável por um grupo de tarefas, fornecendo assim um conjunto de <b>serviços bem definidos</b> para o protocolo da camada superior.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex == 2){
			theDivText.style.display="block";
			cConteudo = 'As camadas mais altas estão logicamente mais perto do usuário e lidam com <b>dados menos abstratos</b>, confiando em protocolos de camadas mais baixas para tarefas de mais baixo nível de abstração.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex == 3){
			theDivText.style.display="block";
			cConteudo = 'O <b>modelo ISO/OSI</b> é baseado em 7 camadas: <b>Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação</b>.'
			cConteudo = cConteudo + '<br>O <b>modelo inicial do TCP/IP</b> é baseado em 4 camadas: <b>Host/rede, Inter-rede, Transporte e Aplicação</b>.'
			cConteudo = cConteudo + '<br>Surgiu, então, um <b>modelo Híbrido</b>, composto por 5 camadas: <b>Física, Enlace, Rede, Transporte e Aplicação</b>.'
			cConteudo = cConteudo + '<br>Este modelo retira o excesso do modelo ISO/OSI e melhora o modelo TCP/IP.'
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex >= 4 && configAnimacao.frameIndex < 10){
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex >= 10 && configAnimacao.frameIndex < 20){
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			canvasApp.drawSetaAplicacao();
		}else if(configAnimacao.frameIndex >= 20 && configAnimacao.frameIndex < 30){
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			canvasApp.drawSetaAplicacao();
			canvasApp.drawSetaTransporte();
		}else if(configAnimacao.frameIndex >= 30 && configAnimacao.frameIndex < 40){
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			canvasApp.drawSetaAplicacao();
			canvasApp.drawSetaTransporte();
			canvasApp.drawSetaRede();
		}else if(configAnimacao.frameIndex >= 40 && configAnimacao.frameIndex < 50){
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			canvasApp.drawSetaAplicacao();
			canvasApp.drawSetaTransporte();
			canvasApp.drawSetaRede();
			canvasApp.drawSetaEnlace();
		}else if(configAnimacao.frameIndex >= 50 && configAnimacao.frameIndex < 60){
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			canvasApp.drawSetaAplicacao();
			canvasApp.drawSetaTransporte();
			canvasApp.drawSetaRede();
			canvasApp.drawSetaEnlace();
			canvasApp.drawSetaFisica();
		}else if(configAnimacao.frameIndex == 60){
			canvasApp.drawCamadasA();
			theDivText.style.display="block";
			cConteudo = 'Usaremos um exemplo para demonstrar o funcionamento do modelo híbrido e as responsabilidades de cada camada.'
			cConteudo = cConteudo + '<br><b>EX.: </b> O cliente origem envia uma mensagem para o servidor destino.'
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex == 61){
			canvasApp.drawCamadasA();
			x = 160;
			y = 120;
			canvasApp.drawPacoteCamadaAplicacao();
			theDivText.style.display="block";
			cConteudo = '<b>Camada de Aplicação:</b>'
			cConteudo = cConteudo + '<br>- Fornece a interface entre os processos do usuário e a rede.'
			cConteudo = cConteudo + '<br><br><b>Principais protocolos:</b>'
			cConteudo = cConteudo + '<br>- HTTP <br>- SMTP <br>- FTP <br>- POP 3 <br>- SSH <br>- DNS  <br>- DHCP'
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex >= 62 && configAnimacao.frameIndex < 72){
			dx = 0;
			dy = 5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawCamadasA();
			canvasApp.drawPacoteCamadaAplicacao();
		}else if(configAnimacao.frameIndex == 72){
			x = 160;
			y = 170;
			canvasApp.drawCamadasA();
			canvasApp.drawPacoteCamadaTransporte();
			theDivText.style.display="block";
			cConteudo = '<b>Camada de Transporte:</b>'
			cConteudo = cConteudo + '<br>- Divide os dados em segmentos; <br>- Assegura a transmissão correta dos dados.'
			cConteudo = cConteudo + '<br><br><b>Principais protocolos:</b>'
			cConteudo = cConteudo + '<br>- TCP <br>- UDP'
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 72 && configAnimacao.frameIndex < 82){
			dx = 0;
			dy = 5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawCamadasA();
			canvasApp.drawPacoteCamadaTransporte();
		}else if(configAnimacao.frameIndex == 82){
			x = 160;
			y = 220;
			canvasApp.drawCamadasA();
			canvasApp.drawPacoteCamadaRede();
			theDivText.style.display="block";
			cConteudo = '<b>Camanda de Rede:</b>'
			cConteudo = cConteudo + '<br>- Divide segmentos em pacotes ou datagramas; <br>- Estabelece, mantém e termina conexões lógicas; <br>- Responsável pela tradução de endereços lógicos ou nomes em endereços físicos (roteamento).'
			cConteudo = cConteudo + '<br><br><b>Principais protocolos:</b>'
			cConteudo = cConteudo + '<br>- IP <br>- ARP'
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 82 && configAnimacao.frameIndex < 92){
			dx = 0;
			dy = 5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawCamadasA();
			canvasApp.drawPacoteCamadaRede();
		}else if(configAnimacao.frameIndex == 92){
			x = 160;
			y = 270;
			canvasApp.drawCamadasA();
			canvasApp.drawPacoteCamadaEnlace();
			theDivText.style.display="block";
			cConteudo = '<b>Camada de Enlace:</b>'
			cConteudo = cConteudo + '<br>- Separa os pacotes em quadros (frames); <br>- Controla o acesso ao meio; <br>- Gerencia a transmissão, detectando e corrigindo erros na camada física.'
			cConteudo = cConteudo + '<br><br><b>Principais protocolos:</b>'
			cConteudo = cConteudo + '<br>- Ethernet'
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 92 && configAnimacao.frameIndex < 102){
			dx = 0;
			dy = 5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawCamadasA();
			canvasApp.drawPacoteCamadaEnlace();
		}else if(configAnimacao.frameIndex == 102){
			x = 160;
			y = 320;
			canvasApp.drawCamadasA();
			canvasApp.drawPacoteCamadaFisica();
			theDivText.style.display="block";
			cConteudo = '<b>Camada Física:</b>'
			cConteudo = cConteudo + '<br>- Responsável pela transmissão de bits de um ponto a outro; <br>- Descreve os procedimentos e características mecânicas, elétricas e funcionais.'
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex == 103){
			x = 147;
			y = 433;
			canvasApp.drawCamadasA();
			canvasApp.drawPacoteEnlace();
			theDivText.style.display="block";
			cConteudo = 'Após o processo de encapsulamento feito pelas camadas ser completado, a <b>camada física</b> irá finalmente transportar a mensagem pela rede.'
			cConteudo = cConteudo + '<br><br>A camada física não sabe quem é o destinatário final da mensagem, sendo assim ela a transportará para a próxima máquina encontrada.'
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 103 && configAnimacao.frameIndex < 120){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawCamadasA();
			canvasApp.drawPacoteEnlace();
		}else if(configAnimacao.frameIndex == 120){
			x = 180;
			y = 320;
			canvasApp.drawPacoteCamadaFisica();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			theDivText.style.display="block";
			cConteudo = 'A <b>camada física</b> do roteador encaminha a mensagem recebida do cliente origem para a camada de enlace.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 120 && configAnimacao.frameIndex < 130){
			dx = 0;
			dy = -5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteCamadaFisica();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex == 130){
			x = 190;
			y = 270;
			canvasApp.drawPacoteCamadaRede();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			theDivText.style.display="block";
			cConteudo = 'A <b>camada de enlace</b> irá analisar o quadro a fim de averiguar se o mesmo está intacto ou se foi danificado ao longo do caminho.'
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex == 131){
			x = 190;
			y = 270;
			canvasApp.drawPacoteCamadaRede();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			theDivText.style.display="block";
			cConteudo = 'Se o quadro estiver danificado e não for possível consertá-lo, a camada pedirá sua <b>retransmissão</b>.'
			cConteudo = cConteudo + '<br>Caso contrário, as informações de enlace serão removidas e o quadro enviado para a <b>camada de rede</b>.'
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 131 && configAnimacao.frameIndex < 141){
			dx = 0;
			dy = -5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteCamadaRede();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex == 141){
			x = 190;
			y = 220;
			canvasApp.drawPacoteCamadaRede();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			theDivText.style.display="block";
			cConteudo = 'A <b>camada de rede</b> analisará o <b>endereço IP de destino</b> contido no pacote a fim de determinar se o mesmo pertence a ela.'
			cConteudo = cConteudo + '<br>Caso não pertença, traçará a rota pelo qual o pacote irá seguir e o devolverá à camada de enlace.'
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 141 && configAnimacao.frameIndex < 144){
			x = 360;
			y = 220;
			canvasApp.drawPacoteCamadaRede();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex >= 144 && configAnimacao.frameIndex < 154){
			dx = 0;
			dy = 5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteCamadaRede();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex == 154){
			x = 360;
			y = 270;
			canvasApp.drawPacoteCamadaEnlace();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			theDivText.style.display="block";
			cConteudo = 'A <b>camada de enlace</b> colocará novamente no pacote as informações que posteriormente serão usadas para avaliar se o mesmo está intacto ou não e o enviará à <b>camada física</b>.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 154 && configAnimacao.frameIndex < 164){
			dx = 0;
			dy = 5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteCamadaEnlace();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex == 164){
			x = 360;
			y = 320;
			canvasApp.drawPacoteCamadaFisica();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			theDivText.style.display="block";
			cConteudo = 'A <b>camada física</b> enviará a mensagem para a camada <b>física da próxima máquina</b> até encontrar o destino correto.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 164 && configAnimacao.frameIndex < 167){
			x = 330;
			y = 433;
			canvasApp.drawPacoteEnlace();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex >= 167 && configAnimacao.frameIndex < 187){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex == 187){
			x = 380;
			y = 320;
			canvasApp.drawPacoteCamadaFisica();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			theDivText.style.display="block";
			cConteudo = 'O processo anterior se repetirá até que a mensagem chegue à <b>camada física</b> do servidor destino.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 187 && configAnimacao.frameIndex < 197){
			dx = 0;
			dy = -5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteCamadaFisica();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex >= 197 && configAnimacao.frameIndex < 200){
			x = 390;
			y = 270;
			canvasApp.drawPacoteCamadaRede();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex >= 200 && configAnimacao.frameIndex < 210){
			dx = 0;
			dy = -5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteCamadaRede();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex >= 210 && configAnimacao.frameIndex < 213){
			x = 390;
			y = 220;
			canvasApp.drawPacoteCamadaRede();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex >= 213 && configAnimacao.frameIndex < 216){
			x = 560;
			y = 220;
			canvasApp.drawPacoteCamadaRede();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex >= 216 && configAnimacao.frameIndex < 226){
			dx = 0;
			dy = 5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteCamadaRede();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex >= 226 && configAnimacao.frameIndex < 229){
			x = 560;
			y = 270;
			canvasApp.drawPacoteCamadaEnlace();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex >= 229 && configAnimacao.frameIndex < 239){
			dx = 0;
			dy = 5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteCamadaEnlace();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex >= 239 && configAnimacao.frameIndex < 242){
			x = 560;
			y = 320;
			canvasApp.drawPacoteCamadaFisica();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex >= 242 && configAnimacao.frameIndex < 245){
			x = 528;
			y = 433;
			canvasApp.drawPacoteEnlace();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();

		}else if(configAnimacao.frameIndex >= 245 && configAnimacao.frameIndex < 262){
			dx = 5;
			dy = 0;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteEnlace();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex == 262){
			x = 580;
			y = 320;
			canvasApp.drawPacoteCamadaFisica();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			theDivText.style.display="block";
			cConteudo = 'Ao chegar ao <b>servidor destino</b>, o pacote irá percorrer cada uma das camadas em sentido contrário.';
			cConteudo = cConteudo + '<br>Cada camada irá <b>remover uma camada de encapsulamento</b> e ler as informações anexadas sobre o cliente origem.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex == 263){
			x = 580;
			y = 320;
			canvasApp.drawPacoteCamadaFisica();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			theDivText.style.display="block";
			cConteudo = 'Ao chegar na <b>camada física</b> do servidor destino, o pacote será encaminhado à <b>camada de enlace</b>. ';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 263 && configAnimacao.frameIndex < 273){
			dx = 0;
			dy = -5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteCamadaFisica();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex == 273){
			x = 590;
			y = 270;
			canvasApp.drawPacoteCamadaRede();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			theDivText.style.display="block";
			cConteudo = 'A <b>camada de enlace</b> irá analisar o quadro a fim de averiguar se o mesmo está intacto ou se foi danificado ao longo do caminho.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex == 274){
			x = 590;
			y = 270;
			canvasApp.drawPacoteCamadaRede();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			theDivText.style.display="block";
			cConteudo = 'Se o quadro estiver danificado e não for possível consertá-lo, a camada pedirá sua <b>retransmissão</b>.';
			cConteudo = cConteudo + '<br>Caso contrário, as informações de enlace serão removidas e o quadro enviado para a <b>camada de rede</b>.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 274 && configAnimacao.frameIndex < 284){
			dx = 0;
			dy = -5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteCamadaRede();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex == 284){
			x = 595;
			y = 220;
			canvasApp.drawPacoteCamadaTransporte();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			theDivText.style.display="block";
			cConteudo = 'A <b>camada de rede</b> analisará o <b>endereço IP de destino</b>. Caso este pertença à ela, removerá as informações de rede e enviará o segmento à <b>camada de transporte</b>.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 284 && configAnimacao.frameIndex < 294){
			dx = 0;
			dy = -5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteCamadaTransporte();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex == 294){
			x = 602;
			y = 170;
			canvasApp.drawPacoteCamadaAplicacao();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			theDivText.style.display="block";
			cConteudo = 'A <b>camada de transporte</b> ao receber o segmento o enviará à <b>camada de aplicação</b>.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex > 294 && configAnimacao.frameIndex < 304){
			dx = 0;
			dy = -5;
			x = x + dx;
			y = y + dy;
			canvasApp.drawPacoteCamadaAplicacao();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
		}else if(configAnimacao.frameIndex == 304){
			x = 610;
			y = 120;
			canvasApp.drawPacote();
			canvasApp.drawCamadasA();
			canvasApp.drawCamadasB();
			theDivText.style.display="block";
			cConteudo = 'A <b>camada de aplicação</b> receberá então a mensagem enviada pelo cliente origem e a encaminhará ao programa que a requisitou.';
			cConteudo = cConteudo + '<br><button id="continuar" onclick="canvasApp.continuar();" class="btn btn-success">Continuar</button>';
			theDivText.innerHTML = cConteudo;
			canvasApp.pausar();
		}else if(configAnimacao.frameIndex == 305){
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
