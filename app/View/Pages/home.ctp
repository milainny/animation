<h1><?=__('appTitle')?></h1>
<h3><?=__('appSubtitle')?></h3>
<p class="subtitle"><?=__('textExplain')?></p>
<hr>
<div class="row mbottom">
	<div class="span4">
		<div class="box">
			<h4><?=$this->Html->link(__('animationDNSTitle'), array('controller'=>'pages', 'action'=>'dns'));?></h4>
			<p><?=__('animationDNSText')?></p>
		</div>
	</div>
	<div class="span4">
		<div class="box">
			<h4><?=$this->Html->link(__('animationSubnetsTitle'), array('controller'=>'pages', 'action'=>'subnets'));?></h4>
			<p><?=__('animationSubnetsText')?></p>
		</div>
	</div>
	<div class="span4">
		<div class="box">
			<h4><?=$this->Html->link(__('animationHierarchicalRoutingTitle'), array('controller'=>'pages', 'action'=>'hierarchicalRouting'));?></h4>
			<p><?=__('animationHierarchicalRoutingText')?></p>
		</div>
	</div>
</div>
<div class="row mbottom">
	<div class="span4">
		<div class="box">
			<h4><?=$this->Html->link(__('animationHybridModelTitle'), array('controller'=>'pages', 'action'=>'hybridModel'));?></h4>
			<p><?=__('animationHybridModelText')?></p>
		</div>
	</div>
	<div class="span4">
		<div class="box">
			<h4><?=$this->Html->link(__('animationThreeWayHandshakeTittle'), array('controller'=>'pages', 'action'=>'threewayHandshake'));?></h4>
			<p><?=__('animationThreeWayHandshakeText')?></p>
		</div>
	</div>
	<div class="span4">
		<div class="box">
			<h4><?=$this->Html->link(__('animationAlohaTitle'), array('controller'=>'pages', 'action'=>'aloha'));?></h4>
			<p><?=__('animationAlohaText')?></p>
		</div>
	</div>
</div>
<div class="row">
	<div class="span4">
		<div class="box">
			<h4><?=$this->Html->link(__('animationEthernetTitle'), array('controller'=>'pages', 'action'=>'ethernet'));?></h4>
			<p><?=__('animationEthernetText')?></p>
		</div>
	</div>
	<div class="span4">
		<div class="box">
			<h4><?=$this->Html->link(__('animationSequenceNumberTitle'), array('controller'=>'pages', 'action'=>'tcp'));?></h4>
			<p><?=__('animationSequenceNumberText')?></p>
		</div>
	</div>
</div>
