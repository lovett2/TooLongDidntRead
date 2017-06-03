// content.js

//passes the page title and url upon load
chrome.runtime.sendMessage({
    'title': document.title,
    'url': window.location.href
});