class SummaryTool {
	// method for splitting a text into sentences
	split_content_to_sentences(content) {
		content = content.replace("\n", ". ");
		return content.split(". ");
	}

	// method for splitting a text into paragraphs
	split_content_to_paragraphs(content) {
		return content.split("\n\n");
	}

	// calculate intersection between 2 sentences
	sentences_intersection(sent1, sent2) {

		var s1 = sent1.split(" ");
		var s2 = sent2.split(" ");

		if (s1.length == s2.length) {
			return 0;
		}

		// find common values between sentences
		var commonValues = s1.filter(function(value) { 
                                   return s2.indexOf(value) > -1;
                               });

		// normalize result by avg number of words
		return commonValues.length / ((s1.length + s2.length)/2);

	}

	// Format a sentence - remove all non-alphbetic chars from the sentence
    // We'll use the formatted sentence as a key in our sentences dictionary
    format_sentence(sentence) {
    	
    }

}

let test = new SummaryTool();
console.log("starting...");
test.sentences_intersection("hey my name is cathy", "what is your name");
