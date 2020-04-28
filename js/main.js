$(document).ready(function() {
    "use-strict";
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    })
    /*Url jumping*/
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000., "easeOutExpo");
                    return false;
                }
            }
        });
    });
    // Owl Carousel
    $(document).ready(function() {
        $("#owl-demo").owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true
            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
        });
    });
    // Animate and WOW Animation
    var wow = new WOW({
        offset: 50,
        mobile: false,
        live: true
    });
    wow.init();
    // Prettyphoto Installation
    $(document).ready(function() {
        $("a[class^='prettyPhoto']").prettyPhoto();
    });
    // slick question
    $('.question').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true, //自動播放
        cssEase: 'linear'
    });
});
$(function() {
    // header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) { /* 要滑動到選單的距離 */
            $('.navbar-default ').addClass('navbarfixed'); /* 幫選單加上固定效果 */
        } else {
            $('.navbar-default ').removeClass('navbarfixed'); /* 移除選單固定效果 */
        }
    });

    // 
    $('.list_slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        pauseOnHover: true,//滑鼠移過後暫停自動撥放
        arrows: true,
        // autoplay: true,
    });
    // 
    $('.customer_case_slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        pauseOnHover: true,//滑鼠移過後暫停自動撥放
        arrows: true,
        // autoplay: true,
    });
});