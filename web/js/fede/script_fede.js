jQuery(function($) {

/*+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
slick
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+*/
	$('section.header .image ul.slick').slick({
		arrows       : false,
		asNavFor     : '.text ul.slick',
		autoplay     : true,
		autoplaySpeed: 5000,
		fade         : true,
		infinite     : true,
		pauseOnFocus : false,
		pauseOnHover : false,
		speed        : 2000
	});

	$('section.header .text ul.slick').slick({
		arrows       : false,
		asNavFor     : '.image ul.slick',
		autoplay     : true,
		autoplaySpeed: 5000,
		fade         : true,
		infinite     : true,
		pauseOnFocus : false,
		pauseOnHover : false,
		speed        : 2000
	});

	$('section.works ul.slick.design').slick({
		pauseOnFocus : false,
		pauseOnHover : false,
		autoplay     : true,		
		centerMode   : true,
		centerPadding: '0',
		infinite     : true,
		initialSlide : 1,
		variableWidth: true,
		responsive   : [{breakpoint: 640, settings: {variableWidth: false}}]
	});

	$('section.works ul.slick.card, section.works ul.slick.styling').slick({
		pauseOnFocus : false,
		pauseOnHover : false,		
		autoplay     : true,		
		centerMode   : true,
		centerPadding: '0',
		infinite     : true,
		initialSlide : 1,
		variableWidth: true,
		responsive   : [{breakpoint: 480, settings: {variableWidth: false}}]
	});

/*
	$('section.works ul.slick').each(function() {
		var imgWidth = $('img', this).width();
		var slidePadding = parseInt($('.slick-slide', this).css('padding-left'), 10);
		var buttonWidth = parseInt($('button.slick-prev', this).css('width'), 10);

		if (window.innerWidth > imgWidth * 3 + slidePadding * 6 + buttonWidth * 2) {
			$('button.slick-prev', this).css({'left': 'calc(50% - (((' + imgWidth + 'px * 3) + (' + slidePadding + 'px * 5)) / 2) - ' + buttonWidth + 'px)'});
			$('button.slick-next', this).css({'right': 'calc(50% - (((' + imgWidth + 'px * 3) + (' + slidePadding + 'px * 5)) / 2) - ' + buttonWidth + 'px)'});
		} else if (window.innerWidth < imgWidth + slidePadding * 2 + buttonWidth * 2) {
			$('button.slick-prev', this).css({'left': '5px'});
			$('button.slick-next', this).css({'right': '5px'});
		} else {
			$('button.slick-prev', this).css({'left': 'calc(50% - (' + imgWidth + 'px / 2) - (' + slidePadding + 'px / 2) - ' + buttonWidth + 'px)'});
			$('button.slick-next', this).css({'right': 'calc(50% - (' + imgWidth + 'px / 2) - (' + slidePadding + 'px / 2) - ' + buttonWidth + 'px)'});
		}
	});
*/


/*+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
スライドショー
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+*/
	$('ul.slide').css({'opacity': '1'});
	$('ul.slide').find('li').hide();
	$('ul.slide').find('li:first').stop().fadeIn(1000);
	 
	setInterval(function() {
		$('ul.slide').find('li:first-child').fadeOut(1000).next('li').fadeIn(1000).end().appendTo('ul.slide');
	}, 5000);
/*+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
fade-in-up
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+*/
	$('.fade-in-up').css({'opacity': 0});

	$('.fade-in-up').each(function(index, element) {
		$(window).on('load scroll', function() {
			var target = $(element).offset().top;

			if (target < $(window).scrollTop() + window.innerHeight) {
				$(element).addClass('fade-in-up');
			} else if (target > $(window).scrollTop() + window.innerHeight) {
				$(element).removeClass('fade-in-up');
			}
		})
	});
});
