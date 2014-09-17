 <?php
	include('header.php');
	
$site=$_POST['sitename'];
$by=$_POST['user'];
$tblname=$_POST['tbl'];


$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
   if($tblname=='categories'){
	$sql="DELETE  FROM `$tblname` WHERE `category`=? and `added_by`=?";
	}else{
	$sql="DELETE  FROM `$tblname` WHERE `sitename`=? and `by`=?";
	}
	
	
	  if($stmt = $mysqli -> prepare($sql)) {
			$stmt->bind_param('ss', $site, $by);
			$stmt->execute();
			if ($stmt->errno) {
			  echo "FAILURE!!! " . $stmt->error();
			}
			$stmt->close();
			
			
			
	  }else {
		echo "fail";
	  }
	  


	
?>