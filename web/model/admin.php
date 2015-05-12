<?php

include('header.php');
$result= array();	

$mysqli = new mysqli($hostname, $username, $password, $database);
	if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }else{
 
   }

   $sql1 = "SELECT count(`sitename`) from `sitelist`";
   
   $sql2 = "SELECT count(`category`) from `categories`";
   
   $sql3 = "SELECT count(`user_name`) from `userdetails`";
	
   $sql4 = "SELECT count(`sitename`) from `likedsites`";
	
	 if($stmt = $mysqli -> prepare($sql1)) 
	  {
		  
		  $stmt -> execute();
		  $stmt -> bind_result($res1);
		  $stmt -> fetch();
		  $stmt -> close();
		 $result['site']=$res1;
		 
	  }
	  
	   if($stmt = $mysqli -> prepare($sql2)) 
	  {
		  
		  $stmt -> execute();
		  $stmt -> bind_result($res2);
		  $stmt -> fetch();
		  $stmt -> close();
		 $result['cat']=$res2;
	  }
	  
	  
	   if($stmt = $mysqli -> prepare($sql3)) 
	  {
		  
		  $stmt -> execute();
		  $stmt -> bind_result($res3);
		  $stmt -> fetch();
		  $stmt -> close();
		 $result['usr']=$res3;
	  }
		
 if($stmt = $mysqli -> prepare($sql4)) 
	  {
		  
		  $stmt -> execute();
		  $stmt -> bind_result($res4);
		  $stmt -> fetch();
		  $stmt -> close();
		 $result['like']=$res3;
	  }		
		  

echo var_export(json_encode($result)); 
	
   
?>