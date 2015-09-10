<?php
error_reporting (E_ALL);
include('kcaptcha.php');

			if(file_exists('../../config/config.ini')){ 
				$_db_ini = parse_ini_file("../../config/config.ini");
				session_name($_db_ini['session_name']);
				session_set_cookie_params(86400*$_db_ini['session_save_days'],'/');
				ini_set('session.gc_maxlifetime', 86400*$_db_ini['session_save_days']);
				session_start();
				$captcha = new KCAPTCHA();
				if($_REQUEST[session_name()]){
					$_SESSION['captcha_keystring'] = $captcha->getKeyString();
				}
			}

?>