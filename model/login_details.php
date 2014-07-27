<?php

include('header.php');
define("PBKDF2_HASH_ALGORITHM", "sha512");
$ip = ip2long($_SERVER['REMOTE_ADDR']); 

$user_name=$_POST['user_id'];

$hashval=hash(PBKDF2_HASH_ALGORITHM, $user_name);
$result= array();
$notes="text here";
$res1='';
$sql = "SELECT `hash` from `userdetails` where `hash` =?";
$sql1="INSERT INTO `userdetails`(`user_name`,`hash`) VALUES (?,? )";

$sql2="INSERT INTO `useranalyst`(`user_name`,`hash`,`ip_address`) VALUES (?,?,? )";

$sql3="INSERT INTO `notes`(`user_name`,`notes`) VALUES (?,? )";
	  if($stmt = $mysqli -> prepare($sql)) 
	  {
		  $stmt -> bind_param('s', $hashval);
		  $stmt -> execute();
		  $stmt -> bind_result($res1);
		  $stmt -> fetch();
		  $stmt -> close();
		  
		
		if(empty($res1))
		{		
			
			
			if($stmt = $mysqli -> prepare($sql1)) {
				  $stmt -> bind_param('ss',$user_name,$hashval);
				  $stmt -> execute();
				  $stmt -> close();
				  
				$result['hash'] = $hashval;
				$result['mail'] = $user_name;	
				
				//echo var_export(json_encode($result));
				//echo($hashval);				  
			}
			
			if($stmt = $mysqli -> prepare($sql3)) {
				  $stmt -> bind_param('ss',$user_name,$notes);
				  $stmt -> execute();
				  $stmt -> close();
					  
			}
				
				
		}else{
			$result['hash']=$res1;
			$result['mail'] = $user_name;	
		}		
if($stmt = $mysqli -> prepare($sql2)) 
			{
			  $stmt -> bind_param('sss',$user_name,$hashval,$ip);
			  $stmt -> execute();
			  $stmt -> close();	
			}
	  
	  }
	  else
	  {
	   echo "Error fetching user info";
	  }
	echo var_export(json_encode($result));
?>