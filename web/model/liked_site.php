 <?php
	include('header.php');
	
$site=$_POST['sitename'];
$by=$_POST['user'];
//$like=$_POST['like_count'];
$cate=$_POST['category'];
$like_count=0;
$result= array();
$desc=$_POST['desc'];

$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
	
	$sql="INSERT INTO `likedsites`(`sitename`,`desc`,`category`,`by`,`datetime`) VALUES (?,?,?,?,? )";
	$sql1="UPDATE sitelist SET `likes`=? where `sitename`=? and `category`=?";
	$sql2="SELECT `likes` FROM `sitelist` where `sitename`=?";
	$sql3="SELECT `by` FROM `likedsites` where `sitename`=? and `by`=?";
	
	$my_t=getdate(date("U"));
$info=("$my_t[mday]-$my_t[mon]-$my_t[year] $my_t[hours]:$my_t[minutes]");

	
	
	if($stmt1 = $mysqli -> prepare($sql3)) 
	{	
		$temp_by='';
		$stmt1 -> bind_param('ss', $site,$by);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($temp_by);
		$stmt1 -> fetch();
		$stmt1 -> close();		
		
	}else{ echo "ur"; }
	
	
	if($temp_by){
	
	$result['replay']='you already liked';
	
	}
	else{
	 
	
		if($stmt1 = $mysqli -> prepare($sql2)) 
	{	
		
		$stmt1 -> bind_param('s', $site);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($like_count);
		$stmt1 -> fetch();
		$stmt1 -> close();		
		
	}else{
		//echo "u";
	}
	
	$like_count++;
	
	  if($stmt = $mysqli -> prepare($sql)) {
			$stmt->bind_param('sssss',$site,$desc,$cate,$by,$info);
			$stmt->execute();
			if ($stmt->errno) {
			 // echo "FAILURE!!! " . $stmt->error();
			}
			$stmt->close();
			
	  }else {
		//echo "fail1";
	  }
	  
	  
	if($stmt = $mysqli -> prepare($sql1)) {
			$stmt->bind_param('sss', $like_count,$site,$cate);
			$stmt->execute();
			if ($stmt->errno) {
			//  echo "FAILURE!!! " . $stmt->error();
			}
			$stmt->close();
			
			
			
	  }else {
	//	echo "fail2";
	  }
	$result['replay']='you liked';
	}
	
	echo var_export(json_encode($result));
	  

	
?>