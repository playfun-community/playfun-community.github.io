$(document).ready(function(){
	$("figure").each(function(){
		this.style.background = 'url("res/img/more/'+this.title.toLowerCase()+'")';
	});

	$(function() {
		$('a[href*=#]:not([href=#])').click(function(){
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length){
					$('html,body').animate({ scrollTop: target.offset().top }, 600);
					return false;
				}
			}
		});
	});

	var lastScrollTop = 0;
	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		if (st>60)
			$("nav").addClass("fixIt");
		else
			$("nav").removeClass("fixIt");
		/*if (st < lastScrollTop && st > 60 )
			$("header").addClass("fixIt");
		else // scrollDown
			$("header").removeClass("fixIt");*/
		lastScrollTop = st;
	});
});