<!DOCTYPE html>
<html>
<head>
	<title> Epic project </title>
	<link rel="stylesheet" type="text/css" href="indexcss.css">
	<script type="text/javascript" src="indexjs.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<link href="https://file.myfontastic.com/DLsnQyCgUiM2kxhVNGcwEa/icons.css" rel="stylesheet">
	<script>
		//Footer Script 
		$(document).ready(function($) {
			$(window).on("scroll", function() {
	    //ADD .TIGHT
	    if (
	    	$(window).scrollTop() + $(window).height() >
	    	$(".wrappermain").outerHeight()
	    	) {
	    	$("body").addClass("tight");
	    $(".arrow").hide();
	} else {
		$("body").removeClass("tight");
		$(".arrow").show();
	}
});

		  //BACK TO PRESENTATION MODE
		  $("html").on("click", "body.tight .wrappermain", function() {
		  	$("html, body").animate(
		  	{
		  		scrollTop: $(".wrappermain").outerHeight() - $(window).height()
		  	},
		  	500
		  	);
		  });
		});

		$(".arrow").click(function() {
			$("html").animate({ scrollTop: $("html").prop("scrollHeight") }, 1200);
		});
		// testing

	</script>
</head>
<body>

	<div class='ripple-background'>
		<div class='circle xxlarge shade1'></div>
		<div class='circle xlarge shade2'></div>
		<div class='circle large shade3'></div>
		<div class='circle mediun shade4'></div>
		<div class='circle small shade5'></div>
	</div>

	<div class="wrappermain">
		<div class="wrapmain">
			<header>
				<a href="#" class="logotitle" data-link-alt="Learn Japanese for FREE..."><span>NihonMaster</span></a>
			</header>

			<section class="transparent">
				<div class="headline">
					
				</div>
				<div class="text"></div>
				<div class="text"></div>
				<div class="button"></div>
			</section>
			<section class="cards">
				<div class="card">
					<img src="https://imgplaceholder.com/500x300/transparent/ddd/ion-image" alt="">
					<div class="content">
						<div class="headline"></div>
						<div class="text"></div>
						<div class="text"></div>
						<div class="button"></div>
					</div>
				</div>
				<div class="card">
					<img src="https://imgplaceholder.com/500x300/transparent/ddd/ion-image" alt="">
					<div class="content">
						<div class="headline"></div>
						<div class="text"></div>
						<div class="text"></div>
						<div class="button"></div>
					</div>
				</div>
				<div class="card">
					<img src="https://imgplaceholder.com/500x300/transparent/ddd/ion-image" alt="">
					<div class="content">
						<div class="headline"></div>
						<div class="text"></div>
						<div class="text"></div>
						<div class="button"></div>
					</div>
				</div>
			</section>

			<section class="contentbox">
				<div class="headline"></div>
				<div class="text"></div>
				<div class="text"></div>
				<div class="text"></div>
				<div class="button"></div>
			</section>

		</div>
	</div>

	<footer class="footer">
		<div class="logo"></div>
		<nav>
			<ul>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</nav>
	</footer>
</body>
</html>