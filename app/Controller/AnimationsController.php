<?
App::uses('AppController', 'Controller');


class AnimationsController extends AppController {


	public function index() {
		echo "xupeta";
	}

	public function change() {
		$this->Session->write('Config.language', 'eng');
		$this->redirect(array('controller' => 'pages', 'action' => 'home'));
	}



}

?>