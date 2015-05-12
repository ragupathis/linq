 <?php
	include('header.php');
	
$by=$_POST['user'];
$count=0;
$result= array();	
	$result=array();
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
	
	$sql3 = "SELECT `notes` FROM `notes` where `user_name`=?";	
	
	if($stmt1 = $mysqli -> prepare($sql3)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($notes);
		$stmt1 -> fetch();
		$result['notes']=$notes;
		$stmt1 -> close();	
		
	
		
	}else{ echo "sorry"; }
	

	echo var_export(json_encode($result)); 
?>