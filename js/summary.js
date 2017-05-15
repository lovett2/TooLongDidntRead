
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
function get_summary(title, content, sentences_dic) {

	// split content into paragraphs
	var paragraphs = split_content_to_paragraphs(content);

	// add title
	var summary = [];
	summary.push(title);

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

/*
title = "Swayy is a beautiful new dashboard for discovering and curating online content [Invites]";
content = "Lior Degani, the Co-Founder and head of Marketing of Swayy, pinged me last week when I was in California to tell me about his startup and give me beta access. I heard his pitch and was skeptical. I was also tired, cranky and missing my kids – so my frame of mind wasn’t the most positive." +
"I went into Swayy to check it out, and when it asked for access to my Twitter and permission to tweet from my account, all I could think was, “If this thing spams my Twitter account I am going to bitch-slap him all over the Internet.” Fortunately that thought stayed in my head, and not out of my mouth."
+ "One week later, I’m totally addicted to Swayy and glad I said nothing about the spam (it doesn’t send out spam tweets but I liked the line too much to not use it for this article). I pinged Lior on Facebook with a request for a beta access code for TNW readers. I also asked how soon can I write about it. It’s that good. Seriously. I use every content curation service online. It really is That Good.";

sentences_dic = get_sentences_rank(content);
summary = get_summary(title, content, sentences_dic);
console.log(summary);

console.log("Original length: ", title.length+content.length);
console.log("Summary length: ", summary.length);
*/
