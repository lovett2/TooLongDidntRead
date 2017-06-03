// background.js

function onPageDetailsReceived(details) {
  var curURL = details;
  var myURL = "http://boilerpipe-web.appspot.com/extract?output=text&url=";
  var xhr = new XMLHttpRequest();
  xhr.open('GET', myURL+curURL, true);
  xhr.send();
  xhr.addEventListener("readystatechange", processRequest, false);
  var response = ""
  function processRequest(e){
      if(xhr.readyState == 4){
        if (xhr.status == 200) {
        document.getElementById('summaryText').innerText =  xhr.responseText;
        } else {
          // alert(myURL+curURL);
          // alert(xhr.status);
          document.getElementById('summaryText').innerText =  "Oops, something went wrong. Close extension and try again in a few seconds.";
        }
      }
  }
}



// Called when the user clicks on the browser action.
browser.browserAction.onClicked.addListener(function(tab) {
  // alert(tab.url);
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
  }
});

browser.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    browser.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});


browser.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      browser.tabs.create({
        url: browser.extension.getURL('dialogue.html'),
        active: false
      }, function(tab) {
        // After the tab has been created, open a window to inject the tab
        displayTab = tab.id;
        browser.windows.create({
          tabId: tab.id,
          type: 'panel',
          left: 1000,
          width: 500,
          height: 600,
        });
        console.log(request.url);
        tab.onPageDetailsReceived(request.url);
      });
    }
  }
);