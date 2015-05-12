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
//$sql1="INSERT INTO `userdetails`(`user_name`,`hash`) VALUES (?,? )";

$sql2="INSERT INTO `useranalyst`(`user_name`,`hash`,`ip_address`,`datetime`) VALUES (?,?,?,? )";
$sql3="SELECT `screen_name` from `userdetails` where `hash`=?";

$my_t=getdate(date("U"));
$info=("$my_t[mday]-$my_t[mon]-$my_t[year] $my_t[hours]:$my_t[minutes]");


if($password!=''){
		
			$cryptKey  = 'qJB0rGaetTREUB1xGUVI05fyCp';
			$password  = base64_encode( mcrypt_encrypt( MCRYPT_RIJNDAEL_256, md5( $cryptKey ), $password, MCRYPT_MODE_CBC, md5( md5( $cryptKey ) ) ) );

			$sql = "SELECT count(*),`verified` from `userdetails` where `hash`=? AND `password`=?";
		
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
		$stmt -> bind_result($response,$verified_resp);
		$stmt -> fetch();
		$stmt -> close();
		
		}
if($response==1 ){

  
				$result['hash'] = $hashval;
				$result['mail'] = $user_name;	

			if($verified_resp=='yes'){
			
			$result['status']='yes';
			
		}else{
		$result['status']='yet';
		}

			if($stmt = $mysqli -> prepare($sql2)) 
			{
			  $stmt -> bind_param('ssss',$user_name,$hashval,$ip,$info);
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
	//   echo "Error fetching user info";
	  }
	echo var_export(json_encode($result));
?>