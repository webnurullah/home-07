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


const cursor = new MouseFollower({
    el: null,
    container: document.body,
    className: 'mf-cursor',
    innerClassName: 'mf-cursor-inner',
    textClassName: 'mf-cursor-text',
    mediaClassName: 'mf-cursor-media',
    mediaBoxClassName: 'mf-cursor-media-box',
    iconSvgClassName: 'mf-svgsprite',
    iconSvgNamePrefix: '-',
    iconSvgSrc: '',
    dataAttr: 'cursor',
    hiddenState: '-hidden',
    textState: '-text',
    iconState: '-icon',
    activeState: '-active',
    mediaState: '-media',
    stateDetection: {
        '-pointer': 'a,button',
        '-hidden': 'iframe'
    },
    visible: true,
    visibleOnState: false,
    speed: 0.55,
    ease: 'expo.out',
    overwrite: true,
    skewing: 0,
    skewingText: 0,
    skewingIcon: 2,
    skewingMedia: 2,
    skewingDelta: 0.001,
    skewingDeltaMax: 0.15,
    stickDelta: 0.15,
    showTimeout: 20,
    hideOnLeave: true,
    hideTimeout: 300,
    hideMediaTimeout: 300
});