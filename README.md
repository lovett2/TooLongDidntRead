# TooLongDidntRead
TooLongDidntRead is a publicly maintained browser extension that allows you to summarize selected text.
- Developers
    - Cathy Webster
    - Kathryn Lovett
    - Peter Lovett
    - Wyatt Reed

## Table of Contents
- [System Requirements](#system-requirements)
- [Documentation](#documentation)
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

## Documentation
- You can read about our design [here](/Doc/design.md)
- Check out our tutorial [here](/Doc/tutorial.md)
- See documents on testing [here](/Doc/testing.md)

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

3: Click 'Load temporary add-on', navigate to '/TooLongDidntRead/Firefox' and select the file called 'manifest.json'

4: The extension is now installed

## License

[MIT](LICENSE)
