 <?php
	include('header.php');
	
$by=$_POST['by'];
$count=0;
$count1=0;
$result= array();	
	$sitename=array();
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
	
	$sql1="SELECT count(`by`) FROM `sitelist` WHERE `by`=?";
	$sql2 = "SELECT  `sitename`,`description`,`category` FROM `sitelist` where `by`=?";	
	//$sql3 = "SELECT `notes` FROM `notes` where `user_name`=?";	
	$sql4="SELECT count(`category`) FROM `categories` where `added_by`=?";
	$sql5="SELECT `category` FROM `categories` where `added_by`=?";
		
	$sql6="SELECT  count(  `sitename`) FROM `likedsites` WHERE `by`=?";
	$sql7="SELECT   `sitename`,`desc`,`category` FROM `likedsites` WHERE `by`=?";	
	
	$sql8="SELECT  count( `to`) FROM `followers_list` WHERE `by`=?";
	$sql9="SELECT   `to`,`to_screen_name` FROM `followers_list` WHERE `by`=?";	
	
	$sql10="SELECT  count(  `by`) FROM `followers_list` WHERE `to`=?";
	$sql11="SELECT   `by`,`by_screen_name` FROM `followers_list` WHERE `to`=?";	
	
	
	
	/*
	if($stmt1 = $mysqli -> prepare($sql3)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		$stmt1 -> bind_result($notes);
		$stmt1 -> fetch();
		$sitename['notes']=$notes;
		$stmt1 -> close();	
		
	}else{ //echo "sorry";
	}
	*/
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
		$stmt1 -> bind_result($site,$desc,$cate);
		$stmt1 -> fetch();
		if($site==''){
		$sitename['count']=$sitename['count']-1;
		}else{
		 $sitename[$i]=$site;
		 $sitename['desc'.$i]=$desc; 
		 $sitename['cate'.$i]=$cate; 
		 }
		}
		$stmt1 -> close();	
		//echo $sitename1;
	
	
		
	}else{
	//echo "sry";
	}

	if($stmt1 = $mysqli -> prepare($sql4)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($count1);
		$stmt1 -> fetch();
		$sitename['cate_count']=$count1;
		$stmt1 -> close();	
		
	
		
	}else{ //echo "u"; 
	}
	
	if($stmt1 = $mysqli -> prepare($sql5)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		for($i=1;$i<=$count1;$i++){
		$stmt1 -> bind_result($site1);
		$stmt1 -> fetch();
		 $sitename['cate'.$i]=$site1;
		 
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
		
	
		
	}else{ echo "u"; }
	
	if($stmt1 = $mysqli -> prepare($sql7)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		for($i=1;$i<=$count;$i++){
		$stmt1 -> bind_result($site,$desc,$category);
		$stmt1 -> fetch();
		 $sitename['likes'.$i]=$site;
		 $sitename['likes_desc'.$i]=$desc;
		 $sitename['likes_cate'.$i]=$category;
		}
		$stmt1 -> close();	
		//echo $sitename1;
	
	
		
	}else{
//	echo "sry";
	}
	
	if($stmt1 = $mysqli -> prepare($sql8)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		$sitename['by_count']=$count;
		$stmt1 -> close();	
		
	
		
	}else{ echo "u"; }
	
	if($stmt1 = $mysqli -> prepare($sql9)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		for($i=1;$i<=$count;$i++){
		$stmt1 -> bind_result($usr,$usr_name);
		$stmt1 -> fetch();
		 $sitename['by'.$i]=$usr;
		 $sitename['byname'.$i]=$usr_name;
		}
		$stmt1 -> close();	
		//echo $sitename1;
	
	
		
	}else{
//	echo "sry";
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
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		for($i=1;$i<=$count;$i++){
		$stmt1 -> bind_result($tousr,$tousr_name);
		$stmt1 -> fetch();
		 $sitename['to'.$i]=$tousr;
		 $sitename['toname'.$i]=$tousr_name;
		}
		$stmt1 -> close();	
		//echo $sitename1;
	
	
		
	}else{
//	echo "sry";
	}

	echo var_export(json_encode($sitename)); 
?>