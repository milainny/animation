var msg = {
	  msg1: 'O conjunto de protocolos da arquitetura de redes pode ser visto como um <b>modelo de camadas</b>. Cada camada é responsável por um grupo de tarefas, fornecendo assim um conjunto de <b>serviços bem definidos</b> para o protocolo da camada superior.',
		msg2: 'As camadas mais altas estão logicamente mais perto do usuário e lidam com <b>dados menos abstratos</b>, confiando em protocolos de camadas mais baixas para tarefas de mais baixo nível de abstração.',
		msg3: 'O modelo <b>ISO/OSI</b> é baseado em 7 camadas: <b/>Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação</b>. </br>O <b>modelo inicial do TCP/IP</b> é baseado em 4 camadas: <b>Host/rede, Inter-rede, Transporte e Aplicação</b>. </br>Surgiu, então, um <b>modelo Híbrido</b>, composto por 5 camadas: <b>Física, Enlace, Rede, Transporte e Aplicação</b>.',
		msg4: 'Este modelo retira o excesso do modelo ISO/OSI e melhora o modelo TCP/IP.',
		msg5: 'Usaremos um exemplo para demonstrar o funcionamento do modelo híbrido e as responsabilidades de cada camada. </br> <b>EX.:</b> O cliente origem envia uma mensagem para o servidor destino.',
		msg6: '<b>Camada de Aplicação</b>:</br> - Fornece a interface entre os processos do usuário e a rede. </br></br><b>Principais protocolos</b>: HTTP, SMTP, FTP, POP 3, SSH, DNS e DHCP',
		msg7: '<b>Camada de Transporte</b>:</br> - Divide os dados em segmentos; </br> - Assegura a transmissão correta dos dados.</br></br><b>Principais protocolos</b>: TCP e UDP',
		msg8: '<b>Camanda de Rede</b>:</br>- Divide segmentos em pacotes ou datagramas; </br>- Estabelece, mantém e termina conexões lógicas; </br>- Responsável pela tradução de endereços lógicos ou nomes em endereços físicos (roteamento).</br></br><b>Principais protocolos</b>: IP e ARP',
		msg9: '<b>Camada de Enlace</b>:</br>- Separa os pacotes em quadros (frames); </br>- Controla o acesso ao meio; </br>- Gerencia a transmissão, detectando e corrigindo erros na camada física.</br></br><b>Principais protocolos</b>:Ethernet',
		msg10: '<b>Camada Física</b>:</br> - Responsável pela transmissão de bits de um ponto a outro; </br> - Descreve os procedimentos e características mecânicas, elétricas e funcionais.',
		msg11: 'Após o processo de encapsulamento feito pelas camadas ser completado, a <b>camada física</b> irá finalmente transportar a mensagem pela rede.</br> A camada física não sabe quem é o destinatário final da mensagem, sendo assim ela a transportará para a próxima máquina encontrada.',
		msg12: 'A <b>camada física</b> do roteador encaminha a mensagem recebida do cliente origem para a camada de enlace.',
		msg13: 'A <b>camada de enlace</b> irá analisar o quadro a fim de averiguar se o mesmo está intacto ou se foi danificado ao longo do caminho.',
		msg14: 'Se o quadro estiver danificado e não for possível consertá-lo, a camada pedirá sua <b>retransmissão</b>. Caso contrário, as informações de enlace serão removidas e o quadro enviado para a <b>camada de rede</b>.',
		msg15: 'A <b>camada de rede</b> analisará o <b>endereço IP de destino</b> contido no pacote a fim de determinar se o mesmo pertence a ela. Caso não pertença, traçará a rota pelo qual o pacote irá seguir e o devolverá à camada de enlace.',
		msg16: 'A <b>camada de enlace</b> colocará novamente no pacote as informações que posteriormente serão usadas para avaliar se o mesmo está intacto ou não e o enviará à <b>camada física</b>.',
		msg17: 'A <b>camada física</b> enviará a mensagem para a <b>camada física da próxima máquina</b> até encontrar o destino correto.',
		msg18: 'O processo anterior se repetirá até que a mensagem chegue à <b>camada física</b> do servidor destino.',
		msg19: 'Ao chegar ao <b>servidor destino</b>, o pacote irá percorrer cada uma das camadas em sentido contrário. Cada camada irá <b>remover uma camada de encapsulamento</b> e ler as informações anexadas sobre o cliente origem.',
		msg20: 'Ao chegar na <b>camada física</b> do servidor destino, o pacote será encaminhado à <b>camada de enlace</b>.',
		msg21: 'A <b>camada de enlace</b> irá analisar o quadro a fim de averiguar se o mesmo está intacto ou se foi danificado ao longo do caminho.',
		msg22: 'Se o quadro estiver danificado e não for possível consertá-lo, a camada pedirá sua <b>retransmissão</b>. Caso contrário, as informações de enlace serão removidas e o quadro enviado para a <b>camada de rede</b>.',
		msg23: 'A <b>camada de rede</b> analisará o <b>endereço IP de destino</b>. Caso este pertença à ela, removerá as informações de rede e enviará o segmento à <b>camada de transporte</b>.',
		msg24: 'A <b>camada de transporte</b> ao receber o segmento o enviará à <b>camada de aplicação</b>.',
		msg25: 'A <b>camada de aplicação</b> receberá então a mensagem enviada pelo cliente origem e a encaminhará ao programa que a requisitou.'

};

var audios = new Array ("");
