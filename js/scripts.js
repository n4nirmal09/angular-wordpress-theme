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
