var msg = {
	requestHost : 'Host Source ',
	requestHostURL: ' din.uem.br ',
	sourceHost: 'Host Destination ',
	sourceHostURL: ' utfpr.br ',
	localServer : 'Name Server Location ',
	localServerURL: ' dns.uem.br ',
	rootServer: 'Root Name Server' ,
	tldServer: 'Server TLD ',
	authorityServer: 'Server with Authority ' ,
	authorityServerURL: ' dns.utfpr.br ',
	dns : {
		intro1 : "There are two different ways of identifying the Internet hosts by a host name <b> </b> (hostname ) , for example , <i> uem.br </i> , and a <b> IP address </b> such as <i> 128.232.283.1 </i> . ",
		intro2 : "People often choose to use host names because they are easier to remember , since the <b> prefer routers IP address </b> which has a fixed length and is structured hierarchically .",
		intro3 : "With this we have a problem : we need a service that performs the translation <b> a name for your hospederio its IP address </b> . Offering this service is exactly the main function of <b> DNS (Domain Name System ) </b>. ",
		intro4 : "The DNS is a distributed database implemented in a hierarchy of name servers and application layer protocol that allows hosts to query the distributed database.",
		intro5 : "We will now see an example of a translation by <b> messaging </b> of the DNS protocol. ",
		DNS1 : "1 - <b> The requester sends a DNS query </b> to your local nameserver <i> dns.uem.br </i> . This message contains the hostname to be translated , if <i> utfpr.edu.br </i> . ",
		dnsMessage: "There are two types of DNS messages , <b> query </b> and <b> response </b> . Both have the same format as shown in the illustration below. ",
		dns2 : "2 - The local name server sends a query message <b> to a root name server </b> . ",
		dns3 : "3 - The root server realizes the suffix <i> edu </i> and <b> returns the local name server a list of IP addresses </b> containing the servers Top Level Domain ( TLD ) responsible by <i> edu </i> .",
		dns4 : "4 - The local name server relays the message <b> consultation </b> to one of these servers TLD list.",
		dns5 : "5 - The server realizes TLD suffix <i> utfpr.edu.br </i> and <b> responds with the IP address of the authoritative name server </b> UTFPR , which could be something like : <i> dns.utfpr.edu.br </i> .", 
		dns6 : "6 - The local name server then sends the message <b> </b> query directly <i> dns.utfpr.edu.br </i>.",
		dns7 : "7 - Finally the authoritative name server responds with <b> IP address </b> that meets <i> utfpr.edu.br </i>.", 
		dns8 : "8 - The local name server now responds to the requestor with the IP address of the requested host , in case <i> utfpr.edu.br </i> .", 
		dns9 : "The host now knows which answers IP for that domain . We saw that in the example were <b> DNS messages sent 8 </b> , 4 queries and responses 4 to perform the translation , this number of messages is a response time for the client , but there is a cache <b> DNS </b> which helps reduce the number of messages.",
		rootserver : "There <b> 13 Internet root name servers </b> ( named A to F) located mostly in North America . Each one of them is actually a conglomeration of replicated servers , for security purposes. '",
		tldServer : "The <b> servers TLD ( Top - level Domain ) </b> are responsible for top-level domains such as <b> . with . org , . net . edu . gov </b> and countries like <b> . uk , . fr , . br </b>, etc.",
		authorityServer : "Every organization that has hosts that can be publicly accessed on the Internet should provide <b> DNS records </b> also publicly accessible <b> to map the names of hosts to IP addresses </b> . These records are stored by the authoritative servers of the organization . </b>",
	}
};

var colors = {
	'blue': '#01b0ec',
	'orange': "#ef7901",
	'purple': ' #b147a3',
	'blank': '#fff '
} ;
