 <?php
	include('header.php');
//	define("PBKDF2_HASH_ALGORITHM", "sha512");
$screen_name=$_POST['byname'];
$msg=$_POST['msg'];
$visible=$_POST['visible'];
$result= array();	

$by=$_POST['by'];
//$user_name=$by;
//$hashval=hash(PBKDF2_HASH_ALGORITHM, $user_name);


   
   
$info=date('Y-m-d');

  
	$sql="INSERT INTO `notifications`(`by`,`reason_by_name`,`msg`,`datetime`) VALUES (?,?,?,? )";
	
		  if($visible=='true'){
		
	  if($stmt = $mysqli -> prepare($sql)) {
			$stmt->bind_param('ssss', $by,$screen_name,$msg,$info);
			$stmt->execute();
			
			if ($stmt->errno) {
			//  echo "FAILURE!!! " . $stmt->error();
			}
			$stmt->close();
			
			
			
	  }else {
		//echo "fail";
	  }
	  
	  }
	  else{
	  
	  }

echo var_export(json_encode($result)); 
	
?>