<?php
$this->extend('/Pages/animation');

$this->Html->script('animations/hierarchicalRouting2/' . $lang, array('block' => 'scriptMessage'));
$this->Html->script('animations/hierarchicalRouting2/main', array('block' => 'scriptAnimation'));

