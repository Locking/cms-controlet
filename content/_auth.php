<?php
if(!empty($_SESSION['no_answer']) and $_SESSION['no_answer']>=5){
	$row_system = array('SES_NAME'=>session_name(),
	'SES_ID'=>session_id()
	);
  	$xtpl->assign('SES',$row_system);
	$xtpl->parse('auth.code');
}	

	$xtpl->parse('auth');
	$xtpl->out('auth');
?>