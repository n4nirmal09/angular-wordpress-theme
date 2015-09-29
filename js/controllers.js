var appController = angular.module('appControllers',[]);


// Main controllers

appController.controller('Main',['$scope',function($scope){

}]);

// Phone controllers

appController.controller('PhoneListCtrl', ['$scope','Phone',function($scope, Phone) {
		$scope.phones = Phone.query(function(){
			$scope.loadFinish = true;
		});
		
		
}]);


appController.controller('PhoneDetailCtrl', ['$scope','Phone','AttachedMedia','$routeParams','$sce',
function($scope, Phone,AttachedMedia, $routeParams, $sce) {
	$scope.upload_route = "wp-content/uploads";
	$scope.postId =  $routeParams.postId;	
	$scope.phone = Phone.query_obj({phoneId: $routeParams.postId}, function(phone) {
    //console.log(phone);
      });     
    AttachedMedia.query({postId: $routeParams.postId}, function(medias) {
     	$scope.medias = new Array(); 
    	for(var i = 0; i < medias.length; i++){
    		$scope.medias.push( { 'src':attachmentMediaSrc(medias[i].content), 'title' : medias[i].title } );
    	}   
    	$scope.mainImage = $scope.medias[0].src;
    	
    	$scope.loadFinish = true;
  });
	
	function attachmentMediaSrc(html){		
	    var	re = /\ssrc=(?:(?:'([^']*)')|(?:"([^"]*)")|([^\s]*))/i, // match src='a' OR src="a" OR src=a
        res = html.match(re),
        src = res[1]||res[2]||res[3];        
		return src;		
	}
		
	$scope.setImage = function(newImg){
		$scope.mainImage = newImg;
		
	};
	
}]);

//Timer 

appController.controller('updateTimer',['$scope',function($scope){
	 var updateClock = function(){
	 	$scope.clock = new Date();
	 };
	 setInterval(function(){
	 	$scope.$apply(updateClock());
	 },1000);
	 updateClock();
}]);
