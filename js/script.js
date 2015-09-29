var appDierective = angular.module('appDierective', []);

appDierective.directive('loaderScreen', function() {
    return {       
        restrict: 'A',
        link: function(scope, element, attrs) {
        	var loader = "<div class='data-loader' style='position:absolute;left:0;top:0;bottom:0;right:0;'></div>";
            $(element).css({ 'position':'relative','min-height':$(window).height() - $('#header').height() }).append(loader);
            
        }
    };
});