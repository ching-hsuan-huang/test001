$(document).ready(function() {
    /*漢堡選單*/
    $('.dropdown').click(function(event) {
        event.preventDefault();
        $('.dropdown').toggleClass('active');
        $('.open').slideToggle();
    });
    $('.hamburger').click(function(event) {
        event.preventDefault();
        $('.hamburger').toggleClass('active');
        $('.menu').slideToggle();
    });
    $('.up').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });


    /*動態*/
    $(".heartBeat").click(function(e) {
        $(this).addClass("animate__animated animate__heartBeat");
    });
    $(".hover-jq").hover(function(e) {
        $(this).addClass("animate__animated animate__heartBeat");
    });


    /*font-size字型放大縮小按鈕效果*/
    /*字體放大*/
    $('.font-b').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $('.font_size_words p').css('font-size', '20px');
    });

    /*字體放中*/
    $('.font-m').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $('.font_size_words p').css('font-size', '16px');
    });

    /*字體放小*/
    $('.font-s').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $('.font_size_words p').css('font-size', '13px');
    });


    /*載入意見回饋*/

    $('.tell_me').click(function(e) {
        $(".display-none").stop().slideToggle(1000);
    });
    $('.subscaribe').click(function(e) {
        $(this).slideToggle(1000);
        $(".close").hide(1000);

    });

});