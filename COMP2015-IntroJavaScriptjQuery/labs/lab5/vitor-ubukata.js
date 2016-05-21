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
	
	var h1div1 = document.createElement("h1");
	h1div1.appendChild(document.createTextNode("Image Liker by Vitor Ubukata"));
	
	var reset1div5 = document.createElement("input");
	reset1div5.type = "button";
	reset1div5.value = "reset";
	reset1div5.onclick = resetAll;
	div5.appendChild(reset1div5);
	
	div2.id = "0";
	div3.id = "1";
	div4.id = "2";
	
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
	
	document.body.appendChild(div1);
	document.body.appendChild(div2);
	document.body.appendChild(div3);
	document.body.appendChild(div4);
	document.body.appendChild(div5);
	createImages();
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
		var actualDiv = parseInt(this.parentNode.id);
		if(actualDiv + 1 > 2){
			actualDiv = 0;
		}
		else{
			actualDiv++;
		}
		document.getElementById(actualDiv).insertBefore(this, document.getElementById(actualDiv).childNodes[1]);
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

window.onload = function(){
	createDivs();
};