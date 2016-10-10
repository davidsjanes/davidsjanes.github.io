$(function() {
		
//		Initialize Draggable
		
//		Draggable.create($(".user-scroller"), {
//			type:"scrollLeft", 
//			edgeResistance:.8, 
//			throwProps:true
//		});

//		Initialize Scrollbar

		$(".activity").mCustomScrollbar({
			scrollButtons:{
			    enable: false
			},
			horizontalScroll: false,
			autoHideScrollbar: true
			
		});
		
		$(".tool-actions li").click(function(){
			$(this).toggleClass('active');
		});
		
});