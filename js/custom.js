	
$(document).ready(function() {
	
		// Mouse Design
		$(".mouse-deisgn").on('mouseenter', function() {	
			var $this = $(this);			
			TweenMax.to('#ball', 0.3,{borderWidth: '0px', scale: 1.2, borderColor:'#c19a5b', backgroundColor:'#c19a5b'});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '0px', top: 2, left: 2});
			$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );				
		});
							
		$(".mouse-deisgn").on('mouseleave', function() {					
			TweenMax.to('#ball', 0.2,{borderWidth: '1px', scale:0.5, borderColor:'#c19a5b', backgroundColor:'transparent'});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '1px', top: 0, left: 0});
			$('#ball p').remove();				
		});	

		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
		})

	"use strict";
	AjaxLoad();
	Sliders();
});


	
	
/*--------------------------------------------------
Function Sliders
---------------------------------------------------*/
	
function Sliders() {
		
	setTimeout( function(){
		
		if( $('.content-slider').length > 0 ){
		
			var interleaveOffset = 0.4;
			
			var ContentSliderOptions = {				
				direction: 'horizontal',
				loop: true,
				slidesPerView: 1,
				paginationClickable: true,
				spaceBetween: 0,
				mousewheelControl: false,
				simulateTouch: false,
				speed: 1000,
				navigation: {
					nextEl: '.slider-button-next',
					prevEl: '.slider-button-prev',
				},
				on: {
					progress: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							var slideProgress = swiper.slides[i].progress;
							var innerOffset = swiper.height * interleaveOffset;
							var innerTranslate = slideProgress * innerOffset;
							swiper.slides[i].querySelector("img").style.transform = "translate3d(" + innerTranslate + "px,0, 0)";
						}
					  
					},
					touchStart: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = "";
						}
					},
					setTransition: function(speed) {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = speed + "ms";
							swiper.slides[i].querySelector("img").style.transition = speed + "ms";
						}   
					}
				}
		
			}
			
			var swiper = new Swiper(".content-slider", ContentSliderOptions);
			
			$(".slider-button-prev").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.2,{borderWidth: '1px', scale: 1, borderColor:'#c19a5b',});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '1px', top: 2, left: 2});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-left"></i>' );
			});
				
			$(".slider-button-prev").mouseleave(function(e) {
				TweenMax.to('#ball', 0.2,{borderWidth: '1px', scale:0.5, borderColor:'#c19a5b',});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '1px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
			});
			
			$(".slider-button-next").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.2,{borderWidth: '1px', scale: 1, borderColor:'#c19a5b',});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '1px', top: 2, left: 2});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-right"></i>' );
			});
				
			$(".slider-button-next").mouseleave(function(e) {
				TweenMax.to('#ball', 0.2,{borderWidth: '1px', scale:0.5, borderColor:'#c19a5b',});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '1px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
			});
			
		}
		
		// multi slider carousel
		if( $('.content-carousel').length > 0 ){
		
			var ContentCarouselOptions = {			
				simulateTouch: true,
				slidesPerView: 'auto',
				spaceBetween: 50,
				mousewheelControl: false,
				speed: 700,	
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				  },
				breakpoints: {
				  576: {
					spaceBetween: 20,
				  },
				  768: {
					spaceBetween: 30,
				  },
				  1200: {
					spaceBetween: 40,
				  },
				  1600: {
				
					spaceBetween: 50,
				  },
				},
				scrollbar: {
					el: ".swiper-scrollbar",
					hide: true,
					draggable: true,
				}
			}

			
			
			var swiper = new Swiper(".content-carousel", ContentCarouselOptions);
			
			$('.content-carousel').on('mousedown touchstart', function(event) {
				
				$("body").addClass("drag-cursor");
			});
			
			$('body').on('mouseup touchend', function(event) {
				
				$("body").removeClass("drag-cursor");
			});
			
			$('.content-carousel').on('mouseenter mousemove', function() {	
				TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#c19a5b',});
				$("body" ).addClass("scale-drag");
			});
				
			$('.content-carousel').on('mouseleave', function() {
				TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale:0.5, borderColor:'#c19a5b',});
				$("body").removeClass("scale-drag").removeClass("drag-cursor");
			});
			
			$("body").mouseleave(function(e) {
				
				$("body").removeClass("scale-drag").removeClass("drag-cursor");
			});
		
		}

		



		
		if( $('.content-looped-carousel').length > 0 ){
		
			var ContentLoopedCarouselOptions = {			
				direction: 'horizontal',
				simulateTouch: true,
				slidesPerView: '5',
				centeredSlides: false,
				loop:true,
				spaceBetween: 45,
				mousewheelControl: false,
				speed: 700,	
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				  },
				breakpoints: {
				  1: {
					slidesPerView: '3',
					spaceBetween: 0,
				  },
				  576: {
					slidesPerView: '3',
					spaceBetween: 0,
				  },
				  768: {
					slidesPerView: '3',
					spaceBetween: 25,
				  },
				  992: {
					slidesPerView: '3',
					spaceBetween: 30,
				  },
				  1200: {
					slidesPerView: '4',
					spaceBetween: 35,
				  },
				  1600: {
					slidesPerView: '5',
					spaceBetween: 45,
				  },
				}	
			}



			
			var swiper = new Swiper(".content-looped-carousel", ContentLoopedCarouselOptions);
			
		
			
			$('.content-looped-carousel').on('mouseenter mousemove', function() {	
				TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#c19a5b',});
				$("body" ).addClass("scale-drag");
			});
				
			$('.content-looped-carousel').on('mouseleave', function() {
				TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale:0.5, borderColor:'#c19a5b',});
				$("body").removeClass("scale-drag").removeClass("drag-cursor");
			});
			
			$("body").mouseleave(function(e) {
				$("body").removeClass("scale-drag").removeClass("drag-cursor");
			});
		
		}
	
	} , 400 );
	
}//End Sliders	


	
/*--------------------------------------------------
Function Load Via Ajax
---------------------------------------------------*/	
		
	function LoadViaAjax() {		
		Sliders();
	}//End Load Via Ajax
	
	
	
	
	
		