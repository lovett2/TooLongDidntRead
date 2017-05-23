// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {

  //When browser button is pressed use content.js to get selected
  //text, then pass that text to a pop up window for display.


  //Open new window with short text
  function displaySummary(shortText){
	chrome.tabs.create({
      url: chrome.extension.getURL('dialogue.html'),
      active: false
  	}, function(tab) {
      // After the tab has been created, open a window to inject the tab
		 displayTab = tab.id;
	 	chrome.windows.create({
        	  tabId: tab.id,
          	  type: 'panel',
          	  focused: true,
          	  left: 1000,
          	  width: 500,
          	  height: 600,
          	  // incognito, top, left, ...
      	});
  	});
	//TODO edit dialogue.html with summary text
  }

  //Get text from tab containing selection.
  chrome.tabs.sendMessage(tab.id, {text: 'summarize'}, displaySummary);

});
