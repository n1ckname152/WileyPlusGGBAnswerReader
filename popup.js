document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#openQuestion').addEventListener('click', onclickopen, false)
    document.querySelector('#showSolution').addEventListener('click', onclicksol, false)

}, false)



function onclickopen() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { instruction: "newTabGGB" }, function (newurl) {
            chrome.tabs.create({ url: newurl.url });
        });
    });
};

function onclicksol() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { instruction: "showSolutionGGB" });
    });
};