
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
	// Mouse Design
    $(".mouse-deisgn").on('mouseenter', function() {	
        var $this = $(this);			
        TweenMax.to('#ball', 0.3,{borderWidth: '0px', scale: 1.2, borderColor:'#c19a5b', backgroundColor:'#c19a5b'});
        TweenMax.to('#ball-loader', 0.2,{borderWidth: '0px', top: 2, left: 2});
        $( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );				
    });
                        
    $(".mouse-deisgn").on('mouseleave', function() {					
        TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale:0.5, borderColor:'#c19a5b', backgroundColor:'transparent'});
        TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 0, left: 0});
        $('#ball p').remove();				
    });	


