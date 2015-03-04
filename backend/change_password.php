<?php
	if(post('change_password')){
		if(!post('password') || !post('new_password') || !post('new_password_repeat')) $control->errors_messages[] = $control->_lang['change_password']['error'];		
		elseif($control->checkPassword(post('password'))==0){
			$control->errors_messages[] = $control->_lang['change_password']['error_auth'];
		}
		else{
			if(strlen ( post('new_password'))<4) $control->errors_messages[] = $control->_lang['change_password']['error_length'];
			elseif(post('new_password')!=post('new_password_repeat')) $control->errors_messages[] = $control->_lang['change_password']['error_repeat'];
			else{
				if($control->updatePassword(post('new_password'))) $control->ok_messages[] = $control->_lang['change_password']['save'];
				else $control->errors_messages[] = $control->_lang['change_password']['error_update'];
			}
		}	
	}
?>