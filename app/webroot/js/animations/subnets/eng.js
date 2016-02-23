var msg = {
		sub1 : " Here we have a network connected to the Internet . IP network is a Class B address <b> </b> . This means that 2 bytes identify the host and the network 2. ",
		sub2 : " Since two bytes are used to identify hosts , this means that there may be a total of 65536 <b> hosts </b> for a given network Class B. ",
		sub3 : " A subnet mask is used to <b> determine which bits are used for the network and which are used for hosts </b> , the 16 bits on the left are the default mask for Class B addresses. " ,
		sub4 : " To efficiently utilize the address space , we need <b> divide the network into logical subnets </b> . ",
		sub5 : " Here we create two subnets <b> extending the subnet mask </b> in 1 bit . now part of the network consists of 17 bits and the part of the hosts for 15 -bit . Each subnet is connected to a switch. ",
		sub6 : " With extra bit <b> 1 </b> for the network portion , and may take 1 or 0 , we can create our two logical networks ,",
		sub7 : " These sub - networks can further be broken down into more sub - networks in a similar way . shall now examine how hosts and routers send packets on the subnetworks. ",
		sub8 : " When a host sends a packet , it performs a logical AND operation <b> (E) </b> with the destination IP subnet mask to determine the network number. " ,
		sub9 : " Here, the destination IP <b> 162 103 136 103 </b> . Realizing the logical AND of the destination IP address with the subnet mask we get the network number 162.103.128.0 , so the package can be sent directly to the recipient since it is on the same subnet. ",
		sub10 : " Now <b> 162 103 126 103 </b> will try to send a packet to 162.103.1.102 <b> </b> , a host that is on a subnet <b> DIFFERENT</b>. ",
		sub11 : " Realizing the logical AND of the destination IP , 162.103.1.102 with a subnet mask got a number of different network, then the packet is sent to the router. ",
		sub12 : " The router has a forwarding table that contains a subnet mask and a network number for each network . He performs logical AND on top of each IP destination subnet mask to find the number of network appropriate. ",
		sub13 : " And then the router sends the packet to its final destination in the sub - network. ",

		html1: "<div id='network'><p>NETWORK</p><h2>162.103.</h2><h4>10100010.01100111.</h4></div><div id='host'><p>HOST</p><h2>X.X</h2><h4>????????.????????</h4></div>",	
		html2: "<p><b>Default Mask: 255.255.0.0</b></p><div id='network'><h3>11111111.11111111.</h3><p>These bits are for:</p> <p>NETWORK</p></div><div id='host'><h3>00000000.00000000</h3><p>These bits are for:</p><p>HOST</p></div><p class='txt-small'>The one in the subnet mask means that this bit is part of the network, a 0 means that this bit is the host portion. As mentioned earlier, there are two bytes for the host and two bytes for the network addresses in the Class B</p>",
		html3: "<p><b>New Default Mask: 255.255.128.0</b></p><div id='network'><h3>11111111.11111111.</h3><p>There is now an additional bit for the network</p> </div><div id='host'><h3><span class='bit-pink'>1</span>000000.00000000</h3><p>There are now 15 bits for hosts</p></div>",
		
		html4: "<h4>New subnet mask: 255.255.128.0</h4><p>11111111.11111111.<span class='bit-pink'>1</span>0000000.00000000</p>",
		html5: "<h4>10100010.01100111.<span class='bit-pink'>1</span>???????.????????</h4><p class='small-text'>A logical network has a 1 in that position, resulting in the number of subnet:</p><h3>162.103.128.0</h3>",
		html6: "<h4>10100010.01100111.<span class='bit-pink'>0</span>???????.????????</h4><p class='small-text'>A logical network has a 0 in that position, resulting in the number of subnet:</p><h3>162.103.0.0</h3>",
	
	html7: "<p>The fate <b> IS </b> on the same subnet</p>",
	html8: "<table class='table table-condensed'>" +
	"<tr>"+
		"<td></td>" +
		"<td>11111111.11111111.10000000.00000000</td>" +
		"<td>255.255.128.0</td>" +
		"<td>Subnet Mask</td>" +
	"</tr>" +
	"<tr>" +
		"<td>&</td>" +
		"<td>11111111.11111111.10001000.01100111</td>" +
		"<td>162.103.136.103</td>" +
		"<td>Destination IP</td>" +
	"</tr>" +
	"<tr>" +
		"<td></td>" +
		"<td>11111111.11111111.10000000.00000000</td>" +
		"<td><span class='bit-pink'>162.103.128.0</span></td>" +
		"<td>Subnet number</td>" +
	"</tr>" +
	"</table>",
	
	html9: "<p>The fate <b> NOT </b> on the same subnet</p>",
	html10: "<table class='table table-condensed'>" +
	"<tr>"+
		"<td></td>" +
		"<td>11111111.11111111.10000000.00000000</td>" +
		"<td>255.255.128.0</td>" +
		"<td>Subnet mask</td>" +
	"</tr>" +
	"<tr>" +
		"<td>&</td>" +
		"<td>11111111.11111111.00000001.01100110</td>" +
		"<td>162.103.1.102</td>" +
		"<td>Destination IP</td>" +
	"</tr>" +
	"<tr>" +
		"<td></td>" +
		"<td>11111111.11111111.00000000.00000000</td>" +
		"<td><span class='bit-pink'>162.103.0.0</span></td>" +
		"<td>Subnet number</td>" +
	"</tr>" +
	"</table>",
	
	
	html11: "<table class='table table-condensed'>" +
			"<tr>"+
				"<td></td>" +
				"<td>11111111.11111111.10000000.00000000</td>" +
				"<td>162.103.128.0</td>" +
				"<td>Subnet mask</td>" +
			"</tr>" +
			"<tr>" +
				"<td>&</td>" +
				"<td>11111111.11111111.00000001.01100100</td>" +
				"<td>162.103.1.102</td>" +
				"<td>Destination IP</td>" +
			"</tr>" +
			"<tr>" +
				"<td></td>" +
				"<td>11111111.11111111.00000000.00000000</td>" +
				"<td><span class='bit-pink'>162.103.0.0</span></td>" +
				"<td>Subnet number</td>" +
			"</tr>" +
			"</table>",
	
			
	html12: "<h3>Tabela de Repasse</h3>"+ 
			"<table class='table table-condensed'>" +
			"<thead>"+
			"<tr>"+
				"<td>Network number</td>" +
				"<td>Subnet mask</td>" +
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




