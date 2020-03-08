$(document).ready(function(){

// Navbar
	$(window).scroll(function() {
		var height = $(window).scrollTop();
	  if(height > 100) {
			$('.menuButton').css('opacity','1');
		} else {
			$('.menuButton').css('opacity','0');
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
	$('.menuFullScreen').show();
	$('.menuFullScreen .right').addClass('RightslideForwards').removeClass('RightslideReverse');
	$('.menuFullScreen .right').css('animation-name','RightSlide');
	$('.menuFullScreen .left').addClass('LeftslideForwards').removeClass('LeftslideReverse');	
	$('.menuFullScreen .left').css('animation-name','LeftSlide');
//	$('.menuFullScreen .left').addClass('LeftslideReverse').removeClass('LeftslideForwards');
//	$('.menuFullScreen .right').addClass('RightslideReverse').removeClass('RightslideForwards');

});
$('.menuFullScreen .right .close').click(function(){
	$('.menuFullScreen').hide("slow", function(){
	 $('.menuFullScreen .left').addClass('LeftslideReverse').removeClass('LeftslideForwards');
	 $('.menuFullScreen .right').addClass('RightslideReverse').removeClass('RightslideForwards');
	});	
});

// navbar's end
$('.miles-right .mileslink').mouseenter(function(){
$(this).find('.text').css('opacity','0');	
});
$('.miles-right .mileslink').mouseleave(function(){
$(this).find('.text').css('opacity','1');	
});
$('.epicbg .mileslink').mouseenter(function(){
$(this).find('.text').css('opacity','0');	
});
$('.epicbg .mileslink').mouseleave(function(){
$(this).find('.text').css('opacity','1');	
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
	$('.menuFullScreen .left .moreItems .moreItem').css('opacity','0');
	$('.menuFullScreen .left .moreItems .moreItem').filter('[data-linkside='+sideLink+']').css('opacity','1');
});
$('.menuFullScreen .right nav a').mouseleave(function(){
	var sideLink = $(this).attr('data-sidelink');
	$(this).css('color','white');
});

// select box
 $('.item-filter-select').on('change', function () {
        if (this.value == 'all') {
            $('.item').show();
        }else{
            var elems = $('.item[data-type="'+this.value+'"]');
            $('.item').not(elems).hide();
            elems.show();
        }
    });
	
	
});