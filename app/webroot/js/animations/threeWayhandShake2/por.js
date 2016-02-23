var msg = {
		msg1: 'O <b>Three-way Handshake</b> é um processo de acordo entre as duas partes que desejam estabelecer uma comunicação que consiste em três etapas.',
		msg2: '1. O cliente envia um segmento (requisição) para o destino.',
		msg3: 'Porta de Origem: TCP 1026',
		msg4: 'Porta de Destino: TCP 524',
		msg6: 'Tamanho da Janela: WIN = 8192 bytes',
		msg5: 'Número de Sequência: SEQ = 0',
		msg7: 'Flag SYN: <br/>SYN = 1',
		msg8:	'A flag <b>SYN</b> possui o valor <b>1</b> e a flag <b>ACK</b> o valor <b>0</b>.',
		msg9: '2. O servidor responde com um segmento contendo as <b>flags SYN = 1 e ACK = 1</b>.',
		msg10: 'Porta de Origem: TCP 524',
		msg11: 'Porta de Destino: TCP 1026',
		msg12: 'Tamanho da Janela: WIN = 32768 bytes',
		msg13: 'Agora a flag <b>ACK</b> possui o valor <b>1</b>',
		msg14: 'Essa resposta representa que a conexão foi aceita e estabelecida e que houve o reconhecimento do segmento anterior.',
		msg15: '3. O cliente responde com um segmento.',
		msg16: 'Número de Sequência: SEQ = 1',
		msg17: 'Tamanho da Janela: WIN = 8760 bytes',
		msg18: 'O valor da flag <b>ACK<b> é <b>1</b>.',
		msg19: 'Após o término dos 3 passos, o <b>Three-way Handshake</b> está completo e as duas partes podem trocar dados entre si.',

};

var audios = new Array ("");
