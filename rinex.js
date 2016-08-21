chrome.tabs.onCreated.addListener(function(tab) {
    if (
        tab.url == 'chrome://newtab/' ||
        tab.url == 'chrome://newtab' ||
        tab.url == 'newtab'
    ) {
        chrome.tabs.remove(tab.id, function() {});
        chrome.tabs.create({
            'url': 'http://over.ge/index.html'
        }, function() {});
    }
});
