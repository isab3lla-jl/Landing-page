$(window).on("load", function(){
    /*------- Preloader -------*/
    $(".preloader").fadeOut("slow");
});

$(document).ready(function() {
    /*------- Navbar Shrink -------*/
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }
        else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    /*------- Video Popup -------*/
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src","");
        }
        else{
            $(".video-popup").addClass("open");
            if($("#player-1").attr("src")==""){
                $("#player-1").attr("src", videoSrc);
            }
        }
    });
    /*------- Features Carousel -------*/
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
    /*------- Screenshots Carousel -------*/
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });
    /*------- Testimonials Carousel -------*/
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
    /*------- Team Carousel -------*/
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
    /*------- Page Scrolling -------*/
    $.scrollIt({
        topOffset: -50
    });
    /*------- Navbar Collapse -------*/
    $(".nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    });
    /*------- Toggle Theme -------*/
function toggleTheme() {
    // Check if the theme is already set in localStorage
    if (localStorage.getItem("shala-theme") !== null) {
        if (localStorage.getItem("shala-theme") === "dark") {
            $("body").addClass("dark");
        } else {
            $("body").removeClass("dark");
        }
    } else {
        // Set a default theme if not present
        localStorage.setItem("shala-theme", "light");
    }
    updateIcon();
}
toggleTheme();

// Handle theme toggle click
$(".toggle-theme").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
        localStorage.setItem("shala-theme", "dark");
    } else {
        localStorage.setItem("shala-theme", "light");
    }
    updateIcon();
});

// Update the toggle icon
function updateIcon() {
    if ($("body").hasClass("dark")) {
        $(".toggle-theme i").removeClass("fa-moon").addClass("fa-sun");
    } else {
        $(".toggle-theme i").removeClass("fa-sun").addClass("fa-moon");
    }
}

    /*------- Toggle Theme -------
    function toggleTheme(){
        if(localStorage.setItem("shala-theme") !== null){
            if(localStorage.getItem("shala-theme") === "dark"){
                $("body").addClass("dark");
            }
            else{
                $("body").removeClass("dark");
            }
        }
        updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click", function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
            localStorage.setItem("shala-theme", "dark");
        }
        else{
            localStorage.setItem("shala-theme", "light");
        }
        updateIcon();
    });
    function updateIcon(){
        if($("body").hasClass("dark")){
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }
        else{
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }*/
});