<?php

function my_scripts() {
	wp_enqueue_style( 'Bootstrap', get_stylesheet_directory_uri() . '/bower_components/bootstrap/dist/css/bootstrap.css');
	wp_enqueue_style( 'app', get_stylesheet_directory_uri() . '/css/app.css');
    wp_enqueue_style( 'animate', get_stylesheet_directory_uri() . '/css/animation.css');
	wp_enqueue_script(
		'Jquery',
		get_stylesheet_directory_uri() . '/bower_components/jquery/dist/jquery.js'
	);
	wp_enqueue_script(
		'angularjs',
		get_stylesheet_directory_uri() . '/bower_components/angular/angular.js'
	);

	wp_enqueue_script(
		'angularjs-route',
		get_stylesheet_directory_uri() . '/bower_components/angular-route/angular-route.js'
	);
	wp_enqueue_script(
		'angularjs-sanitize',
		get_stylesheet_directory_uri() . '/bower_components/angular-sanitize/angular-sanitize.js'
	);
	wp_enqueue_script(
		'angularjs-animate',
		get_stylesheet_directory_uri() . '/bower_components/angular-animate/angular-animate.js'
	);
	wp_enqueue_script(
		'angularjs-resources',
		get_stylesheet_directory_uri() . '/bower_components/angular-resource/angular-resource.js'
	);
	wp_enqueue_script(
		'my-app',
		get_stylesheet_directory_uri() . '/js/app.js',
		array( 'angularjs', 'angularjs-route','angularjs-sanitize','angularjs-animate','angularjs-resources' )
	);
	wp_enqueue_script(
		'controllers',
		get_stylesheet_directory_uri() . '/js/controllers.js',
		array( 'angularjs', 'angularjs-route','angularjs-sanitize','angularjs-animate','angularjs-resources','my-app')
	);
    wp_enqueue_script(
		'animations',
		get_stylesheet_directory_uri() . '/js/animations.js',
		array( 'angularjs', 'angularjs-route','angularjs-sanitize','angularjs-animate','angularjs-resources','my-app')
	);
	wp_enqueue_script(
		'resources',
		get_stylesheet_directory_uri() . '/js/services.js',
		array( 'angularjs', 'angularjs-route','angularjs-sanitize','angularjs-animate','angularjs-resources','my-app')
	);
	wp_enqueue_script(
		'filter',
		get_stylesheet_directory_uri() . '/js/filter.js',
		array( 'angularjs', 'angularjs-route','angularjs-sanitize','angularjs-animate','angularjs-resources','my-app')
	);
	wp_localize_script(
		'my-app',
		'myLocalized',
		array(
			'partials' => trailingslashit( get_template_directory_uri() ) . 'partials/'
			)
	);
	wp_enqueue_script(
		'scripts',
		get_stylesheet_directory_uri() . '/js/script.js'		
	);
}

add_action( 'wp_enqueue_scripts', 'my_scripts' );

/* Theme supports */

function theme_supports(){
	add_theme_support( 'post-thumbnails' );
	set_post_thumbnail_size( 825, 510, true );
}

add_action( 'after_setup_theme', 'theme_supports' );

add_filter( 'query_vars', function( $query_vars ) {
    $query_vars[] = 'post_parent';
    return $query_vars;
});
