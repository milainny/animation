var msg = {
		msg1: 'Por ser capaz de permitir o acesso a um canal broadcast, o <b>Ethernet</b> precisa de um protocolo de acesso múltiplo, neste caso o <b>CSMA/CD (Carrier Sense Multiple Access with Collision Detection)</b>.',
		msg2: 'Cada adaptador executa o protocolo <b>CSMA/CD</b> sem coordenação explícita com os demais adaptadores <b>Ethernet</b>.',
		msg3: 'Vamos ilustrar o funcionamento do protocolo através do seguinte exemplo: Considere que o <b>host A</b> deseja enviar um quadro para o <b>host C</b> através do canal broadcast.',
		msg4: 'O adaptador recebe o datagrama da camada de rede, prepara um quadro <b>Ethernet</b> e o insere no buffer de saída do adaptador.',
		msg5: 'Como o protocolo <b>CSMA/CD</b> não utiliza <b>"compartimentos"</b>, um adaptador pode começar a transmitir a qualquer momento.',
		msg6: 'Cada adaptador <b>Ethernet</b> é capaz de perceber se outros adaptadores estão transmitindo e detectar colisões, medindo os níveis de tensão antes e durante a transmissão.',
		msg7: 'Antes de iniciar a transmissão, o host A identifica que o host B está enviando um quadro. Então, o host A aborta sua transmissão.',
		msg8: 'Este processo de <b>"ouvir"</b> antes de enviar é denominado <b>detecção de portadora</b>.',
		msg9: 'Ao identificar que o canal está livre, o <b>host A</b> encaminha o quadro ao canal broadcast.',
		msg10: 'Durante a transmissão, o adaptador monitora a presença de energia vinda de outros adaptadores. Este processo de <b>"ouvir"</b> enquanto <b>"fala"</b> é denominado <b>detecção de colisão</b>.',
		msg11: 'Caso não seja detectada nenhuma energia vinda de outros adaptadores, o <b>host A</b> considera o quadro como entregue.',
		msg12: 'Considere agora que o <b>host A</b> esteja enviando um quadro ao <b>host C</b>',
		msg13: 'Suponha que antes do quadro enviado pelo <b>host A</b> passar pelo <b>host B</b>, o <b>host B</b> deseja iniciar uma transmissão.',
		msg14: 'Ao detectar a presença de energia vinda de outro host, o host B aborta a sua transmissão.',
		msg15: 'Para garantir que todos os hosts, inclusive o <b>host A</b>, estejam cientes da colisão, o <b>host B</b> envia um sinal de reforço de colisão de 48 bits.',
		msg16: 'Após abortar a transmissão, os hosts entram em fase de <b>backoff exponencial</b>.',
		msg17: 'Nesta fase, os hosts aguardam um tempo aleatório, antes de tentar uma retransmissão.',
		msg18: 'Ao aguardar um tempo aleatório, <b>o host A</b> inicia a retransmissão.',
		msg19: 'Também após aguardar um tempo aleatório, o <b>host B</b> inicia a retransmissão.',
		msg20: 'Caso o quadro não seja enviado em no máximo <b>dezesseis tentativas</b>, ele é descartado.'



};

var audios = new Array ("");
