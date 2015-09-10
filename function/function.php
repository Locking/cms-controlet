<?php
function post($post=false)
{              
	 if(!$post && $_POST) return true; elseif(!$post && !$_POST) return false;
     return filter_input(INPUT_POST, $post, FILTER_SANITIZE_STRING );
}
function get($get)
{
     return filter_input(INPUT_GET, $get, FILTER_SANITIZE_STRING );
}
function server($server)
{
     return filter_input(INPUT_SERVER, $server, FILTER_SANITIZE_STRING );
}


	function get_ip()
	{
		$ip = 'Empty';
		if (isset($_SERVER['HTTP_X_FORWARDED_FOR']))
			$ipa[] = trim(strtok($_SERVER['HTTP_X_FORWARDED_FOR'], ','));
		
		if (isset($_SERVER['HTTP_CLIENT_IP']))
			$ipa[] = $_SERVER['HTTP_CLIENT_IP'];       
		
		if (isset($_SERVER['REMOTE_ADDR']))
			$ipa[] = $_SERVER['REMOTE_ADDR'];
		
		if (isset($_SERVER['HTTP_X_REAL_IP']))
			$ipa[] = $_SERVER['HTTP_X_REAL_IP'];
		
		// проверяем ip-адреса на валидность начиная с приоритетного.
		foreach($ipa as $ips)
		{
			//  если ip валидный обрываем цикл, назначаем ip адрес и возвращаем его
			if(preg_match("#^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$#", $ips))
			{                    
				$ip = $ips;
				break;
			}
		}
		return $ip;
	}

	function money($n) {
		return number_format($n, 2, '.', ' ');
	} 

	function seconds_to_time($secs)
	{
		if(empty($secs)) $secs = 0;
		$dt = new DateTime('@' . $secs, new DateTimeZone('UTC'));
		return array('days'    => $dt->format('z'),
					 'hours'   => $dt->format('G'),
					 'minutes' => $dt->format('i'),
					 'seconds' => $dt->format('s'));
	}


	function cp1251_utf8( $sInput )
	{
		$sOutput = "";
		for ( $i = 0; $i < strlen( $sInput ); $i++ ){
			$iAscii = ord( $sInput[$i] );
			if ( $iAscii >= 192 && $iAscii <= 255 ){ $sOutput .=  "&#".( 1040 + ( $iAscii - 192 ) ).";"; }
			else if ( $iAscii == 168 ){ $sOutput .= "&#".( 1025 ).";"; }
			else if ( $iAscii == 184 ){ $sOutput .= "&#".( 1105 ).";"; }
			else { $sOutput .= $sInput[$i];}
		}	
		return $sOutput;
	}

	function get_encoding($str){
		$cp_list = array('utf-8', 'windows-1251');
		foreach ($cp_list as $codepage){
		if (md5($str) === md5(@iconv($codepage, $codepage, $str))){
				return $codepage;
			}
		}
		return null;
	}
	
	function dates($date, $type=0)
	{
		if($type==0){ 
			$month_arr = array( '01' => 'Январь', '02' => 'Февраль', '03' => 'Март', '04' => 'Апрель', '05' => 'Май', '06' => 'Июнь', '07' => 'Июль', '08' => 'Август', '09' => 'Сентябрь', '10' => 'Октябрь', '11' => 'Ноябрь', '12' => 'Декабрь', '1' => 'Январь', '2' => 'Февраль', '3' => 'Март', '4' => 'Апрель', '5' => 'Май', '6' => 'Июнь', '7' => 'Июль', '8' => 'Август', '9' => 'Сентябрь' );         
		}
		else{ 
			$month_arr = array( '01' => 'Января', '02' => 'Февраля', '03' => 'Марта', '04' => 'Апреля', '05' => 'Мая', '06' => 'Июня', '07' => 'Июля', '08' => 'Августа', '09' => 'Сентября', '10' => 'Октября', '11' => 'Ноября', '12' => 'Декабря', '1' => 'Января', '2' => 'Февраля', '3' => 'Марта', '4' => 'Апреля', '5' => 'Мая', '6' => 'Июня', '7' => 'Июля', '8' => 'Августа', '9' => 'Сентября' ); 
		}

		$month_f = $month_arr[$date];
		return $month_f;
	}	
	
	function date_print($date){
		if(empty($date)) return false;
		$date = date_parse($date);
		return sprintf("%02d", $date['day']).'.'.sprintf("%02d",$date['month']).'.'.$date['year'];
	}
	
	function date_mysql($date){
		if(empty($date)) return false;
		$date = date_parse($date);
		return $date['year'].'-'.$date['month'].'-'.$date['day'];
	}	

	function time_print($time, $min=true, $shift_min=false){
		if(empty($time)) return false;
		$time = date_parse($time);
		if($min){ 
			if($shift_min) return sprintf("%02d", $time['hour']).':'.sprintf("%02d",$time['minute']+($shift_min)); 
			else return sprintf("%02d", $time['hour']).':'.sprintf("%02d",$time['minute']); 
		}
		else return sprintf("%02d", $time['hour']).':00';
	}	
	
	
	 function getXLS($xls)
	{
		include_once PATH.'/modules/PHPExcel/IOFactory.php';
		$objPHPExcel = PHPExcel_IOFactory::load($xls);
		$objPHPExcel->setActiveSheetIndex(0);
		$aSheet = $objPHPExcel->getActiveSheet();

		$array = array();
		//получим итератор строки и пройдемся по нему циклом
		foreach($aSheet->getRowIterator() as $row){
		  //получим итератор ячеек текущей строки
		  $cellIterator = $row->getCellIterator();
		  //пройдемся циклом по ячейкам строки
		  //этот массив будет содержать значения каждой отдельной строки
		  $item = array();
		  foreach($cellIterator as $cell){
			//заносим значения ячеек одной строки в отдельный массив
			array_push($item, iconv('utf-8', 'cp1251//TRANSLIT', $cell->getCalculatedValue()));
		  }
		  //заносим массив со значениями ячеек отдельной строки в "общий массв строк"
		  array_push($array, $item);
		}
		return $array;
	  }
	  

	function InitFileSMS($file, $row_i_default=false, $no_phone=false)
	 {
		if(!file_exists($file)){ return false; }
		$ext = pathinfo($file, PATHINFO_EXTENSION);
		if($ext=='txt' || $ext=='csv' ){
			$array = file($file);
			$array_separator = array('|', ';'); //Доступные разделители
			$c = array();
			
				if(count($array)<10){ $max_i = count($array)-1; }
				else{ $max_i = 10; }			
			
				//Ищем разделители в первых строках
			foreach($array_separator as $key=>$separator){
					$c[$key] = 0;
					for($i=0;$i<=$max_i;$i++){
						if(preg_match('/'.preg_quote($separator).'/', $array[$i], $matches)){ $c[$key] += 1; }		
					}
			}
			//Выбираем разделитель
			foreach($c as $key=>$sum){
					if($sum==max($c)){ $sep_i = $key; break;}
			}
				//Делим файл на стобцы
			foreach($array as $val){
					$val = explode($array_separator[$sep_i], $val);
					$array_sms[] = $val; 
			}
		}
		elseif($ext=='xlsx' || $ext=='xls' ){
		$array_sms =  getXLS($file);
			if(count($array_sms)<10){ $max_i = count($array_sms)-1; }
				else{ $max_i = 10; }	
		}
		else{ return false; }

		if(!$row_i_default){
			$c = array();	
			//Ищем столбцы с договором, номером и текстом
			for($i=0;$i<=$max_i;$i++){
				foreach($array_sms[$i] as $key=>$row){
					if(preg_match('/[\d]+\/[\d]+/', $array_sms[$i][$key])){ $c['preference'][$key] = (empty($c['preference'][$key])) ? 1: $c['preference'][$key] + 1; } //Столбец с договором
					if(preg_match('/(?!\/)[\d]*[9]\d{9}(?!\/)/', $array_sms[$i][$key])){ $c['phone'][$key] = (empty($c['phone'][$key])) ? 1: $c['phone'][$key] + 1; }//Столбец с телефоном
					//if(preg_match('/^[\d]*[9]\d{9}/', $array_sms[$i][$key])){ $c['phone'][$key] = (empty($c['phone'][$key])) ? 1: $c['phone'][$key] + 1; }//Столбец с телефоном
					$c['text'][$key] = (empty($c['text'][$key])) ? mb_strlen($array_sms[$i][$key]): $c['text'][$key] + mb_strlen($array_sms[$i][$key]); //Столбец с текстом
				}
			}
			
			//Определяем столбцы
			foreach($c as $key=>$cc){
				foreach($cc as $key_two=>$sum){
					if($sum==max($cc)){ $row_i[$key] = $key_two; break;}
				}
			}

		}
		else $row_i = array( 'preference' => 0, 'text' => 3, 'phone' => 1 );
		
		if(isset($row_i['phone']) && isset($row_i['text'])){
			//Собираем массив в правильном формате
			$correct_array_sms = array();
			foreach($array_sms as $val_sms){
				if(!$no_phone){
					if(!empty($val_sms[$row_i['phone']]) && !empty($val_sms[$row_i['text']]) && preg_match('/[\d]{5,}/', $val_sms[$row_i['phone']])){
						if(!empty($val_sms[$row_i['text']]) && get_encoding($val_sms[$row_i['text']])=='windows-1251'){ $val_sms[$row_i['text']] = iconv('Windows-1251', 'UTF-8', $val_sms[$row_i['text']]); }
						if(isset($row_i['preference'])){ $correct_array_sms[] = array($val_sms[$row_i['preference']], $val_sms[$row_i['phone']], $val_sms[$row_i['text']]); }
						else{ $correct_array_sms[] = array('', $val_sms[$row_i['phone']], $val_sms[$row_i['text']]); }
					}
				}
				elseif(isset($row_i['preference'])) $correct_array_sms[] = array($val_sms[$row_i['preference']]);
			}
			return $correct_array_sms;
		}
		else{ return false; }
		
	}

	function InitFileRBO($file){
		if(!file_exists($file)){ return false; }
		$ext = pathinfo($file, PATHINFO_EXTENSION);
		if($ext=='txt' || $ext=='csv' ){
			$array = file($file);
			$array_separator = array('|', ';'); //Доступные разделители
			$c = array();

			if(count($array)<10) $max_i = count($array)-1;
			else $max_i = 10;			
			//Ищем разделители в первых строках
			foreach($array_separator as $key=>$separator){
				$c[$key] = 0;
				for($i=0;$i<=$max_i;$i++){
					if(preg_match('/'.preg_quote($separator).'/', $array[$i])){ $c[$key] += 1; }	
				}
			}
			//Выбираем разделитель
			foreach($c as $key=>$sum){
				if($sum==max($c)){ $sep_i = $key; break;}
			}
			//Делим файл на стобцы
			foreach($array as $val){
				$val = explode($array_separator[$sep_i], $val);
				$array_rbo[] = $val; 
			}
		}
		elseif($ext=='xlsx' || $ext=='xls' ){ $array_rbo =  getXLS($file); }
		else{ return false; }		
		return $array_rbo;
	}	

	function InitFileStat($file){
		if(!file_exists($file)){ return false; }
		$ext = pathinfo($file, PATHINFO_EXTENSION);
		if($ext=='txt' || $ext=='csv' ){
			$array = file($file);
			//Делим файл на стобцы
			foreach($array as $val){
				$val = explode('!', $val);
				$array_stat[] = $val[8]; 
			}
		}
		else{ return false; }		
		return $array_stat;
	}	
		
	function translit($string) {
		$converter = array(
			'а' => 'a',   'б' => 'b',   'в' => 'v',
			'г' => 'g',   'д' => 'd',   'е' => 'e',
			'ё' => 'yo',   'ж' => 'zh',  'з' => 'z',
			'и' => 'i',   'й' => 'j',   'к' => 'k',
			'л' => 'l',   'м' => 'm',   'н' => 'n',
			'о' => 'o',   'п' => 'p',   'р' => 'r',
			'с' => 's',   'т' => 't',   'у' => 'u',
			'ф' => 'f',   'х' => 'x',   'ц' => 'c',
			'ч' => 'ch',  'ш' => 'sh',  'щ' => 'shh',
			'ь' => '\'',  'ы' => 'y',   'ъ' => '\'\'',
			'э' => 'e',   'ю' => 'yu',  'я' => 'ya',
			'А' => 'A',   'Б' => 'B',   'В' => 'V',
			'Г' => 'G',   'Д' => 'D',   'Е' => 'E',
			'Ё' => 'YO',   'Ж' => 'ZH',  'З' => 'Z',
			'И' => 'I',   'Й' => 'J',   'К' => 'K',
			'Л' => 'L',   'М' => 'M',   'Н' => 'N',
			'О' => 'O',   'П' => 'P',   'Р' => 'R',
			'С' => 'S',   'Т' => 'T',   'У' => 'U',
			'Ф' => 'F',   'Х' => 'X',   'Ц' => 'C',
			'Ч' => 'CH',  'Ш' => 'SH',  'Щ' => 'SHH',
			'Ь' => '\'',  'Ы' => 'Y',   'Ъ' => '\'\'',
			'Э' => 'E',   'Ю' => 'YU',  'Я' => 'YA',
		);
		return strtr($string, $converter);
	}	

	function in_regular_sms($text) {
		$text = preg_replace('/(^\*[\s]*)|(^[\s]*\*[\s]*)/', '', $text);
		$text = preg_replace('/([\s]*\*[\s]*)/', '[\D\w\s.]*', $text);
		$text = preg_replace('/(\()/', '\(', $text);
		$text = preg_replace('/(\))/', '\)', $text);
		$text = preg_replace('/^( )+|( )+$/', '', $text);
		$text = preg_replace('/\n|\r/', '', $text);
		return $text;
	}

	function out_regular_sms($text) {
		//preg_quote ( DIRECTORY_SEPARATOR ,  '#' );
		$text = preg_replace('/(\[.{7}\]\*)/', '*', $text);
		$text = preg_replace('/^(\()|(\)$)/', '', $text);
		$text = preg_replace('/('.preg_quote('\\').')/', '', $text);
		return $text;
	}

	function get_data($smtp_conn)
	{
	  $data="";
	  while($str = fgets($smtp_conn,515)) 
	  {
		$data .= $str;
		if(substr($str,3,1) == " ") { break; }
	  }
	  return $data;
	}

	function file_force_download($file) {
	  if (file_exists($file)) {
		// сбрасываем буфер вывода PHP, чтобы избежать переполнения памяти выделенной под скрипт
		// если этого не сделать файл будет читаться в память полностью!
		if (ob_get_level()) {
		  ob_end_clean();
		}
		// заставляем браузер показать окно сохранения файла
		header('Content-Description: File Transfer');
		header('Content-Type: application/octet-stream');
		header('Content-Disposition: attachment; filename=' . basename($file));
		header('Content-Transfer-Encoding: binary');
		header('Expires: 0');
		header('Cache-Control: must-revalidate');
		header('Pragma: public');
		header('Content-Length: ' . filesize($file));
		// читаем файл и отправляем его пользователю
		readfile($file);
		//exit;
	  }
	}	
	
	function object2file($value, $filename)
	{
		$str_value = serialize($value);
		
		$f = fopen($filename, 'w');
		fwrite($f, $str_value);
		fclose($f);
	}
	
	function object_from_file($filename)
	{
		if(!file_exists($filename)) return false;
		$file = file_get_contents($filename);
		$value = unserialize($file);
		return $value;
	}			
?>