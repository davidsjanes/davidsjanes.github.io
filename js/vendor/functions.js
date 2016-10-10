$(function(){
	
	var $workLink = $('#work, .home-link'),
		$header = $('header'),
		$workItem = $('.work-list li'),
		$animElements = $('main .logo-shape, main h3, main h2, .homepage main p, .home-link, .hero-image')
	;
	
	function openHeader(){
		$header.addClass('list-open');
		TweenMax.staggerFrom($workItem, .75, {opacity:0, top:"+=30rem"}, .05);
	}
	function closeHeader(){
		$header.removeClass('list-open');
	}
	
	$workLink.on('click', function(e){
		if (!$header.hasClass('list-open')){
			openHeader();
		}
		else {
			closeHeader();
		}
	});
	
	var homeAnim = new TimelineMax({paused:false});
	
	homeAnim.staggerFrom($animElements, .75, {top:"+=5rem", autoAlpha:0}, .1, 0);
	
	TweenMax.to($('.logo-shape-1'), 55, {rotation:"-=360deg", repeat:-1, ease:Power0.easeOut});
	TweenMax.to($('.logo-shape-2'), 40, {rotation:"+=360deg", repeat:-1, ease:Power0.easeOut});
	TweenMax.to($('.logo-shape-3'), 70, {rotation:"-=360deg", repeat:-1, ease:Power0.easeOut});

		
	//	tlStart = new TimelineMax({paused:true});
	//	tlAfter = new TimelineMax({paused:true});
	//		
	//	tlStart.to($('header'), 1, {opacity:0, clearProps:"true"});
	//	tlAfter.to($('header'), 1, {opacity:1, clearProps:"true"});
	//	
	//	var startDuration = tlStart.duration() * 1000;
	//	var afterDuration = tlAfter.duration() * 1000;
	//		
	//	$('#page').smoothState({ 
	//		
	//		debug: true,
	//		prefetch: true,
	//		cacheLength: 0,
	//		loadingClass: 'is-loading',
	//		onStart: {
	//		    duration: startDuration,
	//		    render: function ($container) {
	//		    	tlStart.restart();
	//		    }
	//		},
	//		onReady: {
	//		    duration: afterDuration,
	//		    render: function ($container, $newContent) {
	//		    	$container.html($newContent);
	//		    	tlAfter.restart();
	//		    }
	//		}
	//  
	//	});
	    
});
