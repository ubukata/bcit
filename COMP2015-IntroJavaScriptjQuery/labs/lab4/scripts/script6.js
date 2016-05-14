$(function(){
	$( document ).tooltip({
      items: "a",
      content: function() {
        var element = $( this );
        if ( element.is( "a" ) && element.hasClass("tooltip") ) {
			if(element.is("[data-reference]")){
				var html = $("#" + element.data("reference")).html();
				return html;
			}
			else if ( element.is( "[title]" ) ) {
			  return element.attr( "title" );
			}
			else {
			  return element.text();
			}
        }
      }
    });
	
	$(".container").eq(5).find("a").each(function(){
		$(this).on("click", function(e){
			e.stopPropagation();
			e.preventDefault();
			e.stopImmediatePropagation();
		});
	});
});