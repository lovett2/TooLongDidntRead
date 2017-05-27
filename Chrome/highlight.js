function onPageDetailsReceived(details) {
	
	var curURL = details.url;
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
  			} else if (xhr.status == 403) {
  				document.getElementById('summaryText').innerText =  "Time out... Try again in a couple of seconds.";
  			}
  		}
	}
}

window.addEventListener('load', function(evt) {
    chrome.runtime.getBackgroundPage(function(eventPage) {
        eventPage.getPageDetails(onPageDetailsReceived);
    });
});

