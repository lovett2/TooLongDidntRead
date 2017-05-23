// content.js

//needed info for getting the highlighted text.
chrome.runtime.sendMessage({
    'title': document.title,
    'url': window.location.href,
    'summary': window.getSelection().toString()
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      // This line is new!
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }else if(request.message === "summarize") {
	  //TODO collect text from browser
	  //TODO summarize collected text
  	}
  }
);
