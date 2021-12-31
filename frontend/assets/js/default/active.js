(function ($) {
    'use strict';

    var newstenWindow = $(window);
    var sideNavWrapper = $("#sidenavWrapper");
    var blackOverlay = $(".sidenav-black-overlay");

    // :: Preloader
    newstenWindow.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // :: Navbar
    $("#newstenNavbarToggler").on("click", function () {
        sideNavWrapper.addClass("nav-active");
        blackOverlay.addClass("active");
    });

    $("#goHomeBtn").on("click", function () {
        sideNavWrapper.removeClass("nav-active");
        blackOverlay.removeClass("active");
    });

    blackOverlay.on("click", function () {
        $(this).removeClass("active");
        sideNavWrapper.removeClass("nav-active");
    })

    // :: Comment Reply Form
    $(".reply-comment-btn").on("click", function () {
        $(".reply-comment-form").toggleClass("show");
    });

    // :: Hero Slides
    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.hero-slides');
        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: false,
            margin: 0,
            nav: false,
            smartSpeed: 1000,
            autoplayTimeout: 5000
        })
    }

    // :: Catagory Slides
    if ($.fn.owlCarousel) {
        var catagorySlide = $('.catagory-slides');
        catagorySlide.owlCarousel({
            items: 3,
            margin: 15,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            autoplayTimeout: 3000,
            dots: false,
            nav: false
        })
    }

    // :: Editorial Slides
    if ($.fn.owlCarousel) {
        var editorialslides = $('.editorial-choice-news-slide');
        editorialslides.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            autoplayTimeout: 5000,
            dots: true,
            nav: false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        })
    }

    // :: Owl Carousel Slides
    if ($.fn.owlCarousel) {
        var newstenowlslides = $('.newsten-owl-carousel-slides');
        newstenowlslides.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            autoplayTimeout: 5000,
            dots: true,
            nav: true,
            navText: [('<i class="fa fa-angle-left"></i>'), ('<i class="fa fa-angle-right"></i>')]
        })
    }

    // :: Tooltip
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // :: Jarallax
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.5
        });
    }

    // :: Counter Up
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 150,
            time: 3000
        });
    }

    // :: Prevent Default 'a' Click
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // :: Password Strength Active Code
    if ($.fn.passwordStrength) {
        $('#registerPassword').passwordStrength({
            minimumChars: 8
        });
    }

    // :: Animated Headline Active Code
    if ($.fn.animatedHeadline) {
        $('.built-with-selector').animatedHeadline();
    }
    
})(jQuery);