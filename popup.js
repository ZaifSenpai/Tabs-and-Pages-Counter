
document.getElementById('shortcuts_link').onclick = function () {
    chrome.tabs.create({ url: "chrome://extensions/shortcuts" });
};
