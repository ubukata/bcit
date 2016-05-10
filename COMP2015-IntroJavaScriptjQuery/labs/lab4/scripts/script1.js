//implementation of accordion - https://jqueryui.com/accordion/
$(function(){
    $( "#accordion" )
      .accordion({
        header: "> div > h3"
      })
      .sortable({
        axis: "y",
        handle: "h3",
        stop: function( event, ui ) {
          ui.item.children( "h3" ).triggerHandler( "focusout" );
          $( this ).accordion( "refresh" );
        }
      });
});