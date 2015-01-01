<?php
$hostname="localhost";
$username="root";
$password="";
$database="linku";    // linku
$mysqli = new mysqli($hostname, $username, $password, $database);

if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }
?>
