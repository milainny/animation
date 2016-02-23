<?php
$this->extend('/Pages/animation');

$this->Html->script('animations/subnets/' . $lang, array('block' => 'scriptMessage'));
$this->Html->script('animations/subnets/main', array('block' => 'scriptAnimation'));

