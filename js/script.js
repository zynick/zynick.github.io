(function () {

    // replace email to avoid email scrapers
    var cls = document.getElementById("eml");
    var em = [['com', 'zynick'].reverse().join('.'), 'me'].reverse().join('@');
        em = [[em, 'to'].reverse().join(':'), 'mai'].reverse().join('l');
    cls.href = em;

    // feature detection for video autoplay (from Modernizr)
    // this removes the video from devices like iPhones that can't play it (it's meant as a background, not a focus)
    (function() {
        var timeout;
        var waitTime = 1000;
        var elem = document.getElementById('bgv');

        var autoplayWorks = function() {
            clearTimeout(timeout);
            elem.style.display = 'block';
        };

        var noAutoplay = function () {
            elem.style.display = 'none';
        };

        elem.addEventListener('playing', autoplayWorks);
        timeout = setTimeout(noAutoplay, waitTime);
    })();

    // just for fun
    var cat = 
          "    _                        \n"
        + "    \`*-.       *meow*       \n"
        + "     )  _`-.                 \n"
        + "    .  : `. .                \n"
        + "    : _   '  \               \n"
        + "    ; *` _.   `*-._          \n"
        + "    `-.-'          `-.       \n"
        + "      ;       `       `.     \n"
        + "      :.       .        \    \n"
        + "      . \  .   :   .-'   .   \n"
        + "      '  `+.;  ;  '      :   \n"
        + "      :  '  |    ;       ;-. \n"
        + "      ; '   : :`-:     _.`* ;\n"
        + "      .*' /  .*' ; .*`- +'  `*' \n"
        + "   `*-*   `*-*  `*-*'        \n";
    console.log(cat);

})();