<?php


$this->extend('/Pages/animation');

$this->Html->script('animations/dns/' . $lang, array('block' => 'scriptMessage'));
$this->Html->script('animations/dns/main', array('block' => 'scriptAnimation'));

