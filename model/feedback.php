<?php

include('header.php');
define("PBKDF2_HASH_ALGORITHM", "sha512");
$ip = ip2long($_SERVER['REMOTE_ADDR']); 

$user_name=$_POST['user_id'];
$feedback=$_POST['feedback'];


$result= array();
$notes="text here";
$res1='';
$response=0;
$datetime='';

$sql="INSERT INTO `feedback`(`user`,`feedback`,`datetime`) VALUES (?,?,? )";



	
	if($stmt = $mysqli -> prepare($sql)) {
		
		$stmt -> bind_param('sss', $user_name,$feedback,$datetime);
		
		$stmt -> execute();
		$stmt -> close();
		$result['status']='true';
		}

	  else
	  {
	   //echo "Error fetching user info";
	   $result['status']='false';
	  }
	echo var_export(json_encode($result));
?>