(function () {
  function parse(val) {
    var result = undefined,
      tmp = [],
      items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
      tmp = items[index].split("=");
      if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
    }
    return result;
  }

  var randomNum = Math.floor(3 * Math.random() + 1);
  var message = parse("mensagem");
  var template = parse("template");
  var botVersion;
  if (message) {
    botVersion = template;
  }

  var url =
    "https://dtbot.directtalk.com.br/1.0/staticbot/dist/js/dtbot.js?token=10cb1aae-5882-469b-938f-6b4b89fbcf80&widget=true&top=40&text=Alguma%20d%C3%BAvida%3F&textcolor=ffffff&bgcolor=4E1D3A&from=bottomRight";

  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  //   link.href = "style.css";
  link.href =
    "https://www7.directtalk.com.br/clientes/custom/Product/style.css";
  document.body.appendChild(link);

  var script = document.createElement("script");
  script.setAttribute("id", "dtbot-script"),
    (script.src = url),
    document.body.appendChild(script);

  var customLauncher;
  var src;
  var isBotLoaded = function () {
    if (window.DTBOT && window.DTBOT.loaded) {
      var firstopen = false;

      document.body.insertAdjacentHTML(
        "beforeend",
        "<div id='bot'><span id='bot-span'></span></div>"
      );

      (customLauncher = document.querySelector("#bot")),
        customLauncher.addEventListener("click", function () {
          src = document.querySelector("#dt-widget").src;

          if (src.split("?").length == 2) {
            var testeSplit = src.split("?");
            testeSplit = testeSplit[1];
            window.DTBOT.start("&" + testeSplit);
          } else {
            window.DTBOT.start();
          }
        });

      window.DTBOT.onShow = function () {
        customLauncher.style.visibility = "hidden";
        firstopen = true;
      };

      window.DTBOT.onHide = function () {
        //MUDAR AQUI PARA O ANTIGO E NOVO!
        customLauncher.style.visibility = "visible";
      };

      clearInterval(refreshIntervalId);
    }
  };

  var refreshIntervalId = setInterval(isBotLoaded, 120);
})();
