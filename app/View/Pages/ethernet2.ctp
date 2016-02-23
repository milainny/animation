<?php
$this->extend('/Pages/animation');

$this->Html->script('animations/ethernet2/' . $lang, array('block' => 'scriptMessage'));
$this->Html->script('animations/ethernet2/main', array('block' => 'scriptAnimation'));
