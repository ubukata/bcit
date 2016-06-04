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