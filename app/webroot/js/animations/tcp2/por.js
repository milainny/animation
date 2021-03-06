var msg = {
		msg1: 'Dois dos mais importantes campos do cabeçalho TCP são o campo de <b>número de sequência</b> e o campo de <b>número de reconhecimento</b>.',
		msg2: 'Esses números são aplicados sobre a cadeia de bytes transmitidos, e não sobre a série de segmentos transmitidos.',
		msg3: 'O <b>número de sequência</b> para um segmento é o número do primeiro byte da cadeia de dados do segmento. <b>EX.:</b> Suponha que um processo no host A deseja enviar uma mensagem ao processo no host B por uma conexão TCP.',
		msg4: 'Considere que a cadeia de dados seja um arquivo de 500.000 bytes, o MSS (maximum segment size) seja de 1.000 bytes e que seja atribuído o número 0 ao primeiro byte da cadeia de dados.',
		msg5: 'Neste caso, o TCP constrói 500 segmentos a partir da cadeia de dados. O primeiro segmento recebe o <b>número de sequência</b> 0.',
		msg6: '<b>Número de sequência</b> = 0',
		msg7: 'O segundo segmento recebe o <b> número de sequência</b> 1000, o terceiro 2000 e assim sucessivamente.',
		msg8:	'Já o <b>número de reconhecimento</b> que um host atribui a seu segmento é o número de sequência do próximo byte que ele está aguardando. <b>EX.:</b> O host B está prestes a enviar os bytes numerados de 0 a 535 ao host A.',
		msg9: '<b>Número de reconhecimento</b> = 1000',
		msg10: 'Como acabou de receber os bytes de 0 a 999, o host B envia como <b>número de reconhecimento</b> o valor 1000 referente ao próximo byte.',
		msg11: 'Ao receber o segmento com o <b>número de reconhecimento</b> 1000, o host A encaminha os bytes de 1000 a 1999 ao host B.',
		msg12: '<b>Número de reconhecimento</b> = 536',
		msg13: '<b>Número de sequência</b> = 1000',
		msg14: 'O host A também solicita o próximo segmento ao host B, informando o número 536 no campo <b>número de reconhecimento</b>.',
		msg15: 'Vamos considerar que logo em seguida o host A encaminha o próximo segmento ao host B, com número de sequência 2000.',
		msg16: '<b>Número de sequência</b> = 2000',
		msg17: 'Como o host A ainda não recebeu o segmento de sequência 536, ele informa novamente este valor no campo número de reconhecimento.',
		msg18: 'O host B por sua vez envia o segmento com número de sequência 536 ao host A. Como o host B recebeu os segmentos de sequência 1000 e 2000 sucessivamente, ele envia no campo <b>número de reconhecimento</b> o valor 3000, que é o próximo segmento a ser enviado pelo host A.',
		msg20: '<b>Número de sequência</b> = 536',
		msg21: '<b>Número de reconhecimento</b> = 3000',
		msg19: 'Dizemos que o TCP provê <b>reconhecimentos cumulativos</b>, pois ele reconhece todos os bytes até o primeiro byte que está faltando na cadeia.',
};

var audios = new Array ("");
