 <?php
	include('header.php');
	define("PBKDF2_HASH_ALGORITHM", "sha512");
	

$user_name=$_POST['user_id'];
$admin='admin';
$result= array();	
$hashval=hash(PBKDF2_HASH_ALGORITHM, $user_name);
$category_info=array();
$count='';	
	
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
	
	
	$sql="SELECT  `password` FROM `userdetails` where `hash`=?" ;	
	$sql1 = "SELECT count(`password`) from `userdetails` where `hash`=?";
	
	
	
	if($stmt1 = $mysqli -> prepare($sql1)) 
	{	
		
		$stmt1->bind_param('s', $hashval);
		$stmt1 -> execute();
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		
		$stmt1 -> close();	
		
		$result['count']=$count;		
	}
	
	
	if($result['count']===1){
	
	if($stmt1 = $mysqli -> prepare($sql)) 
	{	
		
		$stmt1->bind_param('s', $hashval);
		$stmt1 -> execute();
		$stmt1 -> bind_result($pwd);
		$stmt1 -> fetch();
		
		$stmt1 -> close();	
		$result['pwd']=$pwd;
		
	$cryptKey  = 'qJB0rGaetTREUB1xGUVI05fyCp';
	
	$password  = rtrim( mcrypt_decrypt( MCRYPT_RIJNDAEL_256, md5( $cryptKey ), base64_decode( $result['pwd'] ), MCRYPT_MODE_CBC, md5( md5( $cryptKey ) ) ), "\0");
	
	//echo $password;
	$result['pwd']=$password;

		
	}else{ 
	

	
	}
	
	}
	else{
	$result['pwd']="";
	}
	
	echo var_export(json_encode($result)); 
?>