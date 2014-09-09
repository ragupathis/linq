<?php

include('header.php');
define("PBKDF2_HASH_ALGORITHM", "sha512");
$ip = ip2long($_SERVER['REMOTE_ADDR']); 

$user_name=$_POST['user_id'];
$password=$_POST['password'];

$hashval=hash(PBKDF2_HASH_ALGORITHM, $user_name);
$result= array();
$notes="text here";
$res1='';
$response=0;

//$sql = "SELECT `hash` from `userdetails` where `hash` =?";
$sql1="INSERT INTO `userdetails`(`user_name`,`hash`) VALUES (?,? )";

$sql2="INSERT INTO `useranalyst`(`user_name`,`hash`,`ip_address`) VALUES (?,?,? )";
$sql3="SELECT `screen_name` from `userdetails` where `hash`=?";

if($password!=''){
		if ($password=='1') {
			//$sql = "SELECT password from userdetails where userid=?";
		}else{
			$cryptKey  = 'qJB0rGaetTREUB1xGUVI05fyCp';
			$password  = base64_encode( mcrypt_encrypt( MCRYPT_RIJNDAEL_256, md5( $cryptKey ), $password, MCRYPT_MODE_CBC, md5( md5( $cryptKey ) ) ) );

			$sql = "SELECT count(*) from `userdetails` where `hash`=? AND `password`=?";
		}
	}else{ 
		$sql = "SELECT count(*) from userdetails where userid=?";
	}
	
	if($stmt = $mysqli -> prepare($sql)) {
		if($password!=''){
			if ($password=='1') {
				$stmt -> bind_param('s', $hashval);
			}else{
				$stmt -> bind_param('ss', $hashval,$password);
			}
		}else{
			$stmt -> bind_param('s', $umail);
		}

		//var_dump($sql);
		$stmt -> execute();
		$stmt -> bind_result($response);
		$stmt -> fetch();
		$stmt -> close();
		
		}
if($response==1){
	/*  if($stmt = $mysqli -> prepare($sql)) 
	//echo "success";
	  {
		  $stmt -> bind_param('s', $hashval);
		  $stmt -> execute();
		  $stmt -> bind_result($res1);
		  $stmt -> fetch();
		  $stmt -> close();
		  
		
		
		if(empty($res1))
		{		*/
			
			$result['status']='yes';
			if($stmt = $mysqli -> prepare($sql1)) {
				  $stmt -> bind_param('ss',$user_name,$hashval);
				  $stmt -> execute();
				  $stmt -> close();
				  
				$result['hash'] = $hashval;
				$result['mail'] = $user_name;	
				
				//echo var_export(json_encode($result));
				//echo($hashval);				  
			}
			else{
			$result['hash']=$res1;
			$result['mail'] = $user_name;	
			}		
		
		
		
			if($stmt = $mysqli -> prepare($sql2)) 
			{
			  $stmt -> bind_param('sss',$user_name,$hashval,$ip);
			  $stmt -> execute();
			  $stmt -> close();	
			}
	   
	   if($stmt = $mysqli -> prepare($sql3)) {
		
		$stmt -> bind_param('s', $hashval);
		$stmt -> execute();
		$stmt -> bind_result($screen_name);
		$stmt -> fetch();
		$stmt -> close();
		$result['screen_name']=$screen_name;
		}
	   
	  }else if($response==0){
	  //echo "login failed";
	  $result['status']='no';
	  }
	  else
	  {
	   echo "Error fetching user info";
	  }
	echo var_export(json_encode($result));
?>