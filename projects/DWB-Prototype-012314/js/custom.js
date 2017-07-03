$(function() {
		
//		Initialize Scrollbar

		$(".rec-lists").mCustomScrollbar({
			scrollButtons:{
			    enable: false
			},
			horizontalScroll: false,
			autoHideScrollbar: true
		});

//		Initialize Backstretch

		$(".background").backstretch("https://davidsjanes.github.io/projects/DWB-Prototype-012314/images/garage-bg-3.jpg");
		
//		Initialize Gridly for Tool Drawer

//		$('.gridly').gridly({
//		    base: 20, // px
//		    gutter: 25, // px
//		    columns: 20
//		});
		
//	    Animate between Landing and Main Sections

		$(document).on('touchend, click', '.logo', function(){
			TweenMax.to($('#workspace'), .5, 
				{autoAlpha:0, display:"none"}
			);
//			TweenMax.to($('.dim-lights'), .5, 
//				{autoAlpha:0, delay:.5, display:"none"}
//			);
			TweenMax.to($('.exp-tools, .exp-collections'), .5,
				{left:"250px", delay:.5, autoAlpha:0}
			);
			TweenMax.to($('.main-navigation'), .5,
				{left:"-150px", delay:.5, autoAlpha:0}
			);
			TweenMax.to($('#landing'), .5,
				{autoAlpha:1, delay:1}
			);
		});
	    
//	    Activate FAQ Section
		
		var faqTL = new TimelineMax({paused:true});
		
		faqTL.to($('#workspace'), .5,
//			{autoAlpha:1, display:"block"}, 
			{autoAlpha:0, display:"none"}
		);
		faqTL.to($('.exp-tools, .exp-collections'), .5,
//			{left:"0", autoAlpha:1},
			{left:"250px", autoAlpha:0}, "-+.5"
		);
		faqTL.to($('.main-navigation'), .5,
//			{left:"0", autoAlpha:1},
			{left:"-150px", autoAlpha:0}, "-+.5"
		);
		faqTL.fromTo($('#about'), .5,
			{autoAlpha:0, display:"none"},
			{autoAlpha:1, display:"block"}, "+=0"
		);
		
		$(document).on('touchend, click', '.faq-cta', function(){
			faqTL.play();
		});
		$(document).on('touchend, click', '#about .close-section', function(){
			faqTL.reverse();
		});
	    
//	    Animate/Cycle Between Sections from Main Navigation

		CSSPlugin.defaultTransformPerspective = 1000;
						
		$(document).on('touchend, click', '.main-links > li', function(){
				
			if (!$(this).hasClass('active') ){
			
				var firstIndex = $('.main-links').children('.active').index();
				
				$(this).addClass('active').siblings('.active').removeClass('active');
				
				var secondIndex = $('.main-links').children('.active').index();
				
				var firstIndexMatch = $('#workspace').children().eq(firstIndex);
				var secondIndexMatch = $('#workspace').children().eq(secondIndex);
				
				$('#workspace').children().eq(secondIndex).addClass('active').siblings('.active').removeClass('active');
				
				function animateSections() {
					TweenMax.set($('#workspace'),
						{display:"block", autoAlpha:1}
					);
					
					TweenMax.to(firstIndexMatch, .35, 
						{scale:.9}
					);
					
//					TweenMax.to($('.dim-lights'), .35, 
//						{display:"block", autoAlpha:.2}, 0
//					);
					
					TweenMax.to(firstIndexMatch, .35, 
						{left:"100%", display:"none", delay:.35}
					);
					
					TweenMax.fromTo(secondIndexMatch, .35, 
						{left:"-100%", display:"none", scale:.9},
						{left:"0%", display:"block", delay:.7}
					);
					
					TweenMax.to(secondIndexMatch, .35, 
						{scale:1, delay:1.05}
					);
				}
				
				animateSections();
			}

		});
		
		
//		Toggle Grid Brick Icons

		$(".tool-actions li").bind('touchend, mouseup',function(){
			$(this).toggleClass('active');
		});
		
//		Toggle Active Class for Tools Menu

		$('.drawers li').bind('touchend, mouseup',function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
		
//		Toggle Active Class Right Rail

		$('.rec-title > div a').bind('touchend, mouseup',function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
		
//		Toggle Active Class for Search Tools Menu

		$(".add-tools-menu .standard-tool").click(function(){
			$(this).toggleClass('active');
			if ($(this).hasClass('active')) {
				$('.add-tools-cta').addClass('active');
			}
			else if (!$('.add-tools-menu .standard-tool').hasClass('active')) {
				$('.add-tools-cta').removeClass('active');
			}
		});
		
//		Animate Search Tools Menu

		var addMenuTL = new TimelineMax({paused:true});
		
		addMenuTL.fromTo($('.add-tools-menu'),.5 ,{display:"none", top:"+=25px", autoAlpha:0, zIndex:0}, {display:"block", top:"-=25px", autoAlpha:1, zIndex:500});
		
		$(".add-tool").bind('touchend, mouseup',function(){
			$(this).addClass('active').siblings().removeClass('active');
			addMenuTL.play();
		});
		$(".add-tools-cancel").bind('touchend, mouseup',function(){
			$(".add-tool").removeClass('active');
			addMenuTL.reverse();
		});
		$(".standard-tool.empty.tool").bind('touchend, mouseup',function(){
			addMenuTL.play();
		});
		
//		Expand Comments

		var commentsTL = new TimelineMax({paused:true});
		
		commentsTL.fromTo($('.tools-comments'),.5 ,{autoAlpha:0, display:"none"}, {autoAlpha:1, display:"block"})
					.fromTo($('.tools-comments .comments'),.5 ,{autoAlpha:0, top:"+=100px"}, {autoAlpha:1, top:"-=100px"}, "-=.25");
		
		$(".open-comments").bind('touchend, mouseup',function(){
			commentsTL.play();
		});
		
		$(".tools-comments .close-section").bind('touchend, mouseup',function(){
			commentsTL.reverse();
		});
		
//		Expand Project Listings for Tools

//		var toolProjectsTL = new TimelineMax({paused:true});
//		
//		toolProjectsTL.fromTo($('.tool-projects'),.5 ,{autoAlpha:0, display:"none"}, {autoAlpha:1, display:"block"})
//					.fromTo($('.tool-projects .project-list .min-max'),.5 ,{autoAlpha:0, top:"+=100px"}, {autoAlpha:1, top:"-=100px"}, "-=.25");
//		
//		$(".standard-tool .icon-projects_ico").bind('touchend, mouseup',function(){
//			toolProjectsTL.play();
//		});
//		
//		$(".close-projects").bind('touchend, mouseup',function(){
//			toolProjectsTL.reverse();
//		});
		
//		Initialize add new project Modal
		
		var newProjectTL = new TimelineMax({paused:true});
		
		newProjectTL.fromTo($('.new-project'),.5 ,{autoAlpha:0, display:"none"}, {autoAlpha:1, display:"block"})
					.fromTo($('.new-proj-form, .new-proj-tools'),.5 ,{autoAlpha:0, top:"+=100px"}, {autoAlpha:1, top:"-=100px"}, "-=.25");
		
		$(".new-project-link, .standard-tool.empty.project, .project-card.empty, .standard-tool .icon-projects_ico").bind('touchend, mouseup',function(){
			newProjectTL.play();
		});
		
		$(".new-project .close-section").bind('touchend, mouseup',function(){
			newProjectTL.reverse();
		});
		
//		Initialize project details Modal
		
		var projectDetailsTL = new TimelineMax({paused:true});
		
		projectDetailsTL.fromTo($('.project-details'),.5 ,{autoAlpha:0, display:"none"}, {autoAlpha:1, display:"block"})
					.fromTo($('.project-details .project-info, .additional-info'),.5 ,{autoAlpha:0, top:"+=100px"}, {autoAlpha:1, top:"-=100px"}, "-=.25");
		
		$(".project-card").bind('touchend, mouseup',function(){
			if (!$(this).hasClass('empty')) {
				projectDetailsTL.play();
			}
		});
		
		$(".project-details .close-section").bind('touchend, mouseup',function(){
			projectDetailsTL.reverse();
		});
		
//		Initialize Draggable
		
		Draggable.create(".new-proj-tools .standard-tool", {type:"x,y", edgeResistance:0.65, bounds:".new-project .min-max", throwProps:true});
		
//		Hide and Reveal Comments
		
		TweenMax.set($('.post .comment, .new-discussion > div > div'), {autoAlpha:0, display:"none"});
		
		$(document).on('touchend, click', '.post-1 .meta-links a', function(){
			TweenMax.to($('.post-1 .comment'), .5, 
				{autoAlpha:1, display:"block"}
			);
		});
		
		$(document).on('touchend, click', '.post-3 .meta-links a', function(){
			TweenMax.to($('.post-3 .comment'), .5, 
				{autoAlpha:1, display:"block"}
			);
		});
		
		$(document).on('touchend, click', '.post-3 .meta-links a', function(){
			TweenMax.to($('.post-3 .comment'), .5, 
				{autoAlpha:1, display:"block"}
			);
		});
		
		$(document).on('touchend, click', '.new-discussion h3', function(){
			TweenMax.to($('.new-discussion > div > div'), .5, 
				{autoAlpha:1, display:"block"}
			);
			TweenMax.to($(this), .5, 
				{marginBottom:"10px"}
			);
		});
		$(document).on('touchend, click', '.new-discussion .cancel', function(){
			TweenMax.to($('.new-discussion > div > div'), .5, 
				{autoAlpha:0, display:"none"}
			);
			TweenMax.to($('.new-discussion > div > h3'), .5, 
				{marginBottom:"0px"}
			);
			$('.attach-image, .attach-tool').removeClass('active');
		});
		
//		Swap Tool Drawers

		TweenMax.set($('.tool-list.like'), {autoAlpha:0, display:"none", top:"+=25px"});
		TweenMax.set($('.tool-list.own'), {autoAlpha:1, display:"block", top:"0"});

		$(document).on('touchend, click', '.like-link', function(){
			TweenMax.to($('.tool-list.own'), .5,
				{autoAlpha:0, display:"none", top:"+=25px"}
			);
			TweenMax.to($('.tool-list.like'), .5,
				{autoAlpha:1, display:"block", top:"0", delay:.5}
			);
		});
		$(document).on('touchend, click', '.own-link', function(){
			TweenMax.to($('.tool-list.like'), .5,
				{autoAlpha:0, display:"none", top:"+=25px"}
			);
			TweenMax.to($('.tool-list.own'), .5,
				{autoAlpha:1, display:"block", top:"0", delay:.5}
			);
		});
		
//		Add Tool or Image to Status

		$(document).on('touchend, click', '.icon-add-tool_ico.add-button', function(){
			$('.attach-tool').addClass('active');
		});
		$(document).on('touchend, click', '.attach-tool .icon-close_ico', function(){
			$('.attach-tool').removeClass('active');
		});
		$(document).on('touchend, click', '.icon-add-image_ico.add-button', function(){
			$('.attach-image').addClass('active');
		});
		$(document).on('touchend, click', '.attach-image .icon-close_ico', function(){
			$('.attach-image').removeClass('active');
		});
		
//		Switch Recommended States

		$(document).on('touchend, mouseup', '.tools-link, .intro-tools', function(){
		
			if (!$(this).hasClass('active')) {
							
				TweenMax.to($('.exp-collections'), .5,
					{left:"250px", delay:1, autoAlpha:0}
				);
				TweenMax.to($('.exp-tools, .main-navigation'), .5,
					{left:"0px", delay:1.5, autoAlpha:1}
				);
			}
		});
		
		$(document).on('touchend, mouseup', '.workshop-link, .projects-link, .intro-discussions, .intro-projects', function(){
		
			if (!$(this).hasClass('active')) {
							
				TweenMax.to($('.exp-tools'), .5,
					{left:"250px", delay:1, autoAlpha:0}
				);
				TweenMax.to($('.exp-collections, .main-navigation'), .5,
					{left:"0px", delay:1.5, autoAlpha:1}
				);
			}
		});
		
		$(document).on('touchend, click', '#landing ul li', function(){
						
			if (!$(this).hasClass('active') ){
			
				TweenMax.to($('.main-navigation'), .5,
					{left:"0", delay:.5}
				);
				TweenMax.to($('#landing'), .5,
					{autoAlpha:0,delay:.5}
				);
			
				var firstIndex = $('#landing ul').children('.active').index();
				
				$(this).addClass('active').siblings('.active').removeClass('active');
				
				var secondIndex = $('#landing ul').children('.active').index();
				
				var firstIndexMatch = $('#workspace').children().eq(firstIndex);
				var secondIndexMatch = $('#workspace').children().eq(secondIndex);
				
				$('#workspace').children().eq(secondIndex).addClass('active').siblings('.active').removeClass('active');
				
				function animateSections() {
					TweenMax.set($('#workspace'),
						{display:"block", autoAlpha:1}
					);
					
					TweenMax.to(firstIndexMatch, .35, 
						{scale:.9}
					);
					
//					TweenMax.to($('.dim-lights'), .35, 
//						{display:"block", autoAlpha:.2}, 0
//					);
					
					TweenMax.to(firstIndexMatch, .35, 
						{left:"100%", display:"none", delay:.35}
					);
					
					TweenMax.fromTo(secondIndexMatch, .35, 
						{left:"-100%", display:"none", scale:.9},
						{left:"0%", display:"block", delay:.7}
					);
					
					TweenMax.to(secondIndexMatch, .35, 
						{scale:1, delay:1.05}
					);
				}
				
				animateSections();
			}

		});
		
//		Toggle Tutorial Information

		TweenMax.set($('.tutorial'), {autoAlpha:0, display:"none"})

		$(document).on('touchend, click', '.tutorial-toggle', function(){
			$(this).toggleClass('active');
			if ($(this).hasClass('active')) {
				TweenMax.staggerFromTo($('.tutorial'), .5, 
					{autoAlpha:0, display:"none", top:"+=20px"},
					{autoAlpha:1, display:"block", top:"-=20px"}, .1
				);
			}
			else {
				TweenMax.fromTo($('.tutorial'), .5,
					{autoAlpha:1, display:"block"},
					{autoAlpha:0, display:"none"}
				);
			}
		});
		
//		Animate Landing

//		var landingLogoTL = new TimelineMax({paused:false});
//		
//		landingLogoTL.fromTo($('.branding h1'), .5, 
//			{autoAlpha:0, scale:1.5},
//			{autoAlpha:1, scale:1}, 1
//		)
//		landingLogoTL.fromTo($('.branding h1'), .5, 
//			{left:"195px"},
//			{left:0}, "+=.5"
//		)
//		.staggerFromTo($('#WS-Logo .logo-type > path'), .25, 
//			{autoAlpha:0},
//			{autoAlpha:1}, .1
//		);
		
});