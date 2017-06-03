
/*
How to use  summarizer:

sentences_dic = get_sentences_rank(content);
summary = get_summary(content, sentences_dic);

*/


// method for splitting a text into sentences
function split_content_to_sentences(content) {
	content = content.replace("\n", ". ");
	return content.split(". ");
}

// method for splitting a text into paragraphs
function split_content_to_paragraphs(content) {
	return content.split("\n\n");
}

// calculate intersection between 2 sentences
function sentences_intersection(sent1, sent2) {

	var s1 = sent1.split(" ");
	var s2 = sent2.split(" ");

	if (s1.length == s2.length) {
		return 0;
	}

	var commonValues = s1.slice(0)
    commonValues.filter(function(value) { 
                                   return s2.indexOf(value) > -1;
                               });

	// normalize result by avg number of words
	return commonValues.length / ((s1.length + s2.length)/2);

}

// Format a sentence - remove all non-alpahnumeric chars from the sentence
// We'll use the formatted sentence as a key in our sentences dictionary
function format_sentence(sentence) {
	sentence = sentence.replace(/[^0-9a-zA-Z]/g, '');
    return sentence
}

// Convert the content into a dictionary <k, V>
// k = The formatted sentence
// V = The rank of the sentences
function get_sentences_rank(content) {
	// split the content into sentences
	sentences = split_content_to_sentences(content);

	// calculate the intersection of every two sentences
	var n = sentences.length;
	var values = make2DArray(n);
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			if (i != j) {
				values[i][j] = sentences_intersection(sentences[i], sentences[j]);
			}
		}
	}

	// Build the sentences dictionary
	// The score of a sentence is sum of all its intersection
	var dict = {};
	for (var i = 0; i < n; i++) {
		score = 0;
		for (var j = 0; j < n; j++) {
			if (i == j) {
				continue;
			}
			score += values[i][j]
		}
		dict[format_sentence(sentences[i])] = score
	}
	return dict
}

// Return the best sentence in a paragraph
function get_best_sentence(paragraph, sentences_dic) {

	// split the paragraphs into sentences
	sentences = split_content_to_sentences(paragraph);

	// Ignore short paragraphs
	if (sentences.length < 2) {
		return "";
	}

	// Get the best sentence according to sentences dictionary
	best_sentence = "";
	max_value = 0;
	for (var i = 0; i < sentences.length; i++) {
		var s = sentences[i];
		strip_s = format_sentence(s);
		if (strip_s) {
			if (sentences_dic[strip_s] > max_value) {
				max_value = sentences_dic[strip_s];
				best_sentence = s;
			}
		}
	}
	return best_sentence;
}

// Build the summary
function get_summary(content, sentences_dic) {

	// split content into paragraphs
	var paragraphs = split_content_to_paragraphs(content);

	var summary = [];

	for (var i = 0; i < paragraphs.length; i++) {
		var p = paragraphs[i];
		sentence = get_best_sentence(p, sentences_dic).trim();
		if (sentence) {
			summary.push(sentence);
		}
	}
	return summary;
}

// Tool to make a 2D array with 0's
function make2DArray(n) {
	var arr = new Array(n);
	for (var i = 0; i < n; ++i){
		var columns = [];
		for (var j = 0; j < n; ++j){
			columns[j] = 0;
		}
		arr[i] = columns;
	}
	return arr;
}
