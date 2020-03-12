$(document).ready(function(){
	AOS.init({
		easing: 'ease-in-out-sine'
	});

// Navbar
	$(window).scroll(function() {
		var height = $(window).scrollTop();
	  if(height > 100) {
			$('.menuButton').css('opacity','1');
		  $('.menuButton').addClass('MenuslideOpen').removeClass('MenuslideClose');
		} else {
			$('.menuButton').css('opacity','0');
		  $('.menuButton').addClass('MenuslideClose').removeClass('MenuslideOpen');
		}
		if (jQuery(window).width() < 1200 && jQuery(window).height() > 0) {
			jQuery('.menuButton').css('opacity','1');
			
		}  		

	});

	if (jQuery(window).width() < 1200 && jQuery(window).height() > 0) {
        jQuery('.menuButton').css('opacity','1');
		
    }  
		jQuery(window).resize(function () {
				if (jQuery(window).width() < 1200 && jQuery(window).height() > 0) {
				jQuery('.menuButton').css('opacity','1');
				}
				else{
				jQuery('.menuButton').css('opacity','0');
				}
		});	

//menu button
$('.menuButton').click(function(){
	$('.menuFullScreen').removeClass('menuNone');
		$('.menuFullScreen .right').addClass('RightslideOpen').removeClass('RightslideClose');
		$('.menuFullScreen .left').addClass('LeftslideOpen').removeClass('LeftslideClose');	

});

	
		$('.menuFullScreen .right .close').click(function(){
				$('.menuFullScreen .right').addClass('RightslideClose').removeClass('RightslideOpen');
			$('.menuFullScreen .left').addClass('LeftslideClose').removeClass('LeftslideOpen');
			setTimeout(function () {
				$('.menuFullScreen').addClass('menuNone');
			}, 1500);
	});



// navbar's end
$('.miles-right .mileslink').mouseenter(function(){
	$(this).find('.text').addClass('godownEle').removeClass('goupinEle');	
	$(this).find('.overlay').css('opacity','0');
});
$('.miles-right .mileslink').mouseleave(function(){
	$(this).find('.text').addClass('goupinEle').removeClass('godownEle');
	$(this).find('.overlay').css('opacity', '0.3');	
});
$('.epicbg .mileslink').mouseenter(function(){
	$(this).find('.text').addClass('godownEle').removeClass('goupinEle');
	$(this).find('.overlay').css('opacity', '0');	
});
$('.epicbg .mileslink').mouseleave(function(){
	$(this).find('.text').addClass('goupinEle').removeClass('godownEle');
	$(this).find('.overlay').css('opacity', '0.3');	
});
$('.package.alsoLike .pushs a').mouseenter(function(){
	$(this).find('.txt').addClass('godownEle').removeClass('goupinEle');
	$(this).find('.overlay').css('opacity', '0');	
});
$('.package.alsoLike .pushs a').mouseleave(function(){
	$(this).find('.txt').addClass('goupinEle').removeClass('godownEle');
	$(this).find('.overlay').css('opacity', '0.3');	
});

// Modal video
 var url = $("#cartoonVideo").attr('src');
   $("#cartoonVideo").attr('src', '');
    $("#videoHome").on('shown.bs.modal', function(){
        $("#cartoonVideo").attr('src', url);
    });
	 $("#videoHome").on('hide.bs.modal', function(){
        $("#cartoonVideo").attr('src', '');
    });
	
	// Map Links

$('.destination .container .map .links a').mouseenter(function(){
	var linkAttr = $(this).attr('data-id');
	$('.destination .container .map .continents img').filter('[data-cont='+linkAttr+']').css('opacity','1');
	
});
$('.destination .container .map .links a').mouseleave(function(){
	var linkAttr = $(this).attr('data-id');
	$('.destination .container .map .continents img').filter('[data-cont='+linkAttr+']').css('opacity','0');
	
});

//slidebar mouseover links
$('.menuFullScreen .right nav a').mouseover(function(){
	var sideLink = $(this).attr('data-sidelink');
	$(this).css('color','#53af3a');
	$('.menuFullScreen .left .moreItems .moreItem').css('display','none');
	$('.menuFullScreen .left .moreItems .moreItem').filter('[data-linkside=' + sideLink + ']').css('display','contents');

});
$('.menuFullScreen .right nav a').mouseleave(function(){
	var sideLink = $(this).attr('data-sidelink');
	$(this).css('color','white');
	//$('.selected').css('color', '#53af3a');
	
});

// select box
 $('.item-filter-select').on('change', function () {
        if (this.value == 'all') {
            $('.item').show();
        }else{
            var elems = $('.item[data-type="'+this.value+'"]');
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
	
//chart	

	
	});