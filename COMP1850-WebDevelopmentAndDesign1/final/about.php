<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>MEAN Stack - A basic overview</title>
	<link rel="stylesheet" href="content/style/style.css" />
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu">
</head>
<body>
	<nav class="navigation">
		<div class="header">
			<a href="index.html" class="logo"><img src="content/images/meanstack_logo.jpg" class="logo-image"></a>
			<div class="menu">
				<ul>
					<li>
						<a href="index.html" title="Home">Home</a>
					</li>
					<li>
						<a href="about.php" title="About">About</a>
					</li>
					<li>
						<div class="dropdown">
							<a href="#" class="menu-dropdown" title="MongoDB">MongoDB</a>
							<div class="dropdown-content">
							  <a href="mongodb/about.html">About MongoDB</a>
							  <a href="mongodb/installation.html">1. Installation</a>
							  <a href="mongodb/initial-commands.html">2. Initial Commands</a>
							  <a href="mongodb/managing-collections.html">3. Managing Collections</a>
							  <a href="mongodb/operators.html">4. Operators</a>
							  <a href="mongodb/update-options.html">5. Update options</a>
							  <a href="mongodb/aggregation.html">6. Aggregation</a>
							  <a href="mongodb/pagination.html">7. Pagination</a>
							</div>
						</div>
					</li>
					<li>
						<div class="dropdown">
							<a href="#" class="menu-dropdown" title="Express">Express</a>
							<div class="dropdown-content">
							  <a href="#">SOON!</a>
							</div>
						</div>
					</li>
					<li>
						<div class="dropdown">
							<a href="#" class="menu-dropdown" title="AngularJS">AngularJS</a>
							<div class="dropdown-content">
							  <a href="#">SOON!</a>
							</div>
						</div>
					</li>
					<li>
						<div class="dropdown">
							<a href="#" class="menu-dropdown" title="Node.js">Node.js</a>
							<div class="dropdown-content">
								<a href="nodejs/about.html">About Node.js</a>
								<a href="nodejs/installation.html">1. Installation</a>
								<a href="nodejs/initial-commands.html">2. Initial Commands</a>
								<a href="nodejs/http-protocol.html">3. HTTP Protocol</a>
								<a href="nodejs/web-server.html">4. Creating the Web Server</a>
							</div>
						</div>
					</li>
					<li>
						<a href="site-map.html" class="menu-dropdown" title="Site Map">Site Map</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<div class="main">
		<div class="container">
			<h3>About this project</h3>
			<p>I am Vitor Ubukata and I am an Web Developer with a Bachelor in Information Systems from University of São Paulo in Brazil and currently I am persuing the Agile Development Certificate from BCIT in Vancouver in Canada. Since the past five years I have been working with Microsoft technologies for Web development and I thought it was time to learn something new. I searched a lot about new languages to learn like Ruby using Rails (RoR), node.js, python using Django. First I was decided to learn RoR but once I already have knowledge in JavaScript I decided to change my studies to node.js. My friend sent me a free course on MEAN in Portuguese and since them I have being doing it.</p>
			<p>This overview over MEAN Stack is my final project for my class of Web Development at BCIT, I am doing this tutorial based in the course available <a href="http://webschool.io">here</a>. I couldn’t finish all course but I provided the basics for some stages of the MEAN Stack development.</p>
			<p>One more thing, since I work with Windows, this will be a Windows based tutorial.</p>
			<p>I hope you enjoy it!</p>
	  		<p class="attention">Unfortunately, I am not able to finish this tutorial until the due date of my final project, but I will keep adding here according to my studies.</p>
		</div>
		<div class="container">
			<h3>Official Resources</h3>
			<table class="description">
				<tbody>
					<tr>
						<td>MongoDB</td>
						<td><a href="https://www.mongodb.com">https://www.mongodb.com</a></td>
					</tr>
					<tr>
						<td>Express</td>
						<td><a href="http://expressjs.com">http://expressjs.com</a></td>
					</tr>
					<tr>
						<td>AngularJS</td>
						<td><a href="https://angularjs.org">https://angularjs.org</a></td>
					</tr>
					<tr>
						<td>Node.js</td>
						<td><a href="https://nodejs.org">https://nodejs.org</a></td>
					</tr>
					<tr>
						<td>MEAN course used as reference for this project</td>
						<td><a href="http://webschool.io">http://webschool.io</a></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="container">
			<h3>Do you like it? Please feel free to contact me using my e-mail (at the bottom) or here:</h3>
			
			<?php 
				$action=$_REQUEST['action']; 
				if ($action=="") 
				    { 
					    ?> 
						    <form  action="" method="POST" enctype="multipart/form-data"> 
							    <input type="hidden" name="action" value="submit"> 
							    <p>Your name:</p>
							    <input name="name" class="form-input" type="text" value="" size="30"/> 
							    <p>Your email:</p>
							    <input name="email" class="form-input" type="text" value="" size="30"/>
							    <p>Your message:</p>
							    <textarea name="message" class="form-input" rows="7" cols="30"></textarea>
							    <input type="submit" value="Send email"/> 
						    </form> 
					    <?php 
				    }  
				else /* send the submitted data */ 
				    { 
					    $name=$_REQUEST['name']; 
					    $email=$_REQUEST['email']; 
					    $message=$_REQUEST['message']; 
					    if (($name=="")||($email=="")||($message=="")) 
				        { 
				        	echo "<p>All fields are required, please fill <a href='about.php'>the form</a> again.<p>"; 
				        } 
					    else
					    {         
					        $from="From: $name<$email>\r\nReturn-path: $email"; 
					        $subject="Contact from MEAN Stack - A basic overview"; 
					        mail("vitor.ubukata@gmail.com", $subject, $message, $from); 
					        echo "<p>Email sent! Thank you so much for your contact.</p>"; 
				        } 
				    }   
			?>
		</div>
	</div>
</body>
<footer>
	<div>
		<p><a href="site-map.html">Site Map</a></p>
		<p>© Vitor Ubukata - Web Developer</p>
		<ul class="nav social-media">
		  <li><a href="mailto:vitor.ubukata@gmail.com" target="_blank" class="email"><img alt="Email" src="content/images/email_logo.png" width="35" height="34"></a></li>
		  <li><a href="https://www.linkedin.com/in/vitor-ubukata-89253121" target="_blank" class="linkedin"><img alt="Linkedin" src="content/images/linkedin_logo.png" width="35" height="33"></a></li>
		  <li><a href="https://github.com/ubukata" target="_blank" class="linkedin"><img alt="GitHub" src="content/images/github_logo.png" width="35" height="33"></a></li>
		  <li><a href="https://www.facebook.com/vitor.ubukata" target="_blank" class="facebook"><img alt="Facebook" src="content/images/facebook_logo.png" width="35" height="33"></a></li>
		  <li><a href="http://www.twitter.com/ubkta" target="_blank" class="twitter"><img alt="Twitter" src="content/images/twitter_logo.png" width="35" height="34"></a></li>
		  <li><a href="https://plus.google.com/u/0/109164618915536663943" target="_blank" class="google-plus"><img alt="Google Plus" src="content/images/googleplus_logo.png" width="35" height="34"></a></li>
		</ul>
	</div>
</footer>
</html>