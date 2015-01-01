 <?php
	include('header.php');
	

$category=$_POST['category'];

$by=$_POST['user_id'];
$result= array();	
$status=1;
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
	
	$my_t=getdate(date("U"));
$info=("$my_t[mday]-$my_t[mon]-$my_t[year] $my_t[hours]:$my_t[minutes]");

	
	$sql="INSERT INTO `categories`(`category`,`added_by`,`datetime`,`status`) VALUES (?,?,?,?)";
	
	
	  if($stmt = $mysqli -> prepare($sql)) {
			$stmt->bind_param('ssss',$category, $by,$info,$status);
			$stmt->execute();
			if ($stmt->errno) {
				$array['status']=0;
			  //echo "FAILURE!!! " . $stmt->error();
			}else{
				$array['status']='true';
			}
			$stmt->close();
			
			
			
	  }else {
		$array['status']='false';
		//echo "fail";
		
	  }
	  
echo var_export(json_encode($array)); 

	
?>