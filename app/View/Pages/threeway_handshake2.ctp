<?php
$this->extend('/Pages/animation');

$this->Html->script('animations/threeWayhandShake2/' . $lang, array('block' => 'scriptMessage'));
$this->Html->script('animations/threeWayhandShake2/main', array('block' => 'scriptAnimation'));
