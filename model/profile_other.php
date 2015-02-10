 <?php
	include('header.php');
	define("PBKDF2_HASH_ALGORITHM", "sha512");
$by=$_POST['by'];    // profile belongs to which person
$to=$_POST['to'];	// the person who visiting other person's profile 
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
	//$sql2 = "SELECT  `sitename`,`description`,`category` FROM `sitelist` where `by`=?";	
	/*   to display added sites   */
	$sql3="SELECT count(`sitename` ) FROM `sitelist` WHERE `by` = ? AND `sitename` NOT IN ( SELECT `sitename` FROM `likedsites` WHERE `by` = ? )";
	$sql4 = "SELECT `sitename` , `description` , `category` FROM `sitelist` WHERE `by` = ? AND `sitename` NOT IN ( SELECT `sitename` FROM `likedsites` WHERE `by` = ?)";	
	/*   to display me liked sites which is added by him  */
	$sql5="SELECT count(`sitename` ) FROM `sitelist` WHERE `by` = ? AND `sitename` IN ( SELECT `sitename` FROM `likedsites` WHERE `by` = ? )";
	$sql5a = "SELECT `sitename` , `description` , `category` FROM `sitelist` WHERE `by` = ? AND `sitename` IN ( SELECT `sitename` FROM `likedsites` WHERE `by` = ?)";
	
	/*  to display him liked sites which is added by me  */
	$sql4likelist="SELECT count(`sitename`)  FROM `likedsites` WHERE  `by` = ? and `sitename`  IN ( SELECT `sitename` FROM `sitelist` WHERE `by` = ? )";
	$sql4likelist_a="SELECT `sitename` , `desc` , `category` FROM `likedsites` WHERE  `by` = ? and `sitename`  IN ( SELECT `sitename` FROM `sitelist` WHERE `by` = ? )";
	
	/* to display him liked sites which is not related to me */
	$sql4likelist1="SELECT count(`sitename`)  FROM `likedsites` WHERE  `by` = ? and `sitename` NOT IN ( SELECT `sitename` FROM `sitelist` WHERE `by` = ? )AND `sitename` NOT IN ( SELECT `sitename` FROM `likedsites` WHERE `by` = ?)";
	$sql4likelist1_a="SELECT `sitename` , `desc` , `category` FROM `likedsites` WHERE  `by` = ? and `sitename` NOT IN ( SELECT `sitename` FROM `sitelist` WHERE `by` = ? ) AND `sitename` NOT IN ( SELECT `sitename` FROM `likedsites` WHERE `by` = ?)";
	/*SELECT `sitename` , `desc` , `category` FROM `likedsites` WHERE  `by` = 'ragu@ragu.com' and `sitename` NOT IN ( SELECT `sitename` FROM `sitelist` WHERE `by` = 'priya@priya.com'  ) and `sitename` NOT IN (SELECT `sitename` FROM `likedsites` WHERE `by` = 'priya@priya.com')*/
	/*   to display sites which is liked by both u and me*/
	$sql4likelist2="SELECT count(`sitename`)  FROM `likedsites` WHERE  `by` = ? and `sitename`  IN ( SELECT `sitename` FROM `likedsites` WHERE `by` = ? )";
	$sql4likelist2_a="SELECT `sitename` , `desc` , `category` FROM `likedsites` WHERE  `by` = ? and `sitename`  IN ( SELECT `sitename` FROM `likedsites` WHERE `by` = ? )";
	
	
	$sql6="SELECT  count(  `sitename`) FROM `likedsites` WHERE `by`=?";
	$sql7="SELECT   `sitename`,`desc`,`category` FROM `likedsites` WHERE `by`=?";	
	
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
		// to get total added site  count  
		if($stmt1 = $mysqli -> prepare($sql1)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		$sitename['tot_count']=$count;
		$stmt1 -> close();	
		
	}else{ //echo "u"; 
	}
	if($stmt1 = $mysqli -> prepare($sql3)) 
	{	
		
		$stmt1 -> bind_param('ss', $by,$to);
		$stmt1 -> execute();
		$stmt1 -> bind_result($count);
		$stmt1 -> fetch();
		$sitename['count']=$count;
		$stmt1 -> close();	
		
	}else{ //echo "u"; 
	}
	

	
	if($stmt1 = $mysqli -> prepare($sql4)) 
	{	
		
		$stmt1 -> bind_param('ss', $by,$to);
		$stmt1 -> execute();
		for($i=1;$i<=$count;$i++){
		$stmt1 -> bind_result($site,$desc,$cate);
		$stmt1 -> fetch();
		if($site==''){
		$sitename['count']=$sitename['count']-1;
		}else{
		 $sitename['a'.$i]=$site;
		 $sitename['a_d'.$i]=$desc;  
		 $sitename['a_c'.$i]=$cate;  

		 }
		}
		$stmt1 -> close();	
		//echo $sitename1;
	
	
		
	}else{
	//echo "sry";
	}

	
	// begin
	
	if($stmt1 = $mysqli -> prepare($sql5)) 
	{	
		
		$stmt1 -> bind_param('ss', $by,$to);
		$stmt1 -> execute();
		$stmt1 -> bind_result($n_count);
		$stmt1 -> fetch();
		$sitename['n_count']=$n_count;
		$stmt1 -> close();	
		
	}else{ //echo "u"; 
	}
	
	if($stmt1 = $mysqli -> prepare($sql5a)) 
	{	
		
		$stmt1 -> bind_param('ss', $by,$to);
		$stmt1 -> execute();
		for($i=1;$i<=$n_count;$i++){
		$stmt1 -> bind_result($site,$desc,$cate);
		$stmt1 -> fetch();
		if($site==''){
		$sitename['n_count']=$sitename['n_count']-1;
		}else{
		 $sitename['b'.$i]=$site;
		 $sitename['b_d'.$i]=$desc;  
		 $sitename['b_c'.$i]=$cate;  

		 }
		}
		$stmt1 -> close();	
		//echo $sitename1;
	
	
		
	}else{
	//echo "sry";
	}

	
	
	/**/
	
		if($stmt1 = $mysqli -> prepare($sql4likelist)) 
	{	
		
		$stmt1 -> bind_param('ss', $by,$to);
		$stmt1 -> execute();
		$stmt1 -> bind_result($n_count);
		$stmt1 -> fetch();
		$sitename['l1_count']=$n_count;
		$stmt1 -> close();	
		
	}else{ //echo "u"; 
	}
	
	if($stmt1 = $mysqli -> prepare($sql4likelist_a)) 
	{	
		
		$stmt1 -> bind_param('ss', $by,$to);
		$stmt1 -> execute();
		for($i=1;$i<=$n_count;$i++){
		$stmt1 -> bind_result($site,$desc,$cate);
		$stmt1 -> fetch();
		if($site==''){
		$sitename['l1_count']=$sitename['l1_count']-1;
		}else{
		 $sitename['c'.$i]=$site;
		 $sitename['c_d'.$i]=$desc;  
		 $sitename['c_c'.$i]=$cate;  

		 }
		}
		$stmt1 -> close();	
		//echo $sitename1;
	
	
		
	}else{
	//echo "sry";
	}
	
	/**/
	
	
		/*2*/
	
		if($stmt1 = $mysqli -> prepare($sql4likelist1)) 
	{	
		
		$stmt1 -> bind_param('sss', $by,$to,$to);
		$stmt1 -> execute();
		$stmt1 -> bind_result($n_count);
		$stmt1 -> fetch();
		$sitename['l2_count']=$n_count;
		$stmt1 -> close();	
		
	}else{ //echo "u"; 
	}
	
	if($stmt1 = $mysqli -> prepare($sql4likelist1_a)) 
	{	
		
		$stmt1 -> bind_param('sss', $by,$to,$to);
		$stmt1 -> execute();
		for($i=1;$i<=$n_count;$i++){
		$stmt1 -> bind_result($site,$desc,$cate);
		$stmt1 -> fetch();
		if($site==''){
		$sitename['l2_count']=$sitename['l2_count']-1;
		}else{
		 $sitename['d'.$i]=$site;
		 $sitename['d_d'.$i]=$desc;  
		 $sitename['d_c'.$i]=$cate;  

		 }
		}
		$stmt1 -> close();	
		//echo $sitename1;
	
	
		
	}else{
	//echo "sry";
	}
	
	/*2*/
	
	
		
	
		/*3*/
	
		if($stmt1 = $mysqli -> prepare($sql4likelist2)) 
	{	
		
		$stmt1 -> bind_param('ss', $by,$to);
		$stmt1 -> execute();
		$stmt1 -> bind_result($n_count);
		$stmt1 -> fetch();
		$sitename['l3_count']=$n_count;
		$stmt1 -> close();	
		
	}else{ //echo "u"; 
	}
	
	if($stmt1 = $mysqli -> prepare($sql4likelist2_a)) 
	{	
		
		$stmt1 -> bind_param('ss', $by,$to);
		$stmt1 -> execute();
		for($i=1;$i<=$n_count;$i++){
		$stmt1 -> bind_result($site,$desc,$cate);
		$stmt1 -> fetch();
		if($site==''){
		$sitename['l3_count']=$sitename['l3_count']-1;
		}else{
		 $sitename['e'.$i]=$site;
		 $sitename['e_d'.$i]=$desc;  
		 $sitename['e_c'.$i]=$cate;  

		 }
		}
		$stmt1 -> close();	
		//echo $sitename1;
	
	
		
	}else{
	//echo "sry";
	}
	
	/*3*/
	
	
	//end 
	
	
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
	/*
	if($stmt1 = $mysqli -> prepare($sql7)) 
	{	
		
		$stmt1 -> bind_param('s', $by);
		$stmt1 -> execute();
		for($i=1;$i<=$count;$i++){
		$stmt1 -> bind_result($site,$desc,$cate);
		$stmt1 -> fetch();
		 $sitename['likes'.$i]=$site;
		 $sitename['likes_desc'.$i]=$desc;
		 $sitename['likes_cate'.$i]=$cate;
		}
		$stmt1 -> close();	
		//echo $sitename1;
	
	
		
	}else{
	//echo "sry";
	}*/
	
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