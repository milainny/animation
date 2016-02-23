<?php
$this->extend('/Pages/animation');

$this->Html->script('animations/tcp2/' . $lang, array('block' => 'scriptMessage'));
$this->Html->script('animations/tcp2/main', array('block' => 'scriptAnimation'));
