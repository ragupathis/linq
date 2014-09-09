 <?php
	include('header.php');
	

$category=$_POST['category'];

$by=$_POST['user_id'];
$result= array();	

$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
	
	$sql="INSERT INTO `categories`(`category`,`added_by`) VALUES (?,?)";
	
	
	  if($stmt = $mysqli -> prepare($sql)) {
			$stmt->bind_param('ss', $by,$category);
			$stmt->execute();
			if ($stmt->errno) {
				$array['status']=0;
			  //echo "FAILURE!!! " . $stmt->error();
			}else{
				$array['status']=1;
			}
			$stmt->close();
			
			
			
	  }else {
		$array['status']=0;
		//echo "fail";
		
	  }
	  
echo var_export(json_encode($array)); 

	
?>