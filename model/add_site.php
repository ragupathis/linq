 <?php
	include('header.php');
	
$site=$_POST['sitename'];
$category=$_POST['category'];
$visible=$_POST['visible'];
$result= array();	

$by=$_POST['user_name'];
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
	
	$sql="INSERT INTO `sitelist`(`sitename`,`category`,`by`,`visible`) VALUES (?,?,?,? )";
	
	
	  if($stmt = $mysqli -> prepare($sql)) {
			$stmt->bind_param('ssss', $site,$category, $by,$visible);
			$stmt->execute();
			$result['status']='true';
			if ($stmt->errno) {
			//  echo "FAILURE!!! " . $stmt->error();
			}
			$stmt->close();
			
			
			
	  }else {
		echo "fail";
	  }
	  

echo var_export(json_encode($result)); 
	
?>