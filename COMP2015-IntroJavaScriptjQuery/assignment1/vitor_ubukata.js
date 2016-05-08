window.onload = function(){
	if(checkDisponobility()){
		init();
	}
	
};

function init(){
	//All of the paragraphs in the divs with class “change” will turn their font color to red when the mouse is on them, and change it to black when the mouse is off them.
	var divsChange = document.getElementsByClassName("change");
	
	for(var i = 0; i < divsChange.length; i++){
		var paragraphs = divsChange[i].getElementsByTagName("p");
		for(var j = 0; j < paragraphs.length; j++){
			paragraphs[j].onmouseover = function(){
				this.style.color = "red";
			};
			paragraphs[j].onmouseout = function(){
				this.style.color = "black";
			};
		}
	}
	
	//Any paragraph on the page gets a black dashed 1px wide border when it gets clicked; the border goes away when clicked again; in other words, the border gets toggled on or off each time it is clicked.
	var paragraphs = document.getElementsByTagName("p");
	
	for(var j = 0; j < paragraphs.length; j++){
		paragraphs[j].onclick = function(){
			if(this.style.border){
				this.style.border = "";
			}
			else{
				this.style.border = "black dashed 1px";
			}
		};
	}
	
	//Any image in a div whose ID is “top” or “middle” gets its display style set to “none” when it is double clicked.
	var divTop = document.getElementById("top");
	var divMiddle = document.getElementById("middle");
	var divsItem3 = [ divTop, divMiddle ];
	
	for(var i = 0; i < divsItem3.length; i++){
		var images = divsItem3[i].getElementsByTagName("img");
		for(var j = 0; j < images.length; j++){
			images[j].ondblclick = function(){
				this.style.display = "none";
			};
		}
	}
	
	//The bottom div’s links should not work if they contain the word “nhl” in their href attribute.
	var links = document.getElementById("bottom").getElementsByTagName("a");
	for(var i = 0; i < links.length; i++){
		if(links[i].href.indexOf("nhl") != -1){
			links[i].onclick = function(){
				return false;
			};
		}
	}
}

function checkDisponobility(){
	return document && document.getElementsByClassName && document.getElementById && document.getElementsByTagName;
}