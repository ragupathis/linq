 <?php
	include('header.php');
	define("PBKDF2_HASH_ALGORITHM", "sha512");



$result= array();	

$by=$_POST['by'];
$to=$_POST['to'];


$by_name=$_POST['by_name'];
$to_name=$_POST['to_name'];

$user_name=$to;
$hashval=hash(PBKDF2_HASH_ALGORITHM, $user_name);
$follow_c=0;

$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
   
   $my_t=getdate(date("U"));
	$info=("$my_t[mday]-$my_t[mon]-$my_t[year] $my_t[hours]:$my_t[minutes]");

   
	$sql="INSERT INTO `followers_list`(`by`,`by_screen_name`,`to`,`to_screen_name`,`datetime`) VALUES (?,?,?,?,? )";
	
	$sql1 = "SELECT `followers_count` from `userdetails` where `hash` =?";
	
	$sql2="UPDATE `userdetails` SET `followers_count`=? WHERE `hash`=?";
	
	 if($stmt = $mysqli -> prepare($sql1)) 
	  {
		  $stmt -> bind_param('s', $hashval);
		  $stmt -> execute();
		  $stmt -> bind_result($res1);
		  $stmt -> fetch();
		  $stmt -> close();

		  $follow_c=$res1;
		  $follow_c=$follow_c+1;

	  }
	  else {

	  }
		  
		  
	 if($stmt = $mysqli -> prepare($sql2)) 
	  {
		  $stmt -> bind_param('ss', $follow_c,$hashval);
		  $stmt -> execute();
		  
		  $stmt -> fetch();
		  $stmt -> close();
		  

	  }
		  
		
	  if($stmt = $mysqli -> prepare($sql)) {
			$stmt->bind_param('sssss', $by,$by_name,$to,$to_name,$info);
			$stmt->execute();
			$result['status']='true';
			if ($stmt->errno) {
			//  echo "FAILURE!!! " . $stmt->error();
			}
			$stmt->close();
			
			
			
	  }else {
		//echo "fail";
	  }
	  

echo var_export(json_encode($result)); 
	
?>