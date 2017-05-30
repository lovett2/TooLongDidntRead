# TooLongDidntRead
TooLongDidntRead is a publicly maintained browser extension that allows you to summarize selected text.
- Developers
    - Cathy Webster
    - Kathryn Lovett
    - Peter Lovett
    - Wyatt Reed

## Table of Contents
- [System Requirements](#system-requirements)
- [Technologies Used](#technologies-used)
- [Design](#design)
- [Installation](#installation)
- [License](#license)

## System Requirements
- App works on the following OSes:
	- Mac OS X El Capitan (10.11.6)
	- macOS Sierra Beta (10.12.4)
	- macOS Sierra
	- Ubuntu (16.04)
- When running the Chrome app:
	- Chrome version 58.0.3029.110 or above
	- Or Chromium version 58.0.3029.110
- When running the Firefox app:
	- Firefox version 53.0.3 or above

## Technologies Used
- Javascript, HTML, CSS
- [Summary tool](https://gist.github.com/shlomibabluki/5473521) adapted from python to javascript
- [boilerpipe](http://boilerpipe-web.appspot.com/) - page scraper API

## Design
- Minimal Viable Product
    - Chrome browser extension that allows user to select text and summarize it when the press the browser extension button
    - User first sees highlighted text in popup window, then can summarize it by pressing the button
- Future Versions 
    - Make the application all browser compatible
    - Potentially add functionality to export summary to other app (i.e., Twitter, Facebook, email, etc.)
- Key files for the application
    - content.js: code that interacts with webpages the browser visits
    - background.js: can access other APIs, such as the Chrome API, but not the current page
    - manifest.json: tells Chrome important information about the extension, like its name and which permissions it needs

## Installation
Currently there is only a Chrome implementation of the file extension. 

#### Install on Chrome by:
--------------

1: Clone the repository, 'git clone https://github.com/lovett2/TooLongDidntRead.git'

2: Open Chrome and enter the following into your URL, 'chrome://extensions/'

3: Ensure Developer mode is checked in the top right. Then select 'Load unpacked extension...'.

4: Select `Load unpacked extension' button, navigate to, '/TooLongDidntRead/Chrome' and hit enter.

5: If you refresh the page the extension should be installed.

#### Install on Firefox by:
--------------

1: Clone the repository, 'git clone https://github.com/lovett2/TooLongDidntRead.git'

2: Open Firefox and enter the following into your URL, 'about:debugging'

3: Click 'Load temporary add-on', navigate to '/TooLongDidntRead/Firefox' and hit enter

4: The extension is now installed

## License

[MIT](LICENSE)
