// background.js

function scrapeAPI(){
	var xhr = new XMLHttpRequest();
	var myURL = "http://boilerpipe-web.appspot.com/extract?output=text&url=https://www.nytimes.com/2017/05/25/world/europe/manchester-bombing-leaks-donald-trump.html";

	xhr.open('GET', myURL, true);
	xhr.send();
	xhr.addEventListener("readystatechange", processRequest, false);
	function processRequest(e){
  		if(xhr.readyState == 4){
				var response =xhr.responseText;
		  		//console.log(response);
		  		//alert(response);
  		}
	}
	return response;
}
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
      	});
  	});
  }
});
