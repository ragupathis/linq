 <?php
	include('header.php');
	

$count=0;
$size=0;
$user=$_POST['user'];
$admin='admin';
$result= array();	
$site_cnt1='';
	$category_info=array();
$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }
	
	
	$sql3 ="SELECT  count(`category`) FROM `categories` where `added_by`=? or `added_by`=?" ;	
	$sql4 ="SELECT   `category`,`s_no` FROM `categories` where `added_by`=? or `added_by`=? ";
	$sql5="SELECT count(`sitename`) FROM `sitelist` where `category`=?";
	
	if($stmt1 = $mysqli -> prepare($sql3)) 
	{	
		
		$stmt1->bind_param('ss', $user, $admin);
		$stmt1 -> execute();
		
		$stmt1 -> bind_result($size);
		$stmt1 -> fetch();
		$category_info['size']=$size;
		$stmt1 -> close();	
		
	
		
	}else{ //echo "sorry"; 
	
	}
	
	
	if($stmt1 = $mysqli -> prepare($sql4)) 
	{	
		$stmt1->bind_param('ss', $user, $admin);
		$stmt1 -> execute();
		for($k=1;$k<=$size;$k++){
		$stmt1 -> bind_result($category,$no);
		$stmt1 -> fetch();
		 $category_info['cate'.$k]=$category;
		 $category_info['no'.$k]=$no;
		 
		}
		$stmt1 -> close();		
	}else{ //echo "sorry"; 
	}
	

	for($k=1;$k<=$size;$k++){
		
		
		 $temp_val=$category_info['cate'.$k];
		
	 if($stmt1 = $mysqli -> prepare($sql5)) 
	{	
		$stmt1->bind_param('s', $temp_val);
		$stmt1 -> execute();
		$stmt1 -> bind_result($site_cnt1);
	//	echo $site_cnt1;
		$stmt1 -> fetch();
		$category_info['site_cnts'.$k]=$site_cnt1;
		//echo $site_cnt;
		$stmt1 -> close();	
	}else{ //echo "sorry"; 
	}
		 
		}
	

	echo var_export(json_encode($category_info)); 
?>