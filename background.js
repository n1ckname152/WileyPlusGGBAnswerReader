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
  script.textContent = `ggbApplet.setValue('showsolution', 'true'); ggbApplet.setHeight(800);`;
  (document.head || document.documentElement).appendChild(script);
  script.remove();
}

