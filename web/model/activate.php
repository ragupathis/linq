 <?php
	include('header.php');
	
$url=$_POST['url'];
$hash=$url;
$change='yes';
$result= array();

$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
	
	$sql2="SELECT count(*),`verified` FROM `userdetails` where `hash`=?";
	$sql3="UPDATE  userdetails SET `verified`=? where `hash`=?";
	

	
	if($stmt1 = $mysqli -> prepare($sql2)) 
	{	
		$stmt1 -> bind_param('s', $hash);
		$stmt1 -> execute();
		$stmt1 -> bind_result($count,$verified);
		$stmt1 -> fetch();
		$stmt1 -> close();			
	}else{

	}
	
	if($count==1){
	if($verified!='yes'){
	 if($stmt = $mysqli -> prepare($sql3)) {
			$stmt->bind_param('ss',$change, $hash);
			$stmt->execute();
			if ($stmt->errno) {
			//  echo "FAILURE!!! " . $stmt->error();
			}
			$stmt->close();
			$result['replay']='success';
	  }else {
		
	  }
	}else{
	
	  $result['replay']='expired';
	
	}
	}else{

	  
	  $result['replay']='invalid';
	}
	

	echo var_export(json_encode($result));

	
?>