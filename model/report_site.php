 <?php
	include('header.php');
	
$site=$_POST['sitename'];
$by=$_POST['user'];

$report_count=0;
$limit=2;
$temp_by='';
$result= array();

$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
	
	$my_t=getdate(date("U"));
$info=("$my_t[mday]-$my_t[mon]-$my_t[year] $my_t[hours]:$my_t[minutes]");

	
	$sql="INSERT INTO `deleted_sites`(`sitename`,`by`,`report_count`) VALUES (?,?,? )";
	$sql1="UPDATE sitelist SET `report_count`=? where `sitename`=?";
	$sql2="SELECT `report_count`,`by` FROM `sitelist` where `sitename`=?";
	$sql3="UPDATE  sitelist SET `visible`=? where `sitename`=?";
	$sql4="DELETE from `likedsites` where `sitename`=?";
	$sql5="SELECT `by` FROM `report_details` where `sitename`=? and `by`=?";
	$sql6="INSERT INTO `report_details`(`sitename`,`by`,`datetime`) VALUES (?,?,? )";
	

	
	if($stmt1 = $mysqli -> prepare($sql5)) 
	{	
		$temp_by='';
		$stmt1 -> bind_param('ss', $site,$by);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($temp_by);
		$stmt1 -> fetch();
		$stmt1 -> close();		
		
	}else{ echo "ur"; }

	if($temp_by){
	
	
	$result['replay']='you already reported';
	}
	else{
	
	if($stmt = $mysqli -> prepare($sql6)) {
		$stmt->bind_param('sss', $site, $by,$info);
		$stmt->execute();
		if ($stmt->errno) {
		  echo "FAILURE!!! " . $stmt->error();
		}
		$stmt->close();
    }else {
		echo "fail";
	}
	
	if($stmt1 = $mysqli -> prepare($sql2)) 
	{	
		$stmt1 -> bind_param('s', $site);
		$stmt1 -> execute();
		$stmt1 -> bind_result($report_count,$add_by);
		$stmt1 -> fetch();
		$stmt1 -> close();			
	}else{ echo "u"; }
	
	$report_count++;
	
	if($report_count>$limit){
	  if($stmt = $mysqli -> prepare($sql)) {
			$stmt->bind_param('sss', $site, $add_by,$report_count);
			$stmt->execute();
			if ($stmt->errno) {
			  echo "FAILURE!!! " . $stmt->error();
			}
			$stmt->close();
	  }else {
		echo "fail1";
	  }
	  
	    if($stmt = $mysqli -> prepare($sql3)) {
			$stmt->bind_param('ss',$add_by, $site);
			$stmt->execute();
			if ($stmt->errno) {
			  echo "FAILURE!!! " . $stmt->error();
			}
			$stmt->close();
	  }else {
		echo "fail2";
	  }
	  
	    if($stmt = $mysqli -> prepare($sql4)) {
			$stmt->bind_param('s', $site);
			$stmt->execute();
			if ($stmt->errno) {
			  echo "FAILURE!!! " . $stmt->error();
			}
			$stmt->close();
	  }else {
		echo "fail3";
	  }
	  
	  }
	  else{
	if($stmt = $mysqli -> prepare($sql1)) {
			$stmt->bind_param('ss', $report_count,$site);
			$stmt->execute();
			if ($stmt->errno) {
			  echo "FAILURE!!! " . $stmt->error();
			}
			$stmt->close();			
	  }else {
		echo "fail";
	  }
	  
	  }
	  
	  $result['replay']='you reported';
	
	}

	echo var_export(json_encode($result));

	
?>