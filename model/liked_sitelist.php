 <?php
	include('header.php');
	
$by=$_POST['by'];
$count=0;
$result= array();	
	$sitename=array();
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
	
	$sql1="SELECT  count(DISTINCT  `sitename`) FROM `likedsites` WHERE `by`=?";
	$sql2="SELECT DISTINCT  `sitename` FROM `likedsites` WHERE `by`=?";	
	
	
	if($stmt1 = $mysqli -> prepare($sql1)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		$sitename['count']=$count;
		$stmt1 -> close();	
		
	
		
	}else{ echo "u"; }
	
	if($stmt1 = $mysqli -> prepare($sql2)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		for($i=1;$i<=$count;$i++){
		$stmt1 -> bind_result($site);
		$stmt1 -> fetch();
		 $sitename[$i]=$site;
		}
		$stmt1 -> close();	
		//echo $sitename1;
	
	
		
	}else{
	echo "sry";
	}

	echo var_export(json_encode($sitename)); 
?>