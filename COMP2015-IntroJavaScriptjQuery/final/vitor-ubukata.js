
window.onload = function(){
	if(window.document){
		var paragraphs = window.document.getElementsByTagName("p");
		for(var i = 0; i < paragraphs.length; i++){
			paragraphs[i].style.fontSize = "15px";
		}
	}
	
	var dateOne = new Date(2010, 8, 19);
	var dateTwo = new Date(2011, 7, 20);
	var diff = dateTwo - dateOne;
	var seconds = diff/1000;
	var minutes = seconds/60;
	console.log(minutes);
};