 <?php
	include('header.php');
	
$site=$_POST['sitename'];
$category=$_POST['category'];
$visible=$_POST['visible'];
$desc=$_POST['desc'];
$result= array();	

$by=$_POST['user_name'];
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
   

	$my_t=getdate(date("U"));
$info=("$my_t[mday]-$my_t[mon]-$my_t[year] $my_t[hours]:$my_t[minutes]");

	$sql="INSERT INTO `sitelist`(`sitename`,`description`,`category`,`by`,`visible`,`datetime`) VALUES (?,?,?,?,?,? )";
	
	
	
	
	  if($stmt = $mysqli -> prepare($sql)) {
			$stmt->bind_param('ssssss', $site,$desc,$category, $by,$visible,$info);
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