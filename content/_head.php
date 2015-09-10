<?php
$array_css = glob(PATH.'/template/'.$control->_config_ini['template'].'/css/*.css');

if(is_array($array_css)){
	foreach ($array_css as $css) {
		$xtpl_head->assign('CSS',basename($css));
		if(preg_match('/.ie./i', $css)) $xtpl_head->parse('head.css_ie');
		else $xtpl_head->parse('head.css');
	}
}

if(file_exists(PATH.'/template/'.$control->_config_ini['template'].'/css/pages/'.$control->page.'.css')){
    
	$xtpl_head->assign('CSS','pages/'.$control->page.'.css');
	$xtpl_head->parse('head.css');
}

$xtpl_head->parse('head');
$xtpl_head->out('head');
?>