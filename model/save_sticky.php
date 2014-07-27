 <?php
	include('header.php');
	
$notes=$_POST['notes'];
$user=$_POST['username'];



$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
	$sql="UPDATE `notes` SET `notes`=? WHERE `user_name`=?";
	
	
	  if($stmt = $mysqli -> prepare($sql)) {
			$stmt->bind_param('ss', $notes,$user);
			$stmt->execute();
			if ($stmt->errno) {
			  echo "FAILURE!!! " . $stmt->error();
			}
			$stmt->close();
			
			
			
	  }else {
		echo "fail";
	  }
	  


	
?>