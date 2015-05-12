 <?php
 
include('header.php');	
$category_info=array();
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
   }

$sql4 ="SELECT  `category` FROM `categories` where `added_by`='admin' ";

$result=mysqli_query($mysqli,$sql4);
$array=array();
while($data = mysqli_fetch_array($result,MYSQL_ASSOC))
{   
   $array[]=$data;
}
	

	
echo var_export(json_encode($array)); 

?>