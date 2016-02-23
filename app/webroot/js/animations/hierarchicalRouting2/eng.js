var msg = {
	intro: {
		msg1: 'We solve the problems of scale and administrative autonomy of the Internet routing by grouping routers in  <b>autonomous systems </b> (AS).',
		msg2: 'Where each AS is composed of a group of routers under the same administrative control <b> </b> <b> running the same routing algorithm </b> and have information about each other.',
		msg3: 'This algorithm is called routing protocol <b> intra-AS </b>. On the internet most used are <b> RIP </b> (Routing Information Protocol) and OSPF <b> </b> (Open Shortest Path First).'
		
	},
	intraAS:{
		msg1: 'The RIP protocol is a distance vector that uses the hop count as <b> cost metric </b> that is, each link has a cost 1. And the maximum cost of a path is limited to 15.',
		msg2: 'Routing tables are exchanged among neighbors every 30 seconds approximately <b> using RIP response message </b>. ',
		msg3: 'Message those which are known as <b> RIP advertisements </b> and contains a list of up to 25 destination subnets within the AS and the distance between the sender and each of these subnetworks.',
		msg4: 'Each router maintains a table called <b> RIP routing table </b> that contains the distance vector and forwarding table of this router.'
	},
	tabelaRoteamento: {
		msg1: 'Suppose the router 1b want to achieve network X. As we can see it can get it through or 1c 1a, 1b but for this need to know that information.',
		msg2: "Here we have the router's routing table 1b, that principle has no information regarding the router 1c. In it we find three columns: <b> subnet destination, the identity of the next router </b> along the shortest path to the destination subnet and <b> number of jumps </b> (the number of subnets).",
		msg3: '',
		msg4: 'Now suppose that 30 seconds later, the router receives 1b 1c ad shown below containing information <b> routing table </b> 1c, indicating that subnet x is just 2 router hops 1c.',
		msg5: '1b The router learns that there is now a new path through the router 1c to that subnet x is shorter <b> </b> than the path through the router first and then <b> updates its routing table </b>, as illustrated below.',
		msg6: 'With this information, the router 1b already know how to achieve the shortest path to the destination network X.Descobrimos then how is <b> communication between routers within the same AS </b> through the protocol of intra-AS routing.'
	},
	interAS: {
		msg1: 'We now need to figure out how the communication is made between ASs <b> </b>. As you might suspect, responsible for this function is the communication protocol <b> inter-AS </b>.',
		msg2: 'More specifically version 4 <b> Border Gateway Protocol</b> (BGP) which is the standard for routing between autonomous systems on the Internet today.',
		msg5: 'In the example below, we <b> four ASs </b> (AS1, AS2, AS3 and AS4). Each with its own routing protocol and may be different in each AS. We also 1a, 2a, 3c, 4a and 4c as <b> edge routers </b>.',
		msg6: 'Suppose the router needs 2b <b> transimitr a package </b> <b> whose fate is out of your AS </b>. For this, the router transmits the packet 2b as specified by the forwarding table, which was set by the routing protocol <b> intra-AS AS2 </b>.',
		msg12: 'Note that when there is only one link <b> </b> out of the AS problem of knowing to whom it becomes trivial.', //TODO arrumar essa ordem
		msg7: 'The package will arrive at the edge router first, whether direct or 2c per second that the router <b> relay 1a </b> and so ends the work of AS2. Note that when there is only one link <b> </b> out of the AS problem of knowing to whom it becomes trivial.',
		msg8: 'Now the router 1d must transmit a packet out of the AS. We know that the router should pass the packet to one of its edge routers (1a or 1c) but <b> to which one</b>?',
		msg9: 'To know who transmit, AS1 <b> need to know which destinations can be reached via via AS2 and AS3 </b>, and must propagate this information to all routers in AS1. Those tasks that are managed by the protocol <b> inter-AS BGP</b>.',
		msg10: 'To accomplish these tasks the BGP routers need to exchange information among themselves <b> </b> and it uses TCP <b> semipermanent </b> for each pair of normally link directly connecting two routers in two ASs different. (But there are also TCP connections between routers within an AS).'
	},
	sessaoBGP: {
		msg1: 'The TCP connection along with all the messages sent by the BGP connection is called an <b> BGP session</b>.',
//		msg2: 'Uma sessão BGP que abranja dois ASs é denominada uma <b>sessão BGP externa (eBGP)</b> e uma sessão BGP entre dois roteadores no mesmo AS é denominada uma <b>sessão BGP interna (iBGP)</b>',
		msg3: 'Shown below are the eBGP sessions <b> </b> with lines of green and iBGP sessions <b> </b> with lines of blue',
		msg4: 'BGP allows each AS <b> know which destinations can be reached </b> via its neighboring ASs.', 
		msg5: 'Then using eBGP sessions between edge routers 3c and 1a, AS3 sends <b> reachability information </b> prefix to AS1, AS3 and AS1 sends a list of prefixes that can be achieved in AS1. Similarly, AS1-> AS2, AS2-> AS4, AS3-> exchange information AS4.', 
		msg6: 'When an edge router (in any AS) receives prefixes known by BGP, it uses your <b> iBGP sessions </b> to distribute the prefixes to other routers in the AS.'
	},
	atributosBGP: {
		msg1: 'When a router advertises a prefix to a BGP session, BGP includes several attributes with the prefix. The more atribuitos prefix are called <b> route </b> in the terminology of BGP.',
		msg2: 'Two of the BGP attributes are important <b> AS-PATH </b> and <b> NEXT-HOP</b>.',
		msg3: '<b> ASPATH </b> contains the information of the ASs through which passed the announcement for the prefix. As an example, suppose that x AS2 advertises a prefix to AS1. Soon after AS1 to AS3 announces x, then your ASPATH would AS2 AS1.',
		msg4: 'This attribute is used to detect and avoid looping <b> ad </b> and also <b> to choose between several paths </b> for the same prefix.',
		msg5: 'Already <b> NEXT-HOP </b> is used to configure the router power <b> its forwarding table </b> properly.',
		msg6: 'Suppose we want to achieve 1d <b> subnet X </b>, and know you can achieve it through AS3 and AS1. In this scenario the <b> ASPATH is equivalent to the two paths </b>, so as to decide where to go?',
		msg7: 'Using the values ​​of ASPATH algorithm and intra-AS, the router can determine the path cost for each interconnected link, and then apply the the hot potato routing to determine the appropriate interface.'
	},
	
	htmlTable: {
		table1: "<h3>Routing Table 1B</h3>" +
				"<table class='table table-condensed'><thead><tr><th>Subnet Destination</th><th>Next router</th><th>Jumps to the Destination</th></tr></thead>" +
				"<tbody>" +
				"<tr><td>x</td><td>1a</td><td>6</td></tr>" +
				"<tr><td>y</td><td>-</td><td>1</td></tr>" +
				"<tr><td>z</td><td>1a</td><td>2</td></tr>" +
				"</tbody></table>",
		table2: "<h3>Routing Table 1C</h3>" +
				"<table class='table table-condensed'><thead><tr><th>Subnet Destination</th><th>Next router</th><th>Jumps to the Destination</th></tr></thead>" +
				"<tbody>" +
				"<tr><td>x</td><td>3c</td><td>2</td></tr>" +
				"<tr><td>y</td><td>1b</td><td>2</td></tr>" +
				"<tr><td>z</td><td>1b</td><td>3</td></tr>" +
				"</tbody></table>",
		table3: "<h3>Routing Table 1B after announcement of 1C</h3>" +
				"<table class='table table-condensed'><thead><tr><th>Subnet Destination</th><th>Next router</th><th>Jumps to the Destination</th></tr></thead>" +
				"<tbody>" +
				"<tr><td>x</td><td>1c</td><td>3</td></tr>" +
				"<tr><td>y</td><td>-</td><td>1</td></tr>" +
				"<tr><td>z</td><td>1a</td><td>2</td></tr>" +
				"</tbody></table>",
	},
	
	htmlContent: {
		html1: '<h3>BGP means provides each of:</h3>' +
				'<ol>'+
					'<li>Get information from neighboring ASs reachability of subnets.</li>' + 
					'<li>Propagate reachability information to all routers internal to the AS.</li>' + 
					'<li>Determine routes "good" to subnets based on reachability information and policy of the AS.</li>' +
				'</ol>',
				html2: '<div id="ebgp"> <h2> BGP session EXTERNAL (eBGP) </h3> <p> A BGP session covering two different ASs </p> </div> <div id = "iBGP" > <h2> BGP session INTERNAL (iBGP) </h2> <p> a BGP session between two routers in the same AS </p> </div> ',
//		html2: '<h3>Uma sessão BGP que abranja dois ASs é denominada uma <span class="green">sessão BGP externa (eBGP)</span> e uma sessão BGP entre dois roteadores no mesmo AS é denominada uma <span class="blue">sessão BGP interna (iBGP)</span>'
	}
};



