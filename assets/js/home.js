$(document).ready(function () {
    console.log($(window).height())
    $('.home_section').width($(window).width());
    $('.home_section').height($(window).height());

    console.log($('.home_section').height())
    ajustContent();
    resizeText();
    var timeOut = setTimeout(function () {
        if (timeOut) {
            $('.home_section').transition('fade');
            clearTimeout(timeOut);
        }
    }, 500);
    var timeOut1 = setTimeout(function () {
        if (timeOut1) {
            textAnimation()
            clearTimeout(timeOut1);
        }
    }, 1000);
    var timeOut2 = setTimeout(function () {
        if (timeOut2) {
            $('.home_button').transition('fly right');
            clearTimeout(timeOut2);
            var butH = $('.home_button').height();
            var textH = $('.home_text').height()
            $(".home_resume").height(butH + textH);
        }
    }, 2000);
    var timeOut3 = setTimeout(function () {
        if (timeOut3) {
            $('.home_button').transition('bounce');
        }
    }, 5000);
});

$(window).resize(function () {
    ajustContent();
    resizeText();
});

function ajustContent() {
    $('.home_resume').width(400);
    $('.home_resume').height(400);
    var sectionW = $('.home_section').width();
    var sectionH = $('.home_section').height();
    var textW = $(".home_resume").width();
    $(".home_resume").css({top: sectionH / 2 - 200});
    if (sectionW > 1000) {
        $(".home_resume").css({left: sectionW / 2 - textW});
    } else {
        $(".home_resume").css({left: sectionW / 2 - textW / 2});
    }
    return 1
}

function resizeText() {
    var winW = $(window).width();
    if (winW > 1200) {
        $(".home_text").css({'font-size': 30})
    } else if (winW < 1200 && winW > 992) {
        $(".home_text").css({'font-size': 28})
    } else if (winW < 992 && winW > 768) {
        $(".home_text").css({'font-size': 26})
    } else if (winW < 768 && winW > 600) {
        $(".home_text").css({'font-size': 24})
    } else if (winW < 600) {
        $(".home_text").css({'font-size': 22})
    }
}

//TEXT ANIMATION//
function textAnimation() {
    consoleText(['developpeur Full-Stack.'], 'text', ['rgba(0, 255, 219, 0.97)']);

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