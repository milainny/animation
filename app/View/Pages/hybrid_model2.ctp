<?php
$this->extend('/Pages/animation');

$this->Html->script('animations/hybridModel2/' . $lang, array('block' => 'scriptMessage'));
$this->Html->script('animations/hybridModel2/main', array('block' => 'scriptAnimation'));
