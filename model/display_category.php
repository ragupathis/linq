 <?php
	include('header.php');
	

$count=0;
$size=0;
$result= array();	
	$category_info=array();
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
	
	
	$sql3 ="SELECT  count(distinct `category`) FROM `sitelist`" ;	
	$sql4 ="SELECT  distinct `category` FROM `sitelist` ";
	
	
	if($stmt1 = $mysqli -> prepare($sql3)) 
	{	
		
		
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($size);
		$stmt1 -> fetch();
		$category_info['size']=$size;
		$stmt1 -> close();	
		
	
		
	}else{ echo "sorry"; }
	
	
	if($stmt1 = $mysqli -> prepare($sql4)) 
	{	
		
		
		$stmt1 -> execute();
		
		for($k=1;$k<=$size;$k++){
		$stmt1 -> bind_result($category);
		$stmt1 -> fetch();
		 $category_info[$k]=$category;
		}
		$stmt1 -> close();	
		
	
		
	}else{ echo "sorry"; 
	
	}
	

	
	

	echo var_export(json_encode($category_info)); 
?>