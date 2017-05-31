// background.js

// Called when the user clicks on the browser action.
browser.browserAction.onClicked.addListener(function(tab) {

  //Open new window with short text
  function displaySummary(shortText){
    browser.tabs.create({
        url: browser.extension.getURL('dialogue.html'),
        active: false
      }, function(tab) {
      // After the tab has been created, open a window to inject the tab
        displayTab = tab.id;
        browser.windows.create({
          tabId: tab.id,
          type: 'panel',
          focused: true,
          left: 1000,
          width: 500,
          height: 600,
        });	
    });
});

