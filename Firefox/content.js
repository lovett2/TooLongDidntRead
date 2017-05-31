// content.js

//passes the page title and url upon load
browser.runtime.sendMessage({
    'title': document.title,
    'url': window.location.href
});
