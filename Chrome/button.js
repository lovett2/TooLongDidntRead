document.getElementById("cngButton").addEventListener("click", changeText);

function changeText(){
			var title = "TL;DR";
			var textBox = document.getElementById("summaryText");
			sentences_dic = get_sentences_rank(textBox.innerHTML);
			textBox.innerHTML  = get_summary(title,
										textBox.innerHTML,
										sentences_dic);
	
}
