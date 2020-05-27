$('.dropdown').on('show.bs.dropdown', function(e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});

$('.dropdown').on('hide.bs.dropdown', function(e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
});

function navbarFixed() {
    if ($('.navbar-default').length) {
        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 295) {
                $(".navbar-default").addClass("navbar_fixed");
            } else {
                $(".navbar-default").removeClass("navbar_fixed");
            }
        });
    };
};
navbarFixed();

function preloader() {
    if ($('.preloader').length) {
        $(window).on('load', function() {
            $('.preloader').addClass('d-none');

        })
    }
}

preloader();

function portfolio_init(type = 'fitRows', className = '.grid') {
    let $grid = $(className).isotope({
        percentPosition: true,
        transitionDuration: '0.7s',
        layoutMode: type,
        masonry: {
            columnWidth: '.resizer',
        }
    });

    // bind sort button click
    $('.filters li').on('click', function() {
        $(".filters li").removeClass("active");
        $(this).addClass("active");
        let filterValue = $(this).attr('data-filter');

        if (filterValue === '*') {
            $grid.isotope({
                filter: filterValue
            });

        } else {
            $grid.isotope({
                filter: '.' + filterValue
            });

        }

    });
}

$(window).on('load', function() {
    portfolio_init('masonry', '.grid-masonry');
    portfolio_init('fitRows');
})

$(document).ready(function() {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.team-modern-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    var TestimonailModern = new Swiper('.testimonial-container-modern', {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: 'testimonial-container-modern-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonial-style-one-btn-next',
            prevEl: '.testimonial-style-one-btn-prev',
        },
    })

    var TestimonailStyleThree = new Swiper('.testimonial-container-style-three', {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonial-modern-btn-next',
            prevEl: '.testimonial-modern-btn-prev',
        },
    })

    var TeamSingleCarousel = new Swiper('.team-single-one-education-carousel', {
        slidesPerView: 3,
        spaceBetween: 100,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.team-single-one-education-btn-next',
            prevEl: '.team-single-one-education-btn-prev',
        },
    })

    var TeamSingleCarousel = new Swiper('.team-single-one-experience-carousel', {
        slidesPerView: 3,
        spaceBetween: 100,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.team-single-one-experience-btn-next',
            prevEl: '.team-single-one-experience-btn-prev',
        },
    })

    var LatestPostModern = new Swiper('.latest-post-modern', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.latest-post-modern-btn-next',
            prevEl: '.latest-post-modern-btn-prev',
        },
    })

    new Swiper('.carousel-style-one', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    new Swiper('.carousel-style-gallery', {
        slidesPerView: 4,
        spaceBetween: 40,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    new Swiper('.carousel-adjust-col-spac', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    $('.video-view').magnificPopup({
        type: 'iframe',
    });
});

/*======================= 
	01. Wow Active 
======================*/

new WOW().init();


/*==================================
	02. Counter Up
===================================*/

$('.counter').counterUp({
    delay: 40,
    time: 1000
});


$("#openSearch").click(function() {
    $("#myOverlay").css("display", "block");
})

$(".closeSearch").click(function() {
    $("#myOverlay").css("display", "none");
})



// Navbar Menu

$('.open-mobile-menu').on('click', () => {
    open_mobile_menu()
})

function open_mobile_menu() {
    $('.mobile-menu-wrapper').addClass('popup-mobile-menu-wrapper')

}

$('.mobile-close').on('click', () => {
    close_mobile_menu()
})

function close_mobile_menu() {
    if ($('.mobile-menu-wrapper').hasClass('popup-mobile-menu-wrapper')) {
        $('.mobile-menu-wrapper').removeClass('popup-mobile-menu-wrapper')
    }

}


$('.sidebar-mobile-menu-content').find('.dropdown').each(() => {
    console.log(this)
    $(this).on('click', (el) => {
        console.log(el.target)
        // if($(el).find('.dropdown-menu').hasClass('d-block')){
        //     $(el).find('.dropdown-menu').removeClass('d-block')
        // }else{
        //     $(el).find('.dropdown-menu').addClass('d-block')
        // }
    })
})

// Navbar Toggler

document.querySelector(".navbar-toggler").onclick = () => {
    document.querySelector(".navbar-collapse").classList.toggle('open');
}


// Navbar Search

document.querySelector("#toggle-search").onclick = () => {
    document.querySelector("#navbar-search").classList.toggle('show');
}
document.querySelector(".close-search-box").onclick = () => {
    document.querySelector("#navbar-search").classList.toggle('show');
}
