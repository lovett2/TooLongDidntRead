function changeText(input) {
    var stringInput = input;
    stringInput = stringInput.replace(/M(s|r|rs)\./g, function(m){
            return {"Mr.": "Mr",
                    "Ms.": "Ms",
                    "Mrs.": "Mrs"}[m];
    });
    var sentences_dic = get_sentences_rank(stringInput);
    return get_summary(stringInput,sentences_dic);
};
