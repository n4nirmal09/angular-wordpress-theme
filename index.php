<!DOCTYPE html>
<html ng-app="app">
<head>
	<base href="http://localhost:8888/77/angular-wordpress/">
	<title>AngularJS Demo Theme</title>
	<?php wp_head(); ?>
</head>
<body>
 
	<header id="header">
		<h1>
			<a href="<?php echo site_url(); ?>">AngularJS Demo Theme</a>
		</h1>
	</header>
  <div class="view-container">
	<div ng-view class="view-frame"></div>
 </div>
	<footer>
		<div class="timer" ng-controller="updateTimer">
			{{ clock }}
		</div>
	</footer>
 
</body>

</html>