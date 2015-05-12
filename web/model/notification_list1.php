 <?php
	
$usr=$_POST['user'];
include('header.php');	
$category_info=array();
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
   }


$sql4 ="SELECT `msg`,`type` FROM `notifications` WHERE `by` IN ( select `to` from `followers_list` where `by`='$usr' )";


$result=mysqli_query($mysqli,$sql4);
$array=array();
while($data = mysqli_fetch_array($result,MYSQL_ASSOC))
{   
   $array[]=$data;
}
	

echo var_export(json_encode($array)); 
?>