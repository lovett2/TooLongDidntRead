document.getElementById("cngButton").addEventListener("click", changeText);

$.get('test.txt', function(data) {
		document.getElementById("summaryText").innerHTML=data
}, 'text');


function changeText(){
			var title = "";
			var textBox = document.getElementById("summaryText");
			sentences_dic = get_sentences_rank(textBox.innerHTML);
			textBox.innerHTML = get_summary(title, 
											textBox.innerHTML,
											sentences_dic);


}
	
