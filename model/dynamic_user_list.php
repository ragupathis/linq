 <?php
	include('header.php');
	
$usr=$_POST['by'];
$count=0;
$result= array();	
	$userlist=array();
	
	/*
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 echo "n";
   }*/
	
	$sql1="SELECT count(`user_name`) FROM `userdetails`  where `screen_name` like '?%' ";
	$sql2="SELECT `screen_name`,`user_name`,`site_count`,`followers_count` FROM `userdetails` where `screen_name` like '?%' ORDER BY `followers_count` DESC";	
	
	
	if($stmt1 = $mysqli -> prepare($sql1)) 
	{	
		
		$stmt1 -> bind_param('s', $usr);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		$userlist['count']=$count;
		$stmt1 -> close();	
		
	echo $usr;
		
	}else{ echo "u"; }
	
	if($stmt1 = $mysqli -> prepare($sql2)) 
	{	
		
		$stmt1 -> bind_param('s', $usr);
		$stmt1 -> execute();
		for($i=1;$i<=$count;$i++){
		$stmt1 -> bind_result($screen_name,$user_name,$site_count,$followers_count);
		$stmt1 -> fetch();
		/*
		 echo $screen_name;
		 echo $site_count;
		 echo $followers_count;*/
		 $userlist['sname'.$i]=$screen_name;
		 $userlist['uname'.$i]=$user_name;
		 $userlist['site'.$i]=$site_count;
		 $userlist['flwr'.$i]=$followers_count;
		 
	}
		$stmt1 -> close();	
		echo 'sitename1';
	
	
		
	}else{
	echo "sry";
	}

	echo var_export(json_encode($userlist)); 
?>