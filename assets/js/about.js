$(document).ready(function () {
    var timeOut = setTimeout(function () {
        if (timeOut) {
            var winH = $(window).height();
            var navbar = $(".navbar").height();
            var aboutSectionH = (winH - navbar) * 1.5;
            $('.about_section').height(aboutSectionH);
            $('.row_name').height(aboutSectionH * 0.1);
            $('.row_about').height(aboutSectionH * 0.4);
            $('.row_skills').height(aboutSectionH * 0.5);
            var rowSkillH = $('.row_skills').height();
            var rowAboutW = $('.row_about').width();
            $('.row_tab').width(rowAboutW * 0.9).css({left: (rowAboutW * .05), top: -50})
            $(".column_back").height(rowSkillH);
            $(".column_full_stack").height(rowSkillH);
            $(".column_front").height(rowSkillH);
            $(".back_head").height(rowSkillH / 3)
            $(".full_head").height(rowSkillH / 3)
            $(".front_head").height(rowSkillH / 3)
            $(".back_body").height(rowSkillH * 2 / 3)
            $(".full_body").height(rowSkillH * 2 / 3)
            $(".front_body").height(rowSkillH * 2 / 3)
            $(".skill_icon_front").css({left : ($(".skill_icon_front").parent().width())/2 - ($(".skill_icon_front").width()/2)})
            $(".skill_icon_back").css({left : ($(".skill_icon_back").parent().width())/2 - ($(".skill_icon_back").width()/2)})
            $(".skill_icon_full").css({left : ($(".skill_icon_full").parent().width())/2 - ($(".skill_icon_full").width()/2)})
            $(".front_head").css({top : 20})
            $(".back_head").css({top : 20})
            $(".full_head").css({top : 20})
            $(".about_name").css({top:50});
            $(".about_image").css({top : ($(".about_image").parent().height()/2) - ($(".about_image").height()/2),
                left : ($(".about_image").parent().width()/2) - ($(".about_image").width() /2)})
            textAnimation();
            clearTimeout(timeOut);
        }
    }, 600);
});

//TEXT ANIMATION//
function textAnimation() {
    consoleText(['Dorian AMCHI'], 'name', ['rgba(0, 255, 219, 0.97)']);

    function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['black'];
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])
        window.setInterval(function () {

            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount)
                window.setTimeout(function () {
                    var usedColor = colors.shift();
                    colors.push(usedColor);
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    target.setAttribute('style', 'color:' + colors[0])
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount)
                letterCount += x;
            }
        }, 120)
    }
}