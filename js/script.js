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