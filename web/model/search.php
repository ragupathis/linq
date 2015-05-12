<?php

include('header.php');
define("PBKDF2_HASH_ALGORITHM", "sha512");
$ip = ip2long($_SERVER['REMOTE_ADDR']); 



$result= array();
$notes="text here";
$res1='';
$response=0;
$q="am a good one";
//$q=$_POST['q'];
$text_line = explode(" ",$q);
//echo count($text_line);
$sql3="SELECT `sitename` from `sitelist` where `sitename` like ? or";
$i=0;
foreach($text_line as $s)
{
$temp="or";
$i=$i+1;
if($i==count($text_line)){	
$temp='';
}
$sql3 = $sql3 . " " . '`description` like ? '.$temp;
}
$q='ht';
$q="%{$q}%";
//echo $sql3;
$a1='s';

//$a2='$q'.',';
$a2='$q';
$i=0;
//$a1='';
//$a2='';
$kk='';
$a3='';
foreach($text_line as $s)
{
//$temp="or";

$ar[$i]="%{$s}%";


$a1=$a1.'s';
//echo $i;
$a3=$a3.','.'$ar['.$i.']';
//echo $a3;

$i=$i+1;
$kk=",";
}
$a2=$a2.$a3;
//echo $a2;
/*
echo $a1;
echo "<br> new :   ";
echo $a2;
*/
//echo $ar[3];
/*
//$sql3="SELECT `sitename` from `sitelist` where ";//"`description` like ? ";

//  SELECT * FROM `sitelist` WHERE `description` like '%html%'


//echo $q;

*/
/*
echo "a1  :  ".$a1;
echo "<br>";
echo "a2  :  ".$a2;
*//*
$q='ht';
$q="%{$q}%";
*/
echo "$q<br>";
echo "$ar[0]<br>";
echo "$ar[1]<br>";
echo "$ar[2]<br>";
echo "$ar[3]<br>";


//$abc="%{'h'}%";
	   if($stmt = $mysqli -> prepare($sql3)) {
		//echo $a2;
		//$stmt1 -> bind_param('ss', $by,$by);
//		echo ("'".$a1."'".','. $a2);
		//$stmt -> bind_param("'".$a1."'".','. $a2);
//		$stmt -> bind_param('sssss',$q,$ar[0],$ar[1],$ar[2],$ar[3]);
		echo $a2;
		//eval("\$a2 = \"$a2\";");
		//echo $a2;
		$stmt -> bind_param($a1,$q,$ar[0],$ar[1],$ar[2],$ar[3]);
	//	echo $q.$ar[0];
		$stmt -> execute();
		$stmt -> bind_result($sitename);
		//$stmt -> fetch();
		$i=0;
		
	while ($stmt->fetch()) {
		//echo "Id: {$sitename}";
		$i++;
		$result['srch_'.$i]=$sitename;
	
		}
		$stmt -> close();
		$result['srch_cnt']=$i;
		}
	   
	   ////////////////////
	   
	   /*
	   
	   $param = "%{$_POST[q]}%";
	   $stmt = $db->prepare("SELECT id,Username FROM users WHERE Username LIKE ?");
$stmt->bind_param("s", $param);
$stmt->execute();
$stmt->bind_result($id,$username);

while ($stmt->fetch()) {
  echo "Id: {$id}, Username: {$username}";
}
	   
	   */
	   
	   
	   ///////////////////
	  
	echo var_export(json_encode($result));
?>