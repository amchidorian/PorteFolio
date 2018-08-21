$(document).ready(function () {
    var winH = $(window).height();
    var winW = $(window).width();
    $('.sticky_navbar').width(winW);
    var timeOut = setTimeout(function () {
        if (timeOut) {
            $('.sticky_navbar').transition('fade');
            $('.ui.sticky').sticky({context: '#context'});
            clearTimeout(timeOut);
        }
    }, 500);
});


function ajustContent() {

}