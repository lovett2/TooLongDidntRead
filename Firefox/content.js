// content.js

// var current;

// browser.tabs.query({currentWindow: true, active: true}, function(tabs){
//       console.log(tabs[0].url);
//       alert(tabs[0].url);
//       current = tabs[0].url;
// });

//passes the page title and url upon load
// browser.runtime.sendMessage({
//     'title': document.title,
//     'url': current
// });


browser.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");
   //    browser.tabs.query({currentWindow: true, active: true}, function(tabs){
	  //     console.log(tabs[0].url);
	  //     // alert(tabs[0].url);
	  //     // current = tabs[0].url;
	  //     alert("Open tab " + tabs[0].url);
	  //     // This line is new!
   //    	  browser.runtime.sendMessage({"message": "open_new_tab", "url": tabs[0].url});
	  // });
		alert(window.location.href);
		browser.runtime.sendMessage({"message": "open_new_tab", "url": window.location.href});
    }
  }
);