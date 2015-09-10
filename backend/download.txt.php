<?php
if($control->get_name){
	switch ($control->get_name) {
		case 'sms_for_send':
				$sms_result = object_from_file(PATH.'/files/tmp/sms_result.txt');
				$fp = fopen (PATH.'/files/tmp/sms_for_send_'.date('d.m.Y').'.csv', "w");
				foreach ($sms_result as $sms)
				{
					$sms = iconv('utf-8', 'windows-1251', $sms);
					$val = explode('|', $sms);
					fwrite($fp, $val[1].";".$val[2]."\r\n");
				}
				fclose($fp);
				file_force_download(PATH.'/files/tmp/sms_for_send_'.date('d.m.Y').'.csv');
				unlink(PATH.'/files/tmp/sms_for_send_'.date('d.m.Y').'.csv');			
			break;
		case 'log_sms_standart':
				$sms_result = object_from_file(PATH.'/files/tmp/sms_result.txt');
				$fp = fopen (PATH.'/files/tmp/sms_'.date('d.m.Y').'.txt', "w");
				fwrite($fp, date('d/m/Y')."\r\n");
				foreach ($sms_result as $sms)
				{
					$sms = iconv('utf-8', 'windows-1251', $sms);
					$val = explode('|', $sms);
					fwrite($fp, $val[0]."|".$val[1]."|".$val[2]."\r\n");
				}
				fclose($fp);
				file_force_download(PATH.'/files/tmp/sms_'.date('d.m.Y').'.txt');
				unlink(PATH.'/files/tmp/sms_'.date('d.m.Y').'.txt');			
			break;
		case 'log_sms_extra':
				$sms_result = object_from_file(PATH.'/files/tmp/sms_result.txt');
				$fp = fopen (PATH.'/files/tmp/'.date('d.m.Y').'.txt', "w");
				fwrite($fp, "REFERENCE;PHONENUMBER;TEXT;DATE\r\n");
				foreach ($sms_result as $sms)
				{
					$sms = iconv('utf-8', 'windows-1251', $sms);
					$val = explode('|', $sms);
					fwrite($fp, $val[0].";".$val[1].";".$val[2].";".date('d.m.Y')."\r\n");
				}
				fclose($fp);
				file_force_download(PATH.'/files/tmp/'.date('d.m.Y').'.txt');
				unlink(PATH.'/files/tmp/'.date('d.m.Y').'.txt');			
		break;
		case 'sms_send':
			if($control->get_id){
				try {
					$stmt = $control->db->prepare("SELECT `name` FROM `sms_send_list` WHERE `id` = :id LIMIT 1");
					$stmt->bindParam(':id', $control->get_id, PDO::PARAM_INT);
					$stmt->execute();
					$sms_send = $stmt->fetch();
				}
				catch(PDOException $e){
					$control->error($e->getMessage(), $e->getFile(), $e->getLine());
				}		
				if($sms_send && !file_exists(PATH.'/files/sms_send/'.$control->get_id.'_'.$sms_send['name'].'.txt')) return;
				file_force_download(PATH.'/files/sms_send/'.$control->get_id.'_'.$sms_send['name'].'.txt');
			}
			else return;
		break;	
		case 'sms_delivery':
			if($control->get_id){
				try {
					$stmt = $control->db->prepare("SELECT `name` FROM `sms_send_list` WHERE `id` = :id AND `processed_delivery` = 1 LIMIT 1");
					$stmt->bindParam(':id', $control->get_id, PDO::PARAM_INT);
					$stmt->execute();
					$sms_delivery = $stmt->fetch();
				}
				catch(PDOException $e){
					$control->error($e->getMessage(), $e->getFile(), $e->getLine());
				}		
				if($sms_delivery && !file_exists(PATH.'/files/sms_delivery/'.$control->get_id.'_'.$sms_delivery['name'].'.txt')) return;
				
				$delivery = file(PATH.'/files/sms_delivery/'.$control->get_id.'_'.$sms_delivery['name'].'.txt');
				$fp = fopen (PATH.'/files/tmp/'.$control->get_id.'_'.$sms_delivery['name'].'.txt', "w");
				foreach ($delivery as $sms)
				{
					fwrite($fp, $sms."\r\n");
				}
				fclose($fp);
				file_force_download(PATH.'/files/tmp/'.$control->get_id.'_'.$sms_delivery['name'].'.txt');	
				unlink(PATH.'/files/tmp/'.$control->get_id.'_'.$sms_delivery['name'].'.txt');	
			}
			else return;
			
		break;			
		default:
			return;
	}
}
else return;
?>