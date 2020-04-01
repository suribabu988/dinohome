$(document).ready(function () {
	AOS.init({
		easing: 'ease-in-out-sine'
	});

	// Navbar
	$(window).scroll(function () {
		var height = $(window).scrollTop();
		if (height > 100) {
			$('.menuButton').css('opacity', '1');
			$('.menuButton').addClass('MenuslideOpen').removeClass('MenuslideClose');
		} else {
			$('.menuButton').css('opacity', '0');
			$('.menuButton').addClass('MenuslideClose').removeClass('MenuslideOpen');
		}
		if (jQuery(window).width() < 1200 && jQuery(window).height() > 0) {
			jQuery('.menuButton').css('opacity', '1');

		}

	});

	if (jQuery(window).width() < 1200 && jQuery(window).height() > 0) {
		jQuery('.menuButton').css('opacity', '1');

	}
	jQuery(window).resize(function () {
		if (jQuery(window).width() < 1200 && jQuery(window).height() > 0) {
			jQuery('.menuButton').css('opacity', '1');
		}
		else {
			jQuery('.menuButton').css('opacity', '0');
		}
	});

	//menu button
	$('.menuButton').click(function () {
		$('.menuFullScreen').removeClass('menuNone');
		$('.menuFullScreen .right').addClass('RightslideOpen').removeClass('RightslideClose');
		$('.menuFullScreen .left').addClass('LeftslideOpen').removeClass('LeftslideClose');

	});

	$('.menuFullScreen .right .close').click(function () {
		$('.menuFullScreen .right').addClass('RightslideClose').removeClass('RightslideOpen');
		$('.menuFullScreen .left').addClass('LeftslideClose').removeClass('LeftslideOpen');
		setTimeout(function () {
			$('.menuFullScreen').addClass('menuNone');
		}, 500);
	});

	// navbar's end
	$('.miles-right .mileslink').mouseenter(function () {
		$(this).find('.text').addClass('godownEle').removeClass('goupinEle');
		$(this).find('.overlay').css('opacity', '0');
	});
	$('.miles-right .mileslink').mouseleave(function () {
		$(this).find('.text').addClass('goupinEle').removeClass('godownEle');
		$(this).find('.overlay').css('opacity', '0.3');
	});
	$('.epicbg .mileslink').mouseenter(function () {
		$(this).find('.text').addClass('godownEle').removeClass('goupinEle');
		$(this).find('.overlay').css('opacity', '0');
	});
	$('.epicbg .mileslink').mouseleave(function () {
		$(this).find('.text').addClass('goupinEle').removeClass('godownEle');
		$(this).find('.overlay').css('opacity', '0.3');
	});
	$('.package.alsoLike .pushs a').mouseenter(function () {
		$(this).find('.txt').addClass('godownEle').removeClass('goupinEle');
		$(this).find('.overlay').css('opacity', '0');
	});
	$('.package.alsoLike .pushs a').mouseleave(function () {
		$(this).find('.txt').addClass('goupinEle').removeClass('godownEle');
		$(this).find('.overlay').css('opacity', '0.3');
	});

	// Modal video
	var urlVideo = $("#cartoonVideo").attr('src');
	$("#cartoonVideo").attr('src', '');
	$("#videoHome").on('shown.bs.modal', function () {
		$("#cartoonVideo").attr('src', urlVideo);
	});
	$("#videoHome").on('hide.bs.modal', function () {
		$("#cartoonVideo").attr('src', '');
	});

	// Map Links
	$('.destination .container .map .links a').mouseenter(function () {
		var linkAttr = $(this).attr('data-id');
		$('.destination .container .map .continents img').filter('[data-cont=' + linkAttr + ']').css('opacity', '1');

	});
	$('.destination .container .map .links a').mouseleave(function () {
		var linkAttr = $(this).attr('data-id');
		$('.destination .container .map .continents img').filter('[data-cont=' + linkAttr + ']').css('opacity', '0');

	});

	//slidebar mouseover links
	$('.menuFullScreen .right nav a').mouseover(function () {
		var sideLink = $(this).attr('data-sidelink');
		$(this).css('color', '#53af3a');
		$('.menuFullScreen .left .moreItems .moreItem').css('display', 'none');
		$('.menuFullScreen .left .moreItems .moreItem').filter('[data-linkside=' + sideLink + ']').css('display', 'contents');

	});
	$('.menuFullScreen .right nav a').mouseleave(function () {
		var sideLink = $(this).attr('data-sidelink');
		$(this).css('color', 'white');
	});

	// select box
	$('.item-filter-select').on('change', function () {
	//		$('.item-filter-sub-select').removeClass('.disabled');
		if (this.value == 'all') {
			$('.item').show();
		} else {
			var elems = $('.item[data-type="' + this.value + '"]');
			$('.item').not(elems).hide();
			elems.show();
				$('.item-filter-sub-select').on('change', function () {
				if (this.value == 'all') {
					$('.subitem').show();
				} else {
					var elems = $('.subitem[data-subtype="' + this.value + '"]');
					$('.subitem').not(elems).hide();
					elems.show();
				}
			});

		}
	});


	$('.nav-tabs-dropdown').each(function (i, elm) {
		$(elm).text($(elm).next('ul').find('li.active a').text());
		$('.nav-tabs-dropdown').text("Experience");

	});

	$('.nav-tabs-dropdown').on('click', function (e) {

		e.preventDefault();

		$(e.target).toggleClass('open').next('ul').slideToggle();

	});

	$('#nav-tabs-wrapper a[data-toggle="tab"]').on('click', function (e) {

		e.preventDefault();

		$(e.target).closest('ul').hide().prev('a').removeClass('open').text($(this).text());
		$(".menuFullScreen.left.moreItems.moreItem >.text").css('background', '#fff');
	});

	// scroll

	// var scrollNav = $('header nav a');
	// scrollNav.click(function (e) {
	// 	e.preventDefault();
	// 	$('body,html').animate({
	// 		scrollTop: $(this.hash).offset().top - 5
	// 	}, 1000);
	// });


	var scrollLink = $('#aboutTabs .navbar .navbar-nav .nav-item a.nav-link');

		// Smooth scrolling
		scrollLink.click(function (e) {
			e.preventDefault();
			$('body,html').animate({
				scrollTop: $(this.hash).offset().top - 70
			}, 1000);
			scrollLink.removeClass('active');
			$(this).addClass('active');
		});

		// Active link switching
		$(window).scroll(function () {
			var scrollbarLocation = $(this).scrollTop();

			scrollLink.each(function () {

				var sectionOffset = $(this.hash).offset().top - 70;

				if (sectionOffset <= scrollbarLocation) {
					$(this).parent().addClass('active');
					$(this).parent().siblings().removeClass('active');
				}
			})

		})

	$(".menuFullScreen .left .moreItems .moreItem>.logo").show();
	$(".menuFullScreen .left .moreItems .moreItem").is(function () {
		var $textThis = $(this);
		$textThis.find('.text').scroll(function () {
			var navheight = $(this).scrollTop();

			if (navheight > 0) {
				$textThis.find('.logo').hide('slow');
			}
			else {
				$textThis.find('.logo').show('hide');
			}
		});
	});

	//tours tabs linking


	var url = $(location).attr('href');
	// var hostUrl = window.location.host + '/destination.html';
	// var removeData = url.replace('http://' + hostUrl, "");
	// var clickUrl = 'http://' + hostUrl + removeData + '';
	var hostUrl = window.location.host + '/dinohome/destination.html';
	var removeData = url.replace('https://' + hostUrl, "");
	var clickUrl = 'https://' + hostUrl + removeData + '';
	var clickCategory = removeData.replace("#", "");
	if (clickUrl == url && clickCategory != "") {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		$('.nav.nav-tabs .nav-link').removeClass('active').removeClass('show');
		$('.nav.nav-tabs .nav-link[data-tour=' + clickCategory + ']').addClass('active').addClass('show');
		$('.tab-content>.active').removeClass('active').removeClass('show');
		$('.tab-content>.tab-pane[id=' + clickCategory + ']').addClass('active').addClass('show');
	}

});