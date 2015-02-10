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
	
	
	/*
	$sql1="SELECT DISTINCT count(`category`) FROM `sitelist` WHERE `category`=? and (`visible`=? OR `visible`=?)";
	$sql2 = "SELECT DISTINCT `sitename`,`description` FROM `sitelist`  WHERE `category`=? and (`visible`=? OR `visible`=?) order by `likes` desc";
	*/
	
	$sql3="SELECT DISTINCT count( `sitename` ) FROM `sitelist` WHERE `by` = ? AND `category`=?";
	$sql4="SELECT DISTINCT `sitename`,`description` FROM `sitelist` WHERE `by` = ?  AND `category`=?";    /*   to display our added sites   */
	
	$sql5=" select DISTINCT count(`sitename`) from `likedsites` where `by`=?  AND `category`=?";
	$sql6=" select DISTINCT `sitename`,`desc` from `likedsites` where `by`=?  AND `category`=?";
	
	$sql7="SELECT DISTINCT count(`sitename`) FROM `sitelist` WHERE `sitename` Not in (select `sitename` from `likedsites` where `by`=?) AND `by`!=? AND `visible`=?  AND `category`=?";
	$sql8="SELECT DISTINCT `sitename`,`description` FROM `sitelist` WHERE `sitename` Not in (select `sitename` from `likedsites` where `by`=?) AND `by`!=? AND `visible`=?  AND `category`=?";
	
	if($stmt1 = $mysqli -> prepare($sql3)) 
	{	
		
		$stmt1 -> bind_param('ss', $private,$category);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		$sitename['add_count']=$count;
		$stmt1 -> close();	
		
	
		
	}else{// echo "u"; 
	}
	$descr='';
	if($stmt1 = $mysqli -> prepare($sql4)) 
	{	
		
		$stmt1 -> bind_param('ss',$private,$category);
		$stmt1 -> execute();
		for($i=1;$i<=$count;$i++){
		$stmt1 -> bind_result($site,$descr);
		$stmt1 -> fetch();
	if($site==''){
	//echo 'null value';
	$sitename['add_count']=($sitename['add_count']-1);
	}else{
	//echo 'null not';
		 $sitename['add'.$i]=$site;
		 $sitename['desc'.$i]=$descr;}
		}
		$stmt1 -> close();	
		//echo $sitename1;
	
	
		
	}else{
	//echo "sry";
	}
if($stmt1 = $mysqli -> prepare($sql5)) 
	{	
		
		$stmt1 -> bind_param('ss', $private,$category);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($like_count);
		$stmt1 -> fetch();
		$sitename['like_count']=$like_count;
		$stmt1 -> close();	
		
	
		
	}else{// echo "u"; 
	}
	$descr='';
	if($stmt1 = $mysqli -> prepare($sql6)) 
	{	
		
		$stmt1 -> bind_param('ss',$private,$category);
		$stmt1 -> execute();
		for($i=1;$i<=$like_count;$i++){
		$stmt1 -> bind_result($site,$descr);
		//echo $descr;
		$stmt1 -> fetch();
	if($site==''){
	//echo 'null value';
	$sitename['like_count']=($sitename['like_count']-1);
	}else{
	//echo 'null not';
		 $sitename['like'.$i]=$site;
		 $sitename['like_desc'.$i]=$descr;}
		}
		$stmt1 -> close();	
		//echo $sitename1;
	
	
		
	}else{
	//echo "sry";
	}
	
	
	
		if($stmt1 = $mysqli -> prepare($sql7)) 
	{	
		
		$stmt1 -> bind_param('ssss', $private,$private,$public,$category);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($other_count);
		$stmt1 -> fetch();
		$sitename['other_count']=$other_count;
		$stmt1 -> close();	
		
	
		
	}else{// echo "u"; 
	}
	
	if($stmt1 = $mysqli -> prepare($sql8)) 
	{	
		
		$stmt1 -> bind_param('ssss', $private,$private,$public,$category);
		$stmt1 -> execute();
		for($i=1;$i<=$other_count;$i++){
		$stmt1 -> bind_result($site,$descr);
		$stmt1 -> fetch();
	if($site==''){
	//echo 'null value';
	$sitename['other_count']=($sitename['other_count']-1);
	}else{
	//echo 'null not';
	
		 $sitename['other'.$i]=$site;
		 $sitename['other_desc'.$i]=$descr;}
		}
		$stmt1 -> close();	
		//echo $sitename1;
	
	
		
	}else{
	//echo "sry";
	}
	
	
	echo var_export(json_encode($sitename)); 
?>