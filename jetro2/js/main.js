$('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider__menu',
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button class="slick-prev slick-arrow"><img src="images/prev-arrow.png" alt=""></button>',
    nextArrow: '<button class="slick-next slick-arrow"><img src="images/next-arrow.png" alt=""></button>',
    responsive: [
        {
            breakpoint: 520,
            settings: {
                arrows: false,

            }
        }
    ]
});

$('.slider__menu').slick({
    slidesToShow: 6,
    asNavFor: '.slider__inner',
    focusOnSelect: true,
    variableWidth: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 520,
            settings: {
                arrows: false,
                infiniti: true,
                autoplay: true,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 450,
            settings: {
                arrows: false,
                slidesToShow: 2,
            }
        }
    ]

});

let a = document.querySelector('.header__nav-btn');
let b = document.querySelector('.header__nav-items');

a.onclick = () => {

    b.style.display = "block";
}