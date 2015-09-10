<?php
class auth
{
	 public $auth = false; //Параметр, указывающий авторизацию пользователя
	 public $user = false; //Массив с доступными параметрами авторизованного пользователя
	 
     protected  function auth(){

            if(empty($_SESSION['id'])){
				if(empty($_SESSION['no_answer'])) $_SESSION['no_answer'] = 0;
				
                      if(post('login') && post('password')){
                            if(!empty($_SESSION['no_answer']) && $_SESSION['no_answer']>=5 && isset($_SESSION['captcha_keystring']) && (!post('keystring') || ($_SESSION['captcha_keystring'] !== post('keystring')))){
                                $_SESSION['no_answer']++;
                                $this->errors_messages[] = $this->_lang['auth']['error_code'];                              
                            }
                            else{
								
								try {
									$stmt = $this->db->prepare("SELECT `users`.*, `workers`.`name` FROM `users` LEFT JOIN `workers` ON (`workers`.`id`=`users`.`id_worker`) WHERE `users`.`login` = :login && `users`.`password` = :password LIMIT 1");
									$stmt->bindParam(':login', post('login'), PDO::PARAM_STR);
									$stmt->bindParam(':password', $password, PDO::PARAM_STR);
									$password = md5(post('password').$this->_db_ini['db_salt']);
									$stmt->execute();
									$this->user = $stmt->fetch();
								}
								catch(PDOException $e){
									$this->error($e->getMessage(), $e->getFile(), $e->getLine());
								}
								
								if($stmt->rowCount()==0){
									if(empty($_SESSION['no_answer'])) $_SESSION['no_answer'] = 0;
									$_SESSION['no_answer']++;
									unset($_SESSION['id']);
									$this->errors_messages[] = $this->_lang['auth']['error_auth'];
								}
								elseif($this->user['status']!='act'){
									$this->errors_messages[] = $this->_lang['auth']['denied'];
								}
								else{
									$this->auth = true;
									$_SESSION['id'] = $this->user['id'];	
									unset($_SESSION['no_answer']);
								}							
                            }
                     }
            }
            else{
				try {
					$stmt = $this->db->prepare("SELECT `users`.*, `workers`.`name` FROM `users` LEFT JOIN `workers` ON (`workers`.`id`=`users`.`id_worker`) WHERE `users`.`id` = :id LIMIT 1");
					$stmt->bindParam(':id', $_SESSION['id'], PDO::PARAM_INT);
					$stmt->execute();
					$this->user = $stmt->fetch();
					if($stmt->rowCount()!=0){
						if($this->user['status']=='act') $this->auth = true;
						else{ 
							$this->errors_messages[] = $this->_lang['auth']['denied'];
							unset($_SESSION['id']);
						}
					}
				}
				catch(PDOException $e){
					$this->error($e->getMessage(), $e->getFile(), $e->getLine());
				}
			}
        }	
		
		
		public function checkPassword($password){
			try {
				$stmt = $this->db->prepare("SELECT * FROM `users` WHERE `users`.`id` = :id && `users`.`password` = :password LIMIT 1");
				$stmt->bindParam(':id', $this->user['id'], PDO::PARAM_INT);
				$stmt->bindParam(':password', $password, PDO::PARAM_STR);
				$password = md5($password.$this->_db_ini['db_salt']);
				$stmt->execute();
				return $stmt->rowCount();
			}
			catch(PDOException $e){
				$this->error($e->getMessage(), $e->getFile(), $e->getLine());
			}		
		}
		
		public function updatePassword($password){
			try {
				$stmt = $this->db->prepare("UPDATE `users` SET `password` = :password WHERE `users`.`id` = :id LIMIT 1");
				$stmt->bindParam(':id', $this->user['id'], PDO::PARAM_INT);
				$stmt->bindParam(':password', $password, PDO::PARAM_STR);
				$password = md5($password.$this->_db_ini['db_salt']);
				$stmt->execute();
				return true;
			}
			catch(PDOException $e){
				$this->error($e->getMessage(), $e->getFile(), $e->getLine());
			}		
		}		
		
		public function Enter(){
			header("Location: ".$this->_config_ini['folder'].'/'); 
			exit;
		}	

		protected function closeAuth(){
			unset($_SESSION['id']);
			$this->auth = false;
			header("Location: ".$this->_config_ini['folder'].'/'); 
			exit;
		}

}