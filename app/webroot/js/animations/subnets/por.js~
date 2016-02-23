var msg = {
	sub1: "A seguir, tem-se uma rede conectada à Internet. O IP da rede é um <b>endereço Classe B</b>. Isso significa que 2 bytes identificam o host e 2 bytes a rede.",
	sub2: "Como 2 bytes são utilizados para os hosts, é possível haver um total de <b>65536 endereços</b> para uma dada rede Classe B.",
	sub3: "Uma máscara de sub-rede é utilizada para <b>determinar quais bits serão usados para a rede e quais serão usados para os hosts</b>, os 16 bits da esquerda são a máscara padrão para endereços da Classe B.",
	sub4: "Para utilizar eficientemente o espaço de endereçamento, precisamos <b>dividir a rede em sub-redes lógicas</b>.",
	sub5: "Aqui nós criamos duas sub-redes <b>estendendo a máscara da sub-rede</b> em 1 bit. Agora a parte da rede é composta por 16 bits, a parte da sub-rede é composta por um bit e a parte dos hosts por 15 bits. Cada sub-rede é conectada em um switch.",
	sub6: "Com <b>1 bit extra</b> para a parte da rede, podendo assumir 1 ou 0, podemos criar duas redes lógicas.",
	sub7: "Essas sub-redes podem futuramente serem quebradas em mais sub-redes de maneira similar. Iremos agora examinar como os hosts e roteadores enviam pacotes nas sub-redes.",
	sub8: "Quando um host envia um pacote, ele realiza a operação <b>lógica AND (E)</b> do IP de destino com a máscara da sub-rede para determinar o número da rede.",
	sub9: "Aqui, o IP de destino é <b>162.103.136.103</b>. Realizando o E lógico do IP de destino com a máscara da sub-rede nós conseguimos o número da rede 162.103.128.0, então o pacote pode ser enviado diretamente para o destinatário desde que esteja na mesma sub-rede.",
	sub10: "Agora <b>162.103.126.103</b> irá tentar enviar um pacote para <b>162.103.1.102</b>, um host que está em uma <b>sub-rede DIFERENTE</b>.",
	sub11: "Realizando o E lógico do IP destino, 162.103.1.102, com a máscara de sub-rede conseguimos um endereço de rede diferente, então o pacote é <b>enviado para o roteador</b>.",
	sub12: "O roteador possui uma tabela de repasse que contém uma máscara de sub-rede e um endereço de rede para cada rede. Ele realiza o E lógico em cima do IP destino com cada máscara de sub-rede até encontrar o endereço de rede apropriado.",
	sub13: "E então o roteador envia o pacote para seu destino final na sub-rede.",
		
	html1: "<div id='network'><p>REDE</p><h2>162.103.</h2><h4>10100010.01100111.</h4></div><div id='host'><p>HOST</p><h2>X.X</h2><h4>????????.????????</h4></div>",	
	html2: "<p><b>Máscara Padrão: 255.255.0.0</b></p><div id='network'><h3>11111111.11111111.</h3><p>Esses bits são para a:</p> <p>REDE</p></div><div id='host'><h3>00000000.00000000</h3><p>Esses bits são para o:</p><p>HOST</p></div><p class='txt-small'>O bit 1 na máscara de sub-rede representa a rede, enquanto o bit 0 representa o host. Neste caso, existem dois bytes para o endereço da rede e dois bytes para o endereço do host.</p>",
	html3: "<p><b>Nova Máscara Padrão: 255.255.128.0</b></p><div id='network'><h3>11111111.11111111.</h3><p>Existe agora um bit adicional para a sub-rede</p> </div><div id='host'><h3><span class='bit-pink'>1</span>000000.00000000</h3><p>Existem agora 15 bits para os hosts</p></div>",
	
	html4: "<h4>Nova máscara de sub-rede: 255.255.128.0</h4><p>11111111.11111111.<span class='bit-pink'>1</span>0000000.00000000</p>",
	html5: "<h4>10100010.01100111.<span class='bit-pink'>1</span>???????.????????</h4><p class='small-text'>Uma rede lógica tem o bit 1 nessa posição, resultado no número da sub-rede:</p><h3>162.103.128.0</h3>",
	html6: "<h4>10100010.01100111.<span class='bit-pink'>0</span>???????.????????</h4><p class='small-text'>Uma rede lógica tem o bit 0 nessa posição, resultado no número da sub-rede:</p><h3>162.103.0.0</h3>",
	
	html7: "<p>O destino <b>ESTÁ</b> na mesma sub-rede</p>",
	html8: "<table class='table table-condensed'>" +
	"<tr>"+
		"<td></td>" +
		"<td>11111111.11111111.10000000.00000000</td>" +
		"<td>255.255.128.0</td>" +
		"<td>Máscara de Sub-rede</td>" +
	"</tr>" +
	"<tr>" +
		"<td>&</td>" +
		"<td>11111111.11111111.10001000.01100111</td>" +
		"<td>162.103.136.103</td>" +
		"<td>IP Destino</td>" +
	"</tr>" +
	"<tr>" +
		"<td></td>" +
		"<td>11111111.11111111.10000000.00000000</td>" +
		"<td><span class='bit-pink'>162.103.128.0</span></td>" +
		"<td>Número da Sub-rede</td>" +
	"</tr>" +
	"</table>",
	
	html9: "<p>O destino <b>NÃO ESTÁ</b> na mesma sub-rede</p>",
	html10: "<table class='table table-condensed'>" +
	"<tr>"+
		"<td></td>" +
		"<td>11111111.11111111.10000000.00000000</td>" +
		"<td>255.255.128.0</td>" +
		"<td>Máscara de Sub-rede</td>" +
	"</tr>" +
	"<tr>" +
		"<td>&</td>" +
		"<td>11111111.11111111.00000001.01100110</td>" +
		"<td>162.103.1.102</td>" +
		"<td>IP Destino</td>" +
	"</tr>" +
	"<tr>" +
		"<td></td>" +
		"<td>11111111.11111111.00000000.00000000</td>" +
		"<td><span class='bit-pink'>162.103.0.0</span></td>" +
		"<td>Número da Sub-rede</td>" +
	"</tr>" +
	"</table>",
	
	
	html11: "<table class='table table-condensed'>" +
			"<tr>"+
				"<td></td>" +
				"<td>11111111.11111111.10000000.00000000</td>" +
				"<td>162.103.128.0</td>" +
				"<td>Máscara de Sub-rede</td>" +
			"</tr>" +
			"<tr>" +
				"<td>&</td>" +
				"<td>11111111.11111111.00000001.01100100</td>" +
				"<td>162.103.1.102</td>" +
				"<td>IP Destino</td>" +
			"</tr>" +
			"<tr>" +
				"<td></td>" +
				"<td>11111111.11111111.00000000.00000000</td>" +
				"<td><span class='bit-pink'>162.103.0.0</span></td>" +
				"<td>Número da Sub-rede</td>" +
			"</tr>" +
			"</table>",
	
			
	html12: "<h3>Tabela de Repasse</h3>"+ 
			"<table class='table table-condensed'>" +
			"<thead>"+
			"<tr>"+
				"<td>Número da Rede</td>" +
				"<td>Máscara da Sub-rede</td>" +
				"<td>Next Hop</td>" +
			"</tr>" +
			"</thead>" +
			"<tr>" +
				"<td>162.103.128.0</td>" +
				"<td>162.103.128.0</td>" +
				"<td>1</td>" +
			"</tr>" +
			"<tr>" +
				"<td><span class='bit-pink'>162.103.0.0</span></td>" +
				"<td>162.103.128.0</td>" +
				"<td>2</td>" +
			"</tr>" +
			"</table>"			
			
};


var audios = new Array ("../../audio/sub1.mp3", "../../audio/sub2.mp3", "", "../../audio/sub1.mp3","","../../audio/sub2.mp3","","../../audio/sub2.mp3","","../../audio/sub2.mp3","","","../../audio/sub1.mp3");



