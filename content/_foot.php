<?php 
$array_js = glob(PATH.'/template/'.$control->_config_ini['template'].'/js/*.js');

if($control->page_js_external != false)
{
    $control->page_js_external = explode('|', $control->page_js_external);
	foreach($control->page_js_external as $js)
	{
		$xtpl_foot->assign('JS', $js);
		$xtpl_foot->parse('foot.js_ex');
	}
}

if(is_array($array_js)){
	foreach ($array_js as $js) {
		$xtpl_foot->assign('JS', 'template/'.$control->_config_ini['template'].'/js/'.basename($js));
		$xtpl_foot->parse('foot.js_in');
	}
}

if($control->page_js_internal != false)
{
    $control->page_js_internal = explode('|', $control->page_js_internal);
	foreach($control->page_js_internal as $js)
	{
		$xtpl_foot->assign('JS', 'js/'.$js);
		$xtpl_foot->parse('foot.js_in');
	}
}

if(file_exists(PATH.'/template/'.$control->_config_ini['template'].'/js/pages/'.$control->page.'.js')){
        $xtpl_foot->assign('JS','template/'.$control->_config_ini['template'].'/js/pages/'.$control->page.'.js');
		$xtpl_foot->parse('foot.js_in');
}

$microtime_delta = microtime(true) - $microtime_start;
$xtpl_foot->assign('MICROTIME', round($microtime_delta, 3));
	
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