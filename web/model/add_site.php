 <?php
	include('header.php');
	define("PBKDF2_HASH_ALGORITHM", "sha512");
$site=$_POST['sitename'];
$category=$_POST['category'];
$visible=$_POST['visible'];
$result= array();	

$by=$_POST['user_name'];
$user_name=$by;
$hashval=hash(PBKDF2_HASH_ALGORITHM, $user_name);
$site_c=0;
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
   
   
   function clean($string) {
   $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.
   $string = str_replace('\'', '', $string); // Replaces all ' with hyphens.
   return preg_replace('/[^A-Za-z0-9\-:"\'|]/', '', $string); // Removes special chars.
}
//$a='a|"bc!@£de^&$\'f.||||            :"" k1g)';
//echo clean($a);
   
   $my_t=getdate(date("U"));
$info=("$my_t[mday]-$my_t[mon]-$my_t[year] $my_t[hours]:$my_t[minutes]");

   
$homepage = file_get_contents('http://'.$site);

$start=strpos($homepage,'<title>');
$end=strpos($homepage,'</title>');
$para=substr($homepage,$start,$end-$start+4);
$para=html_entity_decode(strip_tags($para,''));

$desc=$para;
$desc=clean($desc);
	
	$sql="INSERT INTO `sitelist`(`sitename`,`description`,`category`,`by`,`visible`,`datetime`) VALUES (?,?,?,?,?,? )";
	
	$sql1 = "SELECT `site_count` from `userdetails` where `hash` =?";
	
	$sql2="UPDATE `userdetails` SET `site_count`=? WHERE `hash`=?";
	
	 if($stmt = $mysqli -> prepare($sql1)) 
	  {
		  $stmt -> bind_param('s', $hashval);
		  $stmt -> execute();
		  $stmt -> bind_result($res1);
		  $stmt -> fetch();
		  $stmt -> close();
		  $site_c=$res1;
		  $site_c=$site_c+1;
	  }
		  
		  
	 if($stmt = $mysqli -> prepare($sql2)) 
	  {
		  $stmt -> bind_param('ss', $site_c,$hashval);
		  $stmt -> execute();
		  
		  $stmt -> fetch();
		  $stmt -> close();
		  
	  }
		  
		
	  if($stmt = $mysqli -> prepare($sql)) {
			$stmt->bind_param('ssssss', $site,$desc,$category, $by,$visible,$info);
			$stmt->execute();
			$result['status']='true';
			if ($stmt->errno) {
			//  echo "FAILURE!!! " . $stmt->error();
			}
			$stmt->close();
			
			
			
	  }else {
	//	echo "fail";
	  }
	  

echo var_export(json_encode($result)); 
	
?>