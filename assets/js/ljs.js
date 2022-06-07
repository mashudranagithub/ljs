$(document).ready(function() {

    // Slider Start Here
    $('.owl-carousel.main-slider').owlCarousel({
        items: 1,
        merge: true,
        loop: true,
        autoplay: true,
        responsiveClass: true,
        autoplayHoverPause: true, // Stops autoplay
        responsiveRefreshRate: 10,
        autoplaySpeed: 2000,
        autoplayTimeout: 5000,
        // animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        smartSpeed: 500,
        margin: 10,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.single-slider').addClass('clear');

    // Slider End Here



    //jQuery Code for back to top Start Here

    $('#top').hide();

    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();

        var showScrollButton = 50;

        if (wScroll > showScrollButton) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }

    });
    //creating click function for back to top
    $('#top').click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });
    //jQuery Code for back to top End Here








    // News Slider Start Here

    $('.events-slider').owlCarousel({
        merge: true,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 10000,
        smartSpeed: 500,
        margin: 10,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        lazyLoad: true,
        center: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            },
            1366: {
                items: 3
            }
        }
    });









    //Code for sticky menu Start Here
    var x = $('.header-main').offset().top;

    $(window).scroll(function() {
        var y = $(window).scrollTop();

        if (y > x) {
            $('.header-main').addClass('sticky');
        } else {
            $('.header-main').removeClass('sticky');
        }
    });
    $('.header-main').wrapAll('<div class="cover">');
    // $('.cover').css('height', $('.header-main').outerHeight());
    $('.cover').css('height', '100px');
    // $('.cover').css('max-height', '90px');
    // $('.cover').css('height', 'auto');
    //Code for sticky menu End Here


    // $('.second-drop-menu').mouseenter(function(){
    //     $(this).children('.second-dropped-menu').slideDown(500);
    // });

    // $('.second-drop-menu').mouseleave(function(){
    //     $(this).children('.second-dropped-menu').slideUp(0);
    // });


    // Publication Height
    // var l_p_height = $('.latest-publication').innerHeight();
    // $('.publication-list').css('height', l_p_height);




    // Partners Slider Start here
    $('.owl-carousel.testimonial-slider').owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        responsiveClass: true,
        autoplayHoverPause: true, // Stops autoplay
        responsiveRefreshRate: 10,
        autoplaySpeed: 2000,
        autoplayTimeout: 10000,
        smartSpeed: 500,
        margin: 10,
        // nav:true,
        // navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            },
            1366: {
                items: 2
            },
        }
    });




    // Image gallery
    // $('.gallery a').simpleLightbox();
    $('.gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',

        // other options
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: 'title'
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });



    // Video Gallery
    $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Modal Popup
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });


    var container = $("#calendar").simpleCalendar({
        // ...
    });
    let $calendar = container.data('plugin_simpleCalendar')
    var events = [{
            startDate: 'Wed Jun 18 2022 01:21:14 GMT+0600 (Bangladesh Standard Time)',
            endDate: 'Wed Jun 29 2022 01:21:14 GMT+0600 (Bangladesh Standard Time)',
            summary: 'Visit of the Eiffel Tower'
        },
        {
            startDate: 'Wed Jun 18 2022 01:21:14 GMT+0600 (Bangladesh Standard Time)',
            endDate: 'Wed Jun 29 2022 01:21:14 GMT+0600 (Bangladesh Standard Time)',
            summary: 'My School Event'
        }
    ]
    $calendar.setEvents(events);



});

// Wow initialize
// new WOW().init();