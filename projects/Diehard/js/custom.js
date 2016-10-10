$(function() {
	  
		var navigation = responsiveNav("#nav");
		var videoLeft=document.getElementById("video-left");
		var videoRight=document.getElementById("video-right");
		var videoFull=document.getElementById("video-full");
		var promoBannerVid=document.getElementById("right-promo-vid");
		
//		Main Navigation Dropdowns

		$("#nav div ul > li").hoverIntent(openIt, closeIt);
		    
		function openIt() {
			$(this).addClass("active");
			TweenMax.fromTo($(".active .sub-menu"), .2, {autoAlpha:0}, {autoAlpha:1, left:"+=25px"});
		}
		 
		function closeIt() {
			TweenMax.to($(".active .sub-menu"), .2, {autoAlpha:0, left:"-=25px"});
			$(this).removeClass("active");
		}	
		
//		Visual Nav Interactions

		TweenMax.to($("#visual-nav .inactive a"), 0, {autoAlpha:0, left:300});
		TweenMax.to($("#visual-nav .active a"), .2, {autoAlpha:1, left:105});
		
		var config = {    
		     sensitivity: 1, // number = sensitivity threshold (must be 1 or higher)    
		     interval: 100,  // number = milliseconds for onMouseOver polling interval    
		     over: openVisNav,   // function = onMouseOver callback (REQUIRED)    
		     timeout: 200   // number = milliseconds delay before onMouseOut    
		};
		
		$("#visual-nav li").hoverIntent(config);
		
		function visNavAnim() {
			TweenMax.to($("#visual-nav .inactive"), .2, {width:'9%'});
			TweenMax.to($("#visual-nav .active a"), .2, {autoAlpha:1, left:105});
			TweenMax.to($("#visual-nav .inactive a"), .2, {autoAlpha:0, left:300});
			TweenMax.to($('#visual-nav .active'), .2, {width:'37%'});
		}
		
		function openVisNav() {
			$(this).siblings().removeClass("active").addClass("inactive");
			$(this).addClass("active").removeClass("inactive");
			
			visNavAnim();
		}

		$("#visual-nav").mouseleave(function() {
		  	$("#visual-nav .selector").addClass("active").removeClass("inactive");
		  	$("#visual-nav .selector").siblings().removeClass("active").addClass("inactive");
		  	
		  	visNavAnim();
		});

		
//		Callout Content Module Interactions
		
		TweenMax.to($('#callout-content .shade'),0 , {autoAlpha:0});
		
		$("#callout-content li").hoverIntent(calloutIn, calloutOut);

		function calloutIn(){
			$(this).siblings().removeClass("active").addClass("inactive");
			$(this).addClass("active").removeClass("inactive");
			TweenMax.fromTo($("#callout-content .active .shade"), .2, {autoAlpha:0}, {autoAlpha:1});
			TweenMax.fromTo($("#callout-content .active .info p, #callout-content .active .info a"), .2, {autoAlpha:0}, {autoAlpha:1});
		}
		
		function calloutOut(){
			$(this).removeClass("active").addClass("inactive");
			TweenMax.to($("#callout-content .inactive .shade"), .2, {autoAlpha:0});
			TweenMax.to($("#callout-content .inactive .info p, #callout-content .inactive .info a"), .2, {autoAlpha:0});
		}
		
//		Play Left Video
		
		$("#sub-callout-content li.left-content").hoverIntent(subCalloutLeftIn, subCalloutLeftOut);
		
		function subCalloutLeftIn(){
			$(this).addClass("active").removeClass("inactive");
			TweenMax.to($("#sub-callout-content .active .vid-overlay"), .2, {autoAlpha:0});
			
			videoLeft.play();
		}
				
		function subCalloutLeftOut(){
			$(this).removeClass("active").addClass("inactive");
			TweenMax.to($("#sub-callout-content .inactive .vid-overlay"), .2, {autoAlpha:1});
			
			videoLeft.pause();
			videoLeft.currentTime = 0;
		}
		
//		Play Right Video
		
		$("#sub-callout-content li.right-content").hoverIntent(subCalloutRightIn, subCalloutRightOut);
		
		function subCalloutRightIn(){
			$(this).addClass("active").removeClass("inactive");
			TweenMax.to($("#sub-callout-content .active .vid-overlay"), .2, {autoAlpha:0});
			
			videoRight.play();
		}
				
		function subCalloutRightOut(){
			$(this).removeClass("active").addClass("inactive");
			TweenMax.to($("#sub-callout-content .inactive .vid-overlay"), .2, {autoAlpha:1});
			
			videoRight.pause();
			videoRight.currentTime = 0;
		}
		
//		Play Full-Width Video
		
		$("#sub-callout-content li.full-content").hoverIntent(subCalloutRightIn, subCalloutRightOut);
		
		function subCalloutRightIn(){
			$(this).addClass("active").removeClass("inactive");
			TweenMax.to($("#sub-callout-content .active .vid-overlay"), .2, {autoAlpha:0});
			
			videoFull.play();
		}
				
		function subCalloutRightOut(){
			$(this).removeClass("active").addClass("inactive");
			TweenMax.to($("#sub-callout-content .inactive .vid-overlay"), .2, {autoAlpha:1});
			
			videoFull.pause();
			videoFull.currentTime = 0;
		}
		
//		Play Promo-Banner Video 

		$(".promo-banner").hoverIntent(promoBannerIn, promoBannerOut);
		
		function promoBannerIn(){
			$(this).addClass("active").removeClass("inactive");
			TweenMax.to($(".promo-banner.active .vid-overlay"), .2, {autoAlpha:0});
			promoBannerVid.play();
		}
				
		function promoBannerOut(){
			$(this).removeClass("active").addClass("inactive");
			TweenMax.to($(".promo-banner.inactive .vid-overlay"), .2, {autoAlpha:1});
			promoBannerVid.pause();
			promoBannerVid.currentTime = 0;
		}
		
//		Intro Overlay Animation
		
		$(".tagline").removeAttr('style');
		
		var introTL = new TimelineMax({delay:1.5});
		
		introTL.to($(".curtain"), .5, {autoAlpha:0})
			   .staggerFromTo($("#intro-overlay .life,#intro-overlay .demands,#intro-overlay .diehard"), .2, {scale:10, autoAlpha:0, immediateRender:true}, {scale:1, autoAlpha:1, ease:Expo.easeOut},.5)
			   .to($("#intro-overlay .tagline"), 1, {scale:.9}, "+=1")
			   .to($("#intro-overlay .life,#intro-overlay .demands,#intro-overlay .diehard, #intro-overlay .tagline"), 1, {autoAlpha:0}, "-=1")
			   .to($("#intro-overlay"), 1, {autoAlpha:0}, "+=.25");
		
});