<?php

include('header.php');
define("PBKDF2_HASH_ALGORITHM", "sha512");
$ip = ip2long($_SERVER['REMOTE_ADDR']); 
$screen_name=$_POST['screen_name'];
$user_name=$_POST['mail'];
$password=$_POST['password'];
$hashval=hash(PBKDF2_HASH_ALGORITHM, $user_name);
$result= array();
$notes="your notes here";
$res1='';
$verified='yet';


//  new code to encrypt user data



	$cryptKey  = 'qJB0rGaetTREUB1xGUVI05fyCp';
	$password  = base64_encode( mcrypt_encrypt( MCRYPT_RIJNDAEL_256, md5( $cryptKey ), $password, MCRYPT_MODE_CBC, md5( md5( $cryptKey ) ) ) );
	$hashval=hash(PBKDF2_HASH_ALGORITHM, $user_name);

$my_t=getdate(date("U"));
$info=("$my_t[mday]-$my_t[mon]-$my_t[year] $my_t[hours]:$my_t[minutes]");



$sql = "SELECT `hash` from `userdetails` where `hash` =?";
$sql1="INSERT INTO `userdetails`(`screen_name`,`user_name`,`hash`,`password`,`verified`,`datetime`) VALUES (?,?,?,?,?,?)";


$sql2="INSERT INTO `useranalyst`(`user_name`,`hash`,`ip_address`,`datetime`) VALUES (?,?,?,? )";



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
				  $stmt -> bind_param('ssssss',$screen_name,$user_name,$hashval,$password,$verified,$info);
				  $stmt -> execute();
				  $stmt -> close();
				  
				$result['hash'] = $hashval;
				$result['mail'] = $user_name;	
				$result['response']="newuser";
				$result['screen_name']=$screen_name;
				//echo var_export(json_encode($result));
				//echo($hashval);		
/*   code to send activation link to users*/
				$to=$user_name;
$msg="Thanks for signing up linksavers.com , there is one step before activate your account . please open this link your browser to activate your account" ;
'$msg+="<a href='http://www.linksavers.com/activate.html?acc='".$hashval.">activate</a>";
$sub="www.linksavers.com";
mail($to,"ragu",$msg);

				
			}
			
			if($stmt = $mysqli -> prepare($sql2)) 
			{
			  $stmt -> bind_param('ssss',$user_name,$hashval,$ip,$info);
			  $stmt -> execute();
			  $stmt -> close();	
			}
			
			
			
				
				
		}else{
		
			$result['response']="olduser";
			
		}		

	  
	  }
	  else
	  {
	  // echo "Error fetching user info";
	  }
	echo var_export(json_encode($result));
?>