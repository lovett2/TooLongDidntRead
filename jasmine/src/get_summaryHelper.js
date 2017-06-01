function changeText(input) {
	var stringInput = input;
	var sentences_dic = get_sentences_rank(stringInput);
	return get_summary(stringInput,sentences_dic);
};
