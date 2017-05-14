
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

	// find common values between sentences
	var commonValues = s1.filter(function(value) { 
    						return s2.indexOf(value) > -1; });

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
			values[i][j] = sentences_intersection(sentences[i], sentences[j]);
		}
	}

	// Build the sentences dictionary
	// The score of a sentence is sum of all its intersection

}

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


