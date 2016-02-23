var msg = {
	requestHost: 'Host Origem',
	requestHostURL: 'din.uem.br',
	sourceHost: 'Host Destino',
	sourceHostURL: 'utfpr.br',
	localServer: 'Servidor de Nomes Local',
	localServerURL: 'dns.uem.br',
	rootServer: 'Servidor de Nomes Raiz',
	tldServer: 'Servidor TLD',
	authorityServer: 'Servidor com Autoridade',
	authorityServerURL: 'dns.utfpr.br',
	dns: {
		intro1: 'Existem duas maneiras diferentes de identificar hospedeiros da internet, por um <b>nome de hospedeiro</b> (hostname), como por exemplo, <i>uem.br</i>, e por um <b>endereço de IP</b> como por exemplo <i>128.232.283.1</i>.',
		intro2: 'As pessoas geralmente optam por utilizar os nomes de hospedeiro por serem mais fáceis de memorizar, já os <b>roteadores preferem o endereço IP</b> que possui comprimento fixo e é estruturado hierarquicamente.',
		intro3: 'Com isso temos um problema: precisamos de um serviço que realize a <b>tradução de um nome de hospedeiro para seu respectivo endereço de IP</b>. Oferecer esse serviço é exatamente a principal função do <b>DNS (<i>Domain Name System</i>)</b>.',
		intro4: 'O DNS é um banco de dados distribuído implementado em uma hierarquia de servidores de nome e um protocolo de camada de aplicação que permite que hospedeiros consultem o banco de dados distribuído.',
		intro5: 'Veremos agora um exemplo de uma tradução feita através da <b>troca de mensagens</b> do protocolo DNS.',
		dns1: '1  - O requisitante <b>envia uma mensagem  de consulta DNS</b> a seu servidor de nomes local <i>dns.uem.br</i>. Essa mensagem contém o nome de hospedeiro a ser traduzido, no caso <i>utfpr.br</i>.',
		dnsMessage: 'Existem dois tipos de mensagens DNS: de <b>consulta</b> e de <b>resposta</b>. Ambas possuem o mesmo formato como mostra a ilustração abaixo.',
		dns2: '2 - O servidor de nomes local transmite a mensagem de consulta <b>a um servidor de nomes raiz</b>.',
		dns3: '3 - O servidor raiz percebe o sufixo <i>BR</i> e <b>retorna ao servidor de nomes local uma lista de endereços IP</b> contendo os servidores TLD (Top-level Domain), responsáveis por <i>BR</i>.',
		dns4: '4 - O servidor de nomes local <b>retransmite a mensagem de consulta</b> a um desses servidores TLD da lista.',
		dns5: '5 - O servidor TLD percebe o sufixo <i>utfpr.br</i> e <b>responde com o endereço IP do servidor de nomes com autoridade</b> da UTFPR, que poderia ser algo como: <i>dns.utfpr.br</i> .',
		dns6: '6  - O servidor de nomes local <b>reenvia então a mensagem</b> de consulta diretamente a <i>dns.utfpr.br</i> .',
		dns7: '7 - Finalmente o servidor de nomes com autoridade <b>responde com o endereço IP</b> que atende a <i>utfpr.br</i> .',
		dns8: '8 - O servidor de nomes local agora responde ao requisitante com o endereço de IP do host solicitado, no caso <i>utfpr.br</i> .',
		dns9: 'No exemplo, foram <b>enviadas 8 mensagens DNS</b>, sendo 4 de consultas e 4 de respostas para realizar a tradução. Esse número de mensagens representa um tempo de resposta para o cliente. Para reduzir esse tempo, existe o <b>cache DNS</b>.',
		rootServer: 'Existem na internet <b>13 servidores de nomes raiz</b> (denominados de A a M) localizados em sua maioria na América do Norte. Cada um deles na verdade é um conglomerado de servidores replicados, para fins de segurança.',
		tldServer: ' Os <b>servidores TLD</b> são responsáveis por domínios de alto nível como por exemplo <b>.com, .org, .net, .edu, .gov</b> e de países como <b>.uk, .fr, .br</b>, etc.',
		authorityServer: 'Toda organização que tiver hosts que podem ser acessados publicamente na Internet deve fornecer <b>registros DNS</b> também acessíveis publicamente <b>para mapear os nomes desses hosts para endereços IP</b>. Esses registros são armazenados pelos servidores com autoridade da organização.</b>'
	}
};

var colors = {
	'blue': '#01b0ec',
	'orange': '#ef7901',
	'purple': '#b147a3',
	'blank' : '#fff'
};

var audios = new Array ("../../audio/sub1.mp3", "../../audio/sub1.mp3", "../../audio/sub1.mp3", "../../audio/sub1.mp3","../../audio/sub2.mp3","../../audio/sub1.mp3","../../audio/sub2.mp3","../../audio/sub2.mp3","","../../audio/sub2.mp3","","","../../audio/sub1.mp3");
