var timerImageGrow = null;
var timerImageMove = null;

function createImages(){
	for(var i = 0; i < 15; i++){
		var img = document.createElement("img");
		img.src = "images/" + i + ".jpg";
		img.alt = i + " image";
		img.onclick = move;
		setImageCss(img);
		document.getElementById("0").appendChild(img);
	}
}

function createDivs(){
	var div1 = document.createElement("div");
	var div2 = document.createElement("div");
	var div3 = document.createElement("div");
	var div4 = document.createElement("div");
	var div5 = document.createElement("div");
	var div6 = document.createElement("div");
	
	var h1div1 = document.createElement("h1");
	h1div1.appendChild(document.createTextNode("Image Liker by Vitor Ubukata"));
	
	var reset1div6 = document.createElement("input");
	reset1div6.type = "button";
	reset1div6.value = "reset";
	reset1div6.onclick = resetAll;
	div6.appendChild(reset1div6);
	
	div2.id = "0";
	div3.id = "1";
	div4.id = "2";
	div5.id = "3";
	
	var h2div2 = document.createElement("h2");
	h2div2.class = "instructions";
	h2div2.appendChild(document.createTextNode("All Images"));
	div2.appendChild(h2div2);
	var h2div3 = document.createElement("h2");
	h2div3.class = "instructions";
	h2div3.appendChild(document.createTextNode("Images I Like"));
	div3.appendChild(h2div3);
	var h2div4 = document.createElement("h2");
	h2div3.class = "instructions";
	h2div4.appendChild(document.createTextNode("Images I Hate"));
	div4.appendChild(h2div4);
	var h2div5 = document.createElement("h2");
	h2div5.class = "instructions";
	h2div5.appendChild(document.createTextNode("Favorites of All Time"));
	div5.appendChild(h2div5);
	
	document.body.appendChild(div1);
	document.body.appendChild(div2);
	document.body.appendChild(div3);
	document.body.appendChild(div4);
	document.body.appendChild(div5);
	document.body.appendChild(div6);
	createImages();
	
	var img = document.createElement("img");
	img.src = "images/move.jpg";
	img.alt = "I move just click";
	img.style.width = "100px";
	img.style.margin = "4px";
	img.style.border = "red solid 1px";
	img.style.position = "relative";
	img.style.top = "10px";
	img.onclick = moveImage;
	img.onmouseover = growElement;
	img.onmouseout = stopGrowElement;
	document.body.appendChild(img);
}

function move(){
	if(this.nextSibling != null && this.nextSibling.nextSibling != null){
		//this.parentNode.id
		this.parentNode.insertBefore(this, this.nextSibling.nextSibling);
	}
	else if (this.nextSibling != null){
		this.parentNode.appendChild(this);
	}
	else{
		if(this.parentNode.nextSibling.hasAttribute("id")){
			this.parentNode.nextSibling.insertBefore(this, this.parentNode.nextSibling.childNodes[1]);
		}
		else{
			document.getElementById("0").insertBefore(this, document.getElementById("0").childNodes[1]);
		}
	}
}

function setImageCss(img){
	img.style.width = "120px";
	img.style.margin = "4px";
	img.style.border = "red solid 1px";
}

function resetAll(){
	var divs = document.getElementsByTagName("div");
	
	for(var i = 0; i < divs.length; i++){
		if(divs[i].childNodes.length > 0){
			if(divs[i].childNodes[0].tagName.toLowerCase() == "h2"){
				while(divs[i].childNodes.length > 1){
					divs[i].removeChild(divs[i].childNodes[1]);
				}
			}
		}
	}
	
	createImages();
}

function growElement(){
	var imgToGrow = this;
	timerImageGrow = setInterval(function(){imgToGrow.style.width = parseInt(imgToGrow.style.width) + 1 + 'px';}, 100);
}

function stopGrowElement(){
	if(timerImageGrow != null){
		clearInterval(timerImageGrow);
		timerImageGrow = null;
	}
}

function moveImage(){
	if(timerImageMove == null){
		var imgToMove = this;
		timerImageMove = setInterval(function(){imgToMove.style.top = parseInt(imgToMove.style.top) + 1 + 'px';}, 100);
	}
	else{
		clearInterval(timerImageMove);
		timerImageMove = null;
	}
}

window.onload = function(){
	createDivs();
};