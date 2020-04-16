$( function() {

    // init services tab
    $( '#services-tabs' ).tabs();
    $( '.portfolio-tabs' ).tabs();
    // init reviews-carousel 
    $( '.reviews-carousel' ).slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<div class="slick-prev slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-left"></i></div></div>', 
        nextArrow: '<div class="slick-next slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-right"></i></div></div>'
    });
    // slicknav menu
		$('.header__nav').slicknav({
            appendTo: '.header-wrapper',
            label: '',
            closeOnClick: false,
        });

});
