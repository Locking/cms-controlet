<?php
class Navigator{
	function __construct($all,$pnumber,$query=''){
	$this->all=$all;
	$this->pnumber=$pnumber;
	$this->query=$query;
	$this->page=isset($_POST['page']) ? (int)$_POST['page'] : 1;}
	function start(){
	$this->num_pages=ceil($this->all/$this->pnumber);	
	if (isset($_POST['last']))
	$this->page=$this->num_pages;		
	$this->start=$this->page*$this->pnumber-$this->pnumber;
	if ($this->page > $this->num_pages || $this->page < 1){
	$this->page=1;
	$this->start=0;}
	return $this->start;}
	function navi(){

	if ($this->num_pages<2) return '';		
	$buff='';
	if($this->num_pages > 1){
		if($this->page > 1) $buff.= "<a href=\"javascript:;\" onclick=\"ViewOrders('Загрузка страницы...', ".($this->page - 1).")\" class=\"nav-prev\"></a>";
	}
	for($pr = '', $i =1; $i <= $this->num_pages; $i++){
	if($i>9) $dop_style = 'style="padding: 3px 5px;"';
	else $dop_style = '';
	$buff.= 
	$pr=(($i == 1 || $i == $this->num_pages || abs($i-$this->page) < 3) ? ($i == $this->page ? " $i " : " <a href=\"javascript:;\" ".$dop_style." onclick=\"ViewOrders('Загрузка страницы...', ".$i.")\">".$i."</a> ") : (($pr == ' ... ' || $pr == '')? '' : ' ... '));}
	if($this->num_pages > 1){
		if($this->page < $this->num_pages) $buff.= "<a href=\"javascript:;\" onclick=\"ViewOrders('Загрузка страницы...', ".($this->page + 1).")\" class=\"nav-next\"></a>";
	}
	return $buff;}
}
?>