 <?php
	include('header.php');
	
$usr=$_POST['user'];
$count=0;
$result= array();	
	$userlist=array();


	$sql1="SELECT count(`msg`) FROM `notifications` WHERE `by` IN ( select `to` from `followers_list` where `by`=?) ";
	
	$sql2="SELECT `msg` FROM `notifications` WHERE `by` IN ( select `to` from `followers_list` where `by`=? )";
	
	if($stmt1 = $mysqli -> prepare($sql1)) 
	{	
		
		$stmt1 -> bind_param('s', $usr);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		$userlist['count']=$count;
		$stmt1 -> close();	
		
	//echo $usr;
		
	}else{ 
	//echo "u"; 
	}
	
	if($stmt1 = $mysqli -> prepare($sql2)) 
	{	
		
		$stmt1 -> bind_param('s', $usr);
		$stmt1 -> execute();
		for($i=1;$i<=$count;$i++){
		$stmt1 -> bind_result($msg);
		$stmt1 -> fetch();

		$userlist['msg'.$i]=$msg;
		 
	}
		$stmt1 -> close();	
	
	
	
		
	}else{
	//echo "sry";
	}

	echo var_export(json_encode($userlist)); 
?>