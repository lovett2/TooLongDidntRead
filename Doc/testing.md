# TooLongDidntRead Testing Documentation

## Table of Contents
- [Tools Used](#tools-used)
- [Usage](#Usage)
- [Updating Tests](#updating-tests)
- [Adding Test Cases](#adding-test-cases)


## Tools Used
- [Jasmine 2.6.2](https://jasmine.github.io) Behavior-Driven Javascript Testing Tool

## Usage
To run test, open SpecRunner.html and run the included specs automatically. Both the source files and their respective specs are linked in the <head> of the SpecRunner.html.

## Updating Tests

If changes are made to the source code, aka either `summary.js` or `button.js`, changes will also need to be made to the source files in the Jasmine folder. If changes are made to `summary.js`, simply copying those changes to the `summary.js` file directly in the Jasmine folder. If changes are made to say `button.js`, `src/get_summaryHelper.js` will need to be modified to fit any changes for the `changeText()` function. In `get_summaryHelper.js`, `changeText()` acts nearly the same as its counterpart in `button.js` except for the fact that it accepts a string parameter instead of grabbing text from the HTML and that it will return the output.

## Adding Test Cases

If more test cases are to be added, `get_summary.js` under the spec folder will need to be appended. Following general Jasmine usage which can be found on their [website](https://jasmine.github.io), we can test the final TLDR output with the following case:

```
  it("Hello World", function() {
    expect(changeText("Hello World")).toEqual([ ]);
  });
  
```

Where the input string goes into `changeText()` and it is tested against the expected output.
