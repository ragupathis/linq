 <?php
	include('header.php');
		define("PBKDF2_HASH_ALGORITHM", "sha512");



$site=$_POST['sitename'];
$by=$_POST['user'];
$tblname=$_POST['tbl'];

$hashval=hash(PBKDF2_HASH_ALGORITHM, $by);
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
	
	$sql2 = "SELECT `site_count` from `userdetails` where `hash` =?";
	
	$sql3="UPDATE `userdetails` SET `site_count`=? WHERE `hash`=?";
	
	
	
	  if($stmt = $mysqli -> prepare($sql)) {
			$stmt->bind_param('ss', $site, $by);
			$stmt->execute();
			if ($stmt->errno) {
			//  echo "FAILURE!!! " . $stmt->error();
			}
			$stmt->close();
			
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

		  
	 if($stmt = $mysqli -> prepare($sql3)) 
	  { 
		  $stmt -> bind_param('ss', $follow_c,$hashval);
		  $stmt -> execute();
		  
		  $stmt -> fetch();
		  $stmt -> close();
		  

	  }	
			
	  }else {
		echo "fail";
	  }
	  


	
?>