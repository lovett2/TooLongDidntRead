//called onload of the window popup
function getPageDetails(callback) {
    browser.tabs.executeScript(null, { file: 'content.js' });
    browser.runtime.onMessage.addListener(function(message)  {
        callback(message);
    });
};
