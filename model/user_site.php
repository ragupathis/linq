 <?php
	include('header.php');
	
$category=$_POST['category'];
$count=0;
$size=0;
$result= array();	
$public='Public';
$private=$_POST['user'];
	$sitename=array();
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
	
	
	
	
	$sql1="SELECT count(`category`) FROM `sitelist` WHERE `category`=? and (`visible`=? OR `visible`=?)";
	$sql2 = "SELECT DISTINCT `sitename`,`description` FROM `sitelist`  WHERE `category`=? and (`visible`=? OR `visible`=?) order by `likes` desc";
	
	
	if($stmt1 = $mysqli -> prepare($sql1)) 
	{	
		
		$stmt1 -> bind_param('sss', $category,$public,$private);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		$sitename['count']=$count;
		$stmt1 -> close();	
		
	
		
	}else{ echo "u"; }
	
	if($stmt1 = $mysqli -> prepare($sql2)) 
	{	
		
		$stmt1 -> bind_param('sss', $category,$public,$private);
		$stmt1 -> execute();
		for($i=1;$i<=$count;$i++){
		$stmt1 -> bind_result($site,$descr);
		$stmt1 -> fetch();
	if($site==''){
	//echo 'null value';
	$sitename['count']=($sitename['count']-1);
	}else{
	//echo 'null not';
		 $sitename[$i]=$site;
		 $sitename['desc'.$i]=$descr;}
		}
		$stmt1 -> close();	
		//echo $sitename1;
	
	
		
	}else{
	echo "sry";
	}

	echo var_export(json_encode($sitename)); 
?>