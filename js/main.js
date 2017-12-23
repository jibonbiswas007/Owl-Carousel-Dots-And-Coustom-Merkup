(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
    	$('.homepage-slides').owlCarousel({
    	    loop:true,
    	    dotsData:true,
    	    dots:true,
    	    autoplay:true,
    	    nav:true,
    	    smartSpeed:1000,
    	    navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    	    responsive:{
    	        0:{
    	            items:1
    	        },
    	        600:{
    	            items:1
    	        },
    	        1000:{
    	            items:1
    	        }
    	    }
    	})
        
    });
    
    jQuery(window).load(function(){
        
    });
    
    
}(jQuery));