 <?php
	include('header.php');
		define("PBKDF2_HASH_ALGORITHM", "sha512");

$tousr=$_POST['touser'];
$byusr=$_POST['byuser'];

$sitename=array();
$hashval=hash(PBKDF2_HASH_ALGORITHM, $tousr);
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
   
   $sql1="SELECT count(*) FROM `followers_list` WHERE `by`=? and `to`=?";
   
	$sql="DELETE  FROM `followers_list` WHERE `by`=? and `to`=?";
	
	
$sql2 = "SELECT `followers_count` from `userdetails` where `hash` =?";
	
	$sql3="UPDATE `userdetails` SET `followers_count`=? WHERE `hash`=?";
	
	
	
	
	  if($stmt = $mysqli -> prepare($sql1)) {
			$stmt->bind_param('ss',$byusr,$tousr);
			$stmt->execute();
			$stmt -> bind_result($res1);
			$stmt -> fetch();
			$stmt -> close();
	  	
			if($res1>=1){
			
			  if($stmt1 = $mysqli -> prepare($sql)) {
			$stmt1->bind_param('ss', $byusr, $tousr);
			$stmt1->execute();
			if ($stmt1->errno) {
			 // echo "FAILURE!!! " . $stmt1->error();
			}
			$stmt1->close();
			
			$sitename['response']="av";
			
			
			
	 if($stmt = $mysqli -> prepare($sql2)) 
	  {
		  $stmt -> bind_param('s', $hashval);
		  $stmt -> execute();
		  $stmt -> bind_result($res1);
		  $stmt -> fetch();
		  $stmt -> close();

		  $follow_c=$res1;
		  $follow_c=$follow_c-1;
		  

	  }
	  else {

	  }
		  
		  
	 if($stmt = $mysqli -> prepare($sql3)) 
	  { 
		  $stmt -> bind_param('ss', $follow_c,$hashval);
		  $stmt -> execute();
		  
		  $stmt -> fetch();
		  $stmt -> close();
		  

	  }	
			
			
	  }else {
		
		$sitename['response']="nav";
	  }
	  
			
			}else{
			$sitename['response']="nav";
			
			}
			
	  }
	
	echo var_export(json_encode($sitename)); 


	
?>