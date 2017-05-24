# TooLongDidntRead Design Documentation

## Table of Contents
- [User Interface](#user-interface)
- [Functionality](#functionality)
- [Milestones] (#milestones)

## User Interface
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
- The extension grabs highlighted text on a webpage and once the "Change text" button is clicked, the extension calls a summarizer function and returns the shorter, summarized text.
- The summarizer first ranks each sentence of the content by calculating the intersection of each sentence with surrounding sentences; in other words, it looks for words that are in common amongs sentences. The score of each sentence is the sum of all of its intersections. Then, for each paragraph, find the best sentence according to the sentence ranks. Finally, it puts together the best sentence from each paragraph into its own paragraph and returns that.
- The summarizer returns the result almost instantaneously.
- If the user clicks on "Change text" without any text highlighted, it will tell the user to highlight the text. If the highlighted text is only one sentence, the summarizer will not return anything.
- The summarizer only takes into account alphanumeric characters. All other characters are ignored.
- manifest.json is a required file for the extension. Without it, the extension will not work. This file contains the title, description, version number, reference to content scripts, default icon, and permission settings. Changes to any of these features can be done on this file.
