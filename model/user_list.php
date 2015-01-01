 <?php
	include('header.php');
	
$by=$_POST['by'];
$count=0;
$result= array();	
	$userlist=array();
/*$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }*/
	 
	
	$sql1="SELECT count(`user_name`) FROM `userdetails` WHERE `user_name` Not in ( select `to` from `followers_list` where `by`=?) AND `user_name`!=?";
	$sql2="SELECT `screen_name`,`user_name`,`site_count`,`followers_count` FROM `userdetails` WHERE `user_name` Not in ( select `to` from `followers_list` where `by`=?) AND `user_name`!=?";
	
	$sql3="SELECT `screen_name`,`user_name`,`site_count`,`followers_count` FROM `userdetails` WHERE `user_name`  IN ( select `to` from `followers_list` where `by`=?)";
	
	$sql4="SELECT count(`user_name`) FROM `userdetails` WHERE `user_name`  IN ( select `to` from `followers_list` where `by`=?)";
	

		if($stmt1 = $mysqli -> prepare($sql4)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($fwcount);
		$stmt1 -> fetch();
		$userlist['fwcount']=$fwcount;
		$stmt1 -> close();	
		
	}else{ 
	//echo "u"; 
	}
	
	if($stmt1 = $mysqli -> prepare($sql3)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		for($i=1;$i<=$fwcount;$i++){
		$stmt1 -> bind_result($screen_name,$user_name,$site_count,$followers_count);
		$stmt1 -> fetch();

		 $userlist['fwsname'.$i]=$screen_name;
		 $userlist['fwuname'.$i]=$user_name;
		 $userlist['fwsite'.$i]=$site_count;
		 $userlist['fwflwr'.$i]=$followers_count;
		 
	}
		$stmt1 -> close();		
	}else{
	//echo "sry";
	}



	if($stmt1 = $mysqli -> prepare($sql1)) 
	{	
		
		$stmt1 -> bind_param('ss', $by,$by);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		$userlist['count']=$count;
		$stmt1 -> close();	
		
	}else{ echo "u"; }
	
	if($stmt1 = $mysqli -> prepare($sql2)) 
	{	
		
		$stmt1 -> bind_param('ss', $by,$by);
		$stmt1 -> execute();
		for($i=1;$i<=$count;$i++){
		$stmt1 -> bind_result($screen_name,$user_name,$site_count,$followers_count);
		$stmt1 -> fetch();

		 $userlist['sname'.$i]=$screen_name;
		 $userlist['uname'.$i]=$user_name;
		 $userlist['site'.$i]=$site_count;
		 $userlist['flwr'.$i]=$followers_count;
		 
	}
		$stmt1 -> close();		
	}else{
	//echo "sry";
	}

	echo var_export(json_encode($userlist)); 
?>