<?php
	ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);

if (PHP_SAPI == 'cli')
	die('This example should only be run from a Web Browser');
require_once PATH. '/modules/PHPExcel.php';
// Create new PHPExcel object
$objPHPExcel = new PHPExcel();
// Set document properties
$objPHPExcel->getProperties()->setCreator("SB")
							 ->setLastModifiedBy("SB")
							 ->setTitle("Office 2007 XLSX")
							 ->setSubject("Office 2007 XLSX")
							 ->setDescription("Document for Office 2007 XLSX, generated SB.")
							 ->setKeywords("office 2007 openxml php")
							 ->setCategory("File Excel from SB");
$data = false;
if($control->get_name){
	switch ($control->get_name) {
		case 'correct_sms':
				$name = "sms_correct_";
				$sms_correct = object_from_file(PATH.'/files/tmp/sms_correct.txt');
				foreach ($sms_correct as $key => $val) {
					$val = explode("|", $val);
					$data[] =  $val;
				}
			break;
		case 'incorrect_sms':
				$name = "sms_incorrect_";
				$sms_incorrect = object_from_file(PATH.'/files/tmp/sms_incorrect.txt');
				foreach ($sms_incorrect as $key => $val) {
					$val = explode("|", $val);
					$data[] =  $val;
				}
			break;
		case 'sms_not_found':
				$name = "sms_not_found_";
				$not_found = object_from_file(PATH.'/files/tmp/sms_not_found.txt');
				foreach ($not_found as $key=>$val) {
					$val = explode("|", $val);
					$data[] =  array ($val[0], $val[1], $val[2]);
				}
			break;
		case 'sms_found':
				$name = "sms_found_";
				$data = object_from_file(PATH.'/files/tmp/sms_found.txt');		
			break;			
		case 'rbo_sms':
				$name = "for_rbo_";
				$sms_rbo = object_from_file(PATH.'/files/tmp/sms_correct.txt');
				foreach ($sms_rbo as $key => $val) {
					$val = explode("|", $val);
					$peference = explode("/", $val[0]);
					$data_tmp[] =  $peference[0].'/'.$peference[1];
				}
				$data_tmp = array_unique($data_tmp);	
				
				foreach ($data_tmp as $key=>$val) {
					$peference = explode("/", $val);
					$data[] =  array ($peference[0], $peference[1]);
				}			
			break;
		case 'rbo_pay':
				$name = "rbo_pay_";
				$data = object_from_file(PATH.'/files/tmp/rbo_pay.txt');		
			break;
		case 'rbo_no_pay':
				$name = "rbo_no_pay_";
				$data = object_from_file(PATH.'/files/tmp/rbo_no_pay.txt');		
			break;	
		case 'sms_delete':
				$name = "sms_delete_";
				$data = object_from_file(PATH.'/files/tmp/sms_delete.txt');		
			break;
		case 'sms_no_delete':
				$name = "sms_no_delete_";
				$sms_no_delete = object_from_file(PATH.'/files/tmp/sms_no_delete.txt');	
				foreach ($sms_no_delete as $key => $val) {
					$val = explode("|", $val);
					$data[] =  $val;
				}				
			break;				
		case 'activity':
				$name = "activity_";
				$data = object_from_file(PATH.'/files/tmp/activity.txt');		
			break;
		case 'report_sms_send':
				$name = "report_sms_send_";
				$data = object_from_file(PATH.'/files/tmp/report_sms_send.txt');		
			break;
		case 'report_sms_delivery':
				$name = "report_sms_delivery_";
				$data = object_from_file(PATH.'/files/tmp/report_sms_delivery.txt');		
			break;
		case 'report_sms_respond':
				$name = "report_sms_respond_";
				$data = object_from_file(PATH.'/files/tmp/report_sms_respond.txt');		
			break;
		case 'report_email':
				$name = "report_email_";
				$data = object_from_file(PATH.'/files/tmp/report_email.txt');		
			break;			
		default:
			return;
	}
}
else return;

if(!is_array($data)) return;
$objPHPExcel->getActiveSheet()->fromArray($data, null, 'A1');
// Rename worksheet
$objPHPExcel->getActiveSheet()->setTitle('Data');
// Set active sheet index to the first sheet, so Excel opens this as the first sheet
$objPHPExcel->setActiveSheetIndex(0);
// Redirect output to a client’s web browser (Excel2007)
header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
header('Content-Disposition: attachment;filename="'.$name.date('d-m-Y_H-i').'.xlsx"');
header('Cache-Control: max-age=0');
// If you're serving to IE 9, then the following may be needed
header('Cache-Control: max-age=1');
// If you're serving to IE over SSL, then the following may be needed
header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
header ('Pragma: public'); // HTTP/1.0
$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
$objWriter->save('php://output');
exit;
?>