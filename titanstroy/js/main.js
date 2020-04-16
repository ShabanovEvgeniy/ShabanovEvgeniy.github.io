
// ---------------- slick -------------------///

$('.slider').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 770,
            settings: {
                arrows: false,
                dots: true,

            }
        }

    ],


});

// ------------------burger---------------- ////

$('.header__menu-list').slicknav({

    appendTo: '.boorger__items',
    label: ' ',

});

// --------------------Modal windows------------------------------------------//

let buttonForm = document.querySelector('.btn-form');
let allButton = document.getElementsByClassName('btn__click')
let contactForm = document.querySelector('#contact-form')
let btnCloseForm = document.querySelector('.form-contanct__close')

console.log(allButton);
console.log(btnCloseForm);


for (i = 0; i < allButton.length; i++) {
    allButton[i].onclick = () => {
        contactForm.style.display = 'flex'
    }

}

btnCloseForm.onclick = () => {

    contactForm.style.display = 'none'

}


// ----------------- modal end -------------------//









// -----------------------form------------------------//

$("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
    }).done(function () {



        alert("Спасибо за ваше обращение! Мы вам перезвоним !");
        contactForm.style.display = 'none'




        setTimeout(function () {
            // Done Functions
            th.trigger("reset");
        }, 1000);
    });
    return false;
});




