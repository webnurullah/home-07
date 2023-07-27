$(document).ready(function(){
    $('#logo-slider').owlCarousel({
        loop:true,
        margin:45,
        nav:true,
        dots: false, 
        responsiveClass:true,
        navText : ["<i class='fa-light fa-chevron-left'></i>","<i class='fa-light fa-chevron-right'></i>"],
        responsive:{
            0:{
                nav:false,
                margin:25,
                items:3,  
            },
            576:{
                nav:true,
            },
            992:{    
                items:4,  
                margin:35,
            },   
            1200:{   
            },
            1600:{
                margin:25,
                items:5,               
            }
        }
    })
});
$(document).ready(function(){
    $('#multi-slider').owlCarousel({
        loop:true,
        margin:60,
        nav:true,
        dots: false,   
        responsiveClass:true,
        navText : ["<i class='fa-light fa-chevron-left'></i>","<i class='fa-light fa-chevron-right'></i>"],
        responsive:{
            0:{
                autoWidth:true,
                margin:20,
            },
            768:{
                autoWidth:true,
                margin:30,
            },
            992:{
                autoWidth:true,
                loop:false,
                margin:40,
            },
            1200:{
                items:3,
                loop:false,
                margin:50,
            },
            1600:{
                items:3,
                loop:false,
                
            }
        }

        
    })


});


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
	// Mouse Design
    $(".mouse-deisgn").on('mouseenter', function() {	
        var $this = $(this);			
        TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale: 1.2, borderColor:'#fff', backgroundColor:'#fff'});
        TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
        $( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );				
    });
                        
    $(".mouse-deisgn").on('mouseleave', function() {					
        TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
        TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
        $('#ball p').remove();				
    });	


