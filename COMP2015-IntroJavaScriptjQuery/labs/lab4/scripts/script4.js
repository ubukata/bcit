$(function(){
	$("#editme1").editInPlace({
		callback: function(unused, enteredText) { 
			var text = "Thank you " + enteredText + " and nice to meet you, please keep going!"
			$("#callback-editme1").html(text);
			return enteredText; 
		},
		show_buttons: true
	});
	
	$("#editme2").editInPlace({
		callback: function(unused, enteredText) { return enteredText; },
		field_type: "textarea",
		textarea_rows: "15",
		textarea_cols: "200"
	});
	
	$("#editme3").editInPlace({
		callback: function(unused, enteredText) {
			return "Your rate is: " + enteredText;
		},
		field_type: "select",
		select_options: "Very Bad,Bad,Okay,Nice,Awesome"
	});
});