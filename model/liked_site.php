 <?php
	include('header.php');
	
$site=$_POST['sitename'];
$by=$_POST['user'];
//$like=$_POST['like_count'];

$like_count=0;

$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
	
	$sql="INSERT INTO `likedsites`(`sitename`,`by`) VALUES (?,? )";
	$sql1="UPDATE sitelist SET `likes`=? where `sitename`=?";
	$sql2="SELECT `likes` FROM `sitelist` where `sitename`=?";
	
	
		if($stmt1 = $mysqli -> prepare($sql2)) 
	{	
		
		$stmt1 -> bind_param('s', $site);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($like_count);
		$stmt1 -> fetch();
		$stmt1 -> close();		
		
	}else{ echo "u"; }
	
	$like_count++;
	
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
	  
if($stmt = $mysqli -> prepare($sql1)) {
			$stmt->bind_param('ss', $like_count,$site);
			$stmt->execute();
			if ($stmt->errno) {
			  echo "FAILURE!!! " . $stmt->error();
			}
			$stmt->close();
			
			
			
	  }else {
		echo "fail";
	  }
	  

	
?>