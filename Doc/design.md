# TooLongDidntRead Design Documentation

## Table of Contents
- [User Interface](#user-interface)
- [Design](#design)
- [Installation](#installation)
- [License](#license)

## User Interface
- dialog.html has the code that controls how the extension window looks. It references other css and javascript files that does most of the functionality.
    - background.js loads the window to display the highlighted text and summarized text.
    - button.js calls takes the highlighted text and sends it to the summarizer function.
    - content.js 
    - event.js is called onload of window popup to execute content.js
    - highlight.js finds the highlighted text
    - style.css defines the style for the window
- summary.js contains the summarizer functions
- manifest.json 
