//implementation of accordion - https://jqueryui.com/accordion/
$(function(){
	$("#datepicker").datepicker({
		showButtonPanel: true,
		selectOtherMonths: true,
		changeMonth: true,
		changeYear: true,
		numberOfMonths: 2,
		dateFormat: 'DD, d MM, yy',
		showOn: "button",
		buttonImage: "images/calendar.gif",
		buttonImageOnly: true,
		buttonText: "Select date"
    });
});