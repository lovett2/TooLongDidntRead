document.getElementById("cngButton").addEventListener("click", changeText);

function changeText(){
			var textBox = document.getElementById("summaryText");
			sentences_dic = get_sentences_rank(textBox.innerHTML);
			textBox.innerHTML = get_summary(textBox.innerHTML,
											sentences_dic);
}
