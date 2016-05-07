window.onload = function(){
	//Each image on the page must get a red solid border when it is clicked
	var images = document.images;
	for(var i = 0; i < images.length; i++){
		images[i].onclick = function(){
			this.style.border = "red solid 1px";
		}
	}
	
	//Each image in div1 must be resized to 100px width when the mouse is over it
	var imagesDiv1 = document.getElementById("div1").getElementsByTagName("img");
	function resizeImageTo100(){
		this.style.width = "100px";
	}
	for(var i = 0; i < imagesDiv1.length; i++){
		imagesDiv1[i].onmouseover = resizeImageTo100;
	}
	
	//Each paragraph must get blue text color when it is double clicked
	var paragraphs = document.getElementsByTagName("p");
	for(var i = 0; i < paragraphs.length; i++){
		paragraphs[i].ondblclick = function(){
			this.style.color = "blue";
		}
	}
	
	//Each paragraph in div3 must get a yellow background color when the mouse is over it
	var paragraphDiv3 = document.getElementById("div3").getElementsByTagName("p");
	function changeBackgroundColorToYellow(){
		this.style.backgroundColor = "yellow";
	}
	for(var i = 0; i < paragraphDiv3.length; i++){
		paragraphDiv3[i].onmouseover = changeBackgroundColorToYellow;
	}
};