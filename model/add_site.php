 <?php
	include('header.php');
	
$site=$_POST['sitename'];
$category=$_POST['category'];
$visible=$_POST['visible'];
$result= array();	

$by=$_POST['user_name'];
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
   
   
   $homepage = file_get_contents('http://'.$site);

$start=strpos($homepage,'<title>');
$end=strpos($homepage,'</title>');
$para=substr($homepage,$start,$end-$start+4);
$para=html_entity_decode(strip_tags($para,''));

$desc=$para;
	
	$sql="INSERT INTO `sitelist`(`sitename`,`description`,`category`,`by`,`visible`) VALUES (?,?,?,?,? )";
	
	
	
	
	  if($stmt = $mysqli -> prepare($sql)) {
			$stmt->bind_param('sssss', $site,$desc,$category, $by,$visible);
			$stmt->execute();
			$result['status']='true';
			if ($stmt->errno) {
			//  echo "FAILURE!!! " . $stmt->error();
			}
			$stmt->close();
			
			
			
	  }else {
		echo "fail";
	  }
	  

echo var_export(json_encode($result)); 
	
?>