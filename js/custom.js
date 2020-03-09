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
        }
    });
	

// 3D Mouse Effects
	(function() {
  var container = document.getElementById("container"),
    inner = document.getElementById("inner");

  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function(event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function() {
      return "(" + this.x + ", " + this.y + ")";
    }
  };

  mouse.setOrigin(container);

  //-----------------------------------------

  var counter = 0;
  var updateRate = 10;
  var isTimeToUpdate = function() {
    return counter++ % updateRate === 0;
  };

  //-----------------------------------------

  var onMouseEnterHandler = function(event) {
    update(event);
  };

  var onMouseLeaveHandler = function() {
    inner.style = "";
  };

  var onMouseMoveHandler = function(event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  //-----------------------------------------

  var update = function(event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inner.offsetHeight / 2).toFixed(2),
      (mouse.x / inner.offsetWidth / 2).toFixed(2)
    );
  };

  var updateTransformStyle = function(x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTransform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };

  //-----------------------------------------

  container.onmouseenter = onMouseEnterHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmousemove = onMouseMoveHandler;
})();


});