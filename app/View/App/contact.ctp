<h1><?=__('contactTitle')?></h1>
<p class="subtitle"><?=__('textContactExplain')?></p>
<?php 
echo $this->Form->create('Contact');

// default = false sets the submit button not to submit
// so we can use AJAX. Still works for users w/o javascript


echo $this->Form->input('Contact.name', array('label'=>__('name')));
echo $this->Form->input('Contact.email', array('empty'=> true));
echo $this->Form->input('Contact.reason', array('label'=>__('reason'), 'options' => $options));
echo $this->Form->input('Contact.message', array('label'=>__('message'), 'type'=>'textarea'));
echo $this->Form->end(array('label'=>__('send'), 'class'=>'btn btn-primary'));