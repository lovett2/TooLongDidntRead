# TooLongDidntRead Design Documentation

## Table of Contents
- [Technologies Used](#technologies-used)
- [Architectual Design](#architectual-design)
- [Functionality](#functionality)
- [Known Issues](#known-issues)
- [Milestones](#milestones)

## Technologies Used
- Javascript
- [Summary tool](https://gist.github.com/shlomibabluki/5473521) adapted from python to javascript
- [boilerpipe](http://boilerpipe-web.appspot.com/): an API that provides algorithms to detect and remove the surplus "clutter" (boilerplate, templates) around the main textual content of a web page.

## Architectual Design
- The version for Chrome is located in "Chrome" folder and version for Firefox is located in "Firefox". README.md has some basic documentation; "Docs" folder contains design documentation and user tutorial. 
- dialog.html has the code that controls how the extension window looks. It references other css and javascript files that do most of the functionality.
    - background.js loads the window to display the highlighted text and summarized text.
    - button.js calls takes the highlighted text and sends it to the summarizer function.
    - content.js is the "backend" of the extension
    - event.js is called onload of window popup to execute content.js
    - highlight.js calls boilerpipe API to grab text content of the page
    - style.css defines the style for the window
- summary.js contains the summarizer functions
- manifest.json is a file that specifies basic metadata about the extension and also specifies aspects of the extension's functionality.

## Functionality
- The extension calls an API to grab the text on the page and once the "Change text" button is clicked, the extension calls a summarizer function and returns the shorter, summarized text.
- The summarizer first ranks each sentence of the content by calculating the intersection of each sentence with surrounding sentences; in other words, it looks for words that are in common amongs sentences. The score of each sentence is the sum of all of its intersections. Then, for each paragraph, find the best sentence according to the sentence ranks. Finally, it puts together the best sentence from each paragraph into its own paragraph and returns that.
- The summarizer returns the result almost instantaneously. Sometimes the API delays 3~5 seconds due to a limit on the number of calls you can make to it and returns an error. API will also return an error if the page isn't fully loaded when it's called. The extension will let user know to wait if API returns one of these errors.
- The summarizer only takes into account alphanumeric characters. All other characters are ignored.
- manifest.json is a required file for the extension. Without it, the extension will not work. This file contains the title, description, version number, reference to content scripts, default icon, and permission settings. Changes to any of these features can be done on this file.

## Known Issues
- Boilerpipe API grabs all body contents of the page, which includes title, date, author, footnotes, etc. When all of this content is passed into the summarizer, the unnecessary text gets passed in along with it, and sometimes the summarizer will include it in the summary.
- Boilerpipe API has a limit on how many times you can call to it. Too many calls will force you to wait a few seconds before calling again.
- The summarizer cannot tell the difference between a punctuation period and an end of sentence period. The summarizer separates sentences in a paragraph by looking at periods. For example, "His name is Mr. Young." will be considered to be two sentences "His name is Mr." and "Young". 

## Milestones
- Version 1.0 (Minimal Viable Product)
    - Chrome browser extension that allows user to select text and summarize it when the press the browser extension button. User first sees highlighted text in popup window, then can summarize it by pressing the button.
- Version 1.1
    - Chrome browser extension that when user clicks on the window, it automatically grabs the text on the page and user can press "change text" button to get the summary.
- Future versions
    - Make extension all browser compatible
    - Potentially add functionality to export summary to other app (i.e., Twitter, Facebook, email, etc.)
    - The text grabbed from screen ignores junk like headers and footers.
