$(document).ready(function () {
    var winW = $(window).width();
    $('.sticky_navbar').width(winW);
    var timeOut = setTimeout(function () {
        if (timeOut) {
            $('.sticky_navbar').transition('fade');
            $('.ui.sticky').sticky({context: '#context'});
            var navH = $('.navbar').height();
            $(".navbar_section").height(navH)
            var winH = $(window).height();
            var navH = $('.navbar_section').height();
            $('.about_section').height(winH-navH);
            clearTimeout(timeOut);
        }
    }, 500);
});


function ajustContent() {

}