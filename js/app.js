angular.module('app', ['ngRoute','appControllers','appAnimations','appServices','ngSanitize','appFilters','appDierective'])
.config(function($routeProvider) {
	
	$routeProvider
	.when('/', {
		templateUrl: myLocalized.partials + 'main.html',
		controller: 'Main'
	}). 
	when('/phones/', {
		templateUrl: myLocalized.partials + 'phone_list.html',
		controller: 'PhoneListCtrl'
	}).
	when('/phones/:postId',{
  	 	 templateUrl: myLocalized.partials + 'phone_detail.html',
         controller: 'PhoneDetailCtrl'
  	 });
});