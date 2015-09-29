/* Filter */

angular.module('appFilters', []).
filter('renderHtml', ['$sce',function($sce) {	
  return function(inputHtml) {  	
    return $sce.trustAsHtml(inputHtml);
  };
}]).
filter('checkMark',function(){
	return function(input)
	     {
		  return input ? '\u2713' : '\u2718';
	     };
});