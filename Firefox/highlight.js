function onPageDetailsReceived(details) {
	document.getElementById('summaryText').innerText = details.summary;
}
window.addEventListener('load', function(evt) {
    browser.runtime.getBackgroundPage(function(eventPage) {
        eventPage.getPageDetails(onPageDetailsReceived);
    });
});
