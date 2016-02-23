<?php
/**
 *
 * PHP 5
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.View.Layouts
 * @since         CakePHP(tm) v 0.10.0.1076
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

$cakeDescription = __d('cake_dev', 'CakePHP: the rapid development php framework');
?>
<!DOCTYPE html>
<html>
<head>
	<?php echo $this->Html->charset(); ?>
	<title>
		NetAnimations
	</title>
	<?php
		echo $this->Html->meta('icon');

		echo $this->Html->css('main');
		//echo $this->Html->css('cake.generic');
		echo $this->Html->css('bootstrap');
		echo $this->Html->css('bootstrap-responsive');
		
		//sccriptAnimations
		echo $this->fetch('cssAnimation');

		//messageScript
		echo $this->fetch('scriptMessage');
		
		//scripts
		echo $this->Html->script('conf/jquery', array('inline' => false));
		echo $this->Html->script('conf/modernizr-1.6.min', array('inline' => false));
		echo $this->Html->script('conf/bootstrap.min', array('inline' => false));
		echo $this->Html->script('app', array('inline' => false));
		echo $this->fetch('script');
		
		//sccriptAnimations
		echo $this->fetch('scriptAnimation');
		
		echo $this->fetch('meta');
		echo $this->fetch('css');
	?>
</head>
<body>
	<div class="navbar navbar-inverse navbar-fixed-top">
	  <div class="navbar-inner">
	    <div class="container">
	      <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <?=$this->Html->link('NetAnimations', array('controller'=>'pages', 'action'=>'index'), array('class' => 'brand')); ?>
	      <div class="nav-collapse collapse">
	        <ul class="nav">
	          <li><?=$this->Html->link(__('animations'), array('controller'=>'pages', 'action'=>'index')); ?></li>
	          <li><?=$this->Html->link(__('about'), array('controller'=>'app', 'action'=>'about')); ?></li>
	          <li><?=$this->Html->link(__('contact'), array('controller'=>'app', 'action'=>'contact')); ?></li>
	        </ul>
	        <div id="languages" class="pull-right">
	        
				<?echo $this->Html->image("flags/br-shine.png", array(
			    							  "alt" => "Brazil",
			    							  'url' => array('controller'=>'app', 'action'=>'changeLanguage', 'por'))); 
				 echo $this->Html->image("flags/us-shine.png", array(
						"alt" => "USA",
						'url' => array('controller'=>'app', 'action'=>'changeLanguage', 'eng')));
				
				?>
		  </div>
	      </div><!--/.nav-collapse -->
	    </div>
	  </div>
	</div>
	<div id="container">
		<div id="content" class="container">
			<?php echo $this->Session->flash(); ?>
			<?php echo $this->fetch('content'); ?>
		</div>
		<div id="footer">
		</div>
	</div>
	<?php echo $this->element('sql_dump'); ?>
</body>
</html>
