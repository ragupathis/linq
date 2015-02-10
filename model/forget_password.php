 <?php
	include('header.php');
	define("PBKDF2_HASH_ALGORITHM", "sha512");
	

$user_name=$_POST['user_id'];
$admin='admin';
$result= array();	
$hashval=hash(PBKDF2_HASH_ALGORITHM, $user_name);
$category_info=array();
$count='';	
$verif='yet';
$verif1='yes';
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
	
	
	$sql="SELECT  `password` FROM `userdetails` where `hash`=? and `verified`=?" ;	
	$sql1 = "SELECT count(`password`) from `userdetails` where `hash`=? and `verified`=?";
	
	$sql2="SELECT  `hash` FROM `userdetails` where `hash`=?" ;	
	$sql3 = "SELECT count(`hash`) from `userdetails` where `hash`=? and `verified`=?";
	
	
	if($stmt1 = $mysqli -> prepare($sql1)) 
	{	
		
		$stmt1->bind_param('ss', $hashval,$verif1);
		$stmt1 -> execute();
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		
		$stmt1 -> close();	
		
		$result['count']=$count;		
	}
	
	
	if($result['count']===1){
	
	if($stmt1 = $mysqli -> prepare($sql)) 
	{	
		
		$stmt1->bind_param('ss', $hashval,$verif1);
		$stmt1 -> execute();
		$stmt1 -> bind_result($pwd);
		$stmt1 -> fetch();
		
		$stmt1 -> close();	
		//$result['pwd']=$pwd;
		$temp_password=$pwd;
		
	$cryptKey  = 'qJB0rGaetTREUB1xGUVI05fyCp';
	
	$password  = rtrim( mcrypt_decrypt( MCRYPT_RIJNDAEL_256, md5( $cryptKey ), base64_decode( $temp_password ), MCRYPT_MODE_CBC, md5( md5( $cryptKey ) ) ), "\0");
	
	//echo $password;
	//$result['pwd']=$password;

/*  mail to send password   */	
$to=$user_name;
$msg="Hi User , \n\n password : " . $password ;
$sub="www.linksavers.com";
mail($to,$sub,$msg);

/*  mail to send password   */	
		
	}else{ 
	
$result['status']='true';
	
	}
	
	}
	else{

	
	if($stmt1 = $mysqli -> prepare($sql3)) 
	{	
		
		$stmt1->bind_param('ss', $hashval,$verif);
		$stmt1 -> execute();
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		
		$stmt1 -> close();	
		
		$result['count']=$count;		
	}
	
	
	if($result['count']===1){
	
	/*  mail to send activation link   */	
$to=$user_name;
$msg="Thanks for signing up linksavers.com , there is one step before activate your account . please open this link your browser to activate your account <a href='http://www.linksavers.com/activate.html?acc=".$hashval."'>activate</a>";
$sub="www.linksavers.com";
mail($to,$sub,$msg);


/*  mail to send activation link   */	
	
	
	}
	else{
	
	$result['pwd']="";
	$result['status']='true';
	
	
	
	
	}
	}
	echo var_export(json_encode($result)); 
?>