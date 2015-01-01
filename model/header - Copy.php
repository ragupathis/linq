<?php
$hostname="localhost";
$username="418791";
$password="9500870830";
$database="418791";    // linku
$mysqli = new mysqli($hostname, $username, $password, $database);

if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }
?>
