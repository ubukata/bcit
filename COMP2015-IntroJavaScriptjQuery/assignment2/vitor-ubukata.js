/*
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
*/

function moveOnce(){
	if(this.getAttribute("moved") != undefined){
		return;
	}
	else{
		var div = this.parentNode;
		div.insertBefore(this, div.childNodes[0]);
		this.setAttribute("moved", "true");
	}
}

function init(){
	addEvents();
}

var timer1 = null, timer2 = null;

function moveImage(){
	if(this.getAttribute("timer") === "timer1"){
		if(timer1 == null){
			var imgToMove = this;
			var timeTimer1 = parseInt(this.getAttribute("movespeed"));
			timer1 = setInterval(function(){imgToMove.style.left = parseInt(imgToMove.style.left) + 1 + 'px';}, timeTimer1);
		}
		else{
			clearInterval(timer1);
			timer1 = null;
		}
	}
	else{
		if(timer2 == null){
			var imgToMove = this;
			var timeTimer2 = parseInt(this.getAttribute("movespeed"));
			timer2 = setInterval(function(){imgToMove.style.left = parseInt(imgToMove.style.left) + 1 + 'px';}, timeTimer2);
		}
		else{
			clearInterval(timer2);
			timer2 = null;
		}
	}
}

function addEvents(){
	document.getElementsByTagName("body")[0].ondblclick = function (){
		document.body.innerHTML = ''; 
		var div0 = document.createElement("div");
		for(var i = 0; i < 5; i++){
			var img = document.createElement("img");
			img.src = "images/" + i + ".jpg";
			img.alt = i + " image";
			img.onclick = moveOnce;
			div0.appendChild(img);
		}
		
		document.body.appendChild(div0);
		
		var div1 = document.createElement("div");
		var button0 = document.createElement("input");
		button0.type = "button";
		button0.value = "Button";
		//button0.onclick = resetAll;
		div1.appendChild(button0);
		
		document.body.appendChild(div1);
		
		var img5 = document.createElement("img");
		img5.src = "images/5.jpg";
		img5.alt = "5 image";
		img5.setAttribute("movespeed", 200);
		img5.setAttribute("timer", "timer1");
		img5.onclick = moveImage;
		img5.style.left = "10px";
		img5.style.position = "relative";
		document.body.appendChild(img5);
		var br = document.createElement("br");
		document.body.appendChild(br);
		
		var img6 = document.createElement("img");
		img6.src = "images/6.jpg";
		img6.alt = "6 image";
		img6.setAttribute("movespeed", 100);
		img6.setAttribute("timer", "timer2");
		img6.style.left = "10px";
		img6.style.position = "relative";
		img6.onclick = moveImage;
		document.body.appendChild(img6);
	};
	
	$(window.document).on("click", "input[type='button']", function(e){
		$("img").css({"border-color": "red", 
             "border-width":"1px", 
             "border-style":"solid"});
	});
}

window.onload = function(){
	init();
};