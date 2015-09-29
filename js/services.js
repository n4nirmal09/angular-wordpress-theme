/* Services */

var appServices = angular.module('appServices', ['ngResource']);

// For phones
appServices.factory('Phone', ['$resource',
  function($resource){
  	var allPhones = '?filter[category_name]=phones';
    return $resource('wp-json/posts/:phoneId' + allPhones, {}, {
      query: {method:'GET', params:{phoneId:''}, isArray:true, cache:true},
      query_obj: {method:'GET', params:{phoneId:''}, isArray:false, cache:true}
    });
  }]);

// For attached media
appServices.factory('AttachedMedia', ['$resource',
  function($resource){
    return $resource('wp-json/media?filter[post_parent]=:postId', {}, {
      query: {method:'GET', params:{postId:''}, isArray:true, cache:true, responseType:'array'}
    });
  }]);