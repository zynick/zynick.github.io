(function () {

  // replace email to avoid email scrapers
  var em = [['com', 'zynick'].reverse().join('.'), 'me'].reverse().join('@');
      em = [[em, 'to'].reverse().join(':'), 'mai'].reverse().join('l');
  document.getElementById("eml").href = em;

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