$(document).ready(function () {
    let $btns = $('.button-group button');

    $btns.click(function (e) {
        $('.button-group button').removeClass('active');
        $(e.target).addClass('active');

        let selector = $(e.target).attr('data-filter');
        $('.grid').isotope({
            filter: selector
        });
        return false;
    });

    $('.grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    })

});
