# AngularJS  Application With Wordpress CMS

## Overview

This application is just a startup for wordpress theming using Wordpress. This application can be used
with Wordpress By using a Dynamic Backend . Right now I have used static jsons as given for me in 
Tutorials.


## Workings of the application

- The application filesystem layout structure is based on the [angular-seed] project.
- There is no dynamic backend (no application server) for this application. Instead we fake the
  application server by fetching static json files.
- If you have node installed you can just run the npm start file to run




## Application Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      js/               --> javascript files
        app.js          --> the main application module
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        animations.js   --> hooks for running JQuery animations with ngAnimate
      partials/         --> angular view partials (partial html templates) used by ngRoute
        partial1.html
        partial2.html
      bower_components  --> 3rd party js libraries, including angular and jquery
      
 ## Wordpress Theme Layout

      angular-theme/    --> all of the files to be used in Wordpress theme
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      styles.css        --> Main theme name.
      index.php         --> Index file
      function.php      --> Necessary functions for angular theme
      js/               --> javascript files
        app.js          --> the main application module
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        animations.js   --> hooks for running JQuery animations with ngAnimate
      partials/         --> angular view partials (partial html templates) used by ngRoute
        main.html
        phone_detail.html
        phone_list.html
      bower_components  --> 3rd party js libraries, including angular and jquery     

## Installing angular theme in wordpress
    
    ## step 1
       install wordpress and add plugin JSON-API plugin which gives yot json data.
    ## step 2
       create a theme folder like we do normaly, create all essential files .
    ## step 3 
      in index.php, add this
      <!DOCTYPE html>
       <html ng-app="app">
        <head>
        	<base href="http://localhost:8888/77/angular-wordpress/">
        	<title>AngularJS Demo Theme</title>
        	<?php wp_head(); ?>
        </head>
        <body>
         
        	<header>
        		<h1>
        			<a href="<?php echo site_url(); ?>">AngularJS Demo Theme</a>
        		</h1>
        	</header>
         
        	<div ng-view></div>
         
        	<footer>
        		&copy; <?php echo date( 'Y' ); ?>
        	</footer>
         
        </body>
        </html>
    ## step 4
       in functions.php
                   <?php
            
            function my_scripts() {
            	
            	wp_enqueue_script(
            		'angularjs',
            		get_stylesheet_directory_uri() . '/bower_components/angular/angular.js'
            	);
            
            	wp_enqueue_script(
            		'angularjs-route',
            		get_stylesheet_directory_uri() . '/bower_components/angular-route/angular-route.js'
            	);
            	wp_enqueue_script(
            		'my-scripts',
            		get_stylesheet_directory_uri() . '/js/scripts.js',
            		array( 'angularjs', 'angularjs-route' )
            	);
            
            	wp_localize_script(
            		'my-scripts',
            		'myLocalized',
            		array(
            			'partials' => trailingslashit( get_template_directory_uri() ) . 'partials/'
            			)
            	);
            }
            
            add_action( 'wp_enqueue_scripts', 'my_scripts' );
    ## step 5
        after adding all the required js in script.js add
        angular.module('app', ['ngRoute'])
              .config(function($routeProvider) {
              	
              	$routeProvider
              	.when('/', {
              		templateUrl: myLocalized.partials + 'main.html',
              		controller: 'Main'
              	}). 
              	when('/:postId',{
                	 	 templateUrl: myLocalized.partials + 'post_detail.html',
                       controller: 'PostDetailCtrl'
                	 });
              })
              .controller('Main', ['$scope','$http','$routeParams',function($scope, $http, $routeParams) {
              	
              	$http.get('wp-json/posts/').success(function(res){
              		$scope.posts = res;
              	});
              }]).
              controller('PostDetailCtrl', ['$scope','$http','$routeParams',function($scope, $http, $routeParams) {
              	
              	$http.get('wp-json/posts/' + $routeParams.postId).success(function(res){
              		$scope.post = res;
              	});
              }]);
    ## step 5 
      Now we can add the templates
      in partials to check, in main.html :
            <p>This is the main file</p>

            <ul class="posts">
            	<li ng-repeat="post in posts">
              <a href="#/{{post.ID}}">{{ post.title }} </a>		
            	</li>
            </ul>
            in post_details.html
            <pre> {{post | json}} </pre>

