
$(document).ready(function() {
	var click = false;
	init()
	var w = $(window).width();
});

function init(){
	//setCarouselSingle();
	afterglow.getPlayer('myvideo');
}

function setCarouselSingle(){
	var nav = ["<button><img src='assets/img/left-arrow.png'></button>", "<button><img src='assets/img/right-arrow.png'></button>"]
    var navC = '.navigasi-carousel';
	$('.carousel-single').owlCarousel({
	    margin:10,
	    autoHeight:true,
	    nav:true,
	    items:1,
	    navContainer: navC,
		navText: nav,
		dots: true
	})
}


$(document).click(function(e) {
    var target = e.target;
    if (!$(target).is('.search-btn') && !$(target).parents().is('.search-btn')) {
        $(".search-bar").removeClass('active')
        $("#search-form input").val("")
    }
});

$(window).on('load',function(){
	setCarouselSingle();
})