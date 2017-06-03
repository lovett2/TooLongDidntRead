document.getElementById("cngButton").addEventListener("click", changeText);

function changeText(){
<<<<<<< HEAD
    var textBox = document.getElementById("summaryText");
    var toSummarize = textBox.innerHTML;
    toSummarize = toSummarize.replace(/M(s|r|rs)\./g, function(m){
            return {"Mr.": "Mr",
                    "Ms.": "Ms",
                    "Mrs.": "Mrs"}[m];
    });
    sentences_dic = get_sentences_rank(toSummarize);
    textBox.innerHTML = get_summary(toSummarize,sentences_dic);
=======
	var title = "TL;DR";
	var textBox = document.getElementById("summaryText");
	sentences_dic = get_sentences_rank(textBox.innerHTML);
	textBox.innerHTML = get_summary(title,
									textBox.innerHTML,
									sentences_dic);
>>>>>>> firefox
}
