chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  //console.log(request);
  if (request.instruction == "newTabGGB") {
    console.log(getURL())
    sendResponse({ url: getURL() })

  } else if (request.instruction == "showSolutionGGB") {
    showSolution();
  }
})

function getURL() {
  return $("[id*=learnosity")[0]["src"];
}

function showSolution() {
  var script = document.createElement('script');
  var applet = $("[data-param-id]")
  var elementID = applet.attr('id')

  script.textContent = elementID + `.setValue('showsolution', 'true'); `+ elementID + `.setHeight(1000);`;
  (document.head || document.documentElement).appendChild(script);
  script.remove();
}

