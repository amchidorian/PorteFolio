$(document).ready(function () {
    var winH = $(window).height();
    var aboutGridW = $('.about_grid').width();
    $('.about_section').height(winH);
    $('.segment_about').height($(window).height());
    var rowNameH = $('.row_name').height();
    var rowNameW = $('.row_name').width();
    var rowAboutH = $('.row_about').height();
    var nameAboutW = $('.about_name').width();
    $('.row_about').css({top: winH / 2 - rowAboutH / 2 - rowNameH});
    var rowAboutT = $('.row_about').position().top;
    $('.row_name').css({top: rowAboutT / 2 - rowNameH / 2});
    textAnimation();
    // $('.row_name').css({left: aboutGridW / 2 - nameAboutW / 2});
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