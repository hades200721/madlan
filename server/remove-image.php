<?php
$file = '.'.$_GET['src'];
$id = $_GET['id'];
unlink($file);
echo $id ;
?>