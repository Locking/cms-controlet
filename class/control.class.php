<?php
class control extends auth
{	    
	//Параметры, значения которых при наличии берутся из БД
	public $page_title = false; //Заголовок страницы
    public $page_description = false; //Описание страиницы
    public $page_keywords = false; //Ключевые фразы страницы
    public $page_js_internal = false; //Список подключаемых js-файлов с сайта
    public $page_js_external = false; //Список внешних подключаемых js-файлов

	//Параметры, которые заполняются системой по ходу работы скрипта
    public $page = 'index'; //Имя страницы (по умолчанию index)
    public $pages_navi = false; //Вложенность страницы (для навигации)
    public $get_id = false; //Доп. числовой параметр к странице (последнее число в url)	
    public $get_name = false; //Доп. строковый параметр к странице (лбюбое имя после знака ~ в конце url)
    public $_lang = false; //Массив с доступными языковыми расшифровками (языковой файл)
    public $db = false; //Объект для обращения к БД
    public $sync = true; //Параметр синхронной или асинхронной загрузки страницы. При асинхронной не будут подгружаться шапка и футер сайта
    public $errors_messages = false; //Массив с ошибками для вывода
    public $ok_messages = false; //Массив с успешными сообщениями для вывода
    public $control_config = false;	 //Системная перменная для передачи различных информационных флагов из backend в content
	public $_config_ini = false; //Все настройки из config.ini
	public $_connect_ini = false; //Все настройки из connect.ini
	protected $_db_ini = false; //Все настройки из db.ini
	
	//Доступные системные страницы
	public $pages_sys = array('_error', '_empty', '_off', '_denied', '_auth'); 
	//error - страница глобальной проблемы работы сайта
	//empty - страница отсутствующих страниц
	//off - страница, которая отображается при выключенном сайте
	//denied - отказано в доступе
	//auth - страница авторизации
	//exit - страница разлогинивания
	
		function __construct(){
			if($this->config() && $this->db_connect()){
				$this->session();
				$this->auth();
				$this->getPage();
				if(!$this->page_title && !empty($this->_lang['title'][$this->page])) $this->title = $this->_lang['title'][$this->page];
				if(!$this->page_description && !empty($this->_lang['description'][$this->page])) $this->description = $this->_lang['description'][$this->page];
				if(!$this->page_keywords && !empty($this->_lang['keywords'][$this->page])) $this->keywords = $this->_lang['keywords'][$this->page];
			}
		}
		
		private function session(){
			session_name($this->_config_ini['session_name']);
			session_set_cookie_params(86400*$this->_config_ini['session_save_days'],'/');
			ini_set('session.gc_maxlifetime', 86400*$this->_config_ini['session_save_days']);
			session_start();
		}

	   private function config(){
			if(file_exists(PATH.'/config/config.ini')){ 
				$this->_config_ini = parse_ini_file(PATH."/config/config.ini");
				date_default_timezone_set($this->_config_ini['timezone_name']);
			}
			else{
				$this->page = $this->pages_sys[0]; 
				$this->sync = false;
				logs_errors('File not found: config.ini');
				return false;			
			}

			if(file_exists(PATH.'/config/connect.ini')){ 
				$this->_connect_ini = parse_ini_file(PATH."/config/connect.ini");
				date_default_timezone_set($this->_config_ini['timezone_name']);
			}
			else{
				$this->page = $this->pages_sys[0]; 
				$this->sync = false;
				logs_errors('File not found: connect.ini');
				return false;			
			}
			
			if(file_exists(PATH.'/template/'.$this->_config_ini['template'].'/'.$this->_config_ini['lang'].'/_lang.php')){ 	
				include(PATH.'/template/'.$this->_config_ini['template'].'/'.$this->_config_ini['lang'].'/_lang.php'); 
				$this->_lang = $_lang;
			}
			else{
				$this->page = $this->pages_sys[0]; 
				$this->sync = false;
				logs_errors('File not found: _lang.php');
				return false;			
			}		
			
			if(!$this->_config_ini['site_on']){
				$this->page = $this->pages_sys[2]; 
				return false;			
			}
			
			return true;
		}
		
	   private function db_connect(){
			if(file_exists(PATH.'/config/db.ini')){ 
				$this->_db_ini = parse_ini_file(PATH."/config/db.ini");
			}
			else{
				$this->page = $this->pages_sys[0]; 
				logs_errors('File not found: db.ini');
				return false;			
			}
			
			if(!empty($this->_db_ini['db_host']) && !empty($this->_db_ini['db_dbname']) && !empty($this->_db_ini['db_user']) && !empty($this->_db_ini['db_password'])){
				try {
					$this->db = new PDO("mysql:host=".$this->_db_ini['db_host'].";dbname=".$this->_db_ini['db_dbname']."", $this->_db_ini['db_user'], $this->_db_ini['db_password'], array(PDO::ATTR_PERSISTENT => true));
					$this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
					$this->db->exec("set names utf8");
					$this->db->query("SET CHARACTER SET utf8");
					return true;
				}
				catch(PDOException $e) {
					$this->error($e->getMessage(), $e->getFile(), $e->getLine(), false);
					$this->page = $this->pages_sys[0];
					$this->db = false;
					return false;
				}	  
			}
			else{ 
				$this->db = false;
				logs_errors('There are no database setup');
				$this->page = $this->pages_sys[0];
				return false; 
			}
	   }

        private function getPage()
        {
            if(get('page'))
            {
                $pages = explode('/',get('page'));
                if(count($pages)>1 && end($pages)=='async'){ $this->sync = false; array_pop($pages); }
				if(count($pages)>1){
					foreach($pages as $p){
						if(is_numeric($p)){ $this->get_id = intval($p); array_pop($pages); }
						if(substr($p, 0, 1)=='~'){ $this->get_name = substr($p, 1); array_pop($pages); }
					}
				}

				for ($i=1; $i<count($pages); $i++) {
					$pages[$i] = $pages[$i-1].'.'.$pages[$i];
				}
                $page = end($pages);
            }
			else $pages[] = $this->page;
			
			$in_pages = implode(',', array_fill(0, count($pages), '?'));
            
            if(!isset($page)) $page = $this->page;
			elseif($page=='exit') $this->closeAuth();
			
				try{
					$stmt = $this->db->prepare("SELECT * FROM `pages` WHERE `name` IN (".$in_pages.") ORDER BY `name` ASC");
					foreach($pages as $key=>$value){
						$stmt->bindValue(($key+1), $value);
					}
					$stmt->execute();
					if($stmt->rowCount()!=0){
						$this->pages_navi = $stmt->fetchAll();
						$page_db = end($this->pages_navi);
						if($page_db['level']>0){
							if(!$this->auth){ $this->page = $this->pages_sys[4]; return false;}
							elseif($this->user['level']<$page_db['level']){
								$this->page = $this->pages_sys[3];
								return false;
							}
						}
						$this->page = $page_db['name']; 
                        $this->page_title = $page_db['title'];
                        $this->page_description = $page_db['description'];
                        $this->page_keywords = $page_db['keywords'];
                        $this->page_js_internal = $page_db['js_internal'];
                        $this->page_js_external = $page_db['js_external'];						
					}
				}
				catch(PDOException $e){
					$this->error($e->getMessage(), $e->getFile(), $e->getLine());
				}
        }
		
		public function error($message, $file, $line, $show_message=true){
			if(!empty($message)) file_put_contents(PATH.'/logs/errors.txt', date('Y-m-d H:i:s').' '.$message.' | file: '.$file.' | line: '.$line."\n", FILE_APPEND);
			if($show_message) $this->errors_messages[] = $this->_lang['system']['error_db'];
		}
		
}
?>