<?php

session_start();

	include("connection.php");
	include("functions.php");


	if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		//something was posted
		$user_name = $_POST['user_name'];
		$password = $_POST['password'];

		if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
		{

			//read from database
			$query = "select * from user where user_name = '$user_name' limit 1";
			$result = mysqli_query($con, $query);

			if($result)
			{
				if($result && mysqli_num_rows($result) > 0)
				{

					$user_data = mysqli_fetch_assoc($result);

					if($user_data['password'] === $password)
					{

						$_SESSION['user_id'] = $user_data['user_id'];
						header("Location:home1.html");
						die;
					}
					else
					{
						echo "wrong username or password!";
					}
				}
			}
else
		{
			echo "wrong username or password!";
		}
	}}

?>


<!DOCTYPE html>
<html>

<head>
	<title>Petzonia</title>
	
	<link rel="icon" type="image/x-icon" href="public/petzonia-logo@2x.png">
</head>

<body>
	<style>
		body {
			margin: 0;
			padding: 0;
			background-image: url("Pictures/loginbg.png");
			background-size: cover;
			background-attachment: fixed;
			font-family: sans-serif;
		}


		.loginbox {
			width: 320px;
			height: 420px;
			background: rgba(0, 0, 0, 0.596);
			color: #ffff;
			top: 60%;
			left: 75%;
			position: absolute;
			transform: translate(-50%, -50%);
			box-sizing: border-box;
			padding: 50px 30px;
			border-radius: 30px;


		}


		h1 {
			margin: 0;
			padding: 0 0 20px;
			text-align: center;
			font-size: 22px;
		}

		.loginbox p {
			margin: 0;
			padding: 0;
			font-weight: bold;
			font-family: 'Trebuchet MS';
		}

		.loginbox input {
			width: 100%;
			margin-bottom: 20px;
		}

		.loginbox input[type="text"],
		input[type="password"] {
			border: none;
			border-bottom: 1px solid #ffff;
			background: transparent;
			outline: none;
			height: 40px;
			color: #ffff;
			font-size: 16px;
		}

		.loginbox input[type="submit"] {
			border: none;
			outline: none;
			height: 40px;
			background: #18b3c7;
			color: #ffff;
			font-size: 18px;
			border-radius: 20px;
			font-family: 'Trebuchet MS';
		}

		.loginbox input[type="submit"]:hover {
			cursor: pointer;
			background: #0bb0ecaf;

		}

		.loginbox a {
			text-decoration: none;
			font-size: 12px;
			line-height: 20px;
			color: darkgrey;
		}
	</style>
	<div style="top: 8%;left: 70%;position: absolute;">
		<img src="public/petzonia-logo@2x.png" width="150px" height="150px">
	</div>
	<div class="loginbox" name="loginbox">

		<form method="post">
			<h1 style="font-family: brush;">Login</h1>

			<input id="text" type="text" name="user_name" placeholder="username"><br><br>
			<input id="text" type="password" name="password" placeholder="password"><br><br>

			<input id="button" type="submit" value="Login"><br><br>

			<a href="signup.php">Click to Signup</a><br><br>
		</form>
	</div>
</body>

</html>