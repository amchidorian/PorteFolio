$(document).ready(function () {
    var timeOut = setTimeout(function () {
        if (timeOut) {
            var winH = $(window).height();
            var winW = $(window).width();
            var navbarH = $(".navbar_section").height();
            var projet_section = winH - navbarH;
            var rowProjetH = projet_section * 5 / 6;
            var rowOptionH = projet_section / 6;
            var nbProjet = $(".projet").length - 1;
            var iconPrevH = $('.carrousel_icon_previous').height();
            var iconNextH = $('.carrousel_icon_next').height();
            var projetTitleH = $(".projet_option_title").height();
            var projetTitleW = $(".projet_option_title").width();
            var projetDropH = $(".projet_option_dropdown").height();
            var projetDropW = $(".projet_option_dropdown").width();
            var projetColTitleW = $(".column_projet_title").width();
            var projetColDropW = $(".column_projet_option").width();
            $(".projet").height(rowProjetH * 5 / 6);
            var projetH = $(".projet").height();
            $('.ui.dropdown').dropdown();
            $(".projet_section").height(projet_section);
            $(".row_option").height(rowOptionH).width(winW);
            $(".row_projet").height(rowProjetH).width(winW);
            $('.carrousel_icon_previous').attr('id', 'previous_projet_' + nbProjet);
            $('.carrousel_previous').height(iconPrevH);
            $('.carrousel_next').height(iconNextH);
            $('.column_projet').height(rowProjetH);
            $('.column_projet').css({top: rowProjetH / 2 - projetH / 2});
            $('.carrousel_icon_previous').css({top: rowProjetH / 2 - iconPrevH / 2});
            $('.carrousel_icon_next').css({top: rowProjetH / 2 - iconNextH / 2});
            $(".projet_option_title").css({top: rowOptionH / 2 - projetTitleH / 2, left : projetColTitleW/2 - projetTitleW/2});
            $(".projet_option_dropdown").css({top: rowOptionH / 2 - projetDropH / 2, left : projetColDropW/2 - projetDropW/2});
            clearTimeout(timeOut);
        }
    }, 600);
});

$(".carrousel_icon_previous").on('click', function () {
    var active_projet = $(".active_projet").attr('id');
    var nbProjet = $(".projet").length;
    var id = "";
    for (var i = 0; i < active_projet.length; i++) {
        if (!isNaN(parseInt(active_projet[i]))) {
            var id = id + active_projet[i];
        }
    }
    var newProjet = "";
    if (id == 0) {
        var newProjet = 'projet' + (parseInt(nbProjet) - 1);
    } else {
        var newProjet = 'projet' + (parseInt(id) - 1);
    }
    $(".active_projet").transition('fly right');
    $(".active_projet").removeClass('active_projet');
    $("#" + newProjet).addClass('active_projet');
    $("#" + newProjet).transition('fly left');
});

$(".carrousel_icon_next").on('click', function () {
    var active_projet = $(".active_projet").attr('id');
    var nbProjet = $(".projet").length;
    var id = "";
    for (var i = 0; i < active_projet.length; i++) {
        if (!isNaN(parseInt(active_projet[i]))) {
            var id = id + active_projet[i];
        }
    }
    var newProjet = "";
    if (id == (nbProjet - 1)) {
        var newProjet = 'projet0';
    } else {
        var newProjet = 'projet' + (parseInt(id) + 1);
    }
    $(".active_projet").transition('fly right');
    $(".active_projet").removeClass('active_projet');
    $("#" + newProjet).addClass('active_projet');
    $("#" + newProjet).transition('fly left');
});