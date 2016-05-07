$(function(){
	//Each image on the page must get a red solid border when it is clicked
	$("img").click(function(){
		$(this).css("border", "red solid 1px");
	});
	
	//Each image in div1 must be resized to 100px width when the mouse is over it
	$("#div1").find("img").mouseover(function(){
		$(this).css("width", "100px");
	});
	
	//Each paragraph must get blue text color when it is double clicked
	$("p").dblclick(function(){
		$(this).css("color", "blue");
	});
	
	//Each paragraph in div3 must get a yellow background color when the mouse is over it
	$("#div3").find("p").mouseover(function(){
		$(this).css("backgroundColor", "yellow");
	});
});