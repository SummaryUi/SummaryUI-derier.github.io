<?php
header('Content-type:text/html;charset=utf-8');

//获取数据
$stuid = $_POST['stuid'];

// 建立数据库连接
$conn =mysql_connect('localhost','root','root');
if(!$conn){
	die("连接失败");
}

//选择数据库
mysql_select_db("mydb",$conn);
//执行sql语句
$sqls= "select * from students where stuid='$stuid'";
$res = mysql_query($sqls,$conn);
//关闭数据库
mysql_close($conn);

if(mysql_num_rows($res)>0){
	echo "1";
}else{
	echo "0";
}


?>