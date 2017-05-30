// content.js

//needed info for getting the highlighted text.
browser.runtime.sendMessage({
    'title': document.title,
    'url': window.location.href,
    'summary': window.getSelection().toString()
});
