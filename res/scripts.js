if (/*@cc_on!@*/false || !!document.documentMode)
	window.location.assign("http://www.google.com/chrome");

$(document).ready(function(){
	$(function(){
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
		if (st>=48)
			$("header nav").addClass("fixIt");
		else
			$("header nav").removeClass("fixIt");
		lastScrollTop = st;
	});
});
