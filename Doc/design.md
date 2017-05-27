# TooLongDidntRead Design Documentation

## Table of Contents
- [Technologies Used](#technologies-used)
- [Architectual Design](#architectual-design)
- [Functionality](#functionality)
- [Milestones](#milestones)

## Technologies Used
- Javascript
- [boiler-pipe](http://boilerpipe-web.appspot.com/): an API that provides algorithms to detect and remove the surplus "clutter" (boilerplate, templates) around the main textual content of a web page.

## Architectual Design
- dialog.html has the code that controls how the extension window looks. It references other css and javascript files that does most of the functionality.
    - background.js loads the window to display the highlighted text and summarized text.
    - button.js calls takes the highlighted text and sends it to the summarizer function.
    - content.js is the "backend" of the extension
    - event.js is called onload of window popup to execute content.js
    - highlight.js finds the highlighted text
    - style.css defines the style for the window
- summary.js contains the summarizer functions
- manifest.json is a file that specifies basic metadata about the extension and also specifies aspects of the extension's functionality.

## Functionality
- The extension calls an API to grab the text on the page and once the "Change text" button is clicked, the extension calls a summarizer function and returns the shorter, summarized text.
- The summarizer first ranks each sentence of the content by calculating the intersection of each sentence with surrounding sentences; in other words, it looks for words that are in common amongs sentences. The score of each sentence is the sum of all of its intersections. Then, for each paragraph, find the best sentence according to the sentence ranks. Finally, it puts together the best sentence from each paragraph into its own paragraph and returns that.
- The summarizer returns the result almost instantaneously.
- Normally, the API returns the page text instantaneously and the summarizer also returns the summary instantaneously. Too many calls the API at once can cause a 3 ~ 5 seconds delay to return the text, due to a limit set by the API. The API will return an error if it is called before the page is fully loaded and the extension will also let the user know to wait until the page is fully loaded.
- The summarizer only takes into account alphanumeric characters. All other characters are ignored.
- manifest.json is a required file for the extension. Without it, the extension will not work. This file contains the title, description, version number, reference to content scripts, default icon, and permission settings. Changes to any of these features can be done on this file.

## Milestones
- Version 1.0
    - Chrome browser extension that allows user to select text and summarize it when the press the browser extension button. User first sees highlighted text in popup window, then can summarize it by pressing the button.
- Version 1.1
    - Chrome browser extension that when user clicks on the window, it automatically grabs the text on the page and user can press "change text" button to get the summary.
