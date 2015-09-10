<?php 
	if(is_array($control->errors_messages)){ 
		foreach($control->errors_messages as $errors_message){
			$xtpl_foot->assign('MESSAGE', $errors_message); $xtpl_foot->parse('foot.error'); 
		}
	}
	if(is_array($control->ok_messages)){ 
		foreach($control->ok_messages as $ok_message){
			$xtpl_foot->assign('MESSAGE_OK', $ok_message); $xtpl_foot->parse('foot.ok'); 
		}
	}

$xtpl_foot->parse('foot');
$xtpl_foot->out('foot');
?>