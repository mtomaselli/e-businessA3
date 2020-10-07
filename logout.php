<html>
 <head>
<title>Logout</title>
 </head>
 <body>
<h1>you are now logged out</h1>
 <?php
 session_start();
 $_SESSION = array();
 session_destroy();
 ?>

 <a href="login.php">Login</a>
 </body>
 </html>