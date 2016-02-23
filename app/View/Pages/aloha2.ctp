<?php
$this->extend('/Pages/animation');

$this->Html->script('animations/aloha2/' . $lang, array('block' => 'scriptMessage'));
$this->Html->script('animations/aloha2/main', array('block' => 'scriptAnimation'));
