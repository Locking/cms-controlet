<?php
    error_reporting(E_ALL);
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-control: private');
    $microtime_start = microtime(true);
    define('PATH',dirname(__FILE__));
	
    include_once(PATH.'/function/function.php');
    include_once(PATH.'/class/auth.class.php');
    include_once(PATH.'/class/control.class.php');
    include_once(PATH.'/class/xtemplate.class.php');

    $control = new control();
	
    if(!$control->_config_ini){ echo 'File not found: config.ini'; exit(); }
    if(!$control->_lang){ echo 'File not found: _lang.php'; exit(); }
	
    if((!file_exists(PATH.'/template/'.$control->_config_ini['template'].'/'.$control->_config_ini['lang'].'/'.$control->page.'.xtpl') || !file_exists(PATH.'/content/'.$control->page.'.php')) && !file_exists(PATH.'/backend/'.$control->page.'.php')){ $control->page = $control->pages_sys[1]; }	 

    if(file_exists(PATH.'/backend/'.$control->page.'.php')){ include(PATH.'/backend/'.$control->page.'.php'); }

    if(!$control->page_title && !empty($control->_lang['title'][$control->page])){ $control->page_title = $control->_lang['title'][$control->page]; }

	$tmp_config = array(
            'FOLDER'=>$control->_config_ini['folder'],
            'TEMPLATE'=>$control->_config_ini['template'],
            'PAGE'=>$control->page,
            'TITLE'=>$control->_lang['title_main'].''.$control->page_title,
            'NAME'=>$control->_lang['name'],
            'LANG'=>$control->_config_ini['lang'],
            'DESCRIPTION'=>$control->page_description,
            'KEYWORDS'=>$control->page_keywords        
	);
        if($control->_config_ini['subdomain']=='true'){ $tmp_config['FOLDER'] = ''; }
	
    if($control->sync){
        $xtpl_head = new XTemplate(PATH.'/template/'.$control->_config_ini['template'].'/'.$control->_config_ini['lang'].'/_head.xtpl');
		$xtpl_head->assign('SYSTEM',$tmp_config);
		if($control->_config_ini['site_on']){
			$xtpl_top = new XTemplate(PATH.'/template/'.$control->_config_ini['template'].'/'.$control->_config_ini['lang'].'/_top.xtpl');
			$xtpl_top->assign('SYSTEM',$tmp_config);
		
			$xtpl_foot = new XTemplate(PATH.'/template/'.$control->_config_ini['template'].'/'.$control->_config_ini['lang'].'/_foot.xtpl');
			$xtpl_foot->assign('SYSTEM',$tmp_config);
		}
        include(PATH.'/content/_head.php');
        if($control->_config_ini['site_on']){ include(PATH.'/content/_top.php'); }
    }
        else{ $xtpl_foot = new XTemplate(PATH.'/template/'.$control->_config_ini['template'].'/'.$control->_config_ini['lang'].'/_foot_async.xtpl'); }

    $xtpl = new XTemplate(PATH.'/template/'.$control->_config_ini['template'].'/'.$control->_config_ini['lang'].'/'.$control->page.'.xtpl');
    $xtpl->assign('SYSTEM',$tmp_config);
    if(file_exists(PATH.'/content/'.$control->page.'.php')){ include(PATH.'/content/'.$control->page.'.php'); }
	
    if($control->_config_ini['site_on']){
        if($control->sync){ include(PATH.'/content/_foot.php'); }
        else{ include(PATH.'/content/_foot_async.php'); }
    }
    $control->db = null;