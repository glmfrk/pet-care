(function ($) {
    "use strict";

    // Add code here

    // $(document).ready(function () {

    // });

    // mobile dropdown menu

    let humbergerWpapper = $(".humberger-mobile-menu-wrapper");
    let humbergerAfter = $(".humberger-mobile-menu-wrapper::after");
    let sideBarMenu = $(".menu-container");

    $(".menu-bar > span").click(function () {
        humbergerWpapper.addClass("active");
        humbergerAfter.addClass("active");
        sideBarMenu.addClass("active");
    });
    $(".close-icon").click(function () {
        humbergerWpapper.removeClass("active");
        humbergerAfter.removeClass("active");
        sideBarMenu.removeClass("active");
    });

    $(".mobile-menu > li.active").click(function () {
        $(".mobile-menu > li > .sub-item").addClass("active");
        $(".mobile-menu > li > .sub-item").slideToggle(200);
    });

    $("select").niceSelect();

    $(".quantiy").counterUp({ time: 3000 });

    // ====================================
    //  Producto filtering
    // ====================================
    $(".isotope-menu li").on("click", function () {
        $(".isotope-menu li").removeClass("active");
        $(this).addClass("active");
        const selector = $(this).attr("data-filter");
        $("#isotope").isotope({
            filter: selector,
        });
    });

    // testimonial slider caro func

    $(".feedback-caro").owlCarousel({
        loop: true,
        margin: 30,
        center: true,
        autoplay: true,
        nav: true,
        dots: true,
        navText: [
            "",
            "Next Comment <img src='./assets/images/testimonial/long-right-arrow.svg'>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });
})(jQuery);
