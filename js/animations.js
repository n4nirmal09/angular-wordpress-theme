var appAnimations = angular.module('appAnimations',['ngAnimate']);

appAnimations.animation('.phone',function(){
	var animateAppear = function(element, className, done){
			if(className == 'animate_hor') {
     
				    element.css({
				      position: 'absolute',
				      top: 0,
				      left: 500,
				      display: 'block'
				    });
				
				    jQuery(element).animate({
				      left: 0
				    }, done);
				     
				      return;
			}else if(className == 'animate_ver'){
				    	element.css({
					      position: 'absolute',
					      top: 500,
					      left: 0,
					      display: 'block'
					    });
					
					    jQuery(element).animate({
					      top: 0
					    }, done);
					     
					      return;
			}
		 return function(cancel) {
				      if(cancel) {
				        element.stop();
				      }
				    };
		
	};
	
	var animateDisapear = function(element,className,done){
		   if(className == 'animate_hor') {
      
			    element.css({
			      position: 'absolute',
			      left: 0,
			      top: 0
			    });
			
			    jQuery(element).animate({
			      left: -500
			    }, done);
			    
			    return;    
		  } else if(className == 'animate_ver'){
			    	element.css({
				       position: 'absolute',
					      left: 0,
					      top: 0
				    });
				
				    jQuery(element).animate({
				      top: -500
				    }, done);
				     
				      return;
			}
			return function(cancel) {
			      if(cancel) {
			        element.stop();
			      }
			 };
	}; 
	
	return {
		addClass : animateAppear,
		removeClass : animateDisapear
	};
});

 appAnimations.animation('.data-load',function(){
	
	var fadeOutAnim = function(element,className,done){
		if(className == 'active'){
		
		   jQuery(element).find('.data-loader').fadeOut();
		   return;
		}
		return function(cancel) {
				      if(cancel) {
				        element.stop();
				      }
				    };
	};
	return {
		
		addClass : fadeOutAnim
		
	};
	
}); 


