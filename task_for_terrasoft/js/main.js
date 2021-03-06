;(function ($) {
    $(document).ready(function () {

        $('.slider').slick({
            dots: false,
            arrows: false,
            focusOnSelect: true,
            autoplay: true,
            centerMode: true,
            autoplaySpeed: 2000,
            centerPadding:'0px',
            infinite: false,
            edgeFriction: '0.5',
            pauseOnDotsHover: true,
            cssEase: 'ease-in',
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        arrows: false,
                        dots: false

                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: true,
                        dots: false

                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        arrows: true,
                        dots: false

                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                        dots: true

                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        arrows: false,
                        dots: true

                    }
                }
            ]
        });


        $(document).ready(function(){
            var touch = $('#mobile_menu');
            var menu = $('.basic_menu');

            $(touch).on('click', function(e) {
                e.preventDefault();
                menu.slideToggle();
            });
            $(window).resize(function(){
                var wid = $(window).width();
                if(wid > 768 && menu.is(':hidden')) {
                    menu.removeAttr('style');
                }
            });
        });


        $('.header__menu--mini').on('click', function () {
            $(this).next().slideToggle(200);
            $('.overlay').show();
        });
        $('.overlay').on('click', function () {
            $('.header__menu').slideUp(200);
            $(this).hide();
        });


        $('.menu-about').click(function () {
            $('.overlay').trigger('click');
            $('html, body').animate({
                scrollTop: $('.about-us').offset().top
            }, 300);
        });


        $('.menu-services').click(function () {
            $('.overlay').trigger('click');
            $('html, body').animate({
                scrollTop: $('.our-services').offset().top
            }, 300);
        });

        $('.menu-works').click(function () {
            $('.overlay').trigger('click');
            $('html, body').animate({
                scrollTop: $('.works').offset().top
            }, 300);
        });

        $('.menu-contacts').click(function () {
            $('.overlay').trigger('click');
            $('html, body').animate({
                scrollTop: $('.footer').offset().top
            }, 300);
        });


        $('.scroll-top').click(function () {
            $('.overlay').trigger('click');
            $('html, body').animate({
                scrollTop: 0
            }, 300);
        });


    });
})(jQuery);