<?php
$this->extend('/Pages/animation');

$this->Html->script('animations/hierarchicalRouting/' . $lang, array('block' => 'scriptMessage'));
$this->Html->script('animations/hierarchicalRouting/main', array('block' => 'scriptAnimation'));

