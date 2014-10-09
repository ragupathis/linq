 <?php
	include('header.php');
	
$by=$_POST['by'];
$count=0;
$count1=0;
$result= array();	
	$sitename=array();
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
	
	$sql1="SELECT count(`by`) FROM `sitelist` WHERE `by`=?";
	$sql2="SELECT count(`category`) FROM `categories` where `added_by`=?";
			
	$sql3="SELECT  count(DISTINCT  `sitename`) FROM `likedsites` WHERE `by`=?";
	
	
	
	if($stmt1 = $mysqli -> prepare($sql1)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		$sitename['count']=$count;
		$stmt1 -> close();	
		
	}else{ //echo "u"; 
	}

	if($stmt1 = $mysqli -> prepare($sql2)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($count1);
		$stmt1 -> fetch();
		$sitename['cate_count']=$count1;
		$stmt1 -> close();	
		
	
		
	}else{ //echo "u"; 
	}

	
	
	if($stmt1 = $mysqli -> prepare($sql3)) 
	{	
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		$sitename['like_count']=$count;
		$stmt1 -> close();	
		
	
		
	}else{  }


	echo var_export(json_encode($sitename)); 
?>