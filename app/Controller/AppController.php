<?php
/**
 * Application level Controller
 *
 * This file is application-wide controller file. You can put all
 * application-wide controller-related methods here.
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
 * @package       app.Controller
 * @since         CakePHP(tm) v 0.2.9
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */
App::uses('Controller', 'Controller');
App::uses('CakeEmail', 'Network/Email');

/**
 * Application Controller
 *
 * Add your application-wide methods in the class below, your controllers
 * will inherit them.
 *
 * @package		app.Controller
 * @link		http://book.cakephp.org/2.0/en/controllers.html#the-app-controller
 */
class AppController extends Controller {

	public $components = array('Cookie','Session');
	private $options;

 	public function beforeFilter() {
        if (!$this->Session->check('Config.language')) {
            $this->Session->write('Config.language', 'por');
        }
    }

    public function changeLanguage($lang) {
    	$this->Session->write('Config.language', $lang);
        $this->redirect(array('controller'=>'pages', 'action'=>'index'));
    }
    
    private function sendEmail() {
//     	print_r($this->data['Contact']);
    	
    	$from = $this->data['Contact']['email'];
    	$name = $this->data['Contact']['name'];
    	$reason = $this->options[$this->data['Contact']['reason']];
    	$msg = $this->data['Contact']['message'];
    	
    	$message = "\nName : $name";
    	$message .= "\n\nE-mail : $from";
    	$message .= "\n\nReason : $reason";
    	$message .= "\n\nMessage: \n  $msg";
    	
    	$Email = new CakeEmail('default');
    	$Email->from($from);
    	$Email->to('luciana@din.uem.br');
    	$Email->subject('Contato NetAnimations');
    	return $Email->send($message);
    }
    
    private function validateForm() {
    	foreach ($this->data['Contact'] as $val) {
    		if(empty($val)) {
    			return false;
    		}
    	}
    	
    	return true;
    }
    
    public function contact() {
    	//passando as opções
    	$this->options = array(__('doubt'), __('suggestion'), __('error'));
    	$this->set('options', $this->options);
    	
    	if(isset($this->data['Contact'])) {
    		//vai e-mail
    		
    		if(!$this->validateForm()) {
    			$this->Session->setFlash(__('email-empty-fields', true), 'flash_error');
    			return;
    		}
    		
    		if($this->sendEmail()) {
	    		$this->Session->setFlash(__('email-success', true), 'flash_success');
    		} else {
	    		$this->Session->setFlash(__('email-error', true), 'flash_error');
    		}
    	   		
    	}
    		
    }
    
    public function about() {
    	
    }

}
