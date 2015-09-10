<?php		 
		  if($control->pages_navi && !empty($control->pages_navi[0])) $xtpl_top->parse('top.panel.'.$control->pages_navi[0]['name']);
		  
		  if($control->auth && $control->user['name']){ 
			  $xtpl_top->assign('NAME_USER', $control->user['name']);
			  $xtpl_top->parse('top.panel.user');
		  }
		  else $xtpl_top->parse('top.panel.auth');
		  
		  $xtpl_top->parse('top.panel');
			
		//if($control->auth){
		  if($control->pages_navi){
				foreach($control->pages_navi as $page){
					$name = preg_replace('/\./', '/', $page['name']);
				    $xtpl_top->assign('NAVI_HREF', $name);
				    $xtpl_top->assign('NAVI_NAME', $page['title']);
					if($page['name']==$control->page) $xtpl_top->parse('top.navi.active');
					else $xtpl_top->parse('top.navi.href');
				}
				$xtpl_top->parse('top.navi');
		  }
		//}  
			$xtpl_top->parse('top');
			$xtpl_top->out('top');
?>