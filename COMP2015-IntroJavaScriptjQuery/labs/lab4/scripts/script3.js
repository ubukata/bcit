$(function()
	{
		$.stylesheetInit();
		$.stylesheetSwitch("style1");
		
		$('.styleswitch').bind(
			'click',
			function(e)
			{
				$.stylesheetSwitch(this.getAttribute('rel'));
				return false;
			}
		);
	}
);