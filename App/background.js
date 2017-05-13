// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

// This block is new!
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
    else if (request.type === 'request_password') {
      chrome.tabs.create({
          url: chrome.extension.getURL('dialog.html'),
          active: false
      }, function(tab) {
          // After the tab has been created, open a window to inject the tab
          chrome.windows.create({
              tabId: tab.id,
              type: 'popup',
              focused: true,
              left: 1000,
              width: 300
              // incognito, top, left, ...
          });
      });
    }
  }
);

function setPassword(password) {
    // Do something, eg..:
    console.log(password);
};