 <?php
	include('header.php');
	define("PBKDF2_HASH_ALGORITHM", "sha512");
$by=$_POST['by'];
$to=$_POST['to'];
$count=0;
$count1=0;
$result= array();	
	$sitename=array();
	$res1=0;
	$hash=hash(PBKDF2_HASH_ALGORITHM, $by);
	
	
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
   
  $sql = "SELECT count(`hash`),`screen_name` from `userdetails` where `hash` =?";
	
	$sql1="SELECT count(`by`) FROM `sitelist` WHERE `by`=?";
	$sql2 = "SELECT  `sitename`,`description` FROM `sitelist` where `by`=?";	
	
		
	$sql6="SELECT  count(  `sitename`) FROM `likedsites` WHERE `by`=?";
	$sql7="SELECT   `sitename` FROM `likedsites` WHERE `by`=?";	
	
	$sql8="SELECT  count( `to`) FROM `followers_list` WHERE `by`=?";

	
	$sql10="SELECT  count(  `by`) FROM `followers_list` WHERE `to`=?";
	/*   it  to get count of followers  */
	$sql11="SELECT  count(*) FROM `followers_list` WHERE `by`=? and `to`=?";
	/*   it  to test whether current person following other person  */
	
	  if($stmt = $mysqli -> prepare($sql)) 
	  {
		  $stmt -> bind_param('s', $hash);
		  $stmt -> execute();
		  $stmt -> bind_result($res1,$sname);
		  $stmt -> fetch();
		  $stmt -> close();
	  
	if($res1==1){
	$sitename['sname']=$sname;
	$sitename['response']="av";
	if($stmt1 = $mysqli -> prepare($sql1)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		$sitename['count']=$count;
		$stmt1 -> close();	
		
	}else{ //echo "u"; 
	}
	
	if($stmt1 = $mysqli -> prepare($sql2)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		for($i=1;$i<=$count;$i++){
		$stmt1 -> bind_result($site,$desc);
		$stmt1 -> fetch();
		if($site==''){
		$sitename['count']=$sitename['count']-1;
		}else{
		 $sitename[$i]=$site;
		 $sitename['desc'.$i]=$desc;   }
		}
		$stmt1 -> close();	
		//echo $sitename1;
	
	
		
	}else{
	//echo "sry";
	}

	
	
	
	if($stmt1 = $mysqli -> prepare($sql6)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		$sitename['like_count']=$count;
		$stmt1 -> close();	
		
	
		
	}else{
//	echo "u";
	}
	
	if($stmt1 = $mysqli -> prepare($sql7)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		for($i=1;$i<=$count;$i++){
		$stmt1 -> bind_result($site);
		$stmt1 -> fetch();
		 $sitename['likes'.$i]=$site;
		}
		$stmt1 -> close();	
		//echo $sitename1;
	
	
		
	}else{
	//echo "sry";
	}
	
	if($stmt1 = $mysqli -> prepare($sql8)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		$sitename['by_count']=$count;
		$stmt1 -> close();	
		
	
		
	}else{
//	echo "u"; 
}

	if($stmt1 = $mysqli -> prepare($sql10)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		$sitename['to_count']=$count;
		$stmt1 -> close();	
		
	
		
	}else{ 
	//echo "u";
	}
	
	if($stmt1 = $mysqli -> prepare($sql11)) 
	{	
		
		$stmt1 -> bind_param('ss',$to,$by);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		$sitename['follow_count']=$count;
		$stmt1 -> close();	
		
	
		
	}else{ 
	//echo "u";
	}
	}else{
	$sitename['response']="nav";
	}
	
	}

	echo var_export(json_encode($sitename)); 
?>